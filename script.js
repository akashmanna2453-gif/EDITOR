/**
 * ==========================================================================
 * ALEX RIVERA — CINEMATIC VIDEO EDITOR PORTFOLIO
 * Production-Ready Vanilla JavaScript Architecture
 * ==========================================================================
 */

'use strict';

/* ==========================================================================
   1. SITE CONFIGURATION & EDITABLE DATA
   ========================================================================== */
const SITE_CONFIG = {
  editorName: "AKASH MANNA",
  tagline: "Video Editor • Storyteller • Creative",
  email: "akash.manna2453@gmail.com",
  whatsapp: "+91 99675 90265",
  whatsappLink: "https://wa.me/919967590265?text=Hi%20Akash,%20I'm%20interested%20in%20working%20with%20you%20on%20a%20video%20editing%20project!",
  youtube: "Akash Manna Edits",
  youtubeLink: "https://youtube.com",
  linkedin: "akash-manna-editor",
  linkedinLink: "https://linkedin.com",
  
  showreelVideoUrl: "https://archive.org/download/Tears-of-Steel/tears_of_steel_1080p.mp4",
  
  stats: [
    { value: 50, suffix: "+", label: "Projects Edited", desc: "From viral TikToks to high-production YouTube documentaries." },
    { value: 20, suffix: "+", label: "Happy Clients", desc: "Creators, founders, marketing agencies, and global brands." },
    { value: 2, suffix: "M+", label: "Views Generated", desc: "Proven organic reach with high average view duration & retention." },
    { value: 3, suffix: "+", label: "Years Creating", desc: "Mastering storytelling, color grading, sound design & rhythm." }
  ],

  pricing: [
    {
      tier: "starter",
      name: "STARTER",
      price: 499,
      currency: "₹",
      billing: "/ project",
      target: "Perfect for Instagram Reels, YouTube Shorts & basic social media content.",
      features: [
        "Basic cuts & trim",
        "Dynamic captions & text",
        "Background music sync",
        "Simple transitions & zooms",
        "Basic color correction",
        "1 free revision"
      ]
    },
    {
      tier: "creator",
      name: "CREATOR",
      price: 1499,
      currency: "₹",
      billing: "/ project",
      highlighted: true,
      badge: "MOST POPULAR",
      target: "Ideal for ambitious creators, YouTube channels & branded campaigns.",
      features: [
        "Advanced retention editing",
        "Motion graphics & callouts",
        "Professional styled captions",
        "Multi-track sound design & SFX",
        "Cinematic color grading",
        "B-roll curation & integration",
        "2 free revisions"
      ]
    },
    {
      tier: "pro",
      name: "PRO",
      price: 2999,
      currency: "₹",
      billing: "/ project",
      target: "For high-end commercials, documentary films & premium productions.",
      features: [
        "Premium cinematic editing",
        "Advanced 2D/3D motion graphics",
        "DaVinci Resolve color mastery",
        "Advanced sound foley & mix",
        "Custom animation & visual effects",
        "Full story restructuring",
        "3 free revisions + 4K delivery"
      ]
    }
  ],

  portfolio: [
    {
      id: "project-1",
      title: "Apex Fitness — Viral Reels Campaign",
      category: "shortform",
      categoryLabel: "SHORT-FORM",
      aspect: "9:16 VERTICAL",
      client: "Apex Fitness Co.",
      duration: "00:45",
      videoUrl: "https://archive.org/download/Tears-of-Steel/tears_of_steel_1080p.mp4",
      description: "Crafted 8 high-energy short-form reels for a nationwide fitness app launch. Designed retention hooks in the first 2 seconds, synchronized bass drops to rep movements, and animated kinetic bold typography for maximum scroll-stopping engagement.",
      tools: ["Premiere Pro", "After Effects", "CapCut Pro"],
      result: "+1.8M Views • 78% Avg Watch Time • 14k Saves",
      gradient: "linear-gradient(135deg, #1e1b4b 0%, #0369a1 100%)",
      accent: "#00f2fe"
    },
    {
      id: "project-2",
      title: "The Nomadic Mind — Iceland Cinematic Doc",
      category: "cinematic",
      categoryLabel: "CINEMATIC",
      aspect: "16:9 4K UHD",
      client: "Nomad Studios & National Geographic Featured",
      duration: "04:12",
      videoUrl: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
      description: "Full cinematic documentary edit highlighting solitary travel across Iceland's volcanic glaciers. Handled native S-Log3 color grading in DaVinci Resolve, organic film grain emulation, and bespoke soundscape foley with binaural wind and ice cracking effects.",
      tools: ["DaVinci Resolve", "Premiere Pro", "Audition"],
      result: "+820K Views • 84% Retention • Best Indie Short Award",
      gradient: "linear-gradient(135deg, #064e3b 0%, #022c22 50%, #0f172a 100%)",
      accent: "#10b981"
    },
    {
      id: "project-3",
      title: "TechUnboxed — M3 Max Ultimate Deep Dive",
      category: "youtube",
      categoryLabel: "YOUTUBE",
      aspect: "16:9 4K",
      client: "TechUnboxed Channel (380K Subs)",
      duration: "14:20",
      videoUrl: "https://archive.org/download/Tears-of-Steel/tears_of_steel_1080p.mp4",
      description: "Comprehensive 14-minute tech breakdown. Constructed custom 3D benchmark graph callouts, multi-angle camera cutting, clean voice isolation, and dynamic A-Roll zoom-punch rhythms to keep viewers hooked through dense technical specifications.",
      tools: ["Premiere Pro", "After Effects", "Photoshop"],
      result: "+490K Views • 42% Subscriber Conversion Lift",
      gradient: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
      accent: "#38bdf8"
    },
    {
      id: "project-4",
      title: "Aura Energy — High Voltage Commercial",
      category: "commercial",
      categoryLabel: "COMMERCIAL",
      aspect: "16:9 DCI 4K",
      client: "Aura Beverage Corp.",
      duration: "00:60",
      videoUrl: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
      description: "Fast-cut, adrenaline-charged commercial for extreme sports beverage brand. Layered speed ramps, match cuts, stylized glitch overlays, and high-impact sound design tailored for digital and TV broadcast placements.",
      tools: ["After Effects", "Premiere Pro", "Audition"],
      result: "3.2x ROAS on Meta & YouTube Ad Campaigns",
      gradient: "linear-gradient(135deg, #701a75 0%, #4338ca 100%)",
      accent: "#e879f9"
    },
    {
      id: "project-5",
      title: "Founder Diaries — High Stakes Podcast Cuts",
      category: "shortform",
      categoryLabel: "SHORT-FORM",
      aspect: "9:16 VERTICAL",
      client: "Founder Diaries Media",
      duration: "00:58",
      videoUrl: "https://archive.org/download/Tears-of-Steel/tears_of_steel_1080p.mp4",
      description: "Extracted the most poignant 60-second insights from 2-hour long podcast recordings. Applied dual-cam speaker auto-switching, word-by-word highlighted captions, subtle emotional ambient beds, and hook question cards.",
      tools: ["Premiere Pro", "CapCut", "Audition"],
      result: "+2.4M Views on IG Reels & TikTok Combined",
      gradient: "linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)",
      accent: "#818cf8"
    },
    {
      id: "project-6",
      title: "Urban Pulse — Cyberpunk Streetwear Launch",
      category: "commercial",
      categoryLabel: "COMMERCIAL",
      aspect: "16:9 4K",
      client: "Kuro Clothing Tokyo",
      duration: "01:15",
      videoUrl: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
      description: "Fashion lookbook and commercial showcase for Tokyo streetwear capsule collection. Used neon color timing, film halation, analog tape textures, and syncopated industrial beats to evoke a futuristic nighttime mood.",
      tools: ["DaVinci Resolve", "After Effects", "Premiere Pro"],
      result: "100% Capsule Sold Out in Under 3 Hours",
      gradient: "linear-gradient(135deg, #4c0519 0%, #1e1b4b 100%)",
      accent: "#f43f5e"
    }
  ]
};

