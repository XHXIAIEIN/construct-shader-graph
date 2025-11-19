## Localization

Localization is driven by `i18n.js`, which loads `translations.csv` at runtime and exposes a `t()` helper plus a toolbar language switcher (stored in `localStorage`).

```javascript
import { t } from "../locales/i18n.js";

nameInput.placeholder = t("Enter shader name");
titleBar.textContent = t("Custom Node");
alert(t("Level {0}", currentLevel));
```

Markup only needs the `data-i18n*` hooks; `applyStaticTranslations()` re-renders whenever `csg-language-change` fires:

```html
<!-- Text node -->
<span data-i18n>Export</span>

<!-- Attribute binding -->
<input placeholder="Search nodes..." data-i18n-placeholder />

<!-- Inline + secondary text -->
<span data-i18n data-desc="Play" data-desc-inline>播放</span>
```

`translations.csv` holds every string. The first column is the deterministic hash key (via `hashString` in `i18n.js`), and each subsequent column is a language (`key,en-US,zh-CN,...`). Add new languages by appending a column to the header; add new strings by appending rows. Empty cells automatically fall back to the default language.

### Common scenarios

#### Dynamic placeholders

```javascript
const li = document.createElement("li");
li.textContent = t("Uniform {0}", this.uniforms.length + 1);
```

#### Canvas text or custom drawing

```javascript
ctx.font = "bold 14px sans-serif";
ctx.fillText(t("Custom Node"), node.x + 12, node.y + 18);
```

#### Reusing the same English word with different translations

If two contexts share the same English text but need different translations, provide a unique key instead of relying on the literal:

```html
<span data-i18n="Execution tab label">Execution</span>
<button data-i18n="Execution action label">Execution</button>
```

```javascript
title.textContent = t("Execution tab label");
actionButton.ariaLabel = t("Execution action label");
```

Both entries appear as separate rows in `translations.csv`, so translators can supply distinct phrases even though the fallback English is identical.
