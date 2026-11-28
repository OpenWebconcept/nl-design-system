# Themes

Deze map bevat de design tokens en de themes die erop gebouwd zijn:

- `design-tokens`: de gedeelde standaardwaarden voor alle componenten, gepubliceerd als `@openwebconcept/design-tokens`.
- `theme-owc`: het standaardtheme van Open Webconcept, gepubliceerd als `@openwebconcept/theme-owc`.
- `theme-*`: één theme per gemeente, gepubliceerd als `@openwebconcept/theme-<slug>`.

## Hoe een theme werkt

Tokens zijn opgebouwd in drie lagen:

1. **Brand** (`owc.*`): de primaire kleur, het lettertype, de typografieschaal, de focus-outline en de vorm van de buttons. Een theme zet deze.
2. **Basis** (`basis.*`): namen volgens NL Design System die naar de brand-laag verwijzen, zoals `basis.text.font-size.md` en `basis.focus.outline-color`.
3. **Componenten** (`nl.*`, `denhaag.*`): de tokens van elk component, die naar de basis- en brand-laag verwijzen.

Een theme overschrijft alleen de brand-laag, plus component-tokens waar de huisstijl afwijkt van wat de brand-laag oplevert (bijvoorbeeld een primaire button in een andere kleur dan de primaire kleur). Al het andere komt uit `design-tokens`.

De build voegt de tokens van `design-tokens` en het theme samen en schrijft `dist/theme.css`, met alle variabelen onder de selector `.theme-<slug>`. `src/index.scss` laadt de lettertypes en `theme.css`, en wordt gecompileerd naar `dist/index.css`, dat Storybook importeert.

## Een gemeentetheme toevoegen

De voorbeelden gebruiken `voorbeeldstad` als slug en `Voorbeeldstad` als naam. De READMEs van de themes, de changesets en de titels van pull requests zijn in het Engels, net als de rest van de repository.

### 1. Zoek de bronnen

Zoek bestaande waarden in deze volgorde, en noteer waar elke waarde vandaan komt:

