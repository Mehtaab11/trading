### How components are loaded into browser

- constants.ts
  │ (widget config object)
  ▼
- Home.tsx
  │ passes props
  ▼
- TradingViewWidget.tsx

  │ calls hook
  ▼

- useTradingViewWidget.ts
  │ creates DOM + script
  ▼
- TradingView CDN
  │ reads config
  ▼
- Widget renders inside browser
