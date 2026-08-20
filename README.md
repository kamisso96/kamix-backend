# KAMIX Backend (Strapi)

Backend du site vitrine **Haikou KAMIX Consulting Co., Ltd.**, construit avec **Strapi 5** et **MySQL**.

## 🧰 Technologies

- **Strapi 5** (CMS headless open-source)
- **MySQL** (base de données)
- **Node.js 22** (recommandé)

## ⚙️ Installation locale

1. Assurez-vous d'utiliser Node.js 22 :
   nvm install 22
   nvm use 22
   node -v

2. Installez les dépendances :
   npm install

3. Créez un fichier `.env` à la racine avec les variables nécessaires (voir `.env.example`).

4. Démarrez Strapi en mode développement :
   npm run develop

   L'admin est accessible sur http://localhost:1337/admin.

## 🔐 Variables d'environnement

Un fichier `.env.example` est fourni. Copiez-le en `.env` et renseignez les valeurs.

## 🧩 Plugins désactivés

Pour réduire la surface d'attaque et alléger l'application, les plugins suivants sont désactivés dans `config/plugins.js` :

- `content-releases`
- `review-workflows`
- `plugin-cloud`
- `i18n`

Ils peuvent être réactivés en supprimant la ligne correspondante ou en mettant `true`.

## 📡 API publique

Les collections sont exposées via l'API REST. Le rôle **Public** a uniquement les permissions de lecture (`find`, `findOne`). Les opérations d'écriture sont réservées aux administrateurs.

## 🚀 Déploiement

Pour la production, utilisez `npm run start` et hébergez Strapi sur un VPS avec MySQL. Ne jamais exposer l'admin Strapi directement sur Internet ; utilisez un VPN ou une restriction d'IP.

## 📝 Contenu géré

- Services
- Témoignages
- Why Us
- Services éducatifs
- Programmes de bourses
- Solutions Business
- À propos (mission/vision)

## 📄 Licence

Tous droits réservés – Haikou KAMIX Consulting Co., Ltd.