1. De set van de gemeente in de [theme-repository van Conduction](https://github.com/ConductionNL/conduction-theme/tree/main/municipalities).
2. De set van de gemeente in de [themes-repository van NL Design System](https://github.com/nl-design-system/themes/tree/main/proprietary).
3. De website van de gemeente: meet de waarden in het stylesheet van het theme.

De bestaande sets zijn vaak onvolledig of verouderd. Waar ze afwijken van de website, is de website de bron, en dat staat in de README.

### 2. Maak het theme aan

Kies een slug in kebab-case, zonder diakrieten en met de volledige naam: `sudwest-fryslan`, `de-fryske-marren`. Maak het theme dan aan met:

```bash
pnpm run create-theme voorbeeldstad "Voorbeeldstad"
pnpm install
```

Het script maakt een leeg theme aan in `proprietary/theme-voorbeeldstad/`: `package.json` (versie `0.0.0`), `style-dictionary.config.json`, `src/index.scss`, `README.md` en `LICENSE.md`. De scripts, de dependencies en de build-configuratie neemt het over van `theme-owc`. Verder voegt het het theme toe aan Storybook (de devDependencies in `packages/storybook/package.json` en de imports en de theme-switcher in `packages/storybook/config/preview.ts`) en maakt het de changeset `.changeset/theme-voorbeeldstad.md` aan. `pnpm install` werkt daarna `pnpm-lock.yaml` bij.

Zonder tokens toont het theme de standaardwaarden uit `design-tokens`. Met de tokens uit de volgende stappen ziet het pakket er zo uit:

```text
proprietary/theme-voorbeeldstad/
├── LICENSE.md
├── README.md
├── package.json
├── style-dictionary.config.json
└── src/
    ├── index.scss
    ├── brand/
    │   ├── color.tokens.json
    │   ├── focus.tokens.json
    │   └── typography.tokens.json
    └── components/
        ├── button.tokens.json
        ├── denhaag-button.tokens.json
        └── nl-button.tokens.json
```

Voeg alleen de bestanden toe die je nodig hebt: een theme zonder eigen focus-outline heeft geen `focus.tokens.json`.

### 3. Zet de brand-tokens

| Token                                                        | Gebruikt voor                                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `owc.color.primary`                                          | links, buttons, de focus-outline en de accenten van de meeste componenten |
| `owc.typography.font-family.sans`                            | alle tekst                                                                |
| `owc.typography.font-size.sm`                                | kleine tekst                                                              |
| `owc.typography.font-size.base`                              | bodytekst                                                                 |
| `owc.typography.font-size.lg`                                | introtekst en heading 5                                                   |
| `owc.typography.font-size.xl` t/m `4xl`                      | heading 4 t/m heading 1, en de koppen van process steps                   |
| `owc.typography.line-height.base`                            | bodytekst                                                                 |
| `owc.focus.outline-width`, `outline-style`, `outline-offset` | de focus-outline                                                          |
| `owc.button.*`                                               | de vorm en typografie van alle buttons (Den Haag en NL Design System)     |

Brand-tokens staan in `src/brand/`, `owc.button.*` in `src/components/button.tokens.json`. Bijvoorbeeld:

```json
{
  "owc": {
    "color": {
      "primary": {
        "$value": "#046a38"
      }
    }
  }
}
```

Houd `sm` ≤ `base` ≤ `lg` aan, op elke schermbreedte. `xl` t/m `4xl` hoef je meestal niet te zetten: ze zijn standaard minstens 1,05 keer zo groot als de stap eronder, dus ze schalen mee met een grotere `lg`. Zet ze alleen als de koppen op de website echt andere groottes hebben.

`owc.color.secondary`, `success`, `warning` en `danger` bestaan wel, maar geen enkel component gebruikt ze. Statuskleuren komen uit `basis.color.*`.

### 4. Overschrijf component-tokens waar de huisstijl afwijkt

Overschrijf een component-token alleen als de brand-laag het niet kan uitdrukken:

- **Een primaire button in een andere kleur dan `owc.color.primary`**: zet `denhaag.button.primary-action.*` en `nl.button.primary.*` (achtergrond, rand, hover en active), en ook `nl.button.focus.*`. De NL Design System-button gebruikt `nl.button.focus.*` voor de toetsenbordfocus van elke variant, en die staan standaard op de primaire kleur. Zonder deze override verandert de button dus van kleur bij focus.
- **Een focus-outline in een andere kleur dan de primaire kleur**: zet `basis.focus.outline-color`.
- **Kleur of gewicht van koppen**: zet `nl.heading.level-1.color` t/m `nl.heading.level-6.color`, en `font-weight`.

Bijvoorbeeld een gele primaire button met zwarte tekst:

```json
{
  "nl": {
    "button": {
      "primary": {
        "background-color": { "$value": "#f9b000" },
        "border-color": { "$value": "#f9b000" },
        "color": { "$value": "#000000" },
        "hover": {
          "background-color": { "$value": "#e8a200" },
          "border-color": { "$value": "#e8a200" },
          "color": { "$value": "#000000" }
        },
        "active": {
          "background-color": { "$value": "#e8a200" },
          "border-color": { "$value": "#e8a200" },
          "color": { "$value": "#000000" }
        }
      },
      "focus": {
        "background-color": { "$value": "#e8a200" },
        "border-color": { "$value": "#e8a200" },
        "color": { "$value": "#000000" }
      }
    }
  }
}
```

### 5. Voeg de lettertypes toe

Voeg voor een opensource-lettertype het `@fontsource`-pakket toe, met een exacte versie:

```bash
pnpm --filter @openwebconcept/theme-voorbeeldstad add --save-exact @fontsource/open-sans
```

Importeer daarna in `src/index.scss` elk gewicht dat het theme gebruikt, vóór `theme.css`. De componenten gebruiken 400 voor tekst, 500 en 600 voor tabs en 700 voor koppen, plus het gewicht in `owc.button.font-weight`:

```scss
/* Voorbeeldstad Theme */
@import '@fontsource/open-sans/400.css';
@import '@fontsource/open-sans/500.css';
@import '@fontsource/open-sans/600.css';
@import '@fontsource/open-sans/700.css';

@import './theme.css';
```

Een commercieel lettertype (bijvoorbeeld van Adobe Fonts) kan niet worden meegeleverd. Zet de naam vooraan in `owc.typography.font-family.sans`, gevolgd door fallbacks, en vermeld in de README dat een site een eigen licentie nodig heeft om het te laden.

### 6. Controleer het theme

Bouw het theme en bekijk het in Storybook. `STORYBOOK_THEME` bepaalt met welk theme Storybook opent; via de theme-switcher in de toolbar kun je daarna wisselen:

```bash
pnpm --filter @openwebconcept/theme-voorbeeldstad run build
STORYBOOK_THEME=voorbeeldstad pnpm run storybook
```

Draai de tests met jouw theme. Dat zijn alle stories, inclusief de toegankelijkheidscontroles van axe, zoals het contrast van tekst:

```bash
STORYBOOK_THEME=voorbeeldstad pnpm test
```

Zonder `STORYBOOK_THEME` draaien de tests met het standaardtheme, en een onbekende naam laat de tests direct falen. De tests zien alleen de rusttoestand van elk component. Controleer daarom ook zelf, volgens WCAG 2.2 AA:

- `owc.color.primary` op wit: minstens 4,5:1, omdat links het als tekstkleur gebruiken.
- De tekst van elke button op zijn achtergrond, in rust, bij hover, bij active en bij focus: minstens 4,5:1.
- De focus-outline ten opzichte van de achtergrond: minstens 3:1.
- De typografieschaal, bij 320px, 768px en 1440px breed: `sm` ≤ `base` ≤ `lg`, en ook ≤ `xl` ≤ `2xl` ≤ `3xl` ≤ `4xl` als je die zelf zet.

Sluit af met `pnpm run lint`.

### 7. Documenteer de bronnen

Geef de README een sectie `## Sources`, zoals bij de andere themes:

- Waar en wanneer de waarden gemeten zijn (website, stylesheet en datum).
- Een tabel met elke token, de waarde en waarvoor de website die gebruikt.
- Hoe de bestaande sets zich verhouden tot de website, en waarom de website wel of niet de bron is.
- De bewuste afwijkingen van de website, elk met de reden (bijvoorbeeld WCAG-contrast, leesbaarheid of geen token ervoor).

### 8. Werk de changeset bij

`pnpm run create-theme` heeft `.changeset/theme-voorbeeldstad.md` al aangemaakt, met **major**. Een nieuw theme begint op `0.0.0` en een theme wordt uitgebracht met versie `1.0.0` of hoger, dus de eerste release moet een major zijn. Laat `major` staan en beschrijf wat het theme nu bevat:

```md
---
'@openwebconcept/theme-voorbeeldstad': major
---

Added the Voorbeeldstad theme, measured on voorbeeldstad.nl: the primary colour, the font with the body text sizes and line height, and the button shape and type (`owc.button.*`). The README records where each value comes from.
```

Gebruik na de eerste release gewoon `minor` en `patch`. Changesets die `@openwebconcept/design-tokens` wijzigen, noemen alle themes; neem het nieuwe theme daar voortaan in op.

Bij een release publiceert de publish-workflow het theme naar npm, via npm Trusted Publishing. Dat kan pas als het pakket al op npm staat. Laat daarom vóór de eerste release iemand met owner-rechten op de npm-organisatie `@openwebconcept` dit draaien:

```bash
npx setup-npm-trusted-publish@2.3.1 @openwebconcept/theme-voorbeeldstad \
  --github.repo OpenWebconcept/nl-design-system \
  --github.file publish.yml
```

Dit publiceert een lege versie `0.0.0` en geeft de publish-workflow toestemming om het pakket te publiceren. Schrijf `OpenWebconcept` met hoofdletters: npm vergelijkt de naam hoofdlettergevoelig. Die toestemming vervalt als de workflow niet binnen 2 dagen publiceert, dus doe dit pas als de release-PR klaar is om te mergen.

De Storybook op GitHub Pages bouwt de themes bij elke push naar `main` vanuit de broncode, dus een gemergd theme is daar zonder release al te zien.

### 9. Open een pull request

Open één pull request per theme, met een titel als `feat(theme-voorbeeldstad): added the Voorbeeldstad theme`. CI draait de lint-, build- en testjobs.
