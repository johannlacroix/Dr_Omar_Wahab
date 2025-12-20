# Site Web - Dr. Omar Wahab

Site vitrine responsive pour le Dr. Omar Wahab, chirurgien esthétique à Bruges.

## 🚀 Technologies

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 19**

## 📁 Structure du projet

```
dr-omar-wahab/
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── layout.tsx         # Layout principal
│   ├── a-propos/          # Page à propos
│   ├── contact/           # Page contact
│   ├── blog/              # Blog (liste + articles)
│   ├── chirurgie/         # Pages de services
│   │   ├── mammaire/
│   │   ├── silhouette/
│   │   └── visage/
│   ├── medecine-esthetique/
│   ├── mentions-legales/
│   ├── sitemap.ts         # Sitemap XML
│   └── robots.ts          # Robots.txt
├── components/            # Composants React
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── DoctolibButton.tsx
└── lib/                   # Utilitaires
    ├── blog.ts           # Gestion du blog
    ├── types.ts          # Types TypeScript
    └── sanity.ts         # Configuration Sanity (optionnel)
```

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start
```

## 📝 Configuration

1. Copiez `.env.example` vers `.env.local`
2. Configurez `NEXT_PUBLIC_SITE_URL` avec votre domaine
3. (Optionnel) Configurez Sanity pour le CMS du blog

## 🎨 Fonctionnalités

- ✅ Page d'accueil avec présentation
- ✅ 4 pages de services (Mammaire, Silhouette, Visage, Médecine esthétique)
- ✅ Menu déroulant pour les services
- ✅ Bouton Doctolib sur toutes les pages
- ✅ Blog avec système de gestion d'articles
- ✅ Pages classiques (À propos, Contact, Mentions légales)
- ✅ SEO optimisé (metadata, sitemap, robots.txt)
- ✅ Design responsive (mobile-first)
- ✅ Performance optimisée

## 📚 Blog / CMS

Le blog utilise actuellement des données statiques dans `lib/blog.ts`.

Pour intégrer un CMS :
- **Sanity** : Décommentez et configurez `lib/sanity.ts`
- **Strapi** : Créez une configuration similaire
- **Contentful** : Utilisez leur SDK

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connectez votre repo GitHub à Vercel
2. Configurez les variables d'environnement
3. Déployez automatiquement

### Autres plateformes

Le site peut être déployé sur n'importe quelle plateforme supportant Next.js :
- Netlify
- AWS Amplify
- VPS avec Node.js

## 🔗 Liens importants

- **Doctolib** : [Lien de prise de rendez-vous](https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab/booking/motive-categories?specialityId=18&telehealth=false&placeId=practice-61570&bookingFunnelSource=profile)

## 📞 Support

Pour toute question ou modification, contactez le développeur.
