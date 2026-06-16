# **📌 Fiche Révision : TypeScript Approfondi**

*Pour maîtriser le typage statique, les types avancés, les génériques, et répondre aux questions techniques en entretien.*

---

---

## **🔹 1. Introduction à TypeScript**

---

### **📌 Qu’est-ce que TypeScript ?**

- **Définition** : **Sur-ensemble typé de JavaScript** développé par Microsoft.
  - Ajoute un **système de types statiques** à JavaScript.
  - **Compilé en JavaScript** (via le compilateur `tsc`).
- **Avantages** :
  1. **Détection d’erreurs à la compilation** (vs runtime en JS).
  2. **Meilleure maintenabilité** (autocomplétion, documentation).
  3. **Refactoring plus sûr** (renommage de variables, etc.).
  4. **Meilleure collaboration** (le code est plus explicite).
- **Analogie** :
  - JavaScript = **Vélos sans freins** (rapide, mais dangereux).
  - TypeScript = **Vélos avec freins et casque** (sécurisé, mais un peu plus lent à écrire).

---

### **📌 Pourquoi utiliser TypeScript ?**


| **Problème en JavaScript**     | **Solution avec TypeScript**                           |
| ------------------------------ | ------------------------------------------------------ |
| Erreurs de type à l’exécution. | Détection des erreurs **à la compilation**.            |
| Code difficile à comprendre.   | **Typage explicite** → code plus lisible.              |
| Refactoring risqué.            | **Vérification des types** → refactoring plus sûr.     |
| Collaboration difficile.       | **Documentation intégrée** (les types servent de doc). |


---

### **📌 Exemple Minimal**

```typescript
// TypeScript
function direBonjour(nom: string): string {
  return `Bonjour, ${nom} !`;
}

console.log(direBonjour("Max")); // "Bonjour, Max !"
console.log(direBonjour("Max")); // "Bonjour, Max !"

// Compilé en JavaScript :
function direBonjour(nom) {
  return `Bonjour, ${nom} !`;
}
console.log(direBonjour("Max"));
console.log(direBonjour("Max"));
```

---

---

## **🔹 2. Installation et Configuration**

---

### **📌 Installation**

1. **Globalement** (pour utiliser `tsc` en ligne de commande) :
  ```bash
   npm install -g typescript
   tsc --version
  ```
2. **Localement** (pour un projet) :
  ```bash
   npm install typescript --save-dev
  ```

---

### **📌 Initialiser un Projet**

```bash
tsc --init  # Crée un fichier tsconfig.json
```

---

### **📌 Fichier `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES6",          // Version de JS cible
    "module": "commonjs",     // Système de modules
    "strict": true,           // Mode strict (recommandé)
    "esModuleInterop": true,  // Compatibilité avec CommonJS
    "jsx": "react",           // Support JSX (pour React)
    "outDir": "./dist",       // Dossier de sortie
    "rootDir": "./src",       // Dossier source
    "noImplicitAny": true,    // Interdit le type `any` implicite
    "strictNullChecks": true, // Vérifie les null/undefined
    "baseUrl": ".",           // Chemin de base pour les imports
    "paths": {
      "@/*": ["src/*"]        // Alias pour les imports (ex : import ... from '@/components')
    }
  },
  "include": ["src/**/*"],   // Fichiers à inclure
  "exclude": ["node_modules"] // Fichiers à exclure
}
```

---

### **📌 Options de Compilation Importantes**


| Option             | Description                               | Recommandation                       |
| ------------------ | ----------------------------------------- | ------------------------------------ |
| `target`           | Version de JS cible.                      | `"ES6"`                              |
| `module`           | Système de modules.                       | `"commonjs"` ou `"ESNext"`           |
| `strict`           | Active toutes les vérifications strictes. | `true`                               |
| `jsx`              | Support JSX.                              | `"react"`                            |
| `esModuleInterop`  | Compatibilité avec CommonJS.              | `true`                               |
| `strictNullChecks` | Vérifie `null` et `undefined`.            | `true`                               |
| `noImplicitAny`    | Interdit le type `any` implicite.         | `true`                               |
| `allowJs`          | Autorise les fichiers `.js`.              | `true` (pour migrer progressivement) |
| `checkJs`          | Vérifie les fichiers `.js`.               | `true` (si `allowJs` est true)       |


---

---

## **🔹 3. Types de Base**

---

### **📌 Types Primitifs**


| Type        | Description                      | Exemple                          | Valeur par défaut |
| ----------- | -------------------------------- | -------------------------------- | ----------------- |
| `string`    | Texte.                           | `let nom: string = "Bob";`   | `""`              |
| `number`    | Nombre (entier ou décimal).      | `let age: number = 25;`          | `0`               |
| `boolean`   | Vrai ou faux.                    | `let estMajeur: boolean = true;` | `false`           |
| `null`      | Valeur nulle.                    | `let data: null = null;`         | `null`            |
| `undefined` | Variable non initialisée.        | `let x: undefined = undefined;`  | `undefined`       |
| `symbol`    | Valeur unique (ES6).             | `let id: symbol = Symbol("id");` | -                 |
| `bigint`    | Nombre entier très grand (ES11). | `let big: bigint = 123n;`        | `0n`              |


---

### **📌 Types Complexes**

1. **Tableaux** :
  ```typescript
   let nombres: number[] = [1, 2, 3];
   let noms: Array<string> = ["Lola", "Jean"];
  ```
2. **Tuples** (tableau avec types fixes) :
  ```typescript
   let tuple: [string, number] = ["Lola", 25];
  ```
3. **Any** (à éviter) :
  ```typescript
   let variable: any = "n'importe quoi"; // Pas de vérification de type
  ```
4. **Unknown** (meilleure alternative à `any`) :
  ```typescript
   let variable: unknown = "inconnu";
   if (typeof variable === "string") {
     console.log(variable.toUpperCase()); // OK
   }
  ```
5. **Never** (pour les fonctions qui ne retournent jamais) :
  ```typescript
   function erreur(message: string): never {
     throw new Error(message);
   }
  ```

---

### **📌 `void` et `undefined`**

- `void` : Fonction qui **ne retourne rien**.
  ```typescript
  function direBonjour(): void {
    console.log("Bonjour !");
  }
  ```
- `undefined` : Variable non initialisée ou fonction qui ne retourne rien.
  ```typescript
  let x: undefined;
  function f(): undefined {
    return;
  }
  ```

---

---

## **🔹 4. Interfaces et Types**

---

### **📌 Interfaces**

- **Définition** : Structure pour typer un **objet**.
- **Exemple** :
  ```typescript
  interface Utilisateur {
    id: number;
    nom: string;
    age?: number; // Optionnel
    estActif: boolean;
    competences: string[];
  }

  const utilisateur: Utilisateur = {
    id: 1,
    nom: "Steven",
    nom: "Steven",
    estActif: true,
    competences: ["HTML", "CSS", "JavaScript"],
  };
  ```
- **Héritage** :
  ```typescript
  interface Admin extends Utilisateur {
    role: string;
  }

  const admin: Admin = {
    id: 1,
    nom: "Bobby",
    nom: "Bobby",
    estActif: true,
    competences: ["HTML", "CSS", "JavaScript"],
    role: "superadmin",
  };
  ```
- **Méthodes** :
  ```typescript
  interface Personne {
    nom: string;
    direBonjour(): string;
  }

  const personne: Personne = {
    nom: "Toto",
    nom: "Toto",
    direBonjour() {
      return `Bonjour, je m'appelle ${this.nom}`;
    },
  };
  ```

---

### **📌 Types (vs Interfaces)**

- **Syntaxe alternative** :
  ```typescript
  type Utilisateur = {
    id: number;
    nom: string;
    age?: number;
  };
  ```
- **Différences** :

  | **Interfaces**                                | **Types**                            |
  | --------------------------------------------- | ------------------------------------ |
  | Extensibles avec `extends`.                   | Extensibles avec `&` (intersection). |
  | Peuvent être **implémentées** par une classe. | Ne peuvent pas être implémentés.     |
  | **Fusionnable** (déclaration multiple).       | Pas de fusion.                       |
  | Exemple : `interface A { x: number; }`        | Exemple : `type A = { x: number; }`  |

- **Quand utiliser quoi ?** :
  - **Interfaces** : Pour les **objets** (APIs, props, state).
  - **Types** : Pour les **unions**, **tuples**, ou types complexes.

---

### **📌 Implémentation d’Interfaces avec des Classes**

```typescript
interface Personne {
  nom: string;
  age: number;
  direBonjour(): string;
}

