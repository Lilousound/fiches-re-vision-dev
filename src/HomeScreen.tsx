type HomeScreenProps = {
  lessonCount: number
  onOpenFiches: () => void
}

export function HomeScreen({ lessonCount, onOpenFiches }: HomeScreenProps) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 md:px-6 md:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--app-text-subtle)]">
        Accueil
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--app-text-primary)] md:text-4xl">
        Réviser pour les entretiens techniques
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-[var(--app-text-muted)]">
        En tant que <strong className="font-semibold text-[var(--app-text-secondary)]">développeuse junior</strong>, je
        veux me préparer au maximum pour les entretiens techniques. Cette petite application rassemble mes fiches de
        révision : HTML, CSS, JavaScript, React, TypeScript… le tout en Markdown, accessible depuis le navigateur.
      </p>
      <p className="mt-4 leading-relaxed text-[var(--app-text-muted)]">
        L’idée est simple : pouvoir{' '}
        <strong className="font-medium text-[var(--app-text-secondary)]">réviser n’importe quand</strong>, depuis{' '}
        <strong className="font-medium text-[var(--app-text-secondary)]">n’importe quel endroit</strong> (ordinateur,
        tablette…), sans dépendre d’un carnet papier ou d’un PDF figé. Un clic sur une fiche, et je retrouve mes notes
        structurées comme je les ai écrites.
      </p>

      <ul className="mt-8 space-y-3 text-[var(--app-text-muted)]">
        <li className="flex gap-3">
          <span
            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900 dark:bg-blue-500"
            aria-hidden
          />
          <span>Contenu pensé pour m’entraîner aux questions classiques et aux révisions express avant un entretien.</span>
        </li>
        <li className="flex gap-3">
          <span
            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900 dark:bg-blue-500"
            aria-hidden
          />
          <span>Interface volontairement épurée pour rester concentrée sur l’essentiel.</span>
        </li>
      </ul>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={onOpenFiches}
          className="inline-flex items-center justify-center rounded-xl bg-blue-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/35 transition hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 dark:bg-blue-950 dark:hover:bg-blue-900 dark:shadow-black/45"
        >
          Parcourir les fiches
        </button>
        {lessonCount > 0 ? (
          <span className="text-sm text-[var(--app-text-subtle)]">
            {lessonCount} fiche{lessonCount > 1 ? 's' : ''} disponible{lessonCount > 1 ? 's' : ''}
          </span>
        ) : null}
      </div>
    </div>
  )
}
