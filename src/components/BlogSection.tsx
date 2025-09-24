import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const posts = [
  {
    title: 'Sprievodca mestom Zvolen pre španielskych vojakov',
    excerpt:
      'Objavte historické centrum so Zvolenským zámkom, odporúčané kaviarne na námestí a miesta, kde sa bezpečne stretnete s kolegami po službe.',
    tags: ['Mesto Zvolen', 'Voľný čas'],
    date: 'apríl 2024',
  },
  {
    title: 'Top bary a nočný život v Banskej Bystrici',
    excerpt:
      'Od Ministry of Fun po klub 77 – harmonogram vstupov, odporúčania na rezervácie stolov a tipy, ako sa dostať späť na základňu načas.',
    tags: ['Banská Bystrica', 'Nočný život'],
    date: 'máj 2024',
  },
  {
    title: 'Overené reštaurácie so španielskym friendly servisom',
    excerpt:
      'Kde ochutnať kvalitné steaky, kde podávajú tapas inšpirované menu a ktoré podniky ponúkajú skoré raňajky pred návratom do Lešti.',
    tags: ['Gastronómia', 'Partneri'],
    date: 'jún 2024',
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/40 via-background to-muted/40">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-military">Blog TaxiForce</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pravidelné články pre španielsky kontingent: tipy na bezpečný program v Zvolene a Banskej Bystrici, odporúčania na bary a reštaurácie a logistické novinky.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.title}
              className="bg-card/60 border border-secondary/30 backdrop-blur hover:border-secondary/60 transition-all duration-300 hover-military"
            >
              <CardHeader>
                <div className="flex items-center justify-between text-xs uppercase tracking-wider text-secondary">
                  <span>{post.date}</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-secondary/40 text-secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground mt-4 leading-snug">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
