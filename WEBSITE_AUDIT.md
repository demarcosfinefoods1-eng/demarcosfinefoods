# DeMarco's Fine Foods — Professional Website Audit

**Audit date:** August 3, 2026

**Primary objective:** Increase physical visits to the Windsor store

**Scope:** Homepage, Gift Baskets page, desktop and mobile layouts, conversion paths, local SEO, accessibility, performance, branding and code quality

**Status:** Audit only. No recommendations in this report have been implemented.

## Executive summary

The website has a strong foundation. It communicates the store's location, products and principal actions quickly; the authentic photography substantially improves local credibility; and the mobile call/directions bar is an excellent foot-traffic mechanism. The design feels premium without losing neighbourhood-market warmth.

The highest-impact weakness is not visual. The after-hours hero currently displays **“Closed now” and “Open today until 8 PM” at the same time**. This contradiction can damage trust precisely when a visitor is deciding whether to drive over. The next priorities are replacing the unverified review placeholder with genuine proof, improving mobile touch targets, removing stale seasonal claims, and allowing the hero image to be discovered before React loads.

### Overall audit scores

| Discipline | Score | Summary |
|---|---:|---|
| User experience | 8/10 | Clear offer and hierarchy; a few conflicting or repetitive messages create hesitation. |
| Conversion | 8/10 | Excellent directions and mobile actions; proof, urgency accuracy and after-hours messaging need work. |
| Trust | 7/10 | Authentic photography and complete NAP are strong; reviews and dynamic availability are not yet authoritative. |
| Mobile | 8/10 | Responsive and free of unintended page-level horizontal scrolling; several links and the menu trigger are undersized. |
| Accessibility | 7/10 | Good semantics and alt text overall; touch targets, contrast, focus treatment and one broken ARIA reference remain. |
| Local SEO | 8/10 | Strong NAP, titles, canonical URLs and LocalBusiness data; client-rendered body and soft-404 behavior are weaknesses. |
| Performance | 8/10 | Responsive WebP, lazy loading and code splitting are good; hero discovery, eager below-fold media and external fonts are the main risks. |
| Branding | 9/10 | Consistent visual language and authentic photography; the temporary “D” mark is less distinctive than the real store identity. |
| Code quality | 7/10 | Sensible components and data separation; metadata, photo and availability logic need consolidation and cleanup. |

---

## 1. User Experience

### What could confuse visitors

1. **Conflicting open/closed information — critical.** After closing time, the hero status says “Closed now · opens tomorrow at 10 AM,” while the proof row still says “Open today until 8 PM.” A visitor may not know which message to trust.
2. **“Visit today” remains active after closing.** Directions can still be useful, but “Stop In Today,” “Visit Today,” “Tonight’s dinner” and “before today’s picks are gone” become inappropriate after hours. Messaging should adapt without removing the route-planning option.
3. **The reviews section visually shows five orange stars without an actual displayed rating.** Although labelled “Google reviews,” it may be interpreted as a five-star claim. The section then sends users away to confirm whether the store is worthwhile.
4. **“What’s Fresh This Week” has no date or update signal.** Visitors cannot tell whether corn, peppers, bread and tomatoes are current, especially when viewing a cached page or returning weeks later.
5. **Product availability language sounds guaranteed.** “Fresh today,” “while supplies last” and exact seasonal products require a reliable update workflow. If inventory differs, confidence declines.
6. **Homepage length is substantial.** The mobile page is roughly 10,700 px tall. Sticky actions prevent this from becoming a serious conversion problem, but some shoppers may never reach the map, full hours or footer.
7. **Several CTAs repeat the same action with different wording.** “Visit Today,” “Stop In Today — Directions,” “Get directions,” “Find it at DeMarco’s today,” “See how close” and “Start Directions” are all directions links. Repetition helps conversion, but inconsistent labels add cognitive load.
8. **The Gift Baskets page does not explain ordering lead time.** Visitors know to call, but not whether same-day baskets are possible, how much notice is preferred, or whether pickup is in-store only.
9. **No visible price guidance for baskets.** “Made to your budget” is reassuring, but even a truthful starting-price or “call for current options” statement would reduce uncertainty if the business can support it.
10. **The exterior is absent.** The current exterior photo was correctly withheld because its visible unit number may conflict with the published address. Until a verified exterior image is supplied, first-time visitors have less visual confirmation that they have reached the right place.
11. **The word “Local” is prominent but not defined.** It may mean locally owned, locally stocked, or locally convenient. Use the claim only in the sense the business can verify.
12. **Unknown routes render the homepage.** Users following a broken URL do not receive a real not-found explanation and may not realize the requested page does not exist.

