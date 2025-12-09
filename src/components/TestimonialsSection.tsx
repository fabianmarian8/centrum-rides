'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import sergeantImage from '@/assets/sergeant-testimonial.webp';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    heading: 'What our Spanish military partners say',
    subheading: 'More than 200 Spanish service members rely on TaxiForce.',
    stats: ['Rating: 4.9/5', '200+ satisfied soldiers', 'NATO verified'],
    testimonials: [
      {
        name: 'Sergeant M. Rodriguez',
        rank: 'Spanish Army',
        avatar: sergeantImage,
        fallback: 'MR',
        rating: 5,
        text: 'Finally a taxi service that gets it. Professional, discreet and they know every great tapas spot in Banská Bystrica!',
        bgColor: 'bg-military-green',
      },
      {
        name: 'Captain A. García',
        rank: 'Spanish Air Force',
        avatar: null,
        fallback: 'AG',
        rating: 5,
        text: 'Used them for an evening in Zvolen. The driver waited while we enjoyed dinner, then brought us back to base safely. Military efficiency!',
        bgColor: 'bg-military-blue',
      },
      {
        name: 'Lieutenant C. Fernández',
        rank: 'Spanish Navy',
        avatar: null,
        fallback: 'CF',
        rating: 5,
        text: 'Best investment for downtime. No worries about driving after a few cervezas. ¡Excellent service!',
        bgColor: 'bg-military-navy',
      },
    ],
  },
  es: {
    heading: 'Opiniones de nuestros aliados españoles',
    subheading: 'Más de 200 militares españoles confían en TaxiForce.',
    stats: ['Valoración: 4.9/5', '200+ soldados satisfechos', 'Verificado por la OTAN'],
    testimonials: [
      {
        name: 'Sargento M. Rodriguez',
        rank: 'Ejército de Tierra',
        avatar: sergeantImage,
        fallback: 'MR',
        rating: 5,
        text: 'Por fin un taxi que lo entiende. Profesional, discreto y conocen todos los mejores sitios de tapas en Banská Bystrica.',
        bgColor: 'bg-military-green',
      },
      {
        name: 'Capitán A. García',
        rank: 'Ejército del Aire',
        avatar: null,
        fallback: 'AG',
        rating: 5,
        text: 'Los contraté para una noche en Zvolen. El chofer esperó mientras cenábamos y nos llevó de vuelta a la base con seguridad. ¡Eficiencia militar!',
        bgColor: 'bg-military-blue',
      },
      {
        name: 'Teniente C. Fernández',
        rank: 'Armada Española',
        avatar: null,
        fallback: 'CF',
        rating: 5,
        text: 'La mejor inversión para el tiempo libre. Sin preocupaciones por conducir después de unas cervezas. ¡Servicio excelente!',
        bgColor: 'bg-military-navy',
      },
    ],
  },
} as const;

const TestimonialsSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient-military">
            {content.heading}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">{content.subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {content.testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="
                bg-card/80 backdrop-blur-md border-l-4 border-secondary
                hover:border-l-primary transition-all duration-300
                hover-military slide-up
              "
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <Avatar className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-secondary">
                    {testimonial.avatar && (
                      <AvatarImage
                        src={testimonial.avatar.src}
                        alt={`${testimonial.name} - ${testimonial.rank}`}
                      />
                    )}
                    <AvatarFallback className={`${testimonial.bgColor} text-white font-bold`}>
                      {testimonial.fallback}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex mb-1 sm:mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-secondary text-base sm:text-xl">⭐</span>
                      ))}
                    </div>

                    <h4 className="font-semibold sm:font-bold text-foreground text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-secondary font-medium">{testimonial.rank}</p>
                  </div>
                </div>

                <blockquote className="text-muted-foreground italic leading-relaxed text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-secondary/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-secondary/30 text-xs sm:text-sm">
            {content.stats.map((stat, index) => (
              <span key={stat} className="flex items-center gap-2 text-secondary font-semibold sm:font-bold">
                {stat}
                {index < content.stats.length - 1 && (
                  <span className="hidden sm:inline w-px h-4 bg-secondary/30" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
