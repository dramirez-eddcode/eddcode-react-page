// components/sections/FAQ.tsx - Sección de preguntas frecuentes con acordeón
'use client'
import React, { useState } from 'react'
import { useTranslation } from '@/lib/useTranslation'
import { useSectionTracking } from '@/components/analytics/useAnalytics'
import { trackEvent } from '@/components/analytics/gtag'

interface FAQItem {
  id: string
}

export const FAQ: React.FC = () => {
  const { t } = useTranslation()
  const sectionRef = useSectionTracking('faq', 0.3)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqItems: FAQItem[] = [
    { id: 'services' },
    { id: 'technologies' },
    { id: 'timeline' },
    { id: 'international' },
    { id: 'support' },
    { id: 'payment' },
  ]

  const handleToggle = (index: number, questionId: string) => {
    const newIndex = openIndex === index ? null : index
    setOpenIndex(newIndex)

    if (newIndex !== null) {
      trackEvent('faq_expand', {
        event_category: 'engagement',
        faq_question: questionId,
        faq_index: index
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="faq-title"
            className="
              text-3xl md:text-4xl lg:text-5xl font-bold mb-6
              bg-gradient-to-r from-white via-white to-white/70
              bg-clip-text text-transparent
            "
          >
            {t('faq.title')}
          </h2>
          <p className="text-lg md:text-xl text-fg-muted max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const question = t(`faq.items.${item.id}.question`)
            const answer = t(`faq.items.${item.id}.answer`)

            return (
              <div
                key={item.id}
                className={`
                  rounded-2xl ring-1 transition-all duration-300
                  ${isOpen
                    ? 'bg-bg-card/80 ring-brand-primary/30'
                    : 'bg-bg-card/40 ring-white/10 hover:ring-white/20'
                  }
                `}
              >
                <button
                  onClick={() => handleToggle(index, item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-medium text-white pr-4">
                    {question}
                  </span>
                  <span
                    className={`
                      flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                      transition-all duration-300
                      ${isOpen
                        ? 'bg-brand-primary text-white rotate-180'
                        : 'bg-white/10 text-fg-muted'
                      }
                    `}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-6 pb-6 text-fg-muted leading-relaxed">
                    {answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-fg-muted mb-4">
            {t('faq.moreQuestions')}
          </p>
          <a
            href="#contacto"
            className="
              inline-flex items-center gap-2 text-brand-primary hover:text-white
              transition-colors font-medium
            "
          >
            {t('faq.contactUs')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
