/** Qortex Tailwind preset — dùng: presets: [require("./tailwind.preset.js")]; nạp tokens.css để có biến --q-*. */
module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "q": {
          "green-900": "#0A2E23",
          "green-800": "#0F3B2E",
          "green-600": "#2F6B4E",
          "green-500": "#3E7C5A",
          "brass-300": "#E3C27A",
          "brass-500": "#B8891F",
          "brass-700": "#8A6614",
          "neutral-0": "#FFFFFF",
          "neutral-50": "#F4F6F2",
          "neutral-100": "#F3F4EF",
          "neutral-200": "#D9DED9",
          "neutral-300": "#CDD3CB",
          "neutral-400": "#B9C3BD",
          "neutral-600": "#55625B",
          "neutral-700": "#3D4A43",
          "neutral-900": "#1B2420",
          "bg-page": "var(--q-bg-page)",
          "bg-surface": "var(--q-bg-surface)",
          "bg-inverse": "var(--q-bg-inverse)",
          "bg-inverse-hover": "var(--q-bg-inverse-hover)",
          "text-primary": "var(--q-text-primary)",
          "text-heading": "var(--q-text-heading)",
          "text-secondary": "var(--q-text-secondary)",
          "text-muted": "var(--q-text-muted)",
          "text-on-inverse": "var(--q-text-on-inverse)",
          "text-on-inverse-muted": "var(--q-text-on-inverse-muted)",
          "link": "var(--q-link)",
          "link-hover": "var(--q-link-hover)",
          "accent": "var(--q-accent)",
          "accent-text": "var(--q-accent-text)",
          "cta-on-inverse-bg": "var(--q-cta-on-inverse-bg)",
          "border": "var(--q-border)",
          "border-strong": "var(--q-border-strong)",
          "focus": "var(--q-focus)",
          "success": "var(--q-success)"
        }
      },
      "fontFamily": {
        "sans": [
          "Be Vietnam Pro",
          "Segoe UI",
          "system-ui",
          "sans-serif"
        ],
        "mono": [
          "IBM Plex Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace"
        ],
        "brand": [
          "IBM Plex Sans",
          "Be Vietnam Pro",
          "sans-serif"
        ]
      },
      "fontSize": {
        "display": [
          "clamp(38px, 5.4vw, 68px)",
          {
            "lineHeight": "1.08",
            "fontWeight": "600",
            "letterSpacing": "-0.01em"
          }
        ],
        "h2": [
          "clamp(30px, 3.4vw, 44px)",
          {
            "lineHeight": "1.15",
            "fontWeight": "600",
            "letterSpacing": "0"
          }
        ],
        "h3": [
          "22px",
          {
            "lineHeight": "1.3",
            "fontWeight": "600",
            "letterSpacing": "0"
          }
        ],
        "h4": [
          "20px",
          {
            "lineHeight": "1.35",
            "fontWeight": "600",
            "letterSpacing": "0"
          }
        ],
        "h5": [
          "18px",
          {
            "lineHeight": "1.4",
            "fontWeight": "600",
            "letterSpacing": "0"
          }
        ],
        "lead": [
          "20px",
          {
            "lineHeight": "1.6",
            "fontWeight": "400",
            "letterSpacing": "0"
          }
        ],
        "body": [
          "16px",
          {
            "lineHeight": "1.6",
            "fontWeight": "400",
            "letterSpacing": "0"
          }
        ],
        "small": [
          "14px",
          {
            "lineHeight": "1.55",
            "fontWeight": "400",
            "letterSpacing": "0"
          }
        ],
        "caption": [
          "13px",
          {
            "lineHeight": "1.5",
            "fontWeight": "400",
            "letterSpacing": "0"
          }
        ],
        "eyebrow": [
          "12px",
          {
            "lineHeight": "1.4",
            "fontWeight": "600",
            "letterSpacing": "0.12em"
          }
        ],
        "mono": [
          "12px",
          {
            "lineHeight": "1.5",
            "fontWeight": "500",
            "letterSpacing": "0"
          }
        ]
      },
      "borderRadius": {
        "q-xs": "3px",
        "q-sm": "6px",
        "q-md": "8px",
        "q-lg": "10px",
        "q-xl": "16px",
        "q-pill": "999px"
      },
      "boxShadow": {
        "q-md": "0 8px 24px rgba(15, 59, 46, 0.10)",
        "q-lg": "0 24px 60px rgba(15, 59, 46, 0.16)"
      },
      "maxWidth": {
        "q-container": "1240px"
      }
    }
  }
};
