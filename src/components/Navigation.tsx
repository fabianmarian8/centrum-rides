import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import DriverStatus from '@/components/DriverStatus';
import { useSmoothReveal } from '@/hooks/useSmoothReveal';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const { isVisible } = useSmoothReveal({ threshold: 80, hideOnScrollDown: false });

  return (
    <nav className={cn(
      "fixed top-4 right-4 z-50 flex items-center gap-3 transition-transform duration-300 ease-in-out",
      isVisible ? "nav-visible" : "nav-hidden"
    )}>
      <DriverStatus />
      <Link to="/blog">
        <Button 
          variant="ghost" 
          size="sm" 
          className="rounded-full bg-black/70 backdrop-blur text-white hover:bg-white/10 px-3 py-2"
        >
          <FileText className="w-4 h-4 mr-2" />
          Blog
        </Button>
      </Link>
      <LanguageSwitcher />
    </nav>
  );
};

export default Navigation;