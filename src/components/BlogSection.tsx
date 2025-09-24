import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const posts = [
  {
    city: 'Zvolen',
    title: 'Prvý večer vo Zvolene: zámok, námestie a lokálne bary',
    excerpt:
      'Spojte si kultúru s oddychom – navštívte Zvolenský zámok, prejdite sa po Námestí SNP a zakončite večer v baroch Quadra alebo Retro.',
    highlights: ['Historické centrum', 'Craft koktaily', 'Nočné taxi späť na základňu'],
    readTime: '4 min čítanie',
  },
  {
    city: 'Banská Bystrica',
    title: 'Banskobystrická večerná scéna pre španielsky kontingent',
    excerpt:
      'Europa SC, námestie a ulice plné podnikov – Ministry of Fun, Klub 77 či Bar Murgaš ponúkajú hudbu aj zázemie pre väčšie skupiny.',
    highlights: ['Nightlife odporúčania', 'Bezpečný presun', 'Rezervácie pre skupiny'],
    readTime: '5 min čítanie',
  },
  {
    city: 'Gastro tipy',
    title: 'Reštaurácie so stredomorským menu a neskorou kuchyňou',
    excerpt:
      'Skúste tapas v Bistro Chef vo Zvolene, talianske klasiky v Alžbete a slovenské špeciality v Bystrickej Klubovni – všetko overené komunitou.',
    highlights: ['Tapas & víno', 'Otvorené po 22:00', 'Možnosť rezervácie stolov'],
    readTime: '3 min čítanie',
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-muted/40 via-background to-muted/40">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold">Blog TaxiForce</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Aktuálne tipy pre voľný čas v mestách Zvolen a Banská Bystrica vrátane barov, reštaurácií a kultúrnych zastávok.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {posts.map((post) => (
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
