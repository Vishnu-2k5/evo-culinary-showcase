import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="w-full h-full flex items-center bg-secondary border border-border rounded-xl focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-all duration-200 px-4 gap-2">
      <Search className="w-5 h-5 text-muted-foreground shrink-0" />
      <input
        type="text"
        placeholder="Search our menu..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent border-none focus:outline-none h-full w-full text-foreground placeholder:text-muted-foreground font-sans"
      />
      <AnimatePresence>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => onChange("")}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
