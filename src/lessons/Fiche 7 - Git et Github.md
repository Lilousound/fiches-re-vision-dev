# 📌 Fiche Révision : Git & GitHub

*Pour maîtriser le versioning, collaborer efficacement, et répondre aux questions en entretien.*

---

## 🔹 1. Introduction à Git & GitHub

### 📌 Qu’est-ce que Git ?

- **Définition** : Système de contrôle de version **distribué** (chaque utilisateur a une copie complète de l’historique).
- **Créateur** : Linus Torvalds (2005, pour le noyau Linux).
- **Fonctionnalités clés** :
  - Suivre l’historique du code (qui a fait quoi, quand, pourquoi).
  - Revenir en arrière à n’importe quel point de l’historique.
  - Travailler à plusieurs **sans écraser** les modifications.
  - Créer des branches pour isoler les fonctionnalités.

### 📌 Qu’est-ce que GitHub ?

- **Définition** : Plateforme **cloud** basée sur Git, rachetée par Microsoft en 2018.
- **Fonctionnalités clés** :
  - Héberger des dépôts (repos) **publics/privés**.
  - Collaborer via **Pull Requests (PR)**, **Issues**, **Discussions**.
  - Gérer des projets avec **GitHub Projects**, **Actions** (CI/CD).
  - Intégrations : **GitHub Pages** (hébergement de sites statiques), **GitHub Copilot** (IA).

### 📌 Git vs GitHub vs GitLab vs Bitbucket


| Outil         | Type       | Hébergement      | Collaboration | CI/CD intégré  | Gratuit (privé) |
| ------------- | ---------- | ---------------- | ------------- | -------------- | --------------- |
| **Git**       | Outil CLI  | Local            | ❌ Non         | ❌ Non          | ✅ Oui           |
| **GitHub**    | Plateforme | Cloud            | ✅ Oui         | ✅ Oui          | ✅ Oui (limité)  |
| **GitLab**    | Plateforme | Cloud/On-premise | ✅ Oui         | ✅ Oui (avancé) | ✅ Oui           |
| **Bitbucket** | Plateforme | Cloud            | ✅ Oui         | ✅ Oui          | ✅ Oui (limité)  |


### 📌 Workflow de base

```bash
# 1. Ajouter les modifications au staging
git add .

# 2. Valider les modifications avec un message clair
git commit -m "feat: add login page"

# 3. Envoyer les modifications vers le dépôt distant
git push origin main
```

---

## 🔹 2. Installation & Configuration

### 📌 Installation

