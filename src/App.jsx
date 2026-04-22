import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Sun, Moon, Layers, Briefcase, House, User, Heart, Coffee } from 'lucide-react'

import Card from './components/Card'
import { useTheme } from './hooks/useTheme'
import { EXPERTISE, SOCIALS, EXPERIENCE, PROJECTS } from './services/data'

function ExperienceDescription({ description }) {
  const [expanded, setExpanded] = useState(false);
  const items = description
    .split(/[●•]/)
    .flatMap((s) => s.split(/\.\s+/))
    .map((s) => s.replace(/^[\s.●•-]+/, '').trim())
    .filter(Boolean);

  const visibleItems = expanded ? items : items.slice(0, 2);
  const hasMore = items.length > 2;

  return (
    <div className="mt-2 text-left">
      <ul className="flex flex-col gap-1.5">
        {visibleItems.map((item, j) => {
          const text = item.endsWith('.') ? item : `${item}.`;
          return (
            <li key={j} className="flex items-start gap-2 text-xs text-ink-muted leading-relaxed">
              <span className="text-accent font-bold">-</span>
              <span className="flex-1">{text}</span>
            </li>
          );
        })}
      </ul>
      {hasMore && (
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-[0.65rem] text-accent mt-2 hover:text-accent/80 transition-colors focus:outline-none flex items-center gap-1 font-medium"
        >
          {expanded ? 'Show less ↑' : 'See more ↓'}
        </button>
      )}
    </div>
  );
}

function ProjectDescription({ description }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = description?.length > 110;

  return (
    <div className="flex flex-col flex-1 mb-3 justify-start">
      <p className={`text-xs text-ink-muted text-wrap ${expanded ? '' : 'line-clamp-3'}`}>
        {description}
      </p>
      {isLong && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setExpanded(!expanded);
          }}
          className="text-[0.65rem] text-accent mt-1.5 hover:text-accent/80 transition-colors focus:outline-none self-start font-medium"
        >
          {expanded ? 'See less ↑' : 'See more ↓'}
        </button>
      )}
    </div>
  );
}

