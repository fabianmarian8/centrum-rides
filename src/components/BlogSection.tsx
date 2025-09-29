import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogPost {
  city: string;
  title: string;
  excerpt: string;
  highlights: string[];
  readTime: string;
}

const translations: Record<'en' | 'es', { heading: string; description: string; posts: BlogPost[] }> = {
  en: {
    heading: 'TaxiForce blog',
    description:
      'Fresh recommendations for downtime in Zvolen and Banská Bystrica — from restaurants and bars to cultural highlights curated for military troops.',
    posts: [
      {
        city: 'Zvolen',
        title: 'First night in Zvolen: castle, square and local bars',
        excerpt:
          'Combine culture with relaxation — visit Zvolen Castle, stroll along SNP Square and finish the evening in Quadra or Retro.',
        highlights: ['Historic centre', 'Craft cocktails', 'Night taxi back to base'],
        readTime: '4 min read',
      },
      {
        city: 'Banská Bystrica',
        title: 'Evening scene in Banská Bystrica for the military contingent',
        excerpt:
          'Europa SC, the main square and lively streets — Ministry of Fun, Klub 77 or Bar Murgaš offer music and space for larger groups.',
        highlights: ['Nightlife tips', 'Safe transfers', 'Group reservations'],
        readTime: '5 min read',
      },
      {
        city: 'Gastro picks',
        title: 'Restaurants with Mediterranean menus and late kitchens',
        excerpt:
          'Try tapas at Bistro Chef in Zvolen, Italian classics at Alžbeta and Slovak specialities at Bystrická Klubovňa — all vetted by the community.',
        highlights: ['Tapas & wine', 'Open after 22:00', 'Table reservations available'],
        readTime: '3 min read',
      },
      {
        city: 'Lešť Base',
        title: 'How to Get Taxi from Lešť Base to Zvolen',
        excerpt: 'Complete guide for NATO soldiers on reliable taxi service from Lešť military base to Zvolen. English speaking drivers available 24/7.',
        highlights: ['Step-by-step booking', 'English speaking drivers', '24/7 availability'],
        readTime: '6 min read',
      },
      {
        city: 'Central Slovakia',
        title: 'Military Friendly Taxi Service Central Slovakia',
        excerpt: 'Comprehensive taxi service designed specifically for military personnel stationed in central Slovakia NATO facilities.',
        highlights: ['Military protocols', 'Security clearance', 'Central Slovakia coverage'],
        readTime: '5 min read',
      },
    ],
  },
  es: {
    heading: 'Blog de TaxiForce',
    description:
      'Recomendaciones actualizadas para el tiempo libre en Zvolen y Banská Bystrica: restaurantes, bares y planes culturales para las tropas militares.',
    posts: [
      {
        city: 'Zvolen',
        title: 'Primera noche en Zvolen: castillo, plaza y bares locales',
        excerpt:
          'Une cultura y relax: visita el Castillo de Zvolen, pasea por la Plaza SNP y termina la noche en Quadra o Retro.',
        highlights: ['Centro histórico', 'Cócteles de autor', 'Taxi nocturno de regreso a la base'],
        readTime: 'Lectura de 4 min',
      },
      {
        city: 'Banská Bystrica',
        title: 'Escena nocturna en Banská Bystrica para el contingente militar',
        excerpt:
          'Europa SC, la plaza principal y calles llenas de locales: Ministry of Fun, Klub 77 o Bar Murgaš ofrecen música y espacio para grupos grandes.',
        highlights: ['Consejos de nightlife', 'Traslado seguro', 'Reservas para grupos'],
        readTime: 'Lectura de 5 min',
      },
      {
        city: 'Gastro',
        title: 'Restaurantes con menú mediterráneo y cocina hasta tarde',
        excerpt:
          'Prueba tapas en Bistro Chef de Zvolen, clásicos italianos en Alžbeta y especialidades eslovacas en Bystrická Klubovňa — todo recomendado por la comunidad.',
        highlights: ['Tapas y vino', 'Abierto después de las 22:00', 'Posibilidad de reservar mesa'],
        readTime: 'Lectura de 3 min',
      },
      {
        city: 'Base Lešť',
        title: 'Como Conseguir Taxi Base Lešť',
        excerpt: 'Guía completa para soldados españoles sobre servicio taxi confiable desde base militar Lešť. Conductor habla español disponible 24/7.',
        highlights: ['Reserva paso a paso', 'Conductor español', 'Disponible 24/7'],
        readTime: '6 min lectura',
      },
      {
        city: 'Eslovaquia Central',
        title: 'Servicio Transporte Militares Españoles Eslovaquia',
        excerpt: 'Servicio taxi integral diseñado específicamente para personal militar español destacado en instalaciones OTAN de Eslovaquia central.',
        highlights: ['Protocolos militares', 'Autorización seguridad', 'Cobertura central'],
        readTime: '5 min lectura',
      },
    ],
  },
};

const BlogSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-muted/40 via-background to-muted/40">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold">{content.heading}</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">{content.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {content.posts.map((post) => (
            <Card
              key={post.title}
              className="bg-card/60 backdrop-blur border border-secondary/20 hover:border-secondary/50 transition-all duration-300"
            >
              <CardHeader className="space-y-2">
                <span className="text-[11px] sm:text-xs uppercase tracking-wide text-secondary">{post.city}</span>
                <CardTitle className="text-lg sm:text-xl text-foreground">{post.title}</CardTitle>
                <span className="text-[11px] sm:text-xs text-muted-foreground">{post.readTime}</span>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 text-sm text-muted-foreground">
                <p className="text-xs sm:text-sm">{post.excerpt}</p>
                <ul className="space-y-1 text-xs sm:text-sm">
                  {post.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-secondary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
