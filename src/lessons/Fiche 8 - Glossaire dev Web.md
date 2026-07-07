# 🧠 Glossaire Dev Web Étendu

Ce glossaire regroupe les termes essentiels du développement web, enrichi de définitions et concepts clés pour les entretiens techniques, les discussions en équipe ou la compréhension globale du milieu.

---

## 📌 **À savoir pour les entretiens**

### **Concepts Généraux**

- **Dev Web** : Développement d'applications accessibles via un navigateur web, divisé en **frontend** (interface utilisateur) et **backend** (logique serveur et bases de données).
- **Stack Technique** : Ensemble des technologies (langages, frameworks, outils) utilisées pour développer une application. Exemple : *MERN Stack* (MongoDB, Express.js, React, Node.js).
- **Framework** : Structure logicielle qui simplifie le développement en fournissant des bibliothèques et des conventions. Exemples : React (frontend), Django (backend), Laravel (PHP).
- **Librairie (Library)** : Collection de fonctions ou de classes réutilisables pour accomplir des tâches spécifiques (ex : jQuery, Lodash). Contrairement à un framework, elle ne dicte pas l'architecture globale.
- **Open Source** : Logiciel dont le code source est public et modifiable par la communauté. Exemples : Linux, React, VS Code.
- **Proprietary Software** : Logiciel dont le code source est privé et contrôlé par une entreprise (ex : Adobe Photoshop, Windows).

---

## 🔁 **Méthodologies & Organisation**

