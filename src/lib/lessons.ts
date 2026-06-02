const modules = import.meta.glob<string>('../lessons/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

export type Lesson = {
  id: string
  title: string
  /** Numéro extrait du nom de fichier (ex. « Fiche 3 » → 3), 0 si absent */
  index: number
  /** Ordre affiché dans le menu (1, 2, 3…) */
  menuIndex: number
  content: string
}

function basenameFromPath(path: string): string {
  const name = path.match(/\/([^/]+)\.md$/i)?.[1] ?? path
  try {
    return decodeURIComponent(name)
  } catch {
    return name
  }
}

function ficheNumberFromPath(path: string): number | null {
  const base = basenameFromPath(path)
  const m = base.match(/^fiche\s*(\d+)/i)
  return m ? parseInt(m[1], 10) : null
}

function pathToTitle(path: string): string {
  const base = basenameFromPath(path)
  // Titre lisible : on retire le préfixe « Fiche N - » s’il est présent
  const trimmed = base.replace(/^\s*fiche\s*\d+\s*-\s*/i, '').trim()
  return trimmed.length > 0 ? trimmed : base
}

function lessonSortOrder(path: string): number {
  const n = ficheNumberFromPath(path)
  if (n != null) return n
  return 999
}

const sorted = Object.entries(modules)
  .map(([path, content]) => {
    const num = ficheNumberFromPath(path)
    return {
      id: path,
      title: pathToTitle(path),
      index: num ?? 0,
      content,
    }
  })
  .sort((a, b) => {
    const da = lessonSortOrder(a.id)
    const db = lessonSortOrder(b.id)
    if (da !== db) return da - db
    return a.title.localeCompare(b.title, 'fr')
  })

export const lessons: Lesson[] = sorted.map((lesson, i) => ({
  ...lesson,
  menuIndex: lesson.index > 0 ? lesson.index : i + 1,
}))
