# **📌 Fiche Révision : React Approfondi**

*Pour maîtriser les composants, les hooks, le state management, et répondre aux questions techniques en entretien.*

---

---

## **🔹 1. Introduction à React**

---

### **📌 Qu’est-ce que React ?**

- **Définition** : Bibliothèque JavaScript **déclarative**, **basée sur les composants**, pour construire des **interfaces utilisateur** (UI).
- **Créé par** : Facebook (2013).
- **Caractéristiques clés** :
  1. **Composants** : Découper l’UI en **petits morceaux réutilisables**.
  2. **Virtual DOM** : Optimise les mises à jour du DOM réel.
  3. **Déclaratif** : On décrit **ce qu’on veut** (et non comment le faire).
  4. **Unidirectionnel** : Flux de données **parent → enfant** (via les props).
  5. **JSX** : Syntaxe qui permet d’écrire du **HTML dans JavaScript**.

---

### **📌 Pourquoi utiliser React ?**


| **Avantages**         | **Explications**                                                              |
| --------------------- | ----------------------------------------------------------------------------- |
| **Réutilisabilité**   | Les composants peuvent être réutilisés dans toute l’application.              |
| **Maintenabilité**    | Code plus organisé et plus facile à maintenir.                                |
| **Performance**       | Le Virtual DOM minimise les manipulations du DOM réel.                        |
| **Écosystème riche**  | Beaucoup de librairies (Redux, React Router, Next.js, etc.).                  |
| **Communauté active** | Documentation abondante, tutoriels, support.                                  |
| **Compatibilité**     | Fonctionne avec toutes les technologies modernes (TypeScript, Webpack, etc.). |


---

### **📌 Analogie pour comprendre React**

- **React** = **Lego** :
  - Chaque **composant** est une **brique Lego**.
  - On assemble les briques pour créer des **structures complexes** (pages, applications).
  - Si une brique est cassée, on peut la **remplacer sans tout reconstruire**.

---

### **📌 Exemple Minimal**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

