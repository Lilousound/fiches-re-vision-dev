import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { HomeScreen } from './HomeScreen'
import { ThemeToggle } from './ThemeToggle'
import { lessons } from './lib/lessons'
import { useTheme } from './useTheme'

type View = 'home' | 'lesson'

const proseLightCode =
  'prose-code:rounded-md prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-medium prose-code:text-slate-800 prose-code:ring-1 prose-code:ring-slate-200/80 prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-lg prose-pre:border prose-pre:border-slate-200 prose-pre:bg-slate-50 prose-pre:text-slate-800 prose-pre:[&_code]:bg-transparent prose-pre:[&_code]:p-0 prose-pre:[&_code]:font-normal prose-pre:[&_code]:text-inherit prose-pre:[&_code]:shadow-none prose-pre:[&_code]:ring-0'

const proseDarkCode =
  'prose-code:rounded-md prose-code:bg-slate-900/95 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-medium prose-code:text-slate-200 prose-code:ring-1 prose-code:ring-slate-600/40 prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-lg prose-pre:border prose-pre:border-slate-600/50 prose-pre:bg-[#0c0e14] prose-pre:text-slate-200 prose-pre:[&_code]:bg-transparent prose-pre:[&_code]:p-0 prose-pre:[&_code]:font-normal prose-pre:[&_code]:text-inherit prose-pre:[&_code]:shadow-none prose-pre:[&_code]:ring-0'

const proseDark =
  `prose prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-slate-50 prose-h2:text-slate-100 prose-h3:text-slate-200 prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-slate-100 prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline ${proseDarkCode} prose-blockquote:border-blue-700/55 prose-blockquote:text-slate-400 prose-hr:border-[var(--color-app-border)] prose-th:text-slate-200 prose-td:text-slate-300`

const proseLight =
  `prose prose-slate max-w-none prose-headings:scroll-mt-20 prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-slate-900 prose-h2:text-slate-800 prose-h3:text-slate-800 prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900 prose-a:text-blue-900 prose-a:no-underline hover:prose-a:underline ${proseLightCode} prose-blockquote:border-blue-900/45 prose-blockquote:text-slate-600 prose-hr:border-[var(--color-app-border)] prose-th:text-slate-800 prose-td:text-slate-600`

