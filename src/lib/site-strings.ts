/** UI copy for the public site (English + Nepali). Keys stay in sync across locales. */
export const SITE_STRINGS_EN = {
  nav_brand_subtitle: "Where History Lives",
  nav_link_about: "About",
  nav_link_places: "Places",
  nav_link_culture: "Culture",
  nav_link_food: "Food",
  nav_link_gallery: "Gallery",
  nav_link_map: "Map",
  nav_link_visit: "Visit",
  nav_lang_toggle: "Toggle language",

  hero_title_suffix: "",
  hero_badge: "Newari Heritage · Kavrepalanchok, Nepal",
  hero_tagline: "Where History Still Lives",
  hero_body:
    "A thousand-year-old Newari town of pagodas, sacred rivers, and living tradition — preserved at the foot of the Himalayas.",
  hero_cta: "Begin the Journey",
  hero_scroll: "Scroll",
  hero_img_alt: "Aerial cinematic view of Panauti's pagoda temples at golden hour",

  about_eyebrow: "The Story",
  about_title: "An ancient town still breathing",
  about_description:
    "Founded in the 13th century at the confluence of the Roshi and Punyamati rivers, Panauti is one of Nepal's oldest Newari settlements — a living museum of pagoda architecture, woodcraft and devotion.",
  about_p1:
    "Walk Panauti's brick-paved lanes and you walk through centuries. Carved tikijhya windows watch over courtyards where priests still chant Sanskrit hymns at dawn, and bronze bells answer them from temple eaves above.",
  about_p2:
    "The Newar people built this town as an offering — a city shaped like a serpent, anchored by Indreshwar Mahadev, one of the oldest surviving pagodas in the Himalayas. Its festivals, feasts and rituals have flowed unbroken for thirty generations.",
  about_stat_years: "Years of History",
  about_stat_temples: "Heritage Temples",
  about_stat_festivals: "Annual Festivals",
  about_stat_rivers: "Sacred Rivers",
  about_est: "est. 1294",
  about_est_caption: "Indreshwar consecrated",
  about_img_alt: "Carved Newari heritage house in Panauti",

  places_eyebrow: "Historical Places",
  places_title: "Sanctuaries of stone & spirit",
  places_description:
    "Sites that hold the soul of Panauti — from temples touched by gods to riverbanks washed by centuries of devotion.",
  places_discover: "Discover",

  culture_eyebrow: "Culture & Festivals",
  culture_title: "Rituals that never sleep",
  culture_description:
    "The Newari calendar turns with festivals — each one a thread in the unbroken cloth of Panauti's living heritage.",

  food_eyebrow: "Food of Panauti",
  food_title: "Recipes from a thousand kitchens",
  food_description: "Newari cuisine is ritual food — every dish prepared for a feast, a festival, or a god.",

  gallery_eyebrow: "Gallery",
  gallery_title: "Through the lens of Panauti",
  gallery_description: "Drone, street, and detail photography from every season.",
  gallery_close: "Close",
  gallery_img_alt: "Panauti gallery image",

  map_eyebrow: "Find Panauti",
  map_title: "32 km from Kathmandu",
  map_description:
    "Tucked into the southeastern hills of the Kathmandu Valley, easily reached by road in under 90 minutes.",
  map_marker_indreshwar: "Indreshwar Temple",
  map_marker_triveni: "Triveni Ghat",
  map_marker_oldtown: "Old Town",
  map_marker_brahmayani: "Brahmayani Temple",
  map_footer_location: "Panauti, Kavrepalanchok District, Bagmati Province",
  map_open: "Open in Maps",
  map_iframe_title: "Panauti map",

  visit_eyebrow: "Plan Your Visit",
  visit_title: "Everything you need to arrive",
  visit_description: "Practical guidance from locals who've welcomed pilgrims and travelers for generations.",
  visit_card1_title: "Best Time to Visit",
  visit_card1_body:
    "October–March offers crisp Himalayan air and clear skies. Visit during Makar Mela (Jan) or Yomari Punhi (Dec) for unforgettable festivals.",
  visit_card2_title: "Stay in a Newari Home",
  visit_card2_body:
    "Dozens of family-run homestays sit inside restored heritage houses — sleep behind carved wooden windows from $25/night.",
  visit_card3_title: "Getting There",
  visit_card3_body:
    "Local buses leave hourly from Kathmandu's Ratna Park (≈90 min). Private taxi takes 60 min via the BP Highway.",

  testimonials_eyebrow: "Voices of Travelers",
  testimonials_title: "Stories that stay",
  testimonials_submit_label: "Submit a review",
  testimonials_form_title: "Share your Panauti experience",
  testimonials_form_help: "Reviews are saved in the admin dashboard and only published after approval.",
  testimonials_ph_name: "Your name",
  testimonials_ph_location: "City, Country (optional)",
  testimonials_ph_review: "Write your review",
  testimonials_star_1: "1 star",
  testimonials_star_2: "2 stars",
  testimonials_star_3: "3 stars",
  testimonials_star_4: "4 stars",
  testimonials_star_5: "5 stars",
  testimonials_btn_send: "Send for approval",
  testimonials_btn_sending: "Sending...",
  testimonials_traveler: "Traveler",
  testimonials_error_load: "Couldn't load reviews",
  testimonials_retry: "Try again",
  testimonials_toast_ok: "Review submitted. It will appear after admin approval.",
  testimonials_toast_err: "Could not submit review. Please try again.",

  footer_brand_subtitle: "Where History Still Lives",
  footer_body:
    "An independent love letter to one of Nepal's oldest Newari towns. Built to celebrate, preserve, and share the heritage of Panauti with the world.",
  footer_discover: "Discover",
  footer_link_about: "About Panauti",
  footer_link_places: "Places",
  footer_link_festivals: "Festivals",
  footer_link_food: "Food",
  footer_link_gallery: "Gallery",
  footer_contact: "Contact",
  footer_rights: "Explore Panauti — All rights reserved.",
  footer_privacy: "Privacy",
  footer_terms: "Terms",
  footer_credits: "Credits",
} as const;

