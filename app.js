const photo = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const recipes = [
  { id: "fluffy-pancakes", name: "Fluffy Buttermilk Pancakes", description: "Golden edges, tender middles, and a little maple magic for slow mornings.", sections: ["breakfast"], time: 25, difficulty: "Easy", image: "photo-1528207776546-365bb710ee93", cuisine: "American", vegetarian: true, tag: "Morning favorite", calories: 410, protein: 11 },
  { id: "masala-dosa", name: "Crisp Masala Dosa", description: "A lacy golden dosa wrapped around warmly spiced potato masala.", sections: ["breakfast", "indian"], time: 40, difficulty: "Medium", image: "photo-1668236543090-82eba5ee5976", cuisine: "South Indian", vegetarian: true, tag: "South India", calories: 330, protein: 8 },
  { id: "poha", name: "Lemon Peanut Poha", description: "A bright, comforting bowl with curry leaves, toasted peanuts, and lime.", sections: ["breakfast", "indian"], time: 20, difficulty: "Easy", image: "photo-1606491956689-2ea866880c84", cuisine: "Maharashtrian", vegetarian: true, tag: "Quick & easy", calories: 290, protein: 7 },
  { id: "masala-omelette", name: "Green Chilli Masala Omelette", description: "Soft eggs folded with herbs, onion, and just enough heat.", sections: ["breakfast"], time: 15, difficulty: "Easy", image: "photo-1525351484163-7529414344d8", cuisine: "Indian-inspired", vegetarian: false, tag: "High protein", calories: 280, protein: 20 },
  { id: "smoothie-bowl", name: "Mango Berry Smoothie Bowl", description: "A sunny blend of mango and berries finished with crunchy seeds.", sections: ["breakfast", "healthy"], time: 10, difficulty: "Easy", image: "photo-1511690743698-d9d85f2fbf38", cuisine: "Fresh & bright", vegetarian: true, vegan: true, tag: "Plant based", calories: 320, protein: 9 },
  { id: "avocado-toast", name: "Avocado & Garden Toast", description: "Smashed avocado, peppery greens, and lemon on crisp sourdough.", sections: ["breakfast", "healthy"], time: 12, difficulty: "Easy", image: "photo-1525351484163-7529414344d8", cuisine: "Modern", vegetarian: true, vegan: true, tag: "Plant based", calories: 350, protein: 10 },
  { id: "idli-sambar", name: "Idli with Garden Sambar", description: "Cloud-soft steamed rice cakes with a deeply savory lentil stew.", sections: ["breakfast", "indian", "healthy"], time: 35, difficulty: "Medium", image: "photo-1589301760014-d929f3979dbc", cuisine: "Karnataka", vegetarian: true, vegan: true, tag: "Naturally vegan", calories: 310, protein: 12 },
  { id: "shakshuka", name: "Smoky Tomato Shakshuka", description: "Eggs gently cooked in a peppery tomato sauce with warm spices.", sections: ["breakfast"], time: 30, difficulty: "Easy", image: "photo-1590412200988-a436970781fa", cuisine: "North African", vegetarian: false, tag: "One pan", calories: 340, protein: 18 },
  { id: "chicken-sausage-breakfast", name: "Chicken Sausage & Egg Skillet", description: "A hearty one-pan breakfast with browned chicken sausage, soft eggs, and peppers.", sections: ["breakfast"], time: 25, difficulty: "Easy", image: "photo-1532550907401-a500c9a57435", cuisine: "Modern", vegetarian: false, tag: "High protein", calories: 390, protein: 29 },
  { id: "berry-french-toast", name: "Vanilla Berry French Toast", description: "Custardy golden toast with warm berries and a little maple syrup.", sections: ["breakfast"], time: 20, difficulty: "Easy", image: "photo-1484723091739-30a097e8f929", cuisine: "French-inspired", vegetarian: true, tag: "Weekend favorite", calories: 390, protein: 14 },
  { id: "egg-bhurji", name: "Mumbai Masala Egg Bhurji", description: "Soft scrambled eggs with tomato, green chilli, and buttery pav on the side.", sections: ["breakfast", "indian"], time: 18, difficulty: "Easy", image: "photo-1525351484163-7529414344d8", cuisine: "Mumbai", vegetarian: false, tag: "Quick & easy", calories: 320, protein: 21 },

  { id: "indian-thali", name: "Everyday Indian Thali", description: "A generous little tour of dal, seasonal vegetables, rice, and roti.", sections: ["lunch", "indian"], time: 50, difficulty: "Medium", image: "photo-1546833999-b9f581a1996d", cuisine: "North Indian", vegetarian: true, tag: "Regional table", calories: 620, protein: 22 },
  { id: "vegetable-pulao", name: "Fragrant Vegetable Pulao", description: "Basmati rice steamed with whole spices and tender garden vegetables.", sections: ["lunch", "indian"], time: 35, difficulty: "Easy", image: "photo-1512058564366-18510be2db19", cuisine: "North Indian", vegetarian: true, tag: "Weekday staple", calories: 430, protein: 12 },
  { id: "pesto-pasta", name: "Basil Pesto Pasta", description: "Silky ribbons of pasta tossed with fresh basil, parmesan, and lemon.", sections: ["lunch", "italian"], time: 25, difficulty: "Easy", image: "photo-1473093295043-cdd812d0e601", cuisine: "Italian", vegetarian: true, tag: "Quick & easy", calories: 510, protein: 18 },
  { id: "fried-rice", name: "Ginger Garden Fried Rice", description: "A colorful skillet of crisp vegetables, rice, ginger, and sesame.", sections: ["lunch", "healthy"], time: 22, difficulty: "Easy", image: "photo-1603133872878-684f208fb84b", cuisine: "East Asian", vegetarian: true, vegan: true, tag: "Plant based", calories: 390, protein: 11 },
  { id: "quinoa-salad", name: "Citrus Quinoa Crunch Salad", description: "Nutty quinoa, crisp greens, chickpeas, and a lively citrus dressing.", sections: ["lunch", "healthy"], time: 25, difficulty: "Easy", image: "photo-1512621776951-a57141f2eefd", cuisine: "Fresh & bright", vegetarian: true, vegan: true, tag: "High fiber", calories: 380, protein: 14 },
  { id: "lemon-chicken-bowl", name: "Lemon Herb Chicken Bowl", description: "Juicy grilled chicken with grains, crunchy greens, and herbs.", sections: ["lunch", "healthy"], time: 30, difficulty: "Easy", image: "photo-1547592180-85f173990554", cuisine: "Mediterranean", vegetarian: false, tag: "High protein", calories: 460, protein: 34 },
  { id: "rajma-chawal", name: "Punjabi Rajma Chawal", description: "Slow-simmered kidney beans in tomato masala, served over rice.", sections: ["lunch", "indian", "healthy"], time: 55, difficulty: "Medium", image: "photo-1631452180519-c014fe946bc7", cuisine: "Punjab", vegetarian: true, vegan: true, tag: "Comfort food", calories: 480, protein: 19 },
  { id: "kerala-avial", name: "Kerala Garden Avial", description: "Tender seasonal vegetables dressed with coconut, curry leaves, and yogurt.", sections: ["lunch", "indian"], time: 35, difficulty: "Easy", image: "photo-1547592180-85f173990554", cuisine: "Kerala", vegetarian: true, tag: "Regional table", calories: 320, protein: 10 },
  { id: "tamil-lemon-rice", name: "Tamil Nadu Lemon Rice", description: "Bright, fragrant rice tempered with mustard seeds, curry leaves, and peanuts.", sections: ["lunch", "indian"], time: 25, difficulty: "Easy", image: "photo-1512058564366-18510be2db19", cuisine: "Tamil Nadu", vegetarian: true, vegan: true, tag: "Quick & easy", calories: 370, protein: 9 },
  { id: "rajasthani-dal-baati", name: "Rajasthani Dal Baati", description: "Golden baked wheat rolls with rich lentils and a little melted ghee.", sections: ["dinner", "indian"], time: 65, difficulty: "Medium", image: "photo-1546833999-b9f581a1996d", cuisine: "Rajasthan", vegetarian: true, tag: "Regional table", calories: 560, protein: 21 },
  { id: "caprese-salad", name: "Tomato & Basil Caprese", description: "Ripe tomatoes, creamy mozzarella, basil, and a good olive oil.", sections: ["lunch", "italian", "healthy"], time: 12, difficulty: "Easy", image: "photo-1490645935967-10de6ba17061", cuisine: "Italian", vegetarian: true, tag: "No-cook", calories: 300, protein: 16 },
  { id: "chicken-kathi-roll", name: "Spiced Chicken Kathi Roll", description: "Juicy masala chicken, crunchy onions, and mint chutney tucked into a warm roti.", sections: ["lunch", "indian"], time: 35, difficulty: "Medium", image: "photo-1603894584373-5ac82b2ae398", cuisine: "Kolkata", vegetarian: false, tag: "Street food", calories: 480, protein: 32 },
  { id: "shrimp-pesto-pasta", name: "Lemon Shrimp Pesto Pasta", description: "Garlicky shrimp and fresh basil pesto twirled through quick weeknight pasta.", sections: ["lunch", "italian"], time: 25, difficulty: "Easy", image: "photo-1473093295043-cdd812d0e601", cuisine: "Italian", vegetarian: false, tag: "Quick & easy", calories: 520, protein: 31 },
  { id: "tuna-nicoise", name: "Tuna Niçoise Lunch Salad", description: "Seared tuna, tender potatoes, green beans, and a sharp mustard dressing.", sections: ["lunch", "healthy"], time: 30, difficulty: "Medium", image: "photo-1512621776951-a57141f2eefd", cuisine: "French", vegetarian: false, tag: "High protein", calories: 430, protein: 35 },
  { id: "chicken-fried-rice", name: "Ginger Chicken Fried Rice", description: "A quick wok supper of crisp-edged chicken, fluffy rice, and vegetables.", sections: ["lunch", "dinner"], time: 28, difficulty: "Easy", image: "photo-1603133872878-684f208fb84b", cuisine: "East Asian", vegetarian: false, tag: "One pan", calories: 490, protein: 32 },
  { id: "chicken-shawarma-bowl", name: "Chicken Shawarma Grain Bowl", description: "Warm spiced chicken, herby grains, crunchy vegetables, and lemon yogurt.", sections: ["lunch", "healthy"], time: 35, difficulty: "Easy", image: "photo-1547592180-85f173990554", cuisine: "Middle Eastern", vegetarian: false, tag: "High protein", calories: 470, protein: 36 },
  { id: "greek-orzo-salad", name: "Greek Lemon Orzo Salad", description: "Bright orzo with cucumber, olives, tomato, and crumbled feta.", sections: ["lunch", "healthy"], time: 25, difficulty: "Easy", image: "photo-1512621776951-a57141f2eefd", cuisine: "Mediterranean", vegetarian: true, tag: "Fresh & bright", calories: 380, protein: 13 },

  { id: "paneer-curry", name: "Creamy Paneer Tikka Curry", description: "Charred paneer in a gently spiced tomato and cashew sauce.", sections: ["dinner", "indian"], time: 45, difficulty: "Medium", image: "photo-1631452180519-c014fe946bc7", cuisine: "North Indian", vegetarian: true, tag: "Family favorite", calories: 540, protein: 25 },
  { id: "grilled-chicken", name: "Rosemary Grilled Chicken", description: "A crisp-edged, juicy chicken dinner with lemon and garden herbs.", sections: ["dinner"], time: 35, difficulty: "Easy", image: "photo-1532550907401-a500c9a57435", cuisine: "Mediterranean", vegetarian: false, tag: "High protein", calories: 420, protein: 39 },
  { id: "vegetable-biryani", name: "Vegetable Biryani", description: "Fragrant basmati layered with vegetables, saffron, and warming spices.", sections: ["dinner", "indian"], time: 70, difficulty: "Medium", image: "photo-1563379091339-03246963d96c", cuisine: "Hyderabadi", vegetarian: true, vegan: true, tag: "Weekend special", calories: 510, protein: 14 },
  { id: "sesame-noodles", name: "Sesame Ginger Noodles", description: "Slurpable noodles with crunchy vegetables and a savory sesame gloss.", sections: ["dinner"], time: 25, difficulty: "Easy", image: "photo-1569718212165-3a8278d5f624", cuisine: "East Asian", vegetarian: true, vegan: true, tag: "Quick & easy", calories: 440, protein: 13 },
  { id: "lentil-soup", name: "Rustic Red Lentil Soup", description: "A velvety, lemon-bright pot of lentils for chilly evenings.", sections: ["dinner", "healthy"], time: 35, difficulty: "Easy", image: "photo-1547592180-85f173990554", cuisine: "Mediterranean", vegetarian: true, vegan: true, tag: "Plant based", calories: 330, protein: 20 },
  { id: "salmon-dinner", name: "Honey Lime Salmon", description: "Flaky oven-roasted salmon with greens and a sweet-tart glaze.", sections: ["dinner", "healthy"], time: 28, difficulty: "Easy", image: "photo-1467003909585-2f8a72700288", cuisine: "Modern", vegetarian: false, tag: "High protein", calories: 470, protein: 36 },
  { id: "mushroom-risotto", name: "Wild Mushroom Risotto", description: "Creamy arborio rice with earthy mushrooms and fresh thyme.", sections: ["dinner", "italian"], time: 45, difficulty: "Medium", image: "photo-1476124369491-e7addf5db371", cuisine: "Northern Italy", vegetarian: true, tag: "Slow Sunday", calories: 560, protein: 17 },
  { id: "tomato-gnocchi", name: "Pillowy Gnocchi Pomodoro", description: "Soft potato dumplings tucked into a bright, slow-simmered tomato sauce.", sections: ["dinner", "italian"], time: 30, difficulty: "Easy", image: "photo-1551183053-bf91a1d81141", cuisine: "Italian", vegetarian: true, tag: "Family favorite", calories: 490, protein: 15 },
  { id: "butter-chicken", name: "Slow-Simmered Butter Chicken", description: "Tandoori-spiced chicken in a mellow tomato, butter, and cream sauce.", sections: ["dinner", "indian"], time: 55, difficulty: "Medium", image: "photo-1603894584373-5ac82b2ae398", cuisine: "North Indian", vegetarian: false, tag: "Family favorite", calories: 590, protein: 38 },
  { id: "kerala-fish-curry", name: "Kerala Coconut Fish Curry", description: "Tender fish simmered in a tangy coconut gravy with curry leaves.", sections: ["dinner", "indian"], time: 35, difficulty: "Medium", image: "photo-1565680018434-b513d5e5fd47", cuisine: "Kerala", vegetarian: false, tag: "Coastal favorite", calories: 420, protein: 34 },
  { id: "chicken-parmesan", name: "Crispy Chicken Parmesan", description: "Golden breaded chicken with tomato sauce, basil, and bubbling mozzarella.", sections: ["dinner", "italian"], time: 45, difficulty: "Medium", image: "photo-1632778149955-e80f8ceca2e8", cuisine: "Italian-American", vegetarian: false, tag: "Family favorite", calories: 610, protein: 42 },
  { id: "lamb-kofta", name: "Herby Lamb Kofta Bowls", description: "Cumin-scented lamb skewers with grains, crunchy salad, and cool yogurt.", sections: ["dinner", "healthy"], time: 35, difficulty: "Medium", image: "photo-1529042410759-befb1204b468", cuisine: "Eastern Mediterranean", vegetarian: false, tag: "High protein", calories: 520, protein: 36 },
  { id: "turkey-meatballs", name: "Italian Turkey Meatballs", description: "Tender herb-flecked turkey meatballs nestled in a bright tomato sauce.", sections: ["dinner", "italian", "healthy"], time: 40, difficulty: "Easy", image: "photo-1529042410759-befb1204b468", cuisine: "Italian", vegetarian: false, tag: "High protein", calories: 440, protein: 38 },
  { id: "salmon-poke-bowl", name: "Sesame Salmon Poke Bowl", description: "Gingered salmon, warm rice, crisp cucumber, and creamy avocado in one bowl.", sections: ["dinner", "healthy"], time: 30, difficulty: "Easy", image: "photo-1546069901-ba9599a7e63c", cuisine: "Hawaiian-inspired", vegetarian: false, tag: "High protein", calories: 510, protein: 35 },
  { id: "prawn-biryani", name: "Coastal Prawn Biryani", description: "Fragrant basmati layered with spiced prawns, mint, and fried onions.", sections: ["dinner", "indian"], time: 55, difficulty: "Medium", image: "photo-1563379091339-03246963d96c", cuisine: "Coastal Indian", vegetarian: false, tag: "Weekend special", calories: 540, protein: 32 },
  { id: "margherita-pizza", name: "Classic Margherita Pizza", description: "A blistered thin crust topped with tomato, milky mozzarella, and basil.", sections: ["dinner", "italian"], time: 40, difficulty: "Medium", image: "photo-1513104890138-7c749659a591", cuisine: "Naples", vegetarian: true, tag: "Italian classic", calories: 510, protein: 22 },
  { id: "vegetable-lasagna", name: "Roasted Vegetable Lasagna", description: "Tender pasta sheets layered with roasted vegetables, tomato, and ricotta.", sections: ["dinner", "italian"], time: 75, difficulty: "Medium", image: "photo-1574894709920-11b28e7367e3", cuisine: "Italian", vegetarian: true, tag: "Family favorite", calories: 560, protein: 25 },

  { id: "samosa", name: "Crispy Pea & Potato Samosas", description: "Flaky pastry pockets with a warmly spiced potato and pea filling.", sections: ["snacks", "indian"], time: 50, difficulty: "Medium", image: "photo-1601050690597-df0568f70950", cuisine: "North Indian", vegetarian: true, tag: "Party favorite", calories: 270, protein: 6 },
  { id: "garden-sandwich", name: "The Garden Picnic Sandwich", description: "A generous stack of crunchy vegetables, herbed spread, and good bread.", sections: ["snacks"], time: 15, difficulty: "Easy", image: "photo-1528735602780-2552fd46c7af", cuisine: "Modern", vegetarian: true, tag: "Quick bite", calories: 360, protein: 14 },
  { id: "spring-rolls", name: "Crisp Vegetable Spring Rolls", description: "Shatteringly crisp wrappers around ginger-scented vegetables.", sections: ["snacks"], time: 35, difficulty: "Medium", image: "photo-1544025162-d76694265947", cuisine: "East Asian", vegetarian: true, vegan: true, tag: "Party appetizer", calories: 240, protein: 8 },
  { id: "pakora", name: "Rainy Day Onion Pakora", description: "Crispy chickpea-battered onions with a little ajwain and green chilli.", sections: ["snacks", "indian"], time: 25, difficulty: "Easy", image: "photo-1601050690117-94f5f6fa8bd7", cuisine: "Karnataka", vegetarian: true, vegan: true, tag: "Quick bite", calories: 230, protein: 7 },
  { id: "bruschetta", name: "Tomato Basil Bruschetta", description: "Toasty sourdough piled with juicy tomatoes, basil, and garlic.", sections: ["snacks", "italian"], time: 18, difficulty: "Easy", image: "photo-1572695157366-5e585ab2b69f", cuisine: "Italian", vegetarian: true, vegan: true, tag: "Party appetizer", calories: 210, protein: 6 },
  { id: "hummus-plate", name: "Silky Lemon Hummus Plate", description: "Whipped chickpeas with crunchy vegetables and warm flatbread.", sections: ["snacks", "healthy"], time: 15, difficulty: "Easy", image: "photo-1577906096429-f73c2c312435", cuisine: "Levantine", vegetarian: true, vegan: true, tag: "Plant based", calories: 280, protein: 12 },
  { id: "baked-falafel", name: "Herby Baked Falafel Bites", description: "Golden chickpea and herb bites with a cool lemon tahini dip.", sections: ["snacks", "healthy"], time: 35, difficulty: "Easy", image: "photo-1593001874117-c99c800e3eb6", cuisine: "Levantine", vegetarian: true, vegan: true, tag: "Baked favorite", calories: 290, protein: 15 },
  { id: "spinach-puffs", name: "Spinach & Ricotta Puffs", description: "Golden pastry parcels with creamy ricotta and tender spinach.", sections: ["snacks", "italian"], time: 40, difficulty: "Medium", image: "photo-1621939514649-280e2aa1f9d5", cuisine: "Italian", vegetarian: true, tag: "Baked favorite", calories: 310, protein: 11 },
  { id: "chicken-tikka-skewers", name: "Chicken Tikka Party Skewers", description: "Yogurt-marinated chicken with charred edges and a squeeze of lime.", sections: ["snacks", "indian"], time: 35, difficulty: "Easy", image: "photo-1599487488170-d11ec9c172f0", cuisine: "North Indian", vegetarian: false, tag: "Party appetizer", calories: 260, protein: 31 },
  { id: "prawn-toast", name: "Sesame Prawn Toast", description: "Crisp golden toast topped with savory prawn mousse and sesame seeds.", sections: ["snacks"], time: 25, difficulty: "Medium", image: "photo-1625944525533-473f1a3d54e7", cuisine: "East Asian", vegetarian: false, tag: "Party appetizer", calories: 290, protein: 19 },
  { id: "paneer-tikka-bites", name: "Smoky Paneer Tikka Bites", description: "Charred yogurt-spiced paneer with peppers, mint chutney, and lime.", sections: ["snacks", "indian"], time: 30, difficulty: "Easy", image: "photo-1567188040759-fb8a883dc6d8", cuisine: "North Indian", vegetarian: true, tag: "Party appetizer", calories: 280, protein: 18 },
  { id: "crispy-fish-fingers", name: "Crispy Herbed Fish Fingers", description: "Flaky white fish in a crunchy herb crumb with quick lemon dip.", sections: ["snacks"], time: 30, difficulty: "Easy", image: "photo-1544025162-d76694265947", cuisine: "Modern", vegetarian: false, tag: "Quick bite", calories: 310, protein: 25 },

  { id: "chocolate-cake", name: "One-Bowl Chocolate Cake", description: "Deep cocoa, a tender crumb, and a cloud of silky chocolate icing.", sections: ["desserts"], time: 55, difficulty: "Easy", image: "photo-1578985545062-69928b1d9587", cuisine: "Classic", vegetarian: true, tag: "Baker's favorite", calories: 420, protein: 6 },
  { id: "fudgy-brownies", name: "Fudgy Sea Salt Brownies", description: "Crackly tops, rich centers, and just a pinch of flaky salt.", sections: ["desserts"], time: 40, difficulty: "Easy", image: "photo-1606313564200-e75d5e30476c", cuisine: "American", vegetarian: true, tag: "Chocolate", calories: 360, protein: 5 },
  { id: "mango-ice-cream", name: "No-Churn Mango Ice Cream", description: "A sunshine-bright frozen treat with ripe mango and cream.", sections: ["desserts"], time: 15, difficulty: "Easy", image: "photo-1501446529957-6226bd447c46", cuisine: "Summer", vegetarian: true, tag: "Make ahead", calories: 290, protein: 4 },
  { id: "gulab-jamun", name: "Cardamom Gulab Jamun", description: "Soft milk dumplings soaked in fragrant rose and cardamom syrup.", sections: ["desserts", "indian"], time: 55, difficulty: "Medium", image: "photo-1666190092159-3e6f8b24e4c6", cuisine: "North Indian", vegetarian: true, tag: "Traditional sweet", calories: 310, protein: 6 },
  { id: "cheesecake", name: "Baked Vanilla Cheesecake", description: "Creamy, gently tangy filling on a buttery biscuit base.", sections: ["desserts"], time: 90, difficulty: "Medium", image: "photo-1533134242443-d4fd215305ad", cuisine: "Classic", vegetarian: true, tag: "Celebration", calories: 440, protein: 8 },
  { id: "tiramisu", name: "Coffee-Soaked Tiramisu", description: "Espresso-dipped layers under a soft, cocoa-dusted mascarpone cream.", sections: ["desserts", "italian"], time: 35, difficulty: "Medium", image: "photo-1571877227200-a0d98ea607e9", cuisine: "Italian", vegetarian: true, tag: "Make ahead", calories: 390, protein: 7 },
  { id: "rasmalai", name: "Saffron Pistachio Rasmalai", description: "Delicate cheese dumplings soaking up saffron-scented milk.", sections: ["desserts", "indian"], time: 65, difficulty: "Medium", image: "photo-1589119908995-c6837fa14848", cuisine: "Bengal", vegetarian: true, tag: "Traditional sweet", calories: 280, protein: 10 },
  { id: "lemon-tart", name: "Italian Lemon Cream Tart", description: "A crisp pastry shell filled with bright, silky lemon custard.", sections: ["desserts", "italian"], time: 75, difficulty: "Medium", image: "photo-1519915028121-7d3463d20b13", cuisine: "Italian", vegetarian: true, tag: "Citrus season", calories: 340, protein: 6 },
  { id: "chocolate-mousse", name: "Silky Dark Chocolate Mousse", description: "Airy bittersweet chocolate mousse finished with softly whipped cream.", sections: ["desserts"], time: 25, difficulty: "Easy", image: "photo-1578985545062-69928b1d9587", cuisine: "French-inspired", vegetarian: true, tag: "Make ahead", calories: 330, protein: 6 },

  { id: "chickpea-bowl", name: "Roasted Chickpea Power Bowl", description: "Crispy spiced chickpeas, warm grains, and greens with lemon tahini.", sections: ["healthy"], time: 30, difficulty: "Easy", image: "photo-1512621776951-a57141f2eefd", cuisine: "Fresh & bright", vegetarian: true, vegan: true, tag: "High fiber", calories: 430, protein: 19 },
  { id: "green-goddess-salad", name: "Green Goddess Crunch Salad", description: "A crisp, herb-packed salad with creamy avocado dressing.", sections: ["healthy"], time: 20, difficulty: "Easy", image: "photo-1540420773420-3366772f4999", cuisine: "Fresh & bright", vegetarian: true, vegan: true, tag: "Plant based", calories: 320, protein: 12 },
  { id: "berry-protein-smoothie", name: "Berry Oat Protein Smoothie", description: "A cool berry blend with oats, yogurt, and a spoonful of nut butter.", sections: ["healthy"], time: 8, difficulty: "Easy", image: "photo-1553530666-ba11a7da3888", cuisine: "Fresh & bright", vegetarian: true, tag: "High protein", calories: 350, protein: 23 }
];

