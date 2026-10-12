// ============================================================
// SINGLE CONTENT FILE — edit everything about the site here.
// To add a video: paste a YouTube URL into `youtubeUrl`.
// ============================================================
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import stillAnim from "@/assets/still-animation.jpg";
import stillDoc from "@/assets/still-doc.jpg";
import coverNovum from "@/assets/cover-novum.png.asset.json";
import coverBalta from "@/assets/cover-balta.png.asset.json";
import coverYerli from "@/assets/cover-yerli.png.asset.json";

const yt = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export const images = { hero, portrait, stillAnim, stillDoc };

export const site = {
  name: "Seymur Abdullayev",
  title: "Motion Designer / 2D & 3D Animator / Director",
  tagline: "Stories in motion.",
  email: "seymur.abdullayev.1991@gmail.com",
  phone: "+994 70 691 33 13",
  location: "Baku, Azerbaijan",
  cvUrl: "", // TODO: paste link to CV PDF (e.g. /cv.pdf placed in /public)
  showreelUrl: "", // TODO: optional looping showreel .mp4
  socials: [
    { label: "Behance", href: "https://www.behance.net/seymurabdullah" },
    { label: "IMDb", href: "https://imdb.me/seymurabdullayev" },
    { label: "YouTube", href: "https://www.youtube.com/" }, // TODO: your channel
  ],
};

export type Category = "animation" | "documentary" | "international";

export const categories: { id: Category; label: string }[] = [
  { id: "animation", label: "Animation" },
  { id: "documentary", label: "Documentary & Film" },
  { id: "international", label: "International Documentary" },
];

export type Project = {
  slug: string;
  title: string;
  original?: string;
  year: string;
  category: Category;
  role: string;
  description: string;
  quote?: string;
  youtubeUrl: string; // YouTube or Vimeo link
  link?: string; // external project page (Behance, website)
  thumbnail: string;
  stills: string[];
  awards: string[];
  credits?: { label: string; value: string }[];
};

const A = stillAnim, D = stillDoc, H = hero;

export const projects: Project[] = [
  // --- ANIMATION ---
  { slug: "birden-olsek", title: "Birdən Ölsək", year: "2023", category: "animation", role: "Animator",
    description: "An animated music video about the fragility of the moments we leave unsaid.",
    quote: "What if tomorrow never comes?",
    youtubeUrl: "", // TODO
    thumbnail: A, stills: [A, H, D], awards: ["Winner, 1st Place — ANIMA Festival 2023"] },
  { slug: "balta", title: "Balta", year: "2018–2021", category: "animation", role: "2D Animator / Character Artist",
    description: "An animated project that grew into one of Azerbaijan's most recognised online series.",
    quote: "Small blade, sharp story.",
    youtubeUrl: "", link: "https://balta.az/",
    thumbnail: coverBalta.url, stills: [coverBalta.url, A, H, A], awards: ["Netty Award 2019 — Best Online Video Project", "MilliNet Award 2018 — Best YouTube Project", "Official Selection — Animafilm 2021"] },
  { slug: "yerli-istehza", title: "Yerli İstehza", year: "—", category: "animation", role: "Animator",
    description: "A satirical animated series holding a crooked mirror up to everyday life.",
    youtubeUrl: "", link: "https://www.behance.net/gallery/110376931/YERL-STEHZA",
    thumbnail: coverYerli.url, stills: [coverYerli.url, H, A], awards: [] },
  { slug: "novum", title: "Novum", year: "—", category: "animation", role: "Animator",
    description: "Animated visual content created for a video game world.",
    youtubeUrl: "https://vimeo.com/560578912", link: "https://www.behance.net/gallery/121114553/NOVUM",
    thumbnail: coverNovum.url, stills: [coverNovum.url, A, D], awards: [] },
  // --- DOCUMENTARY & FILM ---
  { slug: "the-first", title: "The First", original: "Birinci", year: "—", category: "documentary", role: "Motion Designer",
    description: "A political-historical documentary.", youtubeUrl: "https://www.youtube.com/watch?v=yATngbnyDV0", thumbnail: yt("yATngbnyDV0"), stills: [yt("yATngbnyDV0"), D, H], awards: [] },
  { slug: "khojaly-speaks", title: "Khojaly Speaks", original: "Danışır Xocalı", year: "—", category: "documentary", role: "Motion Designer",
    description: "A war-testimony documentary giving voice to survivors.", quote: "Memory is the last witness.",
    youtubeUrl: "https://www.youtube.com/watch?v=FzQ19VxI5Gw", thumbnail: yt("FzQ19VxI5Gw"), stills: [yt("FzQ19VxI5Gw"), D, H], awards: [] },
  { slug: "narcotrap", title: "Narcotrap", original: "Narkotələ", year: "—", category: "documentary", role: "Editor / Motion Designer",
    description: "A docudrama based on real anti-drug operations.", youtubeUrl: "https://www.youtube.com/watch?v=LefXEZ4BefU", thumbnail: yt("LefXEZ4BefU"), stills: [yt("LefXEZ4BefU"), H, D], awards: [] },
  { slug: "vengeance", title: "Vengeance Didn't Wait for Judgment Day", original: "Qisas Qiyamətə Qalmadı", year: "—", category: "documentary", role: "Motion Designer",
    description: "A political documentary.", youtubeUrl: "https://www.youtube.com/watch?v=m-zgaO0tsQQ", thumbnail: yt("m-zgaO0tsQQ"), stills: [yt("m-zgaO0tsQQ"), D], awards: [] },
  { slug: "eagle-at-the-summit", title: "The Eagle at the Summit", original: "Qartal Zirvədə", year: "—", category: "documentary", role: "Motion Designer",
    description: "A documentary on national identity.", youtubeUrl: "https://www.youtube.com/watch?v=L1to1Q_yWNU", thumbnail: yt("L1to1Q_yWNU"), stills: [yt("L1to1Q_yWNU"), H, D], awards: [] },
  { slug: "frontline-sudan", title: "Frontline: Sudan – Fight for Survival", year: "—", category: "documentary", role: "Motion Designer",
    description: "A humanitarian documentary.", youtubeUrl: "https://www.youtube.com/watch?v=W8KPWJkUD2w", thumbnail: yt("W8KPWJkUD2w"), stills: [yt("W8KPWJkUD2w"), D], awards: [] },
  // --- INTERNATIONAL ---
  { slug: "buried-stories", title: "Buried Stories: The Last Train East", year: "—", category: "international", role: "Motion Designer",
    description: "An international documentary following forgotten journeys.", quote: "Some tracks lead only one way.",
    youtubeUrl: "https://www.youtube.com/watch?v=lD0u7SIevfo", thumbnail: yt("lD0u7SIevfo"), stills: [yt("lD0u7SIevfo"), D, H], awards: [] },
  { slug: "shadow-of-the-cross", title: "Shadow of the Cross", year: "—", category: "international", role: "Motion Designer",
    description: "An international documentary.", youtubeUrl: "https://www.youtube.com/watch?v=9R_51vtcAhA", thumbnail: yt("9R_51vtcAhA"), stills: [yt("9R_51vtcAhA"), H], awards: [] },
  { slug: "belt-and-road", title: "China's Global Vision: Belt and Road Initiative", year: "—", category: "international", role: "Motion Designer",
    description: "An international documentary on the Belt and Road Initiative.", youtubeUrl: "https://www.youtube.com/watch?v=9ldBevJUaaY", thumbnail: yt("9ldBevJUaaY"), stills: [yt("9ldBevJUaaY"), D], awards: [] },
  { slug: "los-aviadores-de-ganja", title: "Los Aviadores de Ganja", year: "—", category: "international", role: "Motion Designer",
    description: "An international documentary.", youtubeUrl: "https://www.youtube.com/watch?v=d7vloI4zaBQ", thumbnail: yt("d7vloI4zaBQ"), stills: [yt("d7vloI4zaBQ"), H, D], awards: [] },
];

