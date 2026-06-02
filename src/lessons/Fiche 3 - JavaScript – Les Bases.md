# **📌 Fiche Révision : JavaScript Approfondi**

*Pour maîtriser les concepts fondamentaux, les bonnes pratiques, et répondre aux questions techniques en entretien.*

---

---

## **🔹 1. Introduction à JavaScript**

### **📌 Qu’est-ce que JavaScript ?**

- **Définition** : Langage de **programmation** côté client (et serveur avec Node.js) pour :
  - **Rendre les pages web interactives** (réagir aux clics, formulaires, etc.).
  - **Manipuler le DOM** (modifier le HTML/CSS dynamiquement).
  - **Communiquer avec un serveur** (AJAX, Fetch API).
  - **Gérer des données** (tableaux, objets, etc.).
- **Analogie** :
  - HTML = **Squelette** (structure).
  - CSS = **Peau et vêtements** (apparence).
  - JavaScript = **Cerveau et muscles** (comportement).


- *Rappel: le DOM (Document Object Model). Le DOM est une représentation arborescente du document HTML.*
---

### **📌 Comment JavaScript fonctionne-t-il ?**

1. **Chargement** : Le navigateur charge le fichier HTML et rencontre une balise `<script>`.
2. **Parsing (Analyse)** : Le moteur JavaScript (ex : V8 dans Chrome) **lit et compile** le code.
3. **Exécution** : Le code est **exécuté ligne par ligne**.
4. **Manipulation du DOM** : JavaScript peut **modifier le DOM**, déclenchant un **re-rendu** de la page.

---

### **📌 Où placer le JavaScript ?**

1. **Dans le `<head>`** :
  - Le script est chargé **avant** que la page ne soit affichée → Peut bloquer le rendu.
  - Utiliser `defer` pour exécuter le script **après** le chargement du HTML.
    ```html
    <script src="script.js" defer></script>
    ```
2. **À la fin du `<body>`** :
  - Le script est chargé **après** le HTML → Pas de blocage du rendu.
3. **Externe vs Inline** :
  - **Externe** (recommandé) : `<script src="script.js"></script>`
  - **Inline** : `<script>console.log("Hello");</script>`

---

---

## **🔹 2. Variables et Types de Données**

---

### **📌 Déclaration de Variables**


| Mot-clé | Portée      | Réaffectable ? | Hoisting | Exemple         |
| ------- | ----------- | -------------- | -------- | --------------- |
| `var`   | Fonction    | ✅ Oui          | ✅ Oui    | `var x = 10;`   |
| `let`   | Bloc (`{}`) | ✅ Oui          | ❌ Non    | `let y = 20;`   |
| `const` | Bloc (`{}`) | ❌ Non          | ❌ Non    | `const z = 30;` |


**Bonnes pratiques** :

- Utiliser `const` par défaut (pour éviter les réaffectations accidentelles).
- Utiliser `let` si la variable doit être réaffectée.
- Éviter `var` (problèmes de portée et de hoisting).

---

### **📌 Types de Données Primitifs**


| Type        | Description                      | Exemple         | Valeur par défaut |
| ----------- | -------------------------------- | --------------- | ----------------- |
| `string`    | Texte.                           | `"Bonjour"`     | `""`              |
| `number`    | Nombre (entier ou décimal).      | `42`, `3.14`    | `0`               |
| `boolean`   | Vrai ou faux.                    | `true`, `false` | `false`           |
| `null`      | Valeur nulle (explicite).        | `null`          | `null`            |
| `undefined` | Variable non initialisée.        | `let x;`        | `undefined`       |
| `symbol`    | Valeur unique (ES6).             | `Symbol('id')`  | -                 |
| `bigint`    | Nombre entier très grand (ES11). | `123n`          | `0n`              |


**Exemple** :

```javascript
let nom = "Bobby"; // string
let age = 25;        // number
let estMajeur = true; // boolean
let data = null;     // null
let x;              // undefined
```

---

### **📌 Types Complexes**

1. `object` :
  - Structure de données **clé-valeur**.
  - **Exemple** :
    ```javascript
    const personne = {
      nom: "Bobby",
      age: 25,
      competences: ["HTML", "CSS", "JavaScript"],
      direBonjour: function() {
        console.log(`Bonjour, je m'appelle ${this.nom}`);
      }
    };
    ```
  - **Accès aux propriétés** :
    ```javascript
    console.log(personne.nom); // "Bobby"
    console.log(personne["age"]); // 25
    personne.direBonjour(); // "Bonjour, je m'appelle Bobby"
    ```
2. `array` :
  - Liste **ordonnée** de valeurs.
  - **Exemple** :
    ```javascript
    const languages = ["JavaScript", "Python", "Ruby"];
    console.log(languages[0]); // "JavaScript"
    console.log(languages.length); // 3
    ```
3. `function` :
  - Bloc de code **réutilisable**.
  - **Exemple** :
    ```javascript
    function direBonjour(nom) {
      return `Bonjour, ${nom} !`;
    }
    console.log(direBonjour("Bobby")); // "Bonjour, Bobby !"
    ```

---

### 📌 `typeof` et `instanceof`

- `typeof` : Retourne le **type d’une variable**.
  ```javascript
  console.log(typeof "Bonjour"); // "string"
  console.log(typeof 42);        // "number"
  console.log(typeof true);      // "boolean"
  console.log(typeof null);      // "object" ⚠️ (bug historique)
  console.log(typeof undefined); // "undefined"
  console.log(typeof {});        // "object"
  console.log(typeof []);        // "object" ⚠️ (les tableaux sont des objets)
  console.log(typeof function() {}); // "function"
  ```
- `instanceof` : Vérifie si un objet est une **instance d’une classe**.
  ```javascript
  const tableau = [1, 2, 3];
  console.log(tableau instanceof Array); // true
  console.log(tableau instanceof Object); // true (un tableau est un objet)
  ```

---

---

## **🔹 3. Opérateurs**

---

### **📌 Opérateurs Arithmétiques**


| Opérateur | Description     | Exemple           | Résultat |
| --------- | --------------- | ----------------- | -------- |
| `+`       | Addition.       | `5 + 3`           | `8`      |
| `-`       | Soustraction.   | `5 - 3`           | `2`      |
| `*`       | Multiplication. | `5 * 3`           | `15`     |
| `/`       | Division.       | `6 / 2`           | `3`      |
| `%`       | Modulo (reste). | `5 % 2`           | `1`      |
| `**`      | Puissance.      | `2 ** 3`          | `8`      |
| `++`      | Incrémentation. | `let x = 5; x++;` | `x = 6`  |
| `--`      | Décrémentation. | `let x = 5; x--;` | `x = 4`  |


**Exemple avec `+` :**

```javascript
console.log(5 + 3); // 8 (addition numérique)
console.log("5" + 3); // "53" (concaténation de strings)
console.log(5 + "3"); // "53" (concaténation)
console.log(5 + +3); // 8 (le + devant 3 le convertit en nombre)
```

---

### **📌 Opérateurs de Comparaison**


| Opérateur | Description                        | Exemple     | Résultat |
| --------- | ---------------------------------- | ----------- | -------- |
| `==`      | Égalité (avec conversion).         | `5 == "5"`  | `true`   |
| `===`     | Égalité stricte (sans conversion). | `5 === "5"` | `false`  |
| `!=`      | Différent (avec conversion).       | `5 != "5"`  | `false`  |
| `!==`     | Différent strict.                  | `5 !== "5"` | `true`   |
| `>`       | Supérieur à.                       | `5 > 3`     | `true`   |
| `<`       | Inférieur à.                       | `5 < 3`     | `false`  |
| `>=`      | Supérieur ou égal à.               | `5 >= 5`    | `true`   |
| `<=`      | Inférieur ou égal à.               | `5 <= 3`    | `false`  |


**⚠️ Attention** :

- Toujours utiliser `===` et `!==` pour éviter les conversions de type implicites.
- **Exemple de piège** :
  ```javascript
  console.log([] == ![]); // true ([] est converti en "", ![] est false, "" == false → true)
  console.log([] === ![]); // false
  ```

---

### **📌 Opérateurs Logiques**


| Opérateur | Description  | Exemple         | Résultat |
| --------- | ------------ | --------------- | -------- |
| `&&`      | ET logique.  | `true && false` | `false`  |
| `\|\|`    | OU logique.  | `true \|\| false` | `true`   |
| `!`       | NON logique. | `!true`         | `false`  |


**Exemple** :

```javascript
const age = 25;
const estMajeur = age >= 18;
const aLePermis = true;

