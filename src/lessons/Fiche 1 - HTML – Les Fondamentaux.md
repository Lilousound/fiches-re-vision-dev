# **📌 Fiche Révision : HTML Approfondi**

*Pour maîtriser la structure d'une page web, les bonnes pratiques, et répondre aux questions techniques en entretien.*

---

---

## **🔹 1. Introduction à HTML**

### **📌 Qu’est-ce que HTML ?**

- **Définition** : *HyperText Markup Language* → Langage de **balisage** pour structurer le contenu d’une page web.
- **Rôle** :
  - Définir le **squelette** de la page (titre, paragraphes, images, liens, formulaires, etc.).
  - **Pas de logique** (contrairement à JavaScript) → Seulement de la **structure**.
- **Analogie** :
  - HTML = **Les os d’un corps** (structure de base).
  - CSS = **La peau et les vêtements** (apparence).
  - JavaScript = **Le cerveau et les muscles** (comportement).

**Exemple minimal** :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <title>Ma Page</title>
  </head>
  <body>
    <h1>Bonjour le monde !</h1>
    <p>Ceci est un paragraphe.</p>
  </body>
</html>
```

---

### **📌 Comment fonctionne un navigateur ?**

1. **Téléchargement** : Le navigateur récupère le fichier HTML via une requête HTTP.
2. **Parsing (Analyse)** :
  - Le navigateur **lit le HTML** et construit le **DOM** (*Document Object Model*).
  - Le DOM est une **représentation arborescente** du document HTML.
3. **Rendu** :
  - Le navigateur **applique le CSS** pour styliser les éléments.
  - Il **exécute le JavaScript** pour ajouter de l’interactivité.
4. **Affichage** : La page est affichée à l’écran.

**Schéma du DOM** :

```
document
└── html
    ├── head
    │   ├── meta
    │   └── title
    └── body
        ├── h1
        └── p
```

---

---

## **🔹 2. Structure de Base d’un Document HTML**

### **📌 `<!DOCTYPE html>`**

- **Rôle** : Indique au navigateur que le document est en **HTML5** (version actuelle).
- **Pourquoi est-ce important ?** :
  - Sans `<!DOCTYPE>`, le navigateur passe en **"mode quirks"** (comportement imprévisible, comme dans les années 2000).
  - **Exemple** :
    ```html
    <!DOCTYPE html> <!-- HTML5 -->
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"> <!-- HTML4 -->
    ```

---

### **📌 `<html>`**

- **Rôle** : Élément racine du document. **Toujours présent**.
- **Attributs courants** :
  - `lang="fr"` : Définit la langue du document (important pour l’accessibilité et le SEO).
    ```html
    <html lang="fr">
    ```

---

### **📌 `<head>`**

- **Rôle** : Contient des **métadonnées** (informations sur la page, non affichées).
- **Éléments courants** :

  | Élément    | Description                                               | Exemple                                     |
  | ---------- | --------------------------------------------------------- | ------------------------------------------- |
  | `<meta>`   | Métadonnées (charset, viewport, etc.).                    | `<meta charset="UTF-8">`                    |
  | `<title>`  | Titre de la page (affiché dans l’onglet).                 | `<title>Ma Page</title>`                    |
  | `<link>`   | Lien vers une ressource externe (CSS, favicon).           | `<link rel="stylesheet" href="styles.css">` |
  | `<script>` | Code JavaScript (peuvent être dans `<head>` ou `<body>`). | `<script src="script.js"></script>`         |
  | `<style>`  | CSS intégré directement.                                  | `<style> body { margin: 0; } </style>`      |


**Exemple complet** :

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Description de ma page pour le SEO">
  <title>Ma Page</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico">
</head>
```

**Attributs `<meta>` importants** :

- `charset="UTF-8"` : Définit l’encodage des caractères (évite les problèmes d’affichage).
- `name="viewport"` : **Essentiel pour le responsive design**.
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
  - `width=device-width` : La largeur de la page = largeur de l’écran.
  - `initial-scale=1.0` : Zoom initial à 100%.

---

### **📌 `<body>`**

- **Rôle** : Contient **tout le contenu visible** de la page.
- **Éléments courants** :
  - Titres (`<h1>` à `<h6>`).
  - Paragraphes (`<p>`).
  - Liens (`<a>`).
  - Images (`<img>`).
  - Listes (`<ul>`, `<ol>`, `<li>`).
  - Formulaires (`<form>`, `<input>`, `<button>`).

---

---

## **🔹 3. Balises Sémantiques (Pourquoi et Comment ?)**

### **📌 Qu’est-ce que la sémantique ?**

- **Définition** : Une balise est **sémantique** si elle décrit **son rôle** (ex : `<header>` = en-tête, `<nav>` = navigation).
- **Pourquoi utiliser des balises sémantiques ?**
  1. **Accessibilité** :
    - Les **lecteurs d’écran** (pour malvoyants) comprennent mieux la structure de la page.
    - Exemple : Un lecteur d’écran annoncerait *"Navigation, 3 éléments"* pour un `<nav>`.
  2. **SEO** :
    - Les moteurs de recherche (Google) **priorisent** les balises sémantiques pour l’indexation.
  3. **Maintenabilité** :
    - Le code est **plus lisible** et plus facile à maintenir.
  4. **Styling** :
    - On peut cibler des éléments spécifiques avec CSS (ex : `header { ... }`).

