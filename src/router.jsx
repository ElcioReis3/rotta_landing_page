import { useCallback, useEffect, useState } from "react";

/**
 * Mini-router sem dependências externas (History API).
 * Suficiente para as 2 rotas do site: "/" e "/sobre".
 */

export function navigate(to) {
  const [path, hash] = to.split("#");
  const target = path || "/";

  if (target !== window.location.pathname) {
    window.history.pushState({}, "", to);
    window.dispatchEvent(new PopStateEvent("popstate"));
    // dá tempo do React renderizar a nova página antes de rolar
    if (hash) {
      setTimeout(() => scrollToId(hash), 60);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    return;
  }

  if (hash) scrollToId(hash);
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function usePath() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return path;
}

export function Link({ to, children, onClick, ...props }) {
  const handle = useCallback(
    (e) => {
      // permite ctrl/cmd + clique abrir em nova aba
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      onClick?.(e);
      navigate(to);
    },
    [to, onClick]
  );

  return (
    <a href={to} onClick={handle} {...props}>
      {children}
    </a>
  );
}
