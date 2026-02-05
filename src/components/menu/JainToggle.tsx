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
        "flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-xl border-2 transition-all duration-300 font-medium text-sm",
        enabled
          ? "bg-primary border-primary text-primary-foreground"
          : "bg-secondary border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground"
      )}
    >
      <Leaf className="w-4 h-4" />
      <span className="hidden md:inline">Jain Options</span>
      <span className="md:hidden">Jain</span>
    </button>
  );
};

export default JainToggle;
