// Google Ads — tag global e disparo da conversão de download.
// O ID de conversão é público por natureza (fica visível no HTML de qualquer
// site que usa gtag). Não é segredo e não precisa ir para .env.

const ADS_ID = "AW-18335636525";
const CONVERSION_LABEL = "uROHCI7Hmp8dEK24jqdE";

const SCRIPT_ID = "google-ads-gtag";
const ONCE_KEY = "rc_download_conversion";

export function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

// Injeta o gtag.js uma única vez. Os comandos enfileirados antes do script
// carregar são processados assim que ele termina de baixar.
export function initGoogleAds() {
  if (typeof window === "undefined") return;
  if (document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", ADS_ID);
}

// Conversão: clique em qualquer botão que leva à Google Play.
// Trava por sessão para não contar duas vezes quando o visitante clica em
// mais de um botão da mesma página.
export function trackAppDownload() {
  if (typeof window === "undefined") return;

  try {
    if (sessionStorage.getItem(ONCE_KEY)) return;
    sessionStorage.setItem(ONCE_KEY, "1");
  } catch {
    // Navegação privativa ou storage bloqueado: dispara mesmo assim.
  }

  gtag("event", "conversion", {
    send_to: `${ADS_ID}/${CONVERSION_LABEL}`,
  });
}
