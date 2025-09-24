import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import sergeantImage from '@/assets/sergeant-testimonial.jpg';

const testimonials = [
  {
    name: "Seržant M. Rodriguez",
    rank: "Španielska armáda",
    avatar: sergeantImage,
    fallback: "MR",
    rating: 5,
    text: "Konečne, taxi služba, ktorá to chápe. Profesionálna, diskrétna a poznajú všetky dobré tapas miesta v Banskej Bystrici!",
    bgColor: "bg-military-green",
  },
  {
    name: "Kapitán A. García",
    rank: "Španielske letectvo",
    avatar: null,
    fallback: "AG",
    rating: 5,
    text: "Použil som ich na večer v Zvolene. Vodič čakal, kým sme si vychutnali večeru, potom nás dostal späť na základňu bezpečne. Vojenská efektivita!",
    bgColor: "bg-military-blue",
  },
  {
    name: "Poručík C. Fernández",
    rank: "Španielske námorníctvo",
    avatar: null,
    fallback: "CF",
    rating: 5,
    text: "Najlepšia investícia do voľného času. Žiadne starosti s riadením po pár cervezách. ¡Excelente servicio!",
    bgColor: "bg-military-navy",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient-military">
            Čo hovoria naši španielski vojenskí bratia
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Už viac ako 200 španielskych vojenských pracovníkov dôveruje TaxiForce
          </p>
        </div>

        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="
                bg-card/80 backdrop-blur-md border-l-4 border-secondary
                hover:border-l-primary transition-all duration-300
                hover-military slide-up
              "
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Avatar className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-secondary">
                    {testimonial.avatar && (
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    )}
                    <AvatarFallback className={`${testimonial.bgColor} text-white font-bold`}>
                      {testimonial.fallback}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex mb-1.5 sm:mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-secondary text-lg sm:text-xl">⭐</span>
                      ))}
                    </div>

                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-secondary font-medium">{testimonial.rank}</p>
                  </div>
                </div>

                <blockquote className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <div className="inline-flex items-center gap-2.5 sm:gap-4 bg-secondary/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-secondary/30 text-xs sm:text-sm">
            <span className="text-secondary font-bold">Hodnotenie: 4.9/5</span>
            <div className="w-px h-4 bg-secondary/30" />
            <span className="text-secondary font-bold">200+ spokojných vojakov</span>
            <div className="w-px h-4 bg-secondary/30" />
            <span className="text-secondary font-bold">NATO overené</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;