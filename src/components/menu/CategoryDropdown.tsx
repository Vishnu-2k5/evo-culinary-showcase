import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MenuCategory } from "@/data/menuData";

interface CategoryDropdownProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

const CategoryDropdown = ({
  categories,
  activeCategory,
  onCategoryClick,
}: CategoryDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeItem = categories.find((cat) => cat.id === activeCategory);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategorySelect = (categoryId: string) => {
    onCategoryClick(categoryId);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative z-50 h-full">
      {/* Dropdown Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-xl border-2 transition-all duration-300",
          "bg-card hover:bg-secondary shadow-sm",
          isOpen ? "border-primary" : "border-border hover:border-primary/50"
        )}
      >
        <Menu className="w-5 h-5 text-primary" />
        {/* Show category name only on desktop */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-lg">{activeItem?.icon}</span>
          <span className="font-medium text-foreground">{activeItem?.name}</span>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-muted-foreground transition-transform duration-200 hidden md:block",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 mt-2 py-2 bg-card rounded-xl border-2 border-border shadow-xl max-h-[60vh] overflow-y-auto custom-scrollbar"
            style={{ minWidth: "280px" }}
          >
            {categories.map((category, index) => {
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => handleCategorySelect(category.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary border-l-4 border-primary"
                      : "hover:bg-secondary text-foreground border-l-4 border-transparent hover:border-primary/30"
                  )}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className={cn("font-medium", isActive && "font-semibold")}>
                    {category.name}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryDropdown;
