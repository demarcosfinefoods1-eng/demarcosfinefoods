# DeMarco's Fine Foods Image Selection Report

Status: **Approved and implemented locally; included with the image-update commit.**

Final approval update: a seasonal hero configuration is now implemented in `src/data/hero.ts`. The approved real-store hero remains the default. Summer, Fall, Christmas and Spring entries are ready and currently fall back to that same image until matching authentic seasonal photos are supplied. Switching seasons changes one configuration value and does not modify the homepage layout.

The website layout has not been redesigned. Existing photo placeholders and the previous composite hero were replaced with authentic DeMarco's photography. Corrections were deliberately restrained: +2.5% brightness, +3.5% contrast, -1.5% saturation, gentle unsharp masking, EXIF orientation correction, responsive resizing, and intelligent CSS cropping. No generative editing, product replacement, package alteration, shelf invention, or background fabrication was used.

## Final section assignments

| Website section | Selected source image | Why it was selected |
|---|---|---|
| Homepage Hero | `ChatGPT Image Aug 1, 2026, 11_20_02 AM.png` | The strongest five-second overview of the real store: produce in the foreground, Italian pantry staples, a clear aisle, and the entrance in one frame. It immediately communicates a convenient neighbourhood market and supports legible headline/CTA overlays. |
| What's Fresh — Sweet Corn | `file_000000006c5c820d82d7b1b6b1cf2fd5.png` | Shows the actual in-store corn arrival at useful scale and reinforces weekly freshness and abundance. |
| What's Fresh — Bell Peppers | `WhatsApp Image 2026-08-02 at 14.22.40.jpeg` | The best close produce detail: full trays, strong natural colour variety, recognizable merchandise, and no misleading styling. |
| What's Fresh — Fresh Bread | `WhatsApp Image 2026-08-02 at 14.27.33.jpeg` | Shows multiple real Lakeside loaves on the store shelf and works well in the compact weekly card crop. |
| What's Fresh — Tomatoes | `WhatsApp Image 2026-08-02 at 14.24.03.jpeg` | Clear, authentic fresh tomatoes with enough product density for a small responsive card. |
| What's Fresh — Italian Pantry Picks | `ChatGPT Image Aug 1, 2026, 11_24_45 AM.png` | Clearly shows Italian olive oils and pantry products alongside produce, grounding the offer in the real store. |
| Featured Department — Fresh Produce | `ChatGPT Image Aug 1, 2026, 11_22_34 AM.png` | The strongest real produce display: tomatoes, carrots, celery and potatoes on DeMarco's distinctive wood fixtures. |
| Featured Department — Beer & Wine | `ChatGPT Image Aug 1, 2026, 11_14_29 AM.png` | The dedicated real “Locally Crafted” cooler gives immediate product recognition and category trust. |
| Featured Department — Italian Foods | `ChatGPT Image Aug 1, 2026, 11_24_45 AM.png` | Best wide view of Italian oils and pantry products within the actual market environment. |
| Gift Basket section and page — Italian Gourmet | `ChatGPT Image Aug 2, 2026, 01_22_23 PM.png` | Clean, complete basket, premium presentation, faithful packaging, and the strongest Italian assortment. |
| Gift Basket section and page — Celebration | `ChatGPT Image Aug 2, 2026, 01_34_33 PM.png` | Bright, full basket with preserves and chocolates; visually distinct from the other selections. |
| Gift Basket section and page — Coffee & Comfort | `ChatGPT Image Aug 2, 2026, 01_36_09 PM.png` | Includes the real DeMarco's interior and sign, creating strong store authenticity. |
| Gift Basket section and page — DeMarco's Signature | `ChatGPT Image Aug 2, 2026, 01_37_59 PM.png` | Includes DeMarco's house blend and a balanced gourmet assortment that visibly connects the product to the store. |
| About / Store Interior | `ChatGPT Image Aug 1, 2026, 11_08_09 AM.png` | Portrait composition fits the existing layout and shows the actual entrance aisle, bread display, fixtures and DeMarco's wall sign. |
| Gallery — Interior | `ChatGPT Image Aug 1, 2026, 11_08_09 AM.png` | Best portrait overview for the gallery's tall lead tile. |
| Gallery — Produce | `ChatGPT Image Aug 1, 2026, 11_22_34 AM.png` | Strongest produce-led store view. |
| Gallery — Bread | `WhatsApp Image 2026-08-02 at 14.27.19.jpeg` | Clear, recognizable Lakeside sourdough in the real shelf setting. |
| Gallery — Italian Foods | `ChatGPT Image Aug 1, 2026, 11_24_45 AM.png` | Broad, recognizable selection of Italian pantry staples in context. |
| Gallery — Beer & Wine | `ChatGPT Image Aug 1, 2026, 11_14_29 AM.png` | Strongest dedicated beverage view. |
| Visit Us | Existing interactive Google map retained | The map is more useful for foot-traffic conversion than replacing it with a photo. The surrounding section retains direct address, hours, phone and directions CTA. |