---

### **📌 Balises Sémantiques Principales**


| Balise      | Description                                               | Exemple d'utilisation                                              |
| ----------- | --------------------------------------------------------- | ------------------------------------------------------------------ |
| `<header>`  | En-tête de la page ou d'une section.                      | `<header><h1>Titre</h1><nav>...</nav></header>`                    |
| `<nav>`     | Section de navigation (menu principal).                   | `<nav><a href="/">Accueil</a></nav>`                               |
| `<main>`    | Contenu **principal** de la page (unique par page).       | `<main><article>...</article></main>`                              |
| `<article>` | Contenu **autonome** (ex : article de blog, commentaire). | `<article><h2>Titre</h2><p>...</p></article>`                      |
| `<section>` | Section thématique dans la page.                          | `<section><h2>À propos</h2><p>...</p></section>`                   |
| `<aside>`   | Contenu **secondaire** (ex : barre latérale, publicités). | `<aside><h3>Publicités</h3></aside>`                               |
| `<footer>`  | Pied de page.                                             | `<footer><p>© 2026</p></footer>`                                   |
| `<figure>`  | Conteneur pour une image + légende.                       | `<figure><img src="..."><figcaption>Légende</figcaption></figure>` |
| `<time>`    | Date ou heure.                                            | `<time datetime="2026-05-13">13 mai 2026</time>`                   |
| `<mark>`    | Texte **surligné** (pour mettre en évidence).             | `<p>Recherchez <mark>ce mot</mark>.</p>`                           |
| `<details>` | Section **dépliante** (avec `<summary>`).                 | `<details><summary>Plus d'infos</summary><p>...</p></details>`     |


---

### **📌 Exemple de Page Sémantique**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Mon Blog</title>
</head>
<body>
  <header>
    <h1>Mon Blog</h1>
    <nav>
      <a href="/">Accueil</a>
      <a href="/about">À propos</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Mon Premier Article</h2>
      <p>Publié le <time datetime="2026-05-13">13 mai 2026</time></p>
      <p>Ceci est le contenu de mon article.</p>
      <figure>
        <img src="image.jpg" alt="Illustration de l'article">
        <figcaption>Légende de l'image</figcaption>
      </figure>
    </article>

    <aside>
      <h3>À propos de moi</h3>
      <p>Je suis une développeuse front-end.</p>
    </aside>
  </main>

  <footer>
    <p>© 2026 - Mon Blog</p>
  </footer>
</body>
</html>
```

---

---

## **🔹 4. Balises de Texte**

### **📌 Titres (`<h1>` à `<h6>`)**

- **Rôle** : Structurer le contenu avec des **niveaux de titre**.
- **Bonnes pratiques** :
  - **Un seul `<h1>` par page** (pour le titre principal, important pour le SEO).
  - **Hiérarchie logique** : `<h1>` → `<h2>` → `<h3>`, etc.
  - **Ne pas sauter de niveau** (ex : `<h1>` → `<h3>` est à éviter).

**Exemple** :

```html
<h1>Titre principal de la page</h1>
<h2>Sous-titre 1</h2>
<h3>Sous-sous-titre 1.1</h3>
<h3>Sous-sous-titre 1.2</h3>
<h2>Sous-titre 2</h2>
```

---

### **📌 Paragraphes et Mise en Forme**


| Balise     | Description                                    | Exemple                                 |
| ---------- | ---------------------------------------------- | --------------------------------------- |
| `<p>`      | Paragraphe.                                    | `<p>Un texte sur plusieurs lignes.</p>` |
| `<br>`     | Saut de ligne.                                 | `Ligne 1<br>Ligne 2`                    |
| `<hr>`     | Ligne horizontale (séparation).                | `<hr>`                                  |
| `<strong>` | Texte **important** (gras, pour le sens).      | `<strong>Attention !</strong>`          |
| `<b>`      | Texte en **gras** (pour le style seulement).   | `<b>Gras</b>`                           |
| `<em>`     | Texte *emphase* (italique, pour le sens).      | `<em>À noter</em>`                      |
| `<i>`      | Texte en *italique* (pour le style seulement). | `<i>Italique</i>`                       |
| `<u>`      | Texte ++souligné++.                            | `<u>Souligné</u>`                       |
| `<del>`    | Texte ~~barré~~.                               | `<del>Supprimé</del>`                   |
| `<sub>`    | Texte en indice.                               | `H<sub>2</sub>O`                        |
| `<sup>`    | Texte en exposant.                             | `E = mc<sup>2</sup>`                    |


**Différence entre `<strong>`/`<b>` et `<em>`/`<i>**` :

- `**<strong>**` et `**<em>**` : **Sémantiques** → Indiquent une **importance** ou une **emphase** (utilisés par les lecteurs d’écran).
- `**<b>**` et `**<i>**` : **Non sémantiques** → Uniquement pour le **style**.

---

### **📌 Citations et Code**


| Balise         | Description                                                | Exemple                                      |
| -------------- | ---------------------------------------------------------- | -------------------------------------------- |
| `<blockquote>` | Citation longue (généralement en retrait).                 | `<blockquote>Citation célèbre.</blockquote>` |
| `<q>`          | Citation courte (entre guillemets).                        | `<q>Citation courte</q>` → "Citation courte" |
| `<code>`       | Code inline.                                               | `<code>console.log("Hello")</code>`          |
| `<pre>`        | Texte préformaté (conserve les espaces et sauts de ligne). | `<pre> console.log("Hello"); </pre>`         |
| `<kbd>`        | Texte à saisir au clavier.                                 | `<kbd>Ctrl + C</kbd>` → `Ctrl + C`           |
| `<samp>`       | Sortie d’un programme.                                     | `<samp>Erreur : Fichier introuvable</samp>`  |


**Exemple** :

```html
<p>Comme le disait Einstein : <q>La folie, c'est de faire toujours la même chose et de s'attendre à un résultat différent.</q></p>

