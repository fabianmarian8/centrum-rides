import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll && currentScroll > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-4 right-4 z-50 flex items-center gap-3 ${isVisible ? 'nav-visible' : 'nav-hidden'}`}>
      <Link to="/blog">
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full glass-card hover-scale text-white px-3 py-2 transition-all"
        >
          <FileText className="w-4 h-4 mr-2" />
          Blog
        </Button>
      </Link>
      <div className="glass-card rounded-full px-2 py-1 hover-scale">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navigation;