- **Linux (Debian/Ubuntu)** : `sudo apt install git`
- **Mac** : `brew install git`
- **Windows** : Télécharger [Git for Windows](https://git-scm.com/download/win).
- **Vérifier** : `git --version`

### 📌 Configuration globale

```bash
# Définir son nom et email (utilisés dans les commits)
git config --global user.name "Aurélie R"
git config --global user.email "aurelie@example.com"

# Définir l'éditeur de texte par défaut (ex: VS Code)
git config --global core.editor "code --wait"

# Activer la coloration syntaxique
git config --global color.ui true

# Vérifier la configuration
git config --list
```

### 📌 Initialiser un dépôt

```bash
# Créer un nouveau dépôt local
git init

# Cloner un dépôt distant (ex: GitHub)
git clone https://github.com/user/repo.git
# Ou avec SSH (recommandé pour éviter les mots de passe)
git clone git@github.com:user/repo.git
```

---

## 🔹 3. Cycle de vie des fichiers

### 📌 États des fichiers


| État          | Description                              | Commande pour passer à l'état suivant |
| ------------- | ---------------------------------------- | ------------------------------------- |
| **Untracked** | Fichier nouveau, non suivi par Git       | `git add <fichier>` → **Staged**      |
| **Modified**  | Fichier modifié depuis le dernier commit | `git add <fichier>` → **Staged**      |
| **Staged**    | Fichier prêt à être commit               | `git commit` → **Committed**          |
| **Committed** | Fichier sauvegardé dans l’historique     | `git push` → **Distant**              |


### 📌 Workflow complet

```bash
# Voir l'état des fichiers
git status

# Ajouter un fichier spécifique
git add fichier.js

# Ajouter tous les fichiers modifiés
git add .

# Valider les modifications
git commit -m "feat: add login form"

# Envoyer vers le dépôt distant
git push origin main
```

---

## 🔹 4. Commandes Essentielles

### 📌 Commandes de base


| Commande              | Description                                              |
| --------------------- | -------------------------------------------------------- |
| `git status`          | Affiche l’état des fichiers (untracked/modified/staged). |
| `git add <fichier>`   | Ajoute un fichier au staging.                            |
| `git add .`           | Ajoute tous les fichiers modifiés.                       |
| `git commit -m "msg"` | Valide les modifications avec un message.                |
| `git push`            | Envoie les commits vers le dépôt distant.                |
| `git pull`            | Récupère les modifications distantes + merge.            |
| `git fetch`           | Récupère les modifications distantes **sans merge**.     |


### 📌 Historique et inspection


| Commande                    | Description                              |
| --------------------------- | ---------------------------------------- |
| `git log`                   | Affiche l’historique des commits.        |
| `git log --oneline`         | Historique compact (1 ligne par commit). |
| `git log --graph --oneline` | Historique avec graphique des branches.  |
| `git show <commit>`         | Affiche les détails d’un commit.         |
| `git diff`                  | Affiche les modifications non staged.    |
| `git diff --staged`         | Affiche les modifications staged.        |
| `git diff HEAD~1`           | Compare avec le commit précédent.        |


### 📌 Annuler des modifications


| Commande                         | Description                                                | ⚠️ Attention                                  |
| -------------------------------- | ---------------------------------------------------------- | --------------------------------------------- |
| `git restore <fichier>`          | Annule les modifications **non staged**.                   | Ne touche pas au staging.                     |
| `git restore --staged <fichier>` | Retire un fichier du staging.                              | &nbsp;                                        |
| `git reset HEAD <fichier>`       | Retire un fichier du staging (ancienne syntaxe).           | &nbsp;                                        |
| `git reset --soft HEAD~1`        | Annule le dernier commit **mais garde les modifications**. | Commit disparu, mais fichiers intacts.        |
| `git reset --hard HEAD~1`        | **Supprime** le dernier commit et les modifications.       | ⚠️ **Irréversible** (sauf avec `git reflog`). |
| `git revert <commit>`            | Crée un nouveau commit qui annule un commit précédent.     | Safe pour les branches partagées.             |


---

## 🔹 5. Les Branches

### 📌 Pourquoi utiliser des branches ?

- **Isoler** les fonctionnalités/bugfixes.
- **Éviter** de casser le code principal (`main`/`master`).
- **Travailler en parallèle** avec plusieurs développeurs.

### 📌 Commandes


| Commande                             | Description                                          |
| ------------------------------------ | ---------------------------------------------------- |
| `git branch`                         | Liste les branches locales.                          |
| `git branch -a`                      | Liste **toutes** les branches (locales + distantes). |
| `git checkout -b <branche>`          | Crée et bascule sur une nouvelle branche.            |
| `git switch <branche>`               | Bascule sur une branche existante.                   |
| `git switch -c <branche>`            | Crée et bascule sur une nouvelle branche.            |
| `git merge <branche>`                | Fusionne une branche dans la branche actuelle.       |
| `git branch -d <branche>`            | Supprime une branche **locale**.                     |
| `git push origin --delete <branche>` | Supprime une branche **distante**.                   |


### 📌 Bonnes pratiques

- **Nommage** :
  - `main`/`master` : Code stable en production.
  - `develop` : Branche de développement (optionnelle).
  - `feature/<nom>` : Nouvelle fonctionnalité (ex: `feature/login`).
  - `fix/<nom>` : Correction de bug (ex: `fix/login-error`).
  - `release/<version>` : Préparation d’une release.
  - `hotfix/<nom>` : Correction urgente en production.
- **Règles** :
  - Toujours pull avant de créer une nouvelle branche.
  - Éviter de travailler directement sur `main`.
  - Supprimer les branches mergées (pour éviter la pollution).

---

## 🔹 6. Merge vs Rebase

### 📌 Merge

- **Commande** : `git merge <branche>`
- **Effet** :
  - Crée un **commit de merge** (avec 2 parents).
  - Conserve l’historique **complet** (branches visibles).
- **Quand l’utiliser ?** :
  - Pour fusionner des branches **partagées** (ex: `develop` → `main`).
  - Quand on veut garder une trace claire des branches.

### 📌 Rebase

- **Commande** : `git rebase <branche>` (ex: `git rebase main`)
- **Effet** :
  - **Réécrit l’historique** : les commits de la branche actuelle sont replacés **après** la branche cible.
  - Historique **linéaire** (plus propre).
- **Quand l’utiliser ?** :
  - Pour **nettoyer** l’historique avant une PR.
  - Sur des branches **locales** (jamais sur `main` ou des branches partagées).
- **⚠️ Danger** :
  - **Ne jamais rebase** une branche déjà poussée sur un dépôt distant (risque de conflits pour les autres).
  - Utiliser `git pull --rebase` pour éviter les commits de merge inutiles.

### 📌 Comparaison


| Critère         | Merge                            | Rebase               |
| --------------- | -------------------------------- | -------------------- |
| **Historique**  | Non linéaire (branches visibles) | Linéaire             |
| **Commits**     | Ajoute un commit de merge        | Réécrit les commits  |
| **Sécurité**    | Safe pour les branches partagées | ⚠️ Risqué si partagé |
| **Utilisation** | Fusion de branches               | Nettoyage avant PR   |


---

## 🔹 7. Gestion des Conflits

### 📌 Pourquoi les conflits apparaissent ?

- Deux modifications **simultanées** sur les **mêmes lignes** d’un fichier.
- Exemple :
  - Sur `main` : `const x = 1;`
  - Sur `feature` : `const x = 2;`

### 📌 Résolution manuelle

1. **Identifier le conflit** :
  ```bash

  ```

git pull  # Récupère les modifications distantes
git status # Affiche les fichiers en conflit

3. **Résoudre** : Modifier le fichier pour garder la bonne version (ou les fusionner).
4. **Valider** :
  ```bash

  ```

git add &nbsp;  # Marque le conflit comme résolu
git commit         # Finalise la résolution

### 📌 Types de commits


| Type       | Utilisation                                | Exemple                         |
| ---------- | ------------------------------------------ | ------------------------------- |
| `feat`     | Nouvelle fonctionnalité                    | `feat: add login page`          |
| `fix`      | Correction de bug                          | `fix: handle null error`        |
| `docs`     | Documentation                              | `docs: update README`           |
| `style`    | Formatage (espaces, points-virgules)       | `style: fix indentation`        |
| `refactor` | Refactoring (sans changer le comportement) | `refactor: simplify auth logic` |
| `test`     | Ajout/modification de tests                | `test: add login test`          |
| `chore`    | Maintenance (config, dépendances)          | `chore: update npm packages`    |
| `perf`     | Amélioration des performances              | `perf: optimize query`          |
| `build`    | Modifications du build                     | `build: update webpack config`  |
| `ci`       | Configuration CI/CD                        | `ci: add GitHub Actions`        |


### 📌 Bonnes pratiques

- **Message** :
  - **Impératif** : "add", "fix", "update" (pas "added", "fixed").
  - **Court** : < 50 caractères pour la première ligne.
  - **Clair** : Expliquer **pourquoi** (pas juste "quoi").
- **1 commit = 1 intention** : Éviter les commits géants.
- **Scope** : Optionnel, mais utile pour les gros projets (ex: `feat(auth): add login`).

### 📌 Exemples

```plaintext
feat: add user authentication
fix(api): handle 404 error for missing user
refactor: extract login logic into separate module
docs: add installation instructions to README
chore: upgrade React to v18
```

---

## 🔹 9. README.md (ULTRA IMPORTANT)

### 📌 Structure de base

```markdown
# Nom du Projet

## 📌 Description
Brève description du projet (1-2 phrases).

## 🛠️ Tech Stack
- **Frontend** : React, TypeScript, Tailwind CSS
- **Backend** : Node.js, Express
- **Base de données** : PostgreSQL

## ⚙️ Installation
```bash
# Cloner le dépôt
git clone https://github.com/user/repo.git

# Installer les dépendances
npm install

# Lancer le projet
npm run dev
```

## 🚀 Usage

Instructions pour utiliser le projet.

## 📂 Structure du projet

```
project/
├── src/
│   ├── components/
│   └── pages/
├── public/
└── README.md
```

## 🤝 Contribution

Comment contribuer au projet (ex: ouvrir une PR).

## 📜 Licence

MIT / Apache 2.0 / etc.

## 👤 Auteur

[Votre Nom](https://github.com/votre-profil)

```

### 📌 Bonnes pratiques
- **Clarté** : Instructions simples et testées.
- **Badges** (optionnel) :
  ```markdown
  ![GitHub stars](https://img.shields.io/github/stars/user/repo)
  ![License](https://img.shields.io/badge/license-MIT-blue)
```

- **Screenshots** : Captures d’écran pour les projets visuels.
- **Liens** : Vers la démo, la documentation, etc.

---

## 🔹 10. Pull Request (PR)

### 📌 Définition

- **Demande de fusion** d’une branche vers une autre (ex: `feature/login` → `main`).
- **Processus** :
  1. Push la branche sur GitHub.
  2. Ouvrir une PR via l’interface GitHub.
  3. **Review** : L’équipe commente/valide.
  4. **Merge** : Fusionner la PR (après résolution des éventuels conflits).

### 📌 Workflow typique

```bash
# 1. Créer une branche
git checkout -b feature/login

# 2. Faire des commits
git add .
git commit -m "feat: add login form"

# 3. Pousser la branche
git push origin feature/login

# 4. Ouvrir une PR sur GitHub (via l'interface web)
```

### 📌 Bonnes pratiques

- **Taille** : PR **petites** (< 300 lignes de code modifié).
- **Titre** : Clair et descriptif (ex: `feat: add login form`).
- **Description** :
  - Expliquer **le pourquoi** (pas juste le quoi).
  - Lier à une **issue** (ex: `Closes #123`).
  - Ajouter des **screenshots** si UI.
- **Review** :
  - Relire son code avant de push.
  - Répondre aux commentaires.
- **Merge** :
  - Utiliser **Squash and Merge** pour les petites PR.
  - Éviter le **Merge Commit** si l’historique est propre.

---

## 🔹 11. Issues & GitHub Projects

### 📌 Issues

- **Utilité** :
  - Signaler un **bug**.
  - Proposer une **feature**.
  - Suivre une **tâche**.
- **Bonnes pratiques** :
  - **Titre** : Clair et concis.
  - **Description** :
    - Étapes pour reproduire (pour les bugs).
    - Comportement attendu vs. réel.
    - Captures d’écran si utile.
  - **Labels** : `bug`, `enhancement`, `documentation`, etc.
  - **Assigner** : À un membre de l’équipe.
  - **Milestone** : Pour organiser les sprints.

### 📌 GitHub Projects

- **Tableaux Kanban** pour gérer les tâches.
- **Colonnes typiques** :
  - **To Do** → **In Progress** → **Review** → **Done**
- **Automatisation** :
  - Déplacer automatiquement les issues/PR entre colonnes.
  - Lier à des **GitHub Actions**.

---

## 🔹 12. .gitignore

### 📌 Pourquoi ?

- **Exclure** des fichiers/dossiers du versioning :
  - Fichiers générés (`node_modules/`, `dist/`).
  - Fichiers sensibles (`.env`, clés API).
  - Fichiers IDE (`.vscode/`, `.idea/`).
  - Logs (`*.log`).

### 📌 Exemple pour un projet Node.js/React

```plaintext
# Dependencies
node_modules/

# Build output
dist/
build/

# Environment variables
.env
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db

# Test coverage
coverage/

# Cache
.cache/
```

### 📌 Générateurs en ligne

- [gitignore.io](https://www.toptal.com/developers/gitignore) (ex: `Node,React,macOS`).

---

## 🔹 13. GitHub Actions (CI/CD)

### 📌 Qu’est-ce que c’est ?

- **Automatisation** de tâches : tests, déploiement, etc.
- **Workflow** : Fichiers YAML dans `.github/workflows/`.

### 📌 Exemple : Déploiement d’un site statique

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v3
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist
      - uses: actions/deploy-pages@v2
```

### 📌 Exemple : Tests automatiques

```yaml
# .github/workflows/tests.yml
name: Run Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm test
```

### 📌 Bonnes pratiques

- **Noms de workflows** : Clairs (ex: `deploy`, `tests`).
- **Triggers** :
  - `push` : À chaque commit.
  - `pull_request` : À chaque PR.
  - `schedule` : Planifié (ex: tous les jours à minuit).
- **Caching** : Utiliser `actions/cache` pour accélérer les builds.

---

## 🔹 14. Bonnes Pratiques Globales

### 📌 Organisation du code

- **Commits** :
  - Fréquents et **atomiques** (1 commit = 1 changement logique).
  - Messages **clairs et descriptifs**.
- **Branches** :
  - Nommage **explicite** (`feature/login`, pas `fix-123`).
  - Supprimer les branches **mergées**.
- **Dépôt** :
  - **README** à jour.
  - **LICENSE** pour les projets open source.
  - **Issues** et **PR** bien documentées.

### 📌 Sécurité

- **Jamais** commiter :
  - `.env` (utiliser `.env.example` à la place).
  - Mots de passe, clés API, tokens.
- **GitHub Secrets** : Stocker les secrets dans `Settings > Secrets`.
- **Audit** : Utiliser `git-secrets` pour scanner les commits.

### 📌 Collaboration

- **Pull avant push** : `git pull --rebase` pour éviter les conflits.
- **PR petites** : Plus faciles à reviewer.
- **Code Review** :
  - Être **bienveillant** mais rigoureux.
  - Expliquer **pourquoi** un changement est nécessaire.

---

## 🔹 15. Outils Complémentaires

### 📌 Clients Git GUI


| Outil              | Plateforme          | Fonctionnalités             |
| ------------------ | ------------------- | --------------------------- |
| **GitHub Desktop** | Windows/macOS       | Intégration GitHub, simple. |
| **GitKraken**      | Windows/macOS/Linux | Visuel, puissant.           |
| **Sourcetree**     | Windows/macOS       | Gratuit (Atlassian).        |
| **VS Code**        | Tous                | Extension Git intégrée.     |


### 📌 Extensions VS Code utiles

- **GitLens** : Supercharge Git dans VS Code (blame, historique, etc.).
- **GitHub Pull Requests** : Gérer les PR directement dans VS Code.
- **Git Graph** : Visualiser l’historique Git.

---

## 🔹 16. Questions Fréquentes en Entretien

### ❓ Git vs GitHub ?

→ **Git** est l’outil de versioning (local), **GitHub** est la plateforme cloud qui l’utilise (collaboration, hébergement).

### ❓ Merge vs Rebase ?

→ **Merge** : Safe, conserve l’historique des branches (commit de merge). **Rebase** : Réécrit l’historique pour un historique linéaire (à utiliser sur des branches locales).

### ❓ Pourquoi des commits propres ?

→ **Lisibilité** (pour soi et l’équipe), **collaboration** (facile à reviewer), **debugging** (retrouver un bug).

### ❓ Pourquoi des branches ?

→ **Isoler** les fonctionnalités/bugfixes, **éviter** de casser `main`, **travailler en parallèle**.

### ❓ Que contient un bon README ?

→ **Description**, **installation**, **usage**, **tech stack**, **contribution**, **licence**, **auteur**.

### ❓ Comment résoudre un conflit Git ?

→ `git pull` → résoudre manuellement dans le fichier → `git add` → `git commit`.

### ❓ Qu’est-ce qu’une Pull Request ?

→ Demande de fusion d’une branche vers une autre, avec **review** et **validation** par l’équipe.

### ❓ Qu’est-ce que `.gitignore` ?

→ Fichier pour **exclure** des fichiers/dossiers du versioning (ex: `node_modules/`, `.env`).

### ❓ Comment annuler un commit ?

→ `git reset --soft HEAD~1` (garde les modifications) ou `git revert <commit>` (safe pour les branches partagées).

### ❓ Qu’est-ce que `git stash` ?

→ Sauvegarde temporaire des modifications **non commitées** (pour changer de branche sans commit).

```bash
git stash        # Sauvegarde
git stash pop    # Restaure et supprime le stash
git stash list   # Liste les stashes
git stash drop   # Supprime un stash
```

---

## 🔹 17. Cheat Sheet Ultra Rapide

### 📌 Commandes de base

```bash
# Cloner un dépôt
git clone https://github.com/user/repo.git

# Créer une branche
git checkout -b feature/x

# Ajouter et commiter
git add .
git commit -m "feat: add x"

# Pousser
git push origin feature/x

# Récupérer les modifications
git pull --rebase

# Voir l'historique
git log --oneline --graph
```

### 📌 Résolution de conflits

```bash
git pull
git status          # Voir les fichiers en conflit
# Résoudre manuellement
git add <fichier>
git commit
```

### 📌 Annuler des modifications

```bash
# Annuler les modifications non staged
git restore <fichier>

# Annuler le dernier commit (garde les modifications)
git reset --soft HEAD~1

# Annuler le dernier commit (supprime les modifications)
git reset --hard HEAD~1
```

---

## 🧠 TL;DR

- **Git** = Versioning local (commits, branches, merge).
- **GitHub** = Collaboration cloud (PR, issues, CI/CD).
- **Commits** = Petits, clairs, atomiques.
- **Branches** = Isoler les features, jamais travailler sur `main`.
- **PR** = Travail d’équipe (review avant merge).
- **README** = Documentation obligatoire.
- `**.gitignore**` = Exclure les fichiers inutiles/sensibles.

---

## 📚 Ressources pour Aller Plus Loin

- **Documentation officielle** : [Git](https://git-scm.com/doc) | [GitHub](https://docs.github.com/)
- **Tutoriels** :
  - [GitHub Guides](https://guides.github.com/)
  - [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials)
  - [Learn Git Branching](https://learngitbranching.js.org/) (interactif)
- **Livres** :
  - *Pro Git* (Scott Chacon, gratuit en ligne)
  - *Git for Teams* (Emma Bostian)
- **Chaînes YouTube** :
  - [GitHub](https://www.youtube.com/c/GitHub)
  - [Traversy Media](https://www.youtube.com/c/TraversyMedia) (tutos Git)

---

*💡 Astuce : Pratiquez avec des projets personnels et contribuez à des open source pour maîtriser Git/GitHub !*
