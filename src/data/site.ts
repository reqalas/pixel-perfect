// ============================================================
// SINGLE CONTENT FILE — edit everything about the site here.
// To add a video: paste a YouTube URL into `youtubeUrl`.
// ============================================================
import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg.asset.json";
import coverNovum from "@/assets/cover-novum.png.asset.json";
import coverBalta from "@/assets/cover-balta.png.asset.json";
import coverYerli from "@/assets/cover-yerli.png.asset.json";
import seherdenHekayeler from "@/assets/seherden-hekayeler.jpg.asset.json";
import maskarabaz from "@/assets/maskarabaz.jpg.asset.json";
import visualDev from "@/assets/design-visual-dev.png.asset.json";
import sceneCar from "@/assets/design-scene-car.png.asset.json";
import titleCard from "@/assets/design-title-card.webp.asset.json";
import longBeard from "@/assets/design-long-beard.png.asset.json";
import storyboard from "@/assets/design-storyboard.png.asset.json";
import sceneBurn from "@/assets/design-scene-burn.png.asset.json";
import layoutAustralia from "@/assets/design-layout-australia.png.asset.json";
import costumeConcepts from "@/assets/design-costume-concepts.png.asset.json";
import outfitVariations from "@/assets/design-outfit-variations.png.asset.json";
import castLineup from "@/assets/design-cast-lineup.png.asset.json";
import studioLogo from "@/assets/piktolix-studio.png.asset.json";

const yt = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export const images = { hero, portrait: portrait.url };

export const studio = {
  image: studioLogo.url,
  channelUrl: "https://www.youtube.com/@Piktolix/videos",
};

export type StudioVideo = { id: string; title: string; thumbnail: string; publishedAt: string };
export const studioVideos: StudioVideo[] = [];

export const site = {
  name: "Seymur Abdullayev",
  title: "Motion Designer / 2D & 3D Animator / Director",
  tagline: "Stories in motion.",
  email: "seymur.abdullayev.1991@gmail.com",
  phone: "+994 70 691 33 13",
  location: "Baku, Azerbaijan",
  cvUrl: "", // TODO: paste link to CV PDF (e.g. /cv.pdf placed in /public)
  showreelUrl: "https://www.youtube.com/watch?v=tgTCf1eOVs4",
  showreelStart: 54,
  socials: [
    { label: "Behance", href: "https://www.behance.net/seymurabdullah" },
    { label: "IMDb", href: "https://imdb.me/seymurabdullayev" },
    { label: "YouTube", href: "https://www.youtube.com/" }, // TODO: your channel
  ],
};

export type Category = "international" | "animation" | "documentary";

export const categories: { id: Category; label: string }[] = [
  { id: "international", label: "International Productions" },
  { id: "animation", label: "Animation" },
  { id: "documentary", label: "Documentary & Film" },
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
  comingSoon?: boolean; // shown as "Coming soon" until the link exists
};


