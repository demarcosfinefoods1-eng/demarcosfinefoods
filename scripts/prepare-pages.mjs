import { mkdir, readFile, writeFile } from 'node:fs/promises'

const source = new URL('../dist/index.html', import.meta.url)
const targetDirectory = new URL('../dist/gift-baskets/', import.meta.url)
const target = new URL('index.html', targetDirectory)

const homepage = await readFile(source, 'utf8')
const giftBasketsPage = homepage
  .replace("<title>DeMarco's Fine Foods | Windsor Neighbourhood Grocery</title>", "<title>Custom Gift Baskets Windsor | DeMarco's Fine Foods</title>")
  .replace('Visit DeMarco\'s Fine Foods at 1349 Grand Marais Rd W in Windsor today for fresh produce, fresh bread, Italian foods, beer and wine.', 'Order custom gourmet gift baskets in Windsor from DeMarco\'s Fine Foods. Corporate, holiday, birthday and Italian gourmet gift baskets made to your budget.')
  .replace('https://demarcosfinefoods.ca/" />', 'https://demarcosfinefoods.ca/gift-baskets/" />')
  .replace("DeMarco's Fine Foods | Fresh, Local & Convenient", "Custom Gift Baskets Windsor | DeMarco's Fine Foods")
  .replace('Fresh produce, fresh bread, Italian foods, beer and wine at your Windsor neighbourhood market. Visit DeMarco\'s today.', 'Custom corporate, holiday and gourmet gift baskets made in Windsor for every occasion and budget.')
  .replace('<meta property="og:url" content="https://demarcosfinefoods.ca/" />', '<meta property="og:url" content="https://demarcosfinefoods.ca/gift-baskets/" />')
  .replaceAll('https://demarcosfinefoods.ca/brand/open-graph.png', 'https://demarcosfinefoods.ca/images/gift-baskets/italian-gourmet.jpg')
  .replace("<meta name=\"twitter:title\" content=\"DeMarco's Fine Foods | Windsor, ON\" />", "<meta name=\"twitter:title\" content=\"Custom Gift Baskets Windsor | DeMarco's Fine Foods\" />")
  .replace('Fresh produce, fresh bread, Italian foods, beer and wine—right in your Windsor neighbourhood.', 'Custom corporate, holiday and gourmet gift baskets made in Windsor for every occasion and budget.')

await mkdir(targetDirectory, { recursive: true })
await writeFile(target, giftBasketsPage)