// Composant fonctionnel
function App() {
  return <h1>Bonjour, React !</h1>;
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---

---

## **🔹 2. JSX (JavaScript XML)**

---

### **📌 Qu’est-ce que le JSX ?**

- **Définition** : Syntaxe qui permet d’écrire du **HTML dans JavaScript**.
- **Rôle** : Faciliter la **création d’éléments React**.
- **Transpilation** : Le JSX est **converti en JavaScript** par Babel avant d’être exécuté.

---

### **📌 Règles du JSX**

1. **Toujours retourner un seul élément parent** :
    ```jsx
    return <div><h1>Titre</h1><p>Texte</p></div>;
    ```
    ou avec un **fragment** (`<>...</>`) :
    ```jsx
    return <> <h1>Titre</h1><p>Texte</p> </>;
    ```
2. **Utiliser `className` au lieu de `class`** :
    ```jsx
    <div className="ma-classe">...</div>
    ```
3. **Utiliser `{}` pour insérer du JavaScript** :
    ```jsx
   const nom = "Jean-Pierre";
   return <h1>Bonjour, {nom} !</h1>;
   ```
4. **Les attributs sont en camelCase** :
    ```jsx
    <div onClick={maFonction}>...</div>
    ```
5. **Les styles inline sont des objets** :
    ```jsx
    <div style={{ color: 'red' }}>...</div>
    ```

---

### **📌 JSX vs HTML**


| **JSX**                    | **HTML**                                    |
| -------------------------- | ------------------------------------------- |
| `className`                | `class`                                     |
| `onClick={maFonction}`     | `onclick="maFonction()"`                    |
| `style={{ color: 'red' }}` | `style="color: red;"`                       |
| `{variable}`               | `${variable}` (dans les templates literals) |


---

### **📌 JSX sous le capot**

- Le JSX est **transpilé en `React.createElement()`** :
  ```jsx
  <h1 className="titre">Bonjour</h1>
  ```
  → devient :
  ```javascript
  React.createElement("h1", { className: "titre" }, "Bonjour");
  ```
- `React.createElement()` retourne un **objet** (élément React), pas du HTML.

---

---

## **🔹 3. Composants React**

---

### **📌 Qu’est-ce qu’un composant ?**

- **Définition** : **Morceau d’UI réutilisable** (bouton, carte, formulaire, etc.).
- **Deux types de composants** :
  1. **Composants fonctionnels** (recommandés depuis React 16.8 avec les hooks).
  2. **Composants de classe** (ancienne méthode, encore utilisée dans du code legacy).

---

### **📌 Composants Fonctionnels**

- **Syntaxe** :
  ```jsx
  function MonComposant(props) {
    return <h1>Bonjour, {props.nom} !</h1>;
  }

  // Ou avec arrow function
  const MonComposant = ({ nom }) => <h1>Bonjour, {nom} !</h1>;
  ```
- **Avantages** :
  - **Plus simples** et plus concis.
  - **Meilleures performances** (moins de code, pas de `this`).
  - **Compatibles avec les hooks** (depuis React 16.8).

---

### **📌 Composants de Classe**

- **Syntaxe** :
  ```jsx
  import React, { Component } from 'react';

  class MonComposant extends Component {
    render() {
      return <h1>Bonjour, {this.props.nom} !</h1>;
    }
  }
  ```
- **Cycle de vie** :
  - `componentDidMount()` : Appelé après le premier rendu.
  - `componentDidUpdate()` : Appelé après une mise à jour.
  - `componentWillUnmount()` : Appelé avant la suppression du composant.
- **État** : Géré avec `this.state` et `this.setState()`.
- **Inconvénients** :
  - Plus verbeux.
  - Moins performant que les composants fonctionnels + hooks.

---

### **📌 Quand utiliser chaque type ?**


| **Composants Fonctionnels**                     | **Composants de Classe**                                                               |
| ----------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Recommandés** pour tous les nouveaux projets. | Utilisés dans du **code legacy**.                                                      |
| Plus **simples** et **performants**.            | Nécessaires si on a besoin de **méthodes de cycle de vie** (ex : `componentDidMount`). |
| Compatibles avec les **hooks**.                 | Pas compatibles avec les hooks.                                                        |
| **Pas de `this`.**                             | Utilisent `this` pour accéder aux props et à l’état.                                   |


---

### **📌 Bonnes Pratiques pour les Composants**

1. **Un composant = une responsabilité** :
  - Un composant doit faire **une seule chose** (principe de **Single Responsibility**).
  - Exemple : Un composant `Bouton` ne doit pas gérer la logique de formulaire.
2. **Noms de composants en PascalCase** :
  - ✅ `MonComposant`
  - ❌ `monComposant` ou `mon_composant`
3. **Découper les gros composants** :
  - Si un composant devient trop gros, le **diviser en sous-composants**.
4. **Props explicites** :
  - Utiliser des noms de props **clairs et descriptifs** (ex : `isActive` au lieu de `active`).
5. **Typage des props** (avec TypeScript ou PropTypes) :
  - Toujours typer les props pour une meilleure **maintenabilité**.

---

---

## **🔹 4. Props (Propriétés)**

---

### **📌 Qu’est-ce que les props ?**

- **Définition** : **Données passées du parent à l’enfant** (immuables).
- **Analogie** : Les props sont comme les **paramètres d’une fonction** :
  - Une fonction : `function direBonjour(nom) { ... }`
  - Un composant : `<MonComposant nom="Cécile" />`

---

### **📌 Utilisation des Props**

- **Passage de props** :
  ```jsx
  // Parent
  function App() {
    return <Enfant nom="Raoul" age={25} />;
  }

  // Enfant
  function Enfant({ nom, age }) {
    return <p>Je m'appelle {nom} et j'ai {age} ans.</p>;
  }
  ```
- **Props par défaut** :
  ```jsx
  function Enfant({ nom = "Invité", age = 18 }) {
    return <p>Je m'appelle {nom} et j'ai {age} ans.</p>;
  }
  ```
- **Destructuring des props** :
  ```jsx
  function Enfant(props) {
    const { nom, age } = props;
    return <p>Je m'appelle {nom} et j'ai {age} ans.</p>;
  }
  // Ou directement dans les paramètres :
  function Enfant({ nom, age }) {
    return <p>Je m'appelle {nom} et j'ai {age} ans.</p>;
  }
  ```

---

### **📌 Validation des Props avec PropTypes**

- **Installation** :
  ```bash
  npm install prop-types
  ```
- **Utilisation** :
  ```jsx
  import PropTypes from 'prop-types';

  function Enfant({ nom, age, estActif }) {
    return (
      <div>
        <p>Nom : {nom}</p>
        <p>Âge : {age}</p>
        <p>Statut : {estActif ? "Actif" : "Inactif"}</p>
      </div>
    );
  }

  Enfant.propTypes = {
    nom: PropTypes.string.isRequired, // Obligatoire
    age: PropTypes.number,
    estActif: PropTypes.bool,
  };

  Enfant.defaultProps = {
    age: 18,
    estActif: true,
  };
  ```
- **Types disponibles** :

  | Type                                                                | Description                                                      |
  | ------------------------------------------------------------------- | ---------------------------------------------------------------- |
  | `PropTypes.string`                                                  | Chaîne de caractères.                                            |
  | `PropTypes.number`                                                  | Nombre.                                                          |
  | `PropTypes.bool`                                                    | Booléen.                                                         |
  | `PropTypes.array`                                                   | Tableau.                                                         |
  | `PropTypes.object`                                                  | Objet.                                                           |
  | `PropTypes.func`                                                    | Fonction.                                                        |
  | `PropTypes.node`                                                    | Tout ce qui peut être rendu (string, number, élément JSX, etc.). |
  | `PropTypes.element`                                                 | Élément React.                                                   |
  | `PropTypes.instanceOf(Classe)`                                      | Instance d’une classe.                                           |
  | `PropTypes.oneOf(['valeur1', 'valeur2'])`                           | Une valeur parmi une liste.                                      |
  | `PropTypes.oneOfType([PropTypes.string, PropTypes.number])`         | Un type parmi plusieurs.                                         |
  | `PropTypes.shape({ nom: PropTypes.string, age: PropTypes.number })` | Objet avec une structure spécifique.                             |


---

### **📌 Children (Props Spéciales)**

- **Définition** : Les **enfants** d’un composant (contenu entre les balises d’ouverture et de fermeture).
- **Exemple** :
  ```jsx
  function Parent() {
    return (
      <Enfant>
        <p>Je suis un enfant !</p>
      </Enfant>
    );
  }

  function Enfant({ children }) {
    return <div className="enfant">{children}</div>;
  }
  ```
- **Typage avec TypeScript** :
  ```typescript
  interface Props {
    children?: React.ReactNode;
  }
  ```

---

---

## **🔹 5. État (State)**

---

### **📌 Qu’est-ce que l’état (state) ?**

- **Définition** : Données **internes à un composant** qui peuvent **changer** et déclencher un **re-rendu**.
- **Analogie** :
  - **Props** = **Paramètres d’une fonction** (immuables, passés de l’extérieur).
  - **State** = **Variables locales** (modifiables, internes au composant).

---

### **📌 `useState` (Hook)**

- **Syntaxe** :
  ```jsx
  import { useState } from 'react';

  function Compteur() {
    const [count, setCount] = useState(0); // [valeur, fonction de mise à jour]

    return (
      <div>
        <p>Compteur : {count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    );
  }
  ```
- **Explications** :
  - `useState` retourne un **tableau** avec :
    1. La **valeur actuelle** (`count`).
    2. La **fonction pour la mettre à jour** (`setCount`).
  - **Ne jamais modifier l’état directement** :
    ```jsx
    // ❌ Erreur : Modification directe
    count = count + 1;

    // ✅ Correct : Via setCount
    setCount(count + 1);
    ```
- **Mise à jour avec la valeur précédente** :
  ```jsx
  setCount(prevCount => prevCount + 1); // Utilise la valeur précédente
  ```
  - Utile quand la nouvelle valeur dépend de l’ancienne.

---

### **📌 État et Immutabilité**

- **Règle d’or** : **Toujours traiter l’état comme immuable**.
  - ❌ **Mauvais** (modification directe) :
    ```jsx
    const [utilisateur, setUtilisateur] = useState({ nom: "Cécile" });
    utilisateur.nom = "Jean"; // ❌ Modification directe
    setUtilisateur(utilisateur); // Ne déclenchera pas de re-rendu
    ```
  - ✅ **Bon** (créer un nouvel objet) :
    ```jsx
    setUtilisateur({ ...utilisateur, nom: "Jean" }); // ✅ Nouveau objet
    ```

---

### **📌 État Complexe (Objets, Tableaux)**

1. **Objets** :
  ```jsx
   const [utilisateur, setUtilisateur] = useState({
     nom: "Bob",
     age: 25,
   });

   // Mise à jour d'une propriété
   setUtilisateur({ ...utilisateur, age: 26 });
  ```
2. **Tableaux** :
  ```jsx
   const [taches, setTaches] = useState(["Tâche 1", "Tâche 2"]);

   // Ajouter une tâche
   setTaches([...taches, "Tâche 3"]);

   // Supprimer une tâche
   setTaches(taches.filter(tache => tache !== "Tâche 1"));

   // Mettre à jour une tâche
   setTaches(taches.map(tache => tache === "Tâche 1" ? "Tâche modifiée" : tache));
  ```

---

---

## **🔹 6. Hooks**

---

### **📌 Qu’est-ce qu’un hook ?**

- **Définition** : Fonction qui permet d’utiliser des **fonctionnalités de React** (état, effets de bord, etc.) dans des **composants fonctionnels**.
- **Règles des hooks** :
  1. **Ne pas appeler de hooks dans des boucles, conditions, ou fonctions imbriquées** (toujours au niveau racine du composant).
  2. **Ne pas appeler de hooks dans des composants de classe** (ils sont faits pour les composants fonctionnels).

---

### **📌 `useEffect` (Effets de Bord)**

- **Définition** : Permet d’effectuer des **actions après le rendu** (appels API, abonnements, etc.). Permet de synchroniser un composant React avec un système extérieur.
- Un **effet de bord** (ou side effect en anglais) est toute opération qui interagit avec l'extérieur du composant et qui ne doit pas être exécutée directement dans le rendu (c'est-à-dire dans le corps de la fonction du composant).
ex: Appel Api, abonnement à un événement, manipulation du Dom, etc...
Si on place un effet de bord directement dans le corps du composant, il sera exécuté à chaque rendu, et peut entraîner: boucles infinies, fuite mémoire, comportements inattendus.