export const projects: Project[] = [
  // --- INTERNATIONAL PRODUCTIONS ---
  { slug: "kontrapunkt", title: "Kontrapunkt", year: "Soon", category: "international", role: "Motion Designer",
    description: "A new international production.",
    youtubeUrl: "", // TODO: paste the link when the film is released
    thumbnail: "", stills: [], awards: [], comingSoon: true },
  { slug: "buried-stories", title: "Buried Stories: The Last Train East", year: "—", category: "international", role: "Motion Designer",
    description: "An international documentary following forgotten journeys.", quote: "Some tracks lead only one way.",
    youtubeUrl: "https://www.youtube.com/watch?v=lD0u7SIevfo", thumbnail: yt("lD0u7SIevfo"), stills: [yt("lD0u7SIevfo")], awards: [] },
  { slug: "shadow-of-the-cross", title: "Shadow of the Cross", year: "—", category: "international", role: "Motion Designer",
    description: "An international documentary.", youtubeUrl: "https://www.youtube.com/watch?v=9R_51vtcAhA", thumbnail: yt("9R_51vtcAhA"), stills: [yt("9R_51vtcAhA")], awards: [] },
  { slug: "belt-and-road", title: "China's Global Vision: Belt and Road Initiative", year: "—", category: "international", role: "Motion Designer",
    description: "An international documentary on the Belt and Road Initiative.", youtubeUrl: "https://www.youtube.com/watch?v=9ldBevJUaaY", thumbnail: yt("9ldBevJUaaY"), stills: [yt("9ldBevJUaaY")], awards: [] },
  { slug: "los-aviadores-de-ganja", title: "Los Aviadores de Ganja", year: "—", category: "international", role: "Motion Designer",
    description: "An international documentary.", youtubeUrl: "https://www.youtube.com/watch?v=d7vloI4zaBQ", thumbnail: yt("d7vloI4zaBQ"), stills: [yt("d7vloI4zaBQ")], awards: [] },
  { slug: "frontline-sudan", title: "Frontline: Sudan – Fight for Survival", year: "—", category: "international", role: "Motion Designer",
    description: "A humanitarian documentary.", youtubeUrl: "https://www.youtube.com/watch?v=W8KPWJkUD2w", thumbnail: yt("W8KPWJkUD2w"), stills: [yt("W8KPWJkUD2w")], awards: [] },
  // --- ANIMATION ---
  { slug: "birden-olsek", title: "Birdən Ölsək", year: "2023", category: "animation", role: "Animator",
    description: "An animated music video about the fragility of the moments we leave unsaid.",
    quote: "What if tomorrow never comes?",
    youtubeUrl: "https://www.youtube.com/watch?v=fU4V_Y8_Xwc",
    thumbnail: yt("fU4V_Y8_Xwc"), stills: [yt("fU4V_Y8_Xwc")], awards: ["Winner, 1st Place — ANIMA Festival 2023"] },
  { slug: "balta", title: "Balta", year: "2018–2021", category: "animation", role: "2D Animator / Character Artist",
    description: "An animated project that grew into one of Azerbaijan's most recognised online series.",
    quote: "Small blade, sharp story.",
    youtubeUrl: "", link: "https://balta.az/",
    thumbnail: coverBalta.url, stills: [coverBalta.url], awards: ["Netty Award 2019 — Best Online Video Project", "MilliNet Award 2018 — Best YouTube Project", "Official Selection — Animafilm 2021"] },
  { slug: "yerli-istehza", title: "Yerli İstehza", year: "—", category: "animation", role: "Animator",
    description: "A satirical animated series holding a crooked mirror up to everyday life.",
    youtubeUrl: "", link: "https://www.behance.net/gallery/110376931/YERL-STEHZA",
    thumbnail: coverYerli.url, stills: [coverYerli.url], awards: [] },
  { slug: "novum", title: "Novum", year: "—", category: "animation", role: "Animator",
    description: "Animated visual content created for a video game world.",
    youtubeUrl: "https://vimeo.com/560578912", link: "https://www.behance.net/gallery/121114553/NOVUM",
    thumbnail: coverNovum.url, stills: [coverNovum.url], awards: [] },
  // --- DOCUMENTARY & FILM ---
  { slug: "the-first", title: "The First", original: "Birinci", year: "—", category: "documentary", role: "Motion Designer",
    description: "A political-historical documentary.", youtubeUrl: "https://www.youtube.com/watch?v=yATngbnyDV0", thumbnail: yt("yATngbnyDV0"), stills: [yt("yATngbnyDV0")], awards: [] },
  { slug: "khojaly-speaks", title: "Khojaly Speaks", original: "Danışır Xocalı", year: "—", category: "documentary", role: "Motion Designer",
    description: "A war-testimony documentary giving voice to survivors.", quote: "Memory is the last witness.",
    youtubeUrl: "https://www.youtube.com/watch?v=FzQ19VxI5Gw", thumbnail: yt("FzQ19VxI5Gw"), stills: [yt("FzQ19VxI5Gw")], awards: [] },
  { slug: "narcotrap", title: "Narcotrap", original: "Narkotələ", year: "—", category: "documentary", role: "Editor / Motion Designer",
    description: "A docudrama based on real anti-drug operations.", youtubeUrl: "https://www.youtube.com/watch?v=LefXEZ4BefU", thumbnail: yt("LefXEZ4BefU"), stills: [yt("LefXEZ4BefU")], awards: [] },
  { slug: "vengeance", title: "Vengeance Didn't Wait for Judgment Day", original: "Qisas Qiyamətə Qalmadı", year: "—", category: "documentary", role: "Motion Designer",
    description: "A political documentary.", youtubeUrl: "https://www.youtube.com/watch?v=m-zgaO0tsQQ", thumbnail: yt("m-zgaO0tsQQ"), stills: [yt("m-zgaO0tsQQ")], awards: [] },
  { slug: "eagle-at-the-summit", title: "The Eagle at the Summit", original: "Qartal Zirvədə", year: "—", category: "documentary", role: "Motion Designer",
    description: "A documentary on national identity.", youtubeUrl: "https://www.youtube.com/watch?v=L1to1Q_yWNU", thumbnail: yt("L1to1Q_yWNU"), stills: [yt("L1to1Q_yWNU")], awards: [] },
];

export const featuredSlugs = ["birden-olsek", "balta", "khojaly-speaks", "buried-stories", "novum", "narcotrap"];

export const originals = [
  { title: "Şəhərdən Hekayələr", subtitle: "Stories from the City", role: "Creator / Director / Art Director", status: "In production",
    logline: "An absurdist-humor animated series about the small madnesses of a big city.", image: seherdenHekayeler.url },
  { title: "Maskarabaz", subtitle: "", role: "Writer / Director", status: "Pre-production",
    logline: "A philosophical animation series about the masks we wear — and who remains beneath them.", image: maskarabaz.url },
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

export const motionWork: { src: string; caption: string }[] = []; // TODO: add real motion design stills

// Design gallery — plates appear in this order, laid out in clean justified rows.
export type DesignPlate = { src: string; caption: string; w: number; h: number };

export const designWork: DesignPlate[] = [
  { src: visualDev.url, caption: "Character & Background Development", w: 1800, h: 1698 },
  { src: sceneCar.url, caption: "Animated Scene", w: 1920, h: 1081 },
  { src: titleCard.url, caption: "Title Card", w: 1920, h: 967 },
  { src: longBeard.url, caption: "Surreal Character", w: 1669, h: 939 },
  { src: storyboard.url, caption: "Storyboard", w: 1393, h: 741 },
  { src: sceneBurn.url, caption: "Animation Frame", w: 1269, h: 714 },
  { src: layoutAustralia.url, caption: "Scene Layout", w: 1574, h: 776 },
  { src: costumeConcepts.url, caption: "Costume Concepts", w: 1920, h: 1439 },
  { src: outfitVariations.url, caption: "Outfit Variations", w: 1920, h: 1439 },
  { src: castLineup.url, caption: "Cast Lineup", w: 1920, h: 1439 },
];

export const youtubeId = (url: string) => url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)?.[1] ?? "";
export const vimeoId = (url: string) => url.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1] ?? "";
