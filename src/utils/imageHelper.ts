import { Product } from '../types';

/**
 * Normalizes a product name or ID into a clean slug for image filename matching.
 * Ignores casing, spaces, hyphens, and underscores.
 */

// Explicit mapping of product ID to real jpeg image files in public/images/
const PRODUCT_IMAGE_MAP: Record<string, string[]> = {
  'kaju-maisup-pak-1kg': ['kaju-maisup.jpeg', 'kaju-maisup2.jpeg'],
  'kalakand-Barfi-1kg': ['kalkandbarfi.jpeg', 'kalkandbarfi.jpeg'],
  'gundar-pak-1kg': ['gundarpak.jpeg', 'gundarpak2.jpeg'],
  'rava-mava-dryfruit-modak-1kg': ['ravamavadryfruitsmodak2.jpeg', 'ravamavadryfruitsmodak.jpeg'],
  'kd-special-shrikhand-1kg': ['shikhandbox.jpeg', 'shikhandbox2.jpeg'],
  'bonbon-laddu-1kg': ['bonbonladdu.jpeg', 'bonbonladdu1.jpeg'],
  'gulkand-katori-1kg': ['gulkandkatori.jpeg', 'gulkandkatori1.jpeg'],
  'sangam-katri-1kg': ['sangamkatri.jpeg', 'sangamkatri2.jpeg'],
  'anjir-pak-1kg': ['anjir-pak.jpeg', 'anjir-pak2.jpeg'],
  'adadiya-1kg': ['adadiya.jpeg', 'adadiya2.jpeg'],
  'american-dryfruit-liq-matho-1kg': ['american-dryfruit-liq-matho-2.jpeg'],
  'american-dryfruit-shrikhand-1kg': ['american-dry-fruit-shrikhand.jpeg', 'american-dryfruit-srikhnd2.jpeg'],
  'angur-rabdi-1kg': ['angur-rabdi.jpeg', 'angur-rabdi2.jpeg'],
  'anjir-cake-1kg': ['anjir-cake.jpeg', 'anjir-cake2.jpeg'],
  'badam-shake-1kg': ['badam-shake.jpeg', 'badam-sheak2.jpeg'],
  'barfi-white-1kg': ['whitebarfi.jpeg', 'whitebarfi2.jpeg'],
  'barfi-chocolate-1kg': ['chocolatr-barfi.jpeg', 'chocolate-barfi2.jpeg'],
  'basundi-1kg': ['basundi.jpeg', 'basundi2.jpeg'],
  'bombe-halvo-1kg': ['bombe-halvo.jpeg', 'bombe-halvo2.jpeg'],
  'cham-cham-1kg': ['chamcham.jpeg', 'chamcham2.jpeg'],
  'coco-1kg': ['coco.jpeg', 'coco2.jpeg'],
  'dudhi-halvo-1kg': ['dudhi-halvo.jpeg', 'dudhi-halvo2.jpeg'],
  'modak-flavours-1kg': ['flovura-modak.jpeg', 'flovura-modak2.jpeg'],
  'fruit-salad-1kg': ['fruit-salad.jpeg', 'fruit-dalad2.jpeg'],
  'gajar-halvo-1kg': ['gajar-halvo.jpeg', 'gajar-halvo2.jpeg'],
  'gulab-jambu-1kg': ['gulab-jambu.jpeg', 'gulab-jambu2.jpeg'],
  'panch-ratna-halvo-1kg': ['halvo-in-glass-bowl.jpeg', 'halvo1.jpeg'],
  'jalebi-1kg': ['jalebi.jpeg', 'jalebi2.jpeg'],
  'kaju-katli-1kg': ['kaju-katri.jpeg', 'kaju-katli2.jpeg'],
  'kala-jambu-1kg': ['kala-jambu.jpeg', 'kala-jambu2.jpeg'],
  'kalakand-1kg': ['kalakand.jpeg', 'kalakand2.jpeg'],
  'kd-special-matho-1kg': ['k-d-special-matho-top-down_1.jpeg', 'k-d-special-matho-2.jpeg'],
  'keri-no-ras-1kg': ['kerinoras.jpeg', 'kerinoras2.jpeg'],
  'kesar-pista-shrikhand-1kg': ['kesar-pista-shikhand.jpeg', 'kesar pista shikhand2.jpeg', 'kesar pista2.jpeg', 'kesar pista.jpeg'],
  'kesar-badam-matho-1kg': ['kesar-badam-matho-3-4-overhead_430x.jpeg', 'kesar-badam-matho2.jpeg'],
  'khajur-pak-1kg': ['khajur-pak.jpeg', 'khajur-pak2.jpeg'],
  'lassi-1kg': ['lassi.jpeg', 'lassi2.jpeg'],
  'marcel-cake-1kg': ['marcel-cake.jpeg', 'marcel-cake2.jpeg'],
  'maisup-pak-1kg': ['maysore-pak.jpeg', 'maysure-pak2.jpeg'],
  'mango-pie-1kg': ['mengo-pai.jpeg', 'mengo-pai2.jpeg'],
  'penda-milk-1kg': ['milk-penda.jpeg', 'milk-penda 2.jpeg'],
  'mix-fruit-shrikhand-1kg': ['mix-fruit-shrikhand.jpeg', 'mix-fruit-shrikhand2.jpeg'],
  'modak-1kg': ['modak.jpeg', 'modak2.jpeg'],
  'mohanthal-1kg': ['mohanthal.jpeg', 'mohanthal2.jpeg'],
  'laddu-motichur-1kg': ['motichur-laadu.jpeg', 'motichur-laadu2.jpeg'],
  'pineapple-shrikhand-1kg': ['pineapple-srikhand.jpeg', 'pinepaaple-shrikhand2.jpeg'],
  'pista-barfi-1kg': ['pista-barfi.jpeg', 'pista-barfi2.jpeg'],
  'rajbhog-shrikhand-1kg': ['rajbhog-shikhand.jpeg', 'rajbhog-shikhand2.jpeg'],
  'rasgulla-1kg': ['rasgulaa.jpeg', 'rasgulaa2.jpeg'],
  'sitafal-rabdi-1kg': ['sitafal-rabdi.jpeg', 'sitafal-rabdi2.jpeg'],
  'soan-papdi-1kg': ['sonpapdi.jpeg', 'sonpapdi2.jpeg'],
  'penda-thabdi-1kg': ['thabdipenda.jpeg', 'thabdipenda2.jpeg'],
  'thabdi-1kg': ['thabdicox.jpeg', 'thabdi1.jpeg'],
  'topra-pak-1kg': ['topra-pak.jpeg', 'topra-pak2.jpeg'],
  'white-elaichi-shrikhand-1kg': ['white-ilachi-shikhand.jpeg', 'white-ilachi-shikhkand2.jpeg'],
  'kesar-pista-1kg': ['kesar pista.jpeg', 'kesar pista2.jpeg'],
  'shrikhand-1kg': ['kesar-pista-shikhand.jpeg', 'kesar pista shikhand2.jpeg'],
  'shrikhand-classic-1kg': ['white-ilachi-shikhand.jpeg', 'white-ilachi-shikhkand2.jpeg'],
  'kasata-1kg': ['barfi.jpeg', 'barfi2.jpeg', 'barfi3.jpeg'],
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
  const extensions = ['.jpeg'];
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
