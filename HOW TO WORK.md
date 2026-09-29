# Portfolio: Thisu Adithya Weerarathna Jayasooriya

Static website (HTML + CSS + JavaScript). No install, no database, free hosting.

## 1. Files and what each does
| File | Job |
|---|---|
| `index.html` | Page structure (sections). Rarely changed. |
| `css/style.css` | Colours, fonts, layout. Colours are at the top. |
| `js/data.js` | **All your content.** Edit this for updates. |
| `js/main.js` | Builds the page from data.js. Has theme button and project filter. |

## 2. Test on your PC
Double-click `index.html`. It opens in the browser. (Or in VS Code: install "Live Server", right-click index.html, Open with Live Server.)

## 3. Free hosting with GitHub Pages
You already have a repo called `port_folio`.
1. Copy all files of this folder into that repo (`index.html` must be in the root).
2. Commit and push (or use GitHub website: Add file > Upload files).
3. GitHub repo > Settings > Pages > Source: "Deploy from a branch" > Branch: `main` / `/ (root)` > Save.
4. Wait 1-2 minutes. Your site is at:
   `https://adithya-jayasooriya.github.io/port_folio/`
   (Tip: a repo named `adithya-jayasooriya.github.io` gives the shorter link `https://adithya-jayasooriya.github.io`.)

## 4. How to update (simple)
Everything is in `js/data.js`.
- **Add a project:** copy one `{ ... }` block inside `projects`, paste after it (add a comma), change the text.
- **Add a skill:** add `"Skill name"` inside a list in `skills`.
- **Add email/LinkedIn:** fill `contact`. Empty items are hidden.
- **Live demo button:** put a link in `demo`. Empty = button hidden.
- **Change colours:** top of `css/style.css`, change the `--accent` and `--warm` values.
- Save, then push to GitHub. Site updates in about a minute.
- Easiest way without tools: open `data.js` on github.com, click the pencil icon, edit, click "Commit changes".

## 5. Report (use for your HND project report)
**Aim:** Present my skills and projects to employers in one free, easy-to-update website.
**Tools:** HTML5, CSS3, JavaScript, Git, GitHub Pages.
**Design decisions:**
- Content is separated from code (data.js), so updates need no coding knowledge.
- Responsive layout (works on phone and PC), light/dark theme, keyboard focus styles.
- Text is inserted with `textContent`, which prevents HTML injection.
- Static hosting: no server cost, HTTPS included, fast.
**Testing:** open on Chrome and phone, check every link, test with browser zoom 200%.
**Future work:** add a blog, screenshots per project, contact form (Formspree), Google Analytics.

## 6. Improve it next
1. Add a screenshot for each project (`images/stayhub.png`) and show it in the card.
2. Add a short README with screenshots to each GitHub project repo. Employers open those.
3. Upload a PDF CV to the repo and link it from the hero.
4. Pin these 4 project repos on your GitHub profile and add a profile photo.
