import { forwardRef } from "react";
import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import type { MenuItem } from "@/data/menuData";

interface MenuSectionProps {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
  viewMode: "grid" | "list";
}

const MenuSection = forwardRef<HTMLElement, MenuSectionProps>(
  ({ id, name, icon, items, viewMode }, ref) => {
    if (items.length === 0) return null;

    return (
      <section ref={ref} id={id} className="scroll-mt-32 lg:scroll-mt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-6"
        >
          <div className="w-fit">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{icon}</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                {name}
              </h2>
            </div>
            <div className="h-0.5 w-full gold-gradient rounded-full" />
          </div>
        </motion.div>

        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 gap-4"
              : "flex flex-col gap-3"
          }
        >
          {items.map((item, index) => (
            <MenuCard
              key={item.id}
              item={item}
              index={index}
              viewMode={viewMode}
            />
          ))}
        </div>
      </section>
    );
  }
);

MenuSection.displayName = "MenuSection";

export default MenuSection;
