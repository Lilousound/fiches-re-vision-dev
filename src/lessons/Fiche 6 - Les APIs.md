# **📌 Fiche Révision : Les APIs**

*Tout ce que tu dois savoir sur les APIs pour un entretien technique : définitions, REST, GraphQL, bonnes pratiques, exemples, et questions fréquentes.*

---

---

## **🔹 1. Introduction aux APIs**

---

### **📌 Qu’est-ce qu’une API ?**

- **Définition** : *Application Programming Interface* (Interface de Programmation d’Application).
- **Rôle** : Permet à **deux systèmes logiciels de communiquer** entre eux.
- **Analogie** :
  - Une API est comme un **serveur dans un restaurant** :
    - **Toi (client)** : Tu commandes un plat (envoies une requête).
    - **Le serveur (API)** : Transmet ta commande à la cuisine (backend) et te ramène la réponse (le plat).
    - **La cuisine (backend)** : Prépare la réponse (traite les données).
- **Exemple concret** :
  - Quand tu utilises une application météo, elle **appelle l’API d’un service météo** (ex : OpenWeatherMap) pour récupérer les données et les afficher.

---

### **📌 Pourquoi les APIs sont-elles importantes ?**

1. **Modularité** : Permet de **séparer le front-end et le back-end**.
2. **Réutilisabilité** : Une même API peut être utilisée par **plusieurs applications** (web, mobile, etc.).
3. **Abstraction** : Masque la complexité du backend (tu n’as pas besoin de savoir comment ça fonctionne, juste comment l’utiliser).
4. **Collaboration** : Permet à des équipes différentes de travailler **indépendamment** (ex : une équipe front-end et une équipe back-end).
5. **Écosystème** : Accès à des **services externes** (paiement, cartes, réseaux sociaux, etc.).

---

### **📌 Où trouve-t-on des APIs ?**


