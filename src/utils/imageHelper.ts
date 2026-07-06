import { Product } from '../types';

/**
 * Normalizes a product name or ID into a clean slug for image filename matching.
 * Ignores casing, spaces, hyphens, and underscores.
 */

// Explicit mapping of product ID to real webp image files in public/images/
const PRODUCT_IMAGE_MAP: Record<string, string[]> = {
  'anjir-pak-1kg': ['anjir-pak.webp', 'anjir-pak2.webp'],
  'adadiya-1kg': ['adadiya.webp', 'adadiya2.webp'],
  'american-dryfruit-liq-matho-1kg': ['american-dryfruit-liq-matho-2.webp'],
  'american-dryfruit-shrikhand-1kg': ['american-dry-fruit-shrikhand.webp', 'american-dryfruit-srikhnd2.webp'],
  'angur-rabdi-1kg': ['angur-rabdi.webp', 'angur-rabdi2.webp'],
  'anjir-cake-1kg': ['anjir-cake.webp', 'anjir-cake2.webp'],
  'badam-shake-1kg': ['badam-shake.webp', 'badam-sheak2.webp'],
  'barfi-white-1kg': ['white-barfi.webp', 'white-barfi2.webp'],
  'barfi-chocolate-1kg': ['chocolatr-barfi.webp', 'chocolate-barfi2.webp'],
  'basundi-1kg': ['basundi.webp', 'basundi2.webp'],
  'bombe-halvo-1kg': ['bombe-halvo.webp', 'bombe-halvo2.webp'],
  'cham-cham-1kg': ['chamcham.webp', 'chamcham2.webp'],
  'coco-1kg': ['coco.webp', 'coco2.webp'],
  'dudhi-halvo-1kg': ['dudhi-halvo.webp', 'dudhi-halvo2.webp'],
  'modak-flavours-1kg': ['flovura-modak.webp', 'flovura-modak2.webp'],
  'fruit-salad-1kg': ['fruit-salad.webp', 'fruit-dalad2.webp'],
  'gajar-halvo-1kg': ['gajar-halvo.webp', 'gajar-halvo2.webp'],
  'gulab-jambu-1kg': ['gulab-jambu.webp', 'gulab-jambu2.webp'],
  'panch-ratna-halvo-1kg': ['halvo-in-glass-bowl.webp', 'halvo1.webp'],
  'jalebi-1kg': ['jalebi.webp', 'jalebi2.webp'],
  'kaju-katli-1kg': ['kaju-katri.webp', 'kaju-katri2.webp'],
  'kala-jambu-1kg': ['kala-jambu.webp', 'kala-jambu2.webp'],
  'kalakand-1kg': ['kalakand.webp', 'kalakand2.webp'],
  'kd-special-matho-1kg': ['k-d-special-matho-top-down.webp', 'k-d-special-matho-2.webp'],
  'keri-no-ras-1kg': ['kerinoras.webp', 'kerinoras2.webp'],
  'kesar-pista-shrikhand-1kg': ['kesar-pista-shikhand.webp', 'kesar pista shikhand2.webp', 'kesar pista2.webp', 'kesar pista.webp'],
  'kesar-badam-matho-1kg': ['kesar-badam-matho-3-4-overhead_430x.webp', 'kesar-badam-matho2.webp'],
  'khajur-pak-1kg': ['khajur-pak.webp', 'khajur-pak2.webp'],
  'lassi-1kg': ['lassi.webp', 'lassi2.webp'],
  'marcel-cake-1kg': ['marcel-cake.webp', 'marcel-cake2.webp'],
  'maisup-pak-1kg': ['maysore-pak.webp', 'maysure-pak2.webp'],
  'mango-pie-1kg': ['mengo-pai.webp', 'mengo-pai2.webp'],
  'penda-milk-1kg': ['milk-penda.webp', 'milk-penda 2.webp'],
  'mix-fruit-shrikhand-1kg': ['mix-fruit-shrikhand.webp', 'mix-fruit-shrikhand2.webp'],
  'modak-1kg': ['modak.webp', 'modak2.webp'],
  'mohanthal-1kg': ['mohanthal.webp', 'mohanthal2.webp'],
  'laddu-motichur-1kg': ['motichur-laadu.webp', 'motichur-laadu2.webp'],
  'pineapple-shrikhand-1kg': ['pineapple-srikhand.webp', 'pinepaaple-shrikhand2.webp'],
  'pista-barfi-1kg': ['pista-barfi.webp', 'pista-barfi2.webp'],
  'rajbhog-shrikhand-1kg': ['rajbhog-shikhand.webp', 'rajbhog-shikhand2.webp'],
  'rasgulla-1kg': ['rasgulaa.webp', 'rasgulaa2.webp'],
  'sitafal-rabdi-1kg': ['sitafal-rabdi.webp', 'sitafal-rabdi2.webp'],
  'soan-papdi-1kg': ['sonpapdi.webp', 'sonpapdi2.webp'],
  'penda-thabdi-1kg': ['thabdipenda.webp', 'thabdipenda2.webp'],
  'thabdi-1kg': ['thabdipenda.webp', 'thabdipenda2.webp'],
  'topra-pak-1kg': ['topra-pak.webp', 'topra-pak2.webp'],
  'white-elaichi-shrikhand-1kg': ['white-ilachi-shikhand.webp', 'white-ilachi-shikhkand2.webp'],
  'kesar-pista-1kg': ['kesar pista.webp', 'kesar pista2.webp'],
  'shrikhand-1kg': ['kesar-pista-shikhand.webp', 'kesar pista shikhand2.webp'],
  'shrikhand-classic-1kg': ['white-ilachi-shikhand.webp', 'white-ilachi-shikhkand2.webp'],
  'kasata-1kg': ['barfi.webp', 'barfi2.webp', 'barfi3.webp'],
};