<pre>
function direBonjour(nom) {
  return `Bonjour, ${nom} !`;
}
</pre>
```

---

---

## **🔹 5. Liens et Navigation**

### **📌 `<a>` (Ancres)**

- **Rôle** : Créer un **lien hypertexte** vers une autre page ou une section de la page.
- **Attributs importants** :

  | Attribut   | Description                 | Exemple                                          |
  | ---------- | --------------------------- | ------------------------------------------------ |
  | `href`     | URL de destination.         | `<a href="https://exemple.com">Lien</a>`         |
  | `target`   | Où ouvrir le lien.          | `target="_blank"` (nouvel onglet)                |
  | `rel`      | Relation avec la page liée. | `rel="noopener noreferrer"` (sécurité)           |
  | `download` | Télécharger le fichier lié. | `<a href="fichier.pdf" download>Télécharger</a>` |


**Exemple** :

```html
<a href="https://exemple.com" target="_blank" rel="noopener noreferrer">Visitez Exemple</a>
```

- **Pourquoi `rel="noopener noreferrer"` ?** :
  - **Sécurité** : Empêche l’attaque *tabnabbing* (une page malveillante ne peut pas contrôler la page parente via `window.opener`).
  - **Performance** : `noopener` indique au navigateur de ne pas partager le contexte d’exécution.

---

### **📌 Liens vers des sections de la page**

- Utiliser l’attribut `id` pour créer une **ancre**.
- **Exemple** :
  ```html
  <nav>
    <a href="#section1">Aller à la section 1</a>
    <a href="#section2">Aller à la section 2</a>
  </nav>

  <section id="section1">
    <h2>Section 1</h2>
    <p>Contenu de la section 1.</p>
  </section>

  <section id="section2">
    <h2>Section 2</h2>
    <p>Contenu de la section 2.</p>
  </section>
  ```

---

### **📌 Liens vers des emails et téléphones**

```html
<a href="mailto:contact@example.com">Envoyer un email</a>
<a href="tel:+33123456789">Appeler</a>
```

---

---

## **🔹 6. Images et Médias**

### **📌 `<img>`**

- **Rôle** : Insérer une image.
- **Attributs obligatoires** :
  - `src` : Chemin vers l’image.
  - `alt` : **Description alternative** (pour l’accessibilité et le SEO).
- **Attributs optionnels** :
  - `width`/`height` : Dimensions (en pixels ou %).
  - `loading="lazy"` : Charge l’image **uniquement quand elle est visible** (améliore les performances).
  - `srcset` : Pour les images **responsive** (plusieurs versions selon la taille de l’écran).

**Exemple de base** :

```html
<img src="chemin/vers/image.jpg" alt="Description de l'image" width="300">
```

**Exemple avec `srcset` (responsive)** :

```html
<img
  src="image-par-defaut.jpg"
  srcset="image-petite.jpg 480w, image-moyenne.jpg 768w, image-grande.jpg 1200w"
  sizes="(max-width: 600px) 480px, (max-width: 1200px) 768px, 1200px"
  alt="Description"
>
```

- `**srcset**` : Liste des images disponibles avec leur **largeur** (`480w`).
- `**sizes**` : Conditions pour choisir quelle image afficher.

---

### **📌 `<picture>`**

- **Rôle** : Permet de **choisir entre plusieurs sources d’image** selon les conditions (ex : format WebP pour les navigateurs modernes, JPEG pour les autres).
- **Exemple** :
  ```html
  <picture>
    <source srcset="image.webp" type="image/webp">
    <source srcset="image.jpg" type="image/jpeg">
    <img src="image.jpg" alt="Description">
  </picture>
  ```

---

### **📌 `<video>` et `<audio>`**

**Vidéos** :

```html
<video controls width="500" poster="miniature.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Votre navigateur ne supporte pas la balise video.
</video>
```

- **Attributs** :
  - `controls` : Affiche les contrôles (lecture, pause, volume).
  - `autoplay` : Lecture automatique (à éviter pour l’UX).
  - `muted` : Son coupé (nécessaire pour `autoplay` sur certains navigateurs).
  - `loop` : Lecture en boucle.
  - `poster` : Image affichée avant la lecture.

**Audio** :

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Votre navigateur ne supporte pas la balise audio.
</audio>
```

