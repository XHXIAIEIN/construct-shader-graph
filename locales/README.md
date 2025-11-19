## Localization Guide

`locales/i18n.js` loads `translations.csv`, exposes the `t()` helper, and wires a toolbar language switcher whose selection is persisted to `localStorage`. Every UI string should flow through that helper or the `data-i18n*` attributes.

### Everyday usage

```javascript
import { t } from "../locales/i18n.js";

// Plain strings
titleBar.textContent = t("Custom Node");

// Placeholders / tooltips
nameInput.placeholder = t("Enter shader name");
removeBtn.title = t("Remove port");

// Formatting with arguments
alert(t("Uniform {0}", this.uniforms.length + 1));
```

Static markup can declare bindings directly; `applyStaticTranslations()` reruns whenever `csg-language-change` fires:

```html
<!-- Text node -->
<span data-i18n>Export</span>

<!-- Attribute binding -->
<input
  type="text"
  placeholder="Search nodes..."
  data-i18n-placeholder
/>

<!-- Inline + reference text -->
<span data-i18n data-desc="Play" data-desc-inline>播放</span>
```

### Canvas / custom rendering

`t()` works anywhere, even inside canvas drawing code:

```javascript
ctx.font = "bold 14px sans-serif";
ctx.fillText(t("Execution"), node.x + 12, node.y + 18);
```

### Distinguishing identical English phrases

If two contexts use the same English word but need different translations, give them explicit keys:

```html
<span data-i18n="Execution tab label">Execution</span>
<button data-i18n="Execution action label">Execution</button>
```

```javascript
title.textContent = t("Execution tab label");
actionButton.ariaLabel = t("Execution action label");
```

Each key becomes its own row in `translations.csv`, so translators can provide unique phrases even when the fallback text matches.

### Maintaining `translations.csv`

```
key,en-US,zh-CN
dd1ea2903fe04292,Color,颜色
...
```

- Column 1 (`key`) uses the deterministic hash produced by `hashString()` in `i18n.js`. `t()` generates the key automatically the first time it sees a string.  
- Every additional column is a language (`en-US`, `zh-CN`, etc.). Add a column to the header to introduce a new locale.  
- Add new strings by appending rows. Empty cells fall back to the default language automatically.
