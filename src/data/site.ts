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
import studioThumb0 from "@/assets/studio-video-6kKGIgIpo54.jpg.asset.json";
import studioThumb1 from "@/assets/studio-video-1SitWOoIjFM.jpg.asset.json";
import studioThumb2 from "@/assets/studio-video-rG8OlLDqKes.jpg.asset.json";
import studioThumb3 from "@/assets/studio-video-2mKHGdS9PDE.jpg.asset.json";
import studioThumb4 from "@/assets/studio-video-25RwFrSFSsY.jpg.asset.json";
import studioThumb5 from "@/assets/studio-video-jzLAlj_VjlQ.jpg.asset.json";
import studioThumb6 from "@/assets/studio-video-Pvo6xak6NYw.jpg.asset.json";
import studioThumb7 from "@/assets/studio-video-bU8rc_lQrIU.jpg.asset.json";
import studioThumb8 from "@/assets/studio-video-et8ofXJNB-w.jpg.asset.json";
import studioThumb9 from "@/assets/studio-video-ZfdFPVnmtNc.jpg.asset.json";
import studioThumb10 from "@/assets/studio-video-upntqRJWsyI.jpg.asset.json";
import studioThumb11 from "@/assets/studio-video-6dCUQRcXf4Q.jpg.asset.json";
import studioThumb12 from "@/assets/studio-video-R0jUbQTviss.jpg.asset.json";
import studioThumb13 from "@/assets/studio-video-gG78nvnwMao.jpg.asset.json";
import studioThumb14 from "@/assets/studio-video-nhcVsJXIEZc.jpg.asset.json";
import studioThumb15 from "@/assets/studio-video-OBpAitmcusw.jpg.asset.json";
import studioThumb16 from "@/assets/studio-video-MpPYCYSN6uE.jpg.asset.json";
import studioThumb17 from "@/assets/studio-video--bBvLOLFAlU.jpg.asset.json";
import studioThumb18 from "@/assets/studio-video-OaoKtH71sTo.jpg.asset.json";
import studioThumb19 from "@/assets/studio-video-rPbMB71E0Vk.jpg.asset.json";
import studioThumb20 from "@/assets/studio-video-3bBj89BFv20.jpg.asset.json";
import studioThumb21 from "@/assets/studio-video-orr7raf23xE.jpg.asset.json";
import studioThumb22 from "@/assets/studio-video-lYESDi7Dh5I.jpg.asset.json";
import studioThumb23 from "@/assets/studio-video-nnFxUOPV8Kc.jpg.asset.json";
import studioThumb24 from "@/assets/studio-video-zjIqmzbfbUE.jpg.asset.json";
import studioThumb25 from "@/assets/studio-video-KrHTaqJ--w0.jpg.asset.json";
import studioThumb26 from "@/assets/studio-video-D1fmlK4ThmI.jpg.asset.json";
import studioThumb27 from "@/assets/studio-video-k1GxLByn9rw.jpg.asset.json";
import studioThumb28 from "@/assets/studio-video-uuLbghNGEA4.jpg.asset.json";
import studioThumb29 from "@/assets/studio-video-tgTCf1eOVs4.jpg.asset.json";

const yt = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export const images = { hero, portrait: portrait.url };

export const studio = {
  image: studioLogo.url,
  channelUrl: "https://www.youtube.com/@Piktolix/videos",
};

