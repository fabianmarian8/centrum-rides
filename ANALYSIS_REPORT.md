# Analýza webu - SEO, Dizajn a Chyby

## 🔴 KRITICKÉ SEO PROBLÉMY

### 1. **Nesúlad jazykov v HTML a meta tagoch**
- **Problém**: `index.html` má `lang="es"`, ale Open Graph tagy sú v slovenčine
- **Dopad**: Vyhľadávače a sociálne siete vidia zmiešané jazyky
- **Riešenie**: Synchronizovať jazyky alebo dynamicky meniť `lang` atribút

### 2. **Nesúlad v Open Graph tagoch**
- **Problém**: OG title a description sú v slovenčine, ale HTML lang je španielčina
- **Súbor**: `index.html` riadky 30-37
- **Riešenie**: Upraviť OG tagy podľa aktuálneho jazyka alebo nastaviť správne hodnoty

### 3. **Nesúlad v Twitter Card tagoch**
- **Problém**: Twitter card obsah je v slovenčine, ale HTML lang je španielčina
- **Súbor**: `index.html` riadky 39-43
- **Riešenie**: Synchronizovať s aktuálnym jazykom

### 4. **Nesúlad v štruktúrovaných dátach (JSON-LD)**
- **Problém**: JSON-LD je v slovenčine, ale HTML lang je španielčina
- **Súbor**: `index.html` riadky 51-79
- **Dopad**: Google môže mať problém s interpretáciou obsahu

### 5. **Hreflang tagy odkazujú na slovenčinu, ktorá nie je podporovaná**
- **Problém**: `hreflang="sk"` existuje, ale aplikácia podporuje len `en` a `es`
- **Súbor**: `index.html` riadok 26
- **Riešenie**: Odstrániť alebo pridať podporu slovenčiny

### 6. **Chýbajúca dynamická zmena lang atribútu**
- **Problém**: `lang` atribút v HTML sa nemení pri prepnutí jazyka
- **Dopad**: Screen readery a vyhľadávače vidia nesprávny jazyk
- **Riešenie**: Dynamicky meniť `document.documentElement.lang`

### 7. **Sitemap má hardcodovaný dátum v budúcnosti**
- **Problém**: `lastmod` je nastavený na `2025-10-08` (budúcnosť)
- **Súbor**: `public/sitemap.xml`
- **Riešenie**: Použiť aktuálny dátum alebo dynamicky generovať

## 🟡 PROBLÉMY S PRÍSTUPNOSŤOU (Accessibility)

### 8. **Konflikt v LocalSeoKeywords komponente**
- **Problém**: Používa `sr-only` aj `aria-hidden="true"` súčasne
- **Súbor**: `src/components/LocalSeoKeywords.tsx` riadok 71
- **Dopad**: Screen readery nebudú čítať obsah
- **Riešenie**: Odstrániť `aria-hidden="true"` alebo `sr-only`

### 9. **Chýbajúce alt texty pre background obrázky**
- **Problém**: HeroSection používa inline style pre background, bez alt textu
- **Súbor**: `src/components/HeroSection.tsx` riadok 82-90
- **Riešenie**: Pridať aria-label alebo použiť `<img>` s alt textom

### 10. **Telefónne číslo ako emoji**
- **Problém**: Telefónne číslo je zobrazené ako emoji (📞), čo môže byť problém pre screen readery
- **Súbor**: `src/components/ContactSection.tsx` riadok 84
- **Riešenie**: Použiť text alebo správny aria-label

## 🟠 PROBLÉMY V KÓDE

### 11. **Hardcodovaný slovenský text v ContactSection**
- **Problém**: Footer obsahuje slovenský text, ktorý nie je v translations
- **Súbor**: `src/components/ContactSection.tsx` riadok 153
- **Riešenie**: Presunúť do translations objektu

### 12. **Chýbajúca validácia telefónneho čísla**
- **Problém**: Telefónne číslo nie je validované
- **Riešenie**: Pridať validáciu a formátovanie

## 🟢 DIZAJN A UX

### 13. **Chýbajúce loading stavy**
- **Poznámka**: Lazy loading má fallback, ale mohli by byť lepšie loading stavy

### 14. **Chýbajúce error boundaries**
- **Poznámka**: Chýbajú error boundaries pre lepšiu error handling

## ✅ POZITÍVNE NÁLEZY

- ✅ Dobrá štruktúra SEO komponentov
- ✅ Použitie structured data (JSON-LD)
- ✅ Responzívny dizajn
- ✅ Použitie semantic HTML
- ✅ Dobrá organizácia kódu
- ✅ Použitie TypeScript
- ✅ Lazy loading komponentov
- ✅ Dobrá accessibility v niektorých častiach (aria-labels)

## ✅ VYKONANÉ OPRAVY

### 1. ✅ Opravené jazykové nesúlady v HTML meta tagoch
- **Opravené**: Open Graph tagy sú teraz v španielčine (zodpovedajú HTML lang="es")
- **Opravené**: Twitter Card tagy sú teraz v španielčine
- **Opravené**: JSON-LD structured data je teraz v španielčine
- **Opravené**: Hreflang tagy teraz odkazujú na `en` a `es` (nie `sk`)

### 2. ✅ Pridaná dynamická zmena lang atribútu
- **Pridané**: `SeoMetadata` komponent teraz dynamicky mení `document.documentElement.lang`
- **Pridané**: Dynamická aktualizácia Open Graph locale tagov
- **Pridané**: Dynamická aktualizácia Twitter Card tagov

### 3. ✅ Opravená prístupnosť LocalSeoKeywords
- **Opravené**: Odstránený konflikt `aria-hidden="true"` s `sr-only`
- **Výsledok**: Screen readery teraz môžu čítať obsah

### 4. ✅ Opravený hardcodovaný slovenský text
- **Opravené**: Footer text v ContactSection je teraz v translations objekte
- **Pridané**: Podpora pre angličtinu aj španielčinu

### 5. ✅ Opravené telefónne číslo
- **Opravené**: Telefónne číslo má teraz správny `aria-label` pre screen readery
- **Opravené**: Emoji je označené ako `aria-hidden="true"`

### 6. ✅ Opravený dátum v sitemap.xml
- **Opravené**: Dátum zmenený z `2025-10-08` na `2025-01-27` (aktuálny dátum)

### 7. ✅ Opravené structured data
- **Opravené**: `paymentAccepted` teraz obsahuje len "Cash" (nie "Card")
- **Opravené**: `availableLanguage` teraz obsahuje len "English" a "Spanish" (nie "Slovak")

## 📋 ZOSTÁVAJÚCE ÚLOHY (Nízka priorita)

1. **Code quality**:
   - Pridanie error boundaries pre lepšiu error handling
   - Pridanie loading states pre lepšiu UX

2. **SEO vylepšenia**:
   - Zvážiť pridanie viac structured data (napr. FAQ schema)
   - Optimalizácia obrázkov (lazy loading, WebP formát)

3. **Performance**:
   - Zvážiť code splitting pre lepšiu performance
   - Optimalizácia fontov (font-display: swap)