const navLinks = [
  ["Home", "index.html", "home"], ["Breakfast", "breakfast.html", "breakfast"],
  ["Lunch", "lunch.html", "lunch"], ["Dinner", "dinner.html", "dinner"],
  ["Snacks", "snacks.html", "snacks"], ["Desserts", "desserts.html", "desserts"]
];

const pageCopy = {
  breakfast: ["A brighter start", "Breakfast Recipes", "Wake up to something wonderful. From crisp dosa to berry-bright bowls, these morning favorites make getting out of bed feel like a good idea."],
  lunch: ["The midday table", "Lunch Recipes", "Good lunches do not need to be complicated. Find colorful bowls, comforting classics, and the kind of quick meals that carry you through the day."],
  dinner: ["Gather around", "Dinner Recipes", "From an easy Tuesday noodle bowl to the dish everyone asks for twice, make tonight's table feel a little more special."],
  snacks: ["A little something", "Snacks & Appetizers", "For the in-between moments and the just-one-more moments: crisp, savory bites made for sharing or keeping all to yourself."],
  desserts: ["Save room for joy", "Desserts & Sweets", "A home-baked cake, a spoonful of something chilled, a taste of tradition. Find a sweet finish for every kind of day."],
  indian: ["A country of countless kitchens", "Indian Cuisine", "Explore the spice, generosity, and regional rhythm of Indian cooking, from a slow-simmered Punjabi curry to the crispest South Indian dosa."],
  italian: ["La dolce cucina", "Italian Cuisine", "Simple ingredients, generous tables, and recipes worth lingering over. Bring a little Italian warmth to your own kitchen."],
  healthy: ["Feel good, eat well", "Healthy Recipes", "Nourishing does not mean settling. These balanced, colorful recipes bring plenty of flavor to the everyday."]
};