### Section-by-section UX ratings

| Page / section | Score | Assessment |
|---|---:|---|
| Global header and desktop navigation | 8/10 | Clear, compact and conversion-led. “Visit Today” is strong, but after-hours wording should adapt. |
| Mobile header/menu | 7/10 | Visually clean; the 24×24 px menu control is too small and lacks a clear expanded-menu relationship. |
| Homepage hero | 7/10 | Excellent photograph, hierarchy, address and CTAs. Conflicting after-hours text is the major defect. |
| Trust strip | 8/10 | Quickly reinforces location and convenience; repeats status accurately but duplicates the hero status. |
| What’s Fresh This Week | 7/10 | Strong reason to visit now and authentic images. Needs a visible freshness date and reliable content ownership. |
| Featured Departments | 8/10 | Easy to scan, product-led and authentic. Three identical directions CTAs feel repetitive. |
| Google Reviews | 5/10 | Good intent but currently offers no on-page customer proof and may imply a five-star rating. |
| Homepage Gift Baskets | 8/10 | Distinctive, credible and action-oriented. It is visually long on desktop and eagerly loads media far below the fold. |
| About / neighbourhood store | 8/10 | Authentic interior photography and local positioning build familiarity. Copy could be more specific to the business. |
| Why Shop Here | 7/10 | Clear benefits, but the statements are generic and unsupported by concrete proof. |
| Store Gallery | 8/10 | Authentic and consistent; a verified storefront/entrance image would improve arrival confidence. |
| Visit Us | 9/10 | Strongest conversion section: status, full NAP, hours, phone, map, directions and social links are together. |
| Homepage footer | 8/10 | Complete and professional. Low-contrast legal/support text and small phone link need attention. |
| Mobile sticky actions | 9/10 | Excellent for foot traffic; appropriately persistent and clearly separates calling from driving. |
| Gift Baskets hero | 9/10 | Clear Windsor positioning, strong product photo and two obvious actions. |
| Gift Baskets gallery | 8/10 | Authentic products and direct call links. Repeated small “Call to customize” targets are undersized. |
| Gift Baskets occasions | 8/10 | Quickly answers “is this for my occasion?” without adding friction. |
| Gift Baskets order section | 9/10 | Strong close with phone, address and hours. Add verified lead-time expectations if available. |
| Gift Baskets footer | 6/10 | Very minimal; it omits full NAP, hours and social trust signals found on the homepage footer. |

---

## 2. Conversion

### What would most increase store visits

#### Highest priority

1. **Make every time-sensitive message use one authoritative store-status state.** When open, show “Open now · closes at X.” Before opening, show “Opens today at X.” After closing, use “Plan tomorrow’s stop” or “Get directions for tomorrow,” not “Open today.”
2. **Place verified review proof on the page.** Show the real Google rating, review count and 2–3 current reviews only if obtained and kept compliant with Google’s display requirements. Until then, remove the decorative five-star implication.
3. **Add a visible update date to weekly products.** Example: “Fresh picks updated Aug. 3” or “This week at DeMarco’s.” Give the owner one simple data file to update.
4. **Use a verified storefront/entrance photograph.** A first-time visitor should recognize the exterior while arriving. Confirm the visible address/unit before publishing.
5. **Preserve the mobile sticky Call and Directions actions.** They are the most direct conversion controls on the site and should remain visible, large and thumb-friendly.

