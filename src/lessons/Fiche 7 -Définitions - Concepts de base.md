# **📌 Définitions**

*Fiche mémo avec des définitions courtes, simples et faciles à retenir.*

---

---

## **🔹 JavaScript : Concepts de Base**

---

### **📌 Variables et Types**

- `var` : Variable avec portée de fonction, hoistée et initialisée à `undefined`.
- `let` : Variable avec portée de bloc, hoistée mais non initialisée (Temporal Dead Zone).
- `const` : Variable avec portée de bloc, hoistée, non initialisée et **immuable** après déclaration.
- `null` : Valeur explicitement vide (type `object`).
- `undefined` : Variable non initialisée ou propriété manquante.
- **Type primitif** : Types de base en JS (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`).
- **Type complexe** : Types non primitifs (`object`, `array`, `function`).

---

### **📌 Opérateurs**

- `===` : Comparaison stricte (valeur + type).
- `==` : Comparaison lâche (avec conversion de type).
- `&&` : Opérateur logique **ET** (retourne la première valeur fausse ou la dernière).
- `||` : Opérateur logique **OU** (retourne la première valeur vraie ou la dernière).
- `?.` : Opérateur de **chaînage optionnel** (évite les erreurs si la propriété est `null`/`undefined`).
- `??` : Opérateur **Nullish Coalescing** (retourne la première valeur non `null`/non `undefined`).
- `...` (spread) : Étale les éléments d’un tableau/objet (ex: `[...array]`).
- `...` (rest) : Regroupe des éléments restants dans un tableau (ex: `function f(...args)`).

---

### **📌 Structures de Contrôle**

- `if/else` : Exécute un bloc de code si une condition est vraie.
- `switch` : Structure conditionnelle multi-cas.
- `for` : Boucle avec initialisation, condition et incrémentation.
- `while` : Boucle tant qu’une condition est vraie.
- `do...while` : Boucle qui s’exécute au moins une fois.
- `for...of` : Boucle sur les valeurs d’un itérable (tableaux, strings, etc.).
- `for...in` : Boucle sur les clés d’un objet (y compris le prototype).

---

### **📌 Fonctions**

- **Fonction classique** : `function nom() {}` (hoistée entièrement).
- **Fonction fléchée** : `() => {}` (pas de `this` propre, pas de hoisting).
- **Fonction anonyme** : `function() {}` (sans nom).
- **Fonction IIFE** : `(function() {})()` (fonction exécutée immédiatement).
- **Paramètres par défaut** : `function f(x = 1) {}` (valeur par défaut si non fourni).
- **Paramètres rest** : `function f(...args) {}` (regroupe les arguments restants dans un tableau).
- **Closure** : Fonction qui retient l’accès à son environnement lexical (variables du contexte parent) même après son exécution.
- **Fonction pure** : Fonction qui retourne toujours la même sortie pour les mêmes entrées et sans effets de bord.
- **Fonction impure** : Fonction avec effets de bord (modifie l’extérieur) ou dépendante d’un état externe.

---

### **📌 Objets et Tableaux**

- **Objet** : Structure clé-valeur (`{ clé: valeur }`).
- **Tableau** : Liste ordonnée de valeurs (`[valeur1, valeur2]`).
- **Destructuring (objet)** : Extraire des propriétés d’un objet en variables (`const { a, b } = objet`).
- **Destructuring (tableau)** : Extraire des éléments d’un tableau en variables (`const [x, y] = tableau`).
- `Object.keys()` : Retourne un tableau des clés d’un objet.
- `Object.values()` : Retourne un tableau des valeurs d’un objet.
- `Object.entries()` : Retourne un tableau de paires `[clé, valeur]`.
- `Array.map()` : Applique une fonction à chaque élément et retourne un nouveau tableau.
- `Array.filter()` : Filtre les éléments d’un tableau selon une condition.
- `Array.reduce()` : Réduit un tableau à une seule valeur (ex: somme, produit).
- `Array.find()` : Trouve le premier élément correspondant à une condition.
- `Array.some()` : Vérifie si au moins un élément correspond à une condition.
- `Array.every()` : Vérifie si tous les éléments correspondent à une condition.

---

### **📌 Asynchrone**

- **Callback** : Fonction passée en argument et exécutée plus tard (ex: `setTimeout(f, 1000)`).
- **Promesse** : Objet représentant une opération asynchrone (états: `pending`, `fulfilled`, `rejected`).
- `async/await` : Syntaxe pour écrire du code asynchrone de manière synchrone (`async function f() { await promesse; }`).
- `fetch` : API native pour faire des requêtes HTTP.
- `axios` : Librairie pour faire des requêtes HTTP (plus simple que `fetch`).
- **Event Loop** : Mécanisme qui gère l’exécution du code JavaScript (call stack, callbacks, microtasks, macrotasks).
- **Call Stack** : Pile d’exécution des fonctions (LIFO: Last In, First Out).
- **Callback Queue** : File d’attente des callbacks (ex: `setTimeout`, événements DOM).
- **Microtask Queue** : File d’attente prioritaire pour les promesses (`then`, `catch`, `finally`).
- `setTimeout` : Exécute une fonction après un délai (en ms).
- `setInterval` : Exécute une fonction à intervalles réguliers (en ms).
- `clearTimeout`/`clearInterval` : Annule un `setTimeout`/`setInterval`.

---

### **📌 Manipulation du DOM**

- **DOM** : Représentation arborescente du document HTML en mémoire.
- `document.getElementById()` : Sélectionne un élément par son ID.
- `document.querySelector()` : Sélectionne le premier élément correspondant à un sélecteur CSS.
- `document.querySelectorAll()` : Sélectionne tous les éléments correspondants à un sélecteur CSS.
- `element.textContent` : Modifie le texte d’un élément.
- `element.innerHTML` : Modifie le HTML d’un élément.
- `element.style` : Modifie le style CSS d’un élément.
- `element.addEventListener()` : Ajoute un écouteur d’événement à un élément.
- **Event Delegation** : Technique pour gérer les événements sur un parent et identifier l’élément cible avec `event.target`.
- `event.preventDefault()` : Empêche le comportement par défaut d’un événement (ex: soumission d’un formulaire).
- `event.stopPropagation()` : Empêche la propagation d’un événement (bubbling/capturing).

---

---

## **🔹 JavaScript : Concepts Avancés**

---

### **📌 Programmation Orientée Objet (POO)**

- **Classe** : Modèle pour créer des objets (`class MaClasse {}`).
- **Objet** : Instance d’une classe (`new MaClasse()`).
- **Constructeur** : Méthode appelée lors de la création d’un objet (`constructor() {}`).
- **Héritage** : Mécanisme pour créer une classe à partir d’une autre (`class Enfant extends Parent {}`).
- `super` : Appelle le constructeur de la classe parente (`super()`).
- **Méthode** : Fonction associée à un objet ou une classe.
- **Propriété** : Variable associée à un objet ou une classe.
- `this` : Fait référence à l’objet courant (contexte d’exécution).
- **Prototype** : Objet interne qui permet l’héritage en JavaScript (chaîne de prototypes).
- `Object.create()` : Crée un nouvel objet avec un prototype spécifié.
- `instanceof` : Vérifie si un objet est une instance d’une classe (`objet instanceof MaClasse`).

---

### **📌 Modules et Espaces de Noms**

- **Module ES6** : Fichier JavaScript qui peut exporter/importer des variables, fonctions, classes (`export`, `import`).
- `export` : Exporte une variable, fonction ou classe depuis un module (`export const x = 5;`).
- `import` : Importe une variable, fonction ou classe depuis un module (`import { x } from './module';`).
- **Export par défaut** : Exporte une valeur par défaut (`export default x;`).
- **Import tout** : Importe toutes les exportations d’un module (`import * as module from './module';`).

---

### **📌 Concepts Fonctionnels**

- **Fonction d’ordre supérieur** : Fonction qui prend une fonction en argument ou retourne une fonction.
- **Currying** : Technique pour transformer une fonction à plusieurs arguments en une suite de fonctions à un seul argument.
- **Mémoïsation** : Technique pour cache le résultat d’une fonction coûteuse (`useMemo` en React).
- **Pure Function** : Fonction sans effets de bord et déterministe (même entrée → même sortie).
- **Immutabilité** : Principe de ne pas modifier les données existantes, mais d’en créer de nouvelles.

---

### **📌 Typage et TypeScript**

- **TypeScript** : Sur-ensemble typé de JavaScript (ajoute des types statiques).
- **Interface** : Structure pour typer un objet (`interface Utilisateur { nom: string; }`).
- **Type** : Alternative à `interface` pour typer des données (`type Utilisateur = { nom: string; }`).
- **Générique** : Permet de créer des fonctions/classes réutilisables avec des types variables (`function f<T>(x: T): T {}`).
- **Union de types** : Type qui peut être l’un ou l’autre (`string | number`).
- **Intersection de types** : Type qui doit être les deux à la fois (`TypeA & TypeB`).
- `any` : Type qui désactive la vérification de type (à éviter).
- `unknown` : Type qui force la vérification avant utilisation (meilleure alternative à `any`).
- `never` : Type pour les fonctions qui ne retournent jamais (ex: `throw new Error()`).
- `void` : Type pour les fonctions qui ne retournent rien.

---

---

## **🔹 React : Concepts de Base**

---

### **📌 Composants**

- **Composant** : Morceau d’UI réutilisable (fonction ou classe).
- **Composant fonctionnel** : Composant défini comme une fonction (`function MonComposant() {}`).
- **Composant de classe** : Composant défini comme une classe (`class MonComposant extends React.Component {}`).
- **Props** : Données passées d’un parent à un enfant (immuables).
- **State** : Données internes à un composant (modifiables avec `useState` ou `this.setState`).
- **JSX** : Syntaxe qui permet d’écrire du HTML dans JavaScript (`<div>Bonjour</div>`).
- **Fragment** : Permet de retourner plusieurs éléments sans wrapper (`<>...</>` ou `<Fragment>...</Fragment>`).

---

### **📌 Hooks**

- **Hook** : Fonction qui permet d’utiliser des fonctionnalités de React (état, effets, etc.) dans des composants fonctionnels.
- `useState` : Gère un état local dans un composant (`const [state, setState] = useState(initialValue);`).
- `useEffect` : Gère les effets de bord (appels API, abonnements, etc.) (`useEffect(() => {}, [dependencies]);`).
- `useContext` : Accède à un contexte React (`const value = useContext(MyContext);`).
- `useReducer` : Alternative à `useState` pour gérer un état complexe (`const [state, dispatch] = useReducer(reducer, initialState);`).
- `useRef` : Stocke une valeur mutable qui ne déclenche pas de re-rendu (`const ref = useRef(initialValue);`).
- `useMemo` : Mémorise une valeur calculée (`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`).
- `useCallback` : Mémorise une fonction (`const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);`).
- **Hooks personnalisés** : Hooks créés par toi pour réutiliser de la logique entre composants.

---

### **📌 Cycle de Vie**

- **Montage** : Phase où le composant est créé et inséré dans le DOM.
- **Mise à jour** : Phase où le composant est re-rendu (props ou état changé).
- **Démontage** : Phase où le composant est retiré du DOM.
- `componentDidMount` : Méthode appelée après le premier rendu (composants de classe).
- `componentDidUpdate` : Méthode appelée après une mise à jour (composants de classe).
- `componentWillUnmount` : Méthode appelée avant le démontage (composants de classe).

---

### **📌 Gestion des Événements**

- **Événement** : Action déclenchée par l’utilisateur (clic, saisie, etc.).
- `onClick` : Événement déclenché par un clic.
- `onChange` : Événement déclenché par une modification de valeur (input, select, etc.).
- `onSubmit` : Événement déclenché par la soumission d’un formulaire.
- **Syntaxe des événements** : `on[Event]` en camelCase (ex: `onClick`, `onChange`).

---

### **📌 Formulaires**

- **Formulaire contrôlé** : Formulaire où l’état est géré par React (`value` + `onChange`).
- **Formulaire non contrôlé** : Formulaire où l’état est géré par le DOM (`ref`).
- **Validation** : Vérification des données avant soumission (ex: champs obligatoires, format email).

---

### **📌 Listes et Clés**

- **Rendu de listes** : Utilisation de `map` pour afficher une liste d’éléments (`{items.map(item => <li key={item.id}>{item.name}</li>)}`).
- **Clé (`key`)** : Identifiant unique pour chaque élément d’une liste (optimise les mises à jour).

---

### **📌 Conditional Rendering**

- **Rendu conditionnel** : Afficher ou non un élément en fonction d’une condition (`{isLoggedIn && <Dashboard />}`).
- **Opérateur ternaire** : `condition ? <A /> : <B />`.
- `&&` : Affiche `<B />` si `condition` est vraie (`condition && <B />`).

---

---

## **🔹 React : Concepts Avancés**

---

### **📌 State Management**

- **State local** : État géré dans un composant (`useState`).
- **State global** : État partagé entre plusieurs composants (Context, Redux, Zustand).
- **Context API** : Mécanisme pour partager des données entre composants sans props (`createContext`, `useContext`).
- **Redux** : Librairie pour gérer un état global prévisible (store, actions, reducers).
- **Zustand** : Alternative légère à Redux pour gérer un état global.
- **Recoil** : Librairie pour gérer un état global (par Facebook).
- **Jotai** : Alternative à Recoil, plus simple et légère.

---

### **📌 Routing**

- **React Router** : Librairie pour gérer la navigation dans une SPA (`BrowserRouter`, `Route`, `Link`).
- `BrowserRouter` : Conteneur principal pour le routing.
- `Route` : Définit une route et le composant à afficher.
- `Link` : Lien de navigation (évite le rechargement de la page).
- `NavLink` : Lien de navigation avec style actif.
- `useParams` : Hook pour accéder aux paramètres de l’URL (`/utilisateurs/:id`).
- `useNavigate` : Hook pour la navigation programmatique (`navigate('/page')`).
- **Routes imbriquées** : Routes enfants pour une meilleure organisation (`<Route path="/app" element={<App />}> <Route path="settings" element={<Settings />} /> </Route>`).

---

### **📌 Styling**

- **CSS Modules** : Fichiers CSS locaux à un composant (évite les conflits de noms).
- **Styled Components** : Librairie CSS-in-JS pour styliser les composants (`styled.div`).
- **Inline Styles** : Styles appliqués directement via l’attribut `style` (`style={{ color: 'red' }}`).
- **CSS-in-JS** : Approche pour écrire du CSS dans JavaScript (Styled Components, Emotion).
- **Tailwind CSS** : Framework CSS utilitaire (classes prêtes à l’emploi).

---

### **📌 Optimisation**

- `React.memo` : Évite le re-rendu d’un composant si ses props n’ont pas changé.
- `useMemo` : Mémorise une valeur calculée pour éviter de la recalculer.
- `useCallback` : Mémorise une fonction pour éviter sa recréation.
- **Code Splitting** : Charge les composants dynamiquement (`React.lazy` + `Suspense`).
- **Virtualization** : Technique pour ne rendre que les éléments visibles (ex: `react-window`).
- **Bundle Analyzer** : Outil pour analyser la taille du bundle (ex: `webpack-bundle-analyzer`).

---

### **📌 Contexte et Performance**

- **Contexte (Context)** : Mécanisme pour partager des données entre composants sans props.
- **Prop Drilling** : Passer des props à travers plusieurs niveaux de composants (à éviter avec Context).
- **Re-rendu** : Processus de mise à jour d’un composant (déclenché par un changement de props ou d’état).
- **Batching** : Regroupement de plusieurs mises à jour d’état en une seule (optimisation automatique par React).
- **Suspense** : Mécanisme pour gérer le chargement asynchrone (`<Suspense fallback={<Spinner />}>`).

---

### **📌 Hooks Avancés**

- `useLayoutEffect` : Similaire à `useEffect`, mais s’exécute **synchronement** après le rendu (avant le paint).
- `useDebugValue` : Affiche une étiquette pour un hook personnalisé dans les outils de développement React.
- `useId` : Génère un ID unique stable pour les éléments du DOM (React 18+).
- `useTransition` : Marque une mise à jour comme non urgente (pour éviter des blocages de l’UI).
- `useDeferredValue` : Retarde la mise à jour d’une valeur (pour éviter des calculs coûteux).

---

### **📌 Server-Side Rendering (SSR)**

- **SSR** : Rendu côté serveur (le HTML est généré sur le serveur).
- **Next.js** : Framework React pour le SSR, SSG, et ISR.
- **Gatsby** : Framework React pour les sites statiques (SSG).
- `getServerSideProps` : Fonction Next.js pour récupérer des données côté serveur à chaque requête.
- `getStaticProps` : Fonction Next.js pour générer des pages statiques à la build.
- **ISR (Incremental Static Regeneration)** : Mise à jour des pages statiques à intervalles réguliers.

---

---

## **🔹 React : Bonnes Pratiques**

---

### **📌 Organisation du Code**

- **Single Responsibility Principle (SRP)** : Un composant = une responsabilité.
- **Découpage en petits composants** : Préférer des composants petits et réutilisables.
- **Nommage des composants** : Utiliser **PascalCase** (`MonComposant`).
- **Nommage des fichiers** : Utiliser **kebab-case** (`mon-composant.tsx`).
- **Dossiers** : Organiser par **fonctionnalité** (`components/`, `pages/`, `hooks/`, `utils/`).

---

### **📌 Gestion des Props**

- **Typage des props** : Toujours typer les props (TypeScript ou `PropTypes`).
- **Props par défaut** : Définir des valeurs par défaut pour les props optionnelles.
- **Destructuring des props** : Extraire les props directement dans les paramètres (`function MonComposant({ prop1, prop2 }) {}`).
- **Validation des props** : Utiliser `PropTypes` pour valider les props (en développement).

---

### **📌 Gestion de l’État**

- **État local vs global** : Utiliser `useState` pour l’état local, Context/Redux pour l’état global.
- **Éviter la surutilisation de l’état** : Ne pas stocker dans l’état ce qui peut être calculé.
- **Immutabilité** : Toujours créer de **nouveaux objets/tableaux** pour mettre à jour l’état (ex: `setState({ ...state, newValue })`).

---

### **📌 Accessibilité (a11y)**

- **Balises sémantiques** : Utiliser `<header>`, `<nav>`, `<main>`, `<footer>`, etc.
- **Attributs `aria-xx`** : Ajouter des informations pour les lecteurs d’écran (`aria-label`, `aria-hidden`).
- **Contraste des couleurs** : Vérifier que le contraste est suffisant (outils: WebAIM Contrast Checker).
- **Navigation au clavier** : S’assurer que tous les éléments interactifs sont accessibles via le clavier.
- **Focus** : Gérer le focus pour les modales, menus déroulants, etc.

---

### **📌 Sécurité**

- **Ne pas faire confiance aux entrées utilisateur** : Toujours valider et nettoyer les données.
- **Éviter `dangerouslySetInnerHTML`** : Risque de XSS (Cross-Site Scripting).
- **Protéger les tokens** : Ne jamais stocker de tokens sensibles dans le code front-end.
- **CORS** : Configurer correctement les headers CORS pour limiter les accès.
- **CSRF** : Utiliser des tokens CSRF pour protéger les formulaires.

---

---

## **🔹 JavaScript & React : Concepts Transversaux**

---

### **📌 Outils et Écosystème**

- **npm/yarn/pnpm** : Gestionnaire de paquets pour JavaScript.
- **Webpack** : Module bundler pour regrouper les fichiers JS.
- **Vite** : Alternative à Webpack, plus rapide et moderne.
- **Babel** : Transpileur pour convertir du code ES6+ en ES5.
- **ESLint** : Linter pour vérifier la qualité du code.
- **Prettier** : Outil de formatage de code.
- **Git** : Système de contrôle de version.
- **GitHub/GitLab** : Plateformes pour héberger et collaborer sur du code.

---

### **📌 Concepts Web**

- **SPA (Single Page Application)** : Application web qui charge une seule page HTML et met à jour dynamiquement son contenu.
- **CSR (Client-Side Rendering)** : Rendu côté client (React, Vue, Angular).
- **SSR (Server-Side Rendering)** : Rendu côté serveur (Next.js, Nuxt.js).
- **SSG (Static Site Generation)** : Génération de pages statiques à la build (Gatsby, Next.js).
- **PWA (Progressive Web App)** : Application web qui fonctionne comme une app native (service workers, cache).
- **Service Worker** : Script qui s’exécute en arrière-plan pour gérer le cache et les notifications push.
- **LocalStorage** : Stockage local dans le navigateur (persiste après la fermeture).
- **SessionStorage** : Stockage local dans le navigateur (disparaît à la fermeture de l’onglet).
- **Cookies** : Petits fichiers stockés dans le navigateur (utilisés pour l’authentification, le tracking, etc.).

---

### **📌 Concepts Algorithmiques**

- **Big O Notation** : Mesure de la complexité temporelle et spatiale d’un algorithme (ex: O(n), O(log n)).
- **Récursivité** : Technique où une fonction s’appelle elle-même.
- **Algorithme de tri** : Méthodes pour trier des données (ex: Bubble Sort, Quick Sort, Merge Sort).
- **Algorithme de recherche** : Méthodes pour trouver des données (ex: Recherche linéaire, Recherche binaire).
- **Structure de données** : Façons d’organiser les données (ex: Tableaux, Listes chaînées, Arbres, Graphes, Hash Tables).

---

---

## **🎯 Conclusion**

Cette fiche regroupe **toutes les définitions essentielles** en JavaScript et React pour :
✅ **Comprendre les concepts de base** (variables, fonctions, objets, etc.).
✅ **Maîtriser les concepts avancés** (closures, hoisting, asynchrone, etc.).
✅ **Connaître React en profondeur** (hooks, state, routing, etc.).
✅ **Préparer un entretien technique** avec des définitions claires et concises.
