# Guide de déploiement

## Déploiement sur Vercel (Recommandé)

### Méthode 1 : Via GitHub

1. **Pousser le code sur GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/votre-username/dr-omar-wahab.git
   git push -u origin main
   ```

2. **Connecter à Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez votre compte GitHub
   - Cliquez sur "New Project"
   - Sélectionnez votre repo `dr-omar-wahab`
   - Vercel détectera automatiquement Next.js

3. **Configurer les variables d'environnement**
   - Dans les paramètres du projet Vercel
   - Allez dans "Environment Variables"
   - Ajoutez `NEXT_PUBLIC_SITE_URL` avec votre domaine

4. **Déploiement automatique**
   - Vercel déploiera automatiquement à chaque push
   - Vous recevrez une URL de prévisualisation

### Méthode 2 : Via CLI Vercel

```bash
npm install -g vercel
vercel
```

## Configuration du domaine personnalisé

1. Dans Vercel, allez dans "Settings" > "Domains"
2. Ajoutez votre domaine (ex: `www.dr-omar-wahab.fr`)
3. Suivez les instructions DNS fournies
4. Vercel générera automatiquement le certificat SSL

## Déploiement sur Netlify

1. **Via GitHub** (similaire à Vercel)
   - Connectez votre repo GitHub à Netlify
   - Configurez le build : `npm run build`
   - Dossier de publication : `.next`

2. **Via CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

## Déploiement sur VPS

### Prérequis
- Node.js 18+ installé
- PM2 pour la gestion des processus

### Étapes

1. **Sur le serveur**
   ```bash
   git clone https://github.com/votre-username/dr-omar-wahab.git
   cd dr-omar-wahab
   npm install
   npm run build
   ```

2. **Lancer avec PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "dr-omar-wahab" -- start
   pm2 save
   pm2 startup
   ```

3. **Configurer Nginx** (reverse proxy)
   ```nginx
   server {
       listen 80;
       server_name www.dr-omar-wahab.fr;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **SSL avec Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d www.dr-omar-wahab.fr
   ```

## Variables d'environnement

Créez un fichier `.env.local` (ou configurez-les dans votre plateforme) :

```env
NEXT_PUBLIC_SITE_URL=https://www.dr-omar-wahab.fr
```

Si vous utilisez Sanity :
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=votre-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Optimisations de production

Le site est déjà optimisé avec :
- ✅ Static Site Generation (SSG) pour la plupart des pages
- ✅ Images optimisées avec Next.js Image
- ✅ Code splitting automatique
- ✅ Minification CSS/JS
- ✅ Compression gzip/brotli (automatique sur Vercel/Netlify)

## Monitoring

### Vercel Analytics
- Activable dans les paramètres du projet
- Gratuit pour les projets personnels

### Google Analytics
Ajoutez le script dans `app/layout.tsx` si nécessaire.

## Checklist de déploiement

- [ ] Code poussé sur GitHub
- [ ] Variables d'environnement configurées
- [ ] Domaine configuré
- [ ] SSL activé
- [ ] Test de toutes les pages
- [ ] Vérification du sitemap.xml
- [ ] Vérification du robots.txt
- [ ] Test du bouton Doctolib
- [ ] Test responsive (mobile/tablette/desktop)



