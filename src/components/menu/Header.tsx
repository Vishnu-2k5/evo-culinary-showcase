import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-3xl md:text-4xl font-bold gold-text-gradient tracking-wide">
              evo
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground tracking-[0.3em] uppercase mt-0.5">
              Elevated Vegetarian Options
            </p>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