## Full uploaded-library categorization

| # | Uploaded image | Category | Decision and reason |
|---:|---|---|---|
| 1 | `WhatsApp Image 2026-08-02 at 12.52.10.jpeg` | Gift Baskets / Do Not Use | Personalized birthday label and harsh flash make it less reusable than the selected basket photographs. |
| 2 | `WhatsApp Image 2026-08-02 at 12.52.34.jpeg` | Gift Baskets / Gallery | Strong authentic environmental basket photo; held as a future alternate because the approved polished version of this basket is already in use. |
| 3 | `WhatsApp Image 2026-08-02 at 12.52.46.jpeg` | Gift Baskets | Strong real basket on a clean red wall; held as a future alternate because the approved polished signature image is stronger. |
| 4 | `WhatsApp Image 2026-08-02 at 12.55.31.jpeg` | Gift Baskets / Do Not Use | Back-room tools and preparation clutter reduce customer-facing quality. |
| 5 | `WhatsApp Image 2026-08-02 at 14.22.16.jpeg` | Fresh Produce / Weekly Specials | Good citrus detail, but less distinctive and less full than the selected produce frames. |
| 6 | `WhatsApp Image 2026-08-02 at 14.22.40.jpeg` | Fresh Produce / Weekly Specials | **Used** for weekly bell peppers. |
| 7 | `WhatsApp Image 2026-08-02 at 14.22.44.jpeg` | Fresh Produce | Good green-pepper detail; not used because image 6 provides stronger colour variety. |
| 8 | `WhatsApp Image 2026-08-02 at 14.24.02 (1).jpeg` | Fresh Produce / Do Not Use | Tight, packaging-heavy carrot frame with weaker composition. |
| 9 | `WhatsApp Image 2026-08-02 at 14.24.02.jpeg` | Fresh Produce / Do Not Use | Partly empty tray and uneven composition. |
| 10 | `WhatsApp Image 2026-08-02 at 14.24.03.jpeg` | Fresh Produce / Weekly Specials | **Used** for weekly tomatoes. |
| 11 | `WhatsApp Image 2026-08-02 at 14.25.48 (1).jpeg` | Fresh Produce / Do Not Use | Sparse apple tray and unrelated lower-shelf products. |
| 12 | `WhatsApp Image 2026-08-02 at 14.25.48 (2).jpeg` | Fresh Produce / Do Not Use | Sparse green-apple tray with too much empty display area. |
| 13 | `WhatsApp Image 2026-08-02 at 14.25.48.jpeg` | Fresh Produce / Do Not Use | Sparse orange tray and weak visual abundance. |
| 14 | `WhatsApp Image 2026-08-02 at 14.25.49 (1).jpeg` | Fresh Produce / Do Not Use | Only three blueberry packs and excessive cooler background. |
| 15 | `WhatsApp Image 2026-08-02 at 14.25.49.jpeg` | Fresh Produce / Weekly Specials | Useful banana alternate, but stronger produce images were selected. |
| 16 | `WhatsApp Image 2026-08-02 at 14.26.58.jpeg` | Bakery | Useful Calabrese bread alternate; not used to avoid near-duplicate bread tiles. |
| 17 | `WhatsApp Image 2026-08-02 at 14.27.19.jpeg` | Bakery / Gallery | **Used** in the gallery. |
| 18 | `WhatsApp Image 2026-08-02 at 14.27.33.jpeg` | Bakery / Weekly Specials | **Used** for weekly fresh bread. |
| 19 | `WhatsApp Image 2026-08-02 at 14.28.31.jpeg` | Bakery | Useful multigrain alternate; not used to avoid repetition. |
| 20 | `WhatsApp Image 2026-08-02 at 14.28.56.jpeg` | Bakery / Do Not Use | National-brand tortilla packaging does not convey DeMarco's premium local identity. |
| 21 | `WhatsApp Image 2026-08-02 at 14.29.06.jpeg` | Bakery / Do Not Use | Packaging-heavy pita shot is less appetizing than the real loaf images. |
| 22 | `ChatGPT Image Aug 1, 2026, 10_48_37 AM.png` | Store Exterior / Do Not Use | The visible unit number `108` may conflict with the published Grand Marais address; intentionally withheld until location details are confirmed. |
| 23 | `ChatGPT Image Aug 1, 2026, 11_08_09 AM.png` | Store Interior / Gallery / Hero alternate | **Used** for About and Gallery; best portrait/mobile interior frame. |
| 24 | `ChatGPT Image Aug 1, 2026, 11_14_29 AM.png` | Beer & Wine / Gallery | **Used** for the department and gallery. |
| 25 | `ChatGPT Image Aug 1, 2026, 11_16_34 AM.png` | Store Interior / Do Not Use | Lottery counter dominates and distracts from the fresh-food visit proposition. |
| 26 | `ChatGPT Image Aug 1, 2026, 11_20_02 AM.png` | Hero / Store Interior / Gallery | **Used** as the homepage hero. |
| 27 | `ChatGPT Image Aug 1, 2026, 11_22_34 AM.png` | Hero alternate / Fresh Produce / Gallery | **Used** for produce and gallery. |
| 28 | `ChatGPT Image Aug 1, 2026, 11_24_45 AM.png` | Italian Foods / Fresh Produce / Store Interior / Gallery | **Used** for Italian Foods, weekly picks and gallery. |
| 29 | `ChatGPT Image Aug 1, 2026, 11_26_33 AM.png` | Fresh Produce / Gallery | Good category sign and cooler view; retained as a future alternate. |
| 30 | `ChatGPT Image Aug 1, 2026, 11_27_35 AM.png` | Do Not Use | Exact duplicate of image 29. |
| 31 | `file_000000006c5c820d82d7b1b6b1cf2fd5.png` | Weekly Specials / Fresh Produce | **Used** for Ontario sweet corn. |
| 32 | `file_0000000032c881fb9b6e56051d00ffb5.png` | Weekly Specials / Do Not Use | Isolated styled corn image lacks clear in-store identity. |
| 33 | `file_00000000553481fb9fb7adc1240855c4.png` | Weekly Specials / Do Not Use | Promotional graphic looks created rather than photographed and conflicts with the authenticity requirement. |

## Performance and implementation

- Store photographs: responsive 480 px and 800 px WebP plus progressive JPEG fallbacks; 1200 px and 1600 px variants are also available for wide source images.
- Hero: responsive 800/1200/1600 WebP and JPEG, eager loading, `fetchPriority="high"`.
- Gift baskets: responsive 480/800/1200 WebP and JPEG.
- All non-critical photographs: native lazy loading and async decoding.
- Alt text: rewritten to describe the actual visible products, store area and Windsor context without keyword stuffing.
- Build verification: production TypeScript/Vite/PWA build passes.

## Approval

The image selection, authentic enhancements, responsive replacements and seasonal hero configuration were approved for commit.
