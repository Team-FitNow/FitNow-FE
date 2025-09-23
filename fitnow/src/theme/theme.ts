export const theme = {
    colors: {
      primary: "#111827",
      onPrimary: "#ffffff",
      background: "#f5f7fb",
      surface: "#ffffff",
      inputBg: "#ffffff",
      textPrimary: "#111827",
      textSecondary: "#4b5563",
      border: "#d1d5db",
      danger: "#ef4444",
      focus: "#111827",
      hover: "#f3f4f6",
    },
    focusRing: "rgba(17, 24, 39, 0.15)",
    spacing: {
      xs: "0.375rem",
      sm: "0.65rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      xxl: "3rem",
    },
    radii: {
      md: "8px",
      lg: "10px",
      xl: "16px",
    },
    shadows: {
      lg: "0 8px 28px rgba(0, 0, 0, 0.06)",
    },
    fontSizes: {
      sm: "0.9rem",
      md: "0.95rem",
      xl: "1.5rem",
    },
  } as const;
  
  export type AppTheme = typeof theme;