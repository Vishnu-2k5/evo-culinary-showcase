import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { MenuCategory } from "@/data/menuData";

interface CategoryTabsProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

const CategoryTabs = ({
  categories,
  activeCategory,
  onCategoryClick,
}: CategoryTabsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeButtonRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const button = activeButtonRef.current;
      const containerWidth = container.offsetWidth;
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      
      container.scrollTo({
        left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeCategory]);

  return (
    <div className="lg:hidden sticky top-[72px] z-40 bg-background/95 backdrop-blur-md border-b border-border">
      <div
        ref={scrollRef}
        className="flex gap-2 px-4 py-3 overflow-x-auto hide-scrollbar"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <motion.button
              key={category.id}
              ref={isActive ? activeButtonRef : null}
              onClick={() => onCategoryClick(category.id)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary text-muted-foreground border-border hover:text-foreground hover:border-muted-foreground"
              )}
            >
              <span>{category.icon}</span>
              <span className="whitespace-nowrap">{category.name}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
