const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const currentYear = document.querySelector("#current-year");
const header = document.querySelector(".site-header");
const revealItems = document.querySelectorAll(".reveal");
const scrollTopButton = document.querySelector("[data-scroll-top]");
const candidateProfileRoot = document.querySelector("[data-candidate-profile-root]");
const candidateProfileName = document.querySelector("[data-profile-name]");
const candidateProfileIntro = document.querySelector("[data-profile-intro]");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

const syncHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

if (scrollTopButton) {
  scrollTopButton.addEventListener("click", () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  });
}

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const buildProfileCard = (eyebrow, title, value, accentClass) => `
  <article class="profile-card ${accentClass}">
    <span class="profile-card__eyebrow">${escapeHtml(eyebrow)}</span>
    <h3>${escapeHtml(title)}</h3>
    <p>${escapeHtml(value)}</p>
  </article>
`;

const renderCandidateProfile = (candidate) => {
  if (!candidateProfileRoot || !candidateProfileName || !candidateProfileIntro) return;

  if (!candidate) {
    candidateProfileName.textContent = "Profilo non trovato";
    candidateProfileIntro.textContent =
      "Il candidato richiesto non è presente nell'archivio attuale oppure il link non è corretto.";
    candidateProfileRoot.innerHTML = `
      <div class="profile-empty">
        <h2>Scheda non disponibile</h2>
        <p>Controlla il collegamento oppure torna alla pagina principale per selezionare un candidato.</p>
      </div>
    `;
    return;
  }

  const fullName = `${candidate.firstName} ${candidate.lastName}`;
  const initials = `${candidate.firstName?.[0] ?? ""}${candidate.lastName?.[0] ?? ""}`;
  const casellarioUrl = `documenti/casellari/${candidate.slug}.pdf`;
  const profileReady = Boolean(candidate.profileReady);
  const introText = candidate.socialInterests || candidate.passions || candidate.work || "";
  const candidacyLabel =
    candidate.role === "Candidata"
      ? "candidata al Consiglio Comunale"
      : "candidato al Consiglio Comunale";

  document.title = `${fullName} | Profilo Candidato`;
  candidateProfileName.textContent = fullName;
  candidateProfileIntro.textContent = profileReady
    ? `Sostiene Andrea Oliva Sindaco come ${candidacyLabel} nella lista Patto Civico per Alpignano.`
    : `Sostiene Andrea Oliva Sindaco come ${candidacyLabel} nella lista Patto Civico per Alpignano. La scheda completa è in aggiornamento.`;

  candidateProfileRoot.innerHTML = `
    <div class="profile-layout">
      <article class="profile-spotlight">
        <div class="profile-spotlight__avatar">${escapeHtml(initials)}</div>
        <span class="profile-spotlight__role">${escapeHtml(candidate.role)}</span>
        <h2>${escapeHtml(fullName)}</h2>
        <p class="profile-spotlight__lead">
          ${
            introText
              ? escapeHtml(introText)
              : "Scheda personale in aggiornamento, con informazioni descrittive in arrivo."
          }
        </p>
        <div class="profile-spotlight__meta">
          <div class="profile-chip">
            <span class="profile-chip__label">Nome</span>
            <strong>${escapeHtml(candidate.firstName)}</strong>
          </div>
          <div class="profile-chip">
            <span class="profile-chip__label">Cognome</span>
            <strong>${escapeHtml(candidate.lastName)}</strong>
          </div>
          <div class="profile-chip">
            <span class="profile-chip__label">Luogo di nascita</span>
            <strong>${escapeHtml(candidate.birthPlace)}</strong>
          </div>
          <div class="profile-chip">
            <span class="profile-chip__label">Data di nascita</span>
            <strong>${escapeHtml(candidate.birthDateDisplay)}</strong>
          </div>
        </div>

        <div class="profile-panel__actions">
          <a class="btn btn--primary" href="./index.html#candidati">Torna ai candidati</a>
          <a class="btn btn--ghost profile-panel__ghost" href="${casellarioUrl}" target="_blank" rel="noreferrer">Apri casellario</a>
        </div>
      </article>

      <div class="profile-cards-grid">
        ${buildProfileCard("Vita professionale", "Lavoro", candidate.work || "In aggiornamento", "profile-card--gold")}
        ${buildProfileCard("Vita privata", "Famiglia", candidate.family || "In aggiornamento", "profile-card--teal")}
        ${buildProfileCard("Hobby", "Passioni", candidate.passions || "In aggiornamento", "profile-card--blue")}
        ${buildProfileCard(
          "Partecipazione",
          "Interessi sociali",
          candidate.socialInterests || "In aggiornamento",
          "profile-card--gold-soft"
        )}
      </div>
    </div>

    ${
      profileReady
        ? ""
        : `
      <div class="profile-empty">
        <h2>Scheda in aggiornamento</h2>
        <p>I contenuti descrittivi di questo profilo verranno aggiunti non appena la campagna riceverà il materiale definitivo.</p>
      </div>
    `
    }
  `;
};

const loadCandidateProfile = async () => {
  if (!candidateProfileRoot) return;

  const slug = new URLSearchParams(window.location.search).get("candidato");

  if (!slug) {
    renderCandidateProfile(null);
    return;
  }

  try {
    const response = await fetch("data/candidate-profiles.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const candidate = data.candidates.find((entry) => entry.slug === slug);
    renderCandidateProfile(candidate ?? null);
  } catch (error) {
    candidateProfileName.textContent = "Profilo momentaneamente non disponibile";
    candidateProfileIntro.textContent =
      "Non siamo riusciti a caricare i dati del candidato in questo momento.";
    candidateProfileRoot.innerHTML = `
      <div class="profile-empty">
        <h2>Errore di caricamento</h2>
        <p>Riprova tra poco oppure controlla che il sito venga aperto da un server web e non direttamente come file locale.</p>
      </div>
    `;
    console.error(error);
  }
};

loadCandidateProfile();

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
  );

  revealItems.forEach((item) => {
    if (!item.classList.contains("is-visible")) {
      observer.observe(item);
    }
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
