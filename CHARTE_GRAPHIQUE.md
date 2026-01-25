# Charte Graphique - Dr. Omar Wahab

## 🎨 Palette de Couleurs

### Couleurs Principales
- **Primary** : `#d4af8c` (Beige doré) - Couleur principale
- **Primary Dark** : `#b8946f` - Variante foncée
- **Primary Light** : `#e8d4c0` - Variante claire
- **Primary 50** : `#faf8f5` - Fond très clair

### Couleurs Neutres
- **Neutral 900** : `#1a1a1a` - Texte très foncé
- **Neutral 800** : `#2c2c2c` - Texte foncé
- **Neutral 700** : `#3a3a3a` - Texte moyen-foncé
- **Neutral 600** : `#4a4a4a` - Texte moyen
- **Neutral 500** : `#6b6b6b` - Texte clair
- **Neutral 400** : `#8b8b8b` - Texte très clair
- **Neutral 300** : `#b8b8b8` - Bordures
- **Neutral 200** : `#e5e5e5` - Bordures claires
- **Neutral 100** : `#f5f1ed` - Fond chaud
- **Neutral 50** : `#faf9f7` - Fond très clair

### Couleurs de Fond
- **Background** : `#ffffff` - Blanc pur
- **Background Soft** : `#faf9f7` - Beige très clair
- **Background Warm** : `#f5f1ed` - Beige chaud

## 🔤 Typographie

### Police Unique
- **Font Family** : `Inter` (sans-serif)
- **Poids disponibles** :
  - Light (300) - Utilisé pour les titres et textes principaux
  - Normal (400) - Corps de texte
  - Medium (500) - Emphase
  - Semibold (600) - Titres secondaires

### Hiérarchie Typographique
- **H1** : `text-5xl md:text-6xl lg:text-7xl` - Titres principaux
- **H2** : `text-4xl md:text-5xl` - Sections
- **H3** : `text-2xl md:text-3xl` - Sous-sections
- **H4** : `text-xl` - Sous-titres
- **Body** : `text-base` ou `text-lg` - Corps de texte
- **Small** : `text-sm` - Textes secondaires

## 📐 Espacements

- **XS** : `0.5rem` (8px)
- **SM** : `0.75rem` (12px)
- **MD** : `1rem` (16px)
- **LG** : `1.5rem` (24px)
- **XL** : `2rem` (32px)
- **2XL** : `3rem` (48px)
- **3XL** : `4rem` (64px)

## 🔲 Rayons de Bordure

- **SM** : `0.5rem` (8px) - Petits éléments
- **MD** : `1rem` (16px) - Éléments moyens
- **LG** : `1.5rem` (24px) - Cartes
- **XL** : `2rem` (32px) - Sections
- **2XL** : `3rem` (48px) - Grandes sections
- **Full** : `9999px` - Cercles complets

## 🌑 Ombres

### Ombres Standard
- **SM** : Ombre légère pour les éléments flottants
- **MD** : Ombre moyenne pour les cartes
- **LG** : Ombre large pour les sections
- **XL** : Ombre très large pour les modales
- **2XL** : Ombre maximale pour les overlays

### Ombres Personnalisées
- **Glow** : `0 0 20px rgba(212, 175, 140, 0.3)` - Effet lumineux doré
- **Glow LG** : `0 0 40px rgba(212, 175, 140, 0.4)` - Effet lumineux large

## ✨ Effets Visuels

### Glassmorphism
- **Glass** : Fond blanc semi-transparent avec blur
- **Glass Dark** : Fond noir semi-transparent avec blur
- Utilisé pour les overlays et les cartes flottantes

### Animations
- **Fade In** : Apparition en fondu (0.8s)
- **Float** : Flottement doux (3s, infini)
- **Hover Scale** : Agrandissement au survol (1.05x)
- **Hover Translate** : Translation verticale au survol (-8px)

### Transitions
- **Fast** : 150ms - Interactions rapides
- **Base** : 300ms - Transitions standards
- **Slow** : 500ms - Animations fluides
- **Slower** : 700ms - Transformations d'images

## 🖼️ Images

### Format
- Toutes les images sont en format **WebP** optimisé
- Taille standard : **800px** de largeur
- Utilisation de `next/image` pour l'optimisation automatique

### Effets sur Images
- **Hover Scale** : Zoom à 110% au survol
- **Gradient Overlay** : Dégradé sombre pour la lisibilité du texte
- **Border Radius** : Coins arrondis (rounded-2xl, rounded-3xl)

## 🎯 Principes de Design

### Épuré
- Espacements généreux
- Minimalisme dans les éléments
- Une seule typographie (Inter)
- Palette de couleurs limitée

### Esthétique
- Coins arrondis partout (rounded-lg à rounded-3xl)
- Ombres portées pour la profondeur
- Glassmorphism pour la modernité
- Animations douces et fluides

### Cohérence
- Utilisation systématique de la charte graphique
- Classes Tailwind personnalisées réutilisables
- Variables CSS pour la maintenabilité

## 📱 Responsive

- **Mobile First** : Design pensé d'abord pour mobile
- **Breakpoints** : 
  - `md:` à partir de 768px
  - `lg:` à partir de 1024px
- **Images adaptatives** : Tailles différentes selon l'écran

## 🎨 Utilisation dans le Code

### Classes Tailwind Personnalisées

```tsx
// Couleurs
bg-primary, text-primary, border-primary
bg-neutral-800, text-neutral-600

// Rayons
rounded-lg, rounded-xl, rounded-2xl, rounded-3xl

// Ombres
shadow-lg, shadow-xl, shadow-2xl, shadow-glow

// Glassmorphism
glass, glass-dark

// Animations
animate-fade-in, animate-float
hover:scale-105, hover:-translate-y-2
```

### Variables CSS

Toutes les valeurs sont définies dans `globals.css` avec `@theme` pour une utilisation cohérente dans tout le projet.
