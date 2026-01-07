// components/sections/Testimonios.tsx - Sección de testimonios de clientes
'use client'
import React, { useState, useEffect } from 'react'
import { TexturedCard } from '../ui/TexturedCard'
import { useTranslation } from '@/lib/useTranslation'
import { useSectionTracking } from '@/components/analytics/useAnalytics'
import { trackEvent } from '@/components/analytics/gtag'
import { PromoContactForm } from '../ui/PromoContactForm'

interface Testimonial {
  id: string
  rating: number
  isPromo?: boolean
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-1" role="img" aria-label={`${rating} de 5 estrellas`}>
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-5 h-5 ${star <= rating ? 'text-amber-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

export const Testimonios: React.FC = () => {
  const { t } = useTranslation()
  const sectionRef = useSectionTracking('testimonios', 0.3)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPromoFormOpen, setIsPromoFormOpen] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null)

  // 2 clientes reales + 3 slots promocionales
  const testimonials: Testimonial[] = [
    { id: 'vuelatour', rating: 5 },
    { id: 'jetset', rating: 5 },
    { id: 'promo1', rating: 5, isPromo: true },
    { id: 'promo2', rating: 5, isPromo: true },
    { id: 'promo3', rating: 5, isPromo: true },
  ]

  const handlePromoClick = (slotNumber: number) => {
    setSelectedSlot(slotNumber)
    setIsPromoFormOpen(true)
    trackEvent('promo_slot_click', {
      event_category: 'testimonials',
      slot_number: slotNumber,
      discount: '25%'
    })
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Track testimonial change
  const handleTestimonialChange = (index: number) => {
    trackEvent('testimonial_view', {
      event_category: 'engagement',
      testimonial_id: testimonials[index].id,
      testimonial_index: index,
      interaction_type: 'manual'
    })
    setActiveIndex(index)
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent"
      id="testimonios"
      aria-labelledby="testimonios-title"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="testimonios-title"
            className="
              text-3xl md:text-4xl lg:text-5xl font-bold mb-6
              bg-gradient-to-r from-white via-white to-white/70
              bg-clip-text text-transparent
            "
          >
            {t('testimonials.title')}
          </h2>
          <p className="text-lg md:text-xl text-fg-muted max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          {testimonials[activeIndex].isPromo ? (
            // Slot promocional
            <TexturedCard variant="default" className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Promo Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>

                {/* Promo Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    <span className="px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 ring-1 ring-green-500/30 animate-pulse">
                      25% {t('testimonials.promo.discount')}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {t('testimonials.promo.title')}
                  </h3>

                  <p className="text-lg text-fg-soft leading-relaxed mb-6">
                    {t('testimonials.promo.description')}
                  </p>

                  <button
                    onClick={() => handlePromoClick(activeIndex - 1)}
                    className="px-8 py-3 rounded-lg font-medium bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200"
                  >
                    {t('testimonials.promo.cta')}
                  </button>
                </div>
              </div>
            </TexturedCard>
          ) : (
            // Testimonial real
            <TexturedCard variant="purple" className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-primary to-accent-purple-glow flex items-center justify-center text-3xl font-bold text-white">
                    {String(t(`testimonials.items.${testimonials[activeIndex].id}.name`)).charAt(0)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <StarRating rating={testimonials[activeIndex].rating} />

                  <blockquote className="mt-4 text-lg md:text-xl text-fg-soft leading-relaxed italic">
                    &ldquo;{t(`testimonials.items.${testimonials[activeIndex].id}.quote`)}&rdquo;
                  </blockquote>

                  <div className="mt-6">
                    <p className="font-semibold text-white">
                      {t(`testimonials.items.${testimonials[activeIndex].id}.name`)}
                    </p>
                    <p className="text-fg-muted text-sm">
                      {t(`testimonials.items.${testimonials[activeIndex].id}.role`)} · {t(`testimonials.items.${testimonials[activeIndex].id}.company`)}
                    </p>
                  </div>
                </div>
              </div>
            </TexturedCard>
          )}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${index === activeIndex
                  ? testimonial.isPromo ? 'bg-green-500 w-8' : 'bg-brand-primary w-8'
                  : testimonial.isPromo ? 'bg-green-500/30 hover:bg-green-500/50' : 'bg-white/20 hover:bg-white/40'
                }
              `}
              aria-label={testimonial.isPromo ? `Ver promoción ${index - 1}` : `Ver testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-white/5 ring-1 ring-white/10">
            <p className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">+50</p>
            <p className="text-fg-muted text-sm">{t('testimonials.stats.projects')}</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 ring-1 ring-white/10">
            <p className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">5.0</p>
            <p className="text-fg-muted text-sm">{t('testimonials.stats.rating')}</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 ring-1 ring-white/10">
            <p className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">98%</p>
            <p className="text-fg-muted text-sm">{t('testimonials.stats.satisfaction')}</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 ring-1 ring-white/10">
            <p className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">+5</p>
            <p className="text-fg-muted text-sm">{t('testimonials.stats.years')}</p>
          </div>
        </div>
      </div>

      {/* Formulario de contacto promocional */}
      <PromoContactForm
        isOpen={isPromoFormOpen}
        onClose={() => {
          setIsPromoFormOpen(false)
          setSelectedSlot(null)
        }}
        slotNumber={selectedSlot}
      />
    </section>
  )
}
