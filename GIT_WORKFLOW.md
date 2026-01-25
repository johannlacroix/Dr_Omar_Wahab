# Workflow Git - Dr. Omar Wahab

## Branches disponibles

Le projet utilise un workflow à 3 branches principales :

### 🌿 `main` (Production)
- **Rôle** : Code en production, stable et testé
- **Protection** : Ne doit être modifiée que via des Pull Requests depuis `recette`
- **Déploiement** : Déploiement automatique en production

### 🔧 `dev` (Développement)
- **Rôle** : Branche de développement actif
- **Utilisation** : Toutes les nouvelles fonctionnalités et corrections de bugs
- **Workflow** : `dev` → `recette` → `main`

### 🧪 `recette` (Staging/Recette)
- **Rôle** : Environnement de test et validation
- **Utilisation** : Tests avant mise en production
- **Workflow** : `recette` → `main` (via Pull Request)

## Workflow recommandé

### 1. Développement d'une nouvelle fonctionnalité

```bash
# Se placer sur la branche dev
git checkout dev

# Créer une branche de fonctionnalité
git checkout -b feature/nom-de-la-fonctionnalite

# Faire vos modifications
# ... code ...

# Committer
git add .
git commit -m "feat: description de la fonctionnalité"

# Pousser la branche
git push -u origin feature/nom-de-la-fonctionnalite

# Créer une Pull Request sur GitHub : feature → dev
```

### 2. Mise en recette

```bash
# Une fois la fonctionnalité validée dans dev
git checkout recette
git pull origin recette
git merge dev
git push origin recette
```

### 3. Mise en production

```bash
# Après validation en recette
# Créer une Pull Request sur GitHub : recette → main
# Une fois approuvée et mergée, main sera automatiquement déployée
```

## Commandes utiles

### Changer de branche
```bash
git checkout dev
git checkout recette
git checkout main
```

### Voir toutes les branches
```bash
git branch -a
```

### Synchroniser une branche
```bash
git checkout dev
git pull origin dev
```

### Créer une nouvelle branche de fonctionnalité
```bash
git checkout dev
git pull origin dev
git checkout -b feature/nom-fonctionnalite
```

## Convention de nommage des branches

- **Features** : `feature/nom-de-la-fonctionnalite`
- **Bugs** : `fix/description-du-bug`
- **Hotfixes** : `hotfix/description-du-probleme`
- **Documentation** : `docs/description`

## Exemples

### Ajouter une nouvelle page
```bash
git checkout dev
git checkout -b feature/nouvelle-page-contact
# ... modifications ...
git add .
git commit -m "feat: ajout page contact améliorée"
git push -u origin feature/nouvelle-page-contact
# Créer PR sur GitHub : feature/nouvelle-page-contact → dev
```

### Corriger un bug
```bash
git checkout dev
git checkout -b fix/correction-menu-mobile
# ... corrections ...
git add .
git commit -m "fix: correction du menu mobile sur iOS"
git push -u origin fix/correction-menu-mobile
# Créer PR sur GitHub : fix/correction-menu-mobile → dev
```

## Protection des branches

Sur GitHub, configurez la protection des branches :
- **main** : Require pull request reviews, require status checks
- **recette** : Require pull request reviews (optionnel)
- **dev** : Pas de protection (branche de développement)

## Synchronisation

Pour garder vos branches locales à jour :

```bash
# Récupérer toutes les branches distantes
git fetch origin

# Synchroniser main
git checkout main
git pull origin main

# Synchroniser dev
git checkout dev
git pull origin dev

# Synchroniser recette
git checkout recette
git pull origin recette
```