#### Medium priority

6. **Standardize direction CTA language.** Use one primary label, such as “Get Directions,” and a context-aware variant such as “Drive Here Today” only when the store is open. Consistency improves recognition.
7. **Add concrete arrival reassurance if verified.** Parking availability, plaza/entrance description, major intersection, or travel-time anchors can remove the final uncertainty before a drive.
8. **Make weekly availability honest and operational.** If updates cannot be guaranteed weekly, call the section “Fresh Picks at DeMarco’s” and avoid inventory promises.
9. **Clarify basket ordering friction.** Add truthful lead time, pickup method and price guidance only if the store confirms them. This primarily increases calls and planned visits.
10. **Connect gallery images to reasons to visit.** Short captions can identify “fresh bread,” “local beer & wine,” or “Italian pantry staples” without changing the gallery layout.

#### Lower priority

11. Track anonymous clicks on directions, phone, Instagram, gift-basket calls and map interactions. Use privacy-conscious analytics to understand which sections drive action.
12. Add `utm_source=website` parameters where appropriate for social links, but do not alter the Google Directions API URL that is already correct.
13. Consider one small “Open now” indicator in the fixed header on desktop if testing shows users miss the hero status. Do not add it without conversion evidence.

### Recommended conversion metrics

- Directions clicks by page and section
- Mobile call clicks
- Gift-basket call clicks
- Google Reviews outbound clicks
- Instagram/Facebook clicks
- Percentage of visitors reaching the Visit Us section
- Organic searches containing the store name versus non-brand local terms

Do not treat website sessions as the primary success metric. The useful KPI is a direction/call action that plausibly leads to an in-store visit.

---

## 3. Trust

### Current strengths

- Authentic store and product photography
- Complete, repeated name/address/phone information
- Clear hours and live status
- Direct Google Maps route
- Visible social profiles
- Real gift-basket products and recognizable packaging
- LocalBusiness/GroceryStore structured data

### Recommended trust improvements

1. Correct the contradictory after-hours messaging immediately.
2. Replace the review placeholder with verified rating/review data, or present a neutral “Read our Google reviews” link without five filled stars.
3. Verify that the address, map pin and JSON-LD coordinates exactly match the Google Business Profile.
4. Publish a current exterior image only after confirming the visible unit/address.
5. Add specific, verifiable business details: years serving Windsor, locally owned status, accessible entrance, parking, accepted payment methods or bottle-return services only if true.
6. Establish an owner-visible “last updated” process for hours, closures, weekly products and seasonal hero changes.
7. Add holiday-hour handling. Structured data and on-page status currently assume normal weekly hours.
8. Avoid unsupported scarcity. “Before today’s picks are gone” is effective only when it reflects real turnover.
9. Ensure every basket image remains labelled as an example because contents and availability can vary.

---

## 4. Mobile

### Pages reviewed

- Homepage at 390×844
- Gift Baskets page at 390×844
- Desktop cross-check at 1440×900

### What works well

- No unintended page-level horizontal scroll was detected.
- The hero, department cards, gift baskets, gallery and Visit Us layout adapt cleanly.
- Primary hero buttons become full width.
- Sticky Call and Directions actions are 48 px high and remain easy to reach.
- Gift-basket order actions are prominent and stacked.
- Mobile type remains readable, with strong contrast in the main conversion areas.

### Remaining mobile issues