C'est un moyen de dire à React : "Fais ça après avoir affiché le composant, ou quand une valeur change."

À quoi ça sert ?\
Faire des actions après le rendu (ex. : lancer une animation, charger des données).\
Nettoyer après soi (ex. : arrêter un timer, supprimer un écouteur d'événement).



🔹 Définition Simple

- **Syntaxe** :
  ```jsx
  import { useEffect } from 'react';

  useEffect(() => {
    // Code à exécuter après le rendu
    console.log("Composant monté ou mis à jour");

    return () => {
      // Code de nettoyage (ex : désabonnements)
      console.log("Composant démonté");
    };
  }, [dependencies]); // Tableau de dépendances
  ```
- **Cas d’usage** :

  | Cas                     | Tableau de dépendances | Explication                        |
  | ----------------------- | ---------------------- | ---------------------------------- |
  | **Montage** (1ère fois) | `[]`                   | S’exécute une fois au montage.     |
  | **Mise à jour**         | `[variable]`           | S’exécute quand `variable` change. |
  | **Démontage**           | `return () => { ... }` | Nettoyage (ex : désabonnements).   |


**Exemple : Appel API au montage** :

```jsx
import { useState, useEffect } from 'react';

function Utilisateurs() {
  const [utilisateurs, setUtilisateurs] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/utilisateurs')
      .then(response => response.json())
      .then(data => setUtilisateurs(data));
  }, []); // [] = pas de dépendances → s'exécute une fois au montage

  return (
    <ul>
      {utilisateurs.map(utilisateur => (
        <li key={utilisateur.id}>{utilisateur.nom}</li>
      ))}
    </ul>
  );
}
```

**Exemple : Abonnement à un événement** :

```jsx
useEffect(() => {
  const handleResize = () => {
    console.log("Fenêtre redimensionnée");
  };
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize); // Nettoyage
  };
}, []);
```

---

### **📌 `useContext` (Contexte)**

- **Définition** : Permet de **partager des données entre composants** sans passer par les props.
- **Cas d’usage** :
  - Thème (light/dark mode).
  - Utilisateur connecté.
  - Langue de l’application.
- **Exemple** :
  ```jsx
  import { createContext, useContext } from 'react';

  // 1. Créer un contexte
  const ThemeContext = createContext('light');

  // 2. Fournir le contexte (parent)
  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }

  // 3. Consommer le contexte (enfant)
  function Toolbar() {
    const theme = useContext(ThemeContext);
    return <div>Thème actuel : {theme}</div>;
  }
  ```

---

### **📌 `useReducer` (Réducteur)**

- **Définition** : Alternative à `useState` pour gérer un **état complexe** (comme Redux).
- **Syntaxe** :
  ```jsx
  import { useReducer } from 'react';

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  function Compteur() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
      <div>
        <p>Compteur : {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      </div>
    );
  }
  ```
- **Avantages** :
  - **Logique centralisée** : Toute la logique de mise à jour est dans le `reducer`.
  - **Prévisible** : L’état est mis à jour de manière **déterministe** (comme Redux).
  - **Testable** : Le `reducer` est une fonction pure, facile à tester.

---

### **📌 `useRef` (Référence)**

- **Définition** : Permet de **stocker une valeur mutable** qui ne déclenche pas de re-rendu. Permet de référencer une valeur qui n’est pas nécessaire au code du rendu lui-même.

C'est comme une boîte pour garder un objet en mémoire.
Une boîte où tu peux stocker une valeur (un élément du DOM, une variable, etc.) sans que React la surveille.
Si tu changes ce qui est dans la boîte, React ne re-rend pas le composant.\
À quoi ça sert ?\
Accéder à un élément du DOM (comme un \<div>, \<canvas>, etc.).\
Garder une valeur entre deux rendus (ex. : un compteur, un timer).


- **Cas d’usage** :
  1. **Accéder à un élément DOM** :
    ```jsx
     import { useRef } from 'react';

     function MonComposant() {
       const inputRef = useRef(null);

       const focusInput = () => {
         inputRef.current.focus();
       };

       return (
         <div>
           <input ref={inputRef} type="text" />
           <button onClick={focusInput}>Focus</button>
         </div>
       );
     }
    ```
  2. **Stocker une valeur entre les rendus** (ex : timer, compteur) :
    ```jsx
     function Compteur() {
       const countRef = useRef(0);

       useEffect(() => {
         countRef.current = countRef.current + 1;
         console.log(`Nombre de rendus : ${countRef.current}`);
       });

       return <button onClick={() => {}}>Cliquez-moi</button>;
     }
    ```

---

### **📌 `useMemo` et `useCallback` (Optimisation)**

1. `**useMemo**` :
  - **Définition** : Mémorise une **valeur calculée** pour éviter de la recalculer à chaque rendu.
  - **Syntaxe** :
    ```jsx
    const result = useMemo(() => {
      return computeExpensiveValue(a, b);
    }, [a, b]); // Recalculé seulement si `a` ou `b` change
    ```
  - **Cas d’usage** :
    - Calculs coûteux.
    - Éviter des re-rendus inutiles.
2. `**useCallback**` :
  - **Définition** : Mémorise une **fonction** pour éviter sa recréation à chaque rendu.
  - **Syntaxe** :
    ```jsx
    const handleClick = useCallback(() => {
      console.log("Cliqué !");
    }, []); // Pas de dépendances → fonction mémorisée
    ```
  - **Cas d’usage** :
    - Passer une fonction comme prop à un composant enfant (pour éviter des re-rendus inutiles).
    - Utiliser avec `useEffect` pour éviter des boucles infinies.

**Exemple avec `useCallback**` :

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Bouton cliqué");
  }, []); // Pas de dépendances → fonction stable

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Enfant onClick={handleClick} />
    </div>
  );
}

