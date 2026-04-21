import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Instagram, ArrowUpRight, Sun, Moon, Code2, Layers, Terminal, Briefcase, User } from 'lucide-react'

/* ──────────────────────────────────────────────
  DATA
   ────────────────────────────────────────────── */

const PROJECTS = [
  { title: 'E-Commerce Platform', role: 'Full-stack Developer', tags: ['React', 'TypeScript', 'NestJS'], date: '04/26', link: '#' },
  { title: 'Task Flow', role: 'Frontend Developer', tags: ['React', 'Tailwind', 'Firebase'], date: '02/26', link: '#' },
  { title: 'Algorithm Visualizer', role: 'Developer', tags: ['C++', 'TypeScript', 'Canvas'], date: '11/25', link: '#' },
  { title: 'REST API Boilerplate', role: 'Backend Developer', tags: ['NestJS', 'Docker', 'Swagger'], date: '08/25', link: '#' },
  { title: 'REST API Boilerplate', role: 'Backend Developer', tags: ['NestJS', 'Docker', 'Swagger'], date: '08/25', link: '#' },
  { title: 'REST API Boilerplate', role: 'Backend Developer', tags: ['NestJS', 'Docker', 'Swagger'], date: '08/25', link: '#' },
]

const EXPERIENCE = [
  {
    company: 'PT Tech Innovation',
    role: 'Frontend Engineer',
    type: 'Full-time',
    period: 'Jan 2025 – Present',
    location: 'Jakarta, Indonesia',
    description: 'Developing and maintaining core web applications using React and TypeScript. Building reusable component libraries and improving CI/CD pipelines.',
  },
  {
    company: 'Startup Digital',
    role: 'Full-stack Developer',
    type: 'Contract',
    period: 'Jun 2024 – Dec 2024',
    location: 'Remote',
    description: 'Built end-to-end features for an e-commerce platform. Implemented REST APIs with NestJS and integrated third-party payment gateways.',
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    type: 'Freelance',
    period: 'Jan 2023 – May 2024',
    location: 'Remote',
    description: 'Delivered responsive websites and web apps for small businesses. Focused on clean UI/UX with React, Tailwind CSS, and Firebase.',
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    type: 'Freelance',
    period: 'Jan 2023 – May 2024',
    location: 'Remote',
    description: 'Delivered responsive websites and web apps for small businesses. Focused on clean UI/UX with React, Tailwind CSS, and Firebase.',
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    type: 'Freelance',
    period: 'Jan 2023 – May 2024',
    location: 'Remote',
    description: 'Delivered responsive websites and web apps for small businesses. Focused on clean UI/UX with React, Tailwind CSS, and Firebase.',
  },
]

const EXPERTISE = [
  { icon: Code2, title: 'Frontend', desc: 'React, TypeScript, Tailwind CSS' },
  { icon: Terminal, title: 'Backend', desc: 'NestJS, Node.js, PostgreSQL' },
  { icon: Layers, title: 'Other', desc: 'Docker, C++, Git' },
]

const SOCIALS = [
  { name: 'GitHub', icon: Github, handle: 'agistwahyuji', href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, handle: 'agis-tri-wahyuji', href: 'https://linkedin.com' },
  { name: 'Instagram', icon: Instagram, handle: '@agistwahyuji', href: 'https://instagram.com' },
]

/* ──────────────────────────────────────────────
  THEME
   ────────────────────────────────────────────── */

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved !== 'light'
      return true
    }
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return [dark, () => setDark((d) => !d)]
}

/* ──────────────────────────────────────────────
   ANIMATIONS
   ────────────────────────────────────────────── */

const cardVariant = (i = 0) => ({
  initial: { opacity: 0, y: 20, scale: 0.97 },
  animate: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] },
  },
})

/* ──────────────────────────────────────────────
  SHARED CARD WRAPPER
   ────────────────────────────────────────────── */

function Card({ children, className = '', delay = 0, hover = false, id }) {
  return (
    <motion.div
      {...cardVariant(delay)}
      id={id}
      className={`
        bg-bg-card rounded-2xl border border-border p-5
        transition-all duration-400 ease-smooth
        ${hover ? 'hover:bg-bg-hover hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}

/* ──────────────────────────────────────────────
  APP
   ────────────────────────────────────────────── */

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
            <a href="#about" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium transition-colors">
              <User size={13} />
              About
            </a>
            <a href="#work" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-ink-muted hover:text-ink text-xs font-medium transition-colors">
              <Layers size={13} />
              Work
            </a>
            <a href="#experience" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-ink-muted hover:text-ink text-xs font-medium transition-colors">
              <Briefcase size={13} />
              Experience
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
                Software Developer
              </p>
              <p className="text-[0.7rem] text-ink-muted font-mono">
                ソフトウェア開発者
              </p>
            </div>

            <div>
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-ink">
                AGIS TRI
                <br />
                <span className="text-ink-muted">WAHYUJI</span>
              </h1>
              <p className="mt-4 text-sm text-ink-secondary leading-relaxed max-w-md">
                Crafting clean, performant digital experiences — focused on
                frontend with React & Tailwind and backend with NestJS.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-xs text-ink-muted">Available for collaboration</span>
            </div>
          </Card>

          {/* ── ABOUT CARD ── */}
          <Card delay={1} className="lg:col-span-2 p-6" id="about">
            <div className="flex items-center gap-2 mb-4">
              <User size={14} className="text-accent" />
              <p className="text-xs text-ink-muted font-mono uppercase tracking-wider">About</p>
            </div>
            <p className="text-sm text-ink-secondary leading-relaxed mb-3">
              A passionate software developer based in <span className="text-ink font-medium">Indonesia</span>.
              I build intuitive, user-centric applications with a focus on clean code and
              modern web technologies. I believe that great software comes from the intersection
              of thoughtful design and solid engineering.
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks, contributing
              to open source, and sharing knowledge through technical writing.
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
                <p className="text-[0.65rem] text-ink-faint font-mono">scroll →</p>
              )}
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
              {EXPERIENCE.map((exp, i) => (
                <div
                  key={`${exp.company}-${i}`}
                  className="relative rounded-xl bg-bg border border-border p-5
                            hover:border-accent/30 hover:bg-bg-hover
                            transition-all duration-400 ease-smooth group
                            min-w-[280px] lg:min-w-[calc(33.333%-8px)] flex-shrink-0"
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

                  <p className="text-xs text-ink-muted leading-relaxed">
                    {exp.description}
                  </p>
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
                            min-w-[240px] lg:min-w-[calc(25%-9px)] flex-shrink-0"
                >
                  <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-accent/40 to-accent/10 mb-4" />

                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm font-semibold text-ink group-hover:text-accent transition-colors duration-300 leading-tight">
                      {p.title}
                    </h3>
                    <ArrowUpRight size={14} className="text-ink-faint group-hover:text-accent transition-all duration-300 flex-shrink-0 mt-0.5" />
                  </div>

                  <p className="text-xs text-ink-muted mb-3">{p.role}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {p.tags.slice(0, 2).map((tag) => (
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
          <p className="text-xs text-ink-faint font-mono">Built with React & Tailwind</p>
        </motion.footer>

      </div>
    </div>
  )
}