- **Agile** : Méthodologie itérative et incrémentale pour la gestion de projet, axée sur la **collaboration**, la **flexibilité** et la **livraison fréquente** de fonctionnalités. Les principes sont définis dans le [Manifeste Agile](https://agilemanifesto.org/).
Les 4 grands piliers de la méthode Agile (Manifeste Agile, 2001) :
  - *Les individus et leurs interactions* plutôt que processus et outils
  - *Un logiciel fonctionnel* plutôt que documentation exhaustive
  - *La collaboration avec le client* plutôt que négociation contractuelle
  - *L’adaptation au changement* plutôt que suivi d’un plan





- **Scrum** : Framework Agile le plus utilisé, organisé en **sprints** (itérations de 1 à 4 semaines).
  - *Rôles* : **Product Owner (PO)**, **Scrum Master**, **Développeurs**.
  - *Artéfacts* : **Product Backlog**, **Sprint Backlog**, **Incrément** (livrable).
  - *Événements* : **Sprint Planning**, **Daily Stand-up**, **Sprint Review**, **Retrospective**, **Backlog Refinement (Grooming)**.
- **Kanban** : Méthode visuelle de gestion de travail basée sur un tableau (ex : *To Do*, *In Progress*, *Done*). Utilise des **limites de travail en cours (WIP)** pour éviter les goulots d'étranglement.
- **Sprint** : Période fixe pendant laquelle une équipe Scrum travaille sur un ensemble de tâches issues du **Sprint Backlog**. La durée est généralement de **2 semaines**.
- **Daily Stand-up (Daily Scrum)** : Réunion quotidienne de **15 minutes max**, debout, où chaque membre répond à 3 questions :
  1. Qu'ai-je fait hier ?
  2. Que vais-je faire aujourd'hui ?
  3. Quels sont mes blocages ?
- **Retrospective** : Réunion en fin de sprint pour **analyser ce qui a bien/mal fonctionné** et définir des **actions d'amélioration** pour le prochain sprint.
- **Backlog** :
  - **Product Backlog** : Liste **priorisée** de toutes les fonctionnalités, améliorations et corrections de bugs pour un produit. Géré par le **PO**.
  - **Sprint Backlog** : Sous-ensemble du Product Backlog sélectionné pour le sprint en cours.
- **User Story** : Description informelle d'une fonctionnalité du point de vue de l'utilisateur. Format standard :
  ```
  En tant que [rôle], je veux [fonctionnalité] afin de [bénéfice].
  ```
  Exemple : *En tant qu'utilisateur, je veux réinitialiser mon mot de passe afin de retrouver l'accès à mon compte.*
- **Acceptance Criteria** : Liste de conditions **mesurables** qu'une User Story doit satisfaire pour être considérée comme terminée. Exemple :
  - Le lien "Mot de passe oublié ?" doit être visible sur la page de login.
  - L'utilisateur doit recevoir un email avec un lien de réinitialisation.
- **Definition of Done (DoD)** : Critères partagés par l'équipe pour considérer qu'une tâche est **terminée** (ex : code testé, documenté, déployé en staging).
- **Definition of Ready (DoR)** : Critères pour qu'une User Story soit **prête** à être développée (ex : claire, estimée, priorisée).
- **Estimation** : Évaluation de la complexité/temps nécessaire pour une tâche. Méthodes courantes : **Fibonacci (1, 2, 3, 5, 8, 13)**, **T-shirt sizing (XS, S, M, L, XL)**.
- **Velocity** : Nombre de points (ou tâches) qu'une équipe réalise en moyenne par sprint. Utilisé pour prédire la capacité future.

---

## 👥 **Rôles dans une équipe tech**


| Rôle                              | Responsabilités                                                                                       | Compétences Clés                                                              |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Product Owner (PO)**            | Définit la vision du produit, priorise le backlog, maximise la valeur métier.                         | Gestion de produit, analyse métier, communication.                            |
| **Scrum Master**                  | Facilite Scrum, élimine les obstacles, coach l'équipe sur les pratiques Agile.                        | Leadership, résolution de conflits, connaissance de Scrum.                    |
| **Tech Lead**                     | Guide les choix techniques, encadre l'équipe, garantit la qualité du code.                            | Expertise technique, architecture logicielle, mentorat.                       |
| **Développeur Frontend**          | Développe l'interface utilisateur (UI) et l'expérience utilisateur (UX).                              | HTML, CSS, JavaScript, frameworks (React, Angular, Vue).                      |
| **Développeur Backend**           | Développe la logique serveur, les API, et gère les bases de données.                                  | Langages (Node.js, Python, Ruby, Java), bases de données (SQL/NoSQL).         |
| **Développeur Fullstack**         | Travaille sur le frontend **et** le backend.                                                          | Compétences frontend + backend.                                               |
| **DevOps**                        | Automatise les déploiements, gère l'infrastructure, optimise les performances.                        | CI/CD, cloud (AWS, Azure), conteneurs (Docker, Kubernetes), scripting.        |
| **QA (Quality Assurance)**        | Teste les applications pour garantir leur qualité.                                                    | Tests manuels/automatisés, outils (Selenium, Cypress), méthodologies de test. |
| **UX/UI Designer**                | Conçoit l'expérience et l'interface utilisateur.                                                      | Maquettage (Figma, Adobe XD), recherche utilisateur, design thinking.         |
| **CTO (Chief Technical Officer)** | Définit la stratégie technique, supervise l'architecture, aligne la tech avec les objectifs business. | Vision stratégique, gestion d'équipe, expertise technique large.              |
| **Architecte Logiciel**           | Conçoit l'architecture globale des systèmes.                                                          | Patterns de conception, scalabilité, sécurité.                                |


---

## 🧾 **Gestion des besoins**

- **Technical Story** : Tâche technique interne sans valeur utilisateur directe (ex : refactoring, mise à jour de dépendances).
- **Bug** : Anomalie dans le code causant un comportement inattendu. Priorisé selon sa **sévérité** (ex : *Critical*, *High*, *Medium*, *Low*).
- **Epic** : Grande User Story ou ensemble de fonctionnalités liées, trop grosse pour un sprint. Exemple : *Créer un système de paiement en ligne*.
- **Spike** : Tâche de recherche ou d'exploration pour résoudre un problème technique ou évaluer une solution. Exemple : *Évaluer l'utilisation de GraphQL vs REST pour notre API*.
- **Grooming (Backlog Refinement)** : Session collaborative pour **affiner** les User Stories (clarifier, découper, estimer).

---

## 🚀 **Dev & Livraison**

- **CI/CD (Continuous Integration/Continuous Delivery)** :
  - **CI (Intégration Continue)** : Automatisation des **tests** et du **build** à chaque commit dans le dépôt.
  - **CD (Livraison Continue)** : Automatisation du **déploiement** en production ou en staging après validation.
  - *Outils* : GitHub Actions, GitLab CI, Jenkins, CircleCI.
- **Pipeline** : Chaîne automatisée de tâches exécutées séquentiellement. Exemple :
  ```
  Commit → Tests unitaires → Build → Tests d'intégration → Déploiement en staging → Tests E2E → Déploiement en production.
  ```
- **Build** : Processus de compilation/transformation du code source en artefacts exécutables (ex : fichiers `.js` minifiés, binaires).
- **Deploy (Déploiement)** : Mise à disposition d'une application dans un environnement (ex : **staging**, **production**).
- **Rollback** : Retour à une version précédente de l'application en cas de problème.
- **Feature Flag** : Mécanisme pour activer/désactiver une fonctionnalité **sans redéployer** le code. Utile pour les tests A/B ou les livraisons progressives.
- **Canary Release** : Déploiement progressif d'une nouvelle version à un **petit groupe d'utilisateurs** avant une mise en production complète.
- **Blue-Green Deployment** : Basculer le trafic entre deux environnements identiques (ex : *Blue* = ancienne version, *Green* = nouvelle version) pour minimiser les risques.

---

## 🧱 **Architecture & Technologies**

### **Frontend**

- **HTML (HyperText Markup Language)** : Langage de balisage pour structurer le contenu d'une page web.
- **CSS (Cascading Style Sheets)** : Langage pour styliser le contenu HTML (couleurs, polices, mise en page).
- **JavaScript (JS)** : Langage de programmation pour rendre les pages web **interactives**.
- **DOM (Document Object Model)** : Représentation en mémoire d'une page HTML sous forme d'arbre, manipulable via JavaScript.
- **SPA (Single Page Application)** : Application web qui charge une seule page HTML et met à jour dynamiquement son contenu (ex : React, Angular).
- **SSG (Static Site Generation)** : Génération de pages HTML **statiques** à l'avance (ex : Next.js, Gatsby).
- **SSR (Server-Side Rendering)** : Rendering des pages **côté serveur** pour améliorer le SEO et les performances (ex : Next.js, Nuxt.js).
- **CSR (Client-Side Rendering)** : Rendering des pages **côté client** (navigateur) via JavaScript.
- **Web Components** : Standard pour créer des composants réutilisables (Custom Elements, Shadow DOM).
- **PWA (Progressive Web App)** : Application web qui offre une expérience similaire à une app native (hors ligne, notifications, installation).

### **Backend**

- **API (Application Programming Interface)** : Interface permettant à des applications de communiquer. Types :
  - **REST (Representational State Transfer)** : Style d'API basé sur HTTP avec des **ressources** (URLs) et des **méthodes** (GET, POST, PUT, DELETE).
  - **GraphQL** : Langage de requête pour les API, permettant de demander **exactement les données nécessaires**.
  - **SOAP** : Protocole basé sur XML, souvent utilisé dans les systèmes d'entreprise.
  - **WebSocket** : Protocole pour une communication **bidirectionnelle et en temps réel** (ex : chat, jeux en ligne).
- **Microservices** : Architecture où une application est divisée en **services indépendants** (ex : un service pour l'authentification, un autre pour les paiements).
- **Monolithe** : Architecture où toute l'application est **un seul bloc de code** (contraire des microservices).
- **Serverless** : Modèle où le code est exécuté **sans gérer de serveur** (ex : AWS Lambda, Firebase).
- **Middleware** : Logiciel qui fait l'intermédiaire entre le frontend et le backend (ex : gestion des requêtes, authentification).

### **Bases de données**

- **SQL (Structured Query Language)** : Langage pour interagir avec des bases de données **relationnelles** (ex : PostgreSQL, MySQL).
- **NoSQL** : Bases de données **non relationnelles**, adaptées aux données non structurées (ex : MongoDB, Firebase).
  - Types : **Document** (MongoDB), **Clé-Valeur** (Redis), **Colonne** (Cassandra), **Graphe** (Neo4j).
- **ACID** : Propriétés des bases de données relationnelles :
  - **Atomicité** (tout ou rien), **Cohérence**, **Isolation**, **Durabilité**.
- **ORM (Object-Relational Mapping)** : Technique pour mapper les objets en code aux tables en base de données (ex : Sequelize, TypeORM, Django ORM).
- **Index** : Structure pour **accélérer les requêtes** sur une colonne de base de données.
- **Transaction** : Série d'opérations exécutées **atomiquement** (ex : transfert bancaire).

### **Infrastructure & Cloud**

- **Cloud Computing** : Utilisation de serveurs distants pour stocker, gérer et traiter des données (ex : AWS, Google Cloud, Azure).
- **IaaS (Infrastructure as a Service)** : Location d'infrastructure (ex : machines virtuelles).
- **PaaS (Platform as a Service)** : Plateforme pour développer et déployer des applications (ex : Heroku, Vercel).
- **SaaS (Software as a Service)** : Logiciel accessible via abonnement (ex : Slack, Notion).
- **Container** : Environnement isolé pour exécuter une application (ex : Docker).
- **Orchestration de conteneurs** : Gestion automatisée des conteneurs (ex : Kubernetes).
- **Load Balancer** : Répartit le trafic entre plusieurs serveurs pour améliorer les performances.
- **CDN (Content Delivery Network)** : Réseau de serveurs distribués pour livrer du contenu **rapidement** (ex : Cloudflare, Akamai).
- **Edge Computing** : Traitement des données **au plus près de la source** (ex : Cloudflare Workers).

---

## 🌐 **Business & Produit**

- **B2C (Business to Consumer)** : Modèle où une entreprise vend directement aux **consommateurs** (ex : Amazon, Netflix).
- **B2B (Business to Business)** : Modèle où une entreprise vend à **d'autres entreprises** (ex : Salesforce, Slack).
- **SaaS (Software as a Service)** : Logiciel hébergé dans le cloud et accessible via abonnement (ex : GitHub, Zoom).
- **MVP (Minimum Viable Product)** : Version **minimale** d'un produit avec suffisamment de fonctionnalités pour tester une idée sur le marché.
- **Proof of Concept (PoC)** : Prototype pour **valider la faisabilité technique** d'une idée.
- **Roadmap** : Plan stratégique montrant les **fonctionnalités futures** et leur calendrier.
- **KPI (Key Performance Indicator)** : Métrique pour mesurer la performance (ex : taux de conversion, temps de chargement).
- **A/B Testing** : Méthode pour comparer deux versions d'une fonctionnalité afin de déterminer laquelle performe le mieux.
- **Churn Rate** : Taux d'**attrition** (nombre d'utilisateurs qui quittent un service sur une période).
- **Retention Rate** : Taux de **fidélisation** (nombre d'utilisateurs qui continuent à utiliser un service).
- **Monétisation** : Stratégies pour générer des revenus (ex : abonnements, publicité, freemium).

---

## 🔐 **Sécurité & Réglementation**

- **RGPD (Règlement Général sur la Protection des Données)** : Règlement européen pour protéger les **données personnelles** des utilisateurs. Obligations :
  - Consentement explicite.
  - Droit à l'oubli.
  - Notification des fuites de données sous 72h.
- **OWASP Top 10** : Liste des **10 vulnérabilités les plus critiques** pour les applications web (ex : Injection, Cross-Site Scripting).
- **Authentication (AuthN)** : Vérification de l'**identité** d'un utilisateur (ex : mot de passe, OAuth, biométrie).
- **Authorization (AuthZ)** : Vérification des **permissions** d'un utilisateur (ex : rôles, ACL).
- **JWT (JSON Web Token)** : Standard pour échanger des **données sécurisées** sous forme de token (utilisé pour l'authentification).
- **OAuth 2.0** : Protocole d'**autorisation** permettant à une application d'accéder à des ressources d'un utilisateur (ex : connexion via Google/Facebook).
- **CORS (Cross-Origin Resource Sharing)** : Mécanisme pour autoriser les requêtes **cross-domain** (entre origines différentes).
- **CSRF (Cross-Site Request Forgery)** : Attaque où un utilisateur est forcé d'exécuter des actions non désirées sur un site web.
- **XSS (Cross-Site Scripting)** : Attaque où du code malveillant est injecté dans une page web.
- **SQL Injection** : Attaque où du code SQL malveillant est injecté dans une requête.
- **HTTPS** : Protocole **sécurisé** (chiffré via TLS/SSL) pour les communications web.
- **SSL/TLS** : Protocoles de **chiffrement** pour sécuriser les communications sur Internet.
- **Firewall** : Système de sécurité qui **filtre le trafic réseau**.
- **DDoS (Distributed Denial of Service)** : Attaque visant à **surcharger un serveur** pour le rendre indisponible.
- **Zero Trust** : Modèle de sécurité où **aucune entité** n'est fiable par défaut (vérification systématique).

---

## 🧪 **Qualité & Tests**

- **Test** : Processus pour vérifier qu'un code fonctionne comme attendu.
  - **Unit Test** : Test d'une **fonction ou méthode isolée** (ex : avec Jest, PyTest).
  - **Integration Test** : Test des **interactions entre composants** (ex : API + base de données).
  - **E2E (End-to-End) Test** : Test du **parcours utilisateur complet** (ex : avec Cypress, Selenium).
  - **Regression Test** : Test pour s'assurer qu'une modification n'a pas **cassé des fonctionnalités existantes**.
  - **Smoke Test** : Test **minimal** pour vérifier que les fonctionnalités de base fonctionnent.
  - **Performance Test** : Test pour évaluer la **vitesse, scalabilité et stabilité** (ex : avec k6, JMeter).
  - **Load Test** : Test pour vérifier le comportement sous **charge normale**.
  - **Stress Test** : Test pour vérifier le comportement sous **charge extrême**.
- **TDD (Test-Driven Development)** : Méthodologie où les **tests sont écrits avant le code** :
  1. Écrire un test qui échoue.
  2. Écrire le code minimal pour faire passer le test.
  3. Refactoriser le code.
- **BDD (Behavior-Driven Development)** : Méthodologie axée sur le **comportement** de l'application, souvent écrite en langage naturel (ex : Gherkin).
- **Mock** : Objet simulant le comportement d'un **composant réel** (ex : une API) pour les tests.
- **Stub** : Objet fournissant des **réponses prédéfinies** pour les tests.
- **Coverage** : Pourcentage de code **testé** par les tests automatisés. Outils : Istanbul (JS), Coverage.py (Python).

---

## ⚡ **Bonnes pratiques & Principes**

- **DRY (Don't Repeat Yourself)** : Éviter la **duplication de code** en factorisant.
- **KISS (Keep It Simple, Stupid)** : Privilégier la **simplicité** dans le code.
- **YAGNI (You Aren't Gonna Need It)** : Ne pas implémenter de fonctionnalités **inutiles** pour l'instant.
- **SOLID** : 5 principes de conception orientée objet :
  1. **S**ingle Responsibility Principle (SRP) : Une classe = une responsabilité.
  2. **O**pen/Closed Principle (OCP) : Ouvert à l'extension, fermé à la modification.
  3. **L**iskov Substitution Principle (LSP) : Les sous-classes doivent pouvoir remplacer leurs classes parentes.
  4. **I**nterface Segregation Principle (ISP) : Préférer plusieurs interfaces spécifiques à une interface générale.
  5. **D**ependency Inversion Principle (DIP) : Dépendre d'abstractions, pas de concretions.
- **Clean Code** : Ensemble de pratiques pour écrire un code **lisible, maintenable et élégant** (ex : noms de variables clairs, fonctions courtes).
- **Refactoring** : Amélioration du code **sans changer son comportement** (ex : renommage, extraction de méthodes).
- **Technical Debt** : Coût futur dû à des **compromis techniques** (ex : code non optimisé, absence de tests).
- **Scalability** : Capacité d'une application à **s'adapter à une charge croissante** (horizontalement ou verticalement).
- **High Availability** : Capacité d'une application à rester **disponible** malgré les pannes (ex : 99.99% de uptime).
- **Fault Tolerance** : Capacité à **continuer de fonctionner** en cas de panne.
- **12-Factor App** : Méthodologie pour construire des applications **SaaS scalables** (ex : configuration via variables d'environnement).

---

## 🤖 **Data & IA**

- **Big Data** : Ensemble de données **trop volumineuses ou complexes** pour être traitées par des outils traditionnels.
- **Data Science** : Discipline utilisant des **méthodes scientifiques** pour extraire des insights à partir de données.
- **Machine Learning (ML)** : Sous-ensemble de l'IA où les modèles **apprennent à partir de données** (supervisé, non supervisé, renforcement).
- **Deep Learning** : Type de ML utilisant des **réseaux de neurones profonds** (ex : CNN, RNN).
- **NLP (Natural Language Processing)** : Traitement du **langage naturel** par les machines (ex : chatbots, traduction automatique).
- **LLM (Large Language Model)** : Modèle d'IA entraîné sur de **grandes quantités de texte** pour générer du langage (ex : Mistral, GPT).
- **RAG (Retrieval-Augmented Generation)** : Technique combinant **recherche d'informations** et **génération de texte** par IA pour améliorer la précision.
- **Fine-Tuning** : Processus d'**adaptation d'un modèle pré-entraîné** à une tâche spécifique.
- **Prompt Engineering** : Art de **formuler des requêtes** pour obtenir de meilleures réponses d'une IA.
- **Embeddings** : Représentation **vectorielle** de données (ex : texte, images) pour les rendre exploitables par des algorithmes.
- **Token** : Unité de base pour le traitement du texte par les LLMs (ex : un mot ou une partie de mot).
- **Hallucination** : Phénomène où un LLM **invente des informations** non présentes dans ses données d'entraînement.

---

## 🔧 **Outils & Environnement**

### **Versioning & Collaboration**

- **Git** : Système de **contrôle de version** décentralisé pour gérer le code source.
  - **Repository (Repo)** : Dépôt contenant le code et son historique.
  - **Commit** : Sauvegarde d'un **état du code** avec un message descriptif.
  - **Branch** : Version parallèle du code pour développer une fonctionnalité (ex : `feature/login`).
  - **Merge** : Fusion de deux branches (ex : `feature/login` → `main`).
  - **Pull Request (PR)** : Proposition de modification avec **revue de code** avant fusion.
  - **Code Review** : Processus où d'autres développeurs **vérifient et commentent** le code avant fusion.
  - **Rebase** : Réécriture de l'historique d'une branche pour l'intégrer proprement à une autre.
  - **Cherry-Pick** : Application d'un commit spécifique d'une branche à une autre.
  - **Stash** : Sauvegarde temporaire des modifications non commitées.
  - **Fork** : Copie d'un dépôt dans son propre compte (utilisé pour contribuer à des projets open source).
- **GitHub/GitLab/Bitbucket** : Plateformes d'hébergement de dépôts Git avec des fonctionnalités collaboratives (PR, CI/CD, issues).

### **Éditeurs & IDE**

- **IDE (Integrated Development Environment)** : Logiciel complet pour le développement (ex : VS Code, IntelliJ, PyCharm).
- **Linter** : Outil pour **détecter les erreurs de style** dans le code (ex : ESLint pour JS, Pylint pour Python).
- **Formatter** : Outil pour **formater automatiquement** le code (ex : Prettier, Black).
- **Debugger** : Outil pour **identifier et corriger les bugs** (ex : Chrome DevTools, VS Code Debugger).

### **Package Managers**

- **npm/yarn/pnpm** : Gestionnaires de paquets pour **JavaScript** (installation de librairies).
- **pip** : Gestionnaire de paquets pour **Python**.
- **Composer** : Gestionnaire de paquets pour **PHP**.
- **Bundler** : Gestionnaire de paquets pour **Ruby**.
- **Maven/Gradle** : Gestionnaires de paquets pour **Java**.

### **Build Tools**

- **Webpack** : Module bundler pour **JavaScript** (regroupe les fichiers en un seul).
- **Vite** : Outil de build **ultra-rapide** pour les applications frontend modernes.
- **Babel** : Compilateur pour transformer du **JavaScript moderne (ES6+)** en code compatible avec les anciens navigateurs.
- **TypeScript** : Sur-ensemble typé de JavaScript, compilé en JS.

### **Testing Tools**

- **Jest** : Framework de test pour **JavaScript** (unitaires, snapshots).
- **Mocha/Chai** : Frameworks de test pour **JavaScript** (flexibles et modulaires).
- **Cypress** : Outil pour les **tests E2E** (exécute les tests dans un vrai navigateur).
- **Selenium** : Outil pour les **tests automatisés** (multi-langages, multi-navigateurs).
- **PyTest** : Framework de test pour **Python**.

### **Monitoring & Logging**

- **Logging** : Enregistrement des **événements** de l'application (ex : erreurs, requêtes). Outils : Winston (JS), Logstash.
- **Monitoring** : Surveillance des **performances et de la santé** de l'application. Outils : Prometheus, Grafana, New Relic.
- **APM (Application Performance Monitoring)** : Surveillance des **performances applicatives** (ex : temps de réponse, taux d'erreur).

### **DevOps & Cloud**

- **Docker** : Outil pour créer et gérer des **conteneurs** (environnements isolés).
- **Kubernetes (K8s)** : Système d'**orchestration de conteneurs** (déploiement, scaling, gestion).
- **Terraform** : Outil pour **provisionner et gérer l'infrastructure** (Infrastructure as Code).
- **Ansible** : Outil de **gestion de configuration** et de déploiement.
- **Jenkins** : Outil d'**automatisation CI/CD** (open source).
- **AWS/Google Cloud/Azure** : Plateformes de **cloud computing**.

---

## 📚 **Ressources pour aller plus loin**

### **Livres**

- *Clean Code* – Robert C. Martin
- *The Pragmatic Programmer* – Andrew Hunt, David Thomas
- *Design Patterns: Elements of Reusable Object-Oriented Software* – Gang of Four (GoF)
- *You Don't Know JS* – Kyle Simpson (série de livres sur JavaScript)

### **Sites & Blogs**

- [MDN Web Docs](https://developer.mozilla.org/) (Référence pour le web)
- [Dev.to](https://dev.to/) (Communauté de développeurs)
- [Stack Overflow](https://stackoverflow.com/) (Q&A technique)
- [CSS-Tricks](https://css-tricks.com/) (Ressources CSS)
- [JavaScript Weekly](https://javascriptweekly.com/) (Newsletter JS)

### **Podcasts**

- *Syntax* (Wes Bos & Scott Tolinski)
- *The Changelog*
- *Software Engineering Daily*

### **Chaînes YouTube**

- [Traversy Media](https://www.youtube.com/c/TraversyMedia)
- [Fireship](https://www.youtube.com/c/Fireship)
- [The Net Ninja](https://www.youtube.com/c/TheNetNinja)

---

## 💡 **Conseils pour les entretiens**

1. **Maîtrisez les bases** : HTML/CSS/JS, algorithmes, structures de données.
2. **Pratiquez le code** : Plateformes comme [LeetCode](https://leetcode.com/), [Codewars](https://www.codewars.com/), [Frontend Mentor](https://www.frontendmentor.io/).
3. **Comprenez les concepts** : Ne vous contentez pas d'apprendre par cœur, **expliquez avec vos mots**.
4. **Préparez des projets** : Ayez un **portfolio** avec des projets concrets (GitHub, site web).
5. **Soyez à l'aise avec les outils** : Git, terminal, IDE, debugging.
6. **Travaillez en équipe** : Montrez que vous savez **collaborer** (code review, pair programming).
7. **Posez des questions** : En entretien, posez des questions sur **l'équipe, les techs, les processus**.
8. **Soft Skills** : Communication, résolution de problèmes, adaptabilité.

---

> *Ce glossaire est évolutif : n'hésitez pas à l'enrichir avec de nouveaux termes et définitions !*