/* ==========================================================================
   2. DOM READY & INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initCustomConfig();
  initCustomCursor();
  initNavigation();
  initMobileMenu();
  initScrollSpy();
  initScrollAnimations();
  initNumberCounters();
  initShowreel();
  initPortfolio();
  initBeforeAfterSlider();
  initTestimonialsSlider();
  initFaqAccordion();
  initContactForm();
  initDirectChannels();
  initSmoothScroll();
});

/* ==========================================================================
   3. INJECT CONFIG DATA & LINKS
   ========================================================================== */
function initCustomConfig() {
  const brandNames = document.querySelectorAll('#navBrandName, #footerBrandName');
  brandNames.forEach(el => { if (el) el.textContent = SITE_CONFIG.editorName; });

  const emailEls = document.querySelectorAll('#configEmail');
  emailEls.forEach(el => { if (el) el.textContent = SITE_CONFIG.email; });

  const waEls = document.querySelectorAll('#configWa');
  waEls.forEach(el => { if (el) el.textContent = SITE_CONFIG.whatsapp; });

  // Update Direct Contact & Social Links
  const fWa = document.getElementById('footerWa');
  if (fWa) fWa.href = SITE_CONFIG.whatsappLink;

  const fEmail = document.getElementById('footerEmail');
  if (fEmail) fEmail.href = `mailto:${SITE_CONFIG.email}`;

  const fYt = document.getElementById('footerYt');
  if (fYt) fYt.href = SITE_CONFIG.youtubeLink;

  const fLi = document.getElementById('footerLi');
  if (fLi) fLi.href = SITE_CONFIG.linkedinLink;

  const mEmail = document.getElementById('mobileEmail');
  if (mEmail) mEmail.href = `mailto:${SITE_CONFIG.email}`;

  const mYt = document.getElementById('mobileYt');
  if (mYt) mYt.href = SITE_CONFIG.youtubeLink;

  const mWa = document.getElementById('mobileWa');
  if (mWa) mWa.href = SITE_CONFIG.whatsappLink;

  const contactWaCard = document.getElementById('contactWaCard');
  if (contactWaCard) contactWaCard.href = SITE_CONFIG.whatsappLink;

  const contactEmailCard = document.getElementById('contactEmailCard');
  if (contactEmailCard) contactEmailCard.href = `mailto:${SITE_CONFIG.email}`;

  const copyrightEl = document.getElementById('footerCopyright');
  if (copyrightEl) {
    const year = new Date().getFullYear();
    copyrightEl.textContent = `© ${year} ${SITE_CONFIG.editorName}. All Rights Reserved.`;
  }
}

