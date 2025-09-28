import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import DriverStatus from '@/components/DriverStatus';
import { useSmoothReveal } from '@/hooks/useSmoothReveal';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const { isVisible } = useSmoothReveal({ threshold: 80, hideOnScrollDown: false });
  const isMobile = useIsMobile();

  return (
    <nav className={cn(
      "fixed z-50 flex items-center transition-transform duration-300 ease-in-out",
      isMobile 
        ? "top-2 right-2 gap-1 pt-[env(safe-area-inset-top)]" 
        : "top-4 right-4 gap-3",
      isVisible ? "nav-visible" : "nav-hidden"
    )}>
      <DriverStatus />
      <Link to="/blog">
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn(
            "rounded-full bg-black/70 backdrop-blur text-white hover:bg-white/10",
            isMobile ? "px-2 py-2" : "px-3 py-2"
          )}
        >
          <FileText className={cn("w-4 h-4", !isMobile && "mr-2")} />
          {!isMobile && "Blog"}
        </Button>
      </Link>
      <LanguageSwitcher />
    </nav>
  );
};

export default Navigation;