import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface JainToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

const JainToggle = ({ enabled, onChange }: JainToggleProps) => {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={cn(
        "flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all duration-300",
        enabled
          ? "bg-primary/15 border-primary text-primary"
          : "bg-secondary border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
      )}
    >
      <div
        className={cn(
          "relative w-10 h-5 rounded-full transition-colors duration-300",
          enabled ? "bg-primary" : "bg-muted"
        )}
      >
        <motion.div
          animate={{ x: enabled ? 21 : 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-0.5 w-4 h-4 rounded-full bg-foreground shadow-sm"
        />
      </div>
      <span className="flex items-center gap-2 text-sm font-medium whitespace-nowrap">
        <Leaf className="w-4 h-4" />
        Jain Options
      </span>
    </button>
  );
};

export default JainToggle;