---

### **📌 `<iframe>`**

- **Rôle** : Intégrer une **page externe** (ex : vidéo YouTube, carte Google Maps).
- **Exemple** :
  ```html
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
  ```
- **Attributs importants** :
  - `src` : URL de la page à intégrer.
  - `width`/`height` : Dimensions.
  - `frameborder="0"` : Supprime la bordure.
  - `allowfullscreen` : Autorise le mode plein écran.

---

---

## **🔹 7. Listes**

### **📌 Listes Non Ordonnées (`<ul>`)**

- **Rôle** : Liste à puces (ordre non important).
- **Exemple** :
  ```html
  <ul>
    <li>Élément 1</li>
    <li>Élément 2</li>
    <li>Élément 3</li>
  </ul>
  ```

### **📌 Listes Ordonnées (`<ol>`)**

- **Rôle** : Liste numérotée (ordre important).
- **Attributs** :
  - `type` : Type de numérotation (`1` (défaut), `a`, `A`, `i`, `I`).
  - `start` : Numéro de départ.
- **Exemple** :
  ```html
  <ol type="I" start="3">
    <li>Troisième élément</li>
    <li>Quatrième élément</li>
  </ol>
  ```
  → Affiche : `III. Troisième élément`, `IV. Quatrième élément`.

### **📌 Listes de Définitions (`<dl>`)**

- **Rôle** : Liste de **termes et définitions** (ex : glossaire).
- **Balises** :
  - `<dl>` : Conteneur de la liste.
  - `<dt>` : Terme à définir.
  - `<dd>` : Définition du terme.
- **Exemple** :
  ```html
  <dl>
    <dt>HTML</dt>
    <dd>Langage de balisage pour structurer une page web.</dd>
    <dt>CSS</dt>
    <dd>Langage pour styliser une page web.</dd>
  </dl>
  ```

---

---

## **🔹 8. Formulaires**

### **📌 Structure de Base**

```html
<form action="/submit" method="POST" enctype="multipart/form-data">
  <!-- Champs du formulaire -->
  <button type="submit">Envoyer</button>
</form>
```

- **Attributs** :
  - `action` : URL où envoyer les données.
  - `method` : Méthode HTTP (`GET` (défaut) ou `POST`).
  - `enctype` :
    - `application/x-www-form-urlencoded` (défaut) : Pour les données textuelles.
    - `multipart/form-data` : Pour les **fichiers** (upload).
    - `text/plain` : Non recommandé (peu utilisé).

---

### **📌 `<input>`**

- **Rôle** : Champ de saisie.
- **Attributs courants** :

  | Attribut      | Description                                       | Exemple                                                                          |
  | ------------- | ------------------------------------------------- | -------------------------------------------------------------------------------- |
  | `type`        | Type de champ.                                    | `text`, `password`, `email`, `number`, `date`, `file`, `checkbox`, `radio`, etc. |
  | `name`        | Nom du champ (utilisé pour l’envoi).              | `<input name="nom">`                                                             |
  | `value`       | Valeur par défaut.                                | `<input value="Aurélie">`                                                        |
  | `placeholder` | Texte d’exemple.                                  | `<input placeholder="Votre nom">`                                                |
  | `required`    | Champ obligatoire.                                | `<input required>`                                                               |
  | `disabled`    | Désactive le champ.                               | `<input disabled>`                                                               |
  | `readonly`    | Champ en lecture seule.                           | `<input readonly>`                                                               |
  | `min`/`max`   | Valeur minimale/maximale (pour `number`, `date`). | `<input type="number" min="0" max="100">`                                        |
  | `pattern`     | Expression régulière pour validation.             | `<input pattern="[A-Za-z]+">` (lettres seulement)                                |
  | `autofocus`   | Focus automatique au chargement.                  | `<input autofocus>`                                                              |


**Exemples** :

```html
<!-- Texte -->
<input type="text" name="nom" placeholder="Votre nom" required>

<!-- Mot de passe -->
<input type="password" name="password" minlength="8">

<!-- Email -->
<input type="email" name="email" required>

<!-- Nombre -->
<input type="number" name="age" min="18" max="99">

<!-- Date -->
<input type="date" name="naissance">

<!-- Case à cocher -->
<input type="checkbox" name="newsletter" id="newsletter">
<label for="newsletter">S'abonner à la newsletter</label>

<!-- Bouton radio -->
<input type="radio" name="sexe" id="homme" value="homme">
<label for="homme">Homme</label>
<input type="radio" name="sexe" id="femme" value="femme">
<label for="femme">Femme</label>

<!-- Fichier -->
<input type="file" name="cv" accept=".pdf,.docx">

<!-- Couleur -->
<input type="color" name="couleur-favorite">
```