class Etudiant implements Personne {
  nom: string;
  age: number;
  universite: string;

  constructor(nom: string, age: number, universite: string) {
    this.nom = nom;
    this.age = age;
    this.universite = universite;
  }

  direBonjour(): string {
    return `Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`;
  }
}


const etudiant = new Etudiant("Stéphane", 25, "Sorbonne");
console.log(etudiant.direBonjour());
```

---

---

## **🔹 5. Classes**

---

### **📌 Déclaration de Classe**

```typescript
class Personne {
  // Propriétés
  nom: string;
  age: number;

  // Constructeur
  constructor(nom: string, age: number) {
    this.nom = nom;
    this.age = age;
  }

  // Méthode
  direBonjour(): string {
    return `Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`;
  }
}

const laura = new Personne("Laura", 28);

console.log(laura.direBonjour());
```

---

### **📌 Modificateurs d’Accès**


| Modificateur | Description                               | Exemple                    |
| ------------ | ----------------------------------------- | -------------------------- |
| `public`     | Accessible partout (défaut).              | `public nom: string;`      |
| `private`    | Accessible uniquement dans la classe.     | `private age: number;`     |
| `protected`  | Accessible dans la classe et ses enfants. | `protected ville: string;` |
| `readonly`   | Lecture seule.                            | `readonly id: number;`     |


**Exemple** :

```typescript
class Personne {
  public nom: string;
  private age: number;

  constructor(nom: string, age: number) {
    this.nom = nom;
    this.age = age;
  }

  public direAge(): string {
    return `J'ai ${this.age} ans.`; // OK : accès dans la classe
  }
}

const personne = new Personne("Gaston", 43);
console.log(personne.nom); // OK
console.log(personne.age); // ❌ Erreur : 'age' est privé
```

---

### **📌 Héritage**

```typescript
class Etudiant extends Personne {
  universite: string;

  constructor(nom: string, age: number, universite: string) {
    super(nom, age); // Appelle le constructeur parent
    this.universite = universite;
  }

  direBonjour(): string {
    return `${super.direBonjour()} Je suis étudiant à ${this.universite}.`;
  }
}