export type StudioVideo = { id: string; title: string; thumbnail: string; publishedAt: string };
// Complete public uploads snapshot (including Shorts), checked 2026-10-20.
export const studioVideos: StudioVideo[] = [
  { id: "6kKGIgIpo54", title: "ALTERWESS - RADIO X", thumbnail: studioThumb0.url, publishedAt: "2026-05-17T06:52:33-07:00" },
  { id: "1SitWOoIjFM", title: "ALTERWESS - RADIO X", thumbnail: studioThumb1.url, publishedAt: "2026-05-01T10:39:24-07:00" },
  { id: "rG8OlLDqKes", title: "Nadir Rustamli ft Kenan İbrali - Aşkın olmasa #akustik #kurtlarvadisi", thumbnail: studioThumb2.url, publishedAt: "2026-03-18T04:04:44-07:00" },
  { id: "2mKHGdS9PDE", title: "Rehim Majid & Kənan İbrali - Içimdə ölən biri (Akustik) #cover #ahmetkaya #piktolixrecords #piktolix", thumbnail: studioThumb3.url, publishedAt: "2026-03-15T07:28:00-07:00" },
  { id: "25RwFrSFSsY", title: "Rehim Majid ft Kenan İbrali - İçimde Ölen Biri (Akustik)", thumbnail: studioThumb4.url, publishedAt: "2026-03-15T07:13:55-07:00" },
  { id: "jzLAlj_VjlQ", title: "İKİ TƏRƏF PODCAST - Menendez qardaşları", thumbnail: studioThumb5.url, publishedAt: "2025-12-20T08:48:08-08:00" },
  { id: "Pvo6xak6NYw", title: "Nadir Rustamli ft Kənan İbrali - Aşkın Olmasa (Cover) #akustik #music #cover", thumbnail: studioThumb6.url, publishedAt: "2025-12-15T00:06:58-08:00" },
  { id: "bU8rc_lQrIU", title: "Nadir Rustamli ft Kənan İbrali -Aşkın Olmasa (Akustik)", thumbnail: studioThumb7.url, publishedAt: "2025-12-14T10:52:52-08:00" },
  { id: "et8ofXJNB-w", title: "İKİ TƏRƏF PODCAST - Dexter #podcast #dexter #dc #piktolix #ikiteref", thumbnail: studioThumb8.url, publishedAt: "2025-12-01T03:39:55-08:00" },
  { id: "ZfdFPVnmtNc", title: "Kənan İbrali ft Nadir Rustamli-Aşkın olmasa #kurtlarvadisi #cover #akustik", thumbnail: studioThumb9.url, publishedAt: "2025-11-20T00:32:17-08:00" },
  { id: "upntqRJWsyI", title: "Rehim Majid & Kənan İbrali - Uzun incə bir yoldayım (Akustik)", thumbnail: studioThumb10.url, publishedAt: "2025-11-16T23:46:09-08:00" },
  { id: "6dCUQRcXf4Q", title: "Rehim Majid ft Kenan İbrali - Uzun İnce Bir Yoldayım (Akustik)", thumbnail: studioThumb11.url, publishedAt: "2025-11-16T09:40:58-08:00" },
  { id: "R0jUbQTviss", title: "İKİ TƏRƏF PODCAST - DEXTER", thumbnail: studioThumb12.url, publishedAt: "2025-11-15T07:44:46-08:00" },
  { id: "gG78nvnwMao", title: "İKİ TƏRƏF PODCAST - LOBO (DC Universe)", thumbnail: studioThumb13.url, publishedAt: "2025-11-13T00:14:41-08:00" },
  { id: "nhcVsJXIEZc", title: "İKİ TƏRƏF PODCAST - DC Universe", thumbnail: studioThumb14.url, publishedAt: "2025-11-11T10:03:17-08:00" },
  { id: "OBpAitmcusw", title: "ANIMAZE PODCAST - #Teaser", thumbnail: studioThumb15.url, publishedAt: "2025-11-10T08:01:59-08:00" },
  { id: "MpPYCYSN6uE", title: "İKİ TƏRƏF PODCAST - DC Universe", thumbnail: studioThumb16.url, publishedAt: "2025-11-10T05:57:37-08:00" },
  { id: "-bBvLOLFAlU", title: "ANIMAZE  PODCAST - #1 Bleach, Naruto və Vinland Saga haqqında", thumbnail: studioThumb17.url, publishedAt: "2025-11-09T08:44:57-08:00" },
  { id: "OaoKtH71sTo", title: "İKİ TƏRƏF PODCAST - Fantastic Four (MARVEL)", thumbnail: studioThumb18.url, publishedAt: "2025-07-24T05:30:55-07:00" },
  { id: "rPbMB71E0Vk", title: "İKİ TƏRƏF PODCAST - SUPERMAN (DC)", thumbnail: studioThumb19.url, publishedAt: "2025-07-20T10:56:44-07:00" },
  { id: "3bBj89BFv20", title: "İKİ TƏRƏF PODCAST - MARVEL LGBT və Feministlər", thumbnail: studioThumb20.url, publishedAt: "2025-07-20T05:28:31-07:00" },
  { id: "orr7raf23xE", title: "İKİ TƏRƏF PODCAST - Fantastic Four (MARVEL)", thumbnail: studioThumb21.url, publishedAt: "2025-07-13T09:37:08-07:00" },
  { id: "lYESDi7Dh5I", title: "İKİ TƏRƏF PODCAST -Ray Stevenson əsl Punisherdir #podcast  #ikiteref #piktolix #punisher  #marvel", thumbnail: studioThumb22.url, publishedAt: "2025-07-09T08:27:07-07:00" },
  { id: "nnFxUOPV8Kc", title: "İKİ TƏRƏF PODCAST - Punisher Jon Bernthal(MARVEL)#podcast #ikiteref #piktolix #punisher #marvel", thumbnail: studioThumb23.url, publishedAt: "2025-07-08T07:46:55-07:00" },
  { id: "zjIqmzbfbUE", title: "İKİ TƏRƏF PODCAST - Punisher ölmək istəyən obrazdı! #podcast #ikiteref #piktolix #punisher #marvel", thumbnail: studioThumb24.url, publishedAt: "2025-07-07T08:39:55-07:00" },
  { id: "KrHTaqJ--w0", title: "Frame Frame Danışaq - Babək #animasiya #əfsanələr #podcast #nağılqəhrəmanları #Babək #piktolix", thumbnail: studioThumb25.url, publishedAt: "2025-07-07T05:31:38-07:00" },
  { id: "D1fmlK4ThmI", title: "Frame Frame Danışaq", thumbnail: studioThumb26.url, publishedAt: "2025-07-06T04:04:22-07:00" },
  { id: "k1GxLByn9rw", title: "İKİ TƏRƏF PODCAST -  Punisher(MARVEL)", thumbnail: studioThumb27.url, publishedAt: "2025-07-05T12:24:52-07:00" },
  { id: "uuLbghNGEA4", title: "Frame Frame Danışaq -  Babək", thumbnail: studioThumb28.url, publishedAt: "2025-06-21T11:09:53-07:00" },
  { id: "tgTCf1eOVs4", title: "Şəhərdən Hekayələr - Rəsmi Treyler 2025", thumbnail: studioThumb29.url, publishedAt: "2025-01-21T08:38:23-08:00" }
];

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