---

### **📌 `<textarea>`**

- **Rôle** : Zone de texte multi-lignes.
- **Exemple** :
  ```html
  <textarea name="message" rows="5" cols="50" placeholder="Votre message..."></textarea>
  ```
  - `rows` : Nombre de lignes visibles.
  - `cols` : Nombre de colonnes (largeur).

---

### **📌 `<select>` et `<option>`**

- **Rôle** : Liste déroulante.
- **Exemple** :
  ```html
  <select name="pays" required>
    <option value="" disabled selected>Sélectionnez un pays</option>
    <option value="fr">France</option>
    <option value="be">Belgique</option>
    <option value="ch">Suisse</option>
  </select>
  ```
  - `disabled` : Désactive l’option.
  - `selected` : Option sélectionnée par défaut.

**Liste déroulante multiple** :

```html
<select name="langues" multiple size="3">
  <option value="fr">Français</option>
  <option value="en">Anglais</option>
  <option value="es">Espagnol</option>
</select>
```

- `multiple` : Permet de sélectionner plusieurs options.
- `size` : Nombre d’options visibles sans dérouler.

---

### **📌 `<datalist>`**

- **Rôle** : Champ de saisie avec **suggestions**.
- **Exemple** :
  ```html
  <input type="text" name="ville" list="villes">
  <datalist id="villes">
    <option value="Paris">
    <option value="Lyon">
    <option value="Marseille">
  </datalist>
  ```

---

### **📌 `<button>`**

- **Rôle** : Bouton cliquable.
- **Attributs** :
  - `type` : `submit` (défaut dans un `<form>`), `button`, `reset`.
  - `disabled` : Désactive le bouton.
- **Exemple** :
  ```html
  <button type="submit">Envoyer</button>
  <button type="button">Annuler</button>
  <button type="reset">Réinitialiser</button>
  ```

---

### **📌 `<fieldset>` et `<legend>`**

- **Rôle** : Regrouper des champs liés et ajouter une légende.
- **Exemple** :
  ```html
  <fieldset>
    <legend>Informations personnelles</legend>
    <label for="nom">Nom :</label>
    <input type="text" id="nom" name="nom">
    <label for="email">Email :</label>
    <input type="email" id="email" name="email">
  </fieldset>
  ```

---

### **📌 Validation des Formulaires**

- **HTML5 propose une validation native** (sans JavaScript).
- **Attributs de validation** :

  | Attribut       | Description               | Exemple                                   |
  | -------------- | ------------------------- | ----------------------------------------- |
  | `required`     | Champ obligatoire.        | `<input required>`                        |
  | `minlength`    | Longueur minimale.        | `<input minlength="5">`                   |
  | `maxlength`    | Longueur maximale.        | `<input maxlength="20">`                  |
  | `min`/`max`    | Valeur minimale/maximale. | `<input type="number" min="0" max="100">` |
  | `pattern`      | Expression régulière.     | `<input pattern="[A-Za-z]+">`             |
  | `type="email"` | Valide le format email.   | `<input type="email">`                    |
  | `type="url"`   | Valide le format URL.     | `<input type="url">`                      |


**Exemple complet** :

```html
<form action="/submit" method="POST">
  <label for="nom">Nom :</label>
  <input type="text" id="nom" name="nom" required minlength="2" maxlength="50">

  <label for="email">Email :</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Mot de passe :</label>
  <input type="password" id="password" name="password" required minlength="8" pattern="[A-Za-z0-9!@#$%^&*]+">

  <label for="age">Âge :</label>
  <input type="number" id="age" name="age" min="18" max="99">

  <button type="submit">S'inscrire</button>
</form>
```

---

---

## **🔹 9. Tableaux**

### **📌 Structure de Base**

```html
<table>
  <caption>Titre du tableau</caption>
  <thead>
    <tr>
      <th>En-tête 1</th>
      <th>En-tête 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Donnée 1</td>
      <td>Donnée 2</td>
    </tr>
    <tr>
      <td>Donnée 3</td>
      <td>Donnée 4</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Pied 1</td>
      <td>Pied 2</td>
    </tr>
  </tfoot>
</table>
```

- **Balises** :
  - `<table>` : Conteneur du tableau.
  - `<caption>` : Titre du tableau (pour l’accessibilité).
  - `<thead>` : En-tête du tableau.
  - `<tbody>` : Corps du tableau.
  - `<tfoot>` : Pied du tableau.
  - `<tr>` : Ligne (*table row*).
  - `<th>` : Cellule d’en-tête (*table header*).
  - `<td>` : Cellule de données (*table data*).

---

### **📌 Fusion de Cellules**

- `**colspan**` : Fusionne des cellules **horizontalement**.
- `**rowspan**` : Fusionne des cellules **verticalement**.

**Exemple** :