/* ==========================================================================
   4. CUSTOM CURSOR (DESKTOP)
   ========================================================================== */
function initCustomCursor() {
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');

  if (!cursorDot || !cursorRing) return;

  // Only activate on mouse pointer devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function renderCursorRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursorRing);
  }
  requestAnimationFrame(renderCursorRing);

  // Add hover effect when hovering over interactive elements
  const hoverElements = 'a, button, input, select, textarea, .project-card, .showreel-container, .comparison-slider-container, .service-card, .pricing-card';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverElements)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverElements)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* ==========================================================================
   5. NAVIGATION & STICKY HEADER
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Check on init
}

/* ==========================================================================
   6. MOBILE MENU OVERLAY
   ========================================================================== */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta-btn');

  if (!hamburgerBtn || !mobileNav) return;

  const toggleMenu = (open) => {
    const isExpanded = open !== undefined ? open : hamburgerBtn.getAttribute('aria-expanded') !== 'true';
    hamburgerBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    mobileNav.classList.toggle('is-open', isExpanded);
    mobileNav.setAttribute('aria-hidden', isExpanded ? 'false' : 'true');
    document.body.style.overflow = isExpanded ? 'hidden' : '';
  };

  hamburgerBtn.addEventListener('click', () => toggleMenu());

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      toggleMenu(false);
    }
  });
}

/* ==========================================================================
   7. SCROLL SPY & ACTIVE NAV LINKS
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   8. SCROLL REVEALS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  const elementsToReveal = document.querySelectorAll(
    '.stat-card, .service-card, .pricing-card, .project-card, .process-step-card, .tool-card, .why-card, .testimonial-card, .faq-item, .contact-card-wrap, .direct-channels-list'
  );

  elementsToReveal.forEach(el => {
    el.classList.add('reveal-on-scroll');
  });

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elementsToReveal.forEach(el => revealObserver.observe(el));
}

/* ==========================================================================
   9. NUMBER COUNTERS ANIMATION
   ========================================================================== */
function initNumberCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length === 0) return;

  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-target')) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easeOutExpo formula
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeProgress * target);

      el.textContent = `${currentVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = `${target}${suffix}`;
      }
    };

    requestAnimationFrame(updateCount);
  };

  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  let animated = false;
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(numEl => animateCounter(numEl));
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  statsObserver.observe(statsSection);
}

/* ==========================================================================
   10. SHOWREEL SECTION & SHOWREEL MODAL
   ========================================================================== */
function initShowreel() {
  const showreelContainer = document.getElementById('showreelContainer');
  const showreelVideo = document.getElementById('showreelVideo');
  const showreelPlayBtn = document.getElementById('showreelPlayBtn');
  const showreelPlayIcon = document.getElementById('showreelPlayIcon');
  const showreelPauseIcon = document.getElementById('showreelPauseIcon');
  const showreelTimelineTrack = document.getElementById('showreelTimelineTrack');
  const showreelTimelineProgress = document.getElementById('showreelTimelineProgress');
  const showreelTimecode = document.getElementById('showreelTimecode');
  const soundToggleBtn = document.getElementById('soundToggleBtn') || document.getElementById('showreelSoundToggle');
  const soundIconMuted = document.querySelector('.sound-icon-muted');
  const soundIconUnmuted = document.querySelector('.sound-icon-unmuted');
  const soundBtnText = document.getElementById('soundBtnText');
  const openFullBtn = document.getElementById('openFullShowreelBtn');
  const showreelModal = document.getElementById('showreelModal');
  const showreelCloseBtn = document.getElementById('showreelModalCloseBtn');
  const modalCinemaVideo = document.getElementById('modalCinemaVideo');

  if (!showreelVideo || !showreelContainer) return;

  // Toggle Video Play / Pause
  const togglePlay = () => {
    if (showreelVideo.paused) {
      showreelVideo.play().then(() => {
        showreelContainer.classList.add('is-playing');
        if (showreelPlayIcon) showreelPlayIcon.style.display = 'none';
        if (showreelPauseIcon) showreelPauseIcon.style.display = 'block';
      }).catch(err => {
        console.log("Autoplay policy prevented audio, attempting muted:", err);
        showreelVideo.muted = true;
        showreelVideo.play();
      });
    } else {
      showreelVideo.pause();
      showreelContainer.classList.remove('is-playing');
      if (showreelPlayIcon) showreelPlayIcon.style.display = 'block';
      if (showreelPauseIcon) showreelPauseIcon.style.display = 'none';
    }
  };

  showreelContainer.addEventListener('click', (e) => {
    // If clicked on sound button or timeline, let their own handlers work
    if (e.target.closest('#showreelSoundToggle') || e.target.closest('#showreelTimelineTrack')) return;
    togglePlay();
  });

  if (showreelPlayBtn) {
    showreelPlayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlay();
    });
  }

  // Update Timecode & Progress as Video Plays
  showreelVideo.addEventListener('timeupdate', () => {
    if (!showreelVideo.duration) return;

    const current = showreelVideo.currentTime;
    const duration = showreelVideo.duration;
    const pct = (current / duration) * 100;

    if (showreelTimelineProgress) {
      showreelTimelineProgress.style.width = `${pct}%`;
    }

    if (showreelTimecode) {
      const minutes = Math.floor(current / 60);
      const seconds = Math.floor(current % 60);
      const frames = Math.floor((current % 1) * 30);
      const pad = (n) => String(n).padStart(2, '0');
      showreelTimecode.textContent = `00:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
    }
  });

  // Interactive Timeline Seeking
  if (showreelTimelineTrack) {
    showreelTimelineTrack.addEventListener('click', (e) => {
      e.stopPropagation();
      const rect = showreelTimelineTrack.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      if (showreelVideo.duration) {
        showreelVideo.currentTime = pct * showreelVideo.duration;
        if (showreelVideo.paused) {
          togglePlay();
        }
      }
    });
  }

  // Sound Toggle (Mute / Unmute)
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showreelVideo.muted = !showreelVideo.muted;
      if (showreelVideo.muted) {
        if (soundIconMuted) soundIconMuted.style.display = 'inline-block';
        if (soundIconUnmuted) soundIconUnmuted.style.display = 'none';
        if (soundBtnText) soundBtnText.textContent = 'UNMUTE';
        showToast("Audio Muted");
      } else {
        if (soundIconMuted) soundIconMuted.style.display = 'none';
        if (soundIconUnmuted) soundIconUnmuted.style.display = 'inline-block';
        if (soundBtnText) soundBtnText.textContent = 'MUTE';
        showToast("Audio Playing");
      }
    });
  }

  // Fullscreen Cinema Modal Handlers
  const openModal = () => {
    if (!showreelModal) return;
    showreelVideo.pause();
    showreelContainer.classList.remove('is-playing');
    if (showreelPlayIcon) showreelPlayIcon.style.display = 'block';
    if (showreelPauseIcon) showreelPauseIcon.style.display = 'none';

    if (modalCinemaVideo) {
      modalCinemaVideo.currentTime = showreelVideo.currentTime || 0;
      modalCinemaVideo.play().catch(() => {});
    }

    showreelModal.classList.add('is-open');
    showreelModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!showreelModal) return;
    if (modalCinemaVideo) {
      modalCinemaVideo.pause();
    }
    showreelModal.classList.remove('is-open');
    showreelModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (openFullBtn) openFullBtn.addEventListener('click', openModal);
  if (showreelCloseBtn) showreelCloseBtn.addEventListener('click', closeModal);

  if (showreelModal) {
    showreelModal.addEventListener('click', (e) => {
      if (e.target === showreelModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && showreelModal && showreelModal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Auto-play when scrolled into view (muted for modern browsers)
  let playedOnce = false;
  const showreelObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !playedOnce) {
        playedOnce = true;
        showreelVideo.play().then(() => {
          showreelContainer.classList.add('is-playing');
          if (showreelPlayIcon) showreelPlayIcon.style.display = 'none';
          if (showreelPauseIcon) showreelPauseIcon.style.display = 'block';
        }).catch(() => {});
      } else if (!entry.isIntersecting && !showreelVideo.paused) {
        showreelVideo.pause();
        showreelContainer.classList.remove('is-playing');
        if (showreelPlayIcon) showreelPlayIcon.style.display = 'block';
        if (showreelPauseIcon) showreelPauseIcon.style.display = 'none';
      }
    });
  }, { threshold: 0.35 });

  showreelObserver.observe(showreelContainer);
}