const etudiant = new Etudiant("Leslie", 22, "Sorbonne");
console.log(etudiant.direBonjour());
```

---

### **📌 Classes Abstraites**

- **Définition** : Classe qui **ne peut pas être instanciée** directement (doit être héritée).
- **Exemple** :
  ```typescript
  abstract class Animal {
    abstract faireDuBruit(): void; // Méthode abstraite (doit être implémentée par les enfants)

    manger(): void {
      console.log("Je mange.");
    }
  }

  class Chien extends Animal {
    faireDuBruit(): void {
      console.log("Woof !");
    }
  }

  const chien = new Chien();
  chien.faireDuBruit(); // "Woof !"
  chien.manger(); // "Je mange."
  ```

---

---

## **🔹 6. Génériques (Generics)**

---

### **📌 Qu’est-ce que les Génériques ?**

- **Définition** : Permet de créer des **fonctions/classes réutilisables** avec des types variables.
- **Analogie** : Comme une **boîte vide** que tu peux remplir avec n’importe quel type.
- **Avantages** :
  - **Réutilisabilité** : Une seule fonction peut travailler avec plusieurs types.
  - **Sécurité** : Le compilateur vérifie que les types sont compatibles.

---

### **📌 Fonctions Génériques**

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>("Bonjour"); // output1 est de type string
const output2 = identity<number>(42);        // output2 est de type number
```

---

### **📌 Classes Génériques**

```typescript
class Boite<T> {
  contenu: T;

  constructor(contenu: T) {
    this.contenu = contenu;
  }
}

const boiteString = new Boite<string>("Texte");
const boiteNumber = new Boite<number>(123);
```

---

### **📌 Contraintes de Type**

- **Définition** : Limiter les types acceptés par un générique.
- **Exemple** :
  ```typescript
  interface Longueur {
    length: number;
  }

  function loggingIdentity<T extends Longueur>(arg: T): T {
    console.log(arg.length);
    return arg;
  }

  loggingIdentity("Bonjour"); // OK (string a une propriété length)
  loggingIdentity([1, 2, 3]); // OK (array a une propriété length)
  loggingIdentity(42);        // ❌ Erreur (number n'a pas de length)
  ```

---

### **📌 Génériques avec Clés**

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const personne = { nom: "Paul", age: 29 };
const nom = getProperty(personne, "nom"); // "Paul"
const age = getProperty(personne, "age"); // 29
```

---

---

## **🔹 7. Union et Intersection de Types**

---

### **📌 Union (`|`)**

- **Définition** : Un type peut être **l’un ou l’autre**.
- **Exemple** :
  ```typescript
  type Resultat = string | number;

  function afficher(resultat: Resultat) {
    console.log(resultat);
  }

  afficher("Bonjour"); // OK
  afficher(42);        // OK
  ```

---

### **📌 Intersection (`&`)**

- **Définition** : Un type doit être **les deux à la fois**.
- **Exemple** :
  ```typescript
  interface Personne {
    nom: string;
  }

  interface Employe {
    id: number;
  }

  type PersonneEmploye = Personne & Employe;

  const Lara: PersonneEmploye = {
    nom: "Lara",
    id: 123,
  };
  ```

---

---

## **🔹 8. Typage des Fonctions**

---

### **📌 Typage des Paramètres et Retour**

```typescript
function addition(a: number, b: number): number {
  return a + b;
}
```

---

### **📌 Paramètres Optionnels**

```typescript
function direBonjour(nom: string, age?: number): string {
  return `Bonjour, ${nom}${age ? `, vous avez ${age} ans` : ''} !`;
}
```

---

### **📌 Paramètres par Défaut**

```typescript
function direBonjour(nom: string = "Invité"): string {
  return `Bonjour, ${nom} !`;
}
```

---

### **📌 Fonctions Fléchées**

```typescript
const addition = (a: number, b: number): number => a + b;
```

---

### **📌 Typage des Callbacks**

```typescript
function executerCallback(
  callback: (x: number) => void,
  valeur: number
): void {
  callback(valeur);
}

executerCallback((x) => console.log(x), 42);
```

---

### **📌 Surcharge de Fonctions**

- **Définition** : Définir **plusieurs signatures** pour une même fonction.
- **Exemple** :
  ```typescript
  function faireQuelqueChose(x: number): number;
  function faireQuelqueChose(x: string): string;
  function faireQuelqueChose(x: any): any {
    if (typeof x === "number") {
      return x * 2;
    } else if (typeof x === "string") {
      return x.toUpperCase();
    }
  }

  faireQuelqueChose(5);    // number
  faireQuelqueChose("abc"); // string
  ```

---

---

## **🔹 9. Typage avec React**

---

### **📌 Typage des Props**

```typescript
import { ReactNode } from 'react';

interface Props {
  nom: string;
  age?: number; // Optionnel
  enfants?: ReactNode; // Pour les children
  onClick: () => void; // Fonction sans paramètres
}

function Utilisateur({ nom, age, enfants, onClick }: Props) {
  return (
    <div onClick={onClick}>
      <p>Nom : {nom}</p>
      {age && <p>Âge : {age}</p>}
      {enfants}
    </div>
  );
}

// Utilisation
<Utilisateur nom="Cécile" age={25} onClick={() => console.log("Cliqué !")}>
  <p>Contenu enfant</p>
