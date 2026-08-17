import { lazy, Suspense, useEffect, useRef, useState } from "react";

const StrokeText = lazy(() => import("./StrokeText"));

const projects = [
  {
    index: "01",
    type: "3D PROJECT",
    title: "DEVIL MASK",
    description: "Centered on player behavior, combat pacing, and emotional arcs, this study examines how demanding boss encounters establish readability, pressure, and a sense of achievement.",
    tags: ["SYSTEM ANALYSIS", "COMBAT DESIGN", "PLAYER EXPERIENCE"],
    className: "project-elden",
    image: "/devil-mask.webp",
  },
  {
    index: "02",
    type: "3D PROJECT",
    title: "MONSTER DESIGN",
    description: "From concept and character design to environmental language, a complete animation pipeline shapes an original world with narrative tension.",
    tags: ["3D CHARACTER", "ENVIRONMENT", "STORYTELLING"],
    className: "project-toileport",
    image: "/monster-design.webp",
  },
  {
    index: "03",
    type: "3D PROJECT",
    title: "SLEEPING PATRICK",
    description: "Generative AI and real-time 3D tools enable rapid exploration of character silhouettes, material direction, and worldbuilding visuals.",
    tags: ["AI DESIGN", "ZBRUSH", "UNREAL ENGINE"],
    className: "project-ai",
    image: "/sleeping-patrick.webp",
  },
  { index:"04", type:"3D PROJECT", title:"OCEAN SCENE", description:"An animated ocean environment study focused on atmosphere and motion.", tags:["BLENDER","ENVIRONMENT"], className:"project-character", image:"", video:"/ocean-scene-optimized.mp4" },
  { index:"05", type:"ENVIRONMENT ART", title:"ENVIRONMENT STUDY", description:"An exploration of environmental atmosphere and spatial storytelling.", tags:["BLENDER","ENVIRONMENT"], className:"project-environment", image:"https://images.unsplash.com/photo-1614294148960-9aa740632a87?auto=format&fit=crop&w=1200&q=85" },
].map((project) => project.index === "05" ? {
  ...project,
  type: "ANCIENT ISLAND",
  title: "ANCIENT ISLAND",
  image: "",
  video: "/ancient-island-optimized.mp4",
} : project);