if (estMajeur && aLePermis) {
  console.log("Peut conduire.");
} else {
  console.log("Ne peut pas conduire.");
}
```

---

### **📌 Opérateurs Binaires**


| Opérateur | Description        | Exemple  | Résultat (binaire) | Résultat (décimal)   |
| --------- | ------------------ | -------- | ------------------ | -------------------- |
| `&`       | ET binaire.        | `5 & 3`  | `0101 & 0011`      | `0001` → `1`         |
| `\|`       | OU binaire.        | `5 \| 3`  | `0101 \| 0011`      | `0111` → `7`         |
| `^`       | OU exclusif.       | `5 ^ 3`  | `0101 ^ 0011`      | `0110` → `6`         |
| `~`       | NON binaire.       | `~5`     | `~0101`            | `...11111010` → `-6` |
| `<<`      | Décalage à gauche. | `5 << 1` | `0101 << 1`        | `1010` → `10`        |
| `>>`      | Décalage à droite. | `5 >> 1` | `0101 >> 1`        | `0010` → `2`         |


---

### **📌 Opérateur de Chaînage Optionnel (`?.`)**

- **Rôle** : Accéder à une propriété d’un objet **sans déclencher d’erreur** si l’objet est `null` ou `undefined`.
- **Exemple** :
  ```javascript
  const utilisateur = { nom: "Bobby", adresse: { ville: "Paris" } };
  console.log(utilisateur.adresse?.ville); // "Paris"
  console.log(utilisateur.tel?.numero); // undefined (pas d'erreur)
  ```

---

### **📌 Opérateur Nullish Coalescing (`??`)**

- **Rôle** : Retourne la **première valeur définie** (ni `null` ni `undefined`).
- **Différence avec `||` :
  - `||` retourne la première valeur **vérité** (`true`, `1`, `"hello"`, etc.).
  - `??` retourne la première valeur **non-nullish** (`null` ou `undefined`).
- **Exemple** :
  ```javascript
  const x = null;
  const y = undefined;
  const z = 0;

  console.log(x || 10); // 10 (x est falsy)
  console.log(x ?? 10); // 10 (x est null)
  console.log(z || 10); // 10 (z est falsy)
  console.log(z ?? 10); // 0 (z est défini, même si falsy)
  ```

---

---

## **🔹 4. Structures de Contrôle**

---

### **📌 Conditions (`if`, `else if`, `else`)**

```javascript
const age = 25;