export type SiteStringKey = keyof typeof SITE_STRINGS_EN;

export const SITE_STRINGS_NE: Record<SiteStringKey, string> = {
  nav_brand_subtitle: "जहाँ इतिहास जीवित छ",
  nav_link_about: "परिचय",
  nav_link_places: "स्थानहरू",
  nav_link_culture: "संस्कृति",
  nav_link_food: "खाना",
  nav_link_gallery: "ग्यालेरी",
  nav_link_map: "नक्सा",
  nav_link_visit: "भ्रमण",
  nav_lang_toggle: "भाषा बदल्नुहोस्",

  hero_title_suffix: "अन्वेषण गर्नुहोस्",
  hero_badge: "न्यवार संस्कृति · काभ्रेपलाञ्चोक, नेपाल",
  hero_tagline: "जहाँ इतिहास अझै श्वास फेर्छ",
  hero_body:
    "हिमालको काखमा संरक्षित — हजार वर्ष पुरानो न्यवार बस्ती, पगोडा मन्दिरहरू, पवित्र नदीहरू र जीवित परम्परा।",
  hero_cta: "यात्रा सुरु गर्नुहोस्",
  hero_scroll: "स्क्रोल",
  hero_img_alt: "सुनौलो घाममा पनौतीका पगोडा मन्दिरहरूको दृश्य",

  about_eyebrow: "कथा",
  about_title: "प्राचीन नगर जहाँ अझै जीवन छ",
  about_description:
    "१३ औं शताब्दीमा रोशी र पुन्यमतीको संगममा स्थापित, पनौती नेपालका सबैभन्दा पुराना न्यवार बस्तीहरू मध्ये एक हो — पगोडा वास्तुकला, काठको कला र भक्तिको जीवित संग्रहालय।",
  about_p1:
    "पनौतीका ईंटा छापिएका गल्लीहरूमा हिँड्नु भनेकै शताब्दीहरूमा हिँड्नु हो। बिहान सँस्कृत मन्त्र जप्ने पूजाहरूमाथि काठका टिकिझ्या झ्यालहरूले निगरानी गर्छन्, र मन्दिरका छानाबाट काँस्यका घण्टीहरूले जवाफ दिन्छन्।",
  about_p2:
    "न्यवार समुदायले यो सहरलाई चढाउनको रूपमा बनाएका हुन् — नाग जस्तो आकारको सहर, हिमालकै सबैभन्दा पुराना पगोडाहरू मध्ये एक इन्द्रेश्वर महादेवले जकडेको। यहाँका जात्रा, भोज र संस्कारहरू पुस्तौँदेखि अविच्छिन्न छन्।",
  about_stat_years: "वर्षको इतिहास",
  about_stat_temples: "सम्पदा मन्दिरहरू",
  about_stat_festivals: "वार्षिक जात्राहरू",
  about_stat_rivers: "पवित्र नदीहरू",
  about_est: "इ. १२९४ देखि",
  about_est_caption: "इन्द्रेश्वर प्रतिष्ठा",
  about_img_alt: "पनौतीमा कुँदिएको न्यवार सम्पदा घर",

  places_eyebrow: "ऐतिहासिक स्थानहरू",
  places_title: "ढुङ्गा र आस्थाका पवित्र स्थलहरू",
  places_description:
    "पनौतीको आत्मा बोकेका स्थलहरू — देवताको स्पर्श भएका मन्दिरदेखि शताब्दीयौँको भक्तिले धोएका घाटसम्म।",
  places_discover: "अन्वेषण",

  culture_eyebrow: "संस्कृति र जात्राहरू",
  culture_title: "कहिल्यै नसुत्ने संस्कारहरू",
  culture_description:
    "न्यवार पात्रो जात्रासँग घुम्छ — प्रत्येक पनौतीको जीवित सम्पदाको अखण्ड वस्त्रमा एउटा धागो हो।",

  food_eyebrow: "पनौतीको खाना",
  food_title: "हजार भान्साबाट आएका परिकारहरू",
  food_description:
    "न्यवार खाना संस्कृतिको खाना हो — प्रत्येक परिकार भोज, जात्रा वा देवताका लागि तयार गरिन्छ।",

  gallery_eyebrow: "ग्यालेरी",
  gallery_title: "पनौतीको लेन्सबाट",
  gallery_description: "ड्रोन, सडक र विस्तृत फोटोग्राफी — हरेक मौसमबाट।",
  gallery_close: "बन्द गर्नुहोस्",
  gallery_img_alt: "पनौती ग्यालेरी तस्बिर",

  map_eyebrow: "पनौती फेला पार्नुहोस्",
  map_title: "काठमाडौँबाट ३२ किमि",
  map_description:
    "काठमाडौँ उपत्यकाको दक्षिणपूर्वी पहाडमा लुकेको — सडक मार्गमा करिब ९० मिनेटभित्र पुग्न सकिन्छ।",
  map_marker_indreshwar: "इन्द्रेश्वर मन्दिर",
  map_marker_triveni: "त्रिवेणी घाट",
  map_marker_oldtown: "पुरानो बस्ती",
  map_marker_brahmayani: "ब्रह्मायणी मन्दिर",
  map_footer_location: "पनौती, काभ्रेपलाञ्चोक, बागमती प्रदेश",
  map_open: "नक्सामा खोल्नुहोस्",
  map_iframe_title: "पनौती नक्सा",

  visit_eyebrow: "भ्रमण योजना",
  visit_title: "आउनका लागि चाहिने सबै कुरा",
  visit_description:
    "शताब्दीयौँदेखि तीर्थालु र यात्रीहरूलाई स्वागत गर्ने स्थानीयहरूबाट व्यावहारिक जानकारी।",
  visit_card1_title: "भ्रमणको उत्तम समय",
  visit_card1_body:
    "अक्टोबर–मार्चमा हिमाली हावा र सफा आकाश। मकर मेला (जनवरी) वा योमरी पुन्ही (डिसेम्बर)मा अविस्मरणीय जात्रा।",
  visit_card2_title: "न्यवार घरमा बास",
  visit_card2_body:
    "पुनर्स्थापित सम्पदा घरभित्र परिवार संचालित होमस्टेहरू — कुँदिएका काठका झ्याल पछाडि रात बिताउनुहोस् (लगभग $२५/रातदेखि)।",
  visit_card3_title: "कसरी पुग्ने",
  visit_card3_body:
    "काठमाडौँको रत्न पार्कबाट प्रत्येक घण्टा स्थानीय बस (≈९० मिन)। निजी ट्याक्सी बीपी राजमार्ग हुँदै करिब ६० मिन।",

  testimonials_eyebrow: "यात्रीका आवाजहरू",
  testimonials_title: "बस्ने कथाहरू",
  testimonials_submit_label: "प्रतिक्रिया पठाउनुहोस्",
  testimonials_form_title: "आफ्नो पनौती अनुभव साझा गर्नुहोस्",
  testimonials_form_help:
    "प्रतिक्रिया व्यवस्थापक प्यानलमा बचत हुन्छ र अनुमोदन पछि मात्र प्रकाशित हुन्छ।",
  testimonials_ph_name: "तपाईंको नाम",
  testimonials_ph_location: "सहर, देश (वैकल्पिक)",
  testimonials_ph_review: "आफ्नो प्रतिक्रिया लेख्नुहोस्",
  testimonials_star_1: "१ तारा",
  testimonials_star_2: "२ तारा",
  testimonials_star_3: "३ तारा",
  testimonials_star_4: "४ तारा",
  testimonials_star_5: "५ तारा",
  testimonials_btn_send: "अनुमोदनका लागि पठाउनुहोस्",
  testimonials_btn_sending: "पठाइँदै...",
  testimonials_traveler: "यात्री",
  testimonials_error_load: "प्रतिक्रिया लोड गर्न सकिएन",
  testimonials_retry: "फेरि प्रयास गर्नुहोस्",
  testimonials_toast_ok: "प्रतिक्रिया पठाइयो। व्यवस्थापक अनुमोदनपछि देखिनेछ।",
  testimonials_toast_err: "प्रतिक्रिया पठाउन सकिएन। फेरि प्रयास गर्नुहोस्।",

  footer_brand_subtitle: "जहाँ इतिहास अझै श्वास फेर्छ",
  footer_body:
    "नेपालका पुराना न्यवार बस्तीहरू मध्ये एकप्रति स्वतन्त्र प्रेमपत्र। पनौतीको सम्पदा संरक्षण र संसारसँग साझेदारी गर्न बनाइएको।",
  footer_discover: "अन्वेषण",
  footer_link_about: "पनौतीबारे",
  footer_link_places: "स्थानहरू",
  footer_link_festivals: "जात्राहरू",
  footer_link_food: "खाना",
  footer_link_gallery: "ग्यालेरी",
  footer_contact: "सम्पर्क",
  footer_rights: "एक्सप्लोर पनौती — सर्वाधिकार सुरक्षित।",
  footer_privacy: "गोपनीयता",
  footer_terms: "सर्तहरू",
  footer_credits: "क्रेडिट",
};

export const SITE_STRINGS = {
  en: SITE_STRINGS_EN,
  ne: SITE_STRINGS_NE,
} as const;

export type SiteLocale = keyof typeof SITE_STRINGS;