const localized = {
  en: {
    researchLabel:"01 / RESEARCH", studies:"MASTER'S STUDIES · THREE PAPERS", researchMeta:"MASTER'S RESEARCH / 03 PAPERS", researchTitle:["RESEARCH","THROUGH PLAY."],
    researchIntro:"Centered on game design, player experience, and visual storytelling, each study turns research into clear, testable design insights.",
    papers:[
      {title:["NARRATIVE FUNCTION OF","BOSS BATTLE"], body:"Using Elden Ring boss encounters as case studies, this research examines the relationship between combat design, reward systems, and narrative structure."},
      {title:["PLAYER EXPERIENCE","ANALYSIS"], body:"Beginning with online systems and player behavior, this study examines how asynchronous interactions connect players across different spaces and sustain a positive cycle of mutual support."},
      {title:["FRAGMENTED","STORYTELLING"], body:"This research explores how characters, environments, and cinematic language communicate a world, then translates those visual storytelling insights into practical creative methods."}
    ],
    workLabel:"02 / 3D WORK", workMeta:"CHARACTER · ENVIRONMENT · EXPLORATION", workTitle:"PROJECT.", drag:"DRAG TO EXPLORE", projectType:"3D PROJECT",
    animationLabel:"03 / 2D ANIMATION", animationMeta:"GRADUATION FILM · TOILEPORT", film:"A 2D animated film built around an original world and character-driven narrative. From concept and art direction to cinematic pacing, it explores the emotional transformation of a character moving through an unknown space.", watch:"WATCH THE FULL FILM"
  },
  zh: {
    researchLabel:"01 / 研究", studies:"碩士研究 · 三篇論文", researchMeta:"碩士研究 / 03 篇論文", researchTitle:["透過遊戲","進行研究。"],
    researchIntro:"以遊戲設計、玩家體驗與視覺敘事為核心，將研究轉化為清晰且可驗證的設計觀點。",
    papers:[
      {title:["頭目戰的","敘事功能"], body:"以《Elden Ring》的頭目戰為案例，探討戰鬥設計、獎賞系統與故事結構之間的關係。"},
      {title:["玩家體驗","分析"], body:"從連線機制與玩家行為切入，分析非同步互動如何連結身處不同空間的玩家，並形成持續回饋的善意循環。"},
      {title:["碎片化","敘事"], body:"研究角色、場景與影像語言如何共同傳達世界觀，並將視覺敘事洞察轉化為實際創作方法。"}
    ],
    workLabel:"02 / 3D 作品", workMeta:"角色 · 場景 · 視覺探索", workTitle:"專案。", drag:"拖曳探索", projectType:"3D 專案",
    animationLabel:"03 / 2D 動畫", animationMeta:"畢業製作 · TOILEPORT", film:"一部以原創世界觀與角色敘事為核心的 2D 動畫。從概念發展、美術指導到影像節奏，描繪角色穿越未知空間時的情緒轉變。", watch:"觀看完整影片"
  },
  ko: {
    researchLabel:"01 / 연구", studies:"석사 연구 · 논문 3편", researchMeta:"석사 연구 / 논문 03편", researchTitle:["플레이를 통한","연구."],
    researchIntro:"게임 디자인, 플레이어 경험, 비주얼 스토리텔링을 중심으로 연구를 명확하고 검증 가능한 디자인 관점으로 전환합니다.",
    papers:[
      {title:["보스전의","서사적 기능"], body:"Elden Ring의 보스전을 사례로 삼아 전투 디자인, 보상 시스템, 서사 구조 사이의 관계를 분석합니다."},
      {title:["플레이어 경험","분석"], body:"온라인 시스템과 플레이어 행동을 바탕으로, 비동기 상호작용이 서로 다른 공간의 플레이어를 연결하고 선의의 순환을 지속시키는 방식을 연구합니다."},
      {title:["파편화된","스토리텔링"], body:"캐릭터, 환경, 영상 언어가 세계관을 전달하는 방식을 연구하고 그 통찰을 실제 창작 방법으로 발전시킵니다."}
    ],
    workLabel:"02 / 3D 작업", workMeta:"캐릭터 · 환경 · 비주얼 탐구", workTitle:"프로젝트.", drag:"드래그하여 탐색", projectType:"3D 프로젝트",
    animationLabel:"03 / 2D 애니메이션", animationMeta:"졸업 작품 · TOILEPORT", film:"독창적인 세계관과 캐릭터 중심의 서사를 담은 2D 애니메이션입니다. 콘셉트와 아트 디렉션부터 영상의 리듬까지, 미지의 공간을 통과하는 캐릭터의 감정 변화를 탐구합니다.", watch:"전체 영상 보기"
  }
} as const;

const capabilities = [
  ["01", "GAME DESIGN", "將抽象概念轉為可驗證的遊戲機制，從玩家動機、關卡節奏到戰鬥體驗建立完整邏輯。", "SYSTEM / COMBAT / LEVEL"],
  ["02", "3D ART", "由角色雕刻、場景建模、材質到即時引擎呈現，讓設計概念能以一致的視覺語言落地。", "ZBRUSH / BLENDER / SP"],
  ["03", "AI DESIGN", "把生成式工具放進真正的設計流程，以快速迭代擴張創意範圍，同時保留明確的人為判斷。", "IDEATION / WORKFLOW / VISUAL"],
  ["04", "RESEARCH", "以研究、拆解與簡報能力梳理複雜問題，將洞察轉化為團隊可溝通、可執行的設計決策。", "ANALYSIS / PRESENTATION"],
];