1. **Menu button is 24×24 px.** Increase the interactive box to at least 44×44 px while keeping the icon visually unchanged.
2. **Several text links are 17–29 px high.** Weekly card links, department links, “Explore Gift Baskets,” “See how close,” “Back to DeMarco’s,” basket customize links and footer links need larger hit areas.
3. **Logo/home link is approximately 38 px high.** Add invisible padding to reach the target size without changing appearance.
4. **Gift page H1 occupies roughly 188 px vertically.** It remains readable but pushes the photo below the first viewport. Consider a slightly smaller font only below 360–390 px if user testing shows the image is important above the fold.
5. **Horizontal card rails need a visual continuation cue.** A partially visible next card currently helps, but adding accessible instructions or snap behavior feedback would improve discoverability.
6. **The mobile page is very long.** Sticky actions mitigate this. Do not compress sections solely for length; instead remove weak or unverified content such as the empty review block.
7. **Fixed sticky actions can cover the final footer area.** Extra footer padding is present, but verify with iPhone safe areas and Android browser chrome before launch.
8. **Mobile navigation needs stronger behavior details.** Add `aria-controls`, Escape-to-close, focus return and a 44 px trigger; ensure hash navigation closes and lands below the fixed header.
9. **Text under 12 px is used for labels.** Small uppercase labels are visually acceptable in some contexts, but 9–10 px brand and metadata text should not carry essential information.

---

## 5. Accessibility

### Positive findings

- Document language is `en-CA`.
- One H1 exists on each rendered page.
- Heading hierarchy is generally logical.
- Main, navigation, header and footer landmarks are present after rendering.
- Authentic images have descriptive, contextual alt text.
- Social icon links have accessible names.
- The Google map iframe has a title and lazy loading.
- Reduced-motion preferences are respected.
- Buttons and primary mobile actions have strong visual contrast.

### Remaining WCAG improvements

1. **Broken ARIA reference:** `What's Fresh This Week` uses `aria-labelledby="weekly-title"`, but no element has `id="weekly-title"`. The section is therefore unnamed to assistive technology. **WCAG 1.3.1 / 4.1.2.**
2. **Touch target sizes:** the menu trigger and multiple links are below 44×44 px. **WCAG 2.5.8 Target Size (Minimum), WCAG 2.2 AA.**
3. **No skip link:** keyboard users must traverse the header on every page before reaching content. Add “Skip to main content.” **WCAG 2.4.1.**
4. **Focus styling is not intentionally designed.** Browser defaults may appear, but all links, buttons, cards and navigation controls should receive a consistent, high-contrast `:focus-visible` style. **WCAG 2.4.7 and 2.4.11.**
5. **Low contrast metadata:** Visit Us labels use `#9a9f9a` on white at approximately **2.69:1**; footer-bottom text at 40% white on `#102f1c` is approximately **3.56:1**. Both fail 4.5:1 for normal-size text. **WCAG 1.4.3.**
6. **Mobile menu relationship:** the toggle has `aria-expanded` but no `aria-controls`, and it does not announce a changing “Open/Close menu” name. Improve the relationship and state text. **WCAG 4.1.2.**
7. **Loading fallback:** the Suspense fallback has an accessible label but no visible or announced status. If loading is perceptible, use `role="status"` with concise text.
8. **Decorative icons:** many Lucide icons are exposed unless implicitly ignored. Add `aria-hidden="true"` to icons when adjacent text already conveys the meaning.
9. **Review stars:** filled stars in the empty-review state have the accessible label “Google reviews,” not a verifiable rating. Avoid a visual or semantic rating claim until real data is present.
10. **External links:** optional—communicate that Google Maps/reviews/social links open a new tab, especially for assistive-technology users.
11. **Map alternative:** the surrounding address and directions link provide a good alternative; retain them if the map changes.
12. Run automated axe/Lighthouse accessibility checks and complete keyboard, VoiceOver and zoom-to-200% manual tests before launch. Code inspection alone cannot certify WCAG compliance.

---

## 6. Local SEO

### Titles

- **Homepage:** `DeMarco's Fine Foods | Windsor Neighbourhood Grocery` — strong brand, city and category alignment.
- **Gift Baskets:** `Custom Gift Baskets Windsor | DeMarco's Fine Foods` — strong primary local query alignment.
- Keep titles under typical display limits and avoid adding more keyword variants.

### Meta descriptions

