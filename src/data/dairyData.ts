import { Category, Product, Testimonial, GalleryItem } from '../types';

export const WHATSAPP_NUMBER = '916354691080';
export const STORE_ADDRESS = 'Babra,Amreli-365421, Gujarat, India';
export const STORE_PHONE = '+91 63546 91080';
export const STORE_EMAIL = 'khodiyardairybabra@gmail.com';
export const MAP_EMBED_URL = 'https://maps.app.goo.gl/djx6BBY5tRPJ5hoQ6';
// Exactly 3 main product categories as requested
export const categories: Category[] = [
  {
    id: 'mithai',
    name: 'Sweets',
    gujaratiName: 'મીઠાઈઓ',
    description: 'Traditional mouth-watering sweets crafted with pure ghee and dry fruits.',
    iconName: 'Sparkles',
    bgColor: 'bg-[#FFF8E1]',
    textColor: 'text-[#FF9933]',
    illustrationType: 'sweet',
    imageUrl: '/images/kaju-katri.jpeg'
  },
  {
    id: 'liquid',
    name: 'Liquid',
    gujaratiName: 'પ્રવાહી મીઠાઈ અને પીણાં',
    description: 'Refreshing dairy drinks, milkshakes, rabdi, and natural fruit pulp.',
    iconName: 'Droplet',
    bgColor: 'bg-[#F5EFE6]',
    textColor: 'text-[#C5A059]',
    illustrationType: 'milk',
    imageUrl: '/images/liquid.png'
  },
  {
    id: 'shrikhand_matho',
    name: 'Shrikhand & Matho',
    gujaratiName: 'શ્રીખંડ અને મઠો',
    description: 'Velvety strained yogurt treats infused with saffron, cardamom and dry fruits.',
    iconName: 'Award',
    bgColor: 'bg-[#FAF6EE]',
    textColor: 'text-[#3E2723]',
    illustrationType: 'shrikhand',
    imageUrl: '/images/kesar-pista-shikhand.png'
  }
];