function App() {
  const { theme, toggleTheme } = useTheme()
  const [view, setView] = useState<View>('home')
  const [activeId, setActiveId] = useState(lessons[0]?.id ?? '')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const active = useMemo(
    () => lessons.find((l) => l.id === activeId) ?? lessons[0],
    [activeId],
  )

  const openHome = () => {
    setView('home')
    setMobileNavOpen(false)
  }

  const openLesson = (id: string) => {
    setActiveId(id)
    setView('lesson')
    setMobileNavOpen(false)
  }

  const openFiches = () => {
    if (lessons[0]) setActiveId(lessons[0].id)
    setView('lesson')
    setMobileNavOpen(false)
  }

  if (!active) {
    return (
      <div className="flex h-dvh items-center justify-center p-6">
        <p className="max-w-md text-center text-lg text-[var(--app-text-muted)]">
          Aucune fiche trouvée. Ajoute des fichiers{' '}
          <code className="rounded-md bg-[var(--color-app-elevated)] px-2 py-1 text-sm text-blue-950 ring-1 ring-[var(--color-app-border)] dark:text-blue-200">
            .md
          </code>{' '}
          dans{' '}
          <code className="rounded-md bg-[var(--color-app-elevated)] px-2 py-1 text-sm text-blue-950 ring-1 ring-[var(--color-app-border)] dark:text-blue-200">
            src/lessons/
          </code>
          .
        </p>
      </div>
    )
  }

  const proseClass = theme === 'dark' ? proseDark : proseLight

  return (
    <div
      className="flex h-dvh flex-col overflow-hidden md:flex-row"
      style={{ background: 'var(--app-shell-gradient)' }}
    >
      {mobileNavOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setMobileNavOpen(false)}
          aria-label="Fermer le menu"
        />
      ) : null}

      <aside
        className={[
          'fixed inset-y-0 left-0 z-40 flex w-[min(22rem,92vw)] flex-col border-r border-[var(--color-app-border)] bg-[var(--color-app-surface)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] transition-transform duration-200',
          mobileNavOpen ? 'translate-x-0' : '-translate-x-full',
          'md:static md:translate-x-0 md:w-[min(22rem,100%)] md:shrink-0 md:border-b-0 md:bg-transparent md:shadow-none',
        ].join(' ')}
        aria-label="Sommaire"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{ background: 'var(--app-aside-spot)' }} aria-hidden />
        <header className="relative z-10 border-b border-[var(--color-app-border)] px-5 pb-4 pt-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--app-text-subtle)]">
                Révision
              </p>
              <button
                type="button"
                onClick={openHome}
                className="mt-1.5 block w-full text-left text-xl font-semibold tracking-tight text-[var(--app-text-primary)] transition hover:text-blue-900 dark:hover:text-blue-300"
              >
                Fiches dev
              </button>
              <p className="mt-2 text-sm leading-relaxed text-[var(--app-text-muted)]">
                {lessons.length} fiche{lessons.length > 1 ? 's' : ''} à parcourir
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-app-border)] bg-[var(--color-app-elevated)] text-[var(--app-text-secondary)] transition hover:bg-[var(--nav-item-hover-bg)] md:hidden"
                onClick={() => setMobileNavOpen(false)}
                aria-label="Fermer le menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18" strokeLinecap="round" />
                  <path d="M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <nav
          className="relative z-10 flex min-h-0 flex-1 flex-col gap-1.5 overflow-y-auto p-3 md:p-4"
          aria-label="Navigation"
        >
          <button
            type="button"
            onClick={openHome}
            className={`group relative w-full rounded-xl border text-left transition-all duration-200 ${
              view === 'home'
                ? 'border-[var(--nav-item-active-border)] bg-[var(--color-app-elevated)] shadow-[0_0_0_1px_rgba(30,58,138,0.18),0_12px_32px_-16px_rgba(15,23,42,0.12)] dark:shadow-[0_0_0_1px_rgba(59,91,180,0.28),0_12px_40px_-16px_rgba(0,0,0,0.6)]'
                : 'border-transparent hover:bg-[var(--nav-item-hover-bg)]'
            }`}
          >
            {view === 'home' ? (
              <span
                className="absolute left-0 top-1/2 h-9 w-1 -translate-y-1/2 rounded-r-full bg-blue-900 shadow-[0_0_12px_rgba(30,58,138,0.55)] dark:bg-blue-600 dark:shadow-[0_0_14px_rgba(37,99,235,0.45)]"
                aria-hidden
              />
            ) : null}
            <span className="flex items-center gap-3 px-3 py-3 pl-4">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ring-1 transition-colors ${
                  view === 'home'
                    ? 'bg-blue-950/25 text-blue-950 ring-blue-900/35 dark:bg-blue-950/45 dark:text-blue-200 dark:ring-blue-700/45'
                    : 'bg-[var(--badge-inactive-bg)] text-[var(--badge-inactive-text)] ring-[var(--badge-inactive-ring)] group-hover:text-blue-900 dark:group-hover:text-blue-200/90'
                }`}
                aria-hidden
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="min-w-0 flex-1 py-0.5">
                <span className="block text-sm font-medium leading-snug text-[var(--app-text-primary)]">
                  Accueil
                </span>
                <span className="mt-1 text-xs text-[var(--app-text-subtle)]">Présentation du projet</span>
              </span>
            </span>
          </button>

          {lessons.map((lesson) => {
            const isActive = view === 'lesson' && lesson.id === active.id
            const num = String(lesson.menuIndex).padStart(2, '0')
            return (
              <button
                key={lesson.id}
                type="button"
                onClick={() => openLesson(lesson.id)}
                className={`group relative w-full rounded-xl border text-left transition-all duration-200 ${
                  isActive
                    ? 'border-[var(--nav-item-active-border)] bg-[var(--color-app-elevated)] shadow-[0_0_0_1px_rgba(30,58,138,0.18),0_12px_32px_-16px_rgba(15,23,42,0.12)] dark:shadow-[0_0_0_1px_rgba(59,91,180,0.28),0_12px_40px_-16px_rgba(0,0,0,0.6)]'
                    : 'border-transparent hover:bg-[var(--nav-item-hover-bg)]'
                }`}
              >
                {isActive ? (
                  <span
                    className="absolute left-0 top-1/2 h-9 w-1 -translate-y-1/2 rounded-r-full bg-blue-900 shadow-[0_0_12px_rgba(30,58,138,0.55)] dark:bg-blue-600 dark:shadow-[0_0_14px_rgba(37,99,235,0.45)]"
                    aria-hidden
                  />
                ) : null}
                <span className="flex items-stretch gap-3 px-3 py-3 pl-4">
                  <span
                    className={`flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg text-xs font-bold tabular-nums transition-colors ${
                      isActive
                        ? 'bg-blue-950/25 text-blue-950 ring-1 ring-blue-900/40 dark:bg-blue-950/45 dark:text-blue-200 dark:ring-blue-700/45'
                        : 'bg-[var(--badge-inactive-bg)] text-[var(--badge-inactive-text)] ring-1 ring-[var(--badge-inactive-ring)] group-hover:text-blue-900 dark:group-hover:text-blue-200/90 dark:group-hover:ring-blue-800/25'
                    }`}
                  >
                    <span className="text-[10px] font-medium uppercase leading-none text-[var(--app-text-subtle)]">
                      #
                    </span>
                    <span className="text-base leading-tight">{num}</span>
                  </span>
                  <span className="min-w-0 flex-1 py-0.5">
                    <span
                      className={`block text-sm font-medium leading-snug ${
                        isActive
                          ? 'text-[var(--app-text-primary)]'
                          : 'text-[var(--app-text-secondary)] group-hover:text-[var(--app-text-primary)]'
                      }`}
                    >
                      <span className="line-clamp-2">{lesson.title}</span>
                    </span>
                    <span className="mt-1 flex items-center gap-1.5 text-xs text-[var(--app-text-subtle)]">
                      <span
                        className={`inline-block h-1 w-1 rounded-full ${
                          isActive
                            ? 'bg-blue-800 shadow-[0_0_6px_rgba(30,58,138,0.65)] dark:bg-blue-500 dark:shadow-[0_0_8px_rgba(37,99,235,0.55)]'
                            : 'bg-[var(--app-text-subtle)]'
                        }`}
                        aria-hidden
                      />
                      Fiche {lesson.menuIndex}
                    </span>
                  </span>
                  <span
                    className={`flex shrink-0 items-center self-center text-[var(--app-text-subtle)] transition-transform duration-200 ${
                      isActive
                        ? 'text-blue-900 dark:text-blue-400/95'
                        : 'group-hover:translate-x-0.5 group-hover:text-[var(--app-text-muted)]'
                    }`}
                    aria-hidden
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </button>
            )
          })}
        </nav>
      </aside>

      <main className="min-h-0 min-w-0 flex-1 overflow-y-auto p-4 md:p-8 lg:p-10">
        <div className="sticky top-0 z-20 -mx-4 mb-4 border-b border-[var(--color-app-border)] bg-[color-mix(in_srgb,var(--color-app-surface)_82%,transparent)] px-4 py-3 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-app-border)] bg-[var(--color-app-elevated)] text-[var(--app-text-secondary)] transition hover:bg-[var(--nav-item-hover-bg)]"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={openHome}
              className="min-w-0 flex-1 truncate text-left text-sm font-semibold tracking-tight text-[var(--app-text-primary)]"
            >
              Fiches dev
            </button>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </div>

        {view === 'home' ? (
          <div
            className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-app-border)] p-6 shadow-[var(--shadow-article)] md:p-10"
            style={{ background: 'var(--color-app-surface)' }}
          >
            <HomeScreen lessonCount={lessons.length} onOpenFiches={openFiches} />
          </div>
        ) : (
          <article
            className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-app-border)] p-6 shadow-[var(--shadow-article)] md:p-10"
            style={{ background: 'var(--color-app-surface)' }}
          >
            <div className="mb-8 flex flex-wrap items-end justify-between gap-3 border-b border-[var(--color-app-border)] pb-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--app-text-subtle)]">
                  Fiche {active.menuIndex}
                </p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--app-text-primary)] md:text-3xl">
                  {active.title}
                </h2>
              </div>
            </div>
            <div className={proseClass}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{active.content}</ReactMarkdown>
            </div>
          </article>
        )}
      </main>
    </div>
  )
}

export default App
