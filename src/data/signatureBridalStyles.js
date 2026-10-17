import styleCustomiseDesign from '../assets/images/style_customise_design_1791806822254.jpg';
import styleArabicDesign from '../assets/images/style_arabic_design_1791806840539.jpg';
import stylePortraitMehndi from '../assets/images/style_portrait_mehndi_1791806852945.jpg';
import styleStorytellingMehndi from '../assets/images/style_storytelling_mehndi_1791806865116.jpg';
import styleTraditionalMehndi from '../assets/images/style_traditional_mehndi_1791806882051.jpg';

const whatsappBase = 'https://wa.me/919351260318?text=';

export const signatureStylesData = [
  {
    id: 'style-customise-design',
    number: '01 / 05',
    title: 'Customise design',
    description: 'Every design is custom-crafted to match your vision and style.',
    image: styleCustomiseDesign,
    alt: 'Intricate custom bridal mehndi covering both hands against vivid fuchsia pink raw silk bridal attire',
    category: 'Custom Bridal',
    objectPosition: 'center 30%',
    detailsUrl: '/styles/customise-design',
    whatsappMessage: 'Hello Vikash Mehndi Art, I am interested in your Customise design. Could you please share more details?',
    whatsappUrl: `${whatsappBase}${encodeURIComponent('Hello Vikash Mehndi Art, I am interested in your Customise design. Could you please share more details?')}`,
  },
  {
    id: 'style-arabic-design',
    number: '02 / 05',
    title: 'Arabic design',
    description: 'Bold negative space meets delicate floral language.',
    image: styleArabicDesign,
    alt: 'Both palms displaying elegant Arabic mehndi floral vines with bold negative space against teal fabric',
    category: 'Arabic Style',
    objectPosition: 'center center',
    detailsUrl: '/styles/arabic-design',
    whatsappMessage: 'Hello Vikash Mehndi Art, I am interested in your Arabic design. Could you please share more details?',
    whatsappUrl: `${whatsappBase}${encodeURIComponent('Hello Vikash Mehndi Art, I am interested in your Arabic design. Could you please share more details?')}`,
  },
  {
    id: 'style-portrait-mehndi',
    number: '03 / 05',
    title: 'Portrait Mehndi',
    description: 'Faces, vows, and memories rendered in henna.',
    image: stylePortraitMehndi,
    alt: 'Fine bridal mehndi featuring traditional Radha-Krishna hand-drawn portrait motif on the palm',
    category: 'Portrait Style',
    objectPosition: 'center 35%',
    detailsUrl: '/styles/portrait-mehndi',
    whatsappMessage: 'Hello Vikash Mehndi Art, I am interested in your Portrait Mehndi. Could you please share more details?',
    whatsappUrl: `${whatsappBase}${encodeURIComponent('Hello Vikash Mehndi Art, I am interested in your Portrait Mehndi. Could you please share more details?')}`,
  },
  {
    id: 'style-storytelling-mehndi',
    number: '04 / 05',
    title: 'Storytelling Mehndi',
    description: 'Your love story, drawn from the details that matter most.',
    image: styleStorytellingMehndi,
    alt: 'Narrative Indian bridal henna with traditional baraat procession, doli, and ceremonial wedding motifs',
    category: 'Storytelling Style',
    objectPosition: 'center 40%',
    detailsUrl: '/styles/storytelling-mehndi',
    whatsappMessage: 'Hello Vikash Mehndi Art, I am interested in your Storytelling Mehndi. Could you please share more details?',
    whatsappUrl: `${whatsappBase}${encodeURIComponent('Hello Vikash Mehndi Art, I am interested in your Storytelling Mehndi. Could you please share more details?')}`,
  },
  {
    id: 'style-traditional-mehndi',
    number: '05 / 05',
    title: 'Traditional Mehndi',
    description: 'Timeless patterns inspired by the richness of Indian bridal artistry.',
    image: styleTraditionalMehndi,
    alt: 'Dense traditional Marwadi bridal mehndi with symmetrical mandalas, peacock feathers, and fine lace jali',
    category: 'Traditional Style',
    objectPosition: 'center 35%',
    detailsUrl: '/styles/traditional-mehndi',
    whatsappMessage: 'Hello Vikash Mehndi Art, I am interested in your Traditional Mehndi. Could you please share more details?',
    whatsappUrl: `${whatsappBase}${encodeURIComponent('Hello Vikash Mehndi Art, I am interested in your Traditional Mehndi. Could you please share more details?')}`,
  },
];

export default signatureStylesData;
