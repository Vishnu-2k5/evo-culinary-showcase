import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-border">
      <div className="container mx-auto px-4 py-3 md:py-5">
        <div className="flex items-center justify-between">
          <motion.img
            src="/evo-logo.jpg"
            alt="EVO Logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-10 h-10 md:w-16 md:h-16 object-contain rounded-lg border-2 border-[#C5A572] p-1 md:p-1.5 bg-white/95"
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center flex-1"
          >
            <h1 className="font-serif text-2xl md:text-4xl font-bold gold-text-gradient tracking-wide">
              evo
            </h1>
            <p className="hidden md:block text-xs md:text-sm text-muted-foreground tracking-[0.3em] uppercase mt-0.5">
              Elevated Vegetarian Options
            </p>
          </motion.div>
          {/* Empty div for balanced spacing */}
          <div className="w-10 md:w-16" />
        </div>
      </div>
    </header>
  );
};

export default Header;