if (age < 18) {
  console.log("Mineur");
} else if (age >= 18 && age < 65) {
  console.log("Adulte");
} else {
  console.log("Senior");
}
```

**Bonnes pratiques** :

- Éviter les conditions **trop imbriquées** (utiliser des fonctions ou des `switch`).
- Utiliser des **noms de variables clairs** pour les conditions.

---

### **📌 Opérateur Ternaire (`? :`)**

- **Syntaxe** : `condition ? valeurSiVrai : valeurSiFaux`
- **Exemple** :
  ```javascript
  const estMajeur = age >= 18 ? "Adulte" : "Mineur";
  console.log(estMajeur); // "Adulte" si age >= 18
  ```

---

### **📌 `switch`**

```javascript
const jour = "lundi";
switch (jour) {
  case "lundi":
    console.log("Début de la semaine");
    break;
  case "vendredi":
    console.log("Fin de la semaine");
    break;
  default:
    console.log("Jour normal");
}
```

**Bonnes pratiques** :

- Toujours ajouter un `break` pour éviter le **fall-through** (sauf si intentionnel).
- Toujours ajouter un `default` pour gérer les cas non prévus.

---

### **📌 Boucles**

1. `for` :
  ```javascript
   for (let i = 0; i < 5; i++) {
     console.log(i); // 0, 1, 2, 3, 4
   }
  ```
  - **Structure** : `for (initialisation; condition; incrémentation) { ... }`
2. `while` :
  ```javascript
   let i = 0;
   while (i < 5) {
     console.log(i); // 0, 1, 2, 3, 4
     i++;
   }
  ```
3. `do...while` :
  ```javascript
   let i = 0;
   do {
     console.log(i); // 0, 1, 2, 3, 4
     i++;
   } while (i < 5);
  ```
  - Différence avec `while` : Le bloc est **exécuté au moins une fois**, même si la condition est fausse.

4. `for...of` (ES6) :
  - Pour itérer sur les **valeurs** d’un tableau ou d’une chaîne.

5. `for...in` :
  - Pour itérer sur les **clés** d’un objet (ou les indices d’un tableau).
  - **⚠️ Attention** : `for...in` itère aussi sur les **propriétés héritées** (prototype). Utiliser `hasOwnProperty` pour les filtrer :
    ```javascript
    for (const cle in personne) {
      if (personne.hasOwnProperty(cle)) {
        console.log(cle);
      }
    }
    ```

---

---

## **🔹 5. Fonctions**

---

### **📌 Déclaration de Fonction**

1. **Fonction classique** :
  ```javascript
   function direBonjour(nom) {
     return `Bonjour, ${nom} !`;
   }
  ```
  - **Hoisting** : La fonction est **disponible avant sa déclaration** (mais pas les variables `let`/`const` à l’intérieur).
2. **Fonction fléchée (arrow function)** :
  ```javascript
   const direBonjour = (nom) => `Bonjour, ${nom} !`;
  ```
  - **Pas de `this` propre** : Hérite du `this` du contexte parent.
  - **Pas de `arguments`** : Utiliser les **paramètres rest** (`...args`) à la place.
  - **Pas de hoisting** : Doit être déclarée avant d’être utilisée.
3. **Fonction anonyme** :
  ```javascript
   const direBonjour = function(nom) {
     return `Bonjour, ${nom} !`;
   };
  ```

---

### **📌 Paramètres et Arguments**

1. **Paramètres par défaut** :
  ```javascript
   function direBonjour(nom = "Invité") {
     return `Bonjour, ${nom} !`;
   }
   direBonjour(); // "Bonjour, Invité !"
  ```
2. **Arguments variables (`...rest`)** :
  ```javascript
   function somme(...nombres) {
     return nombres.reduce((acc, nb) => acc + nb, 0);
   }
   somme(1, 2, 3); // 6
  ```
3. **Destructuring des paramètres** :
- Le **destructuring** en JavaScript est une syntaxe qui permet d'extraire des valeurs d'un tableau ou d'un objet et de les assigner à des variables distinctes en une seule ligne.
  ```javascript
   function afficherUtilisateur({ nom, age }) {
     console.log(`Nom : ${nom}, Âge : ${age}`);
   }
   const utilisateur = { nom: "Bobby", age: 25 };
   afficherUtilisateur(utilisateur); // "Nom : Bobby, Âge : 25"
  ```

---

### **📌 Portée des Variables (`scope`)**

1. **Portée globale** :
  - Variable accessible **partout** dans le script.
2. **Portée de fonction** :
  - Variable accessible **uniquement dans la fonction** (avec `var`).
3. **Portée de bloc** :
  - Variable accessible **uniquement dans le bloc** (`{}`) (avec `let`/`const`).

---

### **📌 Fermetures (Closures)**

- **Définition** : Une **fermeture** est une fonction qui **retient l’accès à son environnement lexical** (variables du contexte parent) même après que ce contexte ait été exécuté.
- **Exemple** :
  ```javascript
  function outer() {
    const message = "Bonjour";
    return function inner() {
      console.log(message); // Accède à `message` même après que `outer` ait fini
    };
  }
  const maClosure = outer();
  maClosure(); // "Bonjour"
  ```
- **Cas d’usage** :
  - **Encapsulation** : Créer des variables privées.
  - **Callbacks** : Conserver un état entre les appels.
  - **Modules** : Implémenter des modules en JavaScript.

---

### **📌 Fonctions Fléchées vs Fonctions Classiques**


| **Fonctions Classiques**                                | **Fonctions Fléchées**                                          |
| ------------------------------------------------------- | --------------------------------------------------------------- |
| Ont leur propre `this`.                                 | **Héritent** du `this` du contexte parent.                      |
| Ont leur propre `arguments`.                            | N’ont pas d’`arguments` (utiliser `...rest`).                   |
| Peuvent être utilisées comme **constructeurs** (`new`). | **Ne peuvent pas** être utilisées comme constructeurs.          |
| **Hoisting** : Disponibles avant leur déclaration.      | **Pas de hoisting** : Doivent être déclarées avant utilisation. |
| Syntaxe plus verbeuse.                                  | Syntaxe plus concise.                                           |


**Exemple avec `this**` :

```javascript
const objet = {
  nom: "Bobby",
  direBonjour: function() {
    console.log(`Bonjour, ${this.nom}`); // "Bonjour, Bobby"
  },
  direBonjourFlechee: () => {
    console.log(`Bonjour, ${this.nom}`); // ❌ `this` = window (ou undefined en mode strict)
  }
};
objet.direBonjour(); // OK
objet.direBonjourFlechee(); // ❌ Erreur
```

---

---

## **🔹 6. Tableaux (Arrays)**

---

### **📌 Création et Accès**

```javascript
const fruits = ["pomme", "banane", "orange"];
console.log(fruits[0]); // "pomme"
console.log(fruits.length); // 3
console.log(fruits[fruits.length - 1]); // "orange" (dernier élément)
```

---

### **📌 Méthodes de Tableau**

#### **📌 Ajout/Suppression**


| Méthode     | Description                      | Exemple                         | Modifie le tableau ? |
| ----------- | -------------------------------- | ------------------------------- | -------------------- |
| `push()`    | Ajoute un élément à la **fin**.  | `fruits.push("kiwi")`           | ✅ Oui                |
| `pop()`     | Supprime le **dernier** élément. | `fruits.pop()`                  | ✅ Oui                |
| `unshift()` | Ajoute un élément au **début**.  | `fruits.unshift("fraise")`      | ✅ Oui                |
| `shift()`   | Supprime le **premier** élément. | `fruits.shift()`                | ✅ Oui                |
| `splice()`  | Supprime/remplace des éléments.  | `fruits.splice(1, 1, "mangue")` | ✅ Oui                |
| `concat()`  | Fusionne deux tableaux.          | `fruits.concat(["kiwi"])`       | ❌ Non                |


**Exemple avec `splice**` :

```javascript
const fruits = ["pomme", "banane", "orange"];
// Supprimer 1 élément à partir de l'index 1
fruits.splice(1, 1); // ["pomme", "orange"]
// Remplacer 1 élément à partir de l'index 1 par "mangue"
fruits.splice(1, 1, "mangue"); // ["pomme", "mangue", "orange"]
```

---

#### **📌 Recherche et Filtrage**


| Méthode       | Description                                          | Exemple                                         | Retourne                    |
| ------------- | ---------------------------------------------------- | ----------------------------------------------- | --------------------------- |
| `indexOf()`   | Trouve l’**index** d’un élément.                     | `fruits.indexOf("banane")`                      | `1` (ou `-1` si non trouvé) |
| `includes()`  | Vérifie si un élément est présent.                   | `fruits.includes("banane")`                     | `true`/`false`              |
| `find()`      | Trouve le **premier élément** correspondant.         | `fruits.find(fruit => fruit === "banane")`      | `"banane"` ou `undefined`   |
| `findIndex()` | Trouve l’**index** du premier élément correspondant. | `fruits.findIndex(fruit => fruit === "banane")` | `1` ou `-1`                 |
| `filter()`    | Filtre les éléments.                                 | `fruits.filter(fruit => fruit.length > 5)`      | Nouveau tableau             |


**Exemple avec `filter`** :

```javascript
const fruits = ["pomme", "banane", "orange", "kiwi"];
const fruitsLongs = fruits.filter(fruit => fruit.length > 5);
console.log(fruitsLongs); // ["pomme", "banane", "orange"]
```

---

#### **📌 Transformation**


| Méthode         | Description                                | Exemple                                               | Retourne                         |
| --------------- | ------------------------------------------ | ----------------------------------------------------- | -------------------------------- |
| `map()`         | Applique une fonction à chaque élément.    | `fruits.map(fruit => fruit.toUpperCase())`            | Nouveau tableau                  |
| `reduce()`      | Réduit le tableau à une **valeur unique**. | `fruits.reduce((acc, fruit) => acc + fruit, "")`      | `"pommebananeorange"`            |
| `reduceRight()` | Réduit de **droite à gauche**.             | `fruits.reduceRight((acc, fruit) => acc + fruit, "")` | `"orangebananepomme"`            |
| `flat()`        | Aplatit un tableau imbriqué.               | `[[1, 2], [3, 4]].flat()`                             | `[1, 2, 3, 4]`                   |
| `flatMap()`     | `map` + `flat` (1 niveau).                 | `fruits.flatMap(fruit => [fruit, fruit.length])`      | `["pomme", 5, "banane", 6, ...]` |


**Exemple avec `map`** :

```javascript
const nombres = [1, 2, 3];
const carres = nombres.map(nb => nb ** 2);
console.log(carres); // [1, 4, 9]
```

**Exemple avec `reduce`** :

```javascript
const nombres = [1, 2, 3, 4];
const somme = nombres.reduce((acc, nb) => acc + nb, 0);
console.log(somme); // 10
```

---

#### **📌 Tri**


| Méthode     | Description                     | Exemple            |
| ----------- | ------------------------------- | ------------------ |
| `sort()`    | Trie les éléments **en place**. | `fruits.sort()`    |
| `reverse()` | Inverse l’ordre des éléments.   | `fruits.reverse()` |


**Exemple avec `sort`** :

```javascript
const nombres = [3, 1, 4, 2];
nombres.sort((a, b) => a - b); // [1, 2, 3, 4] (tri croissant)
nombres.sort((a, b) => b - a); // [4, 3, 2, 1] (tri décroissant)