- Homepage description is specific, locally relevant and visit-oriented.
- Gift Baskets description naturally includes corporate, holiday, birthday and Italian gourmet terms.
- Avoid relying on `meta keywords`; modern search engines do not use it for rankings.

### Structured data

**Strengths:** `LocalBusiness` + `GroceryStore`, NAP, geo coordinates, hours, map, social profiles, area served, image and gift-basket offer are present.

**Improvements:**

1. Verify latitude/longitude and `hasMap` against the canonical Google Business Profile.
2. Add `logo` and a current store photograph separate from the Open Graph image.
3. Add `sameAs` only for controlled, current profiles.
4. Model gift baskets with page-specific `Product`, `ItemList` or `OfferCatalog` markup only when prices/availability can be kept accurate.
5. Do not add review/rating schema until reviews are genuinely displayed and policy-compliant.
6. Handle special/holiday hours with `specialOpeningHoursSpecification` when applicable.
7. Validate the final production pages using Google Rich Results Test and Schema.org Validator.

### Internal links

- Main navigation connects the homepage, Gift Baskets page and key homepage sections.
- The Gift Baskets page has a clear return path.
- Hash links are descriptive, but unknown URLs currently render the homepage and create a **soft 404**. Add a real not-found route with `noindex` behavior.
- A simple contextual link from Italian Foods or Fresh Bread to Gift Baskets may help discovery, but only if it does not distract from store-visit CTAs.

### Image alt text

- Current alt text is specific, honest and locally contextualized without obvious keyword stuffing.
- Keep decorative background imagery empty-alt if it does not add information.
- Avoid repeating “DeMarco’s Fine Foods in Windsor” on every nearby image; diversity and accuracy are preferable to keyword repetition.

### Canonical URLs

- Homepage and Gift Baskets canonical URLs are correct for the current GitHub Pages domain.
- If a custom domain is adopted, update canonical, Open Graph, sitemap, JSON-LD `@id`, manifest start URL and all absolute image URLs together.
- The client hook changes title/description/canonical during SPA navigation; the build script provides static Gift Baskets metadata for direct visits. This dual system can drift and should be consolidated.

### Open Graph and Twitter Cards

- Homepage has complete OG and Twitter basics, including large image dimensions and alt text.
- The build script supplies Gift Baskets-specific title, description, URL and image for direct visits.
- The client-side SEO hook does **not** update OG/Twitter tags during SPA navigation. This usually does not affect social crawlers that request the URL directly, but it creates inconsistent document state and maintenance risk.
- Add `og:locale="en_CA"`, `twitter:image:alt`, and ensure `og.png` represents the current authentic photography and branding.

### Indexability concern

The static HTML body contains only an empty React root. Google usually renders JavaScript, but local-business SEO is more robust when meaningful page content is pre-rendered. Pre-render the homepage and Gift Baskets body during the build while retaining the same React design. This is an implementation change, not a redesign.

### Sitemap and robots

- Both valid routes are listed and crawling is allowed.
- Update `<lastmod>` automatically during content releases; it currently requires manual maintenance.
- The 404 file redirects every missing URL to the homepage, contributing to soft-404 behavior.

---

## 7. Performance

### Core Web Vitals assessment

No production field data or Lighthouse score was available in this audit, so the following is a code- and rendered-layout risk assessment, not a measured CrUX result.

| Metric | Expected risk | Findings |
|---|---|---|
| LCP | Moderate | Hero WebP is ~333 KB at 1600 px, but React must load before the browser discovers it. `fetchPriority="high"` helps only after hydration. External Google Fonts can also delay final text rendering. |
| CLS | Low | Major media containers have fixed heights/dimensions and the layout showed no page-level overflow. Font swapping may cause minor text shifts. |
| INP | Low–moderate | Interactions are simple, but the initial shared JavaScript is approximately 360 KB uncompressed across the main/shared chunks. Framer Motion and icon imports add parse cost. |

### Current strengths

