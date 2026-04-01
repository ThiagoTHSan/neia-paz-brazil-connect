import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function getScrollTopForElement(el: HTMLElement) {
  // Mantem o offset do header fixo (aprox.) para nao "cortar" o titulo da secao.
  const HEADER_OFFSET_PX = 96;
  const rect = el.getBoundingClientRect();
  return window.scrollY + rect.top - HEADER_OFFSET_PX;
}

/**
 * Faz scroll suave para o hash da URL (ex: /#portfolio).
 * Importante no React Router: mudar a rota com hash nem sempre dispara o scroll nativo do browser.
 */
export function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.trim();
    if (!hash || hash === "#") {
      // Em mudancas de pagina sem hash, volta para o topo.
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    const id = decodeURIComponent(hash.replace(/^#/, ""));
    // Espera um tick para garantir que o DOM da pagina alvo foi renderizado.
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      window.scrollTo({ top: getScrollTopForElement(el), left: 0, behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  return null;
}