/* ==========================================================================
   11. PORTFOLIO GRID, FILTERING & PROJECT MODAL
   ========================================================================== */
function initPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  const filterBtns = document.querySelectorAll('.portfolio-filter-bar .filter-btn');
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalHireBtn = document.getElementById('modalHireBtn');
  const modalVideoElement = document.getElementById('modalVideoElement');
  const modalVideoSource = document.getElementById('modalVideoSource');

  if (!grid) return;

  // Render Projects
  const renderProjects = (filter = 'all') => {
    grid.innerHTML = '';

    const filtered = filter === 'all' 
      ? SITE_CONFIG.portfolio 
      : SITE_CONFIG.portfolio.filter(p => p.category === filter);

    filtered.forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = 'project-card reveal-on-scroll is-revealed';
      card.setAttribute('data-id', project.id);
      card.setAttribute('data-category', project.category);
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View ${project.title}`);

      card.innerHTML = `
        <div class="project-thumb-wrap">
          <div class="project-thumb-canvas" style="background: ${project.gradient};">
            <div style="position: absolute; inset: 0; background: radial-gradient(circle at 60% 40%, rgba(255,255,255,0.12) 0%, transparent 60%);"></div>
            <div style="position: absolute; bottom: 12px; left: 12px; font-family: var(--font-mono); font-size: 0.72rem; color: rgba(255,255,255,0.8); background: rgba(0,0,0,0.6); padding: 2px 8px; border-radius: 4px;">
              ⏱ ${project.duration}
            </div>
          </div>
          <span class="project-aspect-tag">${project.aspect}</span>
          <div class="project-overlay">
            <span class="overlay-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Watch Edit
            </span>
          </div>
        </div>
        <div class="project-info-body">
          <div class="project-meta-top">
            <span class="project-category">${project.categoryLabel}</span>
            <span class="project-client">${project.client.split(' ')[0]}...</span>
          </div>
          <h3 class="project-title font-heading">${project.title}</h3>
          <p class="project-desc">${project.description.substring(0, 95)}...</p>
          <div class="project-result-tag font-mono">${project.result.split('•')[0].trim()}</div>
        </div>
      `;

      card.addEventListener('click', () => openProjectModal(project));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectModal(project);
        }
      });

      grid.appendChild(card);
    });
  };

  // Filter Buttons Logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      
      const filterCategory = btn.getAttribute('data-filter');
      renderProjects(filterCategory);
    });
  });

  // Modal Open Function
  const openProjectModal = (project) => {
    if (!projectModal) return;

    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = project.categoryLabel;
    document.getElementById('modalClient').textContent = `Client: ${project.client}`;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalResult').textContent = project.result;

    const toolsContainer = document.getElementById('modalTools');
    if (toolsContainer) {
      toolsContainer.innerHTML = project.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');
    }

    if (modalHireBtn) {
      modalHireBtn.setAttribute('data-prefill-type', project.categoryLabel);
    }

    if (modalVideoElement && project.videoUrl) {
      if (modalVideoSource) modalVideoSource.src = project.videoUrl;
      modalVideoElement.src = project.videoUrl;
      modalVideoElement.load();
      modalVideoElement.play().catch(() => {});
    }

    projectModal.classList.add('is-open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    if (!projectModal) return;
    if (modalVideoElement) {
      modalVideoElement.pause();
      modalVideoElement.currentTime = 0;
    }
    projectModal.classList.remove('is-open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('is-open')) {
      closeProjectModal();
    }
  });

  // Initial render
  renderProjects('all');
}

/* ==========================================================================
   12. BEFORE / AFTER COMPARISON SLIDER
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('comparisonSlider');
  const beforeLayer = document.getElementById('beforeLayer');
  const handle = document.getElementById('comparisonHandle');

  if (!container || !beforeLayer || !handle) return;

  let isDragging = false;
  let currentPercentage = 50;

  const updateSliderPosition = (percentage) => {
    // Clamp between 0% and 100%
    const clamped = Math.max(0, Math.min(100, percentage));
    currentPercentage = clamped;

    beforeLayer.style.width = `${clamped}%`;
    handle.style.left = `${clamped}%`;
    container.setAttribute('aria-valuenow', Math.round(clamped));
  };

  const handlePointerMove = (clientX) => {
    const rect = container.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percentage = (offsetX / rect.width) * 100;
    updateSliderPosition(percentage);
  };

  // Mouse Events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    handlePointerMove(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    handlePointerMove(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Events (Mobile)
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX);
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Keyboard Accessibility
  container.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      updateSliderPosition(currentPercentage - 5);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      updateSliderPosition(currentPercentage + 5);
    }
  });

  // Initial position
  updateSliderPosition(50);
}

/* ==========================================================================
   13. TESTIMONIALS CAROUSEL
   ========================================================================== */
function initTestimonialsSlider() {
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('testimonialPrevBtn');
  const nextBtn = document.getElementById('testimonialNextBtn');

  if (!track || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  const cards = track.querySelectorAll('.testimonial-card');
  const totalCards = cards.length;

  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const updateCarousel = () => {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, totalCards - visibleCount);

    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = 24;
    const moveAmount = (cardWidth + gap) * currentIndex;

    track.style.transform = `translateX(-${moveAmount}px)`;

    prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
    nextBtn.style.opacity = currentIndex >= maxIndex ? '0.4' : '1';
  };

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, totalCards - visibleCount);
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
}

/* ==========================================================================
   14. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length === 0) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-answer-panel');

    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all other items (one open at a time requirement)
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          const otherPanel = otherItem.querySelector('.faq-answer-panel');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}

/* ==========================================================================
   15. CONTACT FORM & VALIDATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('projectForm');
  const successCard = document.getElementById('formSuccessCard');
  const resetBtn = document.getElementById('resetFormBtn');
  const detailsBox = document.getElementById('successDetailsBox');

  if (!form || !successCard) return;

  // Prefill links on page (e.g. pricing buttons, service buttons)
  document.addEventListener('click', (e) => {
    const prefillBtn = e.target.closest('[data-prefill-type], [data-prefill-budget]');
    if (!prefillBtn) return;

    const type = prefillBtn.getAttribute('data-prefill-type');
    const budget = prefillBtn.getAttribute('data-prefill-budget');

    if (type) {
      const typeSelect = document.getElementById('projectType');
      if (typeSelect) {
        for (let opt of typeSelect.options) {
          if (opt.value.toLowerCase().includes(type.toLowerCase())) {
            opt.selected = true;
            break;
          }
        }
      }
    }

    if (budget) {
      const budgetSelect = document.getElementById('projectBudget');
      if (budgetSelect) {
        for (let opt of budgetSelect.options) {
          if (opt.value === budget) {
            opt.selected = true;
            break;
          }
        }
      }
    }
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('clientName');
    const emailInput = document.getElementById('clientEmail');
    const typeSelect = document.getElementById('projectType');
    const budgetSelect = document.getElementById('projectBudget');
    const msgInput = document.getElementById('projectMessage');
    const submitBtn = document.getElementById('submitFormBtn');

    let isValid = true;

    // Validate Name
    const nameGroup = nameInput.closest('.form-group');
    if (!nameInput.value.trim()) {
      nameGroup.classList.add('has-error');
      isValid = false;
    } else {
      nameGroup.classList.remove('has-error');
    }

    // Validate Email
    const emailGroup = emailInput.closest('.form-group');
    if (!validateEmail(emailInput.value.trim())) {
      emailGroup.classList.add('has-error');
      isValid = false;
    } else {
      emailGroup.classList.remove('has-error');
    }

    // Validate Project Type
    const typeGroup = typeSelect.closest('.form-group');
    if (!typeSelect.value) {
      typeGroup.classList.add('has-error');
      isValid = false;
    } else {
      typeGroup.classList.remove('has-error');
    }

    // Validate Message (at least 10 chars)
    const msgGroup = msgInput.closest('.form-group');
    if (msgInput.value.trim().length < 10) {
      msgGroup.classList.add('has-error');
      isValid = false;
    } else {
      msgGroup.classList.remove('has-error');
    }

    if (!isValid) {
      showToast("Please check the required fields in red.");
      return;
    }

    // Simulate sending state
    submitBtn.classList.add('is-loading');
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.classList.remove('is-loading');
      submitBtn.disabled = false;

      // Populate confirmation summary
      if (detailsBox) {
        detailsBox.innerHTML = `
          <div><strong>NAME:</strong> ${nameInput.value.trim()}</div>
          <div><strong>EMAIL:</strong> ${emailInput.value.trim()}</div>
          <div><strong>TYPE:</strong> ${typeSelect.value}</div>
          <div><strong>BUDGET:</strong> ${budgetSelect.value || 'Not specified'}</div>
        `;
      }

      form.style.display = 'none';
      successCard.classList.add('is-visible');
      successCard.setAttribute('aria-hidden', 'false');
      showToast("Project request sent successfully!");
    }, 900);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = 'block';
      successCard.classList.remove('is-visible');
      successCard.setAttribute('aria-hidden', 'true');
    });
  }
}

/* ==========================================================================
   16. DIRECT CHANNELS & COPY TO CLIPBOARD
   ========================================================================== */
function initDirectChannels() {
  const emailCard = document.getElementById('contactEmailCard');
  if (emailCard) {
    emailCard.addEventListener('click', (e) => {
      // Check if user is on mobile; otherwise copy email to clipboard
      if (!window.matchMedia('(pointer: coarse)').matches) {
        e.preventDefault();
        navigator.clipboard.writeText(SITE_CONFIG.email).then(() => {
          showToast(`Copied ${SITE_CONFIG.email} to clipboard!`);
        }).catch(() => {
          window.location.href = `mailto:${SITE_CONFIG.email}`;
        });
      }
    });
  }
}

/* ==========================================================================
   17. SMOOTH SCROLLING & BACK TO TOP
   ========================================================================== */
function initSmoothScroll() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Smooth scroll with header offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   18. TOAST NOTIFICATION HELPER
   ========================================================================== */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMessage');

  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