export default function Home() {
  const [navFloating, setNavFloating] = useState(false);
  const [language, setLanguage] = useState<"en" | "zh" | "ko">("en");
  const [introFinished, setIntroFinished] = useState(false);
  const [showGalleryExplore, setShowGalleryExplore] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const toileportSectionRef = useRef<HTMLElement>(null);
  const toileportVideoRef = useRef<HTMLVideoElement>(null);
  const drag = useRef({ active: false, moved: false, x: 0, scroll: 0 });
  const copy = localized[language];
  const languageSwitch = () => <div className="language-switch" role="group" aria-label="Language selector">
    {(["en","zh","ko"] as const).map((code) => <button type="button" key={code} className={language === code ? "is-active" : ""} onClick={() => setLanguage(code)} aria-pressed={language === code}>{code === "en" ? "EN" : code === "zh" ? "中" : "한"}</button>)}
  </div>;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("intro-lock");
    const introDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 250 : 2550;
    const timer = window.setTimeout(() => {
      setIntroFinished(true);
      document.body.classList.remove("intro-lock");
    }, introDuration);
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("intro-lock");
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateNav = () => {
      frame = 0;
      setNavFloating(window.scrollY >= window.innerHeight * 0.82);
    };
    const scheduleNavUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateNav);
    };
    updateNav();
    window.addEventListener("scroll", scheduleNavUpdate, { passive: true });
    window.addEventListener("resize", scheduleNavUpdate, { passive: true });
    return () => {
      window.removeEventListener("scroll", scheduleNavUpdate);
      window.removeEventListener("resize", scheduleNavUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("#about, #work, #toileport, #contact"));
    const targets: HTMLElement[] = [];
    const selector = [
      ".section-head", ".research-intro > p", ".research-intro h2", ".research-intro > span",
      ".research-grid article", ".display-title", ".gallery-hint", ".gallery-card", ".toileport-feature",
      ".toileport-copy > span", ".toileport-copy h2", ".toileport-copy p", ".toileport-copy a", ".toileport-label",
      ".contact .eyebrow", ".contact h2", ".contact-actions > a"
    ].join(",");

    sections.forEach((section) => {
      Array.from(section.querySelectorAll<HTMLElement>(selector)).forEach((element, index) => {
        element.classList.add("motion-reveal");
        element.classList.add(`motion-section-${section.id}`);
        if (element.matches("h2, .display-title")) element.classList.add("motion-title");
        else if (element.matches(".research-grid article, .gallery-card")) element.classList.add("motion-card");
        else if (element.matches(".toileport-feature")) element.classList.add("motion-panel");
        else element.classList.add("motion-copy");
        element.style.setProperty("--motion-delay", `${Math.min(index * 65, 390)}ms`);
        targets.push(element);
      });
    });

    if (reduceMotion) {
      targets.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.01, rootMargin: "80px 0px 0px 0px" });

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const videos = Array.from(gallery.querySelectorAll<HTMLVideoElement>(".gallery-video"));
    videos.forEach((video) => {
      const rate = video.getAttribute("src") === "/ancient-island-optimized.mp4" ? 1.5 : 1;
      video.defaultPlaybackRate = rate;
      video.playbackRate = rate;
    });
    const pauseAll = () => videos.forEach((video) => video.pause());
    const syncGalleryVideos = () => {
      if (document.hidden) { pauseAll(); return; }
      const galleryRect = gallery.getBoundingClientRect();
      videos.forEach((video) => {
        const videoRect = video.getBoundingClientRect();
        const overlapWidth = Math.max(0, Math.min(videoRect.right, galleryRect.right) - Math.max(videoRect.left, galleryRect.left));
        const overlapHeight = Math.max(0, Math.min(videoRect.bottom, galleryRect.bottom) - Math.max(videoRect.top, galleryRect.top));
        const visibleRatio = (overlapWidth * overlapHeight) / Math.max(1, videoRect.width * videoRect.height);
        if (visibleRatio >= 0.55) {
          if (video.error || video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) video.load();
          video.playbackRate = video.getAttribute("src") === "/ancient-island-optimized.mp4" ? 1.5 : 1;
          void video.play().catch(() => undefined);
        } else video.pause();
      });
    };
    const observer = new IntersectionObserver(syncGalleryVideos, { root: gallery, threshold: [0, 0.55, 0.85] });
    videos.forEach((video) => {
      observer.observe(video);
      video.addEventListener("canplay", syncGalleryVideos);
    });
    document.addEventListener("visibilitychange", syncGalleryVideos);
    window.addEventListener("focus", syncGalleryVideos);
    window.addEventListener("pageshow", syncGalleryVideos);
    window.addEventListener("blur", pauseAll);
    requestAnimationFrame(syncGalleryVideos);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncGalleryVideos);
      window.removeEventListener("focus", syncGalleryVideos);
      window.removeEventListener("pageshow", syncGalleryVideos);
      window.removeEventListener("blur", pauseAll);
      videos.forEach((video) => video.removeEventListener("canplay", syncGalleryVideos));
      pauseAll();
    };
  }, []);

  const beginDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    drag.current = { active: true, moved: false, x: event.clientX, scroll: gallery.scrollLeft };
    gallery.setPointerCapture(event.pointerId);
    gallery.classList.add("is-dragging");
  };
  const moveDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || !galleryRef.current) return;
    if (Math.abs(event.clientX - drag.current.x) > 6) drag.current.moved = true;
    galleryRef.current.scrollLeft = drag.current.scroll - (event.clientX - drag.current.x) * 1.25;
  };
  const endDrag = () => {
    drag.current.active = false;
    galleryRef.current?.classList.remove("is-dragging");
  };
  const moveGalleryByCard = (direction: -1 | 1) => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const cards = gallery.querySelectorAll<HTMLElement>(".gallery-card");
    if (!cards.length) return;
    const cardStep = cards.length > 1
      ? cards[1].offsetLeft - cards[0].offsetLeft
      : cards[0].offsetWidth;
    gallery.scrollBy({ left: direction * cardStep, behavior: "smooth" });
  };
  const updateGalleryExplore = () => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const oceanCard = gallery.querySelector<HTMLElement>(".gallery-card:nth-child(4)");
    if (!oceanCard) return;
    const galleryRect = gallery.getBoundingClientRect();
    const cardRect = oceanCard.getBoundingClientRect();
    setShowGalleryExplore(cardRect.right > galleryRect.left && cardRect.left < galleryRect.right);
  };
  useEffect(() => {
    const frame = window.requestAnimationFrame(updateGalleryExplore);
    window.addEventListener("resize", updateGalleryExplore, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateGalleryExplore);
    };
  }, []);
  useEffect(() => {
    const section = toileportSectionRef.current;
    const video = toileportVideoRef.current;
    if (!section || !video) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let visible = false;
    let hasStarted = false;
    let retryOnCanPlay = false;
    let recoveryFrame = 0;
    const minimumStart = 7;
    const maximumEnd = 245;
    const segmentLength = 15;
    const clearTimer = () => { if (timer) clearTimeout(timer); timer = undefined; };
    const sectionIsVisible = () => {
      const rect = section.getBoundingClientRect();
      const overlap = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
      return overlap / Math.max(1, Math.min(rect.height, window.innerHeight)) >= 0.35;
    };
    const playSegment = (first = false) => {
      if (!visible || document.hidden) return;
      const playbackEnd = Math.min(Number.isFinite(video.duration) ? video.duration : maximumEnd, maximumEnd);
      const latestStart = Math.max(minimumStart, playbackEnd - segmentLength);
      const randomStart = minimumStart + Math.random() * Math.max(0, latestStart - minimumStart);
      video.currentTime = first ? Math.min(Math.max(32, minimumStart), latestStart) : randomStart;
      hasStarted = true;
      const startPlayback = () => void video.play().catch(() => {
        if (!retryOnCanPlay) {
          retryOnCanPlay = true;
          video.addEventListener("canplay", recoverPlayback, { once: true });
        }
      });
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) startPlayback();
      else video.addEventListener("canplay", startPlayback, { once: true });
      clearTimer();
      timer = setTimeout(() => playSegment(false), segmentLength * 1000);
    };
    const recoverPlayback = () => {
      retryOnCanPlay = false;
      visible = sectionIsVisible();
      if (!visible || document.hidden) return;
      playSegment(!hasStarted);
    };
    const syncPlayback = () => {
      visible = sectionIsVisible();
      if (!visible || document.hidden) { clearTimer(); video.pause(); return; }
      // `preload="none"` keeps the large film out of the initial page load. Once
      // the section is visible we must explicitly start fetching it; otherwise
      // Chromium can remain at HAVE_NOTHING and never emit `canplay`.
      if (
        video.readyState === HTMLMediaElement.HAVE_NOTHING ||
        video.error ||
        video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE
      ) video.load();
      if (video.readyState >= HTMLMediaElement.HAVE_METADATA) playSegment(!hasStarted);
      else if (!retryOnCanPlay) {
        retryOnCanPlay = true;
        video.addEventListener("canplay", recoverPlayback, { once: true });
      }
    };
    const pausePlayback = () => { clearTimer(); video.pause(); };
    const recoverFromStall = () => {
      if (!visible || document.hidden || recoveryFrame) return;
      recoveryFrame = window.requestAnimationFrame(() => {
        recoveryFrame = 0;
        if (video.error || video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) video.load();
        if (video.currentTime < minimumStart || video.currentTime >= maximumEnd) video.currentTime = 32;
        recoverPlayback();
      });
    };
    const enforcePlaybackRange = () => {
      if (video.currentTime < minimumStart || video.currentTime >= maximumEnd) playSegment(false);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
      if (!visible) { clearTimer(); video.pause(); hasStarted = false; return; }
      syncPlayback();
    }, { threshold: [0, 0.35, 0.65] });
    observer.observe(section);
    document.addEventListener("visibilitychange", syncPlayback);
    window.addEventListener("focus", syncPlayback);
    window.addEventListener("pageshow", syncPlayback);
    window.addEventListener("blur", pausePlayback);
    video.addEventListener("stalled", recoverFromStall);
    video.addEventListener("error", recoverFromStall);
    video.addEventListener("emptied", recoverFromStall);
    video.addEventListener("timeupdate", enforcePlaybackRange);
    return () => {
      observer.disconnect();
      clearTimer();
      video.pause();
      document.removeEventListener("visibilitychange", syncPlayback);
      window.removeEventListener("focus", syncPlayback);
      window.removeEventListener("pageshow", syncPlayback);
      window.removeEventListener("blur", pausePlayback);
      video.removeEventListener("canplay", recoverPlayback);
      video.removeEventListener("stalled", recoverFromStall);
      video.removeEventListener("error", recoverFromStall);
      video.removeEventListener("emptied", recoverFromStall);
      video.removeEventListener("timeupdate", enforcePlaybackRange);
      if (recoveryFrame) window.cancelAnimationFrame(recoveryFrame);
    };
  }, []);
  return (
    <main className={`lang-${language}${introFinished ? " intro-complete" : ""}`}>
      {!introFinished && <div className="opening-panel" aria-hidden="true">
        <span className="opening-meta opening-meta-left">OSCAR CHANG / PORTFOLIO</span>
        <span className="opening-meta opening-meta-right">GAME DESIGN / 3D / AI</span>
        <div className="opening-beam"><i /><i /><i /></div>
        <div className="opening-slit" />
      </div>}
      <nav className={`floating-nav${navFloating ? " is-visible" : ""}`} aria-hidden={!navFloating}>
        <a className="brand" href="#top">OSCAR CHANG</a>
        <div className="hero-nav-links"><a href="#top">HOME</a><a href="#about">RESEARCH</a><a href="#work">3D WORK</a><a href="#toileport">ANIMATION</a><a href="#contact">CONTACT</a></div>
        {languageSwitch()}
      </nav>
      <section className="hero" id="top">
        <video key={introFinished ? "hero-video-ready" : "hero-video-hold"} className="hero-video" autoPlay={introFinished} muted loop playsInline preload="none">
          {introFinished && <source src="https://cdn.coverr.co/videos/coverr-a-man-in-a-futuristic-setting-1573/1080p.mp4" type="video/mp4" />}
        </video>
        <div className="hero-noise" />
        <nav className="nav hero-shell">
          <a className="brand" href="#top">OSCAR CHANG</a>
          <div className="hero-nav-links"><a className="active" href="#top">HOME</a><a href="#about">RESEARCH</a><a href="#work">3D WORK</a><a href="#toileport">ANIMATION</a><a href="#contact">CONTACT</a></div>
          {languageSwitch()}
        </nav>
        <div className="hero-content hero-shell">
          <h1><span>HI! IM OSCAR CHANG</span><strong>{introFinished && <Suspense fallback={null}><StrokeText key="hero-stroke-ready" className="hero-stroke-text" text="LETS BUILD A PLAYABLE WORLD" strokeColor="var(--acid)" fillColor="var(--acid)" strokeWidth={1.25} drawDuration={1.15} fillDelay={0.08} stagger={0.035} ease="power2.out" trigger="mount" fillMode="fade" fontSize={128} fontWeight={900} letterSpacing={-9} /></Suspense>}</strong></h1>
          <p className="hero-statement">GAME PLANNING / ANALYSIS / 3D ART</p>
          <a href="#about" className="hero-scroll">SCROLL TO DISCOVER <b>↓</b></a>
        </div>
      </section>

      <section className="about section shell" id="about">
        <header className="section-head"><p>{copy.researchLabel}</p><span>{copy.studies}</span></header>
        <div className="research-intro"><p>{copy.researchMeta}</p><h2>{copy.researchTitle[0]}<br /><em>{copy.researchTitle[1]}</em></h2><span>{copy.researchIntro}</span></div>
        <div className="research-grid">
          {copy.papers.map((paper,index) => <article key={paper.title.join("-")}><span>0{index+1}</span><h3>{paper.title[0]}<br />{paper.title[1]}</h3><p>{paper.body}</p><small>{index===0 ? "GAME DESIGN / PLAYER EXPERIENCE" : index===1 ? "UX RESEARCH / SYSTEM ANALYSIS" : "VISUAL DESIGN / STORYTELLING"}</small></article>)}
        </div>
        <div className="about-grid legacy-profile">
          <div className="portrait" role="img" aria-label="Portrait placeholder"><div className="portrait-mark">DESIGN<br />BEYOND<br />SURFACES.</div><span>PORTRAIT / 001</span></div>
          <div className="about-copy">
            <p className="kicker">GAME PLANNER · 3D ARTIST · AI DESIGNER</p>
            <h2>BETWEEN LOGIC<br />AND <em>IMAGINATION.</em></h2>
            <p className="lead">I care not only about whether an image works, but about how players understand, feel, and remember a world.</p>
            <p className="body-copy">My practice moves between systems thinking and visual storytelling, spanning game-design research, character and environment production, and generative AI workflows. I have presented design research on Elden Ring boss encounters and developed Toileport as a complete graduation animation project.</p>
            <div className="stats">
              <div><strong>03</strong><span>CORE<br />DISCIPLINES</span></div>
              <div><strong>01</strong><span>RESEARCH<br />PUBLICATION</span></div>
              <div><strong>∞</strong><span>WORLDS TO<br />BUILD</span></div>
            </div>
            <div className="tools"><span>SELECTED TOOLS</span><p>ZBRUSH · BLENDER · SUBSTANCE 3D PAINTER · UNREAL ENGINE</p></div>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="shell"><header className="section-head"><p>{copy.workLabel}</p><span>{copy.workMeta}</span></header><h2 className="display-title"><em>3D</em> {copy.workTitle}</h2></div>
        <div className="gallery-wrap">
          <div className="gallery-hint shell"><span>{copy.drag}</span><span className="gallery-controls"><button type="button" onClick={() => moveGalleryByCard(-1)} aria-label="Previous 3D project">←</button><button type="button" onClick={() => moveGalleryByCard(1)} aria-label="Next 3D project">→</button></span></div>
          <div className="project-gallery" ref={galleryRef} role="region" aria-label="Horizontal gallery of 3D projects" tabIndex={0} onScroll={updateGalleryExplore}
            onPointerDown={beginDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag} onPointerLeave={endDrag}>
            <div className="gallery-track">
              {projects.map((project) => (
                <article className="gallery-card" key={project.index}>
                  <div className="gallery-image">{"video" in project ? <video className="gallery-video" src={project.video} muted loop playsInline preload="none" aria-label={`${project.title} project video`} /> : <img src={project.image} alt={`${project.title} project artwork`} loading="lazy" decoding="async" draggable="false" />}<span>{project.index}</span><small>{copy.projectType}</small></div>
                  <div className="gallery-card-footer">
                    <h3>{project.title.replace("\n", " ")}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <a className={`gallery-explore-overlay${showGalleryExplore ? " is-visible" : ""}`} href="https://www.instagram.com/otis3dart?igsh=MTRibDU2Z3BqaWhseQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">EXPLORE MORE <b>→</b></a>
        </div>
      </section>

      <section className="toileport section" id="toileport" ref={toileportSectionRef}>
        <div className="shell"><header className="section-head"><p>{copy.animationLabel}</p><span>{copy.animationMeta}</span></header></div>
        <article className="toileport-feature">
          <video ref={toileportVideoRef} src="/toileport-optimized.mp4" muted playsInline preload="none" aria-label="Toileport 2D animation film" />
          <div className="toileport-shade" />
          <div className="toileport-copy"><span>01</span><i /><h2>TOILEPORT</h2><p>{copy.film}</p><a href="https://youtu.be/ZTf7t5y_5bo?si=DvWE90i77SPdCHfP" target="_blank" rel="noopener noreferrer">{copy.watch} <b>→</b></a></div>
          <div className="toileport-label">2D ANIMATION / VISUAL STORYTELLING</div>
        </article>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-grid" />
        <div className="shell contact-inner">
          <p className="eyebrow"><i /> OPEN TO COLLABORATION &amp; OPPORTUNITIES</p>
          <h2>LETS BUILD<br />THE <em>NEXT WORLD.</em></h2>
          <div className="contact-actions">
            <a className="mail contact-primary" href="https://www.linkedin.com/in/oscar-chang-8a4756425" target="_blank" rel="noopener noreferrer">START A CONVERSATION <span>↗</span></a>
            <a className="contact-detail" href="mailto:oscarmamba8@gmail.com">
              <small>GMAIL</small><strong>oscarmamba8@gmail.com</strong><span>↗</span>
            </a>
            <a className="contact-detail" href="tel:+821058749381">
              <small>PHONE</small><strong>(KR) +82-010-5874-9381</strong><span>↗</span>
            </a>
          </div>
          <div className="footer-line"><span>PORTFOLIO / 2026</span><div><a href="#top">BACK TO TOP ↑</a></div><span>TAIPEI, TAIWAN</span></div>
        </div>
      </footer>
    </main>
  );
}