```html
<table border="1">
  <tr>
    <th>Nom</th>
    <th>Prénom</th>
    <th>Âge</th>
  </tr>
  <tr>
    <td rowspan="2">Dupont</td>
    <td>Jean</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Marie</td>
    <td>25</td>
  </tr>
  <tr>
    <td colspan="2">Total</td>
    <td>55</td>
  </tr>
</table>
```

---

---

## **🔹 10. Accessibilité (a11y)**

### **📌 Pourquoi l’accessibilité est-elle importante ?**

1. **Inclusion** : Permet à **tous les utilisateurs** (y compris les personnes en situation de handicap) d’accéder à ton site.
2. **SEO** : Les moteurs de recherche (Google) **priorisent** les sites accessibles.
3. **Légalité** : Dans certains pays (ex : France), l’accessibilité est **obligatoire** pour les sites publics (RGAA).

---

### **📌 Bonnes Pratiques d’Accessibilité**

#### **1. Balises Sémantiques**

- Utiliser `<header>`, `<nav>`, `<main>`, `<footer>`, etc. (voir section précédente).

#### **2. Attributs `alt` pour les Images**

- **Règle** : **Toujours** ajouter un `alt` descriptif.
- **Exemples** :
  - ✅ `<img src="logo.png" alt="Logo de l'entreprise">`
  - ❌ `<img src="logo.png" alt="image">` (trop vague)
  - ❌ `<img src="logo.png" alt="">` (vide, sauf si l’image est purement décorative).

**Cas particuliers** :

- **Image décorative** : `alt=""` (le lecteur d’écran l’ignorera).
  ```html
  <img src="separateur.jpg" alt="">
  ```
- **Image avec texte** : Répéter le texte dans l’`alt`.
  ```html
  <img src="bouton-acheter.png" alt="Acheter maintenant">
  ```

#### **3. Liens Accessibles**

- **Éviter les liens du type "Cliquez ici"** :
  - ❌ `<a href="/contact">Cliquez ici</a>`
  - ✅ `<a href="/contact">Contactez-nous</a>`
- **Ajouter des attributs `aria-label` si nécessaire** :
  ```html
  <a href="/telecharger" aria-label="Télécharger le guide PDF">Télécharger</a>
  ```

#### **4. Formulaires Accessibles**

- **Associer les labels aux inputs** :
  ```html
  <label for="nom">Nom :</label>
  <input type="text" id="nom" name="nom">
  ```
  - **Pourquoi ?** : Permet de cliquer sur le label pour activer l’input (meilleure UX).
- **Utiliser `aria-*` pour les champs complexes** :
  ```html
  <input type="text" aria-label="Rechercher" aria-required="true">
  ```

#### **5. Couleurs et Contraste**

- **Ne pas utiliser la couleur comme seule information** :
  - ❌ `<span style="color: red;">Erreur</span>`
  - ✅ `<span style="color: red;" aria-label="Erreur : ">Erreur</span>`
