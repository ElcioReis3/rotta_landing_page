import { Button } from "@/components/ui/button";
import { trackAppDownload } from "@/lib/gtag";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.rottacargaplus.app";

// Único caminho da landing até a Google Play. Centralizar aqui garante que
// todo clique de download dispare a conversão do Google Ads.
export default function PlayStoreButton({ children, className, ...props }) {
  return (
    <Button asChild className={className} {...props}>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackAppDownload}
      >
        {children}
      </a>
    </Button>
  );
}
