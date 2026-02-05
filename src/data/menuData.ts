export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  isJain: boolean;
  category: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "sands-burgs",
    name: "Sands & Burgs (Upto 7pm only)",
    icon: "🍔",
    items: [
      { id: "sb-1", name: "Open Hummus Sandwich", description: "Grilled exotic vegetables with feta, thousand island mayo, crispy potato, house salad", price: "₹325", isJain: false, category: "Sands & Burgs" },
      { id: "sb-2", name: "Grilled Exotic Vegetables Sandwich [J]", description: "Served with harissa mayo, cheese slice, crispy potato, & house salad", price: "₹325", isJain: true, category: "Sands & Burgs" },
      { id: "sb-3", name: "Mumbai Style Cheese Sandwich", description: "An Indian style potato vada with curry leaves, mustard oil, cheese, lettuce salad", price: "₹325", isJain: false, category: "Sands & Burgs" },
      { id: "sb-4", name: "Spicy Cottage Cheese Burger With Tomato Chutney [J]", description: "Crispy potato, house salad", price: "₹395", isJain: true, category: "Sands & Burgs" },
      { id: "sb-5", name: "Hass Avocado Beet Hummus Toast", description: "Avocado, homemade beet hummus with pumpkin seeds, house salad", price: "₹395", isJain: false, category: "Sands & Burgs" },
      { id: "sb-6", name: "Mushroom Florentine Toast", description: "Sautéd mushroom, truffle salsa with emmental", price: "₹395", isJain: false, category: "Sands & Burgs" },
      { id: "sb-7", name: "Plant-Based Protein Burger", description: "Sundried tomato mayo, lettuce", price: "₹395", isJain: false, category: "Sands & Burgs" },
    ],
  },
  {
    id: "appetizer",
    name: "Appetizer - Chhoti Bhuk",
    icon: "🥟",
    items: [
      { id: "ap-1", name: "Batata Bravas", description: "Crispy baby potatoes tossed in spicy ratatouille & tomato salsa, finished with saffron sauce", price: "₹375", isJain: false, category: "Appetizer - Chhoti Bhuk" },
      { id: "ap-2", name: "Goat Cheese Stuffed Hara Bhara Kabab", description: "Hara bhara kababs infused with goat cheese", price: "₹425", isJain: false, category: "Appetizer - Chhoti Bhuk" },
      { id: "ap-3", name: "Mumbai's Famous Vada Pav", description: "Mumbai ki jaan", price: "₹315", isJain: false, category: "Appetizer - Chhoti Bhuk" },
      { id: "ap-4", name: "Fiery Baby Corn Cigar", description: "Tempura coated baby corn cigar tossed with hot garlic sauce", price: "₹445", isJain: false, category: "Appetizer - Chhoti Bhuk" },
      { id: "ap-5", name: "Patrani Paneer", description: "Classic parsi way of parceling banana leaf & grilled", price: "₹455", isJain: false, category: "Appetizer - Chhoti Bhuk" },
      { id: "ap-6", name: "Pesto Mozza Melt [J]", description: "Baked pesto paneer with trio cheese, house salad", price: "₹445", isJain: true, category: "Appetizer - Chhoti Bhuk" },
      { id: "ap-7", name: "Panko Fried Stuffed Mushrooms", description: "Cheese garlic, bell pepper, stuffed mushroom served with BBQ sauce", price: "₹425", isJain: false, category: "Appetizer - Chhoti Bhuk" },
      { id: "ap-8", name: "Pan Seared Mini Quesadillas [J]", description: "Corn tortilla with tangy refried beans, melting cheese, Pico de gallo, sour cream", price: "₹425", isJain: true, category: "Appetizer - Chhoti Bhuk" },
      { id: "ap-9", name: "Spicy Vegetable Croquette", description: "Panko crumbed served with peri peri mayo", price: "₹375", isJain: false, category: "Appetizer - Chhoti Bhuk" },
    ],
  },
  {
    id: "soups",
    name: "Soups (All Soups are served with Pesto Bread)",
    icon: "🍲",
    items: [
      { id: "sp-1", name: "Cappuccino Mushroom", description: "Rich, creamy mushroom soup with a frothy cappuccino twist", price: "₹275", isJain: false, category: "Soups" },
      { id: "sp-2", name: "Wood Fired Cherry Tomato Soup [J]", description: "Classic flavourful north Italian soup served with a side of crisp garlic crostini", price: "₹255", isJain: true, category: "Soups" },
      { id: "sp-3", name: "Jhol Momo Soup", description: "A unique traditional tibetan momo soup with the fusion of warm tandoori spices", price: "₹255", isJain: false, category: "Soups" },
      { id: "sp-4", name: "Asparagus Soup [J]", description: "Asparagus Florets soup with caramelized onion", price: "₹275", isJain: true, category: "Soups" },
      { id: "sp-5", name: "Manchow Soup", description: "Hot & spicy indo-chinese soup flavoured with soya & green chillies", price: "₹255", isJain: false, category: "Soups" },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    icon: "🥗",
    items: [
      { id: "sl-1", name: "Fig & Mushroom Salad", description: "Assorted mushrooms, fig chutney, lettuce, caramelized onion, feta cheese & sweet garlic balsamic vinaigrette", price: "₹355", isJain: false, category: "Salads" },
      { id: "sl-2", name: "Compressed Watermelon & Feta Salad [J]", description: "A delightful medley of fresh watermelon, rocket lettuce, walnut chikki, citrus vinaigrette, & feta cheese", price: "₹355", isJain: true, category: "Salads" },
      { id: "sl-3", name: "Booster Salad Bowl", description: "Traditional greek salad textures, roasted almonds, hummus, avocado, red quinoa, tzatziki, cucumber & feta", price: "₹425", isJain: false, category: "Salads" },
      { id: "sl-4", name: "Healthy Zucchini Warm Bowl [J]", description: "Roasted almonds, clarified butter with zucchini spaghetti", price: "₹425", isJain: true, category: "Salads" },
    ],
  },
  {
    id: "chaat",
    name: "Chaat",
    icon: "🍛",
    items: [
      { id: "ch-1", name: "Mumbai Chowpatty Style Chaat Board", description: "Butter mashed potato/ragda, paneer tikka cubes, chutney & farsan served with mathri puri", price: "₹335", isJain: false, category: "Chaat" },
      { id: "ch-2", name: "Shakarkand Chaat", description: "Delightful flavours of sweet potatoes, green peas & aromatic spices", price: "₹345", isJain: false, category: "Chaat" },
      { id: "ch-3", name: "Tikka Masala Puchka", description: "A delightful puchka with creamy tikka masala, cheese, spicy chana & tangy chutney", price: "₹345", isJain: false, category: "Chaat" },
      { id: "ch-4", name: "Misal Pav Shot", description: "A popular spicy dish in the western Indian state of Maharashtra (6 pcs)", price: "₹325", isJain: false, category: "Chaat" },
      { id: "ch-5", name: "Quinoa Masala Pani Puri [J]", description: "A spicy pineapple water with crispy puris, zesty masala filling & tangy chutneys", price: "₹325", isJain: true, category: "Chaat" },
      { id: "ch-6", name: "Jara Hatke Dahi Puri [J]", description: "Unique in its own way, street food just got a gourmet look", price: "₹325", isJain: true, category: "Chaat" },
    ],
  },
  {
    id: "mocktails",
    name: "Mocktails",
    icon: "🍹",
    items: [
      { id: "mt-1", name: "Mint Mojito", description: "Fresh mint, lemon chunks, & soda", price: "₹225", isJain: false, category: "Mocktails" },
      { id: "mt-2", name: "Sea Blue", description: "Lychee crush, blue curaçao, & soda", price: "₹245", isJain: false, category: "Mocktails" },
      { id: "mt-3", name: "Pink Lady", description: "Cranberry juice, strawberry crush, & soda", price: "₹245", isJain: false, category: "Mocktails" },
      { id: "mt-4", name: "Piña Colada", description: "Coconut milk & pineapple juice", price: "₹290", isJain: false, category: "Mocktails" },
      { id: "mt-5", name: "Meet Me At Evo", description: "Peach, kaffir lime leaf, jalapeño brine, ginger ale, & lime juice", price: "₹295", isJain: false, category: "Mocktails" },
      { id: "mt-6", name: "Cinderella", description: "Orange & pineapple juice with grenadine syrup", price: "₹275", isJain: false, category: "Mocktails" },
      { id: "mt-7", name: "Planter's Punch", description: "Orange & pineapple juice topped with Coke", price: "₹275", isJain: false, category: "Mocktails" },
      { id: "mt-8", name: "Pattaya Sour", description: "Passion fruit flavor, orange juice, lemongrass, & ginger ale", price: "₹275", isJain: false, category: "Mocktails" },
      { id: "mt-9", name: "Fruit Punch", description: "Mango, orange, & pineapple juice with ice cream", price: "₹275", isJain: false, category: "Mocktails" },
      { id: "mt-10", name: "Popcorn Look", description: "Popcorn-flavored almond, pineapple, & orange juice", price: "₹295", isJain: false, category: "Mocktails" },
      { id: "mt-11", name: "Apple Jack Sipper", description: "Cucumber flavor, apple juice, jalapeño water, & lime juice", price: "₹275", isJain: false, category: "Mocktails" },
      { id: "mt-12", name: "Spicy Guava Mary", description: "Guava juice, Tabasco sauce, & celery salt", price: "₹275", isJain: false, category: "Mocktails" },
      { id: "mt-13", name: "Cotton Candy Lady", description: "Bubblegum flavor & pineapple juice", price: "₹255", isJain: false, category: "Mocktails" },
      { id: "mt-14", name: "Burnt Gossip Theory", description: "Caramel flavor & pineapple juice", price: "₹295", isJain: false, category: "Mocktails" },
      { id: "mt-15", name: "Chocolate Burst", description: "Oreo biscuits, fresh cream, & chocolate ice cream", price: "₹290", isJain: false, category: "Mocktails" },
    ],
  },
  {
    id: "dessert",
    name: "Dessert",
    icon: "🍰",
    items: [
      { id: "ds-1", name: "Milk Cake Pull Me Up", description: "Ek Nariyal Ped Se Giraaá (Mock coconut with mousse)", price: "₹395", isJain: false, category: "Dessert" },
      { id: "ds-2", name: "Lotus Biscoff", description: "Classic dessert", price: "₹385", isJain: false, category: "Dessert" },
      { id: "ds-3", name: "Tiramisu Classic On Table", description: "Italian classic", price: "₹395", isJain: false, category: "Dessert" },
      { id: "ds-4", name: "Vanilla Panna Cotta", description: "Served With Orange Sauce", price: "₹375", isJain: false, category: "Dessert" },
      { id: "ds-5", name: "Rasmalai Tres Leches Pull Me Up", description: "Fusion dessert", price: "₹375", isJain: false, category: "Dessert" },
      { id: "ds-6", name: "Evo Burst", description: "Signature dessert", price: "₹395", isJain: false, category: "Dessert" },
      { id: "ds-7", name: "Chef Special Dessert", description: "A rich and delicious, fragrant indian cake prepared with mawa & kesar sauce", price: "₹395", isJain: false, category: "Dessert" },
      { id: "ds-8", name: "Chocolate Truffle Cake (1/2 kg)", description: "Rich chocolate indulgence", price: "₹955", isJain: false, category: "Dessert" },
      { id: "ds-9", name: "Chocolate Truffle Cake (1 kg)", description: "Rich chocolate indulgence for larger gatherings", price: "₹1655", isJain: false, category: "Dessert" },
    ],
  },
  {
    id: "quick-bites",
    name: "Quick Bites & Starters",
    icon: "🧀",
    items: [
      { id: "qb-1", name: "Baked Brie [J]", description: "Phyllo pastry wrapped baked brie cheese with candied walnuts, honey & raspberry", price: "₹425", isJain: true, category: "Quick Bites & Starters" },
      { id: "qb-2", name: "Peri Peri Cottage Cheese Popcorn", description: "Cheese coated in peri peri batter, deep-fried", price: "₹425", isJain: false, category: "Quick Bites & Starters" },
      { id: "qb-3", name: "Cheese Cigars [J]", description: "Vermicili coated cheese cigars, golden fried, sweet chilli sauce", price: "₹425", isJain: true, category: "Quick Bites & Starters" },
      { id: "qb-4", name: "Hummus & Falafel Platter", description: "Classic hummus, pesto hummus, beetroot hummus with pita & crunchy falafels", price: "₹495", isJain: false, category: "Quick Bites & Starters" },
      { id: "qb-5", name: "Cheese Stuff Onion Rings With Malga Podi", description: "Crispy golden fried rings with a zest of chilli & melted cheese", price: "₹375", isJain: false, category: "Quick Bites & Starters" },
      { id: "qb-6", name: "Loaded Cheesy Nachos [J]", description: "Crispy nachos topped with refried beans, jalapeno, guacamole, sour cream, salsa & cheese sauce", price: "₹375", isJain: true, category: "Quick Bites & Starters" },
      { id: "qb-7", name: "Wood Fire Fresh Garlic Bread", description: "Freshly baked with aromatic garlic", price: "₹325", isJain: false, category: "Quick Bites & Starters" },
      { id: "qb-8", name: "Garlic Bread With Cheesy", description: "Loaded with melted cheese", price: "₹375", isJain: false, category: "Quick Bites & Starters" },
      { id: "qb-9", name: "Fries Basket - Classic", description: "Golden crispy fries", price: "₹235", isJain: false, category: "Quick Bites & Starters" },
      { id: "qb-10", name: "Fries Basket - Peri Peri", description: "Spicy peri peri seasoned fries", price: "₹265", isJain: false, category: "Quick Bites & Starters" },
      { id: "qb-11", name: "Fries Basket - Poutine", description: "Canadian style with gravy and cheese", price: "₹315", isJain: false, category: "Quick Bites & Starters" },
    ],
  },
  {
    id: "asian-starters",
    name: "Asian Starters",
    icon: "🥢",
    items: [
      { id: "as-1", name: "Japanese Style Lotus Stems (Vegan)", description: "Fresh & crispy lotus roots, wok tossed in Japanese style sweet & spicy sauce", price: "₹395", isJain: false, category: "Asian Starters" },
      { id: "as-2", name: "Kung Pao Baby Potatoes", description: "Bite-sized delights of crispy baby potatoes tossed with fiery chilli, garlic & peanut", price: "₹390", isJain: false, category: "Asian Starters" },
      { id: "as-3", name: "Dynamite Tofu", description: "Crispy goodness of fried silken tofu, with the zest of spicy chipotle sauce", price: "₹415", isJain: false, category: "Asian Starters" },
      { id: "as-4", name: "Sriracha Chilli Water Chestnut With Broccoli [J]", description: "Stir fry a perfect Indo Asian fusion flavour & crunch", price: "₹395", isJain: true, category: "Asian Starters" },
      { id: "as-5", name: "Veg Manchurian", description: "Indo Chinese crispy vegetable balls tossed in soy-based sauce", price: "₹375", isJain: false, category: "Asian Starters" },
      { id: "as-6", name: "Sri Lankan Style Cottage Cheese", description: "Infused with island-style signature spices & a flavourful curry base", price: "₹395", isJain: false, category: "Asian Starters" },
      { id: "as-7", name: "B.B.Q Crispy Potato", description: "Skinny baby potato fries, tossed in BBQ sauce", price: "₹375", isJain: false, category: "Asian Starters" },
    ],
  },
  {
    id: "asian-mains",
    name: "Asian Mains",
    icon: "🍜",
    items: [
      { id: "am-1", name: "Classic Thai Curry Green / Red", description: "Authentic blend of exotic vegetables, garlic & pandan chillies served with jasmine rice", price: "₹545", isJain: false, category: "Asian Mains" },
      { id: "am-2", name: "Cantonese Style Vegetable", description: "Cantonese style stir-fried vibrant medley of seasonal vegetables", price: "₹425", isJain: false, category: "Asian Mains" },
      { id: "am-3", name: "Veg Malaysian Laksa Curry", description: "Big on flavors, coconut milk, lemongrass, galangal, tangy curry", price: "₹425", isJain: false, category: "Asian Mains" },
      { id: "am-4", name: "Veg Balinese Yellow Curry", description: "Curry from volcanic Island Bali, shallots, red chilies, Asian greens", price: "₹425", isJain: false, category: "Asian Mains" },
      { id: "am-5", name: "Cottage Cheese/Tofu in Tobanjan Sauce", description: "Special blend of chillies & fermented broad bean sauce", price: "₹425", isJain: false, category: "Asian Mains" },
      { id: "am-6", name: "Flying Noodle Burmese Khaosuey", description: "A rich coconut curry broth served with noodles & a variety of condiments", price: "₹495", isJain: false, category: "Asian Mains" },
      { id: "am-7", name: "Mongolian Manchurian Gravy", description: "Crispy veggie balls deep-fried & cooked in Chinese manchurian gravy", price: "₹425", isJain: false, category: "Asian Mains" },
    ],
  },
  {
    id: "pot-rice-noodles",
    name: "Pot Rice & Noodles",
    icon: "🍚",
    items: [
      { id: "pr-1", name: "Pot Rice With Exotic Veg (Black bean)", description: "Exotic vegetables in black bean sauce with fragrant rice", price: "₹475", isJain: false, category: "Pot Rice & Noodles" },
      { id: "pr-2", name: "Pot Rice With Exotic Veg (Schezwan)", description: "Exotic vegetables in schezwan sauce with fragrant rice", price: "₹475", isJain: false, category: "Pot Rice & Noodles" },
      { id: "pr-3", name: "Pot Rice With Exotic Veg (Butter Garlic)", description: "Exotic vegetables in butter garlic sauce with fragrant rice", price: "₹475", isJain: false, category: "Pot Rice & Noodles" },
      { id: "pr-4", name: "Pot Noodles With Exotic Veg (Black bean)", description: "Exotic vegetables in black bean sauce with noodles", price: "₹475", isJain: false, category: "Pot Rice & Noodles" },
      { id: "pr-5", name: "Pot Noodles With Exotic Veg (Schezwan)", description: "Exotic vegetables in schezwan sauce with noodles", price: "₹475", isJain: false, category: "Pot Rice & Noodles" },
      { id: "pr-6", name: "Pot Noodles With Exotic Veg (Butter Garlic)", description: "Exotic vegetables in butter garlic sauce with noodles", price: "₹475", isJain: false, category: "Pot Rice & Noodles" },
      { id: "pr-7", name: "Crackling Pot Noodles (Black bean)", description: "Crackling noodles in black bean sauce", price: "₹475", isJain: false, category: "Pot Rice & Noodles" },
      { id: "pr-8", name: "Crackling Pot Noodles (Schezwan)", description: "Crackling noodles in schezwan sauce", price: "₹475", isJain: false, category: "Pot Rice & Noodles" },
      { id: "pr-9", name: "Crackling Pot Noodles (Burnt Garlic)", description: "Crackling noodles in burnt garlic sauce", price: "₹475", isJain: false, category: "Pot Rice & Noodles" },
    ],
  },
  {
    id: "desi-mains",
    name: "Desi Mains & Curries",
    icon: "🍛",
    items: [
      { id: "dm-1", name: "Rajma Chawal Pull Me Up", description: "The ultimate comfort food that hugs you inside out!", price: "₹525", isJain: false, category: "Desi Mains & Curries" },
      { id: "dm-2", name: "Paneer Methi Makhani [J]", description: "Rich buttery delight with aromatic fenugreek", price: "₹545", isJain: true, category: "Desi Mains & Curries" },
      { id: "dm-3", name: "Plant Protein Rogan Josh", description: "Tender plant-based mock meat in rich Evo signature curry", price: "₹445", isJain: false, category: "Desi Mains & Curries" },
      { id: "dm-4", name: "Exotic Veg Curry", description: "Crispy vegetables in luscious & aromatic yellow gravy", price: "₹445", isJain: false, category: "Desi Mains & Curries" },
      { id: "dm-5", name: "Palak Paneer Roulade [J]", description: "Fusion of flavours with palak & cottage cheese in roulade style", price: "₹495", isJain: true, category: "Desi Mains & Curries" },
      { id: "dm-6", name: "Mock Meat & Cottage Cheese Kofta", description: "With roasted bell pepper gravy", price: "₹455", isJain: false, category: "Desi Mains & Curries" },
      { id: "dm-7", name: "Mushroom Chilli", description: "Crispy mushroom tossed in miso soya chilli sauce", price: "₹395", isJain: false, category: "Desi Mains & Curries" },
      { id: "dm-8", name: "Plant Protein Lollipop (Vegan)", description: "Savoury vegan delight", price: "₹345", isJain: false, category: "Desi Mains & Curries" },
      { id: "dm-9", name: "Classic Paneer Chilli [J]", description: "Onion, bell peppers, scallions & cashew, wok tossed in spicy house special sauce", price: "₹395", isJain: true, category: "Desi Mains & Curries" },
      { id: "dm-10", name: "P.T.M (Paneer Tikka Masala) [J]", description: "Roasted paneer in spicy homemade signature gravy", price: "₹445", isJain: true, category: "Desi Mains & Curries" },
      { id: "dm-11", name: "Veg Kolhapuri", description: "A fiery, spice-packed Maharashtrian vegetable curry", price: "₹425", isJain: false, category: "Desi Mains & Curries" },
      { id: "dm-12", name: "Vegetable Lababdar [J]", description: "Fresh vegetables cooked in a creamy tomato based sauce & spices", price: "₹445", isJain: true, category: "Desi Mains & Curries" },
      { id: "dm-13", name: "Dal Tadka [J]", description: "Classic tempered lentils", price: "₹345", isJain: true, category: "Desi Mains & Curries" },
      { id: "dm-14", name: "81 Hours Cooked Dal Makhani [J]", description: "Rich & velvety lentils slow-cooked for eight hours in a tandoor oven", price: "₹425", isJain: true, category: "Desi Mains & Curries" },
      { id: "dm-15", name: "Palak Khichdi [J]", description: "Comfort food with spinach and rice", price: "₹395", isJain: true, category: "Desi Mains & Curries" },
      { id: "dm-16", name: "Dal Khichdi [J]", description: "Classic comfort food with lentils and rice", price: "₹395", isJain: true, category: "Desi Mains & Curries" },
    ],
  },
  {
    id: "tandoor",
    name: "Tandoor Starter",
    icon: "🔥",
    items: [
      { id: "td-1", name: "Tandoori Chipotle Baby Potato", description: "Served with garlic aioli", price: "₹375", isJain: false, category: "Tandoor Starter" },
      { id: "td-2", name: "Reshampatti Paneer Tikka [J]", description: "Smoky goodness of paneer with reshampatti chilli", price: "₹415", isJain: true, category: "Tandoor Starter" },
      { id: "td-3", name: "Pesto Paneer Tikka [J]", description: "Grilled cottage cheese kebabs, spices with cilantro pesto", price: "₹415", isJain: true, category: "Tandoor Starter" },
      { id: "td-4", name: "Saffron Paneer [J]", description: "Saffron & yellow chilli marinated paneer roasted to perfection", price: "₹425", isJain: true, category: "Tandoor Starter" },
      { id: "td-5", name: "Tandoori Broccoli Served With Harissa Sauce [J]", description: "Spicy harissa, creamy cheese & tender broccoli", price: "₹395", isJain: true, category: "Tandoor Starter" },
      { id: "td-6", name: "Tandoori Soya Chaap", description: "Marinated in a blend of black pepper & cream", price: "₹415", isJain: false, category: "Tandoor Starter" },
      { id: "td-7", name: "Vegetable Seekh Kabab", description: "Iconic north indian veg kabab", price: "₹395", isJain: false, category: "Tandoor Starter" },
    ],
  },
  {
    id: "pizza",
    name: "Wood Fire Pizza XI\" (Roman Style Aged Dough)",
    icon: "🍕",
    items: [
      { id: "pz-1", name: "Classic Margherita [J]", description: "Mozzarella, aromatic basil & smoky tomato sauce", price: "₹395", isJain: true, category: "Wood Fire Pizza" },
      { id: "pz-2", name: "Pesto Burrata", description: "Burrata cheese, pesto sauce, charred cherry tomatoes, arugula, olives & tomato sauce", price: "₹615", isJain: false, category: "Wood Fire Pizza" },
      { id: "pz-3", name: "Sicilia [J]", description: "Sundried tomatoes, artichokes, olives, pickled onions, basil", price: "₹545", isJain: true, category: "Wood Fire Pizza" },
      { id: "pz-4", name: "Exotic Veg Pizza [J]", description: "Exotic vegetables, tomato sauce, caramelized onions, jalapeno & truffle oil", price: "₹595", isJain: true, category: "Wood Fire Pizza" },
      { id: "pz-5", name: "Greek Style Pizza [J]", description: "Ripe tomatoes, raw onion, artichokes, briny olives & crumbel feta cheese", price: "₹605", isJain: true, category: "Wood Fire Pizza" },
      { id: "pz-6", name: "Nawabi Pizza", description: "Cherry tomato, capsicum, paneer tikka", price: "₹575", isJain: false, category: "Wood Fire Pizza" },
      { id: "pz-7", name: "Corn & Cheese! [J]", description: "Kids' favourite", price: "₹525", isJain: true, category: "Wood Fire Pizza" },
      { id: "pz-8", name: "Fiamma Pizza", description: "Caramelized onions, wilted spinach, sautéed mushrooms, chilli flakes, roasted garlic", price: "₹525", isJain: false, category: "Wood Fire Pizza" },
    ],
  },
  {
    id: "fondue",
    name: "Fondue (Served with Pesto Croutons)",
    icon: "🫕",
    items: [
      { id: "fn-1", name: "Sweet Pepper Confit Fondue [J]", description: "Yellow cheddar, gruyere, fontina, parmesan served with croutons", price: "₹625", isJain: true, category: "Fondue" },
      { id: "fn-2", name: "Jalapeno & Sundried Tomato Fondue [J]", description: "Fontina, gruyere, yellow cheddar, served with croutons", price: "₹625", isJain: true, category: "Fondue" },
      { id: "fn-3", name: "Pav Bhaji Fondue", description: "Spicy mixture of mashed veggies combined with cheese & served hot with croutons", price: "₹525", isJain: false, category: "Fondue" },
    ],
  },
  {
    id: "pasta-risotto",
    name: "Pasta & Risotto (Served with Pesto Bread)",
    icon: "🍝",
    items: [
      { id: "ps-1", name: "Spinach & Ricotta Ravioli", description: "Served in a rich paprika cream sauce, with parmesan", price: "₹495", isJain: false, category: "Pasta & Risotto" },
      { id: "ps-2", name: "Saffron Risotto [J]", description: "Slow cooked saffron flavoured riso, topped with buttered peas & mascarpone", price: "₹495", isJain: true, category: "Pasta & Risotto" },
      { id: "ps-3", name: "Cauliflower Steak", description: "Classic hummus, chimichurri sauce", price: "₹495", isJain: false, category: "Pasta & Risotto" },
      { id: "ps-4", name: "Penne With Cherry Tomato Sauce", description: "Fiery & creamy tomato based sauce", price: "₹495", isJain: false, category: "Pasta & Risotto" },
      { id: "ps-5", name: "Penne In Porcini Cream Sauce", description: "Tossed in a creamy porcini mushroom sauce", price: "₹495", isJain: false, category: "Pasta & Risotto" },
      { id: "ps-6", name: "Penne Alfredo [J]", description: "Penne pasta in classic alfredo sauce", price: "₹495", isJain: true, category: "Pasta & Risotto" },
      { id: "ps-7", name: "Sicilian Lasagna [J]", description: "Layers of fresh pasta stacked & baked with roasted tomato sauce & pesto", price: "₹495", isJain: true, category: "Pasta & Risotto" },
      { id: "ps-8", name: "Roasted Beetroot Risotto", description: "Served with mascarpone pine nuts", price: "₹495", isJain: false, category: "Pasta & Risotto" },
      { id: "ps-9", name: "PTM Mac N Cheese Skillet [J]", description: "Fusion of classic mac n cheese & dry paneer tikka masala", price: "₹525", isJain: true, category: "Pasta & Risotto" },
      { id: "ps-10", name: "Cottage Cheese Steak [J]", description: "Marinated cottage cheese served with edamame mash & roasted red pimento coulis", price: "₹525", isJain: true, category: "Pasta & Risotto" },
    ],
  },
  {
    id: "desi-sides",
    name: "Desi Sides",
    icon: "🫓",
    items: [
      { id: "sd-1", name: "Safed Chawal", description: "Steamed basmati rice", price: "₹275", isJain: false, category: "Desi Sides" },
      { id: "sd-2", name: "Jeera Rice", description: "Fragrant basmati rice infused with cumin", price: "₹315", isJain: false, category: "Desi Sides" },
      { id: "sd-3", name: "Lucknowi Biryani [J]", description: "Basmati rice, assorted vegetables & exotic spices", price: "₹425", isJain: true, category: "Desi Sides" },
      { id: "sd-4", name: "Mock Meat Kofta Biryani [J]", description: "Aromatic basmati rice with flavourful koftas", price: "₹475", isJain: true, category: "Desi Sides" },
      { id: "sd-5", name: "Tandoori Roti", description: "Classic whole wheat bread from tandoor", price: "₹70", isJain: false, category: "Desi Sides" },
      { id: "sd-6", name: "Butter Roti", description: "Tandoori roti with butter", price: "₹80", isJain: false, category: "Desi Sides" },
      { id: "sd-7", name: "Butter Naan", description: "Classic naan with butter", price: "₹85", isJain: false, category: "Desi Sides" },
      { id: "sd-8", name: "Chilli Garlic Naan", description: "Spicy naan with chilli and garlic", price: "₹95", isJain: false, category: "Desi Sides" },
      { id: "sd-9", name: "Cheese Garlic Naan", description: "Naan loaded with cheese and garlic", price: "₹115", isJain: false, category: "Desi Sides" },
      { id: "sd-10", name: "Stuffed Naan", description: "Naan with special stuffing", price: "₹165", isJain: false, category: "Desi Sides" },
      { id: "sd-11", name: "Amritsari Kulcha", description: "Stuffed with flavourful spiced potatoes", price: "₹195", isJain: false, category: "Desi Sides" },
      { id: "sd-12", name: "Malabari Parota", description: "Famous Kerala parotta", price: "₹115", isJain: false, category: "Desi Sides" },
      { id: "sd-13", name: "Laccha Paratha", description: "Multi-layered Indian bread", price: "₹115", isJain: false, category: "Desi Sides" },
      { id: "sd-14", name: "Missi Roti", description: "Whole wheat flour & gram flour", price: "₹115", isJain: false, category: "Desi Sides" },
    ],
  },
  {
    id: "sushi",
    name: "Sushi",
    icon: "🍣",
    items: [
      { id: "su-1", name: "Purple Dragon Roll", description: "Mascarpone, sweet shiitake, spicy mayo, togarashi & pickled carrot", price: "4pc ₹395 / 8pc ₹555", isJain: false, category: "Sushi" },
      { id: "su-2", name: "Baby Corn Tempura Roll", description: "Jalapeno, tobanjan, avocado, baby corn tempura, sesame", price: "4pc ₹395 / 8pc ₹555", isJain: false, category: "Sushi" },
      { id: "su-3", name: "Avocado Crunchy Sushi Roll", description: "Avocado, spicy mayo, cream cheese, tempura", price: "4pc ₹375 / 8pc ₹525", isJain: false, category: "Sushi" },
      { id: "su-4", name: "Crispy Asparagus Roll", description: "Tempura-fried asparagus, cream cheese, tanuki, spicy mayo", price: "4pc ₹375 / 8pc ₹525", isJain: false, category: "Sushi" },
      { id: "su-5", name: "Yakuza Blue Rice Roll", description: "Crispy asparagus, avocado, cucumber, torched with cheese sauce", price: "4pc ₹395 / 8pc ₹555", isJain: false, category: "Sushi" },
      { id: "su-6", name: "Bellpepper Nigiri", description: "Rice topped with a thin slice of Roasted Bellpepper", price: "4pc ₹395 / 8pc ₹555", isJain: false, category: "Sushi" },
      { id: "su-7", name: "Greenhouse California Roll [J]", description: "Avocado, cucumber, lettuce, edamame & cream cheese", price: "4pc ₹395 / 8pc ₹555", isJain: true, category: "Sushi" },
    ],
  },
  {
    id: "bao",
    name: "Bao (3 pcs)",
    icon: "🥟",
    items: [
      { id: "ba-1", name: "Reshampatti Paneer Tikka Bao [J]", description: "Reshampatti chilli flavoured paneer & spicy chilli mayo (3 pcs)", price: "₹425", isJain: true, category: "Bao" },
      { id: "ba-2", name: "Mushrooms Chilli Bao", description: "Shiitake, black fungus, mushroom (3 pcs)", price: "₹465", isJain: false, category: "Bao" },
      { id: "ba-3", name: "Crispy Veggie Bao [J]", description: "Sweet chilli sauce & sesame (3 pcs)", price: "₹425", isJain: true, category: "Bao" },
    ],
  },
  {
    id: "dimsum",
    name: "Dimsum (4 pcs)",
    icon: "🥟",
    items: [
      { id: "dm-1", name: "Crystal Dumpling", description: "Asparagus, waterchesnut, celery, carrot (4 pcs)", price: "₹425", isJain: false, category: "Dimsum" },
      { id: "dm-2", name: "Edamame Truffle Dumpling", description: "Combination of edamame & aromatic truffle paste (4 pcs)", price: "₹455", isJain: false, category: "Dimsum" },
      { id: "dm-3", name: "Wild Mushroom Dim Sum", description: "Earthy flavours of wild mushrooms & cream cheese (4 pcs)", price: "₹455", isJain: false, category: "Dimsum" },
      { id: "dm-4", name: "Corn & Water Chestnut Dim Sum", description: "Sweet corn with crunchy water chestnuts (4 pcs)", price: "₹425", isJain: false, category: "Dimsum" },
      { id: "dm-5", name: "Exotic Veg Gyoza", description: "Pokchoy, carrot, beans, cauliflower (4 pcs)", price: "₹425", isJain: false, category: "Dimsum" },
    ],
  },
  {
    id: "asian-rice-noodles",
    name: "Asian Rice & Noodles",
    icon: "🍚",
    items: [
      { id: "ar-1", name: "Truffle Edamame Purple Rice", description: "Purple rice combined with goodness of edamame beans", price: "₹375", isJain: false, category: "Asian Rice & Noodles" },
      { id: "ar-2", name: "Spicy Basil Fried Rice", description: "Chilli & basil flavored rice tossed with mix veggies", price: "₹375", isJain: false, category: "Asian Rice & Noodles" },
      { id: "ar-3", name: "Sticky Jasmine Rice", description: "Fragrant jasmine rice", price: "₹315", isJain: false, category: "Asian Rice & Noodles" },
      { id: "ar-4", name: "Wok Tossed Veg Fried Rice", description: "Classic vegetable fried rice", price: "₹375", isJain: false, category: "Asian Rice & Noodles" },
      { id: "ar-5", name: "Burnt Garlic Rice", description: "Aromatic burnt garlic flavored rice", price: "₹395", isJain: false, category: "Asian Rice & Noodles" },
      { id: "ar-6", name: "Wok Tossed Hakka Noodles", description: "Classic Indo-Chinese noodles", price: "₹375", isJain: false, category: "Asian Rice & Noodles" },
      { id: "ar-7", name: "Spicy Basil Noodles", description: "Thai style basil noodles", price: "₹395", isJain: false, category: "Asian Rice & Noodles" },
      { id: "ar-8", name: "Phad Thai Noodles", description: "Authentic Thai street food", price: "₹405", isJain: false, category: "Asian Rice & Noodles" },
      { id: "ar-9", name: "Veg Korean Style Ramen", description: "Korean inspired ramen bowl", price: "₹455", isJain: false, category: "Asian Rice & Noodles" },
    ],
  },
];

export const getAllItems = (): MenuItem[] => {
  return menuCategories.flatMap((category) => category.items);
};

export const getJainItems = (): MenuItem[] => {
  return getAllItems().filter((item) => item.isJain);
};