const imageUrl = (recipe, width = 900) => photo(recipe.image, width);
const recipeUrl = (recipe) => `recipe-details.html?id=${encodeURIComponent(recipe.id)}`;

function renderHeader(activePage) {
  const linkMarkup = navLinks.map(([label, href, key]) => `<a href="${href}" ${activePage === key ? 'aria-current="page"' : ""}>${label}</a>`).join("");
  const searchForm = (extraClass = "") => `<form class="search-form ${extraClass}" role="search" data-search-form><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 4.5 4.5"></path></svg><input type="search" name="q" placeholder="Find a recipe" aria-label="Search recipes" autocomplete="off"><div class="search-results" data-search-results hidden></div></form>`;
  document.querySelector("#site-header").innerHTML = `
    <header class="site-header">
      <div class="shell header-main">
        <a class="brand" href="index.html" aria-label="TasteTrail home"><img class="brand-mark" src="assets/brand-mark.svg" alt=""><span class="brand-name">Taste<span>Trail</span></span></a>
        <nav class="primary-nav" aria-label="Main navigation">${linkMarkup}<a href="indian.html" ${activePage === "indian" ? 'aria-current="page"' : ""}>Indian</a><a href="italian.html" ${activePage === "italian" ? 'aria-current="page"' : ""}>Italian</a><a href="healthy.html" ${activePage === "healthy" ? 'aria-current="page"' : ""}>Healthy</a></nav>
        <div class="header-tools">${searchForm()}<button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-navigation"><span></span><span></span><span></span></button></div>
      </div>
      <nav class="mobile-panel" id="mobile-navigation" aria-label="Mobile navigation">${searchForm("mobile-search")}<a href="index.html">Home</a><a href="breakfast.html">Breakfast</a><a href="lunch.html">Lunch</a><a href="dinner.html">Dinner</a><a href="snacks.html">Snacks &amp; Appetizers</a><a href="desserts.html">Desserts &amp; Sweets</a><a href="indian.html">Indian Cuisine</a><a href="italian.html">Italian Cuisine</a><a href="healthy.html">Healthy Recipes</a></nav>
    </header>`;
}

function renderFooter() {
  const allPages = [
    ["Home", "index.html"], ["Breakfast", "breakfast.html"], ["Lunch", "lunch.html"], ["Dinner", "dinner.html"], ["Snacks & Appetizers", "snacks.html"],
    ["Desserts & Sweets", "desserts.html"], ["Indian Cuisine", "indian.html"], ["Italian Cuisine", "italian.html"], ["Healthy Recipes", "healthy.html"], ["Recipe of the day", "recipe-details.html"]
  ];
  document.querySelector("#site-footer").innerHTML = `<footer class="site-footer"><div class="shell"><div class="footer-grid"><div class="footer-brand"><a class="brand" href="index.html"><img class="brand-mark" src="assets/brand-mark.svg" alt=""><span class="brand-name">Taste<span>Trail</span></span></a><p>Good food is a journey. Find a new favorite, follow your curiosity, and make something lovely today.</p><div class="social-links" aria-label="Social links"><a href="https://www.instagram.com/" aria-label="Instagram">ig</a><a href="https://www.pinterest.com/" aria-label="Pinterest">p</a><a href="https://www.facebook.com/" aria-label="Facebook">f</a></div></div><div><p class="footer-title">Explore</p><nav class="footer-links" aria-label="Explore pages">${allPages.slice(0, 5).map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</nav></div><div><p class="footer-title">More to savor</p><nav class="footer-links" aria-label="More pages">${allPages.slice(5).map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</nav></div><div><p class="footer-title">Our kitchen note</p><p style="max-width:220px;color:#d1ccc4;font-size:12px">A little inspiration for your next good meal, delivered with care.</p><a class="text-link" href="index.html#newsletter" style="color:#e9b999">Get the newsletter <span>→</span></a></div></div><div class="footer-bottom"><span>© 2026 TasteTrail. Made for the love of cooking.</span><span>Good food, good company, good stories.</span></div></div></footer>`;
}

function cardMarkup(recipe) {
  return `<article class="recipe-card"><a class="recipe-card-image" href="${recipeUrl(recipe)}" aria-label="View ${recipe.name}"><img src="${imageUrl(recipe)}" alt="${recipe.name}" loading="lazy"><span class="recipe-tag">${recipe.tag}</span></a><div class="recipe-card-body"><h3><a href="${recipeUrl(recipe)}">${recipe.name}</a></h3><p>${recipe.description}</p><div class="recipe-meta"><span>${recipe.time} min</span><span>${recipe.difficulty}</span><span>${recipe.vegetarian ? "Vegetarian" : "Non-veg"}</span></div><a class="text-link" href="${recipeUrl(recipe)}">View recipe <span>→</span></a></div></article>`;
}

function sectionHeading(kicker, heading, copy, href, linkLabel = "See all recipes") {
  return `<div class="section-heading"><div><p class="eyebrow">${kicker}</p><h2>${heading}</h2></div><a class="text-link" href="${href}">${linkLabel} <span>→</span></a></div>`;
}

function renderHome() {
  const trending = [recipes.find((item) => item.id === "vegetable-biryani"), recipes.find((item) => item.id === "pesto-pasta"), recipes.find((item) => item.id === "fluffy-pancakes"), recipes.find((item) => item.id === "chickpea-bowl")];
  document.querySelector("#main-content").innerHTML = `
    <section class="hero"><div class="hero-inner"><div class="hero-copy"><p class="eyebrow">A little inspiration for your table</p><h1>Discover the Joy of Cooking.</h1><p>Follow a craving, find a new favorite, and make everyday meals feel like something worth gathering around.</p><div class="hero-actions"><a class="button" href="breakfast.html">Find your next recipe <span aria-hidden="true">→</span></a><a class="button button--light" href="indian.html">Explore cuisines</a></div><div class="hero-note">Good food begins with a little curiosity.</div></div></div></section>
    <section class="section"><div class="shell">${sectionHeading("Worth a taste", "Recipes we're loving", "A handful of fresh ideas to bring a little more joy to the everyday.", "dinner.html")}<div class="recipe-grid">${trending.map(cardMarkup).join("")}</div></div></section>
    <section class="section section--white"><div class="shell">${sectionHeading("Travel by taste", "A world on your plate", "Follow the flavors to somewhere new, one home-cooked recipe at a time.", "indian.html", "Explore all cuisines")}<div class="cuisine-grid"><a class="cuisine-tile" href="indian.html"><img src="${imageUrl(recipes.find((item) => item.id === "vegetable-biryani"), 1000)}" alt="A fragrant Indian rice dish" loading="lazy"><div class="cuisine-tile-copy"><h3>Indian kitchens</h3><p>Regional recipes, generous flavors</p></div></a><a class="cuisine-tile" href="italian.html"><img src="${imageUrl(recipes.find((item) => item.id === "pesto-pasta"), 850)}" alt="Fresh Italian pasta" loading="lazy"><div class="cuisine-tile-copy"><h3>Italian table</h3><p>Simple, soulful, delicious</p></div></a><a class="cuisine-tile" href="healthy.html"><img src="${imageUrl(recipes.find((item) => item.id === "quinoa-salad"), 850)}" alt="A colorful fresh salad" loading="lazy"><div class="cuisine-tile-copy"><h3>Feel-good food</h3><p>Bright ideas for balanced days</p></div></a></div></div></section>
    <section class="section section--white"><div class="shell">${sectionHeading("In season now", "Follow the market", "Ingredients at their best make the simplest recipes feel memorable.", "healthy.html", "More fresh ideas")}<div class="recipe-grid recipe-grid--three">${["mushroom-risotto", "green-goddess-salad", "lemon-tart"].map((id) => cardMarkup(recipes.find((item) => item.id === id))).join("")}</div></div></section>
    <section class="section section--compact"><div class="shell"><div class="section-heading"><div><p class="eyebrow">Where shall we begin?</p><h2>Find your kind of meal</h2></div></div><div class="category-list"><a class="category-link" href="breakfast.html"><span class="category-icon">☼</span><strong>Breakfast</strong></a><a class="category-link" href="lunch.html"><span class="category-icon">◒</span><strong>Lunch</strong></a><a class="category-link" href="dinner.html"><span class="category-icon">◐</span><strong>Dinner</strong></a><a class="category-link" href="snacks.html"><span class="category-icon">✳</span><strong>Snacks</strong></a><a class="category-link" href="desserts.html"><span class="category-icon">❋</span><strong>Desserts</strong></a><a class="category-link" href="healthy.html"><span class="category-icon">⌁</span><strong>Healthy</strong></a></div></div></section>
    <section class="feature-split"><div class="feature-photo" role="img" aria-label="A colorful vegetable biryani ready to serve"></div><div class="feature-copy"><div class="feature-copy-inner"><p class="eyebrow">A little extra time, a lot of comfort</p><h2>Make room for a slow Sunday.</h2><p>Layer fragrant rice, garden vegetables, and warming spices into a biryani made for passing around the table.</p><a class="button button--light" href="recipe-details.html?id=vegetable-biryani">Cook vegetable biryani <span aria-hidden="true">→</span></a></div></div></section>
    <section class="section"><div class="shell"><div class="newsletter" id="newsletter"><div><p class="eyebrow">A note from our kitchen</p><h2>Fresh inspiration, now and then.</h2><p>Seasonal favorites, new recipes, and small ideas for everyday cooking.</p></div><div><form class="newsletter-form" data-newsletter novalidate><input type="email" name="email" placeholder="Your email address" aria-label="Your email address" required><button class="button" type="submit">Sign me up</button></form><p class="newsletter-message" data-newsletter-message aria-live="polite"></p></div></div></div></section>`;
}

