const CV_URL = "curriculo/Curriculo_Eduardo_Mendes_Germano.pdf"; // <- Troque aqui pelo link do seu PDF do CV (ex: "assets/cv/DuDuMendes-CV.pdf")
const LINKS = {
  linkedin: "https://www.linkedin.com/in/eduardo-mendes-a2b1b9219/",
  github: "https://github.com/EduardoMnds",
};

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

function setYear(){
  $("#year").textContent = new Date().getFullYear();
}

function injectIcons(){
  const icons = {
    moon: `<svg viewBox="0 0 24 24" fill="none"><path d="M21 13.2A8.5 8.5 0 0 1 10.8 3a7.3 7.3 0 1 0 10.2 10.2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    sun: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    menu: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="none"><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    rocket: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 14c-1 3 0 5 0 5s2 1 5 0l10-10c1-4-1-6-1-6s-2-2-6-1L5 14Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 6l4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M7 17l-1 4 4-1" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="2"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
    calendar: `<svg viewBox="0 0 24 24" fill="none"><path d="M7 3v3M17 3v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M4 8h16v13H4z" stroke="currentColor" stroke-width="2"/><path d="M4 12h16" stroke="currentColor" stroke-width="2"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3v10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="m8 9 4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 17v3h16v-3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 19c-4 1.5-4-2.5-5-3m10 6v-3.5c0-1 .1-1.4-.5-2 1.7-.2 3.5-.8 3.5-4a3.1 3.1 0 0 0-.9-2.2 2.9 2.9 0 0 0-.1-2.2s-.7-.2-2.3.9a8 8 0 0 0-4.2 0C7.9 5.6 7.2 5.8 7.2 5.8a2.9 2.9 0 0 0-.1 2.2A3.1 3.1 0 0 0 6.2 10c0 3.2 1.8 3.8 3.5 4-.5.5-.6 1-.5 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    link: `<svg viewBox="0 0 24 24" fill="none"><path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    message: `<svg viewBox="0 0 24 24" fill="none"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
    send: `<svg viewBox="0 0 24 24" fill="none"><path d="M22 2 11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M22 2 15 22l-4-9-9-4 20-7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="none"><path d="M6.5 9.5V20M6.5 6.5h0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M10.5 20v-6.2c0-3.8 5-4.1 5 0V20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18.5 20V9.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    chevronUp: `<svg viewBox="0 0 24 24" fill="none"><path d="m18 15-6-6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V6l-8-3-8 3v6c0 6 8 10 8 10Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
    plug: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 2v6M15 2v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M7 8h10v3a5 5 0 0 1-5 5H7V8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 16v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    terminal: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 5h16v14H4z" stroke="currentColor" stroke-width="2"/><path d="m7 9 3 3-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 15h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`
  };

  $$(".icon[data-icon]").forEach(el => {
    const name = el.getAttribute("data-icon");
    if (icons[name]) el.innerHTML = icons[name];
  });
}

function themeInit(){
  const stored = localStorage.getItem("theme");
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

  if (stored === "light" || stored === "dark"){
    document.documentElement.setAttribute("data-theme", stored);
  } else if (prefersLight){
    document.documentElement.setAttribute("data-theme", "light");
  }

  updateThemeIcon();
  $("#themeBtn").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon();
  });
}

function updateThemeIcon(){
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const icon = current === "light" ? "sun" : "moon";
  $("#themeBtn .icon").setAttribute("data-icon", icon);
  injectIcons();
}

function mobileMenuInit(){
  const drawer = $("#drawer");
  const openBtn = $("#burgerBtn");
  const closeBtn = $("#closeDrawerBtn");

  const open = () => {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  drawer.addEventListener("click", (e) => {
    if (e.target === drawer) close();
  });

  // Close on navigation click
  $$(".mobile-link", drawer).forEach(a => a.addEventListener("click", close));

  // Escape to close
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) close();
  });
}

function revealInit(){
  const items = $$(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting){
        en.target.classList.add("is-visible");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => io.observe(el));
}

function counterInit(){
  const counters = $$("[data-count]");
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const run = (el) => {
    const target = Number(el.getAttribute("data-count") || "0");
    const dur = 850;
    const start = performance.now();
    const from = 0;

    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const v = Math.round(from + (target - from) * easeOut(p));
      el.textContent = String(v);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting){
        run(en.target);
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(el => io.observe(el));
}

function toTopInit(){
  const btn = $("#toTopBtn");
  const onScroll = () => {
    if (window.scrollY > 600) btn.classList.add("is-visible");
    else btn.classList.remove("is-visible");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function modalInit(){
  const modal = $("#modal");
  const content = $("#modalContent");

  const open = (html) => {
    content.innerHTML = html;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    content.innerHTML = "";
  };

  modal.addEventListener("click", (e) => {
    const closeAttr = e.target && e.target.getAttribute && e.target.getAttribute("data-close");
    if (closeAttr === "true") close();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) close();
  });

  // Certificates:
  const certMap = {
    cert1: { title: "JAVA POO", img: "imgs/cert1_page-0001.jpg" },
    cert2: { title: "Ambiente de Desenvolvimento Java", img: "imgs/cert2_page-0001.jpg" },
    cert3: { title: "UML - Guia Básico para Análise e Projeto de Sistemas", img: "imgs/cert3_page-0001.jpg" },
    cert4: { title: "AWS para Iniciantes - Aprenda e Domine a nuvem Amazon", img: "imgs/cert4_page-0001.jpg" },
    cert5: { title: "Introdução á Plataforma Java", img: "imgs/cert6_page-0001.jpg" },
    cert7: { title: "Java com Spring Boot , Kafka e Microserviços", img: "imgs/cert_microservices_page-0001.jpg" },
    cert8: { title: "Java Fundamentos (FIAP)", img: "imgs/JavaFundamentos.jpg" },
    cert9: { title: "Linux Fundamentos (FIAP)", img: "imgs/LinuxFundamentos.jpg" },
  };

  $$(".gallery__item[data-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-modal");
      const data = certMap[key];
      if (!data) return;

      open(`
        <h3>${data.title}</h3>
        <img src="${data.img}" alt="Imagem placeholder de certificado" loading="lazy"/>
      `);
    });
  });
}

function contactInit(){
  const form = $("#contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "");
    alert(`Obrigado, ${name || "!"} \n\nEste formulário está em modo demo.\nIntegre com Formspree/Netlify Forms ou seu backend quando quiser.`);
    form.reset();
  });
}

function linkInit(){
  const cvBtn = $("#downloadCvBtn");
  if (cvBtn && CV_URL && CV_URL !== "#") cvBtn.setAttribute("href", CV_URL);
}

/* Boot */
(function init(){
  setYear();
  injectIcons();
  themeInit();
  mobileMenuInit();
  revealInit();
  counterInit();
  toTopInit();
  modalInit();
  contactInit();
  linkInit();
})();

document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento de clique ao botão de download
    const downloadButton = document.getElementById('downloadButton');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            const fileUrl = 'curriculo/Curriculo_Eduardo_Mendes_Germano.pdf';
            window.open(fileUrl, '_blank');
        });
    }
});