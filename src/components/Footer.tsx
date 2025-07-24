import { Mail, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-pink-50 text-pink-900 py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">

          

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-pink-700">
            <span>Crimadort SuperNOVA © 2025</span>
            <Heart className="h-4 w-4 text-pink-500 animate-pulse" />
            <span>Spread Love</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;