export const featuredSlugs = ["birden-olsek", "balta", "khojaly-speaks", "buried-stories", "novum", "narcotrap"];

export const originals = [
  { title: "Şəhərdən Hekayələr", subtitle: "Stories from the City", role: "Creator / Director / Art Director", status: "In production",
    logline: "An absurdist-humor animated series about the small madnesses of a big city.", image: H },
  { title: "Maskarabaz", subtitle: "", role: "Writer / Director", status: "Pre-production",
    logline: "A philosophical animation series about the masks we wear — and who remains beneath them.", image: A },
];

export const experience = [
  { company: "Anewz TV", role: "Motion Designer", period: "2025 – Present" },
  { company: "Xezer TV", role: "Motion Designer / Editor", period: "2020 – 2024" },
  { company: "Qarinqulu Animation Film", role: "2D Animator", period: "2022" },
  { company: "Balta Animation Film", role: "2D Animator / Character Artist", period: "2018 – 2021" },
  { company: "Baku Maps, Royal SG MMC, Kaymu Azerbaijan", role: "Senior Graphic Designer", period: "2015 – 2017" },
];

export const skills = ["2D & 3D Animation", "Motion Graphics", "Character Design", "Storyboarding", "Video Editing", "Creative Direction", "Broadcast Design", "Screenwriting"];
export const software = ["After Effects", "Photoshop", "Premiere Pro", "Illustrator", "Blender", "Moho"];
export const languages = ["English", "Russian", "Turkish"];

export const awards = [
  { year: "2023", award: "ANIMA Festival — 1st Place", project: "Birdən Ölsək" },
  { year: "2021", award: "Animafilm — Official Selection", project: "Balta" },
  { year: "2019", award: "Netty Award — Best Online Video Project", project: "Balta" },
  { year: "2018", award: "MilliNet Award — Best YouTube Project", project: "Balta" },
];

export const press: { title: string; href: string }[] = []; // TODO: add press links

export const motionWork = [
  { src: H, caption: "Anewz TV × CIBC — Broadcast package" },
  { src: D, caption: "Xezer TV — Promo" },
  { src: A, caption: "Title sequence" },
  { src: D, caption: "Anewz TV — News opener" },
  { src: H, caption: "Xezer TV — Station ident" },
  { src: A, caption: "Lower thirds system" },
];

export const designWork = [
  { src: A, caption: "Character design" },
  { src: H, caption: "Vector background" },
  { src: D, caption: "Storyboard frame" },
  { src: A, caption: "Character sheet" },
  { src: H, caption: "Social campaign" },
  { src: D, caption: "Illustration" },
];

export const youtubeId = (url: string) => url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)?.[1] ?? "";
export const vimeoId = (url: string) => url.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1] ?? "";
