import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, X } from "lucide-react";
import type { MenuItem } from "@/data/menuData";

interface MenuCardProps {
  item: MenuItem;
  index: number;
  viewMode: "grid" | "list";
}

const MenuCard = ({ item, index, viewMode }: MenuCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Placeholder image for dishes
  const dishImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop";

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  if (viewMode === "list") {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.03 }}
          onClick={handleCardClick}
          className="flex items-start gap-4 p-4 bg-card rounded-lg border-2 border-border card-hover cursor-pointer"
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
            {/* Full description - no truncation */}
            <p className="mt-1 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        </motion.div>

        {/* Modal */}
        <DishModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={item}
          image={dishImage}
        />
      </>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.03 }}
        onClick={handleCardClick}
        className="group relative bg-card rounded-xl border-2 border-border p-5 card-hover overflow-hidden cursor-pointer"
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

          {/* Full description - no truncation */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
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

      {/* Modal */}
      <DishModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={item}
        image={dishImage}
      />
    </>
  );
};

// Dish Detail Modal Component
interface DishModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem;
  image: string;
}

const DishModal = ({ isOpen, onClose, item, image }: DishModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-md max-h-[85vh] bg-card rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-20 p-2 bg-background/90 rounded-full hover:bg-background transition-colors shadow-md"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Scrollable content */}
            <div className="max-h-[85vh] overflow-y-auto">
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden flex-shrink-0">
                <img
                  src={image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground leading-tight">
                    {item.name.replace(" [J]", "")}
                  </h2>
                  {item.isJain && (
                    <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-1 bg-primary/15 text-primary rounded-lg text-xs font-medium border border-primary/30">
                      <Leaf className="w-3 h-3" />
                      Jain
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-serif text-2xl md:text-3xl font-bold gold-text-gradient">
                    {item.price}
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MenuCard;
