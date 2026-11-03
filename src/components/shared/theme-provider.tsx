"use client";

import * as React from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

function updateFavicon(isDark: boolean) {
  if (typeof document === "undefined") return;
  const svgUrl = isDark ? "/icon-dark.svg" : "/icon-light.svg";
  const icoUrl = isDark ? "/favicon.ico" : "/favicon-light.ico";
  const pngUrl = isDark ? "/icon-dark.png" : "/icon-light.png";

  const linkIcons = document.querySelectorAll<HTMLLinkElement>(
    "link[rel='icon'], link[rel='shortcut icon']"
  );
  linkIcons.forEach((el) => {
    const type = el.getAttribute("type");
    if (type === "image/svg+xml") {
      el.href = svgUrl;
    } else if (type === "image/png") {
      el.href = pngUrl;
    } else {
      el.href = icoUrl;
    }
  });
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("dark");

  const applyTheme = React.useCallback((t: Theme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    let isDark = true;
    if (t === "system") {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(isDark ? "dark" : "light");
    } else {
      isDark = t === "dark";
      root.classList.add(t);
    }
    updateFavicon(isDark);
  }, []);

  React.useEffect(() => {
    const savedTheme = (localStorage.getItem("zaplink-theme") as Theme) || "dark";
    setThemeState(savedTheme);
    applyTheme(savedTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      const current = (localStorage.getItem("zaplink-theme") as Theme) || "dark";
      if (current === "system") {
        applyTheme("system");
      }
    };
    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [applyTheme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("zaplink-theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
