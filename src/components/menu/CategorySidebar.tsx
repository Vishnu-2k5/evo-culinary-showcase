import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { MenuCategory } from "@/data/menuData";

interface CategorySidebarProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

const CategorySidebar = ({
  categories,
  activeCategory,
  onCategoryClick,
}: CategorySidebarProps) => {
  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24 bg-card rounded-xl border border-border p-4 custom-scrollbar max-h-[calc(100vh-8rem)] overflow-y-auto">
        <h2 className="font-serif text-xl font-semibold text-foreground mb-4 px-2">
          Categories
        </h2>
        <nav className="space-y-1">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => onCategoryClick(category.id)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200",
                  isActive
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium text-sm truncate">
                  {category.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                  />
                )}
              </motion.button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default CategorySidebar;