const fruits = ["pomme", "banane", "orange"];
fruits.sort(); // ["banane", "orange", "pomme"] (tri alphabétique)
```

---

#### **📌 Autres Méthodes Utiles**


| Méthode           | Description                                   | Exemple                                             |
| ----------------- | --------------------------------------------- | --------------------------------------------------- |
| `slice()`         | Extrait une partie du tableau.                | `fruits.slice(1, 3)`                                |
| `join()`          | Convertit le tableau en chaîne.           | `fruits.join(", ")`                                 |
| `toString()`      | Convertit le tableau en chaîne.               | `fruits.toString()`                                 |
| `Array.isArray()` | Vérifie si une variable est un tableau.       | `Array.isArray(fruits)`                             |
| `Array.from()`    | Crée un tableau à partir d’un objet iterable. | `Array.from("hello")` → `["h", "e", "l", "l", "o"]` |


**Exemple avec `slice`** :

```javascript
const fruits = ["pomme", "banane", "orange", "kiwi"];
const sousTableau = fruits.slice(1, 3); // ["banane", "orange"]
```

---

---

## **🔹 7. Objets**

---

### **📌 Création et Accès**

```javascript
// Littéral d'objet
const personne = {
  nom: "Bobby",
  age: 25,
  competences: ["HTML", "CSS", "JavaScript"],
  direBonjour: function() {
    console.log(`Bonjour, je m'appelle ${this.nom}`);
  }
};

// Accès aux propriétés
console.log(personne.nom); // "Bobby"
console.log(personne["age"]); // 25
personne.direBonjour(); // "Bonjour, je m'appelle Bobby"

