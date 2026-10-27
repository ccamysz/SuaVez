import { useEffect } from "react";

type MessagingBootstrap = {
  settings: { language: string };
  init: (
    organizationId: string,
    deploymentName: string,
    siteUrl: string,
    options: { scrt2URL: string },
  ) => void;
};

declare global {
  interface Window {
    embeddedservice_bootstrap?: MessagingBootstrap;
  }
}

const SITE_URL =
  "https://orgfarm-3884d7e268-dev-ed.develop.my.site.com/ESWPlatinumCusto1792698323892";
const SCRIPT_ID = "salesforce-embedded-messaging";

/** Salesforce owns the widget and its lifecycle; load it once across page changes. */
export default function SalesforceChat() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `${SITE_URL}/assets/js/bootstrap.min.js`;
    script.async = true;
    script.onload = () => {
      const bootstrap = window.embeddedservice_bootstrap;
      if (!bootstrap) {
        console.error("Salesforce: inicializador do chat indisponível.");
        return;
      }

      try {
        bootstrap.settings.language = "pt_BR";
        bootstrap.init("00DdL000015jsCA", "Platinum_Customer", SITE_URL, {
          scrt2URL:
            "https://orgfarm-3884d7e268-dev-ed.develop.my.salesforce-scrt.com",
        });
      } catch (error) {
        console.error("Não foi possível iniciar o chat Salesforce:", error);
      }
    };
    script.onerror = () => {
      console.error("Não foi possível carregar o chat Salesforce.");
    };
    document.body.appendChild(script);
  }, []);

  return null;
}