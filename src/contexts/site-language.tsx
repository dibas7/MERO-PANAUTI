import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { SITE_STRINGS, type SiteLocale, type SiteStringKey } from "@/lib/site-strings";

const STORAGE_KEY = "explore-panauti-locale";

type SiteLanguageContextValue = {
  locale: SiteLocale;
  setLocale: (locale: SiteLocale) => void;
  toggleLocale: () => void;
  t: (key: SiteStringKey) => string;
  isNepali: boolean;
};

const SiteLanguageContext = createContext<SiteLanguageContextValue | null>(null);

export function SiteLanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SiteLocale>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "ne" || stored === "en") setLocaleState(stored);
    } catch {
      /* private mode */
    }
  }, []);

  const setLocale = useCallback((next: SiteLocale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* private mode */
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: SiteLocale = prev === "en" ? "ne" : "en";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* private mode */
      }
      return next;
    });
  }, []);

  const t = useCallback(
    (key: SiteStringKey) => SITE_STRINGS[locale][key] ?? SITE_STRINGS.en[key],
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = locale === "ne" ? "ne" : "en";
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t,
      isNepali: locale === "ne",
    }),
    [locale, setLocale, toggleLocale, t],
  );

  return <SiteLanguageContext.Provider value={value}>{children}</SiteLanguageContext.Provider>;
}

export function useSiteLanguage() {
  const ctx = useContext(SiteLanguageContext);
  if (!ctx) {
    throw new Error("useSiteLanguage must be used within SiteLanguageProvider");
  }
  return ctx;
}