// Ajout/Suppression de propriétés
personne.ville = "Paris"; // Ajout
delete personne.age; // Suppression
```

---

### **📌 Méthodes des Objets**


| Méthode            | Description                                                                    | Exemple                                                                      |
| ------------------ | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `Object.keys()`    | Récupère les **clés** de l’objet.                                              | `Object.keys(personne)` → `["nom", "age", "competences"]`                    |
| `Object.values()`  | Récupère les **valeurs** de l'objet.                                           | `Object.values(personne)` → `["Bobby", 25, ["HTML", "CSS", "JavaScript"]]` |
| `Object.entries()` | Récupère les **paires [clé, valeur]**.                                         | `Object.entries(personne)` → `[["nom", "Bobby"], ["age", 25], ...]`        |
| `Object.assign()`  | Copie les propriétés d’un objet vers un autre.                                 | `Object.assign({}, personne, { ville: "Paris" })`                            |
| `Object.freeze()`  | Empêche toute modification de l’objet.                                         | `Object.freeze(personne)`                                                    |
| `Object.seal()`    | Empêche l’ajout/suppression de propriétés (mais permet la modification).       | `Object.seal(personne)`                                                      |
| `hasOwnProperty()` | Vérifie si une clé existe **directement** sur l’objet (pas dans le prototype). | `personne.hasOwnProperty("nom")` → `true`                                    |


**Exemple avec `Object.entries`** :

```javascript
const personne = { nom: "Bobby", age: 25 };
for (const [cle, valeur] of Object.entries(personne)) {
  console.log(`${cle}: ${valeur}`);
}
// "nom: Bobby"
// "age: 25"
```

---

### **📌 Destructuring (ES6)**

- **Définition** : Extraire des propriétés d’un objet dans des variables.
- **Exemple** :
  ```javascript
  const personne = { nom: "Bobby", age: 25, ville: "Paris" };
  const { nom, age } = personne;
  console.log(nom); // "Bobby"
  console.log(age); // 25

  // Avec alias
  const { nom: prenom } = personne;
  console.log(prenom); // "Bobby"

  // Valeurs par défaut
  const { pays = "France" } = personne;
  console.log(pays); // "France" (car `pays` n'existe pas dans `personne`)
  ```

---

### **📌 Spread Operator (`...`)**

- **Rôle** : **Étaler** les propriétés d’un objet (ou les éléments d’un tableau) dans un autre.
- **Exemple avec les objets** :
  ```javascript
  const personne1 = { nom: "Bobby", age: 25 };
  const personne2 = { ...personne1, ville: "Paris" };
  console.log(personne2); // { nom: "Bobby", age: 25, ville: "Paris" }

  // Fusionner deux objets
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  const fusion = { ...obj1, ...obj2 };
  console.log(fusion); // { a: 1, b: 3, c: 4 } (obj2 écrase obj1 pour `b`)
  ```

---

### **📌 `this` en JavaScript**

- **Définition** : `this` fait référence à l’**objet courant** (contexte d’exécution).
- **Cas d’usage** :
  1. **Dans une méthode d’objet** : `this` = l’objet.
    ```javascript
     const personne = {
       nom: "Bobby",
       direBonjour() {
         console.log(`Bonjour, ${this.nom}`); // "Bonjour, Bobby"
       }
     };
     personne.direBonjour();
    ```
  2. **Dans une fonction classique** : `this` = l’**objet global** (`window` dans le navigateur).
    ```javascript
     function direBonjour() {
       console.log(this); // window (dans le navigateur)
     }
     direBonjour();
    ```
  3. **Dans une arrow function** : `this` = le `this` du **contexte parent**.
    ```javascript
     const personne = {
       nom: "Bobby",
       direBonjour: () => {
         console.log(this.nom); // ❌ undefined (this = window)
       }
     };
     personne.direBonjour();
    ```
  4. **Dans un constructeur** : `this` = le **nouvel objet** créé.
    ```javascript
     function Personne(nom) {
       this.nom = nom;
     }
     const Bobby = new Personne("Bobby");
     console.log(Bobby.nom); // "Bobby"
    ```

**Règles pour `this**` :

- `this` est déterminé **au moment de l’appel** de la fonction (pas au moment de sa déclaration).
- **Arrow functions** n’ont pas leur propre `this` (héritent du parent).

---

---

## **🔹 8. Manipulation du DOM**

---

### **📌 Sélection d’Éléments**


| Méthode                             | Description                                       | Exemple                                       |
| ----------------------------------- | ------------------------------------------------- | --------------------------------------------- |
| `document.getElementById()`         | Sélectionne par **ID**.                           | `document.getElementById("monId")`            |
| `document.querySelector()`          | Sélectionne le **premier** élément correspondant. | `document.querySelector(".maClasse")`         |
| `document.querySelectorAll()`       | Sélectionne **tous** les éléments correspondants. | `document.querySelectorAll("p")`              |
| `document.getElementsByClassName()` | Sélectionne par **classe**.                       | `document.getElementsByClassName("maClasse")` |
| `document.getElementsByTagName()`   | Sélectionne par **balise**.                       | `document.getElementsByTagName("div")`        |


**Exemple** :

```javascript
const titre = document.getElementById("titre");
const liens = document.querySelectorAll("a");
const premierParagraphe = document.querySelector("p");
```

---

### **📌 Modification du DOM**


| Propriété/Méthode              | Description                       | Exemple                                               |
| ------------------------------ | --------------------------------- | ----------------------------------------------------- |
| `element.textContent`          | Modifie le **texte**.             | `element.textContent = "Nouveau texte"`               |
| `element.innerHTML`            | Modifie le **HTML**.              | `element.innerHTML = "<strong>Gras</strong>"`         |
| `element.style`                | Modifie le **style CSS**.         | `element.style.color = "red"`                         |
| `element.setAttribute()`       | Modifie un **attribut**.          | `element.setAttribute("href", "https://exemple.com")` |
| `element.getAttribute()`       | Récupère un **attribut**.         | `element.getAttribute("href")`                        |
| `element.classList.add()`      | Ajoute une **classe**.            | `element.classList.add("active")`                     |
| `element.classList.remove()`   | Supprime une **classe**.          | `element.classList.remove("active")`                  |
| `element.classList.toggle()`   | Ajoute/supprime une **classe**.   | `element.classList.toggle("active")`                  |
| `element.classList.contains()` | Vérifie si une **classe** existe. | `element.classList.contains("active")`                |


**Exemple** :

```javascript
const element = document.getElementById("monElement");
element.textContent = "Bonjour !";
element.style.color = "blue";
element.classList.add("highlight");
```

---

### **📌 Création et Suppression d’Éléments**

1. **Créer un élément** :
  ```javascript
   const nouveauParagraphe = document.createElement("p");
   nouveauParagraphe.textContent = "Nouveau paragraphe";
   document.body.appendChild(nouveauParagraphe);
  ```
2. **Supprimer un élément** :
  ```javascript
   const element = document.getElementById("monElement");
   element.remove(); // Méthode moderne
   // ou
   element.parentNode.removeChild(element); // Méthode ancienne
  ```
3. **Remplacer un élément** :
  ```javascript
   const ancienElement = document.getElementById("ancien");
   const nouveauElement = document.createElement("div");
   ancienElement.parentNode.replaceChild(nouveauElement, ancienElement);
  ```

---

### **📌 Événements**

- **Ajouter un écouteur d’événement** :
  ```javascript
  const button = document.getElementById("monBouton");
  button.addEventListener("click", () => {
    console.log("Bouton cliqué !");
  });
  ```
- **Événements courants** :

  | Événement   | Description                           |
  | ----------- | ------------------------------------- |
  | `click`     | Clic de souris.                       |
  | `dblclick`  | Double clic.                          |
  | `mouseover` | Survol de la souris.                  |
  | `mouseout`  | La souris quitte l’élément.           |
  | `keydown`   | Appui sur une touche.                 |
  | `keyup`     | Relâchement d’une touche.             |
  | `submit`    | Soumission d’un formulaire.           |
  | `change`    | Changement de valeur (input, select). |
  | `input`     | Saisie dans un champ (en temps réel). |
  | `load`      | Chargement de la page ou d’une image. |
  | `scroll`    | Défilement de la page.                |


**Exemple avec un formulaire** :

```javascript
const form = document.getElementById("monFormulaire");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Empêche le rechargement de la page
  const nom = document.getElementById("nom").value;
  console.log(`Nom soumis : ${nom}`);
});
```

---

### **📌 Event Delegation (Délégation d’Événements)**

- **Problème** : Ajouter un événement à chaque élément d’une liste dynamique est inefficace.
- **Solution** : Ajouter l’événement au **parent** et utiliser `event.target` pour identifier l’élément cliqué.
- **Exemple** :
  ```html
  <ul id="maListe">
    <li>Élément 1</li>
    <li>Élément 2</li>
    <li>Élément 3</li>
  </ul>
  ```
  ```javascript
  document.getElementById("maListe").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      console.log(`Élément cliqué : ${event.target.textContent}`);
    }
  });
  ```
- **Avantages** :
  - Moins de code.
  - Fonctionne même si les éléments sont ajoutés dynamiquement.

---

---

## **🔹 9. Asynchrone (Promesses, Async/Await)**

---

### **📌 Callbacks (Ancienne Méthode)**

- **Problème** : **Callback Hell** (imbrication de callbacks).
- **Exemple** :
  ```javascript
  function fetchData(callback) {
    setTimeout(() => {
      callback("Données reçues");
    }, 1000);
  }

  fetchData((data) => {
    console.log(data); // "Données reçues" après 1 seconde
    fetchData((data2) => {
      console.log(data2); // Callback Hell
    });
  });
  ```

---

### **📌 Promesses**

- **Définition** : Objet représentant une **opération asynchrone** qui peut **réussir** (`resolve`) ou **échouer** (`reject`).
- **États d’une promesse** :
  1. **Pending** : En cours.
  2. **Fulfilled** : Réussie.
  3. **Rejected** : Échouée.
- **Création d’une promesse** :
  ```javascript
  const maPromesse = new Promise((resolve, reject) => {
    setTimeout(() => {
      const succes = true;
      if (succes) {
        resolve("Données reçues");
      } else {
        reject("Erreur lors de la récupération");
      }
    }, 1000);
  });
  ```
- **Utilisation d’une promesse** :
  ```javascript
  maPromesse
    .then((data) => {
      console.log(data); // "Données reçues"
    })
    .catch((erreur) => {
      console.error(erreur); // "Erreur..."
    })
    .finally(() => {
      console.log("Opération terminée (réussie ou échouée)");
    });
  ```

---

### **📌 `Promise.all` et `Promise.race`**

1. **`Promise.all`** :
  - Attend que **toutes les promesses** soient résolues.
  - Retourne un **tableau** avec les résultats.
  - Si une promesse est rejetée, `Promise.all` est **rejetée immédiatement**.
2. **`Promise.race`** :
  - Retourne la **première promesse résolue ou rejetée**.

---

### **📌 Async/Await (ES8)**

- **Définition** : Syntaxe **plus lisible** pour gérer les promesses.
- `async` : Déclare une fonction **asynchrone** (retourne toujours une promesse).
- `await` : Attend la **résolution d’une promesse**.

**Exemple** :

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}

fetchData();
```

**Avantages** :

- Code **plus lisible** (pas de `.then()` imbriqués).
- Gestion des erreurs avec `try/catch`.

---

### **📌 Fetch API**

- **Rôle** : Faire des **requêtes HTTP** (remplace `XMLHttpRequest`).
- **Exemple** :
  ```javascript
  fetch("https://api.example.com/data")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur réseau");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((erreur) => {
      console.error("Erreur :", erreur);
    });
  ```

