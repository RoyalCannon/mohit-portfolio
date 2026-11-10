import { useEffect, useState } from "react";
import "./App.css";
import { SKILLS, ME, PROJECTS, FLOW } from "./jsondata.js";

/* ================= HELPERS ================= */
const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
PROJECTS.forEach((p) => (p.id = slug(p.name)));

const ICONS = {
  home: "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  skills: "M12 3 3 8l9 5 9-5-9-5zM3 13l9 5 9-5",
  folder:
    "M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  mail: "M3 6h18v12H3zM3 7l9 7 9-7",
  back: "M15 18l-6-6 6-6",
  chev: "M9 6l6 6-6 6",
  moon: "M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z",
  sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5",
};
function Icon({ n }) {
  return (
    <svg
      className="ic"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={ICONS[n]} />
    </svg>
  );
}

/* Hash routing: #/  #/skills  #/projects  #/projects/<id>  #/contact */
function useRoute() {
  const read = () =>
    (window.location.hash.replace(/^#\/?/, "") || "home").split("/");
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const on = () => setRoute(read());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return route;
}

const TABS = [
  ["home", "Home", "home", "#/"],
  ["skills", "Skills", "skills", "#/skills"],
  ["projects", "Projects", "folder", "#/projects"],
  ["contact", "Contact", "mail", "#/contact"],
];

/* ================= VIEWS (app screens) ================= */
function Home() {
  return (
    <div className="stack">
      <section className="card-app welcome">
        <p className="kicker">Welcome</p>
        <h1>Hi, I’m {ME.name}.</h1>
        <p className="lead-app">
          {ME.title}. I turn manual office processes into working web apps with
          Google Apps Script and JavaScript, and build full-stack apps with
          React, Node.js and MongoDB.
        </p>
        <div className="d-flex flex-wrap gap-2">
          <a className="btn btn-accent" href="#/projects">
            View projects
          </a>
          <a className="btn btn-line" href="#/contact">
            Contact me
          </a>
        </div>
      </section>

      <div className="row g-3">
        <div className="col-lg-6">
          <section className="card-app h-100">
            <h2 className="h-sm">How my apps work</h2>
            <ol
              className="flow"
              aria-label="Example of an automated approval workflow"
            >
              {FLOW.map(([b, s]) => (
                <li key={b}>
                  <b>{b}</b>
                  <small>{s}</small>
                </li>
              ))}
            </ol>
          </section>
        </div>
        <div className="col-lg-6">
          <section className="card-app h-100">
            <h2 className="h-sm">About me</h2>
            <p>
              I have hands-on experience building internal business applications
              for inventory, procurement, HR, inspection, maintenance, workflow
              monitoring and accounts follow-up. Most use Google Sheets as the
              data store and Apps Script as the server-side layer, with an HTML,
              CSS, JavaScript and Bootstrap interface.
            </p>
            <p>
              I also clean and analyse business data, then present it as
              dashboards and MIS reports for decision-making. I built a
              full-stack attendance and survey application with React, Node.js,
              Express and MongoDB.
            </p>
            <p className="note">
              Open to business automation, MIS, Google Apps Script and junior
              full-stack JavaScript roles.
            </p>
          </section>
        </div>
      </div>

      <section>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h2 className="h-sm m-0">Featured projects</h2>
          <a href="#/projects" className="small fw-bold">
            See all {PROJECTS.length}
          </a>
        </div>
        <div className="list-app">
          {PROJECTS.slice(0, 3).map((p) => (
            <ProjectRow key={p.id} p={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Skills() {
  return (
    <div className="stack">
      <p className="lead-app m-0">
        What I work with, grouped by the kind of work.
      </p>
      <div className="row g-3 row-cols-1 row-cols-md-2">
        {SKILLS.map(([k, v]) => (
          <div className="col" key={k}>
            <section className="card-app h-100">
              <h2 className="h-sm">{k}</h2>
              <p className="m-0">{v}</p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectRow({ p }) {
  return (
    <a className="row-app" href={"#/projects/" + p.id}>
      <div className="row-body">
        <span className="chip-cat">{p.cat}</span>
        <h3>{p.name}</h3>
        <p>{p.solution}</p>
        <div>
          {p.tech.slice(0, 4).map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <Icon n="chev" />
    </a>
  );
}

function Projects() {
  const cats = ["All", ...new Set(PROJECTS.map((p) => p.cat))];
  const [cat, setCat] = useState("All");
  const list = PROJECTS.filter((p) => cat === "All" || p.cat === cat);
  return (
    <div className="stack">
      <div className="chips" role="tablist" aria-label="Filter projects">
        {cats.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            className={"chip" + (cat === c ? " on" : "")}
            onClick={() => setCat(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="list-app">
        {list.map((p) => (
          <ProjectRow key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const rows = [
    ["Email", ME.email, "mailto:" + ME.email],
    ["Phone", ME.phone, "tel:" + ME.phone.replace(/\s/g, "")],
    ["LinkedIn", ME.linkedin.replace("https://", ""), ME.linkedin],
    ["GitHub", ME.github.replace("https://", ""), ME.github],
  ];
  return (
    <div className="stack">
      <p className="lead-app m-0">
        Have a process you want to automate? Send me a message. Based in{" "}
        {ME.location}.
      </p>
      <div className="list-app">
        {rows.map(([k, v, h]) => (
          <a className="row-app" key={k} href={h}>
            <div className="row-body">
              <span className="chip-cat">{k}</span>
              <h3>{v}</h3>
            </div>
            <Icon n="chev" />
          </a>
        ))}
      </div>
    </div>
  );
}

/* ================= DETAIL (full page) ================= */
function Shot({ file, caption, onOpen }) {
  const [missing, setMissing] = useState(false);
  const url = import.meta.env.BASE_URL + "screenshots/" + file;
  return (
    <figure className="shot m-0">
      {missing ? (
        <div className="ph">Add public/screenshots/{file}</div>
      ) : (
        <button
          type="button"
          className="shot-btn"
          onClick={() => onOpen({ url, caption })}
          aria-label={"Enlarge: " + caption}
        >
          <img src={url} alt={caption} onError={() => setMissing(true)} />
        </button>
      )}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function ProjectPage({ id }) {
  const i = PROJECTS.findIndex((p) => p.id === id);
  const [zoom, setZoom] = useState(null);
  useEffect(() => {
    if (!zoom) return;
    const k = (e) => e.key === "Escape" && setZoom(null);
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, [zoom]);
  if (i < 0)
    return (
      <div className="page">
        <p>Project not found.</p>
        <a href="#/projects">Back to projects</a>
      </div>
    );
  const p = PROJECTS[i],
    prev = PROJECTS[i - 1],
    next = PROJECTS[i + 1];
  return (
    <article className="page">
      <span className="chip-cat">{p.cat}</span>
      <h1>{p.name}</h1>
      <div className="mb-4">
        {p.tech.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      <h2>The problem</h2>
      <p>{p.problem}</p>
      <h2>What I built</h2>
      <p>{p.solution}</p>
      <h2>Key features</h2>
      <ul className="checks">
        {p.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <h2>Outcome</h2>
      <p className="todo">[Add outcome or metric]</p>
      <h2>Screenshots</h2>
      <div className="row g-3">
        {p.shots.map(([f, c]) => (
          <div className="col-12 col-md-6" key={f}>
            <Shot file={f} caption={c} onOpen={setZoom} />
          </div>
        ))}
      </div>

      <nav className="pager" aria-label="More projects">
        {prev ? (
          <a href={"#/projects/" + prev.id}>
            <small>Previous</small>
            {prev.name}
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a href={"#/projects/" + next.id} className="text-end">
            <small>Next</small>
            {next.name}
          </a>
        ) : (
          <span />
        )}
      </nav>

      {zoom && (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label={zoom.caption}
          onClick={() => setZoom(null)}
        >
          <figure className="m-0 text-center">
            <img src={zoom.url} alt={zoom.caption} />
            <figcaption>{zoom.caption} (tap to close)</figcaption>
          </figure>
        </div>
      )}
    </article>
  );
}

/* ================= APP SHELL ================= */
export default function App() {
  const route = useRoute();
  const [theme, setTheme] = useState(null); // null = follow device
  const [dark, setDark] = useState(false);
  const stage = route[0] === "projects" && route[1] ? "detail" : route[0];
  const section = ["home", "skills", "projects", "contact"].includes(route[0])
    ? route[0]
    : "home";

  useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const d = theme ? theme === "dark" : mq.matches;
      if (theme) root.setAttribute("data-theme", theme);
      else root.removeAttribute("data-theme");
      root.setAttribute("data-bs-theme", d ? "dark" : "light");
      setDark(d);
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", d ? "#090f1c" : "#f5f7fb");
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.join("/")]);

  const title =
    {
      home: ME.name,
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      detail: "Project",
    }[stage] || ME.name;
  const isDetail = stage === "detail";

  return (
    <div className="app">
      <aside className="rail" aria-label="Main navigation">
        <a className="brand" href="#/">
          {ME.name}
        </a>
        <nav>
          {TABS.map(([id, label, icon, href]) => (
            <a
              key={id}
              href={href}
              className={"navitem" + (section === id ? " active" : "")}
              aria-current={section === id ? "page" : undefined}
            >
              <Icon n={icon} />
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <button
          className="navitem theme"
          type="button"
          onClick={() => setTheme(dark ? "light" : "dark")}
        >
          <Icon n={dark ? "sun" : "moon"} />
          <span>{dark ? "Light mode" : "Dark mode"}</span>
        </button>
      </aside>

      <div className="stage">
        <header className="appbar">
          {isDetail ? (
            <a
              className="icon-btn"
              href="#/projects"
              aria-label="Back to projects"
            >
              <Icon n="back" />
            </a>
          ) : null}
          <h1 className="appbar-title">{title}</h1>
          <button
            className="icon-btn d-lg-none"
            type="button"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setTheme(dark ? "light" : "dark")}
          >
            <Icon n={dark ? "sun" : "moon"} />
          </button>
        </header>

        <main className="view" key={route.join("/")}>
          {stage === "home" && <Home />}
          {stage === "skills" && <Skills />}
          {stage === "projects" && <Projects />}
          {stage === "detail" && <ProjectPage id={route[1]} />}
          {stage === "contact" && <Contact />}
          {!["home", "skills", "projects", "detail", "contact"].includes(
            stage,
          ) && <Home />}
        </main>
      </div>

      <nav className="tabbar" aria-label="Main navigation">
        {TABS.map(([id, label, icon, href]) => (
          <a
            key={id}
            href={href}
            className={section === id ? "active" : ""}
            aria-current={section === id ? "page" : undefined}
          >
            <Icon n={icon} />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
