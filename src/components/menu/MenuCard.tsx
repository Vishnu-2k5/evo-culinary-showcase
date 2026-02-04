import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import type { MenuItem } from "@/data/menuData";

interface MenuCardProps {
  item: MenuItem;
  index: number;
  viewMode: "grid" | "list";
}

const MenuCard = ({ item, index, viewMode }: MenuCardProps) => {
  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: index * 0.03 }}
        className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border card-hover"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {item.name.replace(" [J]", "")}
              </h3>
              {item.isJain && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/20 text-primary rounded-full text-xs font-medium">
                  <Leaf className="w-3 h-3" />
                  Jain
                </span>
              )}
            </div>
            <span className="font-serif text-lg font-bold text-primary whitespace-nowrap">
              {item.price}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group relative bg-card rounded-xl border border-border p-5 card-hover overflow-hidden"
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-l from-primary/50 to-transparent transform rotate-45 translate-x-6 -translate-y-2" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-serif text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
            {item.name.replace(" [J]", "")}
          </h3>
          {item.isJain && (
            <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-1 bg-primary/15 text-primary rounded-lg text-xs font-medium border border-primary/30">
              <Leaf className="w-3 h-3" />
              Jain
            </span>
          )}
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <span className="font-serif text-2xl font-bold gold-text-gradient">
            {item.price}
          </span>
          <div className="h-2 w-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