</Utilisateur>
```

---

### **📌 Typage des Hooks**

1. `useState` :
  ```typescript
   const [count, setCount] = useState<number>(0);
   const [utilisateur, setUtilisateur] = useState<Utilisateur | null>(null);
  ```
2. `useEffect` :
  ```typescript
   useEffect(() => {
     // Code
   }, []); // Pas de typage spécifique nécessaire
  ```
3. `useReducer` :
  ```typescript
   interface State {
     count: number;
   }

   type Action = { type: 'increment' } | { type: 'decrement' };

   function reducer(state: State, action: Action): State {
     switch (action.type) {
       case 'increment':
         return { count: state.count + 1 };
       case 'decrement':
         return { count: state.count - 1 };
       default:
         return state;
     }
   }

   const [state, dispatch] = useReducer(reducer, { count: 0 });
  ```

---

### **📌 Typage des Événements**

```typescript
function Bouton() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Cliqué !", e.currentTarget);
  };

  return <button onClick={handleClick}>Cliquez-moi</button>;
}
```

---

### **📌 Typage des Références (`useRef`)**

```typescript
function MonComposant() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return <input ref={inputRef} type="text" />;
}
```

---

---

## **🔹 10. Types Utilitaires**

---

### 📌 `Partial<T>`

- **Définition** : Rend **toutes les propriétés de `T` optionnelles**.
- **Exemple** :
  ```typescript
  interface Utilisateur {
    id: number;
    nom: string;
    age: number;
  }

  type UtilisateurPartiel = Partial<Utilisateur>;
  // Équivalent à :
  // type UtilisateurPartiel = {
  //   id?: number;
  //   nom?: string;
  //   age?: number;
  // };

  const utilisateur: UtilisateurPartiel = { nom: "Pascal" }; // OK
  ```

---

### 📌 `Readonly<T>`

- **Définition** : Rend **toutes les propriétés de `T` en lecture seule**.
- **Exemple** :
  ```typescript
  interface Utilisateur {
    nom: string;
    age: number;
  }

  type UtilisateurReadonly = Readonly<Utilisateur>;

  const utilisateur: UtilisateurReadonly = { nom: "Tituan", age: 31 };
  utilisateur.nom = "Jean"; // ❌ Erreur : Cannot assign to 'nom' because it is a read-only property
  ```

---

### 📌 `Pick<T, K>`

- **Définition** : Sélectionne **certaines propriétés** de `T`.
- **Exemple** :
  ```typescript
  interface Utilisateur {
    id: number;
    nom: string;
    age: number;
  }

  type UtilisateurNom = Pick<Utilisateur, "nom">;
  // Équivalent à : { nom: string }

  const utilisateur: UtilisateurNom = { nom: "Seb" }; // OK
  ```

---

### 📌 `Omit<T, K>`

- **Définition** : Exclut **certaines propriétés** de `T`.
- **Exemple** :
  ```typescript
  interface Utilisateur {
    id: number;
    nom: string;
    age: number;
  }

  type UtilisateurSansAge = Omit<Utilisateur, "age">;
  // Équivalent à : { id: number; nom: string }

  const utilisateur: UtilisateurSansAge = { id: 1, nom: "Karina" }; // OK
  ```

---

### 📌 `Record<K, T>`

- **Définition** : Crée un type **objet** avec des clés de type `K` et des valeurs de type `T`.
- **Exemple** :
  ```typescript
  type Utilisateurs = Record<string, { nom: string; age: number }>;

  const utilisateurs: Utilisateurs = {
    "1": { nom: "Steph", age: 25 },
    "2": { nom: "Jean", age: 30 },
  };
  ```

---

### 📌 `ReturnType<T>`

- **Définition** : Extrait le **type de retour** d’une fonction `T`.
- **Exemple** :
  ```typescript
  function direBonjour(nom: string): string {
    return `Bonjour, ${nom} !`;
  }

  type RetourDireBonjour = ReturnType<typeof direBonjour>; // string
  ```

---

---

## **🔹 11. Modules et Espaces de Noms**

---

### **📌 Export/Import**

- **Export nommé** :
  ```typescript
  // fichier utils.ts
  export function addition(a: number, b: number): number {
    return a + b;
  }

  export const PI = 3.14;
  ```
  ```typescript
  // fichier main.ts
  import { addition, PI } from './utils';
  ```
- **Export par défaut** :
  ```typescript
  // fichier utils.ts
  export default function addition(a: number, b: number): number {
    return a + b;
  }
  ```
  ```typescript
  // fichier main.ts
  import addition from './utils';
  ```
- **Import tout** :
  ```typescript
  // fichier main.ts
  import * as utils from './utils';
  console.log(utils.addition(2, 3));
  ```

---

### **📌 Espaces de Noms (Namespaces)**

```typescript
namespace MathUtils {
  export function addition(a: number, b: number): number {
    return a + b;
  }

  export function soustraction(a: number, b: number): number {
    return a - b;
  }
}

console.log(MathUtils.addition(2, 3)); // 5
console.log(MathUtils.soustraction(5, 2)); // 3
```

---

### **📌 Modules vs Namespaces**


| **Modules**                                | **Namespaces**                           |
| ------------------------------------------ | ---------------------------------------- |
| **Fichiers séparés**.                      | **Dans un seul fichier**.                |
| `import`/`export`.                     | `namespace`.                         |
| **Recommandés** pour les nouveaux projets. | **Legacy** (moins utilisés aujourd’hui). |


---

---

## **🔹 12. Types Avancés**

---

### **📌 Types Conditionnels**

- **Définition** : Types qui dépendent d’une **condition**.
- **Exemple** :
  ```typescript
  type EstString<T> = T extends string ? true : false;

  type A = EstString<"hello">; // true
  type B = EstString<42>;      // false
  ```

---

### **📌 Types Mappés**

- **Définition** : Transformer les propriétés d’un type.
- **Exemple** :
  ```typescript
  type OptionsFlags<T> = {
    [P in keyof T]?: boolean;
  };

  type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
  };

  type FeatureOptions = OptionsFlags<FeatureFlags>;
  // Équivalent à :
  // type FeatureOptions = {
  //   darkMode?: boolean;
  //   newUserProfile?: boolean;
  // };
  ```

---

### **📌 Types Template Literals**

- **Définition** : Créer des types à partir de **chaînes de caractères littérales**.
- **Exemple** :
  ```typescript
  type EventName = 'click' | 'scroll' | 'mousemove';
  type EventHandlerName = `on${Capitalize<EventName>}`; // "onClick" | "onScroll" | "onMousemove"

  function addEventListener<T extends string>(
    eventName: T,
    handler: (event: any) => void
  ): void {
    // ...
  }

  addEventListener('click', (e) => {}); // OK
  addEventListener('scroll', (e) => {}); // OK
  addEventListener('mousemove', (e) => {}); // OK
  ```

---

---

## **🔹 13. Décorateurs (Decorators)**

---

### **📌 Qu’est-ce qu’un Décorateur ?**

- **Définition** : Fonction qui **modifie le comportement** d’une classe, méthode, ou propriété.
- **Activation** :
  - Dans `tsconfig.json` :
    ```json
    {
      "compilerOptions": {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
      }
    }
    ```
- **Installation** (pour les métadonnées) :
  ```bash
  npm install reflect-metadata
  ```

---

### **📌 Décorateurs de Classe**

```typescript
function logClass(target: Function) {
  console.log(`Classe créée : ${target.name}`);
}

