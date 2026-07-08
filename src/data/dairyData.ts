import { Category, Product, Testimonial, GalleryItem } from '../types';

export const WHATSAPP_NUMBER = '916354691080';
export const STORE_ADDRESS = 'Babra,Amreli-365421, Gujarat, India';
export const STORE_PHONE = '+91 63546 91080';
export const STORE_EMAIL = 'khodiyardairybabra@gmail.com';
export const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.3804868019743!2d71.3005822!3d21.8436578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39589be7e6b7d7cb%3A0xc0768b5774a974b6!2sBabra%2C%20Gujarat%20365421!5e0!3m2!1sen!2sin!4v1719918201010!5m2!1sen!2sin';

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
    imageUrl: '/images/kaju-katri.png'
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
    price: 280,
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
    price: 360,
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
    price: 400,
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
    price: 360,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Premium liquid sweet - thick, creamy and richly infused with pure saffron and loaded with fresh almond slivers.',
    illustrationType: 'shrikhand'
  },
  {
    id: 'american-dryfruit-liq-matho-1kg',
    name: 'American Dry Fruit Matho',
    gujaratiName: 'અમેરિકન ડ્રાયફ્રૂટ લિક્વિડ મઠો',
    price: 280,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Rich and indulgent liquid sweet - thick, creamy and loaded with premium American dry fruits including almonds, cashews, pistachios and raisins.',
    illustrationType: 'shrikhand'
  },
  {
    id: 'adadiya-1kg',
    name: 'Adadiya',
    gujaratiName: 'અડદિયા',
    price: 440,
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
    gujaratiName: 'બોમ્બે હલ્વો',
    price: 260,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Vibrant and chewy Bombay-style halwa - bright, glossy and translucent pieces made with cornflour, ghee and sugar.',
    illustrationType: 'sweet'
  },
  {
    id: 'panch-ratna-halvo-1kg',
    name: 'Panch Ratna Halvo',
    gujaratiName: 'પંચ રત્ન હલ્વો',
    price: 360,
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
    gujaratiName: 'લાડુ મોતીચૂર',
    price: 260,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Soft, golden round laddus made from tiny fried boondi pearls bound together with fragrant sugar syrup, cardamom and saffron.',
    illustrationType: 'sweet'
  },
  {
    id: 'kalakand-1kg',
    name: 'Kalakand',
    gujaratiName: 'કલાકંદ',
    price: 500,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Premium Indian milk cake - soft, moist and grainy white sweet made by slow-cooking fresh milk and paneer to perfection.',
    illustrationType: 'sweet'
  },
  {
    id: 'jalebi-1kg',
    name: 'Jalebi',
    gujaratiName: 'જલેબી',
    price: 360,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Crispy bright orange spiral sweets soaked in fragrant sugar syrup. Crunchy outside, syrupy inside.',
    illustrationType: 'sweet'
  },
  {
    id: 'modak-flavours-1kg',
    name: 'Modak Flavours',
    gujaratiName: 'મોદક ફ્લેવર્સ',
    price: 260,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Vibrant assortment of flavoured modak in multiple colors and flavors - rose, kesar, pista, chocolate and more.',
    illustrationType: 'sweet'
  },
  {
    id: 'modak-1kg',
    name: 'Modak',
    gujaratiName: 'મોદક',
    price: 260,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Soft steamed dumplings filled with sweet coconut and jaggery. Traditional and authentic.',
    illustrationType: 'sweet'
  },
  {
    id: 'soan-papdi-1kg',
    name: 'Soan Papdi',
    gujaratiName: 'સોન પાપડી',
    price: 300,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Light, airy and flaky golden threads of sweetness made with pure ghee, besan and sugar.',
    illustrationType: 'sweet'
  },
  {
    id: 'pista-barfi-1kg',
    name: 'Pista Barfi',
    gujaratiName: 'પિસ્તા બરફી',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Premium green pistachio barfi made with fresh milk and real pistachios. Rich, nutty and beautifully colored.',
    illustrationType: 'sweet'
  },
  {
    id: 'barfi-chocolate-1kg',
    name: 'Barfi Chocolate',
    gujaratiName: 'બરફી ચોકલેટ',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Rich, dark chocolate barfi made from fresh milk and premium cocoa. Smooth, glossy and deeply indulgent.',
    illustrationType: 'sweet'
  },
  {
    id: 'barfi-white-1kg',
    name: 'Barfi White',
    gujaratiName: 'બરફી વ્હાઇટ',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Classic Gujarati milk barfi made from fresh full-fat milk, slow-cooked to perfection. Smooth and creamy.',
    illustrationType: 'sweet'
  },
  {
    id: 'kala-jambu-1kg',
    name: 'Kala Jambu',
    gujaratiName: 'કાળા જામુ',
    price: 260,
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
    price: 260,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Seasonal favorite - thick, fresh and naturally sweet raw mango pulp made from the finest Kesar mangoes.',
    illustrationType: 'milk'
  },
  {
    id: 'mix-fruit-shrikhand-1kg',
    name: 'Mix Fruit Shrikhand',
    gujaratiName: 'મિક્સ ફ્રૂટ શ્રીખંડ',
    price: 300,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Vibrant twisted strained yogurt loaded with fresh seasonal fruits including strawberries, mango, grapes and kiwi.',
    illustrationType: 'shrikhand'
  },
  {
    id: 'white-elaichi-shrikhand-1kg',
    name: 'White Elaichi Shrikhand',
    gujaratiName: 'વ્હાઇટ એલાઇચી શ્રીખંડ',
    price: 280,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Delicate and aromatic classic - thick, creamy pure white strained yogurt gently flavored with white cardamom.',
    illustrationType: 'shrikhand'
  },
  {
    id: 'kesar-pista-shrikhand-1kg',
    name: 'Kesar Pista Shrikhand',
    gujaratiName: 'કેસર પિસ્તા શ્રીખંડ',
    price: 340,
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
    price: 200,
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
    id: 'shrikhand-1kg',
    name: 'Shrikhand',
    gujaratiName: 'શ્રીખંડ',
    price: 280,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Thick, smooth and luxuriously creamy dessert flavored with pure saffron and cardamom.',
    illustrationType: 'shrikhand'
  },
  {
    id: 'gajar-halvo-1kg',
    name: 'Gajar Halvo',
    gujaratiName: 'ગાજર હલ્વો',
    price: 360,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Freshly grated red carrots slow-cooked in pure desi ghee and full-fat milk until rich and moist.',
    illustrationType: 'sweet'
  },
  {
    id: 'kasata-1kg',
    name: 'Kasata',
    gujaratiName: 'કસાટા',
    price: 300,
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
    price: 150,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Thick, creamy and nourishing milkshake made from fresh full-fat milk blended with premium almonds.',
    illustrationType: 'milk'
  },
  {
    id: 'fruit-salad-1kg',
    name: 'Fruit Salad',
    gujaratiName: 'ફ્રૂટ સલાડ',
    price: 240,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Colorful mix of fresh seasonal fruits soaked in rich creamy sweet milk. Light and fruity.',
    illustrationType: 'milk'
  },
  {
    id: 'sitafal-rabdi-1kg',
    name: 'Sitafal Rabdi',
    gujaratiName: 'સીતાફળ રબડી',
    price: 350,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Custard apple pulp blended with rich creamy rabdi, slow-cooked in full-fat milk.',
    illustrationType: 'milk'
  },
  {
    id: 'angur-rabdi-1kg',
    name: 'Angur Rabdi',
    gujaratiName: 'અંગૂર રબડી',
    price: 350,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Delightful fusion of fresh juicy grapes and rich creamy rabdi infused with saffron.',
    illustrationType: 'milk'
  },
  {
    id: 'basundi-1kg',
    name: 'Basundi',
    gujaratiName: 'બાસુંડી',
    price: 260,
    category: 'liquid',
    unit: '1 Kg',
    description: 'Classic liquid milk dessert made by slowly reducing full-fat milk with sugar and cardamom.',
    illustrationType: 'milk'
  },
  {
    id: 'kesar-pista-1kg',
    name: 'Kesar Pista',
    gujaratiName: 'કેસર પિસ્તા',
    price: 340,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Premium Saffron & Pistachio Barfi made from fresh milk and pure deshi ghee.',
    illustrationType: 'sweet'
  },
  {
    id: 'shrikhand-classic-1kg',
    name: 'Shrikhand Classic',
    gujaratiName: 'શ્રીખંડ ક્લાસિક',
    price: 280,
    category: 'shrikhand_matho',
    unit: '1 Kg',
    description: 'Classic pale yellow strained yogurt blended with pure saffron, sugar and cardamom.',
    illustrationType: 'shrikhand'
  },
  {
    id: 'rasgulla-1kg',
    name: 'Rasgulla',
    gujaratiName: 'રસગુલ્લા',
    price: 200,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Soft, spongy and melt-in-mouth chenna balls cooked in light sugar syrup.',
    illustrationType: 'sweet'
  },
  {
    id: 'dudhi-halvo-1kg',
    name: 'Dudhi Halvo',
    gujaratiName: 'દૂધી હલ્વો',
    price: 360,
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
    gujaratiName: 'ખજૂર પાક',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Wholesome sweet made from whole dates cooked in pure ghee and mixed with dry fruits.',
    illustrationType: 'sweet'
  },
  {
    id: 'topra-pak-1kg',
    name: 'Topra Pak',
    gujaratiName: 'ટોપરા પાક',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Fresh coconut sweet slow-cooked with ghee and sugar to a melt-in-mouth finish.',
    illustrationType: 'sweet'
  },
  {
    id: 'gulab-jambu-1kg',
    name: 'Gulab Jambu',
    gujaratiName: 'ગુલાબ જાંબુ',
    price: 220,
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
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Gujarat\'s beloved gram flour sweet slow-cooked in pure desi ghee, finished with cardamom.',
    illustrationType: 'sweet'
  },
  {
    id: 'kaju-katli-1kg',
    name: 'Kaju Katli',
    gujaratiName: 'કાજુ કતલી',
    price: 900,
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
    gujaratiName: 'થાબડી પૈંડા',
    price: 440,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Crafted from pure khoya slow-cooked to a dense, rich caramelized finish.',
    illustrationType: 'sweet'
  },
  {
    id: 'penda-milk-1kg',
    name: 'Milk Penda',
    gujaratiName: 'દૂધના પૈંડા',
    price: 400,
    category: 'mithai',
    unit: '1 Kg',
    description: 'Soft melt-in-mouth pedha made from the finest slow-cooked milk solids and sugar.',
    illustrationType: 'pedha'
  }
];

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
    imageUrl: '/images/mohanthal.jpg'
  },
  {
    id: 'g2',
    title: 'Live Straining Process',
    gujaratiTitle: 'શ્રીખંડ માટે મલાઈદાર ચક્કો તૈયાર કરવો',
    category: 'production',
    description: 'Hygienic straining of full-fat yogurt in traditional muslin cloths to prepare fresh base for matho.',
    illustrationType: 'shrikhand',
    imageUrl: '/images/k-d-special-matho-top-down.jpg'
  },
  {
    id: 'g3',
    title: 'Hygienic Retail Counter',
    gujaratiTitle: 'બાબરા બસ સ્ટેન્ડ સામેનું આઉટલેટ',
    category: 'store',
    description: 'Our sanitized showcase where batches of fresh sweets are packed daily under strict hygiene protocols.',
    illustrationType: 'sweet',
    imageUrl: '/images/kaju-katri2.jpg'
  }
];

// Helper to generate custom WhatsApp order text
export function getWhatsAppUrl(productName: string, price: number, unit: string): string {
  const baseText = `*Khodiyar Dairy (Babra)*\n\nHello, I would like to order this product:\n\n• *Product:* ${productName}\n• *Packing:* ${unit}\n• *Price:* ₹${price}\n\nPlease confirm this order. Thank you!`;
  const encodedText = encodeURIComponent(baseText);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}

export function getGeneralWhatsAppUrl(): string {
  const baseText = `*Shree Khodiyar Dairy (Babra)*\n\nHello, please provide more information about your products and special order delivery.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(baseText)}`;
}