export default function App() {
  const [dark, toggleTheme] = useTheme()

  return (
    <div className="min-h-screen bg-bg transition-colors duration-500 px-4 md:px-6 py-4 md:py-6">
      <div className="max-w-6xl mx-auto">

        {/* ── NAV ── */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between mb-5"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center">
              <span className="text-bg text-xs font-bold">AT</span>
            </div>
          </div>

          <div className="flex items-center bg-bg-card border border-border rounded-full px-1 py-1">
            <a href="#home" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium transition-colors">
              <House size={13} />
              Home
            </a>
            <a href="#work" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-ink-muted hover:text-ink text-xs font-medium transition-colors">
              <Layers size={13} />
              Projects
            </a>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full border border-border bg-bg-card
                      hover:border-accent/40 flex items-center justify-center
                      transition-all duration-400"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={dark ? 'sun' : 'moon'}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.25 }}
              >
                {dark
                  ? <Sun size={14} className="text-ink-secondary" />
                  : <Moon size={14} className="text-ink-secondary" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </motion.nav>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-min">

          {/* ── HERO CARD (spans 2 cols, 2 rows) ── */}
          <Card delay={0} className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between min-h-[320px]">
            <div>
              <p className="text-xs text-accent font-mono tracking-wider uppercase mb-1">
                Software Engineering
              </p>
              <p className="text-[0.7rem] text-ink-muted font-mono">
                ソフトウェアエンジニアリング
              </p>
            </div>

            <div>
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-ink">
                AGIS TRI
                <br />
                <span className="text-ink-muted">WAHYUJI</span>
              </h1>
              <p className="mt-4 text-sm text-ink-secondary leading-relaxed max-w-md">
                Crafting High-Performance Digital Experiences from Frontend to Backend.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4">
            </div>
          </Card>

          {/* ── ABOUT CARD ── */}
          <Card delay={1} className="lg:col-span-2 p-6" id="home">
            <div className="flex items-center gap-2 mb-4">
              <User size={14} className="text-accent" />
              <p className="text-xs text-ink-muted font-mono uppercase tracking-wider">About</p>
            </div>
            <p className="text-sm text-ink-secondary leading-relaxed mb-3">
              A passionate software engineer based in <span className="text-ink font-medium">Indonesia</span>.
              Front-End Developer with 4+ years of experience crafting responsive, scalable, and user-centric web applications. Proficient in React, Next.js, and Vue.js, I bridge the gap between thoughtful design and solid engineering to build products that users love.
              </p>
            <p className="text-sm text-ink-secondary leading-relaxed">
              I transform complex UI/UX designs into pixel-perfect, high-performance interfaces while ensuring codebases are optimized for speed and long-term maintainability. Beyond the IDE, I am a committed advocate for clean code and a relentless continuous learner.
            </p>
          </Card>

          {/* ── EXPERTISE CARD ── */}
          <Card delay={2} className="lg:col-span-1 p-6">
            <p className="text-xs text-ink-muted font-mono uppercase tracking-wider mb-4">Expertise</p>
            <div className="space-y-3">
              {EXPERTISE.map((e) => {
                const Icon = e.icon
                return (
                  <div key={e.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-dim flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink">{e.title}</p>
                      <p className="text-xs text-ink-muted">{e.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>

          {/* ── CONNECT CARD ── */}
          <Card delay={3} className="lg:col-span-1 p-6">
            <p className="text-xs text-ink-muted font-mono uppercase tracking-wider mb-4">Connect</p>
            <div className="space-y-2.5">
              {SOCIALS.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-1.5 hover:pl-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={15} className="text-ink-muted group-hover:text-accent transition-colors duration-300" />
                      <div>
                        <p className="text-sm font-medium text-ink">{s.name}</p>
                        <p className="text-xs text-ink-muted">{s.handle}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-ink-faint group-hover:text-accent transition-all duration-300" />
                  </a>
                )
              })}
            </div>
          </Card>

          {/* ── EXPERIENCE CARD (full width) ── */}
          <Card delay={4} className="md:col-span-2 lg:col-span-4 p-6" id="experience">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Briefcase size={14} className="text-accent" />
                <p className="text-xs text-ink-muted font-mono uppercase tracking-wider">Experience</p>
              </div>
              {EXPERIENCE.length > 2 && (
                <p className="text-[0.65rem] text-ink-faint font-mono">scroll ↓</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 overflow-y-auto max-h-[380px] pr-2 scrollbar-thin">
              {EXPERIENCE.map((exp, i) => (
                <div
                  key={`${exp.company}-${i}`}
                  className="relative rounded-xl bg-bg border border-border p-5
                            hover:border-accent/30 hover:bg-bg-hover
                            transition-all duration-400 ease-smooth group"
                >
                  {/* Accent dot */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-green-400' : 'bg-ink-faint'}`} />
                    <span className="text-[0.65rem] text-ink-muted font-mono">{exp.period}</span>
                  </div>

                  <h3 className="text-sm font-semibold text-ink mb-0.5 group-hover:text-accent transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-accent font-medium mb-1">{exp.company}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[0.65rem] text-ink-muted px-1.5 py-0.5 rounded bg-accent-dim">{exp.type}</span>
                    <span className="text-[0.65rem] text-ink-faint">{exp.location}</span>
                  </div>

                  <ExperienceDescription description={exp.description} />
                </div>
              ))}
            </div>
          </Card>

          {/* ── PROJECTS CARD (full width) ── */}
          <Card delay={5} className="md:col-span-2 lg:col-span-4 p-6" id="work">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Layers size={14} className="text-accent" />
                <p className="text-xs text-ink-muted font-mono uppercase tracking-wider">Projects</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-xs text-ink-faint">{PROJECTS.length} projects</p>
                {PROJECTS.length > 3 && (
                  <p className="text-[0.65rem] text-ink-faint font-mono">scroll →</p>
                )}
              </div>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
              {PROJECTS.map((p, i) => (
                <a
                  key={`${p.title}-${i}`}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-xl bg-bg border border-border p-4
                            hover:border-accent/30 hover:bg-bg-hover
                            transition-all duration-400 ease-smooth
                            w-[260px] lg:w-[calc(25%-9px)] flex-shrink-0 flex flex-col"
                >
                  <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-accent/40 to-accent/10 mb-4" />

                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm font-semibold text-ink group-hover:text-accent transition-colors duration-300 leading-tight">
                      {p.title}
                    </h3>
                    <ArrowUpRight size={14} className="text-ink-faint group-hover:text-accent transition-all duration-300 flex-shrink-0 mt-0.5" />
                  </div>

                  <ProjectDescription description={p.description} />

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-1">
                      {p.tags.slice(0, 5).map((tag) => (
                        <span key={tag} className="text-[0.65rem] text-ink-muted px-1.5 py-0.5 rounded bg-accent-dim">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[0.65rem] text-ink-faint">{p.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </Card>

        </div>

        {/* ── FOOTER ── */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center justify-between py-6 mt-3"
        >
          <p className="text-xs text-ink-muted">© {new Date().getFullYear()} Agis Tri Wahyuji</p>
          <div className="flex items-center gap-1.5 text-xs text-ink-faint font-mono">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> 
            and <Coffee size={14} className="text-amber-700" /> by Masagis
          </div>
        </motion.footer>

      </div>
    </div>
  )
}
