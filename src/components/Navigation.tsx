import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Navigation = () => {
  return (
    <nav className="fixed top-4 right-4 z-50 flex items-center gap-3">
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