**Avec async/await** :

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Erreur réseau");
    }
    const data = await response.json();
    console.log(data);
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}
```

---

---

## **🔹 10. Modules ES6**

---

### **📌 Qu’est-ce qu’un Module ?**

- **Définition** : Fichier JavaScript qui peut **exporter** et **importer** des variables, fonctions, classes, etc.
- **Avantages** :
  - **Encapsulation** : Les variables/fonctions ne sont pas globales.
  - **Réutilisabilité** : Partager du code entre plusieurs fichiers.
  - **Maintenabilité** : Code plus organisé.

---

### **📌 Export/Import**

1. **Export nommé** :
  ```javascript
   // fichier utils.js
   export const addition = (a, b) => a + b;
   export const soustraction = (a, b) => a - b;
  ```
2. **Export par défaut** :
  ```javascript
   // fichier utils.js
   export default function addition(a, b) {
     return a + b;
   }
  ```
3. **Import tout** :
  ```javascript
   // fichier main.js
   import * as utils from './utils.js';
   console.log(utils.addition(2, 3)); // 5
  ```

---

### **📌 Modules dans le Navigateur**

- **Balise `<script>` avec `type="module"**` :
  ```html
  <script type="module" src="main.js"></script>
  ```
- **Attention** :
  - Les modules sont **exécutés en mode strict** par défaut.
  - Les modules sont **chargés de manière asynchrone** (utiliser `defer` si nécessaire).

---

---

## **🔹 11. Questions Fréquentes en Entretien (JavaScript)**

---

### **❓ 1. Quelle est la différence entre `let`, `const` et `var` ?**


| `**var**`                                  | `**let**`                                                                      | `**const**`                                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| **Portée de fonction**.                    | **Portée de bloc**.                                                            | **Portée de bloc**.                                                            |
| **Hoisting** : Oui (valeur = `undefined`). | **Hoisting** : Oui (mais non initialisée → erreur si accès avant déclaration). | **Hoisting** : Oui (mais non initialisée → erreur si accès avant déclaration). |
| **Réaffectable** : ✅ Oui.                  | **Réaffectable** : ✅ Oui.                                                      | **Réaffectable** : ❌ Non.                                                      |
| **Exemple** : `var x = 10;`                | **Exemple** : `let y = 20;`                                                    | **Exemple** : `const z = 30;`                                                  |


**Réponse** :
*"`var` est l’ancienne façon de déclarer des variables en JavaScript. Il a une portée de fonction et est hoisté avec une valeur `undefined`. Cependant, il pose des problèmes de portée et de hoisting, c’est pourquoi on préfère `let` et `const`.*
*`let` a une portée de bloc (ex : dans une boucle `for` ou un `if`) et peut être réaffecté. Il est hoisté mais non initialisé, donc accéder à la variable avant sa déclaration lève une erreur.*
*`const` est comme `let`, mais ne peut pas être réaffecté après sa déclaration. C’est la méthode recommandée pour déclarer des variables dont la valeur ne change pas."*

---

### **❓ 2. Quelle est la différence entre `==` et `===` ?**

**Réponse** :
*"La différence entre `==` (égalité lâche) et `===` (égalité stricte) est que `==` effectue une **conversion de type** avant la comparaison, tandis que `===` compare **à la fois la valeur et le type**.
Par exemple :

```javascript
5 == "5"  // true (le string "5" est converti en nombre)
5 === "5" // false (types différents)
null == undefined // true (conversion)
null === undefined // false
```

**Pourquoi utiliser `===` ?** :

- Évite les **comportements inattendus** dus aux conversions de type.
- Rend le code **plus prévisible** et plus facile à déboguer.
C’est pourquoi il est recommandé d’utiliser **toujours `===` et `!==**` en JavaScript."*

---

### **❓ 3. Comment fonctionne `this` en JavaScript ?**

**Réponse** :
*"`this` en JavaScript fait référence à l’**objet courant** (contexte d’exécution), et sa valeur dépend de **comment la fonction est appelée** :

1. **Dans une méthode d’objet** : `this` fait référence à l’objet.
  ```javascript
   const personne = {
     nom: "Bobby",
     direBonjour() {
       console.log(`Bonjour, ${this.nom}`); // "Bonjour, Bobby"
     }
   };
   personne.direBonjour();
  ```
2. **Dans une fonction classique** : `this` fait référence à l’**objet global** (`window` dans le navigateur).
  ```javascript
   function direBonjour() {
     console.log(this); // window
   }
   direBonjour();
  ```
3. **Dans une arrow function** : `this` hérite du **contexte parent**.
  ```javascript
   const personne = {
     nom: "Bobby",
     direBonjour: () => {
       console.log(this.nom); // ❌ undefined (this = window)
     }
   };
   personne.direBonjour();
  ```
4. **Dans un constructeur** : `this` fait référence au **nouvel objet** créé.
  ```javascript
   function Personne(nom) {
     this.nom = nom;
   }
   const Bobby = new Personne("Bobby");
   console.log(Bobby.nom); // "Bobby"
  ```

**Règles importantes** :

- `this` est déterminé **au moment de l’appel** de la fonction, pas au moment de sa déclaration.
- Les **arrow functions** n’ont pas leur propre `this` (elles héritent du parent)."*

---

### **❓ 4. Qu’est-ce que le hoisting ?**

**Réponse** :
*"Le **hoisting** est un mécanisme de JavaScript qui **déplace les déclarations** (variables et fonctions) en haut de leur portée avant l’exécution du code.
**Comportement selon le type de déclaration** :

1. `**var**` :
  - La **déclaration** est hoistée et initialisée à `undefined`.
  - **Exemple** :
    ```javascript
    console.log(x); // undefined (pas d'erreur)
    var x = 5;
    ```
    → Équivalent à :
    ```javascript
    var x;
    console.log(x); // undefined
    x = 5;
    ```
2. `**let` et `const**` :
  - La **déclaration** est hoistée mais **non initialisée**.
  - Accéder à la variable avant sa déclaration lève une **ReferenceError**.
  - **Exemple** :
    ```javascript
    console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
    let y = 10;
    ```
3. **Fonctions** :
  - Les **déclarations de fonctions** sont entièrement hoistées.
  - **Exemple** :
    ```javascript
    direBonjour(); // "Bonjour !" (pas d'erreur)
    function direBonjour() {
      console.log("Bonjour !");
    }
    ```
  - Les **expressions de fonction** (ex : `const f = function() {}`) suivent les règles de `let`/`const`.

**Pourquoi c’est important ?** :

- Cela explique pourquoi certaines variables/fonctions sont accessibles avant leur déclaration.
- Cela peut entraîner des **bugs difficiles à déboguer** si on ne comprend pas le hoisting.
- C’est pourquoi on recommande de **déclarer les variables en haut de leur portée** et d’utiliser `let`/`const` plutôt que `var`."*

---

### **❓ 5. Qu’est-ce qu’une closure en JavaScript ?**

**Réponse** :
*"Une **closure** (fermeture) est une fonction qui **retient l’accès à son environnement lexical** (les variables du contexte dans lequel elle a été créée) même après que ce contexte ait été exécuté.
**Exemple** :

```javascript
function outer() {
  const message = "Bonjour";
  return function inner() {
    console.log(message); // Accède à `message` même après que `outer` ait fini
  };
}
const maClosure = outer();
maClosure(); // "Bonjour"
```

**Comment ça marche ?** :

1. `outer()` est appelée et crée une variable `message`.
2. `outer()` retourne la fonction `inner`, qui **ferme** (close) sur `message`.
3. `maClosure` est assignée à `inner`, et `outer()` a fini son exécution.
4. Quand `maClosure()` est appelée, elle a toujours accès à `message` grâce à la closure.

**Cas d’usage** :

- **Encapsulation** : Créer des variables privées (ex : modules).
- **Callbacks** : Conserver un état entre les appels (ex : compteurs).
- **Fonctions d’usine** : Créer des fonctions avec des paramètres pré-remplis.
  ```javascript
  function multiplier(facteur) {
    return function(nombre) {
      return nombre * facteur;
    };
  }
  const double = multiplier(2);
  console.log(double(5)); // 10
  ```

---

### **❓ 6. Quelle est la différence entre `null` et `undefined` ?**

**Réponse** :
*"`null` et `undefined` représentent tous deux l’**absence de valeur**, mais ils ont des **origines différentes** :

- `**undefined**` :
  - Valeur par défaut d’une **variable non initialisée**.
  - Valeur retournée par une **fonction qui ne retourne rien**.
  - Propriété **manquante** dans un objet.
  - **Exemple** :
    ```javascript
    let x;
    console.log(x); // undefined

    function f() {}
    console.log(f()); // undefined

    const obj = {};
    console.log(obj.prop); // undefined
    ```
- **`null`** :
  - Valeur **explicitement assignée** pour indiquer qu’une variable est vide.
  - **Exemple** :
    ```javascript
    let y = null;
    console.log(y); // null
    ```
  **Différences clés** :

  | `**undefined**`                    | `**null**`                         |
  | ---------------------------------- | ---------------------------------- |
  | Type : `"undefined"`               | Type : `"object"` (bug historique) |
  | Valeur par défaut.                 | Valeur assignée manuellement.      |
  | `typeof undefined` → `"undefined"` | `typeof null` → `"object"`         |


**Bonnes pratiques** :

- Utiliser `null` pour indiquer **explicitement** qu’une variable est vide.
- Utiliser `undefined` pour les **valeurs non initialisées**.
- Toujours vérifier avec `===` :
  ```javascript
  if (x === undefined) { ... }
  if (x === null) { ... }
  ```"*
  ```