function renderListing(page) {
  const [kicker, title, description] = pageCopy[page];
  const pageRecipes = recipes.filter((recipe) => recipe.sections.includes(page));
  const cuisinePage = page === "indian" || page === "italian";
  const headingCopy = page === "lunch" ? "Everyday ideas, made colorful. Start with something quick or settle into a nourishing favorite." : page === "dinner" ? "Comforting weeknight meals and a few showstoppers for when the table deserves a little ceremony." : page === "snacks" ? "A mix of quick bites, oven-baked favorites, and party appetizers to make any gathering feel generous." : page === "healthy" ? "Fresh, balanced favorites, with plant-based and high-protein ideas to suit the way you like to eat." : page === "indian" ? "From Punjab to Karnataka, each region brings its own rhythm, ingredients, and idea of comfort." : page === "italian" ? "A curated collection from across Italy: bright, simple ingredients and recipes meant to be shared." : "Every recipe comes with a little inspiration and a clear path to the table.";
  const regions = page === "indian" ? ["Karnataka", "Kerala", "Tamil Nadu", "Punjab", "Rajasthan", "Bengal"] : page === "italian" ? ["Northern Italy", "Italian", "Classic"] : [];
  const sections = page === "lunch" ? [["Quick lunches", ["pesto-pasta", "vegetable-pulao", "fried-rice", "caprese-salad"]], ["Feel-good midday", ["quinoa-salad", "lemon-chicken-bowl", "rajma-chawal", "indian-thali"]]] : page === "dinner" ? [["Easy dinner ideas", ["sesame-noodles", "grilled-chicken", "lentil-soup", "tomato-gnocchi"]], ["For a special evening", ["vegetable-biryani", "paneer-curry", "mushroom-risotto", "salmon-dinner"]]] : page === "snacks" ? [["Quick bites & baked favorites", ["garden-sandwich", "hummus-plate", "baked-falafel", "spinach-puffs"]], ["Party appetizers", ["samosa", "spring-rolls", "bruschetta", "pakora"]]] : page === "healthy" ? [["Vegetarian & plant based", ["quinoa-salad", "chickpea-bowl", "green-goddess-salad", "smoothie-bowl"]], ["Protein-rich favorites", ["lemon-chicken-bowl", "berry-protein-smoothie", "baked-falafel", "rajma-chawal"]]] : null;
  const regionLinks = regions.length ? `<div class="filter-bar"><span class="filter-label">Explore by region</span>${regions.map((region) => `<button class="filter-chip" type="button" data-region-filter="${region}">${region}</button>`).join("")}</div>` : "";
  const filterBar = ["breakfast", "indian", "italian", "healthy"].includes(page) ? `<div class="filter-bar" data-filter-bar><span class="filter-label">Show me</span><button class="filter-chip" type="button" data-diet="all" aria-pressed="true">Everything</button><button class="filter-chip" type="button" data-diet="vegetarian" aria-pressed="false">Vegetarian</button><button class="filter-chip" type="button" data-diet="non-vegetarian" aria-pressed="false">Non-vegetarian</button>${page === "healthy" ? '<button class="filter-chip" type="button" data-diet="vegan" aria-pressed="false">Vegan</button>' : ""}</div>` : "";
  const grouped = sections ? sections.map(([heading, ids]) => `<section class="section section--compact"><div class="shell"><div class="section-heading"><div><p class="eyebrow">${page === "lunch" ? "A good midday" : page === "dinner" ? "Something for tonight" : page === "snacks" ? "Made for passing around" : "A little balance"}</p><h2>${heading}</h2></div></div><div class="recipe-grid">${ids.map((id) => cardMarkup(recipes.find((recipe) => recipe.id === id))).join("")}</div></div></section>`).join("") : "";
  const mainListing = grouped ? "" : `<section class="section section--compact"><div class="shell">${filterBar}${regionLinks}<div class="recipe-grid" data-recipe-grid>${pageRecipes.map(cardMarkup).join("")}</div></div></section>`;
  document.querySelector("#main-content").innerHTML = `<section class="page-hero ${cuisinePage ? "page-hero--cuisine" : page === "healthy" ? "page-hero--healthy" : ""}"><div class="shell"><p class="eyebrow">${kicker}</p><h1>${title}</h1><p>${description}</p></div></section><section class="section section--compact"><div class="shell"><div class="section-heading"><div><p class="eyebrow">Curated for your table</p><h2>${page === "indian" ? "Recipes from every corner" : page === "italian" ? "The Italian favorites" : page === "healthy" ? "Good food, good feeling" : page === "snacks" ? "A little bite of something" : page === "desserts" ? "Sweet moments, made at home" : page === "breakfast" ? "Make mornings delicious" : page === "lunch" ? "A lovely lunch awaits" : "Tonight's table"}</h2></div><p>${headingCopy}</p></div>${filterBar}${regionLinks}<div class="recipe-grid" data-recipe-grid>${pageRecipes.map(cardMarkup).join("")}</div></div></section>${grouped}`;
  bindFilters(pageRecipes);
}

