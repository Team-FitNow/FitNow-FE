// src/theme/theme.ts
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

    // ✅ KREAM식 미세 톤
    muted: "#6b7280",    // 보조 텍스트
    divider: "#e5e7eb",  // 옅은 경계선
    badgeBg: "#f9fafb",  // 뱃지/칩 배경
  },
  focusRing: "rgba(17, 24, 39, 0.15)",
  spacing: {
    xxs: "0.25rem", // ✅ 더 타이트한 spacing
    xs: "0.375rem",
    sm: "0.65rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  radii: {
    sm: "6px",
    md: "8px",
    lg: "10px",
    xl: "12px",    // 16 → 12, KREAM 느낌
    pill: "9999px",
  },
  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.04)",
    lg: "0 8px 28px rgba(0,0,0,0.06)",
  },
  fontSizes: {
    xs: "0.8rem",
    sm: "0.9rem",
    md: "0.95rem",
    lg: "1.1rem",
    xl: "1.5rem",
  },
} as const;

export type AppTheme = typeof theme;