/**
 * Normalizes a product name or ID into a clean slug for image filename matching.
 * Ignores casing, spaces, hyphens, and underscores.
 */
export function getProductSlugs(product: Product): string[] {
  const nameSlug = product.name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ''); // e.g. "soanpapdi"

  const idSlug = product.id
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ''); // e.g. "soanpapdi1kg" or "coco1kg"

  const slugs = [nameSlug];

  // If name contains 'soan', add 'son' alternative
  if (nameSlug.includes('soan')) {
    slugs.push(nameSlug.replace('soan', 'son'));
  }
  // If name contains 'son', add 'soan' alternative
  if (nameSlug.includes('son')) {
    slugs.push(nameSlug.replace('son', 'soan'));
  }

  // Also try idSlug
  if (idSlug !== nameSlug) {
    slugs.push(idSlug);
  }

  // Try id without "-1kg" or similar unit suffix if it's there
  const baseId = product.id.replace(/-1kg$|-500g$|-250g$|-1kg-box$|-box$/i, '');
  const baseIdSlug = baseId.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (baseIdSlug && !slugs.includes(baseIdSlug)) {
    slugs.push(baseIdSlug);
  }

  return Array.from(new Set(slugs));
}

/**
 * Returns an ordered list of candidate image URLs for a product.
 * Supports index suffixes (e.g. '', '2', '3') for the multiple image rule.
 */
export function getCandidateImageUrls(product: Product, imgNumber: number = 1): string[] {
  const mappedList = PRODUCT_IMAGE_MAP[product.id];
  if (mappedList) {
    if (imgNumber === 1) {
      return [`/images/${mappedList[0]}`];
    } else if (imgNumber === 2) {
      // Find secondary image or fall back
      const secondFile = mappedList[1] || mappedList[0];
      return [`/images/${secondFile}`];
    } else if (imgNumber === 3) {
      // Find tertiary image or fall back
      const thirdFile = mappedList[2] || mappedList[1] || mappedList[0];
      return [`/images/${thirdFile}`];
    }
  }

  const slugs = getProductSlugs(product);
  const suffix = imgNumber === 1 ? '' : String(imgNumber);
  const extensions = ['.webp', '.jpeg', '.jpg', '.png'];
  const folders = ['/images/', '/assets/', '/'];

  const urls: string[] = [];

  for (const slug of slugs) {
    const filename = `${slug}${suffix}`;
    for (const folder of folders) {
      for (const ext of extensions) {
        urls.push(`${folder}${filename}${ext}`);
      }
    }
  }

  return urls;
}