- WebP with JPEG fallbacks
- Responsive hero sizes
- Lazy loading on 17 non-critical homepage images
- Route-level React code splitting
- Lazy Google map iframe
- PWA service worker and manifest
- Reduced-motion support
- Production build succeeds

### Performance recommendations

1. **Preload the active hero WebP in static HTML** or pre-render its `<picture>` so it is discovered before React. This is the most direct LCP improvement.
2. **Do not eagerly load the homepage gift-basket image.** It is roughly five sections below the fold yet currently uses `loading="eager"` and `fetchPriority="high"`. Keep eager priority only on the Gift Baskets page hero.
3. **Self-host and subset Poppins/Inter** or use a system-font fallback strategy to remove third-party font DNS/TLS and privacy dependencies.
4. **Remove obsolete Unsplash runtime caching.** No Unsplash images remain, but the PWA still contains an Unsplash cache rule.
5. **Audit unused generated media.** The public image library is about 17 MB, including unused old hero assets and large variants that some components never request. Remove only after confirming no OG/PWA references.
6. **Use appropriate `sizes` per layout.** The generic photo component uses `50vw` for every non-mobile placement, even when cards occupy substantially less or more space.
7. **Consider AVIF for the hero and large store views** after visual comparison; keep WebP/JPEG fallbacks. Do not accept quality loss on packaging or store details.
8. **Pre-render page content.** Besides SEO, this reduces the blank React-loading interval visible on slower devices.
9. **Review shared bundle composition.** The built assets include a ~233 KB main chunk and ~130 KB shared chunk before gzip. Confirm tree-shaking for Lucide and whether Framer Motion is worth its cost across all sections.
10. **Cache local image assets intentionally.** Current Workbox runtime caching targets old Unsplash URLs, so offline image behavior does not match the new local library.
11. Test production, not the development server, with Lighthouse mobile throttling. Target LCP ≤2.5 s, INP ≤200 ms and CLS ≤0.1 at the 75th percentile.

---

## 8. Branding

### Typography

- Poppins headlines and Inter body text are consistent, contemporary and legible.
- The large headline style feels premium and supports rapid scanning.
- Small 9–10 px uppercase labels are overused. Increase essential labels without changing the visual system.

### Colors

- Forest green, warm orange, cream and white are applied consistently.
- Orange is used effectively for conversion actions and emphasis.
- The palette feels closer to a premium neighbourhood market than a generic grocery template.
- Correct the two low-contrast secondary-text usages without changing palette identity.

### Photography

- The authentic images are now the strongest brand asset.
- Brightness, temperature and colour treatment feel consistent.
- Product packaging and store fixtures remain recognizable.
- Add a verified exterior image and, eventually, one real team/service moment to deepen familiarity.
- Keep seasonal heroes authentic; do not use generated seasonal décor or invented displays.

### Messaging

- “Fresh. Local. Convenient.” is clear and memorable.
- “Dinner and drinks in one stop” is specific and conversion-oriented.
- “Neighbourhood” and Windsor references successfully localize the offer.
- Generic phrases such as “friendly local service” need supporting evidence or more specific language.
- Time-sensitive language must be consistent with actual open status and inventory.

### Identity consistency

- The text-based circular “D” mark is clean but does not match the recognizable physical-store signage shown in photography.
- If a production-quality official logo exists, use it in the header, favicon, PWA icons, OG image and structured-data `logo`. Do not recreate the logo from photos.

---

## 9. Code Quality

### Strengths

- Reusable components for header, mobile actions, images, reviews, headings and motion
- Central store data and directions URL
- Typed seasonal hero configuration
- Page-level lazy loading
- Correct GitHub Pages base path
- Clear responsive breakpoints
- Descriptive data-driven arrays for products and gallery

### Cleanup opportunities

