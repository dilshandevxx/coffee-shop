import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-950 text-white overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-coffee-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-coffee-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        <p className="text-coffee-300 font-medium tracking-widest uppercase text-sm mb-4">
          Artisan Coffee Since 2018
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Every Cup Tells
          <br />
          <span className="text-coffee-300">a Story</span>
        </h1>
        <p className="text-coffee-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          From single-origin beans roasted in small batches to expertly crafted espresso drinks —
          experience coffee the way it was meant to be.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 bg-coffee-400 hover:bg-coffee-300 text-coffee-950 font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            Explore Menu
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 border border-coffee-400 text-coffee-200 hover:bg-coffee-800/50 font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
