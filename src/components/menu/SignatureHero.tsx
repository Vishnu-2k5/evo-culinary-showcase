import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SignatureDish {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
}

const SignatureHero = () => {
    const [selectedDish, setSelectedDish] = useState<SignatureDish | null>(null);

    // Placeholder images - user can replace these later
    const signatureDishes: SignatureDish[] = [
        {
            id: 1,
            name: "Pesto Burrata Pizza",
            description: "Burrata cheese, pesto sauce, charred cherry tomatoes, arugula, olives & tomato sauce on our signature Roman style aged dough",
            price: "₹615",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
        },
        {
            id: 2,
            name: "Truffle Edamame Purple Rice",
            description: "Purple rice combined with goodness of edamame beans, finished with aromatic truffle oil and fresh herbs",
            price: "₹375",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
        },
        {
            id: 3,
            name: "Tiramisu Classic",
            description: "Italian classic dessert with layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa",
            price: "₹395",
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
        },
    ];

    return (
        <>
            <section className="pt-2 pb-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-5"
                >
                    <h2 className="font-serif text-3xl md:text-4xl font-bold gold-text-gradient mb-2 pb-1">
                        Our Signature Creations
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base">
                        Discover our Chef's Specially Curated Dishes
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {signatureDishes.map((dish, index) => (
                        <motion.div
                            key={dish.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            onClick={() => setSelectedDish(dish)}
                            className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            {/* Gradient overlay with dish name */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                                <p className="text-white font-serif font-semibold text-lg">{dish.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Dish Modal */}
            <AnimatePresence>
                {selectedDish && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedDish(null)}
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
                                onClick={() => setSelectedDish(null)}
                                className="absolute top-3 right-3 z-20 p-2 bg-background/90 rounded-full hover:bg-background transition-colors shadow-md"
                            >
                                <X className="w-5 h-5 text-foreground" />
                            </button>

                            {/* Scrollable content */}
                            <div className="max-h-[85vh] overflow-y-auto">
                                {/* Image */}
                                <div className="aspect-[16/10] overflow-hidden flex-shrink-0">
                                    <img
                                        src={selectedDish.image}
                                        alt={selectedDish.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground leading-tight mb-3">
                                        {selectedDish.name}
                                    </h2>

                                    <p className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base">
                                        {selectedDish.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-border">
                                        <span className="font-serif text-2xl md:text-3xl font-bold gold-text-gradient">
                                            {selectedDish.price}
                                        </span>
                                        <span className="text-xs md:text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                                            Signature Dish
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SignatureHero;