1. **Rename `PhotoPlaceholder`.** It now renders production photography; a name such as `ResponsiveStoreImage` better reflects responsibility.
2. **Remove stale CSS:** `.department-card:hover > .photo-placeholder .photo-pattern` refers to a removed placeholder element.
3. **Remove obsolete Unsplash PWA caching.** It no longer matches the codebase.
4. **Consolidate SEO configuration.** Metadata is split across `index.html`, `usePageSeo`, `prepare-pages.mjs` and structured JSON. One typed source should generate static and client tags.
5. **Consolidate business facts.** Address, hours, URLs and descriptions are repeated in JSX, HTML, schema and build scripts. Repetition creates drift risk.
6. **Separate `store.ts`.** Store facts, gift baskets, reviews, weekly products, departments and gallery could be separate focused data modules.
7. **Fix status derivation.** Return a complete context-aware message/CTA model from `useStoreStatus` rather than combining dynamic and hardcoded text in the page.
8. **Refresh store status over time.** `useMemo` calculates once; an open tab can display stale status across opening or closing time. Recalculate on a modest interval and on visibility change.
9. **Add holiday-hours support.** Weekly rules alone cannot represent closures or special days.
10. **Use semantic lists where appropriate.** Weekly cards, departments and galleries are collections and could use `<ul>/<li>` without visual changes.
11. **Repair ARIA IDs.** Extend `SectionHeading` to accept an ID and ensure `aria-labelledby` always points to an existing element.
12. **Add a real 404 route.** The catch-all currently renders the homepage.
13. **Add tests for critical conversion facts:** directions URL, phone URL, hours, status labels, page metadata, seasonal hero config and route rendering.
14. **Add automated accessibility checks** with axe and a small set of Playwright viewport tests.
15. **Review repository hygiene.** Generated TypeScript/Vite outputs and unrelated scaffold folders exist untracked locally; ensure `.gitignore` and deployment scope remain intentional.

---

## 10. Prioritized Action Plan

### Critical

1. **Fix the open/closed contradiction** and make all “today” messaging/status CTAs context-aware.
2. **Remove any implied five-star claim until real Google review data is displayed.** Replace with verified rating/count/reviews or a neutral outbound link.
3. **Establish a reliable weekly-content update process** with a visible date; remove or generalize stale products when the store cannot verify availability.
4. **Fix the broken `aria-labelledby="weekly-title"` reference.**
5. **Increase the mobile menu trigger and essential action links to minimum touch-target sizes.**

### Important

1. Preload or pre-render the hero to improve LCP.
2. Stop eagerly loading the below-fold homepage basket image.
3. Add strong `:focus-visible` styles and a skip link.
4. Correct Visit Us label and footer-bottom contrast failures.
5. Add a genuine 404 page and prevent soft-404 homepage rendering.
6. Verify the map pin, geo coordinates, NAP and storefront/unit against the Google Business Profile.
7. Add a verified current exterior image once address details are confirmed.
8. Consolidate metadata/business facts into one source of truth.
9. Pre-render meaningful page body content for more reliable local indexing and faster first paint.
10. Remove obsolete Unsplash caching and configure PWA caching for local responsive assets.
11. Make Gift Basket ordering expectations clearer using confirmed lead time, pickup and budget information.
12. Add privacy-conscious direction/call conversion tracking.

### Nice to Have

1. Adopt the official DeMarco's logo across header, favicon, PWA and OG assets if a production file is available.
2. Add verified parking/intersection/entrance guidance.
3. Add concise gallery captions tied to visit reasons.
4. Self-host/subset fonts.
5. Add AVIF versions after visual QA.
6. Refactor `PhotoPlaceholder` and split large data modules.
7. Add page-specific gift-basket structured data when pricing and availability can be maintained.
8. Add automated Lighthouse, axe and viewport regression checks to CI.
9. Add special holiday-hours support and seasonal content expiry dates.
10. Test alternative CTA wording using real call/directions click data rather than preference.

## Recommended approval sequence

If implementation is approved, address the **Critical** items first in one focused change, verify them on desktop/mobile, then complete the **Important** accessibility/performance/SEO work. Preserve the existing visual design throughout.