function Enfant({ onClick }) {
  useEffect(() => {
    console.log("Enfant re-rendu");
  }, [onClick]);

  return <button onClick={onClick}>Cliquez-moi</button>;
}
```

- Sans `useCallback`, `Enfant` serait re-rendu à chaque fois que `Parent` change (même si `onClick` ne change pas).

---

### **📌 Hooks Personnalisés**

- **Définition** : Créer ses **propres hooks** pour réutiliser de la logique entre composants.
- **Exemple : Hook `useLocalStorage**` :
  ```jsx
  import { useState, useEffect } from 'react';

  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (erreur) {
        console.error(erreur);
        return initialValue;
      }
    });

    const setValue = (value) => {
      try {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (erreur) {
        console.error(erreur);
      }
    };

    return [storedValue, setValue];
  }

  // Utilisation
  function MonComposant() {
    const [nom, setNom] = useLocalStorage("nom", "Aurélie");
    return <input value={nom} onChange={(e) => setNom(e.target.value)} />;
  }
  ```

---

---

## **🔹 7. Cycle de Vie des Composants**

---

### **📌 Composants Fonctionnels (avec Hooks)**


| **Phase**       | **Hook Équivalent**                     | **Exemple**                     |
| --------------- | --------------------------------------- | ------------------------------- |
| **Montage**     | `useEffect(() => { ... }, [])`          | Appel API au chargement.        |
| **Mise à jour** | `useEffect(() => { ... }, [dep])`       | Mise à jour quand `dep` change. |
| **Démontage**   | `return () => { ... }` dans `useEffect` | Nettoyage (désabonnements).     |


---

### **📌 Composants de Classe**


| **Phase**       | **Méthode**                                | **Exemple**                           |
| --------------- | ------------------------------------------ | ------------------------------------- |
| **Montage**     | `componentDidMount()`                      | Appel API au chargement.              |
| **Mise à jour** | `componentDidUpdate(prevProps, prevState)` | Mise à jour quand props/state change. |
| **Démontage**   | `componentWillUnmount()`                   | Nettoyage (désabonnements).           |
| **Rendu**       | `render()`                                 | Retourne le JSX.                      |


**Exemple complet** :

```jsx
class MonComposant extends React.Component {
  componentDidMount() {
    console.log("Composant monté");
    // Appel API, abonnements, etc.
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      console.log("Props 'value' a changé");
    }
  }

  componentWillUnmount() {
    console.log("Composant démonté");
    // Nettoyage
  }

  render() {
    return <div>Mon Composant</div>;
  }
}
```

---

---

## **🔹 8. Gestion des Événements**

---

### **📌 Syntaxe des Événements**

- **Nommage** : `on[Event]` en **camelCase** (ex : `onClick`, `onChange`).
- **Exemple** :
  ```jsx
  function Bouton() {
    const handleClick = () => {
      console.log("Bouton cliqué !");
    };

    return <button onClick={handleClick}>Cliquez-moi</button>;
  }
  ```

---

### **📌 Événements Courants**


| **Événement** | **Description**                       | **Exemple**                           |
| ------------- | ------------------------------------- | ------------------------------------- |
| `onClick`     | Clic de souris.                       | `<button onClick={handleClick}>`      |
| `onChange`    | Changement de valeur (input, select). | `<input onChange={handleChange}>`     |
| `onSubmit`    | Soumission d’un formulaire.           | `<form onSubmit={handleSubmit}>`      |
| `onKeyDown`   | Appui sur une touche.                 | `<input onKeyDown={handleKeyDown}>`   |
| `onMouseOver` | Survol de la souris.                  | `<div onMouseOver={handleMouseOver}>` |
| `onFocus`     | Quand un élément reçoit le focus.     | `<input onFocus={handleFocus}>`       |
| `onBlur`      | Quand un élément perd le focus.       | `<input onBlur={handleBlur}>`         |


---

### **📌 Gestion des Formulaires**

- **Formulaires contrôlés** :
  - L’état du formulaire est géré par **React**.
  - **Exemple** :
    ```jsx
    function Formulaire() {
      const [nom, setNom] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Nom : ${nom}`);
      };

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <button type="submit">Envoyer</button>
        </form>
      );
    }
    ```
- **Formulaires non contrôlés** :
  - Utiliser `useRef` pour accéder aux valeurs.
  - **Exemple** :
    ```jsx
    function Formulaire() {
      const inputRef = useRef();

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Nom : ${inputRef.current.value}`);
      };

      return (
        <form onSubmit={handleSubmit}>
          <input type="text" ref={inputRef} />
          <button type="submit">Envoyer</button>
        </form>
      );
    }
    ```

---

### **📌 Event Delegation (Délégation d’Événements)**

- **Problème** : Ajouter un événement à chaque élément d’une liste dynamique est inefficace.
- **Solution** : Ajouter l’événement au **parent** et utiliser `event.target` pour identifier l’élément cliqué.
- **Exemple** :
  ```jsx
  function Liste({ items }) {
    const handleClick = (e) => {
      if (e.target.tagName === "LI") {
        console.log(`Élément cliqué : ${e.target.textContent}`);
      }
    };

    return (
      <ul onClick={handleClick}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  ```

---

---

## **🔹 9. Listes et Clés**

---

### **📌 Rendu de Listes**

- **Exemple** :
  ```jsx
  function Liste({ items }) {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.nom}</li>
        ))}
      </ul>
    );
  }
  ```

---

### **📌 Pourquoi les Clés (`key`) sont-elles Importantes ?**

- **Rôle** : Aider React à **identifier les éléments** dans une liste et à **optimiser les mises à jour**.
- **Règles** :
  1. Les clés doivent être **uniques** parmi les frères.
  2. Éviter d’utiliser l’**index** comme clé (sauf si la liste est statique).
  3. Préférer un **ID unique** (ex : `item.id`).
- **Exemple** :
  ```jsx
  // ❌ À éviter (index comme clé)
  {items.map((item, index) => <li key={index}>{item}</li>)}

  // ✅ Recommandé (ID unique)
  {items.map(item => <li key={item.id}>{item.nom}</li>)}
  ```

---

### **📌 Que se passe-t-il sans clés ?**

- React **re-rend toute la liste** à chaque changement, ce qui est **inefficace**.
- Peut causer des **bugs** (ex : perte de focus, état incorrect).

---

---

## **🔹 10. Conditional Rendering (Rendu Conditionnel)**

---

### **📌 Opérateur Ternaire**

```jsx
function Bonjour({ estConnecte }) {
  return (
    <div>
      {estConnecte ? <p>Bonjour, utilisateur !</p> : <p>Veuillez vous connecter.</p>}
    </div>
  );
}
```

---

### **📌 `&&` (ET logique)**

```jsx
function Bonjour({ estConnecte }) {
  return (
    <div>
      {estConnecte && <p>Bonjour, utilisateur !</p>}
    </div>
  );
}
```

---

### **📌 `if` dans le rendu**

```jsx
function Bonjour({ estConnecte }) {
  if (estConnecte) {
    return <p>Bonjour, utilisateur !</p>;
  }
  return <p>Veuillez vous connecter.</p>;
}
```

---

### **📌 Composants de Rendu**

- **Définition** : Passer une **fonction comme prop** pour rendre du contenu conditionnellement.
- **Exemple** :
  ```jsx
  function Parent({ renderContent }) {
    return <div>{renderContent()}</div>;
  }

  function App() {
    return (
      <Parent
        renderContent={() => <p>Contenu conditionnel</p>}
      />
    );
  }
  ```

---

---

## **🔹 11. Styling en React**

---

### **📌 CSS Modules**

- **Avantage** : Évite les **conflits de noms de classes** (chaque classe est locale au composant).
- **Exemple** :
  ```jsx
  // fichier MonComposant.module.css
  .maClasse {
    color: red;
  }

  // fichier MonComposant.jsx
  import styles from './MonComposant.module.css';

  function MonComposant() {
    return <div className={styles.maClasse}>Contenu</div>;
  }
  ```

---

### **📌 Styled Components**

- **Avantage** : **CSS-in-JS** (styling directement dans le composant).
- **Installation** :
  ```bash
  npm install styled-components
  ```
- **Exemple** :
  ```jsx
  import styled from 'styled-components';

  const Bouton = styled.button`
    background: ${props => props.primary ? "blue" : "white"};
    color: ${props => props.primary ? "white" : "black"};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;

    &:hover {
      background: ${props => props.primary ? "darkblue" : "lightgray"};
    }
  `;

  function MonComposant() {
    return (
      <div>
        <Bouton primary>Bouton Principal</Bouton>
        <Bouton>Bouton Secondaire</Bouton>
      </div>
    );
  }
  ```

---

### **📌 Inline Styles**

```jsx
function MonComposant() {
  return (
    <div style={{ color: 'red', fontSize: '20px' }}>
      Texte en rouge
    </div>
  );
}
```

- **Inconvénients** :
  - Moins lisible.
  - Pas de **pseudo-classes** (`:hover`, `:focus`).
  - Pas de **media queries**.

---

### **📌 Librairies CSS-in-JS**


| **Librairie**     | **Description**                       | **Lien**                                                |
| ----------------- | ------------------------------------- | ------------------------------------------------------- |
| Styled Components | CSS-in-JS avec support des props.     | [styled-components.com](https://styled-components.com/) |
| Emotion           | Similaire à Styled Components.        | [emotion.sh](https://emotion.sh/)                       |
| JSS               | CSS-in-JS avec syntaxe proche de CSS. | [cssinjs.org](https://cssinjs.org/)                     |


---

---

## **🔹 12. Gestion d’État Avancée**

---

### **📌 State Management (Gestion d’État)**

- **Problème** : Quand l’application grandit, gérer l’état avec `useState` et `useEffect` devient **complexe**.
- **Solutions** :
  1. **Contexte (`Context`)** : Pour partager l’état entre plusieurs composants.
  2. **Redux** : Pour un état **global et prévisible**.
  3. **Zustand** : Alternative plus simple à Redux.
  4. **Recoil** : Gestion d’état pour les applications React (par Facebook).
  5. **Jotai** : Alternative légère à Recoil.

---

### **📌 Context API**

- **Définition** : Permet de **partager des données entre plusieurs composants** sans passer par les props.
- **Exemple** :
  ```jsx
  import { createContext, useContext, useState } from 'react';

  // 1. Créer un contexte
  const ThemeContext = createContext();

  // 2. Fournir le contexte (parent)
  function App() {
    const [theme, setTheme] = useState('light');

    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }

  // 3. Consommer le contexte (enfant)
  function Toolbar() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
      <div>
        <p>Thème actuel : {theme}</p>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Changer de thème
        </button>
      </div>
    );
  }
  ```

---

### **📌 Redux (Brève Introduction)**

- **Concepts clés** :
  1. **Store** : Contient l’**état global** de l’application.
  2. **Actions** : Objets qui décrivent **ce qui s’est passé** (ex : `{ type: 'ADD_TODO', payload: 'Apprendre Redux' }`).
  3. **Reducers** : Fonctions pures qui **mettent à jour l’état** en fonction des actions.
  4. **Dispatch** : Méthode pour **envoyer une action** au store.
- **Exemple simplifié** :
  ```javascript
  // 1. Créer un store
  import { createStore } from 'redux';

  function reducer(state = { count: 0 }, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const store = createStore(reducer);

  // 2. Dispatcher des actions
  store.dispatch({ type: 'INCREMENT' });
  console.log(store.getState()); // { count: 1 }

  // 3. S'abonner aux changements
  store.subscribe(() => {
    console.log("État mis à jour :", store.getState());
  });
  ```
- **Redux avec React** :
  - Utiliser la librairie `react-redux` (`Provider` et `useSelector`/`useDispatch`).
  - **Exemple** :
    ```jsx
    import { Provider, useSelector, useDispatch } from 'react-redux';
    import { createStore } from 'redux';

    const store = createStore(reducer);

    function App() {
      return (
        <Provider store={store}>
          <Compteur />
        </Provider>
      );
    }

    function Compteur() {
      const count = useSelector(state => state.count);
      const dispatch = useDispatch();

      return (
        <div>
          <p>Compteur : {count}</p>
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
          <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
      );
    }
    ```

---

### **📌 Zustand (Alternative à Redux)**

- **Avantages** :
  - **Plus simple** que Redux.
  - **Moins de boilerplate** (pas de reducers, actions, etc.).
  - **Intégration facile** avec React.
- **Installation** :
  ```bash
  npm install zustand
  ```
- **Exemple** :
  ```jsx
  import create from 'zustand';

  // 1. Créer un store
  const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }));

  // 2. Utiliser le store dans un composant
  function Compteur() {
    const { count, increment, decrement } = useStore();

    return (
      <div>
        <p>Compteur : {count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
    );
  }
  ```

---

---

## **🔹 13. React Router (Navigation)**

---

### **📌 Qu’est-ce que React Router ?**

- **Définition** : Librairie pour gérer la **navigation** dans une application React (SPA).
- **Installation** :
  ```bash
  npm install react-router-dom
  ```

---

### **📌 Concepts de Base**

1. `**BrowserRouter**` : Conteneur principal pour la navigation.
2. `**Routes` et `Route**` : Définir les routes de l’application.
3. `**Link**` : Lien de navigation (évite le rechargement de la page).
4. `**NavLink**` : Lien de navigation avec style actif.
5. `**useParams**` : Accéder aux paramètres de l’URL.
6. `**useNavigate**` : Navigation programmatique.

---

### **📌 Exemple de Base**

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<APropos />} />
      </Routes>
    </BrowserRouter>
  );
}

function Accueil() {
  return <h1>Page d'accueil</h1>;
}

function APropos() {
  return <h1>Page À propos</h1>;
}
```

---

### **📌 Routes Dynamiques**

- **Exemple** :
  ```jsx
  <Routes>
    <Route path="/utilisateurs/:id" element={<Utilisateur />} />
  </Routes>

  function Utilisateur() {
    const { id } = useParams();
    return <h1>Utilisateur ID : {id}</h1>;
  }
  ```

---

### **📌 Navigation Programmatique**

- **Exemple** :
  ```jsx
  import { useNavigate } from 'react-router-dom';

  function MonComposant() {
    const navigate = useNavigate();

    const allerAPropos = () => {
      navigate('/about');
    };

    return <button onClick={allerAPropos}>Aller à À propos</button>;
  }
  ```

---

### **📌 Routes Imbriquées**

- **Exemple** :
  ```jsx
  <Routes>
    <Route path="/utilisateurs" element={<Utilisateurs />}>
      <Route path=":id" element={<Utilisateur />} />
      <Route path="nouveau" element={<NouvelUtilisateur />} />
    </Route>
  </Routes>
  ```

---

---

## **🔹 14. Optimisation des Performances**

---

### **📌 Pourquoi optimiser ?**

- **Problèmes courants** :
  - Re-rendus **inutiles** (ex : un composant parent re-rend tous ses enfants).
  - **Lenteur** de l’application.
  - **Mauvaise expérience utilisateur** (ex : lag lors de la saisie).

---

### **📌 Outils d’Optimisation**

1. `**React.memo**` :
  - **Définition** : Évite le re-rendu d’un composant si ses props **n’ont pas changé**.
  - **Exemple** :
    ```jsx
    const MonComposant = React.memo(function MonComposant({ nom }) {
      return <p>Bonjour, {nom} !</p>;
    });
    ```
  - **Limite** : Ne fonctionne que si les props sont **primitives** (string, number, boolean). Pour les objets/tableaux, utiliser `useMemo` ou `useCallback`.
2. `**useMemo**` :
  - **Définition** : Mémorise une **valeur calculée** pour éviter de la recalculer à chaque rendu.
  - **Exemple** :
    ```jsx
    const result = useMemo(() => {
      return computeExpensiveValue(a, b);
    }, [a, b]); // Recalculé seulement si `a` ou `b` change
    ```
3. `**useCallback**` :
  - **Définition** : Mémorise une **fonction** pour éviter sa recréation à chaque rendu.
  - **Exemple** :
    ```jsx
    const handleClick = useCallback(() => {
      console.log("Cliqué !");
    }, []); // Pas de dépendances → fonction mémorisée
    ```
4. **Code Splitting** :
  - **Définition** : Charger les composants **dynamiquement** (lazy loading).
  - **Exemple** :
    ```jsx
    const MonComposant = React.lazy(() => import('./MonComposant'));

    function App() {
      return (
        <div>
          <Suspense fallback={<div>Chargement...</div>}>
            <MonComposant />
          </Suspense>
        </div>
      );
    }
    ```
5. **Éviter les re-rendus inutiles** :
  - **Découper le code** en petits composants.
  - **Utiliser des clés uniques** dans les listes.
  - **Éviter les fonctions inline** dans les props (utiliser `useCallback`).

---

### **📌 Virtualization (Virtualisation)**

- **Problème** : Rendre une **longue liste** (ex : 1000 éléments) peut être lent.
- **Solution** : Ne rendre que les éléments **visibles à l’écran**.
- **Librairies** :
  - [react-window](https://react-window.vercel.app/)
  - [react-virtualized](https://bvaughn.github.io/react-virtualized/)

**Exemple avec `react-window**` :

```jsx
import { FixedSizeList as List } from 'react-window';

function MaListe() {
  const items = Array(1000).fill().map((_, i) => `Élément ${i + 1}`);

  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          {items[index]}
        </div>
      )}
    </List>
  );
}
```

---

---

## **🔹 15. Bonnes Pratiques en React**

---

### **📌 Organisation du Code**

1. **Structure des dossiers** :
  ```
   src/
   ├── components/    # Composants réutilisables
   │   ├── Bouton/
   │   │   ├── Bouton.jsx
   │   │   ├── Bouton.css
   │   │   └── index.js
   │   └── ...
   ├── pages/         # Pages (composants de haut niveau)
   ├── hooks/         # Hooks personnalisés
   ├── utils/         # Fonctions utilitaires
   ├── context/       # Contexte
   ├── App.jsx       # Composant principal
   └── index.js      # Point d'entrée
  ```
2. **Nommage des fichiers** :
  - Utiliser **PascalCase** pour les composants (`MonComposant.jsx`).
  - Utiliser **kebab-case** pour les fichiers non-composants (`mon-utilitaire.js`).
3. **Index Files** :
  - Créer un fichier `index.js` dans chaque dossier pour exporter le composant principal :

---

### **📌 Gestion des Props**

1. **Destructuring** :
  - Toujours **destructurer les props** pour un code plus lisible.
2. **Props par défaut** :
  - Toujours définir des **valeurs par défaut** pour les props optionnelles.
3. **Typage des props** :
  - Utiliser **TypeScript** ou **PropTypes** pour typer les props.

---

### **📌 Gestion de l’État**

1. **État local vs global** :
  - **État local** : Utiliser `useState` pour l’état **spécifique à un composant**.
  - **État global** : Utiliser **Context**, **Redux**, ou **Zustand** pour l’état partagé entre plusieurs composants.
2. **Éviter la surutilisation de l’état** :
  - Ne pas stocker dans l’état ce qui peut être **calculé** (ex : `fullName` si on a déjà `firstName` et `lastName`).
3. **Mettre à jour l’état de manière immuable** :
  - Toujours **créer de nouveaux objets/tableaux** pour mettre à jour l’état.

---

### **📌 Accessibilité (a11y)**

1. **Balises sémantiques** :
  - Utiliser `<button>`, `<nav>`, `<main>`, etc. au lieu de `<div>`.
2. **Attributs `aria-***` :
  - Utiliser `aria-label`, `aria-hidden`, etc. pour améliorer l’accessibilité.
3. **Focus** :
  - S’assurer que tous les éléments interactifs sont **accessibles via le clavier**.
4. **Contraste** :
  - Vérifier que le contraste des couleurs est suffisant (outils : [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)).

---

### **📌 Sécurité**

1. **Éviter `dangerouslySetInnerHTML**` :
  - ❌ **À éviter** (risque de XSS) :
  - ✅ **Préférer** :
    ```jsx
    <div>{userInput}</div>
    ```
2. **Valider les entrées utilisateur** :
  - Toujours **valider et nettoyer** les données avant de les afficher ou de les stocker.

---

---

## **🔹 16. Questions Fréquentes en Entretien (React)**

---

### **❓ 1. Quelle est la différence entre `state` et `props` ?**


| `**state**`                                        | `**props**`                                           |
| -------------------------------------------------- | ----------------------------------------------------- |
| **Données internes** au composant.                 | **Données passées par le parent**.                    |
| **Modifiable** (via `setState` ou `useState`).     | **Immuable** (ne peut pas être modifié par l’enfant). |
| Initialisé dans le composant.                      | Initialisé par le parent.                             |
| Exemple : `const [count, setCount] = useState(0);` | Exemple : `<Enfant nom="Aurélie" />`                  |


**Réponse** :
*"Les **props** sont comme les **paramètres d’une fonction** : elles sont passées de l’extérieur (par le parent) et sont **immuables** dans le composant enfant. Les **state** sont comme des **variables locales** dans un composant : elles sont gérées à l’intérieur du composant et peuvent être **modifiées** avec `setState` ou `useState`.*
*Par exemple, un composant `Compteur` pourrait avoir un **state** `count` pour suivre le nombre de clics, et recevoir une **prop** `initialValue` pour initialiser ce compteur."*

---

### **❓ 2. Pourquoi utiliser des clés (`key`) dans une liste ?**

**Réponse** :
*"Les **clés** (`key`) sont essentielles pour aider React à **identifier les éléments** dans une liste et à **optimiser les mises à jour**.
Quand une liste est re-rendue, React utilise les clés pour :

1. **Identifier** quels éléments ont **changé**, ont été **ajoutés**, ou ont été **supprimés**.
2. **Éviter de re-rendre toute la liste** : Sans clés, React re-rend **tous les éléments** de la liste à chaque changement, ce qui est inefficace.
3. **Préserver l’état** : Si un élément a un état (ex : un champ de formulaire), une clé stable permet à React de **conserver cet état** entre les rendus.

**Règles pour les clés** :

- Les clés doivent être **uniques** parmi les frères.
- Éviter d’utiliser l’**index** comme clé (sauf si la liste est **statique** et ne change jamais).
- Préférer un **ID unique** (ex : `item.id`).

**Exemple** :

```jsx
// ❌ À éviter (index comme clé)
{items.map((item, index) => <li key={index}>{item}</li>)}

// ✅ Recommandé (ID unique)
{items.map(item => <li key={item.id}>{item.nom}</li>)}
```

---

### **❓ 3. Qu’est-ce que le Virtual DOM ?**

**Réponse** :
*"Le **Virtual DOM** est une **représentation légère du DOM réel** en mémoire. Voici comment il fonctionne :

1. **Création** : Quand un composant React est rendu, React crée un **Virtual DOM** correspondant.
2. **Mise à jour** : Quand l’état ou les props changent, React **re-crée le Virtual DOM**.
3. **Diffing** : React **compare** le Virtual DOM actuel avec le précédent (**diffing algorithm**) pour identifier les **différences**.
4. **Reconciliation** : React **met à jour uniquement les parties modifiées** dans le **DOM réel** (**reconciliation**).

**Avantages** :

- **Performance** : Moins de manipulations du DOM réel (qui est lent).
- **Simplicité** : Les développeurs n’ont pas à s’occuper des mises à jour manuelles du DOM.

**Exemple** :
Si on a un composant qui affiche une liste, et qu’un seul élément change, React :

- Re-crée le Virtual DOM avec la nouvelle liste.
- Compare avec l’ancien Virtual DOM.
- Met à jour **uniquement l’élément modifié** dans le DOM réel (au lieu de re-rendre toute la liste)."*

---

### **❓ 4. Quelle est la différence entre `useState` et `useReducer` ?**


| `**useState**`                                         | `**useReducer**`                                                         |
| ------------------------------------------------------ | ------------------------------------------------------------------------ |
| Pour un **état simple** (ex : un compteur).            | Pour un **état complexe** (ex : un panier avec plusieurs actions).       |
| Retourne **une valeur + une fonction de mise à jour**. | Retourne **un état + une fonction `dispatch**`.                          |
| Mise à jour **directe** (`setCount(count + 1)`).       | Mise à jour via **actions** (`dispatch({ type: 'increment' })`).         |
| Exemple : `const [count, setCount] = useState(0);`     | Exemple : `const [state, dispatch] = useReducer(reducer, initialState);` |


**Réponse** :
*"`useState` est parfait pour gérer un **état simple**, comme un compteur ou un champ de formulaire. Il est facile à utiliser et suffisant pour la plupart des cas.*
*`useReducer` est utile quand l’état devient **complexe** et que la logique de mise à jour est **répétitive ou dépendante de plusieurs actions**. Par exemple, pour un panier d’achat, on pourrait avoir des actions comme `ADD_ITEM`, `REMOVE_ITEM`, `CLEAR_CART`, et `useReducer` permet de centraliser toute cette logique dans un **reducer** (une fonction pure).*
*`useReducer` est aussi une bonne introduction à **Redux**, qui utilise le même principe de reducers."*

---

### **❓ 5. Comment optimiser les performances d’une application React ?**

**Réponse** :
*"Pour optimiser les performances d’une application React, je suis plusieurs bonnes pratiques :

1. `**React.memo**` : Évite le re-rendu d’un composant si ses props n’ont pas changé.
  ```jsx
   const MonComposant = React.memo(function MonComposant({ nom }) {
     return <p>Bonjour, {nom} !</p>;
   });
  ```
2. `**useCallback**` : Mémorise une fonction pour éviter sa recréation à chaque rendu.
  ```jsx
   const handleClick = useCallback(() => {
     console.log("Cliqué !");
   }, []); // Pas de dépendances → fonction mémorisée
  ```
3. `**useMemo**` : Mémorise une valeur calculée.
  ```jsx
   const result = useMemo(() => {
     return computeExpensiveValue(a, b);
   }, [a, b]); // Recalculé seulement si `a` ou `b` change
  ```
4. **Code Splitting** : Charger les composants dynamiquement avec `React.lazy`.
  ```jsx
   const MonComposant = React.lazy(() => import('./MonComposant'));
  ```
5. **Éviter les re-rendus inutiles** :
  - Découper le code en **petits composants**.
  - Utiliser des **clés uniques** dans les listes.
  - Éviter les **fonctions inline** dans les props (utiliser `useCallback`).
6. **Virtualization** : Pour les longues listes, utiliser des librairies comme `react-window` pour ne rendre que les éléments visibles.
7. **Éviter les calculs coûteux dans le rendu** : Les déplacer dans `useMemo` ou `useEffect`."*

---

### **❓ 6. Qu’est-ce que le contexte (`Context`) en React et quand l’utiliser ?**

**Réponse** :
*"Le **contexte** (`Context`) est un mécanisme de React qui permet de **partager des données entre plusieurs composants** sans avoir à passer manuellement des props à chaque niveau (prop drilling).
**Cas d’usage** :

- **Thème** (light/dark mode).
- **Utilisateur connecté** (ex : nom, rôle).
- **Langue de l’application**.
- **État global** qui doit être accessible à plusieurs composants.

**Exemple** :

```jsx
// 1. Créer un contexte
const ThemeContext = createContext('light');

// 2. Fournir le contexte (parent)
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 3. Consommer le contexte (enfant)
function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Thème actuel : {theme}</div>;
}
```

**Quand l’utiliser ?** :

- Quand on a des **données qui doivent être accessibles à plusieurs niveaux** de composants.
- Quand on veut **éviter le prop drilling** (passer des props à travers plusieurs niveaux).

**Quand ne pas l’utiliser ?** :

- Pour un **état qui change souvent** (le contexte peut causer des re-rendus inutiles).
- Pour un **état local** (utiliser `useState` à la place).
- Pour un **état complexe** (utiliser Redux ou Zustand à la place)."*

---

### **❓ 7. Comment gérer les formulaires en React ?**

**Réponse** :
*"Il existe deux approches principales pour gérer les formulaires en React :

1. **Formulaires contrôlés** :
  - L’état du formulaire est **géré par React**.
  - Chaque champ est lié à une **prop `value**` et un **écouteur `onChange**`.
  - **Avantages** : Plus de contrôle, validation facile, état toujours à jour.
  - **Exemple** :
    ```jsx
    function Formulaire() {
      const [nom, setNom] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Nom : ${nom}`);
      };

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <button type="submit">Envoyer</button>
        </form>
      );
    }
    ```
2. **Formulaires non contrôlés** :
  - L’état du formulaire est géré par le **DOM** (via `useRef`).
  - **Avantages** : Plus simple pour des formulaires basiques.
  - **Exemple** :
    ```jsx
    function Formulaire() {
      const inputRef = useRef();

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Nom : ${inputRef.current.value}`);
      };

      return (
        <form onSubmit={handleSubmit}>
          <input type="text" ref={inputRef} />
          <button type="submit">Envoyer</button>
        </form>
      );
    }
    ```

**Librairies recommandées** :

- [Formik](https://formik.org/) : Pour les formulaires complexes.
- [React Hook Form](https://react-hook-form.com/) : Performant et simple.
- [Zod](https://github.com/colinhacks/zod) : Pour la validation des schémas (avec TypeScript)."*

---

### **❓ 8. Qu’est-ce que le prop drilling et comment l’éviter ?**

**Réponse** :
*"Le **prop drilling** est une situation où on doit **passer des props à travers plusieurs niveaux de composants** pour atteindre un composant enfant qui en a besoin.
**Exemple** :

```jsx
// ❌ Prop drilling
function App() {
  const theme = "dark";
  return <Parent theme={theme} />;
}

function Parent({ theme }) {
  return <Enfant theme={theme} />;
}

function Enfant({ theme }) {
  return <div>Thème : {theme}</div>;
}
```

**Solutions pour l’éviter** :

1. **Contexte (`Context`)** :
  - Créer un contexte pour partager les données directement.
2. **Redux ou Zustand** :
  - Pour un **état global complexe**, utiliser une librairie de state management.
3. **Composants de rendu (`render props`)** :
  - Passer une **fonction comme prop** pour rendre du contenu.
4. **Hooks personnalisés** :
  - Créer un hook pour partager la logique entre composants.

---

### **❓ 9. Comment fonctionne `useEffect` et quand l’utiliser ?**

**Réponse** :
*"`useEffect` est un hook qui permet d’effectuer des **effets de bord** (side effects) dans un composant fonctionnel. Un effet de bord est une opération qui **interagit avec l’extérieur** du composant (ex : appel API, abonnement à un événement, manipulation du DOM).
**Syntaxe** :

```jsx
useEffect(() => {
  // Code à exécuter après le rendu
  console.log("Composant monté ou mis à jour");

  return () => {
    // Code de nettoyage (ex : désabonnements)
    console.log("Composant démonté");
  };
}, [dependencies]); // Tableau de dépendances
```

**Cas d’usage** :

1. **Montage** (1ère fois) :
  - Appel API au chargement du composant.
  - Abonnement à un événement (ex : `window.addEventListener`).
  - **Exemple** :
    ```jsx
    useEffect(() => {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setData(data));
    }, []); // [] = pas de dépendances → s'exécute une fois au montage
    ```
2. **Mise à jour** :
  - Mettre à jour le DOM en fonction d’une prop ou d’un état.
  - **Exemple** :
    ```jsx
    useEffect(() => {
      document.title = `Vous avez ${count} messages`;
    }, [count]); // S'exécute quand `count` change
    ```
3. **Démontage** :
  - Nettoyer les abonnements ou les timers.
  - **Exemple** :
    ```jsx
    useEffect(() => {
      const timer = setInterval(() => {
        console.log("Tick");
      }, 1000);

      return () => {
        clearInterval(timer); // Nettoyage
      };
    }, []);
    ```

**Quand ne pas utiliser `useEffect` ?** :

- Pour des **calculs dérivés** (utiliser `useMemo` à la place).
- Pour des **mises à jour synchrones** de l’état (utiliser `useState` directement)."*

---

### **❓ 10. Qu’est-ce que les hooks et pourquoi sont-ils importants ?**

**Réponse** :
*"Les **hooks** sont des fonctions qui permettent d’utiliser des **fonctionnalités de React** (état, effets de bord, etc.) dans des **composants fonctionnels**. Avant les hooks (introduits dans React 16.8), ces fonctionnalités étaient réservées aux **composants de classe**.
**Pourquoi les hooks sont-ils importants ?** :

1. **Simplicité** : Les composants fonctionnels deviennent **aussi puissants** que les composants de classe, mais avec **moins de code**.
2. **Réutilisabilité** : On peut **extraire la logique** dans des hooks personnalisés et la réutiliser entre composants.
3. **Lisibilité** : Le code est **plus facile à lire et à maintenir**.
4. **Performance** : Les composants fonctionnels + hooks sont **plus performants** que les composants de classe.

**Règles des hooks** :

1. **Ne pas appeler de hooks dans des boucles, conditions, ou fonctions imbriquées** (toujours au niveau racine du composant).
2. **Ne pas appeler de hooks dans des composants de classe** (ils sont faits pour les composants fonctionnels).

**Exemples de hooks** :

- `useState` : Gérer l’état local.
- `useEffect` : Gérer les effets de bord.
- `useContext` : Accéder au contexte.
- `useReducer` : Gérer un état complexe.
- `useRef` : Accéder à un élément DOM ou stocker une valeur mutable.
- `useMemo` : Mémoriser une valeur calculée.
- `useCallback` : Mémoriser une fonction."*

---

---


---

## **🔹 17. Ressources pour Aller Plus Loin**

- **Documentation officielle** : [React Docs](https://react.dev/)
- **Tutoriels** :
  - [React Tutorial (officiel)](https://react.dev/learn)
  - [Scrimba React](https://scrimba.com/learn/learnreact)
  - [freeCodeCamp React](https://www.freecodecamp.org/learn/front-end-development-libraries/)
- **Hooks** :
  - [useState](https://react.dev/reference/react/useState)
  - [useEffect](https://react.dev/reference/react/useEffect)
  - [useContext](https://react.dev/reference/react/useContext)
  - [useReducer](https://react.dev/reference/react/useReducer)
- **State Management** :
  - [Redux](https://redux.js.org/)
  - [Zustand](https://github.com/pmndrs/zustand)
  - [Recoil](https://recoiljs.org/)
- **Routing** :
  - [React Router](https://reactrouter.com/)
- **Styling** :
  - [Styled Components](https://styled-components.com/)
  - [Emotion](https://emotion.sh/)
  - [CSS Modules](https://github.com/css-modules/css-modules)
- **Outils** :
  - [Create React App](https://create-react-app.dev/)
  - [Vite](https://vitejs.dev/) (alternative plus rapide)
  - [Next.js](https://nextjs.org/) (framework React pour le SSR)
