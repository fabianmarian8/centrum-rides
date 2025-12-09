'use client';

import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    heading: 'What our riders say',
    subheading: 'Real feedback from military personnel who use our service regularly',
    testimonials: [
      {
        name: 'Miguel R.',
        role: 'Spanish Army',
        text: 'Finally a taxi that understands our schedule. Professional, always on time, and they know all the good spots in town.',
        rating: 5,
        initials: 'MR',
        color: 'bg-primary',
      },
      {
        name: 'Antonio G.',
        role: 'Air Force',
        text: 'Used them for a night out in Zvolen. Driver waited while we had dinner, then got us back to base safely. Exactly what we needed.',
        rating: 5,
        initials: 'AG',
        color: 'bg-secondary',
      },
      {
        name: 'Carlos F.',
        role: 'Navy',
        text: 'No worries about driving after a few beers. They are reliable, discreet, and the price is fair. Highly recommend.',
        rating: 5,
        initials: 'CF',
        color: 'bg-accent',
      },
    ],
    stats: [
      { value: '200+', label: 'Happy riders' },
      { value: '4.9', label: 'Average rating' },
      { value: '24/7', label: 'Available' },
    ],
  },
  es: {
    heading: 'Lo que dicen nuestros pasajeros',
    subheading: 'Opiniones reales del personal militar que usa nuestro servicio regularmente',
    testimonials: [
      {
        name: 'Miguel R.',
        role: 'Ejército de Tierra',
        text: 'Por fin un taxi que entiende nuestros horarios. Profesional, siempre puntual, y conocen todos los buenos sitios de la ciudad.',
        rating: 5,
        initials: 'MR',
        color: 'bg-primary',
      },
      {
        name: 'Antonio G.',
        role: 'Ejército del Aire',
        text: 'Los usé para salir por Zvolen. El conductor esperó mientras cenábamos y nos llevó de vuelta a la base con seguridad.',
        rating: 5,
        initials: 'AG',
        color: 'bg-secondary',
      },
      {
        name: 'Carlos F.',
        role: 'Armada',
        text: 'Sin preocupaciones por conducir después de unas cervezas. Son fiables, discretos y el precio es justo. Muy recomendable.',
        rating: 5,
        initials: 'CF',
        color: 'bg-accent',
      },
    ],
    stats: [
      { value: '200+', label: 'Pasajeros satisfechos' },
      { value: '4.9', label: 'Valoración media' },
      { value: '24/7', label: 'Disponible' },
    ],
  },
} as const;

const TestimonialsSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-8">
          <h2 className="heading-lg text-foreground mb-2">{content.heading}</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">{content.subheading}</p>
        </div>

        {/* Testimonials - horizontal scroll on mobile */}
        <div className="flex gap-3 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-3 sm:gap-4 mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {content.testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial-card min-w-[280px] sm:min-w-0 p-4 sm:p-5">
              {/* Stars */}
              <div className="flex gap-0.5 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground text-sm sm:text-base mb-3 leading-relaxed line-clamp-4 sm:line-clamp-none">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full ${testimonial.color} text-white font-bold flex items-center justify-center text-xs`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-6 sm:gap-12">
          {content.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-primary mb-0.5">{stat.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