function bindFilters(pageRecipes) {
  const grid = document.querySelector("[data-recipe-grid]");
  if (!grid) return;
  let currentFilter = "all";
  const applyFilter = () => {
    const shown = pageRecipes.filter((recipe) => currentFilter === "all" || (currentFilter === "vegetarian" && recipe.vegetarian) || (currentFilter === "non-vegetarian" && !recipe.vegetarian) || (currentFilter === "vegan" && recipe.vegan));
    grid.innerHTML = shown.length ? shown.map(cardMarkup).join("") : '<p class="empty-state">No recipes in this collection match that filter just yet.</p>';
  };
  document.querySelectorAll("[data-diet]").forEach((button) => button.addEventListener("click", () => {
    currentFilter = button.dataset.diet;
    document.querySelectorAll("[data-diet]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    applyFilter();
  }));
  document.querySelectorAll("[data-region-filter]").forEach((button) => button.addEventListener("click", () => {
    const region = button.dataset.regionFilter;
    currentFilter = currentFilter === `region:${region}` ? "all" : `region:${region}`;
    const selected = pageRecipes.filter((recipe) => currentFilter === "all" || recipe.cuisine === region);
    grid.innerHTML = selected.length ? selected.map(cardMarkup).join("") : '<p class="empty-state">More recipes from this region are coming to the table.</p>';
    button.setAttribute("aria-pressed", String(currentFilter !== "all"));
  }));
}

const recipeGuides = {
  "fluffy-pancakes": {
    ingredients: ["1 1/2 cups all-purpose flour", "2 tablespoons sugar", "1 teaspoon baking powder and 1/2 teaspoon baking soda", "1 1/4 cups buttermilk", "1 large egg", "3 tablespoons melted butter, plus more for the pan", "Maple syrup and berries, to serve"],
    method: ["Whisk flour, sugar, baking powder, baking soda, and a pinch of salt. In another bowl, whisk buttermilk, egg, and melted butter.", "Fold wet ingredients into dry just until combined; a few small lumps are fine. Rest the batter for 5 minutes.", "Butter a warm skillet. Pour 1/4-cup portions; flip when bubbles form and edges look set. Cook until golden and serve with maple syrup and berries."]
  },
  "masala-dosa": {
    ingredients: ["8 prepared dosa batter portions", "3 medium potatoes, boiled and roughly mashed", "1 onion, thinly sliced", "1 teaspoon mustard seeds and 8 curry leaves", "1/2 teaspoon turmeric and 1 green chilli, chopped", "2 tablespoons oil and 2 tablespoons chopped cilantro", "Coconut chutney and sambar, to serve"],
    method: ["Heat oil in a pan. Crackle mustard seeds, then add curry leaves, chilli, and onion; cook until soft. Stir in turmeric, potatoes, salt, and a splash of water.", "Cook the potato filling for 4 minutes, fold in cilantro, and keep warm.", "Spread a ladle of batter thinly over a hot, lightly oiled dosa pan. Cook until crisp, spoon potato masala down the center, fold, and serve hot."]
  },
  "poha": {
    ingredients: ["2 cups thick poha", "1 small onion, diced", "1/3 cup roasted peanuts", "1 teaspoon mustard seeds and 8 curry leaves", "1/2 teaspoon turmeric and 1 green chilli", "1 tablespoon oil and juice of 1/2 lemon", "2 tablespoons chopped cilantro"],
    method: ["Rinse poha briefly in a sieve, drain, and rest until soft but separate. Toss with turmeric and salt.", "Heat oil; crackle mustard seeds, then add curry leaves, chilli, peanuts, and onion. Cook until the onion softens.", "Fold in the poha and warm gently for 3 to 4 minutes. Finish with lemon juice and cilantro; serve while fluffy."]
  },
  "masala-omelette": {
    ingredients: ["3 large eggs", "2 tablespoons finely diced onion", "1 small green chilli, minced", "2 tablespoons chopped cilantro", "1/4 teaspoon turmeric and 1/4 teaspoon ground cumin", "1 tablespoon milk and salt", "1 teaspoon butter or oil"],
    method: ["Beat eggs with milk, turmeric, cumin, salt, onion, chilli, and cilantro until combined.", "Warm butter in a nonstick pan over medium-low heat. Pour in the eggs and tilt the pan to spread them evenly.", "When the edges set, fold the omelette in half and cook another minute until just cooked through. Serve hot with toast."]
  },
  "smoothie-bowl": {
    ingredients: ["1 1/2 cups frozen mango chunks", "1/2 cup frozen mixed berries", "1/2 banana", "1/3 cup oat milk, plus a splash if needed", "2 tablespoons rolled oats", "1 tablespoon chia seeds", "Fresh berries and pumpkin seeds, to top"],
    method: ["Add mango, berries, banana, and oat milk to a blender. Blend thick, scraping down the sides as needed.", "Add only enough extra milk to keep the mixture spoonable; blend the oats in briefly.", "Spoon into chilled bowls and finish with chia, fresh berries, and pumpkin seeds. Eat straight away."]
  },
  "avocado-toast": {
    ingredients: ["2 thick slices sourdough bread", "1 ripe avocado", "1 teaspoon lemon juice", "1 cup peppery greens", "1 tablespoon olive oil", "1 tablespoon toasted pumpkin seeds", "Black pepper and flaky salt"],
    method: ["Toast sourdough until deeply golden. Mash avocado with lemon juice, salt, and black pepper.", "Toss the greens with olive oil and a pinch of salt.", "Spread avocado over toast, pile on the greens, and finish with pumpkin seeds and a little more pepper."]
  },
  "idli-sambar": {
    ingredients: ["8 idli portions of fermented batter", "1 cup toor dal, rinsed", "1 cup mixed vegetables, diced", "1 tablespoon sambar powder and 1/4 teaspoon turmeric", "1 teaspoon mustard seeds, 8 curry leaves, and 1 dried chilli", "1 tablespoon tamarind paste", "2 tablespoons cilantro and salt"],
    method: ["Pressure-cook the dal with turmeric and 3 cups water until soft; mash until creamy. Steam the idli batter in greased moulds for 10 to 12 minutes.", "Simmer vegetables with sambar powder, tamarind, salt, and 2 cups water until tender. Stir in mashed dal and simmer 5 minutes.", "Heat a teaspoon of oil; crackle mustard seeds, curry leaves, and dried chilli. Pour the tempering over sambar, add cilantro, and serve with hot idli."]
  },
  "shakshuka": {
    ingredients: ["1 tablespoon olive oil", "1 small onion and 1 red pepper, diced", "2 garlic cloves, minced", "1 teaspoon ground cumin and 1/2 teaspoon smoked paprika", "1 can (14 oz) crushed tomatoes", "4 large eggs", "2 tablespoons chopped parsley and crusty bread"],
    method: ["Soften onion and pepper in olive oil for 7 minutes. Add garlic, cumin, and paprika; cook until fragrant.", "Pour in tomatoes, season with salt and pepper, and simmer uncovered until thick, about 12 minutes.", "Make four wells and crack in the eggs. Cover and cook until whites are set but yolks remain soft; finish with parsley and serve with bread."]
  },
  "indian-thali": {
    ingredients: ["1 cup basmati rice", "1/2 cup toor dal", "1 cup seasonal vegetables, diced", "1 small onion and 1 tomato, chopped", "1 teaspoon cumin, 1/2 teaspoon turmeric, and 1 teaspoon garam masala", "2 tablespoons ghee or oil", "4 rotis, plain yogurt, and cilantro, to serve"],
    method: ["Cook rice separately. Simmer dal with turmeric and 2 cups water until soft, then mash with salt.", "Heat a tablespoon of ghee; toast cumin, then cook onion and tomato until jammy. Add vegetables, garam masala, salt, and a splash of water; cover until tender.", "Serve dal, vegetables, rice, rotis, and yogurt together on a platter. Finish the dal with the remaining warm ghee."]
  },
  "vegetable-pulao": {
    ingredients: ["1 1/2 cups basmati rice, rinsed", "2 tablespoons ghee", "1 small onion, sliced", "1 cinnamon stick, 3 cloves, and 2 cardamom pods", "2 cups mixed vegetables, diced", "1 teaspoon cumin and 2 1/4 cups hot water", "Salt and chopped cilantro"],
    method: ["Rinse rice until the water runs clear, then soak for 15 minutes and drain.", "Heat ghee in a heavy pot. Toast whole spices, add onion, and cook until lightly golden. Stir in vegetables, cumin, and rice.", "Add hot water and salt. Cover and cook on low for 15 minutes; rest off the heat for 10 minutes. Fluff gently and garnish with cilantro."]
  },
  "pesto-pasta": {
    ingredients: ["12 oz dried pasta", "2 packed cups fresh basil leaves", "1/3 cup toasted pine nuts", "1/2 cup finely grated parmesan", "1 garlic clove", "1/3 cup extra-virgin olive oil", "1 teaspoon lemon zest and black pepper"],
    method: ["Boil pasta in well-salted water until al dente. Reserve 1 cup pasta water before draining.", "Pulse basil, pine nuts, garlic, parmesan, and a pinch of salt. Stream in olive oil until a loose pesto forms.", "Toss pasta with pesto and a splash of pasta water until glossy. Finish with lemon zest, pepper, and extra parmesan."]
  },
  "fried-rice": {
    ingredients: ["3 cups cold cooked rice", "1 tablespoon neutral oil", "1 carrot and 1 cup snap peas, finely chopped", "2 scallions, sliced", "1 tablespoon grated ginger", "2 tablespoons soy sauce and 1 teaspoon toasted sesame oil", "1 tablespoon sesame seeds"],
    method: ["Break up cold rice with your fingers so no large clumps remain. Mix soy sauce and sesame oil in a small bowl.", "Heat a wok until very hot. Add oil, carrot, snap peas, and ginger; stir-fry for 3 minutes.", "Add rice and toss until hot and lightly crisp. Pour in the sauce, toss with scallions, and finish with sesame seeds."]
  },
  "quinoa-salad": {
    ingredients: ["1 cup quinoa, rinsed", "1 can (15 oz) chickpeas, drained", "1 cucumber and 1 cup cherry tomatoes, chopped", "1/4 cup chopped parsley", "3 tablespoons olive oil", "Juice of 1 lemon and 1 teaspoon Dijon mustard", "1/3 cup crumbled feta, optional"],
    method: ["Simmer quinoa in 2 cups salted water for 15 minutes. Cover off the heat for 5 minutes, then fluff and cool.", "Whisk olive oil, lemon juice, Dijon, salt, and pepper into a bright dressing.", "Toss quinoa with chickpeas, cucumber, tomatoes, parsley, and dressing. Top with feta if using; serve chilled or at room temperature."]
  },
  "lemon-chicken-bowl": {
    ingredients: ["1 lb boneless chicken breast", "2 tablespoons olive oil", "Juice and zest of 1 lemon", "1 teaspoon dried oregano and 1 garlic clove, grated", "2 cups cooked farro or brown rice", "2 cups chopped cucumber, tomato, and greens", "1/2 cup plain yogurt"],
    method: ["Whisk olive oil, lemon zest and juice, oregano, garlic, salt, and pepper. Coat chicken and marinate for 15 minutes.", "Grill or sear chicken over medium-high heat for 5 to 7 minutes per side, until cooked through. Rest 5 minutes, then slice.", "Divide grains and vegetables among bowls. Add chicken and a spoonful of yogurt; drizzle with any remaining lemon dressing."]
  },
  "rajma-chawal": {
    ingredients: ["2 cans (15 oz each) kidney beans, drained", "1 cup basmati rice", "1 onion, finely diced", "2 tomatoes, grated or finely chopped", "1 tablespoon ginger-garlic paste", "1 teaspoon cumin, 1 teaspoon garam masala, and 1/2 teaspoon chilli powder", "2 tablespoons oil and chopped cilantro"],
    method: ["Cook rice in salted water until tender. Heat oil and toast cumin; add onion and cook until golden.", "Stir in ginger-garlic paste, tomatoes, chilli powder, and salt. Cook until thick and glossy, then add garam masala and kidney beans.", "Add 1 cup water and simmer uncovered for 20 minutes, mashing a few beans to thicken the gravy. Finish with cilantro and serve over rice."]
  },
  "kerala-avial": {
    ingredients: ["3 cups mixed firm vegetables, cut into batons", "1/2 cup grated coconut", "1 green chilli", "1/2 teaspoon cumin seeds", "1/2 cup plain yogurt", "1 tablespoon coconut oil", "8 curry leaves and salt"],
    method: ["Simmer vegetables with salt and 1/3 cup water, covered, until just tender, about 10 minutes.", "Grind coconut, green chilli, and cumin coarsely. Fold this mixture into the vegetables and cook gently for 3 minutes.", "Turn off the heat, stir in yogurt, and finish with coconut oil and curry leaves. Do not boil after adding yogurt."]
  },
  "tamil-lemon-rice": {
    ingredients: ["3 cups cooked, cooled rice", "2 tablespoons peanut oil", "1 teaspoon mustard seeds and 10 curry leaves", "1/4 cup roasted peanuts", "1/2 teaspoon turmeric and 1 dried red chilli", "Juice of 1 large lemon", "Salt and chopped cilantro"],
    method: ["Separate the cooled rice grains gently with a fork. Heat oil in a wide pan and crackle mustard seeds.", "Add curry leaves, dried chilli, peanuts, and turmeric; stir until the peanuts smell toasted.", "Fold in rice and salt over low heat. Remove from heat, add lemon juice and cilantro, and serve warm or at room temperature."]
  },
  "caprese-salad": {
    ingredients: ["4 ripe tomatoes", "8 oz fresh mozzarella", "1 cup fresh basil leaves", "3 tablespoons extra-virgin olive oil", "1 tablespoon balsamic vinegar, optional", "Flaky salt", "Freshly ground black pepper"],
    method: ["Slice tomatoes and mozzarella into even rounds. Arrange them in alternating layers on a platter.", "Tuck basil leaves between the slices and season generously with flaky salt and black pepper.", "Drizzle with olive oil and optional balsamic. Let stand for 5 minutes, then serve with crusty bread."]
  },
  "paneer-curry": {
    ingredients: ["14 oz paneer, cut into cubes", "1 onion, roughly chopped", "2 tomatoes, chopped", "1/3 cup cashews", "1 tablespoon ginger-garlic paste", "1 teaspoon garam masala and 1/2 teaspoon chilli powder", "3 tablespoons cream, 2 tablespoons oil, and cilantro"],
    method: ["Soak cashews in hot water for 10 minutes, then blend smooth with the tomatoes.", "Sear paneer cubes in a little oil until golden and set aside. In the same pan, cook onion until soft; add ginger-garlic paste and spices.", "Add the tomato-cashew puree and simmer for 12 minutes. Stir in cream and paneer, warm gently for 3 minutes, and garnish with cilantro."]
  },
  "grilled-chicken": {
    ingredients: ["4 boneless chicken thighs", "2 tablespoons olive oil", "1 tablespoon chopped rosemary", "2 garlic cloves, minced", "Juice of 1 lemon", "1 teaspoon kosher salt and 1/2 teaspoon black pepper", "Lemon wedges, to serve"],
    method: ["Whisk olive oil, rosemary, garlic, lemon juice, salt, and pepper. Coat chicken and marinate for at least 20 minutes.", "Heat a grill or grill pan to medium-high. Cook chicken for 6 to 8 minutes per side, until browned and the center reaches 165°F (74°C).", "Rest the chicken for 5 minutes so it stays juicy. Serve with lemon wedges and a crisp salad."]
  },
  "vegetable-biryani": {
    ingredients: ["2 cups aged basmati rice, rinsed and soaked for 20 minutes", "3 tablespoons ghee or neutral oil", "1 large onion, thinly sliced", "1 cinnamon stick, 3 green cardamom pods, 4 cloves", "1 tablespoon ginger-garlic paste", "1 cup plain yogurt", "2 carrots, 1 cup cauliflower florets, and 1 cup green beans", "1 cup green peas", "1 teaspoon ground cumin, 1 teaspoon garam masala, and 1/2 teaspoon turmeric", "A pinch of saffron soaked in 2 tablespoons warm milk", "1/2 cup chopped mint and cilantro", "Salt, to taste"],
    method: ["Bring a large pot of well-salted water to a boil. Add the soaked rice and cook until just 70 percent done, about 5 to 6 minutes. Drain and set aside.", "Warm the ghee in a heavy, lidded pot. Fry the sliced onion until deep golden; lift out half for the final garnish. Add the whole spices to the pot.", "Stir in the ginger-garlic paste, then the carrots, cauliflower, beans, and peas. Cook for 4 minutes. Fold in yogurt, cumin, turmeric, garam masala, and salt.", "Spread the vegetables in an even layer. Scatter over half the herbs, then spoon the rice over the top. Drizzle on the saffron milk and finish with the remaining herbs and fried onion.", "Cover tightly and cook over the lowest heat for 22 to 25 minutes. Rest, covered, for 10 minutes, then gently fluff from the edges so the layers stay distinct."]
  },
  "sesame-noodles": {
    ingredients: ["12 oz wheat or rice noodles", "1 tablespoon neutral oil", "1 red bell pepper and 1 cup shredded cabbage", "2 tablespoons soy sauce", "1 tablespoon tahini and 1 tablespoon rice vinegar", "1 teaspoon grated ginger and 1 teaspoon honey", "2 scallions and 1 tablespoon sesame seeds"],
    method: ["Cook noodles according to the package directions. Drain and rinse briefly under cool water.", "Whisk soy sauce, tahini, rice vinegar, ginger, honey, and 2 tablespoons warm water into a smooth dressing.", "Stir-fry pepper and cabbage in neutral oil for 3 minutes. Add noodles and dressing; toss until hot and glossy. Top with scallions and sesame seeds."]
  },
  "lentil-soup": {
    ingredients: ["1 cup red lentils, rinsed", "1 onion, diced", "1 carrot, diced", "2 garlic cloves, minced", "1 teaspoon ground cumin and 1/2 teaspoon smoked paprika", "1 can (14 oz) crushed tomatoes and 5 cups vegetable stock", "Juice of 1/2 lemon and chopped parsley"],
    method: ["Cook onion and carrot in a tablespoon of olive oil until softened, about 6 minutes. Add garlic, cumin, and paprika; stir for 30 seconds.", "Add lentils, tomatoes, stock, salt, and pepper. Bring to a boil, then simmer uncovered for 25 minutes until the lentils are soft.", "Blend part of the soup for a creamy texture, if desired. Stir in lemon juice, adjust seasoning, and serve with parsley."]
  },
  "salmon-dinner": {
    ingredients: ["4 salmon fillets, about 5 oz each", "1 tablespoon olive oil", "1 tablespoon honey", "Zest and juice of 1 lime", "1 garlic clove, finely grated", "1/2 teaspoon chilli flakes and salt", "2 cups green vegetables, to serve"],
    method: ["Heat the oven to 400°F (200°C). Mix honey, lime zest and juice, garlic, chilli flakes, olive oil, and a pinch of salt.", "Place salmon on a lined tray and brush with the glaze. Roast for 10 to 14 minutes, depending on thickness, until it flakes easily.", "Steam or quickly sauté the green vegetables. Spoon any pan glaze over the salmon and serve with lime wedges."]
  },
  "mushroom-risotto": {
    ingredients: ["1 1/2 cups arborio rice", "12 oz mixed mushrooms, sliced", "1 small onion, finely diced", "5 cups warm vegetable stock", "1/2 cup dry white wine", "3 tablespoons butter and 1/2 cup grated parmesan", "1 teaspoon thyme leaves and black pepper"],
    method: ["Brown mushrooms in a tablespoon of butter; season and set aside. Keep stock warm in a small pot.", "Soften onion in the remaining butter. Stir in rice until glossy, add wine, and cook until absorbed.", "Add warm stock one ladle at a time, stirring until absorbed before each addition, for about 18 minutes. Fold in mushrooms, parmesan, and thyme; rest 2 minutes before serving."]
  },
  "tomato-gnocchi": {
    ingredients: ["1 lb potato gnocchi", "1 tablespoon olive oil", "2 garlic cloves, sliced", "1 can (14 oz) crushed tomatoes", "1/2 teaspoon dried oregano", "1/3 cup cream and 1/3 cup grated parmesan", "Fresh basil leaves"],
    method: ["Warm olive oil in a skillet. Add garlic and cook gently for 30 seconds; stir in tomatoes, oregano, salt, and pepper.", "Simmer the sauce for 12 minutes. Meanwhile, boil gnocchi in salted water until they float; scoop them into the sauce.", "Stir in cream and parmesan, adding a splash of gnocchi water to loosen. Tear basil over the top and serve immediately."]
  },
  "samosa": {
    ingredients: ["8 samosa pastry sheets or wrappers", "2 medium potatoes, boiled and diced", "1/2 cup peas", "1 teaspoon cumin seeds and 1/2 teaspoon garam masala", "1/2 teaspoon ground coriander and 1 tablespoon lemon juice", "2 tablespoons chopped cilantro", "Oil for frying and tamarind chutney"],
    method: ["Toast cumin in a teaspoon of oil. Add peas, potatoes, coriander, garam masala, salt, and a splash of water; cook until combined. Stir in lemon and cilantro, then cool.", "Fill and fold each pastry into a cone, add 2 tablespoons filling, and seal the edge with a flour-water paste.", "Fry in 325°F (160°C) oil for 8 to 10 minutes, turning until evenly golden and crisp. Drain and serve with chutney."]
  },
  "garden-sandwich": {
    ingredients: ["4 slices seeded sandwich bread", "1/2 ripe avocado", "2 tablespoons cream cheese", "1 small cucumber, thinly sliced", "1 small tomato, thinly sliced", "1 cup crisp lettuce leaves", "1 teaspoon lemon juice and black pepper"],
    method: ["Mash avocado with lemon juice, salt, and pepper. Spread cream cheese over two slices of bread and avocado over the other two.", "Layer cucumber, tomato, and lettuce over the cream cheese; season the vegetables lightly.", "Close the sandwiches, press gently, and cut in half. Serve immediately while the bread is crisp."]
  },
  "spring-rolls": {
    ingredients: ["8 spring-roll wrappers", "2 cups finely shredded cabbage", "1 carrot, julienned", "1/2 cup bean sprouts", "1 teaspoon grated ginger and 1 tablespoon soy sauce", "1 teaspoon cornstarch mixed with 1 tablespoon water", "Neutral oil for frying and sweet chilli sauce"],
    method: ["Stir-fry cabbage, carrot, sprouts, and ginger in a hot pan for 2 minutes. Add soy sauce, cool, and drain away excess liquid.", "Place filling on each wrapper, fold in the sides, roll tightly, and seal the edge with cornstarch slurry.", "Shallow-fry in 1/2 inch hot oil, turning until crisp and golden. Drain on a rack and serve with sweet chilli sauce."]
  },
  "pakora": {
    ingredients: ["2 large onions, thinly sliced", "1 cup chickpea flour", "1/2 teaspoon ajwain seeds", "1/2 teaspoon chilli powder and 1/4 teaspoon turmeric", "1 green chilli, minced", "2 tablespoons chopped cilantro and 1/3 cup water", "Oil for frying and mint chutney"],
    method: ["Toss onion with chickpea flour, ajwain, chilli powder, turmeric, green chilli, cilantro, and salt. Add water a spoonful at a time to make a clinging batter.", "Heat 2 inches of oil to 350°F (175°C). Drop small loose clusters of onion batter into the oil.", "Fry in batches for 3 to 4 minutes, turning once, until crisp and deep golden. Drain and serve hot with mint chutney."]
  },
  "bruschetta": {
    ingredients: ["1 small baguette, cut into 8 slices", "3 ripe tomatoes, finely diced", "1 garlic clove, halved", "1/4 cup chopped fresh basil", "2 tablespoons extra-virgin olive oil", "1 teaspoon red wine vinegar", "Flaky salt and black pepper"],
    method: ["Toss diced tomatoes with basil, olive oil, vinegar, salt, and pepper. Leave to marinate for 10 minutes, then drain excess liquid.", "Toast baguette slices under a broiler or in a hot pan until golden on both sides.", "Rub each warm toast with the cut side of garlic. Spoon tomato mixture on top and serve straight away."]
  },
  "hummus-plate": {
    ingredients: ["1 can (15 oz) chickpeas, drained", "1/4 cup tahini", "Juice of 1 lemon", "1 small garlic clove", "3 tablespoons cold water", "2 tablespoons olive oil and 1/2 teaspoon ground cumin", "Cucumber, carrots, and warm pita, to serve"],
    method: ["Blend chickpeas, tahini, lemon juice, garlic, cumin, and salt until coarse. Scrape down the sides.", "With the blender running, stream in cold water and 1 tablespoon olive oil until the hummus is smooth and fluffy.", "Spoon into a shallow bowl, swirl the remaining olive oil over the top, and serve with cut vegetables and warm pita."]
  },
  "baked-falafel": {
    ingredients: ["1 can (15 oz) chickpeas, rinsed and dried well", "1/2 cup parsley leaves", "1/4 cup cilantro leaves", "1 small onion and 2 garlic cloves", "1 teaspoon ground cumin and 1/2 teaspoon coriander", "2 tablespoons chickpea flour and 1 teaspoon baking powder", "2 tablespoons olive oil and lemon tahini sauce"],
    method: ["Heat the oven to 425°F (220°C). Pulse chickpeas, herbs, onion, garlic, cumin, and coriander until finely chopped but not smooth.", "Mix in chickpea flour, baking powder, and salt. Shape into 16 small patties and brush with olive oil.", "Bake on a lined tray for 22 to 25 minutes, turning once, until browned. Serve warm with lemon tahini sauce."]
  },
  "spinach-puffs": {
    ingredients: ["1 sheet frozen puff pastry, thawed", "5 oz baby spinach", "1/2 cup ricotta", "1/4 cup grated parmesan", "1 small shallot, minced", "1 egg, beaten", "1/4 teaspoon nutmeg and black pepper"],
    method: ["Heat the oven to 400°F (200°C). Wilt spinach in a dry pan, cool, and squeeze out excess moisture. Chop finely.", "Mix spinach with ricotta, parmesan, shallot, nutmeg, pepper, and a pinch of salt. Cut pastry into 8 squares and add a spoonful of filling to each.", "Fold into triangles and crimp the edges. Brush with beaten egg and bake for 18 to 22 minutes until puffed and golden."]
  },
  "chocolate-cake": {
    ingredients: ["1 3/4 cups all-purpose flour", "3/4 cup unsweetened cocoa powder", "1 1/2 cups sugar", "1 teaspoon baking powder and 1 1/2 teaspoons baking soda", "2 eggs and 1 cup buttermilk", "1/2 cup neutral oil and 1 cup hot coffee", "1 cup chocolate frosting"],
    method: ["Heat the oven to 350°F (175°C). Grease and line two 8-inch cake pans.", "Whisk flour, cocoa, sugar, baking powder, baking soda, and salt. Add eggs, buttermilk, and oil; beat until smooth, then slowly whisk in hot coffee.", "Divide batter between pans and bake for 30 to 35 minutes. Cool completely, layer with frosting, and let set before slicing."]
  },
  "fudgy-brownies": {
    ingredients: ["1/2 cup unsalted butter", "6 oz dark chocolate, chopped", "1 cup sugar", "2 large eggs", "1/2 cup all-purpose flour and 1/4 cup cocoa powder", "1 teaspoon vanilla extract", "Flaky sea salt"],
    method: ["Heat the oven to 350°F (175°C). Line an 8-inch square pan with parchment.", "Melt butter and chocolate together. Whisk in sugar, then eggs and vanilla. Fold in flour, cocoa, and a pinch of salt just until combined.", "Spread in the pan, sprinkle with flaky salt, and bake for 22 to 26 minutes. Cool fully for clean, fudgy slices."]
  },
  "mango-ice-cream": {
    ingredients: ["2 cups ripe mango puree", "1 can (14 oz) sweetened condensed milk", "2 cups cold heavy cream", "1 teaspoon lime juice", "1/2 teaspoon ground cardamom, optional", "1/3 cup diced mango", "A pinch of salt"],
    method: ["Whisk mango puree with condensed milk, lime juice, cardamom, and a pinch of salt.", "Whip cold cream to soft peaks. Fold the mango mixture into the cream in three additions, then fold in diced mango.", "Transfer to a covered loaf pan and freeze for at least 6 hours. Let stand at room temperature for 5 minutes before scooping."]
  },
  "gulab-jamun": {
    ingredients: ["1 cup milk powder", "1/4 cup all-purpose flour", "2 tablespoons ghee", "1/4 cup milk, plus more as needed", "1 cup sugar and 1 cup water", "4 cardamom pods and 1 teaspoon rose water", "Oil or ghee for frying"],
    method: ["Simmer sugar, water, and cardamom for 8 minutes; stir in rose water and keep the syrup warm.", "Mix milk powder, flour, and ghee. Add milk gradually to form a soft dough; rest 5 minutes, then roll into smooth, crack-free balls.", "Fry balls in low-medium oil, turning constantly until evenly deep golden. Transfer to warm syrup and soak for at least 1 hour before serving."]
  },
  "cheesecake": {
    ingredients: ["2 cups graham cracker crumbs", "5 tablespoons melted butter", "24 oz cream cheese, softened", "1 cup sugar", "3 large eggs", "1 cup sour cream and 1 teaspoon vanilla", "1 tablespoon lemon juice"],
    method: ["Heat the oven to 325°F (165°C). Mix crumbs and butter, press into a 9-inch springform pan, and bake for 10 minutes.", "Beat cream cheese and sugar until smooth. Beat in eggs one at a time, then mix in sour cream, vanilla, and lemon juice.", "Pour over the crust and bake for 55 to 65 minutes until the edge is set and center still wobbles slightly. Cool slowly, then chill at least 4 hours."]
  },
  "tiramisu": {
    ingredients: ["1 1/2 cups strong espresso, cooled", "3 tablespoons coffee liqueur, optional", "4 large egg yolks", "1/2 cup sugar", "16 oz mascarpone, chilled", "1 cup heavy cream", "24 ladyfinger biscuits and unsweetened cocoa"],
    method: ["Whisk egg yolks and sugar over a pan of gently simmering water until pale and thick. Cool, then whisk in mascarpone.", "Whip cream to soft peaks and fold into the mascarpone mixture. Combine cooled espresso with liqueur if using.", "Quickly dip ladyfingers in coffee and arrange in a dish. Layer with half the cream; repeat, cover, and chill for at least 6 hours. Dust with cocoa to serve."]
  },
  "rasmalai": {
    ingredients: ["8 rasgulla or paneer dumplings, gently squeezed", "4 cups whole milk", "1/3 cup sugar", "A pinch of saffron", "1/4 teaspoon ground cardamom", "2 tablespoons chopped pistachios", "1 teaspoon rose water, optional"],
    method: ["Simmer milk in a wide pan, stirring often, until reduced by about one third. Add sugar, saffron, and cardamom.", "Gently press excess syrup from the dumplings and add them to the hot milk. Simmer on low for 5 minutes without breaking them.", "Cool, then chill for at least 2 hours. Finish with pistachios and rose water just before serving."]
  },
  "lemon-tart": {
    ingredients: ["1 1/4 cups all-purpose flour", "1/3 cup powdered sugar", "1/2 cup cold butter, cubed", "3 large eggs and 2 egg yolks", "3/4 cup sugar", "1/2 cup lemon juice and zest of 2 lemons", "1/3 cup heavy cream"],
    method: ["Heat the oven to 350°F (175°C). Rub flour, powdered sugar, and butter together; press into a 9-inch tart tin and bake for 18 minutes.", "Whisk eggs, yolks, sugar, lemon juice, zest, and cream until smooth. Pour into the warm crust.", "Bake for 18 to 22 minutes until just set with a slight wobble in the center. Cool completely, then chill before slicing."]
  },
  "chickpea-bowl": {
    ingredients: ["1 can (15 oz) chickpeas, drained and dried", "1 tablespoon olive oil", "1 teaspoon smoked paprika and 1/2 teaspoon cumin", "2 cups cooked brown rice or farro", "2 cups baby spinach", "1/3 cup tahini and juice of 1 lemon", "1 tablespoon water and 1/2 avocado, sliced"],
    method: ["Heat the oven to 425°F (220°C). Toss chickpeas with olive oil, paprika, cumin, and salt; roast for 25 minutes, shaking once.", "Whisk tahini, lemon juice, water, and a pinch of salt until pourable. Add a little more water if needed.", "Divide grains and spinach between bowls. Top with crisp chickpeas and avocado, then drizzle with lemon tahini."]
  },
  "green-goddess-salad": {
    ingredients: ["1 small head romaine, chopped", "1 cucumber and 1 cup snap peas, sliced", "1 ripe avocado", "1/2 cup parsley and chives", "1/3 cup plain yogurt or unsweetened soy yogurt", "Juice of 1 lemon and 1 tablespoon olive oil", "1/4 cup toasted sunflower seeds"],
    method: ["Blend avocado, herbs, yogurt, lemon juice, olive oil, salt, and 2 tablespoons water until smooth and pourable.", "Toss romaine, cucumber, and snap peas in a large bowl. Add enough dressing to coat lightly.", "Top with sunflower seeds and extra chopped chives. Serve immediately while the greens are crisp."]
  },
  "berry-protein-smoothie": {
    ingredients: ["1 cup frozen mixed berries", "1/2 banana", "3/4 cup plain Greek yogurt", "1/2 cup milk", "2 tablespoons rolled oats", "1 tablespoon almond butter", "1 teaspoon honey, optional"],
    method: ["Add berries, banana, yogurt, milk, oats, almond butter, and honey to a blender.", "Blend until completely smooth, adding a splash of milk if needed to reach your preferred thickness.", "Pour into a chilled glass and serve immediately; top with a few berries if desired."]
  },
  "rajasthani-dal-baati": {
    ingredients: ["1 cup whole-wheat flour", "1/4 cup semolina", "4 tablespoons ghee, divided", "1/2 teaspoon carom seeds and 1/2 teaspoon baking powder", "1/2 cup warm water, as needed", "1 cup yellow lentils, rinsed", "1 teaspoon cumin, 1/2 teaspoon turmeric, and salt"],
    method: ["Mix flour, semolina, carom seeds, baking powder, salt, and 2 tablespoons ghee. Add water gradually to make a firm dough; rest 15 minutes.", "Shape into 8 balls and bake at 375°F (190°C) for 25 to 30 minutes, turning once, until golden. Simmer lentils with turmeric until soft; season and temper with cumin in ghee.", "Crack baati lightly and drizzle with the remaining warm ghee. Serve with the hot dal and extra ghee at the table."]
  },
  "chicken-sausage-breakfast": {
    ingredients: ["4 chicken sausages, sliced", "4 large eggs", "1 red bell pepper, diced", "1/2 small onion, diced", "1 tablespoon olive oil", "1/2 teaspoon smoked paprika", "2 tablespoons chopped parsley and toast, to serve"],
    method: ["Heat oil in an oven-safe skillet. Brown the chicken sausage slices for 4 minutes, then add pepper and onion and cook until tender.", "Season with paprika, salt, and pepper. Make four spaces in the skillet and crack an egg into each.", "Cover and cook over low heat until the whites are set, or finish under a broiler. Scatter with parsley and serve with toast."]
  },
  "chicken-kathi-roll": {
    ingredients: ["1 lb boneless chicken thighs, thinly sliced", "1/2 cup plain yogurt", "1 tablespoon tikka masala spice blend", "4 roti or paratha", "1 small red onion, thinly sliced", "1 tablespoon lemon juice", "1/3 cup mint chutney"],
    method: ["Mix yogurt, tikka spice, lemon juice, and salt. Coat chicken and marinate for 20 minutes.", "Sear chicken in a hot oiled pan for 6 to 8 minutes, turning until browned and cooked through to 165°F (74°C).", "Warm the rotis, spread with mint chutney, and fill with chicken and sliced onion. Roll tightly and serve hot."]
  },
  "shrimp-pesto-pasta": {
    ingredients: ["12 oz linguine", "12 oz peeled and deveined shrimp", "2 tablespoons olive oil", "2 garlic cloves, thinly sliced", "1/2 cup basil pesto", "Juice and zest of 1/2 lemon", "1/4 cup grated parmesan"],
    method: ["Boil linguine in salted water until al dente. Reserve 1/2 cup pasta water and drain.", "Heat olive oil in a skillet. Add shrimp, garlic, salt, and pepper; cook for 2 minutes per side until opaque and cooked through.", "Toss pasta with pesto, lemon, shrimp, and a splash of pasta water. Finish with parmesan and serve immediately."]
  },
  "tuna-nicoise": {
    ingredients: ["2 tuna steaks, about 5 oz each", "8 oz baby potatoes, halved", "6 oz green beans, trimmed", "2 cups mixed salad leaves", "1 tablespoon Dijon mustard", "2 tablespoons red wine vinegar and 3 tablespoons olive oil", "8 pitted olives and 2 hard-boiled eggs, halved"],
    method: ["Boil potatoes in salted water until tender, about 12 minutes. Add green beans for the final 3 minutes, then drain and cool slightly.", "Whisk Dijon, vinegar, olive oil, salt, and pepper. Brush tuna with oil and sear in a very hot pan for 1 to 2 minutes per side; rest, then slice.", "Arrange leaves, potatoes, beans, olives, and eggs on plates. Add sliced tuna and spoon over the mustard dressing."]
  },
  "chicken-fried-rice": {
    ingredients: ["3 cups cold cooked rice", "10 oz boneless chicken breast, diced", "1 tablespoon neutral oil", "1 cup frozen peas and carrots", "2 eggs, lightly beaten", "2 tablespoons soy sauce and 1 teaspoon sesame oil", "2 scallions, sliced"],
    method: ["Heat oil in a wok over high heat. Add chicken, season lightly, and stir-fry until golden and cooked through to 165°F (74°C). Transfer to a plate.", "Scramble the eggs in the wok, then add peas and carrots and cook for 2 minutes. Add rice and break up any clumps.", "Return chicken to the wok. Add soy sauce and sesame oil; toss until steaming hot. Finish with scallions and serve."]
  },
  "butter-chicken": {
    ingredients: ["1 1/2 lb boneless chicken thighs, cubed", "1/2 cup plain yogurt", "1 tablespoon garam masala and 1 teaspoon paprika", "2 tablespoons butter", "1 small onion, finely diced", "1 can (14 oz) crushed tomatoes and 1/2 cup cream", "1 tablespoon ginger-garlic paste"],
    method: ["Toss chicken with yogurt, half the garam masala, paprika, and salt. Marinate for 20 minutes, then sear in a hot pan until browned and cooked through.", "Melt butter in the pan. Cook onion until soft, add ginger-garlic paste, then stir in tomatoes and remaining garam masala. Simmer for 15 minutes.", "Blend the sauce until smooth if desired. Stir in cream and chicken, simmer gently for 5 minutes, and serve with rice or naan."]
  },
  "kerala-fish-curry": {
    ingredients: ["1 lb firm white fish, cut into chunks", "1 tablespoon coconut oil", "1 small onion, thinly sliced", "1 tablespoon ginger and garlic, minced", "1 teaspoon turmeric and 1 teaspoon chilli powder", "1 cup coconut milk and 1/2 cup water", "1 tablespoon tamarind paste and 8 curry leaves"],
    method: ["Warm coconut oil in a pan. Add onion and curry leaves and cook until the onion softens; stir in ginger and garlic.", "Add turmeric, chilli powder, coconut milk, water, tamarind, and salt. Bring to a gentle simmer for 8 minutes.", "Slide in the fish and poach gently for 6 to 8 minutes, until opaque and flaky. Avoid stirring vigorously; serve with steamed rice."]
  },
  "chicken-parmesan": {
    ingredients: ["2 chicken breasts, halved horizontally", "1/2 cup all-purpose flour", "2 eggs, beaten", "1 cup breadcrumbs and 1/2 cup grated parmesan", "1 cup marinara sauce", "4 oz mozzarella, sliced", "2 tablespoons olive oil and fresh basil"],
    method: ["Heat the oven to 425°F (220°C). Season chicken; dredge in flour, dip in egg, then coat in breadcrumbs mixed with half the parmesan.", "Pan-fry in olive oil for 3 minutes per side until golden. Transfer to a baking dish and spoon marinara over each piece.", "Top with mozzarella and remaining parmesan. Bake for 10 to 12 minutes, until cheese bubbles and chicken reaches 165°F (74°C). Finish with basil."]
  },
  "lamb-kofta": {
    ingredients: ["1 lb ground lamb", "1/4 cup finely minced onion", "2 tablespoons chopped parsley", "1 teaspoon ground cumin and 1/2 teaspoon coriander", "1/2 teaspoon paprika and 1 minced garlic clove", "2 cups cooked bulgur or brown rice", "1/2 cup plain yogurt, cucumber, and lemon"],
    method: ["Combine lamb, onion, parsley, cumin, coriander, paprika, garlic, salt, and pepper. Shape into 8 oval kofta around skewers.", "Grill or broil over high heat for 8 to 10 minutes, turning once, until browned and cooked through to 160°F (71°C).", "Serve over warm bulgur with cucumber, lemon wedges, and yogurt loosened with a little water."]
  },
  "turkey-meatballs": {
    ingredients: ["1 lb ground turkey", "1/3 cup breadcrumbs", "1 egg", "1/4 cup grated parmesan", "2 tablespoons chopped parsley and 1 minced garlic clove", "2 cups marinara sauce", "8 oz spaghetti and 1 tablespoon olive oil"],
    method: ["Mix turkey, breadcrumbs, egg, parmesan, parsley, garlic, salt, and pepper. Shape into 16 golf-ball-sized meatballs.", "Brown meatballs in olive oil in a deep skillet, turning gently. Pour in marinara, cover, and simmer for 15 minutes until cooked through to 165°F (74°C).", "Meanwhile, boil spaghetti until al dente. Serve meatballs and sauce over pasta with extra parmesan."]
  },
  "salmon-poke-bowl": {
    ingredients: ["4 salmon fillets, about 5 oz each", "2 cups cooked sushi rice", "1 tablespoon soy sauce and 1 teaspoon sesame oil", "1 teaspoon grated ginger", "1 cucumber, sliced", "1 ripe avocado, sliced", "1 tablespoon sesame seeds and 2 scallions"],
    method: ["Brush salmon with soy sauce, sesame oil, and ginger. Bake at 400°F (200°C) for 10 to 14 minutes until it flakes and reaches 145°F (63°C).", "Divide warm rice among bowls. Arrange cucumber and avocado alongside the cooked salmon.", "Drizzle with any remaining dressing and finish with sesame seeds and scallions."]
  },
  "chicken-tikka-skewers": {
    ingredients: ["1 lb boneless chicken thighs, cut into chunks", "1/2 cup plain yogurt", "1 tablespoon tikka masala spice blend", "1 tablespoon lemon juice", "1 tablespoon neutral oil", "1 red onion, cut into chunks", "Mint chutney and lime wedges"],
    method: ["Stir yogurt, tikka spice, lemon juice, oil, and salt together. Coat chicken and marinate for at least 20 minutes.", "Thread chicken and onion onto skewers. Grill over medium-high heat or broil, turning occasionally, until charred and the chicken reaches 165°F (74°C), about 10 to 12 minutes.", "Rest for 3 minutes, then serve with mint chutney and lime wedges."]
  },
  "prawn-toast": {
    ingredients: ["8 oz raw peeled prawns", "1 egg white", "1 teaspoon soy sauce", "1 teaspoon grated ginger", "4 slices white sandwich bread", "2 tablespoons sesame seeds", "Neutral oil for shallow-frying and sliced scallions"],
    method: ["Pulse prawns, egg white, soy sauce, ginger, and a pinch of salt into a coarse paste.", "Spread the prawn mixture evenly over one side of each bread slice. Press sesame seeds gently into the topping and cut each slice into quarters.", "Shallow-fry topping-side down for 3 minutes, flip, and cook 1 minute more until golden and the prawn is opaque. Drain and top with scallions."]
  },
  "berry-french-toast": {
    ingredients: ["4 thick slices brioche", "2 large eggs", "1/2 cup whole milk", "1 teaspoon vanilla extract and 1/2 teaspoon cinnamon", "1 tablespoon butter", "1 cup mixed berries", "Maple syrup and powdered sugar, to serve"],
    method: ["Whisk eggs, milk, vanilla, and cinnamon in a shallow dish. Dip each brioche slice briefly on both sides.", "Melt butter in a skillet over medium heat. Cook bread for 2 to 3 minutes per side until golden and cooked through.", "Warm berries in the pan for a minute, then spoon over the toast. Finish with maple syrup and powdered sugar."]
  },
  "egg-bhurji": {
    ingredients: ["4 large eggs", "1 small onion, finely diced", "1 tomato, diced", "1 green chilli, finely chopped", "1/2 teaspoon turmeric and 1/2 teaspoon ground cumin", "1 tablespoon butter or oil", "2 tablespoons chopped cilantro and 4 pav rolls"],
    method: ["Beat eggs with a pinch of salt. Heat butter in a pan and cook onion and chilli until soft.", "Add tomato, turmeric, and cumin; cook until the tomato breaks down. Pour in eggs and stir gently over low heat until softly scrambled.", "Fold in cilantro and remove from the heat while still creamy. Serve with toasted pav or warm bread."]
  },
  "chicken-shawarma-bowl": {
    ingredients: ["1 lb boneless chicken thighs", "2 tablespoons olive oil", "1 teaspoon each cumin and paprika", "1/2 teaspoon each turmeric and ground coriander", "2 cups cooked bulgur or brown rice", "1 cucumber and 1 tomato, chopped", "1/2 cup plain yogurt and juice of 1/2 lemon"],
    method: ["Toss chicken with olive oil, cumin, paprika, turmeric, coriander, salt, and pepper. Marinate for 15 minutes.", "Sear chicken in a hot pan for 6 to 8 minutes per side until browned and cooked through to 165°F (74°C). Rest, then slice.", "Whisk yogurt with lemon juice and a pinch of salt. Serve chicken over grains with cucumber and tomato, drizzled with lemon yogurt."]
  },
  "greek-orzo-salad": {
    ingredients: ["1 cup dry orzo", "1 cucumber, diced", "1 cup cherry tomatoes, halved", "1/3 cup pitted Kalamata olives", "1/3 cup crumbled feta", "2 tablespoons olive oil and juice of 1/2 lemon", "1 tablespoon chopped oregano or parsley"],
    method: ["Cook orzo in salted water according to the package directions. Drain, rinse briefly with cool water, and drain well.", "Whisk olive oil, lemon juice, oregano, salt, and black pepper into a dressing.", "Toss orzo with cucumber, tomatoes, olives, and dressing. Fold in feta and chill for 10 minutes before serving."]
  },
  "prawn-biryani": {
    ingredients: ["1 1/2 cups basmati rice, rinsed and soaked", "1 lb peeled prawns", "2 tablespoons ghee", "1 large onion, thinly sliced", "1 tablespoon ginger-garlic paste", "1 teaspoon biryani masala and 1/2 teaspoon turmeric", "1/2 cup yogurt, 1/4 cup chopped mint, and salt"],
    method: ["Boil rice in salted water until about 70 percent cooked, 5 to 6 minutes. Drain and set aside.", "Fry onion in ghee until golden; reserve some for garnish. Add ginger-garlic paste and spices, then stir in yogurt and prawns. Cook just until the prawns turn opaque.", "Layer rice over the prawn masala and scatter with mint and fried onion. Cover tightly and steam on low for 12 minutes; rest for 5 minutes before fluffing gently."]
  },
  "margherita-pizza": {
    ingredients: ["1 lb prepared pizza dough", "1/2 cup crushed tomatoes", "8 oz fresh mozzarella, torn", "1 tablespoon olive oil", "1/2 teaspoon dried oregano", "1/2 cup fresh basil leaves", "Flour for shaping and salt"],
    method: ["Heat the oven to 500°F (260°C), or its highest setting, with a pizza stone or heavy tray inside.", "Stretch dough on a floured surface. Spread a thin layer of crushed tomato, season with salt and oregano, and scatter mozzarella over it.", "Bake for 8 to 12 minutes until the crust is blistered and cheese bubbles. Finish with olive oil and fresh basil."]
  },
  "vegetable-lasagna": {
    ingredients: ["9 lasagna sheets", "1 zucchini and 1 red pepper, diced", "8 oz mushrooms, sliced", "2 cups marinara sauce", "1 cup ricotta", "1 1/2 cups shredded mozzarella", "1/4 cup grated parmesan and 1 tablespoon olive oil"],
    method: ["Heat the oven to 375°F (190°C). Toss zucchini, pepper, and mushrooms with olive oil, salt, and pepper; roast for 15 minutes.", "Spread a little marinara in a baking dish. Layer pasta sheets, roasted vegetables, spoonfuls of ricotta, sauce, and mozzarella; repeat and finish with parmesan.", "Cover with foil and bake for 25 minutes. Uncover and bake another 15 minutes until bubbling and golden. Rest for 10 minutes before slicing."]
  },
  "paneer-tikka-bites": {
    ingredients: ["14 oz paneer, cut into cubes", "1/3 cup thick plain yogurt", "1 tablespoon tikka masala spice blend", "1 tablespoon lemon juice", "1 red bell pepper, cut into chunks", "1 tablespoon oil", "Mint chutney and lime wedges"],
    method: ["Mix yogurt, tikka spice, lemon juice, oil, and salt. Coat paneer and pepper; marinate for 15 minutes.", "Thread paneer and pepper onto skewers. Grill or broil, turning occasionally, until charred at the edges, about 8 to 10 minutes.", "Arrange on a platter and serve hot with mint chutney and lime wedges."]
  },
  "crispy-fish-fingers": {
    ingredients: ["1 lb firm white fish fillets, cut into strips", "1/2 cup all-purpose flour", "2 eggs, beaten", "1 cup panko breadcrumbs", "1 tablespoon chopped parsley", "1/2 teaspoon paprika", "1/3 cup mayonnaise and juice of 1/2 lemon"],
    method: ["Heat the oven to 425°F (220°C). Mix panko with parsley, paprika, salt, and pepper. Set out flour and beaten eggs in separate bowls.", "Coat each fish strip in flour, dip in egg, then press into the panko. Arrange on an oiled baking tray and drizzle lightly with oil.", "Bake for 12 to 15 minutes, turning once, until crisp and the fish flakes easily. Mix mayonnaise with lemon juice and serve as a dip."]
  },
  "chocolate-mousse": {
    ingredients: ["6 oz dark chocolate, finely chopped", "3 large eggs, separated", "2 tablespoons sugar", "1 cup cold heavy cream", "1 teaspoon vanilla extract", "A pinch of salt", "Whipped cream and chocolate shavings, to serve"],
    method: ["Melt chocolate gently over a pan of simmering water; cool until just warm. Whisk in egg yolks one at a time.", "Whip cream with vanilla to soft peaks. In a clean bowl, beat egg whites with salt until foamy, then gradually add sugar and beat to soft peaks.", "Fold cream into chocolate, then gently fold in egg whites in two additions. Spoon into glasses and chill for at least 3 hours; serve with whipped cream."]
  }
};

function renderDetails() {
  const requestedId = new URLSearchParams(window.location.search).get("id");
  const recipe = recipes.find((item) => item.id === requestedId) || recipes.find((item) => item.id === "vegetable-biryani");
  const isBiryani = recipe.id === "vegetable-biryani";
  const guide = recipeGuides[recipe.id];
  const ingredients = guide.ingredients;
  const steps = guide.method;
  const related = recipes.filter((item) => item.id !== recipe.id && item.sections.some((section) => recipe.sections.includes(section))).slice(0, 3);
  document.title = `${recipe.name} | TasteTrail`;
  document.querySelector("#main-content").innerHTML = `
    <section class="detail-hero"><div class="shell"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="${recipe.sections.includes("indian") ? "indian.html" : `${recipe.sections[0]}.html`}">${recipe.sections.includes("indian") ? "Indian Cuisine" : recipe.sections[0][0].toUpperCase() + recipe.sections[0].slice(1)}</a><span>/</span><span>${recipe.name}</span></nav><div class="detail-top"><div class="detail-photo"><img src="${imageUrl(recipe, 1200)}" alt="${recipe.name}, ready to serve"></div><div class="detail-intro"><p class="eyebrow">${recipe.cuisine} · ${recipe.tag}</p><h1>${recipe.name}</h1><p>${recipe.description} A welcoming, flavor-packed recipe with clear steps for a meal worth sharing.</p><div class="detail-stats"><div class="detail-stat"><strong>${isBiryani ? "20 min" : `${Math.max(5, Math.round(recipe.time * .35))} min`}</strong><span>Prep time</span></div><div class="detail-stat"><strong>${isBiryani ? "50 min" : `${Math.ceil(recipe.time * .65)} min`}</strong><span>Cook time</span></div><div class="detail-stat"><strong>4</strong><span>Servings</span></div><div class="detail-stat"><strong>${recipe.difficulty}</strong><span>Difficulty</span></div></div><div class="detail-actions"><button class="button" type="button" data-print>Print recipe <span aria-hidden="true">↗</span></button><a class="button button--outline" href="#ingredients">Jump to ingredients</a></div></div></div></div></section>
    <section class="section section--white"><div class="shell detail-content"><div><div id="ingredients"><p class="eyebrow">Before you begin</p><h2>Ingredients</h2><p style="color:var(--muted);font-size:13px">Check off each item as you get it ready.</p><ul class="ingredient-list">${ingredients.map((ingredient) => `<li><label><input type="checkbox"><span>${ingredient}</span></label></li>`).join("")}</ul></div><div style="margin-top:48px"><p class="eyebrow">Let's cook</p><h2>Method</h2><ol class="instructions">${steps.map((step) => `<li><p>${step}</p></li>`).join("")}</ol><div class="tip-box"><strong>From our kitchen</strong><p>${isBiryani ? "The best biryani keeps its layers. Resist the urge to stir while it steams, and let the covered pot rest before serving." : `Taste as you go, keep the heat comfortable, and finish ${recipe.name.toLowerCase()} with fresh herbs or a squeeze of citrus.`}</p></div><div class="tip-box"><strong>Serving suggestion</strong><p>${isBiryani ? "Serve with cool cucumber raita, lemon wedges, and a simple kachumber salad." : "Bring it to the table warm, with a crisp seasonal salad and something lovely to drink."}</p></div></div></div><aside><p class="eyebrow">A little extra</p><h3>Good to know</h3><p style="color:var(--muted);font-size:13px">${isBiryani ? "For distinct, fluffy grains, rinse the basmati until the water runs clear and avoid overcooking it before layering." : `This ${recipe.difficulty.toLowerCase()} recipe takes about ${recipe.time} minutes and makes a lovely centerpiece for a relaxed meal.`}</p><div class="tip-box"><strong>Nutrition, per serving</strong><p>About ${recipe.calories} calories · ${recipe.protein}g protein<br>Estimates vary with ingredients and portions.</p></div></aside></div></section>
    <section class="section related-section"><div class="shell">${sectionHeading("Keep exploring", "More for your table", "A few more recipes to follow wherever your appetite leads.", recipe.sections.includes("indian") ? "indian.html" : "dinner.html")}<div class="recipe-grid recipe-grid--three">${related.map(cardMarkup).join("")}</div></div></section>`;
  document.querySelector("[data-print]").addEventListener("click", () => window.print());
}

function bindSearch() {
  document.querySelectorAll("[data-search-form]").forEach((form) => {
    const input = form.querySelector("input");
    const results = form.querySelector("[data-search-results]");
    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();
      if (query.length < 2) { results.hidden = true; results.innerHTML = ""; return; }
      const matches = recipes.filter((recipe) => `${recipe.name} ${recipe.description} ${recipe.cuisine} ${recipe.tag}`.toLowerCase().includes(query)).slice(0, 5);
      results.innerHTML = matches.length ? matches.map((recipe) => `<a class="search-result" href="${recipeUrl(recipe)}"><img src="${imageUrl(recipe, 120)}" alt="" loading="lazy"><span><strong>${recipe.name}</strong><small>${recipe.time} min · ${recipe.cuisine}</small></span></a>`).join("") : '<p class="search-empty">No recipes found. Try a dish, ingredient, or cuisine.</p>';
      results.hidden = false;
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = input.value.trim().toLowerCase();
      const match = recipes.find((recipe) => `${recipe.name} ${recipe.description} ${recipe.cuisine} ${recipe.tag}`.toLowerCase().includes(query));
      if (match) window.location.href = recipeUrl(match);
      else if (query.length) { results.hidden = false; results.innerHTML = '<p class="search-empty">No recipes found. Try another search.</p>'; }
    });
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-search-form]")) document.querySelectorAll("[data-search-results]").forEach((menu) => { menu.hidden = true; });
  });
}

function bindCommonControls() {
  const menuButton = document.querySelector(".menu-toggle");
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    document.body.classList.toggle("menu-open", !expanded);
  });
  document.querySelectorAll(".mobile-panel a").forEach((link) => link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }));
  const topButton = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => topButton.classList.toggle("is-visible", window.scrollY > 480), { passive: true });
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.querySelectorAll("[data-newsletter]").forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = document.querySelector("[data-newsletter-message]");
    if (!form.elements.email.checkValidity() || !email) {
      message.textContent = "Add a valid email address and we will save you a seat.";
      form.elements.email.focus();
      return;
    }
    message.textContent = "You're on the list. Look out for a little inspiration from our kitchen!";
    form.reset();
  }));
}

function init() {
  const main = document.querySelector("#main-content");
  const page = main.dataset.page;
  renderHeader(page);
  renderFooter();
  if (page === "home") renderHome();
  else if (page === "details") renderDetails();
  else renderListing(page);
  bindSearch();
  bindCommonControls();
}

init();