| **Type de Service**      | **Exemples d’APIs**                      | **Lien**                                                    |
| ------------------------ | ---------------------------------------- | ----------------------------------------------------------- |
| **Réseaux sociaux**      | Facebook API, Twitter API, Instagram API | [Facebook for Developers](https://developers.facebook.com/) |
| **Paiements**            | Stripe API, PayPal API                   | [Stripe API](https://stripe.com/docs/api)                   |
| **Cartes**               | Google Maps API, Mapbox API              | [Google Maps API](https://developers.google.com/maps)       |
| **Météo**                | OpenWeatherMap API, WeatherAPI           | [OpenWeatherMap](https://openweathermap.org/api)            |
| **Stockage de fichiers** | AWS S3 API, Firebase Storage API         | [AWS S3](https://aws.amazon.com/s3/)                        |
| **Authentification**     | OAuth (Google, GitHub), Firebase Auth    | [OAuth](https://oauth.net/)                                 |
| **Données ouvertes**     | API du Gouvernement Français, NASA API   | [data.gouv.fr](https://www.data.gouv.fr/)                   |


---

---

## **🔹 2. Types d’APIs**

---

### **📌 Classification par Protocole**


| **Type**           | **Description**                                                                 | **Exemple**                   |
| ------------------ | ------------------------------------------------------------------------------- | ----------------------------- |
| **API Web (HTTP)** | Utilise le protocole **HTTP/HTTPS**.                                            | REST, GraphQL, SOAP           |
| **API Socket**     | Communication en **temps réel** via WebSocket.                                  | Chat en direct, jeux en ligne |
| **API RPC**        | *Remote Procedure Call* : Appel de fonctions à distance.                        | gRPC, JSON-RPC                |
| **API GraphQL**    | Requêtes **flexibles** pour récupérer exactement les données dont tu as besoin. | GraphQL (Facebook)            |
| **API REST**       | *Representational State Transfer* : Standard pour les APIs web.                 | Twitter API, GitHub API       |


---

### **📌 Classification par Visibilité**


| **Type**           | **Description**                                        | **Exemple**                 |
| ------------------ | ------------------------------------------------------ | --------------------------- |
| **API Publique**   | Accessible à **tout le monde** (avec ou sans clé API). | Twitter API, OpenWeatherMap |
| **API Partenaire** | Accessible uniquement aux **partenaires commerciaux**. | API de paiement (Stripe)    |
| **API Privée**     | **Interne** à une organisation.                        | API entre microservices     |


---

---

## **🔹 3. API REST (Representational State Transfer)**

---

### **📌 Qu’est-ce que REST ?**

- **Définition** : Un **style d’architecture** pour concevoir des APIs web, basé sur :
  - **Ressources** (ex : `/utilisateurs`, `/articles`).
  - **Verbes HTTP** (GET, POST, PUT, DELETE).
  - **Représentations** (JSON, XML).
  - **Stateless** (chaque requête est indépendante).
- **Créateur** : Roy Fielding (2000).
- **Standard** : Pas de standard officiel, mais des **bonnes pratiques** largement adoptées.

---

### **📌 Principes de REST (6 Contraintes)**

1. **Client-Serveur** :
  - Séparation claire entre le **client** (front-end) et le **serveur** (back-end).
2. **Stateless** :
  - Chaque requête contient **toutes les informations nécessaires** (pas de session stockée côté serveur).
3. **Cacheable** :
  - Les réponses peuvent être **mises en cache** pour améliorer les performances.
4. **Interface uniforme** :
  - **4 règles** pour une interface cohérente :
    - **Identification des ressources** : Chaque ressource a un **URI unique** (ex : `/utilisateurs/1`).
    - **Manipulation des ressources via des représentations** : Le client manipule des **représentations** (JSON, XML) des ressources.
    - **Messages auto-descriptifs** : Chaque requête contient assez d’informations pour être traitée (ex : headers `Content-Type`).
    - **Hypermedia as the Engine of Application State (HATEOAS)** : Les réponses incluent des **liens vers d’autres ressources** (ex : `{ "_links": { "self": { "href": "/utilisateurs/1" } } }`).
5. **Système en couches** :
  - L’API peut être composée de **plusieurs couches** (ex : load balancer, cache, serveur d’application).
6. **Code on Demand (optionnel)** :
  - Le serveur peut envoyer du **code exécutable** (ex : JavaScript) pour étendre les fonctionnalités du client.

---

### **📌 Ressources et URIs**

- **Ressource** : Un **objet** ou une **entité** (ex : un utilisateur, un article, une image).
- **URI** (*Uniform Resource Identifier*) : **Adresse unique** pour identifier une ressource.
  - Exemples :
    - `/utilisateurs` → Liste de tous les utilisateurs.
    - `/utilisateurs/1` → Utilisateur avec l’ID 1.
    - `/utilisateurs/1/articles` → Articles de l’utilisateur 1.
- **Bonnes pratiques pour les URIs** :
  - Utiliser des **noms au pluriel** pour les collections (`/utilisateurs`).
  - Utiliser des **verbes HTTP** (pas dans l’URI) :
    - ❌ `/getUtilisateurs` (mauvais).
    - ✅ `/utilisateurs` + `GET` (bon).
  - Éviter les **verbes dans les URIs** :
    - ❌ `/utilisateurs/creer` (mauvais).
    - ✅ `/utilisateurs` + `POST` (bon).
  - Utiliser des **noms clairs et descriptifs** :
    - ❌ `/u` (trop vague).
    - ✅ `/utilisateurs` (clair).
  - Utiliser des **tirets** (`-`) ou des **underscores** (`_`) pour les noms composés :
    - `/utilisateurs-actifs` ou `/utilisateurs_actifs`.

---

### **📌 Verbes HTTP (Méthodes)**


| **Verbe**   | **Description**                                           | **Idempotent** | **Sécurisé** | **Exemple**              |
| ----------- | --------------------------------------------------------- | -------------- | ------------ | ------------------------ |
| **GET**     | **Récupérer** une ressource.                              | ✅ Oui          | ✅ Oui        | `GET /utilisateurs/1`    |
| **POST**    | **Créer** une nouvelle ressource.                         | ❌ Non          | ❌ Non        | `POST /utilisateurs`     |
| **PUT**     | **Remplacer** une ressource existante.                    | ✅ Oui          | ❌ Non        | `PUT /utilisateurs/1`    |
| **PATCH**   | **Mettre à jour partiellement** une ressource.            | ❌ Non          | ❌ Non        | `PATCH /utilisateurs/1`  |
| **DELETE**  | **Supprimer** une ressource.                              | ✅ Oui          | ❌ Non        | `DELETE /utilisateurs/1` |
| **HEAD**    | Comme `GET`, mais **sans le corps**.                      | ✅ Oui          | ✅ Oui        | `HEAD /utilisateurs/1`   |
| **OPTIONS** | Récupérer les **méthodes autorisées** pour une ressource. | ✅ Oui          | ✅ Oui        | `OPTIONS /utilisateurs`  |


**Définitions** :

- **Idempotent** : Une requête identique produit **toujours le même résultat** (ex : `GET /utilisateurs/1` retourne toujours les mêmes données).
- **Sécurisé** : La requête **ne modifie pas** l’état du serveur (ex : `GET`, `HEAD`, `OPTIONS`).

---

### **📌 Codes de Statut HTTP (Les plus courants)**


| **Code** | **Classe**           | **Description**                                                    | **Exemple**                                                  |
| -------- | -------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------ |
| 200      | 2xx (Succès)         | **OK** : La requête a réussi.                                      | `GET /utilisateurs/1`                                        |
| 201      | 2xx                  | **Created** : Ressource créée.                                     | `POST /utilisateurs`                                         |
| 204      | 2xx                  | **No Content** : Succès, mais pas de contenu.                      | `DELETE /utilisateurs/1`                                     |
| 301      | 3xx (Redirection)    | **Moved Permanently** : Ressource déplacée.                        | Redirection vers une nouvelle URL.                           |
| 304      | 3xx                  | **Not Modified** : La ressource n’a pas changé (cache).            | Requête conditionnelle (`If-Modified-Since`).                |
| 400      | 4xx (Erreur client)  | **Bad Request** : Requête mal formée.                              | Données manquantes ou invalides.                             |
| 401      | 4xx                  | **Unauthorized** : **Non autorisé** (authentification manquante).  | Accès à une ressource protégée sans token.                   |
| 403      | 4xx                  | **Forbidden** : **Accès interdit** (même avec authentification).   | Pas les droits nécessaires.                                  |
| 404      | 4xx                  | **Not Found** : Ressource introuvable.                             | `GET /utilisateurs/999` (ID inexistant).                     |
| 405      | 4xx                  | **Method Not Allowed** : Méthode HTTP non autorisée.               | `POST /utilisateurs/1` (seul `PUT` ou `PATCH` est autorisé). |
| 422      | 4xx                  | **Unprocessable Entity** : Données valides mais **inutilisables**. | Erreur de validation (ex : email invalide).                  |
| 429      | 4xx                  | **Too Many Requests** : Trop de requêtes.                          | Limite de rate dépassée.                                     |
| 500      | 5xx (Erreur serveur) | **Internal Server Error** : Erreur côté serveur.                   | Bug dans le backend.                                         |
| 503      | 5xx                  | **Service Unavailable** : Service temporairement indisponible.     | Serveur en maintenance.                                      |


---

### **📌 Format des Réponses (JSON)**

- **Standard** : Les APIs REST utilisent généralement le **format JSON** pour les requêtes et réponses.
- **Exemple de réponse** :
  ```json
  {
    "id": 1,
    "nom": "Robert",
    "email": "robert@example.com",
    "actif": true,
    "createdAt": "2026-05-13T10:00:00Z",
    "updatedAt": "2026-05-13T10:00:00Z",
    "_links": {
      "self": { "href": "/utilisateurs/1" },
      "articles": { "href": "/utilisateurs/1/articles" }
    }
  }
  ```
- **Bonnes pratiques** :
  - Utiliser des **noms de propriétés clairs** (ex : `createdAt` au lieu de `dateCreation`).
  - **Imbriquer les ressources** pour éviter la redondance :
    ```json
    {
      "id": 1,
      "nom": "Robert",
      "articles": [
        { "id": 1, "titre": "Mon premier article" },
        { "id": 2, "titre": "Mon deuxième article" }
      ]
    }
    ```
  - **Pagination** : Pour les listes, inclure des métadonnées :
    ```json
    {
      "data": [
        { "id": 1, "nom": "Robert" },
        { "id": 2, "nom": "Jean" }
      ],
      "meta": {
        "total": 100,
        "page": 1,
        "perPage": 10,
        "totalPages": 10
      }
    }
    ```

---

### **📌 Headers HTTP Importants**


| **Header**              | **Description**                                          | **Exemple**                     |
| ----------------------- | -------------------------------------------------------- | ------------------------------- |
| `Content-Type`          | Type de contenu de la requête/réponse.                   | `application/json`              |
| `Authorization`         | **Token d’authentification** (Bearer, Basic Auth).       | `Bearer abc123...`              |
| `Accept`                | Types de contenu acceptés par le client.                 | `application/json`              |
| `Cache-Control`         | Contrôle du cache.                                       | `no-cache`, `max-age=3600`      |
| `ETag`                  | **Identifiant unique** pour une version de la ressource. | `"abc123"`                      |
| `If-Modified-Since`     | Date de la dernière modification connue.                 | `Wed, 13 May 2026 10:00:00 GMT` |
| `X-RateLimit-Limit`     | Nombre maximal de requêtes autorisées.                   | `100`                           |
| `X-RateLimit-Remaining` | Nombre de requêtes restantes.                            | `95`                            |
| `X-RateLimit-Reset`     | Timestamp de réinitialisation du compteur.               | `1715606400` (Unix timestamp)   |


---

### **📌 Exemple Complet d’une API REST**

**Ressource** : `/utilisateurs`


| **Requête**                  | **Méthode** | **URI**           | **Corps (Body)**                                          | **Réponse (200/201)**                   | **Code d’Erreur** |
| ---------------------------- | ----------- | ----------------- | --------------------------------------------------------- | --------------------------------------- | ----------------- |
| Lister tous les utilisateurs | `GET`       | `/utilisateurs`   | -                                                         | `[{ "id": 1, "nom": "Robert" }, ...]`  | 401, 403          |
| Créer un utilisateur         | `POST`      | `/utilisateurs`   | `{ "nom": "Jean", "email": "jean@example.com" }`          | `{ "id": 2, "nom": "Jean", ... }` (201) | 400, 422          |
| Récupérer un utilisateur     | `GET`       | `/utilisateurs/1` | -                                                         | `{ "id": 1, "nom": "Robert", ... }`    | 404               |
| Mettre à jour un utilisateur | `PUT`       | `/utilisateurs/1` | `{ "nom": "Robert R.", "email": "robert@example.com" }` | `{ "id": 1, "nom": "Robert R.", ... }` | 400, 404, 422     |
| Mettre à jour partiellement  | `PATCH`     | `/utilisateurs/1` | `{ "nom": "Robert R." }`                                 | `{ "id": 1, "nom": "Robert R.", ... }` | 400, 404, 422     |
| Supprimer un utilisateur     | `DELETE`    | `/utilisateurs/1` | -                                                         | - (204 No Content)                      | 404               |


---

---

## **🔹 4. GraphQL (Alternative à REST)**

---

### **📌 Qu’est-ce que GraphQL ?**

- **Définition** : Un **langage de requête** pour les APIs, développé par **Facebook** (2015).
- **Différence avec REST** :
  - **REST** : Tu récupères **toutes les données** d’un endpoint (ex : `/utilisateurs/1` retourne toutes les infos de l’utilisateur).
  - **GraphQL** : Tu **choisis exactement** les données que tu veux (ex : seulement le `nom` et l’`email` de l’utilisateur).
- **Avantages** :
  1. **Pas de sur-récupération** (*over-fetching*) : Tu ne récupères que ce dont tu as besoin.
  2. **Pas de sous-récupération** (*under-fetching*) : Une seule requête pour plusieurs ressources.
  3. **Typage fort** : Schéma bien défini (tu sais toujours quelles données tu peux demander).
  4. **Évolution facile** : Ajouter de nouveaux champs sans casser les clients existants.
- **Inconvénients** :
  1. **Complexité** : Plus difficile à mettre en place que REST.
  2. **Cache** : Plus complexe à gérer (mais des solutions existent, comme Apollo).
  3. **Performances** : Peut être lent si mal optimisé (requêtes trop complexes).

---

### **📌 Structure d’une Requête GraphQL**

- **Syntaxe** :
  ```graphql
  query {
    utilisateur(id: 1) {
      nom
      email
      articles {
        titre
        datePublication
      }
    }
  }
  ```
  - `**query**` : Type de requête (lecture).
  - `**utilisateur(id: 1)**` : Requête pour l’utilisateur avec l’ID 1.
  - `**nom`, `email`, `articles**` : Champs demandés.
- **Réponse** :
  ```json
  {
    "data": {
      "utilisateur": {
        "nom": "Robert",
        "email": "Robert@example.com",
        "articles": [
          { "titre": "Mon premier article", "datePublication": "2026-05-13" },
          { "titre": "Mon deuxième article", "datePublication": "2026-05-14" }
        ]
      }
    }
  }
  ```

---

### **📌 Mutations (Écrire des données)**

- **Syntaxe** :
  ```graphql
  mutation {
    creerUtilisateur(nom: "Jean", email: "jean@example.com") {
      id
      nom
    }
  }
  ```
- **Réponse** :
  ```json
  {
    "data": {
      "creerUtilisateur": {
        "id": 2,
        "nom": "Jean"
      }
    }
  }
  ```

---

### **📌 Schéma GraphQL**

- **Définition** : Description **typée** de toutes les données disponibles dans l’API.
- **Exemple** :
  ```graphql
  type Utilisateur {
    id: ID!
    nom: String!
    email: String!
    articles: [Article!]!
  }

  type Article {
    id: ID!
    titre: String!
    contenu: String!
    datePublication: String!
    auteur: Utilisateur!
  }

  type Query {
    utilisateur(id: ID!): Utilisateur
    utilisateurs: [Utilisateur!]!
  }

  type Mutation {
    creerUtilisateur(nom: String!, email: String!): Utilisateur!
    supprimerUtilisateur(id: ID!): Boolean!
  }
  ```
  - `**!**` : Champ **obligatoire**.
  - `**[Type!]!**` : Tableau **non null** de `Type` **non null**.

---

### **📌 Outils pour GraphQL**


| **Outil**         | **Description**                           | **Lien**                                            |
| ----------------- | ----------------------------------------- | --------------------------------------------------- |
| **Apollo Client** | Client GraphQL pour React.                | [apollographql.com](https://www.apollographql.com/) |
| **Relay**         | Client GraphQL pour React (par Facebook). | [relay.dev](https://relay.dev/)                     |
| **GraphiQL**      | IDE pour tester les requêtes GraphQL.     | Inclus avec Apollo Server.                          |
| **Hasura**        | Backend instantané pour GraphQL.          | [hasura.io](https://hasura.io/)                     |
| **Prisma**        | ORM pour générer un schéma GraphQL.       | [prisma.io](https://www.prisma.io/)                 |


---

### **📌 Exemple avec Apollo Client (React)**

1. **Installer Apollo Client** :
  ```bash
   npm install @apollo/client graphql
  ```
2. **Configurer le client** :
  ```typescript
   // src/apolloClient.ts
   import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

   const client = new ApolloClient({
     uri: 'https://ton-api-graphql.com/graphql',
     cache: new InMemoryCache(),
   });

   export default client;
  ```
3. **Utiliser dans un composant React** :
  ```tsx
   import { useQuery, useMutation, gql } from '@apollo/client';
   import client from './apolloClient';

   // Requête GraphQL
   const GET_UTILISATEUR = gql`
     query GetUtilisateur($id: ID!) {
       utilisateur(id: $id) {
         id
         nom
         email
       }
     }
   `;

   // Mutation GraphQL
   const CREER_UTILISATEUR = gql`
     mutation CreerUtilisateur($nom: String!, $email: String!) {
       creerUtilisateur(nom: $nom, email: $email) {
         id
         nom
       }
     }
   `;

   function Utilisateur() {
     const { loading, error, data } = useQuery(GET_UTILISATEUR, {
       variables: { id: 1 },
     });

     const [creerUtilisateur] = useMutation(CREER_UTILISATEUR);

     if (loading) return <p>Chargement...</p>;
     if (error) return <p>Erreur : {error.message}</p>;

     return (
       <div>
         <h1>{data.utilisateur.nom}</h1>
         <p>Email : {data.utilisateur.email}</p>
         <button
           onClick={() => {
             creerUtilisateur({
               variables: { nom: "Jean", email: "jean@example.com" },
             });
           }}
         >
           Créer un utilisateur
         </button>
       </div>
     );
   }

   // Dans main.tsx ou App.tsx
   import { ApolloProvider } from '@apollo/client';
   import client from './apolloClient';

   function App() {
     return (
       <ApolloProvider client={client}>
         <Utilisateur />
       </ApolloProvider>
     );
   }
  ```

---

---

## **🔹 5. Autres Types d’APIs**

---

### **📌 SOAP (Simple Object Access Protocol)**

- **Définition** : Protocole **basé sur XML** pour échanger des messages entre applications.
- **Caractéristiques** :
  - **Standardisé** (WSDL pour décrire les services).
  - **Sécurisé** (WS-Security pour le chiffrement).
  - **Lourd** : Beaucoup de XML, moins performant que REST/GraphQL.
- **Cas d’usage** :
  - **Systèmes bancaires** (où la sécurité est critique).
  - **Intégrations avec des anciens systèmes** (legacy).
- **Exemple de requête SOAP** :
  ```xml
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.example.com/webservice">
     <soapenv:Header/>
     <soapenv:Body>
        <web:GetUtilisateur>
           <web:UtilisateurID>1</web:UtilisateurID>
        </web:GetUtilisateur>
     </soapenv:Body>
  </soapenv:Envelope>
  ```

---

### **📌 gRPC (Google Remote Procedure Call)**

- **Définition** : Protocole **binaire** pour les appels de procédures à distance (RPC).
- **Caractéristiques** :
  - **Rapide** : Utilise **HTTP/2** et la sérialisation **Protocol Buffers** (plus léger que JSON/XML).
  - **Typé** : Définition stricte des services avec `.proto` files.
  - **Bidirectionnel** : Support des **streams** (flux de données en temps réel).
- **Cas d’usage** :
  - **Microservices** (communication interne).
  - **Applications temps réel** (ex : chat, jeux).
- **Exemple de fichier `.proto**` :
  ```proto
  syntax = "proto3";

  service UtilisateurService {
    rpc GetUtilisateur (UtilisateurRequest) returns (UtilisateurResponse);
    rpc CreerUtilisateur (UtilisateurRequest) returns (UtilisateurResponse);
  }

  message UtilisateurRequest {
    int32 id = 1;
  }

  message UtilisateurResponse {
    int32 id = 1;
    string nom = 2;
    string email = 3;
  }
  ```

---

### **📌 WebSocket**

- **Définition** : Protocole pour une **communication bidirectionnelle en temps réel** entre le client et le serveur.
- **Caractéristiques** :
  - **Full-duplex** : Le client et le serveur peuvent envoyer des messages **à tout moment**.
  - **Persistant** : La connexion reste ouverte (contrairement à HTTP).
  - **Faible latence** : Idéal pour les applications temps réel.
- **Cas d’usage** :
  - **Chat en direct** (ex : Slack, Discord).
  - **Jeux en ligne**.
  - **Tableaux de bord en temps réel** (ex : cours de la bourse).
- **Exemple avec JavaScript** :
  ```javascript
  // Client
  const socket = new WebSocket('wss://ton-serveur.com/ws');

  socket.onopen = () => {
    console.log('Connexion établie');
    socket.send(JSON.stringify({ type: 'message', texte: 'Bonjour !' }));
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Message reçu :', data);
  };

  socket.onclose = () => {
    console.log('Connexion fermée');
  };
  ```

---

---

## **🔹 6. Authentification et Sécurité des APIs**

---

### **📌 Méthodes d’Authentification**


| **Méthode**            | **Description**                                           | **Avantages**                     | **Inconvénients**                                  | **Cas d’usage**                  |
| ---------------------- | --------------------------------------------------------- | --------------------------------- | -------------------------------------------------- | -------------------------------- |
| **API Key**            | Clé secrète **dans l’URL ou les headers**.                | Simple à implémenter.             | Peu sécurisé (exposé dans l’URL).                  | APIs publiques (rate limiting).  |
| **Basic Auth**         | `username:password` **encodé en Base64**.                 | Simple.                           | Non sécurisé (Base64 ≠ chiffrement).               | APIs internes (avec HTTPS).      |
| **Bearer Token (JWT)** | Token **JWT** dans le header `Authorization`.             | Stateless, sécurisé (si HTTPS).   | Gestion des tokens (expiration, rafraîchissement). | APIs modernes.                   |
| **OAuth 2.0**          | **Délégation d’accès** (ex : "Se connecter avec Google"). | Sécurisé, standardisé.            | Complexe à implémenter.                            | APIs tierces (Google, Facebook). |
| **OAuth 1.0a**         | Version précédente de OAuth.                              | Sécurisé.                         | Complexe, moins utilisé.                           | Legacy.                          |
| **OpenID Connect**     | **Authentification** basée sur OAuth 2.0.                 | Standard pour l’authentification. | Complexe.                                          | Applications modernes.           |


---

### **📌 JWT (JSON Web Token)**

- **Définition** : Un **token** (jeton) au format JSON, **signé** pour vérifier son intégrité.
- **Structure** :
  ```
  xxxxx.yyyyy.zzzzz
  ```
  - **Header** (`xxxxx`) : Type de token (`JWT`) et algorithme de signature (`HS256`, `RS256`).
  - **Payload** (`yyyyy`) : Données (ex : `userId`, `exp`).
  - **Signature** (`zzzzz`) : Vérifie que le token n’a pas été modifié.
- **Exemple de payload** :
  ```json
  {
    "sub": "1234567890",  // Subject (ID de l'utilisateur)
    "name": "Robert R.",
    "iat": 1516239022,     // Issued At (timestamp de création)
    "exp": 1516242622      // Expiration Time (timestamp d'expiration)
  }
  ```
- **Utilisation** :
  - Le client envoie le JWT dans le header `Authorization` :
    ```http
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkF1cmVsaWUgUi4iLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MTUxNjI0MjYyMn0.SIGNATURE
    ```
- **Génération d’un JWT en Node.js** :
  ```javascript
  const jwt = require('jsonwebtoken');

  const token = jwt.sign(
    { userId: 1, nom: "Robert" }, // Payload
    'TA_CLE_SECRETE',              // Clé secrète (à garder sécurisée !)
    { expiresIn: '1h' }            // Expiration
  );

  console.log(token);
  ```
- **Vérification d’un JWT** :
  ```javascript
  jwt.verify(token, 'TA_CLE_SECRETE', (err, decoded) => {
    if (err) {
      console.error('Token invalide :', err);
    } else {
      console.log('Token valide :', decoded); // { userId: 1, nom: "Robert", iat: ..., exp: ... }
    }
  });
  ```

---

### **📌 Bonnes Pratiques de Sécurité**

1. **Toujours utiliser HTTPS** :
  - ❌ **Jamais** envoyer des données sensibles (tokens, mots de passe) en **HTTP**.
  - ✅ **Toujours** utiliser **HTTPS** pour chiffrer les communications.
2. **Ne pas exposer les clés secrètes** :
  - ❌ **Jamais** stocker une clé secrète dans le code front-end (ex : dans un fichier JavaScript).
  - ✅ Utiliser des **variables d’environnement** (`.env`) côté serveur.
3. **Limiter les permissions** :
  - Donner **le minimum de permissions** nécessaires (principe du *least privilege*).
  - Exemple : Un token pour lire des données ne doit pas permettre de les supprimer.
4. **Utiliser des tokens à courte durée de vie** :
  - Définir une **expiration courte** (ex : 15 min pour les tokens JWT).
  - Utiliser des **tokens de rafraîchissement** (*refresh tokens*) pour obtenir de nouveaux tokens.
5. **Valider et nettoyer les entrées** :
  - **Toujours valider** les données reçues (ex : vérifier qu’un `userId` est bien un nombre).
  - **Nettoyer les entrées** pour éviter les injections (SQL, XSS, etc.).
6. **Protéger contre les attaques courantes** :
  - **CSRF** (*Cross-Site Request Forgery*) : Utiliser des tokens CSRF ou des headers comme `SameSite` pour les cookies.
  - **XSS** (*Cross-Site Scripting*) : Échapper les données avant de les afficher (ex : avec `DOMPurify`).
  - **SQL Injection** : Utiliser des **requêtes paramétrées** (ex : avec `pg` pour PostgreSQL).
  - **DDoS** : Limiter le nombre de requêtes (rate limiting).
7. **Utiliser CORS correctement** :
  - **CORS** (*Cross-Origin Resource Sharing*) : Définir quels domaines peuvent accéder à ton API.
  - Exemple avec Express :
    ```javascript
    const cors = require('cors');
    app.use(cors({
      origin: ['https://ton-site.com', 'https://ton-autre-site.com'],
    }));
    ```
8. **Logger et surveiller les activités** :
  - **Logger les requêtes** (sans les données sensibles) pour détecter les comportements suspects.
  - Utiliser des outils comme **Sentry** ou **Datadog** pour surveiller les erreurs.

---

---

## **🔹 7. Bonnes Pratiques pour Concevoir une API**

---

### **📌 Design de l’API**

1. **Nommage des endpoints** :
  - Utiliser des **noms clairs et descriptifs** :
    - ❌ `/getU` (trop vague).
    - ✅ `/utilisateurs` (clair).
  - Utiliser des **noms au pluriel** pour les collections :
    - ✅ `/utilisateurs` (liste de tous les utilisateurs).
    - ❌ `/utilisateur` (singulier pour une collection).
2. **Versionnement** :
  - **Pourquoi ?** : Permet de faire évoluer l’API sans casser les clients existants.
  - **Comment ?** :
    - Dans l’URL : `/v1/utilisateurs`.
    - Dans les headers : `Accept: application/vnd.monapi.v1+json`.
3. **Pagination** :
  - Pour les listes, utiliser `limit` et `offset` (ou `page` et `perPage`) :
  - Réponse :
    ```json
    {
      "data": [...],
      "meta": {
        "total": 100,
        "limit": 10,
        "offset": 20,
        "next": "/utilisateurs?limit=10&offset=30",
        "previous": "/utilisateurs?limit=10&offset=10"
      }
    }
    ```
4. **Filtrage, Tri et Recherche** :
  - **Filtrage** : `GET /utilisateurs?actif=true`
  - **Tri** : `GET /utilisateurs?sort=-nom` (le `-` indique un tri décroissant).
  - **Recherche** : `GET /utilisateurs?q=Robert` (recherche dans tous les champs).
5. **Inclure des métadonnées** :
  - **Timestamp** : Date de la requête/réponse.
  - **Version de l’API** : Pour le débogage.
  - **Liens utiles** : Pour la navigation (HATEOAS).

---

### **📌 Documentation**

1. **Utiliser un outil de documentation** :
  - **Swagger/OpenAPI** : Standard pour documenter les APIs REST.
    - Exemple : [Swagger UI](https://swagger.io/tools/swagger-ui/).
  - **Redoc** : Alternative à Swagger pour une documentation plus lisible.
    - Exemple : [Redoc](https://redocly.github.io/redoc/).
  - **GraphQL** : Utiliser **GraphiQL** ou **Apollo Studio** pour explorer le schéma.
2. **Exemple de documentation Swagger (OpenAPI)** :
  ```yaml
   openapi: 3.0.0
   info:
     title: API de Gestion des Utilisateurs
     description: API pour gérer les utilisateurs et leurs articles.
     version: 1.0.0
   servers:
     - url: https://api.mon-site.com/v1
   paths:
     /utilisateurs:
       get:
         summary: Liste tous les utilisateurs
         responses:
           200:
             description: Liste des utilisateurs
             content:
               application/json:
                 schema:
                   type: array
                   items:
                     $ref: '#/components/schemas/Utilisateur'
       post:
         summary: Crée un nouvel utilisateur
         requestBody:
           required: true
           content:
             application/json:
               schema:
                 $ref: '#/components/schemas/Utilisateur'
         responses:
           201:
             description: Utilisateur créé
     /utilisateurs/{id}:
       get:
         summary: Récupère un utilisateur par ID
         parameters:
           - in: path
             name: id
             required: true
             schema:
               type: integer
         responses:
           200:
             description: Utilisateur trouvé
             content:
               application/json:
                 schema:
                   $ref: '#/components/schemas/Utilisateur'
   components:
     schemas:
       Utilisateur:
         type: object
         properties:
           id:
             type: integer
           nom:
             type: string
           email:
             type: string
             format: email
  ```
3. **Outils pour générer la documentation** :
  - **Swagger Codegen** : Génère du code et de la documentation à partir d’un fichier OpenAPI.
  - **Postman** : Outil pour tester et documenter les APIs.
    - [Postman](https://www.postman.com/).

---

### **📌 Tests**

1. **Tests unitaires** :
  - Tester les **fonctions individuelles** de ton API (ex : validation des données).
2. **Tests d’intégration** :
  - Tester les **interactions entre plusieurs composants** (ex : une route + un contrôleur + une base de données).
3. **Tests E2E (End-to-End)** :
  - Tester le **comportement global** de l’API (ex : créer un utilisateur, le récupérer, le supprimer).
4. **Outils de test** :
  - **Jest** + **Supertest** (Node.js).
  - **Postman/Newman** : Tests automatisés pour les APIs.
  - **Cypress** : Tests E2E pour les applications full-stack.

---

### **📌 Monitoring et Analytics**

1. **Logger les requêtes** :
  - Utiliser des librairies comme **Winston** (Node.js) ou **Log4j** (Java).
2. **Surveiller les performances** :
  - **Temps de réponse** : Identifier les endpoints lents.
  - **Taux d’erreur** : Détecter les problèmes récurrents.
3. **Outils de monitoring** :
  - **Prometheus** + **Grafana** : Surveillance des métriques.
  - **Sentry** : Détection des erreurs.
  - **Datadog** : Monitoring complet (logs, métriques, traces).

---

---

## **🔹 8. Exemples Concrets d’Utilisation d’APIs**

---

### **📌 Exemple 1 : Appel à une API REST avec `fetch` (JavaScript)**

```javascript
// Requête GET
fetch('https://api.example.com/utilisateurs/1')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Erreur :', error));

// Requête POST
fetch('https://api.example.com/utilisateurs', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer TON_TOKEN',
  },
  body: JSON.stringify({
    nom: 'Robert',
    email: 'robert@example.com',
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erreur :', error));
```

---

### **📌 Exemple 2 : Appel à une API REST avec `axios` (Recommandé)**

```javascript
import axios from 'axios';

// Configuration de base
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'Bearer TON_TOKEN';

// Requête GET
axios.get('/utilisateurs/1')
  .then(response => console.log(response.data))
  .catch(error => console.error('Erreur :', error));

// Requête POST
axios.post('/utilisateurs', {
  nom: 'Robert',
  email: 'robert@example.com',
})
  .then(response => console.log(response.data))
  .catch(error => console.error('Erreur :', error));

// Requête avec paramètres d'URL
axios.get('/utilisateurs', {
  params: {
    page: 1,
    limit: 10,
  },
})
  .then(response => console.log(response.data))
  .catch(error => console.error('Erreur :', error));
```

---

### **📌 Exemple 3 : Appel à une API GraphQL avec Apollo Client (React)**

*(Déjà couvert dans la section GraphQL, mais voici un rappel)*

```tsx
import { useQuery, gql } from '@apollo/client';

const GET_UTILISATEURS = gql`
  query GetUtilisateurs {
    utilisateurs {
      id
      nom
      email
    }
  }
`;

function ListeUtilisateurs() {
  const { loading, error, data } = useQuery(GET_UTILISATEURS);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <ul>
      {data.utilisateurs.map(utilisateur => (
        <li key={utilisateur.id}>
          {utilisateur.nom} ({utilisateur.email})
        </li>
      ))}
    </ul>
  );
}
```

---

### **📌 Exemple 4 : Utilisation d’une API de Paiement (Stripe)**

```javascript
import stripe from 'stripe'('TA_CLE_SECRETE_STRIPE');

async function creerPaiement(amount, currency, description) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe utilise des centimes
      currency,
      description,
    });
    return paymentIntent.client_secret; // À envoyer au client pour confirmer le paiement
  } catch (error) {
    console.error('Erreur Stripe :', error);
    throw error;
  }
}

// Exemple d'utilisation
creerPaiement(100, 'eur', 'Paiement pour le produit X')
  .then(clientSecret => {
    console.log('Client Secret :', clientSecret);
    // Envoyer clientSecret au front-end pour confirmer le paiement
  });
```

---

### **📌 Exemple 5 : Utilisation d’une API de Géolocalisation (Google Maps)**

```javascript
async function getCoordinates(address) {
  const API_KEY = 'TA_CLE_API_GOOGLE';
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      return { latitude: lat, longitude: lng };
    } else {
      throw new Error('Adresse non trouvée');
    }
  } catch (error) {
    console.error('Erreur :', error);
    throw error;
  }
}

// Exemple d'utilisation
getCoordinates('1600 Amphitheatre Parkway, Mountain View, CA')
  .then(coords => console.log('Coordonnées :', coords))
  .catch(error => console.error('Erreur :', error));
```

---

---

## **🔹 9. Outils pour Travailler avec des APIs**

---

### **📌 Outils de Test et Débogage**


| **Outil**          | **Description**                                                                  | **Lien**                                                                         |
| ------------------ | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Postman**        | Outil complet pour tester les APIs (requêtes, documentation, tests automatisés). | [postman.com](https://www.postman.com/)                                          |
| **Insomnia**       | Alternative à Postman (plus léger).                                              | [insomnia.rest](https://insomnia.rest/)                                          |
| **Thunder Client** | Extension VS Code pour tester les APIs.                                          | [Thunder Client](https://www.thunderclient.com/)                                 |
| **cURL**           | Outil en ligne de commande pour les requêtes HTTP.                               | Inclus avec macOS/Linux, [téléchargement pour Windows](https://curl.se/windows/) |
| **Httpie**         | Alternative à cURL (plus lisible).                                               | [httpie.io](https://httpie.io/)                                                  |
| **Swagger UI**     | Visualiseur de documentation OpenAPI.                                            | [swagger.io](https://swagger.io/tools/swagger-ui/)                               |
| **GraphiQL**       | IDE pour tester les APIs GraphQL.                                                | Inclus avec Apollo Server.                                                       |


---

### **📌 Outils de Monitoring**


| **Outil**      | **Description**                                | **Lien**                                    |
| -------------- | ---------------------------------------------- | ------------------------------------------- |
| **Sentry**     | Détection et suivi des erreurs.                | [sentry.io](https://sentry.io/)             |
| **Datadog**    | Monitoring complet (logs, métriques, traces).  | [datadoghq.com](https://www.datadoghq.com/) |
| **Prometheus** | Collecte et stocke des métriques.              | [prometheus.io](https://prometheus.io/)     |
| **Grafana**    | Visualisation des métriques (avec Prometheus). | [grafana.com](https://grafana.com/)         |


---

### **📌 Outils de Documentation**


| **Outil**           | **Description**                                              | **Lien**                                                    |
| ------------------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| **Swagger/OpenAPI** | Standard pour documenter les APIs REST.                      | [swagger.io](https://swagger.io/)                           |
| **Redoc**           | Alternative à Swagger pour une documentation plus lisible.   | [redocly.github.io/redoc](https://redocly.github.io/redoc/) |
| **Stoplight**       | Outil complet pour concevoir, tester et documenter les APIs. | [stoplight.io](https://stoplight.io/)                       |


---

### **📌 Outils de Backend**


| **Outil**                 | **Description**                                          | **Lien**                                                                 |
| ------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Express**               | Framework minimaliste pour Node.js.                      | [expressjs.com](https://expressjs.com/)                                  |
| **Fastify**               | Alternative à Express (plus rapide).                     | [fastify.io](https://www.fastify.io/)                                    |
| **NestJS**                | Framework TypeScript pour les APIs (inspiré d’Angular).  | [nestjs.com](https://nestjs.com/)                                        |
| **Django REST Framework** | Framework pour créer des APIs REST avec Django (Python). | [django-rest-framework.org](https://www.django-rest-framework.org/)      |
| **Flask-RESTful**         | Extension pour créer des APIs REST avec Flask (Python).  | [flask-restful.readthedocs.io](https://flask-restful.readthedocs.io/)    |
| **Spring Boot**           | Framework Java pour créer des APIs REST.                 | [spring.io/projects/spring-boot](https://spring.io/projects/spring-boot) |


---

---

## **🔹 10. Questions Fréquentes en Entretien (APIs)**

---

### **❓ 1. Qu’est-ce qu’une API et à quoi sert-elle ?**

**Réponse** :
*"Une **API** (*Application Programming Interface*) est une **interface** qui permet à deux systèmes logiciels de **communiquer** entre eux. Elle définit **comment** un client (ex : une application front-end) peut **demander des données ou des services** à un serveur (ex : un backend), et **comment** le serveur doit **répondre**.
**À quoi ça sert ?** :

1. **Modularité** : Séparer le front-end et le back-end pour que chaque équipe puisse travailler indépendamment.
2. **Réutilisabilité** : Une même API peut être utilisée par plusieurs applications (web, mobile, etc.).
3. **Abstraction** : Le client n’a pas besoin de savoir **comment** le serveur fonctionne, seulement **comment** l’utiliser.
4. **Intégration** : Permet d’intégrer des **services externes** (paiement, cartes, réseaux sociaux, etc.).

**Exemple concret** : Quand tu utilises une application météo, elle appelle l’API d’un service comme OpenWeatherMap pour récupérer les données météo et les afficher."*

---

### **❓ 2. Quelle est la différence entre REST et GraphQL ?**

**Réponse** :
*"**REST** et **GraphQL** sont deux **styles d’APIs** avec des approches différentes :


| **Critère**            | **REST**                                                                    | **GraphQL**                                                    |
| ---------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Type de requête**    | **Multiples endpoints** (ex : `/utilisateurs`, `/articles`).                | **Un seul endpoint** (ex : `/graphql`).                        |
| **Données retournées** | **Toutes les données** de la ressource (over-fetching possible).            | **Seulement les données demandées** (pas de over-fetching).    |
| **Nombre de requêtes** | **Plusieurs requêtes** pour plusieurs ressources (under-fetching possible). | **Une seule requête** pour plusieurs ressources.               |
| **Versionnement**      | **Nécéssaire** (ex : `/v1/utilisateurs`).                                   | **Pas nécessaire** (le schéma évolue sans casser les clients). |
| **Typage**             | **Faible** (dépend de la documentation).                                    | **Fort** (schéma strict avec des types).                       |
| **Performance**        | **Bonne** (cacheable, simple).                                              | **Variable** (dépend de la complexité des requêtes).           |
| **Complexité**         | **Simple** à comprendre et implémenter.                                     | **Plus complexe** (nécessite un schéma bien conçu).            |


**Quand utiliser REST ?** :

- Pour des **APIs simples** et **cacheables**.
- Quand tu veux une **solution standardisée** et largement adoptée.
- Pour des **microservices** où chaque service a ses propres endpoints.

**Quand utiliser GraphQL ?** :

- Quand tu as besoin de **flexibilité** dans les requêtes (ex : un front-end qui a besoin de données très spécifiques).
- Quand tu veux **éviter le over-fetching** (récupérer trop de données inutiles).
- Pour des **applications complexes** avec beaucoup de relations entre les données (ex : réseaux sociaux)."*

---

### **❓ 3. Qu’est-ce que le over-fetching et l’under-fetching ?**

**Réponse** :
*"Ces deux problèmes sont courants avec les APIs REST et sont résolus par GraphQL.

1. **Over-fetching** :
  - **Définition** : Récupérer **plus de données que nécessaire**.
  - **Exemple** : Une API REST `/utilisateurs/1` retourne **toutes les informations** sur l’utilisateur (nom, email, adresse, historique des commandes, etc.), alors que ton front-end n’a besoin que du **nom et de l’email**.
  - **Problème** : Gaspi de **bande passante** et de **ressources serveur**.
  - **Solution avec GraphQL** : Demander **uniquement les champs nécessaires** :
    ```graphql
    query {
      utilisateur(id: 1) {
        nom
        email
      }
    }
    ```
2. **Under-fetching** :
  - **Définition** : **Ne pas avoir assez de données** en une seule requête, ce qui oblige à faire **plusieurs requêtes**.
  - **Exemple** : Pour afficher un profil utilisateur avec ses articles, tu dois faire :
  1. `GET /utilisateurs/1` → Récupère les infos de l’utilisateur.
  2. `GET /utilisateurs/1/articles` → Récupère les articles de l’utilisateur.
    Problème** : **Latence accrue** (attendre plusieurs requêtes).
    Solution avec GraphQL** : Tout récupérer en **une seule requête** :
    `graphql
    ery {
    utilisateur(id: 1) {
      nom
      email
      articles {
        titre
        datePublication
      }
    }
    `"*

---

### **❓ 4. Qu’est-ce que le stateless dans REST ?**

**Réponse** :
*"Le principe **stateless** (sans état) signifie que **chaque requête envoyée à l’API doit contenir toutes les informations nécessaires** pour être traitée, **sans que le serveur ne stocke d’état** entre les requêtes.
**Explications** :

- **Avec état (stateful)** : Le serveur stocke des informations sur le client (ex : une session utilisateur). Chaque requête dépend des précédentes.
  - **Exemple** : Un serveur qui stocke l’ID de l’utilisateur dans une session côté serveur.
- **Sans état (stateless)** : Le serveur **ne stocke rien** sur le client. Chaque requête est **indépendante** et doit inclure toutes les informations nécessaires (ex : un token JWT dans les headers).
  - **Exemple** : Une API REST où chaque requête inclut un token d’authentification dans le header `Authorization`.

**Pourquoi c’est important ?** :

1. **Scalabilité** : Un serveur stateless peut **gérer plus de requêtes** car il n’a pas à maintenir d’état pour chaque client.
2. **Simplicité** : Pas besoin de gérer des sessions côté serveur.
3. **Fiabilité** : Moins de risques de **corruption de données** (pas d’état partagé entre les requêtes).

**Comment l’implémenter ?** :

- Utiliser des **tokens** (ex : JWT) pour l’authentification.
- Inclure toutes les **informations nécessaires** dans chaque requête (ex : ID de l’utilisateur, paramètres de filtrage)."*

---

### **❓ 5. Qu’est-ce que HATEOAS et pourquoi est-ce important ?**

**Réponse** :
*"**HATEOAS** (*Hypermedia as the Engine of Application State*) est un **principe de REST** qui stipule que les réponses de l’API doivent inclure des **liens hypertextes** pour guider le client vers les prochaines actions possibles.
**Exemple** :

```json
{
  "id": 1,
  "nom": "Robert",
  "_links": {
    "self": { "href": "/utilisateurs/1" },
    "articles": { "href": "/utilisateurs/1/articles" },
    "supprimer": { "href": "/utilisateurs/1", "method": "DELETE" }
  }
}
```

**Pourquoi c’est important ?** :

1. **Découplage client-serveur** : Le client n’a pas besoin de **connaître les URIs** à l’avance. Il peut **découvrir dynamiquement** les actions possibles.
2. **Évolutivité** : Le serveur peut **changer ses URIs** sans casser les clients (tant que les liens sont mis à jour).
3. **Navigation intuitive** : Le client peut **explorer l’API** comme un site web (en suivant les liens).

**Inconvénients** :

- **Complexité** : Plus difficile à implémenter que des APIs simples.
- **Surhead** : Les réponses sont plus lourdes (à cause des liens).

**Quand l’utiliser ?** :

- Pour des **APIs publiques** où les clients sont variés (web, mobile, etc.).
- Pour des **APIs complexes** avec beaucoup de relations entre les ressources."*

---

### **❓ 6. Comment sécuriser une API ?**

**Réponse** :
*"Pour sécuriser une API, il faut appliquer plusieurs **couches de protection** :

1. **Authentification** :
  - **JWT** : Utiliser des tokens **signés** et **expirants**.
  - **OAuth 2.0** : Déléguer l’authentification à un **fournisseur tiers** (Google, Facebook).
  - **Basic Auth** : Seulement pour des APIs **internes** (avec HTTPS).
2. **Autorisation** :
  - **RBAC** (*Role-Based Access Control*) : Donner des permissions en fonction du **rôle** de l’utilisateur (ex : admin, utilisateur).
  - **ABAC** (*Attribute-Based Access Control*) : Donner des permissions en fonction d’**attributs** (ex : heure de la journée, localisation).
3. **Chiffrement** :
  - **HTTPS** : **Obligatoire** pour chiffrer les communications.
  - **TLS 1.2+** : Utiliser la dernière version du protocole.
4. **Validation des entrées** :
  - **Toujours valider** les données reçues (ex : vérifier qu’un `userId` est bien un nombre).
  - **Nettoyer les entrées** pour éviter les injections (SQL, XSS, etc.).
5. **Protection contre les attaques courantes** :
  - **CSRF** : Utiliser des **tokens CSRF** ou des headers comme `SameSite` pour les cookies.
  - **XSS** : Échapper les données avant de les afficher (ex : avec `DOMPurify`).
  - **SQL Injection** : Utiliser des **requêtes paramétrées** (ex : avec `pg` pour PostgreSQL).
  - **DDoS** : Limiter le nombre de requêtes (**rate limiting**).
6. **CORS** :
  - **Cross-Origin Resource Sharing** : Définir quels domaines peuvent accéder à ton API.
  - Exemple avec Express :
    ```javascript
    const cors = require('cors');
    app.use(cors({
      origin: ['https://ton-site.com'],
    }));
    ```
7. **Rate Limiting** :
  - Limiter le nombre de requêtes par **IP** ou par **utilisateur**.
  - Exemple avec Express :
    ```javascript
    const rateLimit = require('express-rate-limit');
    const limiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // 100 requêtes max par fenêtre
    });
    app.use(limiter);
    ```
8. **Logging et Monitoring** :
  - **Logger les requêtes** (sans les données sensibles) pour détecter les comportements suspects.
  - Utiliser des outils comme **Sentry** ou **Datadog** pour surveiller les erreurs.
9. **Mises à jour régulières** :
  - Mettre à jour **les dépendances** (ex : avec `npm audit`).
  - Corriger les **vulnérabilités connues** (ex : CVE)."*

---

### **❓ 7. Qu’est-ce que le rate limiting et pourquoi l’utiliser ?**

**Réponse** :
*"Le **rate limiting** (limitation de débit) est une technique qui **limite le nombre de requêtes** qu’un client (IP, utilisateur, etc.) peut envoyer à une API **pendant une période donnée**.
**Pourquoi l’utiliser ?** :

1. **Prévenir les attaques DDoS** : Empêcher un attaquant de submerger ton API avec des requêtes.
2. **Éviter la surcharge du serveur** : Protéger ton serveur contre un **trop grand nombre de requêtes légitimes** (ex : un pic de trafic).
3. **Garantir une expérience équitable** : Tous les utilisateurs ont accès à la même **qualité de service**.
4. **Respecter les limites des APIs tierces** : Si tu utilises une API externe (ex : Twitter API), tu dois respecter ses limites pour éviter d’être bloqué.

**Exemple d’implémentation avec Express** :

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requêtes max par fenêtre
  message: 'Trop de requêtes, veuillez réessayer plus tard.',
});

app.use(limiter); // Applique à toutes les routes
```

**Exemple avec Nginx** :

```nginx
limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;

server {
  location /api/ {
    limit_req zone=mylimit burst=20 nodelay;
    proxy_pass http://backend;
  }
}
```

- `rate=10r/s` : 10 requêtes par seconde.
- `burst=20` : Autorise jusqu’à 20 requêtes en rafale (au-delà, elles sont rejetées).

**Bonnes pratiques** :

- **Adapter les limites** en fonction de l’usage (ex : 100 requêtes/minute pour un utilisateur normal, 1000 pour un admin).
- **Retourner des headers** pour informer le client :
  - `X-RateLimit-Limit` : Nombre maximal de requêtes autorisées.
  - `X-RateLimit-Remaining` : Nombre de requêtes restantes.
  - `X-RateLimit-Reset` : Timestamp de réinitialisation du compteur.
- **Utiliser des clés uniques** pour identifier les clients (ex : IP, token utilisateur)."*

---

### **❓ 8. Comment tester une API ?**

**Réponse** :
*"Pour tester une API, on peut utiliser plusieurs **méthodes et outils** :

1. **Outils de test manuel** :
  - **Postman** : Outil complet pour envoyer des requêtes HTTP et visualiser les réponses.
    - Permet de **sauvegarder des collections** de requêtes.
    - **Automatisation** avec des tests.
  - **Insomnia** : Alternative à Postman (plus léger).
  - **Thunder Client** : Extension VS Code pour tester les APIs.
  - **cURL** : Outil en ligne de commande pour envoyer des requêtes HTTP.
    - Exemple :
      ```bash
      curl -X GET https://api.example.com/utilisateurs/1
      curl -X POST https://api.example.com/utilisateurs -H "Content-Type: application/json" -d '{"nom": "Robert", "email": "Robert@example.com"}'
      ```
2. **Tests automatisés** :
  - **Jest + Supertest** (Node.js) :
  - **Postman/Newman** : Exécuter des **tests automatisés** à partir de collections Postman.
  - **Cypress** : Tests E2E pour les applications full-stack.
3. **Tests de charge** :
  - **Apache Benchmark (ab)** : Outil en ligne de commande pour tester les performances.
    - `-n 1000` : 1000 requêtes au total.
    - `-c 100` : 100 requêtes simultanées.
  - **k6** : Outil moderne pour les tests de charge.
    ```javascript
    import http from 'k6/http';

    export default function () {
      http.get('https://api.example.com/utilisateurs');
    }
    ```
    - Exécuter avec : `k6 run script.js`.
4. **Tests de sécurité** :
  - **OWASP ZAP** : Outil pour détecter les vulnérabilités de sécurité.
  - **Burp Suite** : Outil professionnel pour les tests de sécurité.

**Bonnes pratiques pour les tests** :

- **Tester toutes les routes** (GET, POST, PUT, DELETE, etc.).
- **Tester les cas d’erreur** (ex : 404, 400, 500).
- **Tester les performances** (temps de réponse, taux d’erreur).
- **Automatiser les tests** dans un pipeline CI/CD (ex : GitHub Actions, GitLab CI)."*

---

### **❓ 9. Qu’est-ce que CORS et comment le configurer ?**

**Réponse** :
*"**CORS** (*Cross-Origin Resource Sharing*) est un **mécanisme de sécurité** des navigateurs qui **restreint les requêtes HTTP cross-origin** (entre des domaines différents).
**Pourquoi CORS existe ?** :

- Par défaut, un navigateur **bloque les requêtes AJAX** vers un domaine différent de celui de la page web (pour éviter les attaques **CSRF** et le **vol de données**).
- Exemple : Si ton site est sur `https://mon-site.com` et que tu veux appeler `https://api.example.com`, le navigateur **bloquera la requête** sauf si l’API autorise `mon-site.com` via CORS.

**Comment ça marche ?** :

1. Le navigateur envoie une **requête préflight** (`OPTIONS`) pour vérifier si la requête est autorisée.
2. Le serveur répond avec des **headers CORS** pour indiquer quels domaines sont autorisés.

**Headers CORS importants** :


| **Header**                         | **Description**                         | **Exemple**                                        |
| ---------------------------------- | --------------------------------------- | -------------------------------------------------- |
| `Access-Control-Allow-Origin`      | Domaine(s) autorisé(s).                 | `https://mon-site.com` ou `*` (tous les domaines). |
| `Access-Control-Allow-Methods`     | Méthodes HTTP autorisées.               | `GET, POST, PUT, DELETE`                           |
| `Access-Control-Allow-Headers`     | Headers autorisés.                      | `Content-Type, Authorization`                      |
| `Access-Control-Allow-Credentials` | Autorise l’envoi de cookies.            | `true`                                             |
| `Access-Control-Max-Age`           | Durée de cache de la réponse préflight. | `86400` (24h en secondes).                         |


**Exemple de configuration CORS avec Express** :

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// Autoriser tous les domaines (⚠️ À éviter en production)
app.use(cors());

// Autoriser uniquement certains domaines
app.use(cors({
  origin: ['https://mon-site.com', 'https://mon-autre-site.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Autorise les cookies
}));

// Autoriser dynamiquement en fonction de l'origine
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = ['https://mon-site.com', 'https://mon-autre-site.com'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Non autorisé par CORS'));
    }
  },
}));

app.get('/utilisateurs', (req, res) => {
  res.json([{ id: 1, nom: 'Robert' }]);
});

app.listen(3000);
```

**Exemple de configuration CORS avec Nginx** :

```nginx
server {
  listen 80;
  server_name api.example.com;

  location / {
    add_header 'Access-Control-Allow-Origin' 'https://mon-site.com';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS';
    add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization';
    add_header 'Access-Control-Allow-Credentials' 'true';

    if ($request_method = 'OPTIONS') {
      add_header 'Access-Control-Max-Age' 86400;
      add_header 'Content-Type' 'text/plain; charset=utf-8';
      add_header 'Content-Length' 0;
      return 204;
    }

    proxy_pass http://localhost:3000;
  }
}
```

**Bonnes pratiques pour CORS** :

- **Ne pas utiliser `*` en production** (sauf pour les APIs publiques).
- **Limiter les méthodes et headers autorisés** (principe du *least privilege*).
- **Utiliser `credentials: true**` si tu as besoin d’envoyer des cookies.
- **Mettre en cache les réponses préflight** (`Access-Control-Max-Age`) pour améliorer les performances."*

---

### **❓ 10. Comment concevoir une API RESTful ?**

**Réponse** :
*"Pour concevoir une **API RESTful**, il faut suivre les **bonnes pratiques** et les **principes de REST**. Voici les étapes clés :

1. **Définir les ressources** :
  - Identifier les **entités principales** de ton application (ex : utilisateurs, articles, commandes).
  - Chaque ressource doit avoir un **URI unique** (ex : `/utilisateurs`).
2. **Utiliser les verbes HTTP correctement** :

  | **Action**                  | **Verbe HTTP** | **URI**           | **Exemple**                           |
  | --------------------------- | -------------- | ----------------- | ------------------------------------- |
  | Lister                      | `GET`          | `/utilisateurs`   | Récupère tous les utilisateurs.       |
  | Créer                       | `POST`         | `/utilisateurs`   | Crée un nouvel utilisateur.           |
  | Récupérer un élément        | `GET`          | `/utilisateurs/1` | Récupère l’utilisateur 1.             |
  | Mettre à jour un élément    | `PUT`          | `/utilisateurs/1` | Remplace l’utilisateur 1.             |
  | Mettre à jour partiellement | `PATCH`        | `/utilisateurs/1` | Met à jour le nom de l’utilisateur 1. |
  | Supprimer un élément        | `DELETE`       | `/utilisateurs/1` | Supprime l’utilisateur 1.             |

3. **Utiliser des URIs claires et descriptives** :
  - ❌ `/getU` (trop vague).
  - ✅ `/utilisateurs` (clair).
  - ❌ `/utilisateurs/creer` (verbe dans l’URI).
  - ✅ `/utilisateurs` + `POST` (verbe dans la méthode HTTP).
4. **Versionner l’API** :
  - Utiliser un **préfixe de version** dans l’URI :
    - `/v1/utilisateurs` (version 1).
    - `/v2/utilisateurs` (version 2).
  - **Pourquoi ?** : Permet de faire évoluer l’API sans casser les clients existants.
5. **Utiliser des codes de statut HTTP appropriés** :
  - `200 OK` : Succès pour une requête `GET`.
  - `201 Created` : Succès pour une requête `POST` (ressource créée).
  - `204 No Content` : Succès pour une requête `DELETE` (pas de contenu à retourner).
  - `400 Bad Request` : Requête mal formée.
  - `401 Unauthorized` : Authentification manquante.
  - `403 Forbidden` : Accès interdit (même avec authentification).
  - `404 Not Found` : Ressource introuvable.
  - `500 Internal Server Error` : Erreur côté serveur.
6. **Retourner des réponses structurées** :
  - **Succès** :
  - **Erreur** :
    ```json
    {
      "error": {
        "code": 404,
        "message": "Utilisateur non trouvé",
        "details": { "id": 1 }
      }
    }
    ```
7. **Implémenter la pagination, le filtrage et le tri** :
  - **Pagination** :
     Réponse :
  - **Filtrage** :
    ```http
    GET /utilisateurs?actif=true
    ```
  - **Tri** :
    ```http
    GET /utilisateurs?sort=-nom  # Tri décroissant par nom
    ```
8. **Sécuriser l’API** :
  - **Authentification** : JWT, OAuth 2.0, API Key.
  - **Autorisation** : RBAC, ABAC.
  - **HTTPS** : Obligatoire.
  - **CORS** : Configurer correctement.
  - **Rate Limiting** : Limiter le nombre de requêtes.
9. **Documenter l’API** :
  - Utiliser **Swagger/OpenAPI** ou **Redoc**.
  - Inclure des **exemples de requêtes/réponses**.
  - Documenter les **codes d’erreur** et leurs significations.
10. **Tester l’API** :
  - **Tests unitaires** : Tester les fonctions individuelles.
    - **Tests d’intégration** : Tester les interactions entre composants.
    - **Tests E2E** : Tester le comportement global.
    - **Tests de charge** : Vérifier les performances sous charge.

**Exemple de conception d’une API RESTful pour un blog** :


| **Ressource** | **URI**                       | **Méthodes**                    | **Description**                                    |
| ------------- | ----------------------------- | ------------------------------- | -------------------------------------------------- |
| Articles      | `/articles`                   | `GET`, `POST`                   | Liste tous les articles / Crée un article.         |
| Article       | `/articles/{id}`              | `GET`, `PUT`, `PATCH`, `DELETE` | Récupère/met à jour/supprime un article.           |
| Commentaires  | `/articles/{id}/commentaires` | `GET`, `POST`                   | Liste les commentaires / Ajoute un commentaire.    |
| Commentaire   | `/commentaires/{id}`          | `GET`, `DELETE`                 | Récupère/supprime un commentaire.                  |
| Utilisateurs  | `/utilisateurs`               | `GET`, `POST`                   | Liste tous les utilisateurs / Crée un utilisateur. |
| Utilisateur   | `/utilisateurs/{id}`          | `GET`, `PUT`, `DELETE`          | Récupère/met à jour/supprime un utilisateur.       |


**Exemple de requête pour créer un article** :

```http
POST /articles HTTP/1.1
Host: api.mon-blog.com
Content-Type: application/json
Authorization: Bearer TON_TOKEN

{
  "titre": "Mon premier article",
  "contenu": "Ceci est le contenu de mon article.",
  "auteurId": 1
}
```

**Exemple de réponse** :

```http
HTTP/1.1 201 Created
Location: /articles/1
Content-Type: application/json

{
  "id": 1,
  "titre": "Mon premier article",
  "contenu": "Ceci est le contenu de mon article.",
  "auteurId": 1,
  "createdAt": "2026-05-13T10:00:00Z",
  "updatedAt": "2026-05-13T10:00:00Z",
  "_links": {
    "self": { "href": "/articles/1" },
    "auteur": { "href": "/utilisateurs/1" },
    "commentaires": { "href": "/articles/1/commentaires" }
  }
}
```"*

---
---


## **🔹 11. Ressources pour Aller Plus Loin**

---

### **📌 Documentation Officielle**

- **REST** :
  - [REST API Tutorial](https://www.restapitutorial.com/)
  - [MDN HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP)
- **GraphQL** :
  - [GraphQL Official Docs](https://graphql.org/learn/)
  - [How to GraphQL](https://www.howtographql.com/)
- **Authentification** :
  - [JWT.io](https://jwt.io/)
  - [OAuth 2.0](https://oauth.net/2/)
- **Sécurité** :
  - [OWASP API Security](https://cheatsheetseries.owasp.org/cheatsheets/API_Security_Cheat_Sheet.html)
  - [CORS MDN](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS)

---

### **📌 Tutoriels et Cours**

- **REST** :
  - [REST API Design Best Practices](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
  - [Build a REST API with Node.js](https://www.youtube.com/watch?v=SL24MZiMx8Q) (YouTube)
- **GraphQL** :
  - [GraphQL Full Course](https://www.youtube.com/watch?v=ed8SzALpx1Q) (YouTube)
  - [GraphQL with Apollo Client](https://www.apollographql.com/docs/react/)
- **Node.js + Express** :
  - [Express.js Guide](https://expressjs.com/en/starter/installing.html)
  - [Building a REST API with Node.js](https://www.freecodecamp.org/news/learn-to-build-a-rest-api-with-node-js/)

---

### **📌 Outils Recommandés**

- **Test et Débogage** :
  - [Postman](https://www.postman.com/)
  - [Insomnia](https://insomnia.rest/)
  - [Thunder Client (VS Code)](https://www.thunderclient.com/)
- **Documentation** :
  - [Swagger Editor](https://editor.swagger.io/)
  - [Redoc](https://redocly.github.io/redoc/)
- **Backend** :
  - [Express.js](https://expressjs.com/)
  - [Fastify](https://www.fastify.io/)
  - [NestJS](https://nestjs.com/)
- **Frontend** :
  - [Apollo Client](https://www.apollographql.com/docs/react/)
  - [React Query](https://react-query.tanstack.com/) (pour les APIs REST)

---

### **📌 APIs Publiques pour Pratiquer**


| **API**             | **Description**                         | **Lien**                                                                   | **Authentification** |
| ------------------- | --------------------------------------- | -------------------------------------------------------------------------- | -------------------- |
| **JSONPlaceholder** | API REST fake pour tester.              | [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)      | ❌ Non                |
| **SpaceX**          | API GraphQL pour les données SpaceX.    | [api.spacex.land/graphql](https://api.spacex.land/graphql/)                | ❌ Non                |
| **OpenWeatherMap**  | API météo.                              | [openweathermap.org/api](https://openweathermap.org/api)                   | ✅ Oui (clé API)      |
| **GitHub API**      | API pour interagir avec GitHub.         | [docs.github.com/en/rest](https://docs.github.com/en/rest)                 | ✅ Oui (token)        |
| **Twitter API**     | API pour interagir avec Twitter.        | [developer.twitter.com](https://developer.twitter.com/en/docs/twitter-api) | ✅ Oui (OAuth)        |
| **Stripe API**      | API pour les paiements.                 | [stripe.com/docs/api](https://stripe.com/docs/api)                         | ✅ Oui (clé secrète)  |
| **Google Maps API** | API pour les cartes et géolocalisation. | [developers.google.com/maps](https://developers.google.com/maps)           | ✅ Oui (clé API)      |
| **NASA API**        | API pour les données de la NASA.        | [api.nasa.gov](https://api.nasa.gov/)                                      | ✅ Oui (clé API)      |
| **Dog API**         | API pour des images de chiens.          | [dog.ceo/dog-api](https://dog.ceo/dog-api/)                                | ❌ Non                |
| **Cat API**         | API pour des images de chats.           | [thecatapi.com](https://thecatapi.com/)                                    | ✅ Oui (clé API)      |


---

### **📌 Livres**

- **"Designing APIs with Swagger/OpenAPI"** (Josh Ponelat)
- **"REST API Design Rulebook"** (Mark Masse)
- **"GraphQL: The Definitive Guide"** (Daniel Schafer, Alex Banks)
- **"API Design Patterns"** (JJ Geewax)

---

### **📌 Communautés**

- **Reddit** :
  - [r/APIs](https://www.reddit.com/r/APIs/)
  - [r/webdev](https://www.reddit.com/r/webdev/)
  - [r/learnprogramming](https://www.reddit.com/r/learnprogramming/)
- **Discord** :
  - [The Programmer’s Hangout](https://discord.gg/programming)
  - [APIs.io](https://discord.gg/apis)
- **Forums** :
  - [Stack Overflow (Tag API)](https://stackoverflow.com/questions/tagged/api)
  - [Dev.to (Tag API)](https://dev.to/t/api)

---
