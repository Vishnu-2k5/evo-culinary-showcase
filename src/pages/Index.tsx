import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid2X2, List, ChevronUp } from "lucide-react";
import { menuCategories, type MenuItem } from "@/data/menuData";
import Header from "@/components/menu/Header";
import SearchBar from "@/components/menu/SearchBar";
import JainToggle from "@/components/menu/JainToggle";
import CategoryDropdown from "@/components/menu/CategoryDropdown";
import SignatureHero from "@/components/menu/SignatureHero";
import MenuSection from "@/components/menu/MenuSection";
import { cn } from "@/lib/utils";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [jainOnly, setJainOnly] = useState(false);
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Filter menu items based on search and Jain toggle
  const filteredCategories = useMemo(() => {
    return menuCategories.map((category) => ({
      ...category,
      items: category.items.filter((item) => {
        const matchesSearch =
          searchQuery === "" ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesJain = !jainOnly || item.isJain;
        return matchesSearch && matchesJain;
      }),
    })).filter((category) => category.items.length > 0);
  }, [searchQuery, jainOnly]);

  // Total item count
  const totalItems = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  // Handle scroll to category
  const handleCategoryClick = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 160; // Account for header and dropdown
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  // Setup intersection observer for active category tracking
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [filteredCategories]);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6 lg:py-8">
        {/* Signature Dishes Hero Section */}
        <SignatureHero />

        {/* Category Dropdown and Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8 sticky top-[52px] md:top-[80px] z-40 bg-background/95 backdrop-blur-md py-3 md:py-5 -mx-4 px-4 border-b border-border"
        >
          {/* Mobile: Single row layout */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex-1">
              <CategoryDropdown
                categories={menuCategories}
                activeCategory={activeCategory}
                onCategoryClick={handleCategoryClick}
              />
            </div>
            <div className="flex-[2]">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            <div className="flex-1">
              <JainToggle enabled={jainOnly} onChange={setJainOnly} />
            </div>
          </div>

          {/* Desktop: Original layout */}
          <div className="hidden md:flex flex-col gap-4">
            {/* Category Dropdown */}
            <CategoryDropdown
              categories={menuCategories}
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
            />

            {/* Search and filters */}
            <div className="flex flex-row gap-4 items-center">
              <div className="flex-1">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>
              <div className="flex items-center gap-3">
                <JainToggle enabled={jainOnly} onChange={setJainOnly} />
                <div className="flex items-center gap-1 p-1 bg-secondary rounded-lg border border-border">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      viewMode === "grid"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Grid2X2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={cn(
                      "p-2 rounded-md transition-colors",
                      viewMode === "list"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Menu content */}
        <div id="menu-section" className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <MenuSection
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  icon={category.icon}
                  items={category.items}
                  viewMode={viewMode}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <p className="text-2xl font-serif text-muted-foreground mb-2">
                  No dishes found
                </p>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-serif text-xl gold-text-gradient font-semibold mb-2">
            evo
          </p>
          <p className="text-sm text-muted-foreground">
            Elevated Vegetarian Options
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            Prices are subject to applicable taxes
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
