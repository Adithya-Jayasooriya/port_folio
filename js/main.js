/* Reads DATA (from data.js) and builds the page. You rarely need to edit this file. */

// Small helper: create an element with a class and text
function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;   // textContent is safe (no HTML injection)
  return e;
}
const $ = (id) => document.getElementById(id);

// ---- Fill hero, about, footer ----
$("logo").textContent = DATA.shortName;
$("name").textContent = DATA.fullName;
$("role").textContent = DATA.role;
$("tagline").textContent = DATA.tagline;
$("githubBtn").href = DATA.github;
$("about-text").textContent = DATA.about;
$("footer").textContent = "© " + new Date().getFullYear() + " " + DATA.fullName;

// ---- Education timeline ----
DATA.education.forEach((item) => {
  const li = el("li");
  li.append(el("b", "", item.title), el("span", "", item.place + " · " + item.when));
  $("edu").append(li);
});

// ---- Skills ----
Object.entries(DATA.skills).forEach(([group, items]) => {
  const box = el("div");
  const ul = el("ul");
  items.forEach((s) => ul.append(el("li", "", s)));
  box.append(el("h3", "", group), ul);
  $("skillList").append(box);
});

// ---- Projects + filter buttons ----
function showProjects(type) {
  const grid = $("projectGrid");
  grid.innerHTML = "";
  DATA.projects
    .filter((p) => type === "All" || p.type === type)
    .forEach((p) => {
      const card = el("article", "project");
      const links = el("div", "links");
      const repo = el("a", "", "Source code");
      repo.href = p.repo; repo.target = "_blank"; repo.rel = "noopener";
      links.append(repo);
      if (p.demo) {                       // only show Live demo if you filled it in
        const demo = el("a", "", "Live demo");
        demo.href = p.demo; demo.target = "_blank"; demo.rel = "noopener";
        links.append(demo);
      }
      const tags = el("div", "tags");
      p.tech.forEach((t) => tags.append(el("span", "", t)));
      card.append(el("h3", "", p.title), el("p", "", p.summary), tags, links);
      grid.append(card);
    });
}
const types = ["All", ...new Set(DATA.projects.map((p) => p.type))];
types.forEach((t, i) => {
  const b = el("button", i === 0 ? "on" : "", t);
  b.onclick = () => {
    document.querySelectorAll("#filters button").forEach((x) => x.classList.remove("on"));
    b.classList.add("on");
    showProjects(t);
  };
  $("filters").append(b);
});
showProjects("All");

// ---- Contact buttons (skip empty values) ----
const c = DATA.contact;
[["Email", c.email && "mailto:" + c.email], ["LinkedIn", c.linkedin],
 ["Call", c.phone && "tel:" + c.phone], ["GitHub", DATA.github]]
  .filter(([, href]) => href)
  .forEach(([label, href]) => {
    const a = el("a", "btn ghost", label);
    a.href = href;
    if (href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
    $("contactLinks").append(a);
  });

// ---- Light / dark theme (remembers choice; safe if storage is blocked) ----
const root = document.documentElement;
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
$("theme").onclick = () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
};