// All products from the attached CSV
export const products: Product[] = [
  {
    id: 'coco-1kg',
    name: 'Coco',
    gujaratiName: 'કોકો',
    price: 200,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Rich coconut liquid sweet loaded with premium dry fruits, saffron and rose. Thick, creamy and indulgent.',
    illustrationType: 'sweet'
  },
  {
    id: 'lassi-1kg',
    name: 'Lassi',
    gujaratiName: 'લસ્સી',
    price: 200,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Thick, creamy and refreshing yogurt drink made from fresh full-fat curd, churned to perfection.',
    illustrationType: 'buttermilk'
  },
  {
    id: 'cham-cham-1kg',
    name: 'Cham Cham',
    gujaratiName: 'ચમચમ',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Soft spongy oblong yellow chenna pieces soaked in light sugar syrup, filled with a delicate white cream stripe.',
    illustrationType: 'sweet',
    isFeatured: true
  },
  {
    id: 'kd-special-matho-1kg',
    name: 'K-D Special Matho',
    gujaratiName: 'K&D સ્પેશ્યલ મઠો',
    price: 380,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Our signature house special - a luxurious blend of premium dry fruits, saffron, pistachio and rose, crafted exclusively.',
    illustrationType: 'shrikhand',
    isBestSeller: true,
    badge: 'Signature'
  },
  {
    id: 'kesar-badam-matho-1kg',
    name: 'Kesar Badam Matho',
    gujaratiName: 'કેસર બાદામ મઠો',
    price: 340,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Premium liquid sweet - thick, creamy and richly infused with pure saffron and loaded with fresh almond slivers.',
    illustrationType: 'shrikhand'
  },
  {
    id: 'american-dryfruit-liq-matho-1kg',
    name: 'American Dry Fruit Matho',
    gujaratiName: 'અમેરિકન ડ્રાયફ્રૂટ લિક્વિડ મઠો',
    price: 260,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Rich and indulgent liquid sweet - thick, creamy and loaded with premium American dry fruits including almonds, cashews, pistachios and raisins.',
    illustrationType: 'shrikhand'
  },
  {
    id: 'adadiya-1kg',
    name: 'Adadiya',
    gujaratiName: 'અડદિયા',
    price: 480,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Traditional Gujarati winter specialty - rich, dense and nutritious sweet made from urad dal, pure ghee, dry fruits and spices.',
    illustrationType: 'sweet',
    isFeatured: true,
    badge: 'Winter Special'
  },
  {
    id: 'bombe-halvo-1kg',
    name: 'Bombe Halvo',
    gujaratiName: 'બોમ્બે હલવો',
    price: 320,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Vibrant and chewy Bombay-style halwa - bright, glossy and translucent pieces made with cornflour, ghee and sugar.',
    illustrationType: 'sweet'
  },
  {
    id: 'panch-ratna-halvo-1kg',
    name: 'Panch Ratna Halvo',
    gujaratiName: 'પંચ રત્ન હલવો',
    price: 480,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Five-layer colorful halwa made with pure ghee. Visually stunning and richly flavored.',
    illustrationType: 'sweet'
  },
  {
    id: 'maisup-pak-1kg',
    name: 'Mysore Pak',
    gujaratiName: 'મૈસૂર પાક',
    price: 600,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Rich golden Mysore Pak made with pure ghee, besan and sugar. Crumbly, melt-in-mouth and deeply indulgent.',
    illustrationType: 'sweet'
  },
  {
    id: 'laddu-motichur-1kg',
    name: 'Motichur Laddu',
    gujaratiName: 'મોતીચુર લાડુ',
    price: 180,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Soft, golden round laddus made from tiny fried boondi pearls bound together with fragrant sugar syrup, cardamom and saffron.',
    illustrationType: 'sweet'
  },
  {
    id: 'kalakand-1kg',
    name: 'Kalakand',
    gujaratiName: 'કલાકંદ',
    price: 850,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Premium Indian milk cake - soft, moist and grainy white sweet made by slow-cooking fresh milk and paneer to perfection.',
    illustrationType: 'sweet'
  },
  {
    id: 'modak-1kg',
    name: 'Modak',
    gujaratiName: 'મોદક',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Soft steamed dumplings filled with sweet coconut and jaggery. Traditional and authentic.',
    illustrationType: 'sweet'
  },
  {
    id: 'soan-papdi-1kg',
    name: 'Soan Papdi',
    gujaratiName: 'સોન પાપડી',
    price: 240,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Light, airy and flaky golden threads of sweetness made with pure ghee, besan and sugar.',
    illustrationType: 'sweet'
  },
  {
    id: 'pista-barfi-1kg',
    name: 'Barfi Pista',
    gujaratiName: 'બરફી પિસ્તા',
    price: 340,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Premium green pistachio barfi made with fresh milk and real pistachios. Rich, nutty and beautifully colored.',
    illustrationType: 'sweet'
  },
  {
    id: 'barfi-chocolate-1kg',
    name: 'Barfi Chocolate',
    gujaratiName: 'બરફી ચોકલેટ',
    price: 340,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Rich, dark chocolate barfi made from fresh milk and premium cocoa. Smooth, glossy and deeply indulgent.',
    illustrationType: 'sweet'
  },
  {
    id: 'barfi-white-1kg',
    name: 'Barfi White',
    gujaratiName: 'બરફી વ્હાઇટ',
    price: 340,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Classic Gujarati milk barfi made from fresh full-fat milk, slow-cooked to perfection. Smooth and creamy.',
    illustrationType: 'sweet'
  },
  {
    id: 'kala-jambu-1kg',
    name: 'Kala Jambu',
    gujaratiName: 'કાળા જાંબુ',
    price: 240,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Soft, dark and deeply caramelized gulab jamun balls soaked in fragrant rose sugar syrup.',
    illustrationType: 'sweet'
  },
  {
    id: 'marcel-cake-1kg',
    name: 'Marcel Cake',
    gujaratiName: 'માર્સલ કેક',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Premium double-layer Gujarati mithai - saffron-flavored layer on top and chocolate brownies layer on bottom.',
    illustrationType: 'sweet'
  },
  {
    id: 'keri-no-ras-1kg',
    name: 'Keri No Ras',
    gujaratiName: 'કેરી નો રસ',
    price: 200,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Seasonal favorite - thick, fresh and naturally sweet raw mango pulp made from the finest Kesar mangoes.',
    illustrationType: 'milk'
  },
  {
    id: 'mix-fruit-shrikhand-1kg',
    name: 'Mix Fruit Shrikhand',
    gujaratiName: 'મિક્સ ફ્રૂટ શ્રીખંડ',
    price: 240,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Vibrant twisted strained yogurt loaded with fresh seasonal fruits including strawberries, mango, grapes and kiwi.',
    illustrationType: 'shrikhand'
  },
  {
    id: 'white-elaichi-shrikhand-1kg',
    name: 'White Elaichi Shrikhand',
    gujaratiName: 'વ્હાઇટ એલચી શ્રીખંડ',
    price: 240,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Delicate and aromatic classic - thick, creamy pure white strained yogurt gently flavored with white cardamom.',
    illustrationType: 'shrikhand'
  },
  {
    id: 'kesar-pista-shrikhand-1kg',
    name: 'Kesar Pista Shrikhand',
    gujaratiName: 'કેસર પિસ્તા શ્રીખંડ',
    price: 360,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Thick, creamy strained yogurt richly infused with pure saffron and loaded with chopped pistachios.',
    illustrationType: 'shrikhand',
    isFeatured: true,
    isBestSeller: true,
    badge: 'Famous'
  },
  {
    id: 'rajbhog-shrikhand-1kg',
    name: 'Rajbhog Shrikhand',
    gujaratiName: 'રાજભોગ શ્રીખંડ',
    price: 240,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Royal combination of thick creamy saffron shrikhand blended with soft rajbhog chenna pieces.',
    illustrationType: 'shrikhand'
  },
  {
    id: 'pineapple-shrikhand-1kg',
    name: 'Pineapple Shrikhand',
    gujaratiName: 'પાઇનેપલ શ્રીખંડ',
    price: 260,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Tangy-sweet fruity strained yogurt blended with sugar and real juicy pineapple pieces.',
    illustrationType: 'shrikhand'
  },
  {
    id: 'american-dryfruit-shrikhand-1kg',
    name: 'American Dry Fruit Matho',
    gujaratiName: 'અમેરિકન ડ્રાયફ્રૂટ શ્રીખંડ',
    price: 280,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Creamy yogurt sweet loaded with premium chopped cashews, almonds, pistachios and raisins.',
    illustrationType: 'shrikhand'
  },
  
  {
    id: 'gajar-halvo-1kg',
    name: 'Gajar Halvo',
    gujaratiName: 'ગાજર હલવો',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Freshly grated red carrots slow-cooked in pure desi ghee and full-fat milk until rich and moist.',
    illustrationType: 'sweet'
  },
  {
    id: 'kasata-1kg',
    name: 'Kasata',
    gujaratiName: 'કસાટા',
    price: 480,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Tri-color dairy ice cream sweet with strawberry, vanilla and pistachio layers.',
    illustrationType: 'sweet'
  },
  {
    id: 'mango-pie-1kg',
    name: 'Mango Pie',
    gujaratiName: 'મેંગો પાઈ',
    price: 440,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Luscious creamy mango dessert made from fresh alphonso mango pulp blended with rich cream.',
    illustrationType: 'sweet'
  },
  {
    id: 'badam-shake-1kg',
    name: 'Badam Shake',
    gujaratiName: 'બદામ શેક',
    price: 160,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Thick, creamy and nourishing milkshake made from fresh full-fat milk blended with premium almonds.',
    illustrationType: 'milk'
  },
  {
    id: 'fruit-salad-1kg',
    name: 'Fruit Salad',
    gujaratiName: 'ફ્રૂટ સલાડ',
    price: 160,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Colorful mix of fresh seasonal fruits soaked in rich creamy sweet milk. Light and fruity.',
    illustrationType: 'milk'
  },
  {
    id: 'sitafal-rabdi-1kg',
    name: 'Sitafal Rabdi',
    gujaratiName: 'સીતાફળ રબડી',
    price: 340,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Custard apple pulp blended with rich creamy rabdi, slow-cooked in full-fat milk.',
    illustrationType: 'milk'
  },
  {
    id: 'angur-rabdi-1kg',
    name: 'Angur Rabdi',
    gujaratiName: 'અંગૂર રબડી',
    price: 340,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Delightful fusion of fresh juicy grapes and rich creamy rabdi infused with saffron.',
    illustrationType: 'milk'
  },
  {
    id: 'basundi-1kg',
    name: 'Basundi',
    gujaratiName: 'બાસુંદી',
    price: 280,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Classic liquid milk dessert made by slowly reducing full-fat milk with sugar and cardamom.',
    illustrationType: 'milk'
  },
  
  
  {
    id: 'rasgulla-1kg',
    name: 'Rasgulla',
    gujaratiName: 'રસગુલ્લા',
    price: 480,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Soft, spongy and melt-in-mouth chenna balls cooked in light sugar syrup.',
    illustrationType: 'sweet'
  },
  {
    id: 'dudhi-halvo-1kg',
    name: 'Dudhi Halvo',
    gujaratiName: 'દુધી હલવો',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Freshly grated bottle gourd slow-cooked in pure desi ghee and full-fat milk.',
    illustrationType: 'sweet'
  },
  {
    id: 'anjir-pak-1kg',
    name: 'Anjir Pak',
    gujaratiName: 'અંજીર પાક',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Rich fig sweet cooked in pure desi ghee, packed with natural sweetness and nutrition.',
    illustrationType: 'sweet'
  },
  {
    id: 'anjir-cake-1kg',
    name: 'Anjir Cake',
    gujaratiName: 'અંજીર કેક',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Premium fig roll stuffed with dry fruits, sliced into beautiful round rounds.',
    illustrationType: 'sweet'
  },
  {
    id: 'khajur-pak-1kg',
    name: 'Khajur Pak',
    gujaratiName: 'ખજુર પાક',
    price: 340,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Wholesome sweet made from whole dates cooked in pure ghee and mixed with dry fruits.',
    illustrationType: 'sweet'
  },
  {
    id: 'topra-pak-1kg',
    name: 'Topra Pak',
    gujaratiName: 'ટોપરા પાક',
    price: 340,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Fresh coconut sweet slow-cooked with ghee and sugar to a melt-in-mouth finish.',
    illustrationType: 'sweet'
  },
  {
    id: 'gulab-jambu-1kg',
    name: 'Gulab Jambu',
    gujaratiName: 'ગુલાબ જાંબુ',
    price: 200,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Pillowy soft milk solid balls soaked in fragrant cardamom and rose sugar syrup.',
    illustrationType: 'sweet'
  },
  {
    id: 'thabdi-1kg',
    name: 'Thabdi',
    gujaratiName: 'થાબડી',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Pure khoya slow-cooked with sugar to a rich golden brown grainy texture.',
    illustrationType: 'sweet',
    isBestSeller: true,
    badge: 'Granular Ghee Style'
  },
  {
    id: 'mohanthal-1kg',
    name: 'Mohanthal',
    gujaratiName: 'મોહનથાળ',
    price: 400,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Gujarat\'s beloved gram flour sweet slow-cooked in pure desi ghee, finished with cardamom.',
    illustrationType: 'sweet'
  },
  {
    id: 'kaju-katli-1kg',
    name: 'Kaju Katli',
    gujaratiName: 'કાજુ કતરી',
    price: 1000,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Finest whole cashew nuts ground to a smooth paste, topped with shimmering silver vark.',
    illustrationType: 'kaju-katli',
    isBestSeller: true,
    badge: 'King of Sweets'
  },
  {
    id: 'penda-thabdi-1kg',
    name: 'Thabdi Penda',
    gujaratiName: 'થાબડી પેંડા',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Crafted from pure khoya slow-cooked to a dense, rich caramelized finish.',
    illustrationType: 'sweet'
  },
  {
    id: 'penda-milk-1kg',
    name: 'Milk Penda',
    gujaratiName: 'દૂધના પેંડા',
    price: 400,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Soft melt-in-mouth pedha made from the finest slow-cooked milk solids and sugar.',
    illustrationType: 'pedha'
  },
  {
    id: 'kaju-maisup-pak-1kg',
    name: 'Kaju Maisup Pak',
    gujaratiName: 'કાજુ મૈસૂર પાક',
    price: 900,
    category: 'mithai',
    unit: '1 Kg',
    description: "Khodiyar Dairy's Kaju Maisup Pak is a premium upgrade on the classic Mysore Pak — rich, golden and melt-in-mouth squares made with generous amounts of pure ghee, besan and loaded with premium whole cashew nuts. Each piece has a beautiful porous honeycomb interior that simply dissolves on the tongue.",
    illustrationType: 'sweet'
  },
  {
    id: 'kalakand-Barfi-1kg',
    name: 'Barfi Kalakand',
    gujaratiName: 'બરફી કલાકંદ',
    price: 850,
    category: 'mithai',
    unit: '1 Kg',
    description: "Khodiyar Dairy's Kalakand | કલાકંદ is a premium Indian milk cake — a beautiful double-layer sweet with a golden grainy base and a pure white creamy top layer made from slow-cooked fresh milk and paneer. Soft, moist and melt-in-mouth, decorated with silver varq, saffron strands and chopped pistachios. Rich in milk solids and delicately sweet.",
    illustrationType: 'sweet'
  },
  {
    id: 'gundar-pak-1kg',
    name: 'Gundar Pak',
    gujaratiName: 'ગુંદર પાક',
    price: 680,
    category: 'mithai',
    unit: '1 Kg',
    description: "Khodiyar Dairy's Gundar Pak | ગુંદર પાક is a traditional Gujarati winter specialty — rich, dense and deeply nourishing sweet made from edible gum (gundar/gond), pure ghee, wheat flour and jaggery, generously loaded with mixed dry fruits including almonds, cashews, pistachios and more. A powerhouse of warmth, energy and nutrition.",
    illustrationType: 'sweet',
    badge: 'Winter Special'
  },
  {
    id: 'rava-mava-dryfruit-modak-1kg',
    name: 'Rava Mava Dryfruit Modak',
    gujaratiName: 'રવા માવા ડ્રાઇફ્રૂટ મોદક',
    price: 300,
    category: 'mithai',
    unit: '1 Kg',
    description: "Khodiyar Dairy's Rava Mava Dryfruit Modak | રવા માવા ડ્રાઇફ્રૂટ મોદક is a premium Gujarati modak — beautifully shaped golden yellow modak made from fine semolina (rava) and rich khoya (mava), generously topped with mixed dry fruits including cashews, almonds, pistachios and raisins. Soft, fragrant and deeply satisfying — a perfect festive offering.",
    illustrationType: 'sweet'
  },
  {
    id: 'kd-special-shrikhand-1kg',
    name: 'K&D Special Shrikhand',
    gujaratiName: 'K&D સ્પેશ્યલ શ્રીખંડ',
    price: 400,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: "Khodiyar Dairy signature shrikhand — thick, creamy premium saffron shrikhand loaded with mixed dry fruits, garnished with saffron strands, pistachio slivers and rose petals.",
    illustrationType: 'shrikhand',
    badge: 'Signature'
  },
  {
    id: 'bonbon-laddu-1kg',
    name: 'Bonbon Laddu',
    gujaratiName: 'બોનબોન લાડુ',
    price: 540,
    category: 'mithai',
    unit: '1 Kg',
    description: "Khodiyar Dairy's Bonbon Laddu | બોનબોન લાડુ is a premium festive laddu — beautiful golden round laddus made from rich khoya and besan, decorated with silver varq and garnished with pistachio slivers. Neatly packed in our signature KD box, making it the perfect festive gift.",
    illustrationType: 'sweet'
  },
  {
    id: 'gulkand-katori-1kg',
    name: 'Gulkand Katori',
    gujaratiName: 'ગુલકંદ કટોરી',
    price: 480,
    category: 'mithai',
    unit: '1 Kg',
    description: "Unique elegant edible katori bowls filled with rich fragrant rose gulkand, topped with rose petals, pistachio slivers and silver varq.",
    illustrationType: 'sweet'
  },
  {
    id: 'sangam-katri-1kg',
    name: 'Sangam Katri',
    gujaratiName: 'સંગમ કતરી',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: "Khodiyar Dairy's Sangam Katri | સંગમ કતરી is a spectacular premium multi-layer barfi — a beautiful union (sangam) of three distinct flavored layers: pure white milk layer, golden saffron (kesar) layer and vibrant green pistachio (pista) layer. Cut into elegant diamond pieces and decorated with silver varq and pistachio slivers. Visually stunning and richly flavored.",
    illustrationType: 'sweet'
  }
];