---

### **❓ 7. Comment gérer les erreurs en JavaScript ?**

**Réponse** :
*"En JavaScript, on peut gérer les erreurs de plusieurs façons :

1. `**try...catch**` :
  - Permet de **capturer les erreurs** et d’exécuter du code même si une erreur se produit.
  - **Exemple** :
    ```javascript
    try {
      const data = JSON.parse(invalidJson);
    } catch (erreur) {
      console.error("Erreur :", erreur.message);
    }
    ```
2. `**throw**` :
  - Permet de **lancer une erreur personnalisée**.
  - **Exemple** :
    ```javascript
    function diviser(a, b) {
      if (b === 0) {
        throw new Error("Division par zéro !");
      }
      return a / b;
    }
    ```
3. `**finally**` :
  - Bloc exécuté **qu’il y ait une erreur ou non**.
  - **Exemple** :
    ```javascript
    try {
      // Code qui peut échouer
    } catch (erreur) {
      console.error(erreur);
    } finally {
      console.log("Nettoyage...");
    }
    ```
4. **Gestion des erreurs asynchrones** :
  - Avec les **promesses** :
  - Avec **async/await** :
    ```javascript
    async function fetchData() {
      try {
        const data = await fetch(...);
      } catch (erreur) {
        console.error(erreur);
      }
    }
    ```

**Bonnes pratiques** :

- Toujours **capturer les erreurs** pour éviter que le programme ne plante.
- Utiliser des **messages d’erreur clairs** pour faciliter le débogage.
- **Ne pas ignorer les erreurs** (éviter les `catch` vides)."*

---

### **❓ 8. Qu’est-ce que l’event delegation et comment l’utiliser ?**

**Réponse** :
*"L’**event delegation** (délégation d’événements) est une technique qui consiste à **ajouter un écouteur d’événement à un parent** plutôt qu’à chaque enfant individuellement. Quand un événement se produit sur un enfant, il **remonte** (bubbling) jusqu’au parent, qui peut alors identifier l’élément cible avec `event.target`.
**Pourquoi l’utiliser ?** :

- **Performance** : Moins d’écouteurs d’événements à gérer (surtout utile pour les listes dynamiques).
- **Maintenabilité** : Code plus simple et plus facile à mettre à jour.

**Exemple** :

```html
<ul id="maListe">
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
</ul>
```

```javascript
document.getElementById("maListe").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`Élément cliqué : ${event.target.textContent}`);
  }
});
```

**Comment ça marche ?** :

1. On ajoute un écouteur `click` sur la `<ul>`.
2. Quand on clique sur un `<li>`, l’événement **remonte** jusqu’à la `<ul>`.
3. On vérifie que `event.target` est bien un `<li>` avant d’agir.

**Cas d’usage** :

- Listes dynamiques (ex : éléments ajoutés/supprimés avec JavaScript).
- Menus déroulants.
- Grilles de cartes cliquables."*

---

### **❓ 9. Comment fonctionne le `setTimeout` et le `setInterval` ?**

**Réponse** :
*"`setTimeout` et `setInterval` sont deux fonctions globales en JavaScript pour exécuter du code **de manière asynchrone** après un délai ou à intervalles réguliers.

1. `**setTimeout**` :
  - Exécute une fonction **une seule fois** après un délai.
  - **Syntaxe** :
    ```javascript
    setTimeout(() => {
      console.log("Exécuté après 1 seconde");
    }, 1000); // 1000 ms = 1 seconde
    ```
  - **Annulation** :
    ```javascript
    const timeoutId = setTimeout(() => { ... }, 1000);
    clearTimeout(timeoutId); // Annule le timeout
    ```
2. `**setInterval**` :
  - Exécute une fonction **à intervalles réguliers**.
  - **Syntaxe** :
    ```javascript
    setInterval(() => {
      console.log("Exécuté toutes les 1 seconde");
    }, 1000);
    ```
  - **Annulation** :
    ```javascript
    const intervalId = setInterval(() => { ... }, 1000);
    clearInterval(intervalId); // Annule l'intervalle
    ```

**Différences clés** :


| `**setTimeout**`            | `**setInterval**`                    |
| --------------------------- | ------------------------------------ |
| Exécute **une seule fois**. | Exécute **à intervalles réguliers**. |
| Annulé avec `clearTimeout`. | Annulé avec `clearInterval`.         |


**Exemple pratique** :

```javascript
// Compteur qui s'incrémente toutes les secondes
let compteur = 0;
const intervalId = setInterval(() => {
  compteur++;
  console.log(compteur);
  if (compteur >= 5) {
    clearInterval(intervalId); // Arrête après 5 secondes
  }
}, 1000);
```

**⚠️ Attention** :

