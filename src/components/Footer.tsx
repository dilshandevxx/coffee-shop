import { Coffee, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee-950 text-coffee-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-serif text-xl font-bold text-white">
            <Coffee className="w-5 h-5 text-coffee-400" />
            Brew Haven
          </div>

          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Brew Haven. Crafted with ☕ and care.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
