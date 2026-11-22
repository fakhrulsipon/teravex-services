/**
 * Gallery photos — each `name` maps to /public/photos/<name>-{640,1200,2000}.webp.
 * `category` is a service slug (see src/data/services.ts).
 */
export type GalleryPhoto = {
  name: string;
  alt: string;
  category: string;
  focus?: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  // Hotel & Hospitality
  { name: "hospitality", alt: "Doorman in a red uniform at a luxury hotel entrance", category: "hospitality" },
  { name: "hotel-reception", alt: "Concierge at a hotel reception desk", category: "hospitality" },
  { name: "hotel-waiter", alt: "Waiter serving drinks in an elegant hotel restaurant", category: "hospitality" },
  { name: "housekeeping", alt: "Housekeeper arranging pillows in a luxury hotel room", category: "hospitality" },

  // Restaurant & Culinary
  { name: "restaurant", alt: "Chef plating gourmet dishes in a restaurant kitchen", category: "restaurant", focus: "55% 75%" },
  { name: "chefs", alt: "Two chefs cooking in a modern open kitchen", category: "restaurant" },
  { name: "restaurant-service", alt: "Waiter carrying plates to diners in a busy restaurant", category: "restaurant" },
  { name: "fine-dining", alt: "Waiter serving guests in a luxurious restaurant under a grand chandelier", category: "restaurant" },
  { name: "kitchen-team", alt: "Kitchen team working in a professional restaurant kitchen", category: "restaurant" },

  // Construction & Technical
  { name: "construction", alt: "Construction workers in hard hats on a building site", category: "construction" },
  { name: "welder", alt: "Welder in protective gear with bright sparks", category: "construction" },
  { name: "steel-beam", alt: "Construction worker welding a steel beam", category: "construction" },
  { name: "scaffolding", alt: "Construction workers on scaffolding against a blue sky", category: "construction" },
  { name: "workers", alt: "Construction worker carrying cable on a building site", category: "construction" },
  { name: "site", alt: "Large construction site with cranes and steel frameworks", category: "construction" },
  { name: "engineers-tablet", alt: "Site engineers in hard hats coordinating with a tablet and radio", category: "construction" },

  // Oil & Gas
  { name: "oil-gas", alt: "Engineers inspecting pipelines at an oil and gas facility", category: "oil-gas", focus: "78% 78%" },
  { name: "refinery-night", alt: "Gas processing plant illuminated at dusk", category: "oil-gas" },
  { name: "refinery-dusk", alt: "Refinery towers against a cloudy dusk sky", category: "oil-gas" },
  { name: "refinery", alt: "Oil refinery towers and pipelines", category: "oil-gas" },

  // Security
  { name: "security", alt: "Uniformed security officer on duty", category: "security", focus: "40% 50%" },
  { name: "control-room", alt: "Security team monitoring live CCTV in a control room", category: "security" },
  { name: "cctv", alt: "Security camera against a clear blue sky", category: "security" },

  // Cleaning
  { name: "cleaning", alt: "Rope-access cleaners washing the glass facade of a building", category: "cleaning" },
  { name: "cleaner", alt: "Professional cleaner in red overalls with a mop", category: "cleaning" },
  { name: "cleaning-cart", alt: "Professional cleaning cart with tools and supplies", category: "cleaning" },

  // Landscaping
  { name: "landscaping", alt: "Gardener trimming plants with a string trimmer", category: "landscaping", focus: "70% 50%" },
  { name: "gardener", alt: "Gardener in uniform trimming a hedge with shears", category: "landscaping" },
  { name: "hedge-trimming", alt: "Gardener shaping a hedge with an electric trimmer", category: "landscaping" },

  // Overseas Recruitment
  { name: "overseas-recruitment", alt: "Traveller with luggage walking through an airport corridor", category: "overseas-recruitment" },
  { name: "airport", alt: "Travellers with luggage in a sunlit airport terminal", category: "overseas-recruitment" },
  { name: "multinational", alt: "Smiling engineers from different backgrounds in hard hats", category: "overseas-recruitment" },

  // Website Development
  { name: "web-development", alt: "Web designer's dual-monitor workstation showing website layouts", category: "web-development", focus: "70% 50%" },
  { name: "web-coding", alt: "Developer writing website code on a laptop", category: "web-development" },

  // Mobile App Development
  { name: "mobile-app", alt: "Smartphone running a colourful business app beside a laptop", category: "mobile-app" },
  { name: "app-design", alt: "Designer testing a mobile app prototype over hand-drawn wireframes", category: "mobile-app" },
];