@logClass
class Personne {
  nom: string;
  constructor(nom: string) {
    this.nom = nom;
  }
}
// Affiche : "Classe créée : Personne"
```

---

### **📌 Décorateurs de Méthode**

```typescript
function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(`Appel de la méthode ${propertyKey} avec les arguments : ${JSON.stringify(args)}`);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class Calculatrice {
  @logMethod
  addition(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculatrice();
calc.addition(2, 3); // Affiche : "Appel de la méthode addition avec les arguments : [2,3]"
```

---

### **📌 Décorateurs de Propriété**

```typescript
function logProperty(target: any, propertyKey: string) {
  let value: any;
  const getter = function() {
    console.log(`Accès à la propriété ${propertyKey}`);
    return value;
  };
  const setter = function(newValue: any) {
    console.log(`Modification de la propriété ${propertyKey} avec la valeur : ${newValue}`);
    value = newValue;
  };
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

class Personne {
  @logProperty
  nom: string;

  constructor(nom: string) {
    this.nom = nom;
  }
}

const personne = new Personne("Bob");
// Affiche : "Modification de la propriété nom avec la valeur : Bob"
console.log(personne.nom);
// Affiche : "Accès à la propriété nom"
// Affiche : "Bob"
```

---

---

## **🔹 14. Intégration avec des Librairies Externes**

---

### **📌 Typage des Librairies sans Types**

- **Déclaration de types globaux** :
  ```typescript
  // types.d.ts
  declare module 'ma-librairie' {
    export function maFonction(param: string): number;
  }
  ```
- **Utilisation** :
  ```typescript
  import { maFonction } from 'ma-librairie';
  maFonction("test"); // OK
  ```

---

### **📌 DefinitelyTyped**

- **Définition** : Répertoire de **déclarations de types** pour les librairies JavaScript.
- **Installation** :
  ```bash
  npm install --save-dev @types/nom-de-la-librairie
  ```
- **Exemple** :
  ```bash
  npm install --save-dev @types/lodash
  ```

---

---

## **🔹 15. Questions Fréquentes en Entretien (TypeScript)**

---

### **❓ 1. Quelle est la différence entre `interface` et `type` ?**


| `interface`                           | `type`                                      |
| ----------------------------------------- | ----------------------------------------------- |
| Extensible avec `extends`.                | Extensible avec `&` (intersection).             |
| **Fusionnable** (déclaration multiple).   | Pas de fusion.                                  |
| Peut être **implémentée** par une classe. | Ne peut pas être implémenté.                    |
| Meilleure pour les **objets**.            | Meilleure pour les **unions**, **tuples**, etc. |


**Réponse** :
*"Les **interfaces** et les **types** en TypeScript permettent tous deux de définir la forme d’un objet, mais ils ont des différences clés :

- **Extensibilité** :
  - Les interfaces peuvent être **étendues** avec `extends` :
    ```typescript
    interface A { x: number; }
    interface B extends A { y: number; }
    ```
  - Les types peuvent être **combinés** avec `&` (intersection) :
    ```typescript
    type A = { x: number; };
    type B = A & { y: number; };
    ```
- **Fusion** :
  - Les interfaces peuvent être **fusionnées** (déclarées plusieurs fois) :
    ```typescript
    interface A { x: number; }
    interface A { y: number; } // Fusionnée en { x: number; y: number; }
    ```
  - Les types **ne peuvent pas** être fusionnés.
- **Implémentation** :
  - Une classe peut **implémenter** une interface :
    ```typescript
    interface A { x: number; }
    class B implements A { x = 1; }
    ```
  - Un type **ne peut pas** être implémenté par une classe.
- **Cas d’usage** :
  - Utiliser `**interface**` pour les objets (APIs, props, state).
  - Utiliser `**type**` pour les types complexes (unions, tuples, etc.)."*

---

### **❓ 2. Qu’est-ce que le typage générique et à quoi sert-il ?**

**Réponse** :
*"Les **génériques** en TypeScript permettent de créer des **fonctions, classes ou interfaces réutilisables** qui peuvent travailler avec **plusieurs types** tout en conservant la **sécurité des types**.
**Pourquoi les utiliser ?** :

1. **Réutilisabilité** : Une seule fonction peut être utilisée avec différents types.
2. **Sécurité** : Le compilateur vérifie que les types sont compatibles.
3. **Flexibilité** : Permet de créer des structures de données **typées dynamiquement**.

**Exemple avec une fonction** :

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>("Bonjour"); // output1 est de type string
const output2 = identity<number>(42);        // output2 est de type number
```

Ici, `identity` est une fonction **générique** qui peut accepter n’importe quel type `T` et le retourner tel quel.

**Exemple avec une classe** :

```typescript
class Boite<T> {
  contenu: T;
  constructor(contenu: T) {
    this.contenu = contenu;
  }
}

const boiteString = new Boite<string>("Texte");
const boiteNumber = new Boite<number>(123);
```

Ici, `Boite` est une classe **générique** qui peut stocker n’importe quel type `T`.

**Cas d’usage courants** :

- **Fonctions utilitaires** (ex : `map`, `filter`).
- **Structures de données** (ex : `Array<T>`, `Promise<T>`).
- **APIs** (ex : `fetch<T>(url: string): Promise<T>`)."*

---

### **❓ 3. Comment typer un tableau de plusieurs types ?**

**Réponse** :
"Pour typer un tableau qui peut contenir **plusieurs types**, on utilise une **union de types** avec l’opérateur `|`.
**Exemple** :

```typescript
const tableau: (string | number)[] = ["Steve", 25, "Paris", 100];
```

Ici, `tableau` peut contenir des **strings** ou des **numbers**.

**Autres approches** :

1. **Tuple** (si l’ordre et le nombre d’éléments sont fixes) :
  ```typescript
   const tuple: [string, number] = ["Steve", 25];
  ```
   Ici, le premier élément doit être un `string` et le deuxième un `number`.
2. **Type personnalisé** (pour plus de lisibilité) :
  ```typescript
   type StringOrNumber = string | number;
   const tableau: StringOrNumber[] = ["Steve", 25];
  ```

**Quand utiliser quoi ?** :

- **Union (`|`)** : Quand le tableau peut contenir **n’importe quelle combinaison** des types.
- **Tuple** : Quand le tableau a une **structure fixe** (ex : `[nom, age]`)."

---

### **❓ 4. Qu’est-ce que le type `unknown` et en quoi est-il différent de `any` ?**


| `any`                                          | `unknown`                                        |
| -------------------------------------------------- | ---------------------------------------------------- |
| **Désactive la vérification de type**.             | **Force la vérification de type** avant utilisation. |
| Peut être assigné à n’importe quel type.           | Doit être vérifié avec `typeof` ou `instanceof`.     |
| ❌ **À éviter** (perd les avantages de TypeScript). | ✅ **Recommandé** pour les types dynamiques.          |


**Réponse** :
"`any` et `unknown` sont tous deux des types qui représentent **n’importe quelle valeur**, mais ils ont des **comportements très différents** :

- `any` :
  - **Désactive toutes les vérifications de type**.
  - On peut faire **n’importe quoi** avec une variable de type `any` (appeler des méthodes, accéder à des propriétés, etc.) **sans erreur de compilation**.
  - **Exemple** :
    ```typescript
    let variableAny: any = "n'importe quoi";
    variableAny.toUpperCase(); // OK (même si variableAny est un number)
    variableAny.nonExistant; // OK (pas d'erreur)
    ```
  - **Problème** : On perd **tous les avantages de TypeScript** (sécurité, autocomplétion, etc.).
- `unknown` :
  - **Force à vérifier le type** avant de l’utiliser.
  - On **ne peut pas** faire d’opérations sur une variable de type `unknown` **sans vérification préalable**.
  - **Exemple** :
    ```typescript
    let variableUnknown: unknown = "inconnu";
    variableUnknown.toUpperCase(); // ❌ Erreur : Type 'unknown' n'a pas de méthode 'toUpperCase'
    if (typeof variableUnknown === "string") {
      variableUnknown.toUpperCase(); // OK
    }
    ```
  - **Avantage** : **Sécurisé** tout en permettant de travailler avec des types dynamiques.

**Quand utiliser `unknown` ?** :

- Quand on **ne connaît pas le type** d’une variable à l’avance (ex : données provenant d’une API).
- Quand on veut **forcer une vérification de type** avant utilisation.

**Quand utiliser `any` ?** :

- **Jamais** (ou très rarement, pour des cas très spécifiques comme la migration de code JavaScript)."*

---

### **❓ 5. Comment typer une fonction qui retourne une promesse ?**

**Réponse** :
"Pour typer une fonction qui retourne une **promesse**, on utilise le type générique `Promise<T>`, où `T` est le type de la valeur **résolue** par la promesse.
**Exemple** :

```typescript
async function fetchUtilisateur(id: number): Promise<Utilisateur> {
  const response = await fetch(`https://api.example.com/utilisateurs/${id}`);
  const data: Utilisateur = await response.json();
  return data;
}
```

Ici, `fetchUtilisateur` retourne une `Promise<Utilisateur>`, ce qui signifie que :

- Si la promesse est **résolue**, la valeur sera de type `Utilisateur`.
- Si la promesse est **rejetée**, elle lèvera une erreur (qu’on peut typer avec `catch`).

**Autres exemples** :

1. **Promesse de tableau** :
  ```typescript
   async function fetchUtilisateurs(): Promise<Utilisateur[]> {
     const response = await fetch('https://api.example.com/utilisateurs');
     return response.json();
   }
  ```
2. **Promesse avec `void`** (pour les fonctions qui ne retournent rien) :
  ```typescript
   async function envoyerDonnees(data: any): Promise<void> {
     await fetch('https://api.example.com/donnees', {
       method: 'POST',
       body: JSON.stringify(data),
     });
   }
  ```

**Pourquoi c’est important ?** :

- Cela permet à TypeScript de **vérifier le type** de la valeur résolue.
- Cela améliore la **sécurité** et la **lisibilité** du code asynchrone."

---

### **❓ 6. Qu’est-ce que le type `Partial<T>` et à quoi sert-il ?**

**Réponse** :
"`Partial<T>` est un **type utilitaire** de TypeScript qui rend **toutes les propriétés de `T` optionnelles**.
**Définition** :

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

**Exemple** :

```typescript
interface Utilisateur {
  id: number;
  nom: string;
  age: number;
}

type UtilisateurPartiel = Partial<Utilisateur>;
// Équivalent à :
// type UtilisateurPartiel = {
//   id?: number;
//   nom?: string;
//   age?: number;
// };

const utilisateur: UtilisateurPartiel = { nom: "Bob" }; // OK
```

**Cas d’usage** :

1. **Formulaires** : Quand on veut permettre à l’utilisateur de **remplir seulement certains champs**.
  ```typescript
   function mettreAJourUtilisateur(id: number, données: Partial<Utilisateur>) {
     // Mettre à jour seulement les champs fournis
   }
   mettreAJourUtilisateur(1, { nom: "Jean" }); // OK
  ```
2. **Objets partiels** : Quand on travaille avec des **données incomplètes** (ex : réponse d’une API).
3. **Initialisation progressive** : Quand on construit un objet **étape par étape**.

**Autres types utilitaires similaires** :

- `Required<T>` : Rend toutes les propriétés de `T` **obligatoires**.
- `Readonly<T>` : Rend toutes les propriétés de `T` **en lecture seule**."

---

### **❓ 7. Comment typer un composant React avec des enfants ?**

**Réponse** :
"Pour typer un composant React qui accepte des **enfants**, on utilise le type `ReactNode` (ou `React.ReactNode`) pour la prop `children`.
**Exemple** :

```typescript
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode; // Pour les enfants
  titre: string;
}

function Container({ children, titre }: Props) {
  return (
    <div className="container">
      <h2>{titre}</h2>
      {children}
    </div>
  );
}

// Utilisation
<Container titre="Mon Conteneur">
  <p>Contenu enfant</p>
  <button>Cliquez-moi</button>
</Container>
```

**Pourquoi `ReactNode` ?** :

- `ReactNode` est un type qui représente **tout ce qui peut être rendu par React** :
  - `string`
  - `number`
  - `boolean`
  - `null`
  - `undefined`
  - `JSX.Element`
  - `Fragment`
  - Tableau de `ReactNode`

**Autres approches** :

1. **Typer les enfants avec un type spécifique** :
  ```typescript
   interface Props {
     children: React.ReactElement; // Un seul élément React
   }
  ```
2. **Typer les enfants avec un composant spécifique** :
  ```typescript
   interface Props {
     children: React.ReactElement<PropsDuComposantEnfant>;
   }
  ```

**Bonnes pratiques** :

- Toujours typer `children` avec `ReactNode` pour **maximiser la flexibilité**.
- Si tu veux **restreindre** le type des enfants, utilise un type plus spécifique (ex : `React.ReactElement`)."

---

### **❓ 8. Qu’est-ce que le type `Pick<T, K>` et `Omit<T, K>` ?**

**Réponse** :
"`Pick<T, K>` et `Omit<T, K>` sont deux **types utilitaires** de TypeScript qui permettent de **sélectionner** ou **exclure** des propriétés d’un type.

1. `Pick<T, K>` :
  - **Définition** : Sélectionne **certaines propriétés** de `T`.
  - **Syntaxe** : `Pick<T, "prop1" | "prop2">`
  - **Exemple** :
    ```typescript
    interface Utilisateur {
      id: number;
      nom: string;
      age: number;
      email: string;
    }

    type UtilisateurNomAge = Pick<Utilisateur, "nom" | "age">;
    // Équivalent à :
    // type UtilisateurNomAge = {
    //   nom: string;
    //   age: number;
    // };

    const utilisateur: UtilisateurNomAge = { nom: "Toto", age: 25 }; // OK
    ```
2. `Omit<T, K>` :
  - **Définition** : Exclut **certaines propriétés** de `T`.
  - **Syntaxe** : `Omit<T, "prop1" | "prop2">`
  - **Exemple** :
    ```typescript
    type UtilisateurSansEmail = Omit<Utilisateur, "email">;
    // Équivalent à :
    // type UtilisateurSansEmail = {
    //   id: number;
    //   nom: string;
    //   age: number;
    // };

    const utilisateur: UtilisateurSansEmail = { id: 1, nom: "Leslie", age: 32 }; // OK
    ```

**Cas d’usage** :

- `Pick` : Quand on veut **extraire un sous-ensemble** des propriétés d’un type (ex : pour un formulaire qui ne nécessite que certains champs).
- `Omit` : Quand on veut **exclure certaines propriétés** (ex : pour éviter d’envoyer des données sensibles à une API)."

---

### **❓ 9. Comment typer une API avec TypeScript ?**

**Réponse** :
"Pour typer une API avec TypeScript, on peut utiliser des **interfaces** ou des **types** pour décrire la structure des **requêtes** et des **réponses**.
**Exemple avec `fetch`** :

1. **Définir les types pour la réponse** :
  ```typescript
   interface Utilisateur {
     id: number;
     nom: string;
     email: string;
   }

   interface ReponseUtilisateurs {
     data: Utilisateur[];
     status: number;
   }
  ```
2. **Typer la fonction `fetch`** :
  ```typescript
   async function fetchUtilisateurs(): Promise<ReponseUtilisateurs> {
     const response = await fetch('https://api.example.com/utilisateurs');
     if (!response.ok) {
       throw new Error(`Erreur HTTP : ${response.status}`);
     }
     return response.json();
   }
  ```
3. **Utiliser la fonction** :
  ```typescript
   async function afficherUtilisateurs() {
     try {
       const { data: utilisateurs } = await fetchUtilisateurs();
       console.log(utilisateurs); // Tableau d'Utilisateur
     } catch (erreur) {
       console.error("Erreur :", erreur);
     }
   }
  ```

**Exemple avec Axios** :

1. **Installer Axios et ses types** :
  ```bash
   npm install axios
   npm install --save-dev @types/axios
  ```
2. **Typer la réponse** :
  ```typescript
   import axios, { AxiosResponse } from 'axios';

   interface Utilisateur {
     id: number;
     nom: string;
   }

   async function fetchUtilisateurs(): Promise<Utilisateur[]> {
     const response: AxiosResponse<Utilisateur[]> = await axios.get('https://api.example.com/utilisateurs');
     return response.data;
   }
  ```

**Bonnes pratiques** :

- Toujours **typer les réponses des APIs** pour éviter les erreurs à l’exécution.
- Utiliser des **interfaces** pour décrire la structure des données.
- Gérer les **erreurs** avec `try/catch` et typer les erreurs si possible.
- Pour les APIs complexes, utiliser des **librairies** comme [Zod](https://github.com/colinhacks/zod) pour valider les réponses."

---

### **❓ 10. Comment migrer un projet JavaScript vers TypeScript ?**

**Réponse** :
"Migrer un projet JavaScript vers TypeScript peut sembler intimidant, mais en suivant une **approche progressive**, c’est tout à fait gérable. Voici les étapes que je recommande :

1. **Installer TypeScript** :
  ```bash
   npm install typescript --save-dev
   npm install @types/react @types/react-dom --save-dev # Pour React
  ```
2. **Créer un fichier `tsconfig.json**` :
  ```bash
   npx tsc --init
  ```
  - Configurer `tsconfig.json` pour autoriser les fichiers `.js` :
    ```json
    {
      "compilerOptions": {
        "allowJs": true,
        "checkJs": true,
        "esModuleInterop": true,
        "strict": true
      },
      "include": ["src/**/*"]
    }
    ```
3. **Renommer les fichiers `.js` en `.tsx` (pour les composants React) ou `.ts`** :
  - Commencer par **un ou deux fichiers** pour tester.
  - Exemple : `App.js` → `App.tsx`.
4. **Ajouter des types progressivement** :
  - Commencer par typer les **props des composants** :
  - Typer les **états** :
    ```typescript
    const [count, setCount] = useState<number>(0);
    ```
  - Typer les **fonctions** :
    ```typescript
    function addition(a: number, b: number): number { ... }
    ```
5. **Utiliser `// @ts-ignore` pour les erreurs temporaires** :
  - Si une partie du code est trop complexe à typer immédiatement, on peut utiliser :
  - **À éviter** à long terme, mais utile pour une migration progressive.
6. **Corriger les erreurs une par une** :
  - TypeScript va **signaler des erreurs** dans la console.
  - Corriger les erreurs **une par une** en ajoutant les types manquants.
7. **Utiliser `any` temporairement** :
  - Si un type est trop complexe à définir immédiatement, utiliser `any` :
  - **À remplacer** par un type plus précis dès que possible.
8. **Configurer le linter** :
  - Installer `eslint` et `@typescript-eslint/eslint-plugin` :
  - Créer un fichier `.eslintrc.json` :
    ```json
    {
      "root": true,
      "parser": "@typescript-eslint/parser",
      "plugins": ["@typescript-eslint"],
      "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"]
    }
    ```
9. **Tester le projet** :
  - Vérifier que tout fonctionne comme avant.
  - Corriger les **bugs** introduits par les types.
10. **Répéter pour tous les fichiers** :
  - Une fois que les premiers fichiers sont migrés et testés, répéter le processus pour le reste du projet.

**Outils utiles** :

- `tsc --noEmit` : Vérifie les erreurs de type sans générer de fichiers.
- `ts-migrate` (par Airbnb) : Outil pour migrer automatiquement une partie du code.
- **VS Code** : Excellente intégration avec TypeScript (autocomplétion, suggestions, etc.).

**Bonnes pratiques** :

- **Ne pas tout migrer en une fois** : Faire une migration **progressive**.
- **Prioriser les fichiers critiques** : Commencer par les composants principaux et les fonctions utilitaires.
- **Documenter les types** : Ajouter des commentaires pour expliquer les types complexes.
- **Former l’équipe** : S’assurer que tout le monde comprend les bases de TypeScript."

---

---



## **🔹 16. Ressources pour Aller Plus Loin**

- **Documentation officielle** : [TypeScript Docs](https://www.typescriptlang.org/docs/)
- **Handbook** : [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- **Playground** : [TypeScript Playground](https://www.typescriptlang.org/play) (pour tester du code en ligne)
- **Tutoriels** :
  - [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
  - [Total TypeScript](https://www.totaltypescript.com/) (cours payant mais excellent)
  - [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/) (livre gratuit en ligne)
- **Outils** :
  - [TypeScript ESLint](https://typescript-eslint.io/) (linting pour TypeScript)
  - [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) (déclarations de types pour les librairies JS)
  - [TypeStat](https://github.com/JoshuaKGoldberg/TypeStat) (statistiques sur l’utilisation des types dans un projet)
- **Librairies utiles** :
  - [Zod](https://github.com/colinhacks/zod) (validation de schémas)
  - [io-ts](https://github.com/gcanti/io-ts) (validation runtime)
  - [class-validator](https://github.com/typestack/class-validator) (validation de classes)
- **TypeScript avec React** :
  - [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
  - [TypeScript + React: Best Practices](https://www.sitepoint.com/typescript-react-best-practices/)
- **Communauté** :
  - [TypeScript Discord](https://discord.gg/typescript)
  - [Stack Overflow (Tag TypeScript)](https://stackoverflow.com/questions/tagged/typescript)