- Les fonctions passées à `setTimeout`/`setInterval` sont exécutées dans le **contexte global** (`this` = `window` dans le navigateur).
- Pour conserver le `this`, utiliser une **arrow function** ou `.bind()` :
  ```javascript
  setTimeout(() => {
    this.maMethode(); // `this` est préservé
  }, 1000);
  ```"*
  ```

---

### **❓ 10. Qu’est-ce que le DOM et comment le manipuler ?**

**Réponse** :
*"Le **DOM** (*Document Object Model*) est une **représentation arborescente** du document HTML en mémoire. Il permet à JavaScript de **lire, modifier, ajouter ou supprimer** des éléments et des attributs HTML, ainsi que de **réagir aux événements**.
**Structure du DOM** :

- Chaque élément HTML (ex : `<div>`, `<p>`) est représenté par un **nœud** dans l’arbre.
- Exemple :
  ```html
  <div id="parent">
    <p>Texte</p>
  </div>
  ```
  → Arbre DOM :
  ```
  document
  └── html
      └── body
          └── div#parent
              └── p
  ```

**Manipulation du DOM** :

1. **Sélection d’éléments** :
  - `document.getElementById("monId")` → Sélectionne par ID.
  - `document.querySelector(".maClasse")` → Sélectionne le premier élément correspondant.
  - `document.querySelectorAll("p")` → Sélectionne tous les éléments correspondants.
2. **Modification du contenu** :
  - `element.textContent = "Nouveau texte"` → Modifie le texte.
  - `element.innerHTML = "<strong>Gras</strong>"` → Modifie le HTML.
3. **Modification des styles** :
  - `element.style.color = "red"` → Modifie le style CSS.
4. **Ajout/Suppression d’éléments** :
  - `document.createElement("div")` → Crée un nouvel élément.
  - `parent.appendChild(child)` → Ajoute un enfant.
  - `element.remove()` → Supprime un élément.
5. **Gestion des événements** :
  - `element.addEventListener("click", () => { ... })` → Ajoute un écouteur d’événement.

**Exemple complet** :

```javascript
// Sélectionner un élément
const div = document.getElementById("maDiv");

// Modifier son contenu
div.textContent = "Bonjour !";

// Modifier son style
div.style.color = "blue";
div.style.backgroundColor = "#f0f0f0";

// Ajouter un événement
div.addEventListener("click", () => {
  div.textContent = "Cliqué !";
});
```

**Pourquoi le DOM est-il important ?** :

- Il permet de **rendre les pages web dynamiques et interactives**.
- C’est la base de toutes les **applications web modernes** (ex : React, Angular, Vue.js manipulent le DOM sous le capot)."*

---

---

## **🔹 12. Exercice Pratique (JavaScript)**

**Consigne** : Crée une **application de liste de tâches (To-Do List)** avec :

1. Un **champ de saisie** (`<input>`) pour ajouter une nouvelle tâche.
2. Un **bouton** pour ajouter la tâche.
3. Une **liste** (`<ul>`) qui affiche toutes les tâches.
4. Chaque tâche doit avoir :
  - Un **bouton "Supprimer"** pour la supprimer.
  - Un **bouton "Terminer"** pour la marquer comme terminée (barre le texte).
5. Un **bouton "Tout supprimer"** pour supprimer toutes les tâches.
6. **Stockage local** : Utilise `localStorage` pour sauvegarder les tâches entre les sessions.

**Solution** :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    #app {
      background: #f9f9f9;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    #tache-input {
      width: 70%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      padding: 10px 15px;
      background: #0066cc;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 10px;
    }
    button:hover {
      background: #0055aa;
    }
    #ajouter-btn {
      margin-left: 0;
    }
    #tout-supprimer-btn {
      background: #cc0000;
      margin-top: 10px;
    }
    #tout-supprimer-btn:hover {
      background: #aa0000;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 20px 0;
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background: white;
      margin-bottom: 8px;
      border-radius: 4px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
    .tache-texte {
      flex: 1;
    }
    .terminee {
      text-decoration: line-through;
      color: #888;
    }
    .boutons {
      display: flex;
      gap: 5px;
    }
    .boutons button {
      padding: 5px 10px;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div id="app">
    <h1>To-Do List</h1>
    <div>
      <input type="text" id="tache-input" placeholder="Ajouter une tâche...">
      <button id="ajouter-btn">Ajouter</button>
    </div>
    <ul id="taches-liste"></ul>
    <button id="tout-supprimer-btn">Tout supprimer</button>
  </div>

  <script>
    // Sélection des éléments
    const tacheInput = document.getElementById("tache-input");
    const ajouterBtn = document.getElementById("ajouter-btn");
    const tachesListe = document.getElementById("taches-liste");
    const toutSupprimerBtn = document.getElementById("tout-supprimer-btn");

    // Charger les tâches depuis localStorage
    let taches = JSON.parse(localStorage.getItem("taches")) || [];

    // Fonction pour sauvegarder les tâches
    function sauvegarderTaches() {
      localStorage.setItem("taches", JSON.stringify(taches));
    }

    // Fonction pour afficher les tâches
    function afficherTaches() {
      tachesListe.innerHTML = "";
      taches.forEach((tache, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span class="tache-texte ${tache.terminee ? "terminee" : ""}">${tache.texte}</span>
          <div class="boutons">
            <button class="terminer-btn" data-index="${index}">Terminer</button>
            <button class="supprimer-btn" data-index="${index}">Supprimer</button>
          </div>
        `;
        tachesListe.appendChild(li);
      });

      // Ajouter les écouteurs d'événements aux boutons
      document.querySelectorAll(".terminer-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const index = parseInt(e.target.getAttribute("data-index"));
          taches[index].terminee = !taches[index].terminee;
          sauvegarderTaches();
          afficherTaches();
        });
      });

      document.querySelectorAll(".supprimer-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const index = parseInt(e.target.getAttribute("data-index"));
          taches.splice(index, 1);
          sauvegarderTaches();
          afficherTaches();
        });
      });
    }

    // Ajouter une tâche
    ajouterBtn.addEventListener("click", () => {
      const texte = tacheInput.value.trim();
      if (texte) {
        taches.push({ texte, terminee: false });
        sauvegarderTaches();
        afficherTaches();
        tacheInput.value = "";
      }
    });

    // Ajouter une tâche avec la touche Entrée
    tacheInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        ajouterBtn.click();
      }
    });

    // Supprimer toutes les tâches
    toutSupprimerBtn.addEventListener("click", () => {
      taches = [];
      sauvegarderTaches();
      afficherTaches();
    });

    // Afficher les tâches au chargement
    afficherTaches();
  </script>
</body>
</html>
```

---

## **🔹 13. Ressources pour Aller Plus Loin**

- **Documentation officielle** : [MDN JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- **Pratique** :
  - [JavaScript.info](https://javascript.info/)
  - [freeCodeCamp JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
  - [Codecademy JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)
- **Asynchrone** :
  - [Promesses MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - [Async/Await MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function)
- **DOM** :
  - [Manipulation du DOM MDN](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model)
  - [DOM Events MDN](https://developer.mozilla.org/fr/docs/Web/Events)
- **Outils** :
  - [JSHint](https://jshint.com/) (linting)
  - [ESLint](https://eslint.org/) (linting avancé)
  - [Babel](https://babeljs.io/) (transpilation ES6 → ES5)
