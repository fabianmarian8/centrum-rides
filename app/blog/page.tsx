import BlogSection from '@/components/BlogSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between">
        <Link href="/">
          <Button variant="ghost" size="sm" className="rounded-full bg-black/70 backdrop-blur text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Domov
          </Button>
        </Link>
        <LanguageSwitcher />
      </nav>

      <main className="pt-20">
        <BlogSection />
      </main>
    </div>
  );
}