- **Vérifier le contraste** :
  - Utiliser des outils comme [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
  - **Règle** : Le contraste doit être d’au moins **4.5:1** pour le texte normal.

#### **6. Navigation au Clavier**

- **Tous les éléments interactifs** (liens, boutons, inputs) doivent être **accessibles via le clavier** (tabulation).
- **Ordre de tabulation** : Utiliser `tabindex` si nécessaire.
  ```html
  <button tabindex="1">Bouton 1</button>
  <button tabindex="2">Bouton 2</button>
  ```
  - **À éviter** : `tabindex` négatif (sauf cas très spécifiques).

#### **7. ARIA (Accessible Rich Internet Applications)**

- **Rôle** : Ajouter des informations pour les **technologies d’assistance** (lecteurs d’écran).
- **Attributs courants** :

  | Attribut        | Description                             | Exemple                                        |
  | --------------- | --------------------------------------- | ---------------------------------------------- |
  | `aria-label`    | Label accessible pour un élément.       | `<button aria-label="Fermer">X</button>`       |
  | `aria-hidden`   | Masque un élément aux lecteurs d’écran. | `<span aria-hidden="true">🔍</span>`           |
  | `aria-expanded` | Indique si un élément est déployé.      | `<button aria-expanded="false">Menu</button>`  |
  | `aria-live`     | Zone de mise à jour dynamique.          | `<div aria-live="polite">Mise à jour...</div>` |
  | `role`          | Définit le rôle d’un élément.           | `<div role="button">Cliquez-moi</div>`         |


**Exemple avec un menu déroulant** :

```html
<button aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu" aria-hidden="true">
  <li><a href="/">Accueil</a></li>
  <li><a href="/about">À propos</a></li>
</ul>
```

- **JavaScript nécessaire** pour mettre à jour `aria-expanded` et `aria-hidden` quand le menu est ouvert/fermé.

---

---

## **🔹 11. SEO (Optimisation pour les Moteurs de Recherche)**

### **📌 Qu’est-ce que le SEO ?**

- **Définition** : *Search Engine Optimization* → Optimiser un site pour **améliorer son classement** dans les résultats des moteurs de recherche (Google, Bing, etc.).

---

### **📌 Bonnes Pratiques SEO en HTML**

1. **Balises `<title>` et `<meta description>**` :
  - `**<title>**` : Titre de la page (affiché dans les résultats de recherche).
  - `**<meta description>**` : Description de la page (affichée sous le titre dans les résultats).
    ```html
    <meta name="description" content="Découvrez mon portfolio de développeuse front-end spécialisée en React et UX.">
    ```
2. **Balises Sémantiques** :
  - Utiliser `<header>`, `<main>`, `<article>`, `<section>`, etc. (voir section précédente).
3. **Hiérarchie des Titres** :
  - **Un seul `<h1>` par page** (titre principal).
  - Utiliser `<h2>`, `<h3>`, etc. pour structurer le contenu.
4. **Attributs `alt` pour les Images** :
  - **Décrivez l’image** avec des mots-clés pertinents.
5. **URLs propres** :
  - Utiliser des URLs **courtes et descriptives**.
    - ❌ `mon-site.com/page1?id=123`
    - ✅ `mon-site.com/portfolio-projets-react`
6. **Liens Internes** :
  - Lier les pages entre elles avec des **ancres descriptives**.
7. **Open Graph (pour les réseaux sociaux)** :
  - Ajouter des métadonnées pour les partages sur Facebook, Twitter, etc.

---

---

## **🔹 12. Questions Fréquentes en Entretien (HTML)**

### **❓ 1. Quelle est la différence entre `<div>` et `<span>` ?**


| `**<div>**`                                                              | `**<span>**`                                                                |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| **Bloc** : Prend toute la largeur disponible, saut de ligne avant/après. | **Inline** : S’intègre dans le flux du texte (pas de saut de ligne).        |
| Utilisé pour **regrouper des éléments** (ex : un conteneur).             | Utilisé pour **styliser une partie de texte**.                              |
| Exemple : `<div class="container">...</div>`                             | Exemple : `<p>Du texte <span class="highlight">en surbrillance</span>.</p>` |


**Réponse** :
*"`<div>` est une balise de bloc, ce qui signifie qu’elle prend toute la largeur disponible et crée un saut de ligne. Elle est idéale pour structurer la page en sections. `<span>` est une balise inline, qui s’intègre dans le texte sans saut de ligne. Elle est utile pour appliquer un style à une partie spécifique d’un texte, comme un mot en couleur."*

---

### **❓ 2. À quoi sert le `<!DOCTYPE html>` ?**

**Réponse** :
*"Le `<!DOCTYPE html>` indique au navigateur que le document est écrit en **HTML5**, la version actuelle du langage. Sans cette déclaration, le navigateur passe en 'mode quirks', un mode de compatibilité avec les anciennes versions de HTML, ce qui peut entraîner des comportements imprévisibles. En HTML5, le doctype est simplifié par rapport aux versions précédentes (ex : HTML4 avait un doctype beaucoup plus long)."*

---

### **❓ 3. Pourquoi utiliser des balises sémantiques plutôt que des `<div>` ?**

**Réponse** :
*"Les balises sémantiques comme `<header>`, `<nav>`, `<main>`, ou `<article>` ont plusieurs avantages :

1. **Accessibilité** : Les lecteurs d’écran (pour les malvoyants) comprennent mieux la structure de la page. Par exemple, un lecteur d’écran annoncerait 'Navigation, 3 éléments' pour un `<nav>`.
2. **SEO** : Les moteurs de recherche comme Google priorisent les balises sémantiques pour l’indexation, car elles décrivent clairement le rôle de chaque section.
3. **Maintenabilité** : Le code est plus lisible et plus facile à maintenir, car on comprend immédiatement le rôle de chaque partie du document.
4. **Styling** : On peut cibler des éléments spécifiques avec CSS (ex : `header { ... }`) sans avoir à ajouter des classes inutiles."*

---

### **❓ 4. Comment rendre une page HTML accessible ?**

**Réponse** :
*"Pour rendre une page HTML accessible, je suis plusieurs bonnes pratiques :

1. **Balises sémantiques** : Utiliser `<header>`, `<nav>`, `<main>`, `<footer>`, etc.
2. **Attributs `alt**` : Toujours ajouter un texte alternatif descriptif aux images.
3. **Labels pour les formulaires** : Associer chaque `<input>` à un `<label>` avec l’attribut `for`.
4. **Contraste des couleurs** : Vérifier que le contraste entre le texte et l’arrière-plan est suffisant (au moins 4.5:1).
5. **Navigation au clavier** : S’assurer que tous les éléments interactifs sont accessibles via le clavier (tabulation).
6. **ARIA** : Utiliser des attributs comme `aria-label` ou `aria-hidden` pour ajouter des informations pour les technologies d’assistance.
7. **Structure logique** : Utiliser une hiérarchie de titres claire (`<h1>` à `<h6>`)."*

---

### **❓ 5. Qu’est-ce que le DOM ?**

**Réponse** :
*"Le **DOM** (*Document Object Model*) est une **représentation arborescente** du document HTML en mémoire. Quand le navigateur charge une page HTML, il construit le DOM à partir du code HTML. JavaScript peut ensuite **manipuler le DOM** pour modifier dynamiquement la page (ex : ajouter, supprimer, ou modifier des éléments).
Par exemple, si j’ai ce code HTML :

```html
<div id="maDiv">Contenu initial</div>
```

Le DOM correspondra à un nœud `div` avec un enfant texte. Avec JavaScript, je peux faire :

```javascript
document.getElementById('maDiv').textContent = 'Nouveau contenu';
```

Cela mettra à jour le DOM, et le navigateur mettra à jour l’affichage en conséquence."*

---

### **❓ 6. Comment optimiser une page HTML pour le SEO ?**

**Réponse** :
*"Pour optimiser une page HTML pour le SEO, je suis ces bonnes pratiques :

1. **Balises `<title>` et `<meta description>**` : Donner un titre et une description uniques et descriptifs pour chaque page.
2. **Balises sémantiques** : Utiliser `<header>`, `<main>`, `<article>`, etc. pour structurer le contenu.
3. **Hiérarchie des titres** : Un seul `<h1>` par page, et une hiérarchie logique avec `<h2>`, `<h3>`, etc.
4. **Attributs `alt**` : Ajouter des descriptions riches en mots-clés aux images.
5. **URLs propres** : Utiliser des URLs courtes et descriptives (ex : `/mon-projet` au lieu de `/page?id=123`).
6. **Liens internes** : Lier les pages entre elles avec des ancres descriptives.
7. **Open Graph** : Ajouter des métadonnées pour les partages sur les réseaux sociaux.
8. **Performance** : Minimiser le poids des images, utiliser le lazy loading, etc."*

---

### **❓ 7. Quelle est la différence entre `GET` et `POST` dans un formulaire ?**

**Réponse** :
*"La différence entre `GET` et `POST` concerne la façon dont les données du formulaire sont envoyées au serveur :

- `**GET**` :
  - Les données sont **ajoutées à l’URL** sous forme de paramètres (ex : `?nom=Aurélie&age=25`).
  - **Visible dans l’URL** → Pas sécurisé pour les données sensibles (ex : mots de passe).
  - **Limité en taille** (environ 2048 caractères selon les navigateurs).
  - Utilisé pour des **requêtes idempotentes** (ex : recherche, filtrage).
- `**POST**` :
  - Les données sont **envoyées dans le corps de la requête HTTP** (invisible dans l’URL).
  - **Plus sécurisé** pour les données sensibles.
  - **Pas de limite de taille** (théoriquement).
  - Utilisé pour des **actions qui modifient des données** (ex : création de compte, envoi de formulaire).
  En HTML, on spécifie la méthode avec l’attribut `method` de la balise `<form>` :

```html
<form action="/recherche" method="GET">...</form>
<form action="/inscription" method="POST">...</form>
```

---

### **❓ 8. Comment créer un formulaire accessible ?**

**Réponse** :
*"Pour créer un formulaire accessible, je suis ces étapes :

1. **Associer chaque `<input>` à un `<label>**` avec l’attribut `for` :
  ```html
   <label for="nom">Nom :</label>
   <input type="text" id="nom" name="nom">
  ```
2. **Utiliser des attributs `aria-***` pour les champs complexes :
  ```html
   <input type="text" aria-label="Rechercher" aria-required="true">
  ```
3. **Grouper les champs liés** avec `<fieldset>` et `<legend>` :
  ```html
   <fieldset>
     <legend>Informations personnelles</legend>
     <label for="nom">Nom :</label>
     <input type="text" id="nom">
   </fieldset>
  ```
4. **Ajouter des messages d’erreur accessibles** :
  ```html
   <input type="text" aria-invalid="true" aria-describedby="erreur-nom">
   <span id="erreur-nom" class="erreur">Le nom est obligatoire.</span>
  ```
5. **Vérifier l’ordre de tabulation** : S’assurer que les champs sont accessibles dans un ordre logique via le clavier.
6. **Utiliser des types d’`input` adaptés** (`email`, `date`, etc.) pour une validation native et une meilleure UX sur mobile."*

---
---


## **🔹 13. Ressources pour Aller Plus Loin**

- **Documentation officielle** : [MDN HTML](https://developer.mozilla.org/fr/docs/Web/HTML)
- **Validation HTML** : [W3C Validator](https://validator.w3.org/)
- **Accessibilité** :
  - [WCAG 2.1](https://www.w3.org/WAI/standards-guidelines/wcag/)
  - [A11Y Project](https://www.a11yproject.com/)
- **SEO** :
  - [Guide SEO de Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
  - [Moz SEO](https://moz.com/beginners-guide-to-seo)
- **Outils** :
  - [Can I Use](https://caniuse.com/) (compatibilité des balises/attributs)
  - [HTML5 Doctor](https://html5doctor.com/) (bonnes pratiques)