// Default sort: highest price first
products.sort((a, b) => Number(b.price) - Number(a.price));

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajeshbhai Patel',
    gujaratiName: 'રાજેશભાઈ પટેલ',
    rating: 5,
    text: "Khodiyar Dairy's Thabdi and Ghee are the absolute best in Amreli district. The quality has remained top-tier since my childhood.",
    location: 'Babra',
    date: 'June 2026'
  },
  {
    id: 't2',
    name: 'Hansaben Savaliya',
    gujaratiName: 'હંસાબેન સાવલીયા',
    rating: 5,
    text: "I order Kesar Pista Shrikhand for every family function. It is incredibly thick and creamy. High-quality packaging and service on WhatsApp!",
    location: 'Babra Rural',
    date: 'May 2026'
  },
  {
    id: 't3',
    name: 'Kiritbhai Mehta',
    gujaratiName: 'કિરીટભાઈ મહેતા',
    rating: 5,
    text: "Maintained pure standards since 1996. Truly Babra's pride. Their Kaju Katli and Thabdi Penda are rich, authentic, and delicious.",
    location: 'Amreli',
    date: 'April 2026'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Traditional Sweet Crafting',
    gujaratiTitle: 'દેશી મીઠાઈ બનાવવાની પરંપરાગત કળા',
    category: 'sweets',
    description: 'Slow-cooking our fresh milk solids over direct heat to get the signature granular texture.',
    illustrationType: 'sweet',
    imageUrl: '/images/allmithai.jpeg'
  },
  {
    id: 'g2',
    title: 'Live Straining Process',
    gujaratiTitle: 'શ્રીખંડ માટે મલાઈદાર ચક્કો તૈયાર કરવો',
    category: 'production',
    description: 'Hygienic straining of full-fat yogurt in traditional muslin cloths to prepare fresh base for matho.',
    illustrationType: 'shrikhand',
    imageUrl: '/images/Live-Straining-Process.png'
  },
  {
    id: 'g3',
    title: 'Hygienic Retail Counter',
    gujaratiTitle: 'બાબરા બસ સ્ટેન્ડ સામેનું આઉટલેટ',
    category: 'store',
    description: 'Our sanitized showcase where batches of fresh sweets are packed daily under strict hygiene protocols.',
    illustrationType: 'sweet',
    imageUrl: '/images/Live-Straining-Process'
  }
];

// Helper to generate custom WhatsApp order text
export function getWhatsAppUrl(productName: string, price: number, unit: string): string {
  const baseText = `*Khodiyar Dairy (Babra)*\n\nHello, I would like to order this product:\n\n• *Product:* ${productName}\n• *Packing:* ${unit}\n• *Price:* ₹${price}\n\nPlease confirm this order. Thank you!`;
  const encodedText = encodeURIComponent(baseText);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}

export function getGeneralWhatsAppUrl(): string {
  const baseText = `*Khodiyar Dairy (Babra)*\n\nHello, please provide more information about your products and special order delivery.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(baseText)}`;
}
