# Manuel d'utilisation — Site Dr Omar Wahab

**Site en ligne :** [https://dromarwahab.com](https://dromarwahab.com)  
**Blog public :** [https://dromarwahab.com/blog](https://dromarwahab.com/blog)  
**Support technique :** Johann Lacroix — [projlacroix@gmail.com](mailto:projlacroix@gmail.com)

*Document remis à la livraison — juin 2026*

---

## 1. En bref : l'état de votre site aujourd'hui

Votre site a été testé en conditions réelles (production) avec l'outil **Google Lighthouse**, utilisé par les professionnels pour mesurer la qualité d'un site.

| Indicateur | Ordinateur | Mobile | En clair |
|------------|------------|--------|----------|
| **Vitesse** | 100/100 | 96/100 | Le site s'affiche très vite |
| **Accessibilité** | 100/100 | 100/100 | Lisible pour tous (contrastes, navigation…) |
| **Bonnes pratiques** | 100/100 | 100/100 | Site sécurisé et bien construit |
| **Référencement (SEO)** | 100/100 | 100/100 | Google peut indexer correctement vos pages |

**Ce que cela signifie pour vous :** la base technique est excellente. Le référencement naturel se construira surtout grâce à votre **contenu** (textes des pages + articles de blog réguliers).

---

## 2. Suivre les performances et le SEO vous-même

Vous n'avez pas besoin d'être technicien. Deux outils gratuits de Google suffisent.

### 2.1 Vitesse et qualité technique — PageSpeed Insights

1. Ouvrez [PageSpeed Insights](https://pagespeed.web.dev/?url=https://dromarwahab.com)
2. L'URL `https://dromarwahab.com` est déjà suggérée ; cliquez sur **Analyser**
3. Consultez les onglets **Mobile** et **Ordinateur**

**À retenir :**
- Un score **à partir de 90** est très bon
- Les métriques importantes : **LCP** (vitesse d'affichage de l'image principale), **CLS** (stabilité de la page), **INP** (réactivité au clic)
- Refaites un test **1 à 2 fois par trimestre** ou après une grosse modification du site

### 2.2 Présence sur Google — Search Console

1. Créez un compte sur [Google Search Console](https://search.google.com/search-console)
2. Ajoutez la propriété `https://dromarwahab.com` (validation par DNS ou fichier HTML — Johann peut vous aider la première fois)
3. Une fois validé, vous verrez :
   - les **requêtes** par lesquelles les internautes vous trouvent
   - les **pages indexées**
   - d'éventuelles **erreurs** à corriger

**Fréquence conseillée :** consultation **mensuelle** (15 minutes suffisent).

### 2.3 Vérification rapide « en 30 secondes »

- Le site s'ouvre-t-il correctement sur votre téléphone ?
- Les boutons Doctolib fonctionnent-ils ?
- Un nouvel article de blog apparaît-il sur [dromarwahab.com/blog](https://dromarwahab.com/blog) après publication ?

---

## 3. Publier des articles de blog (Sanity)

Le blog est géré via **Sanity**, un outil en ligne simple (comme un traitement de texte enrichi). Les articles s'affichent automatiquement sur le site après publication.

### 3.1 Accéder à Sanity

| Lien | Usage |
|------|--------|
| [sanity.io/manage](https://www.sanity.io/manage) | Connexion et gestion du projet |
| [rg0stah3.sanity.studio](https://rg0stah3.sanity.studio) | Interface d'édition des articles (Studio) |

> Si le lien Studio ne fonctionne pas, connectez-vous d'abord sur sanity.io/manage, ouvrez le projet **rg0stah3**, puis lancez le **Studio**.

**Identifiants :** ceux communiqués à la livraison (compte Google ou e-mail invité par Johann).

### 3.2 Créer un nouvel article — pas à pas

1. Ouvrez le **Studio Sanity**
2. Menu **Article** (ou **Post**) → **Create new**
3. Remplissez les champs (détail ci-dessous)
4. Cliquez sur **Publish** (Publier) en bas à droite
5. Attendez **1 à 3 minutes**, puis vérifiez sur [dromarwahab.com/blog](https://dromarwahab.com/blog)

> **Important :** sans date de publication (`publishedAt`), l'article **n'apparaît pas** sur le site.

### 3.3 Les champs à remplir — ce qui est attendu

| Champ (Sanity) | Obligatoire | Ce qu'il faut y mettre |
|----------------|-------------|----------------------|
| **Titre** (`title`) | Oui | Titre clair, accrocheur, 50 à 70 caractères idéalement. Ex. : *« Lipoaspiration : ce qu'il faut savoir avant l'intervention »* |
| **Slug** (`slug`) | Oui | URL de l'article. Cliquez **Generate** depuis le titre. Résultat : `lipoaspiration-ce-qu-il-faut-savoir` → page `dromarwahab.com/blog/lipoaspiration-ce-qu-il-faut-savoir` |
| **Extrait** (`excerpt`) | Recommandé | 2 à 3 phrases (150–200 caractères). Résumé visible sur la liste du blog et dans Google. |
| **Contenu** (`content`) | Oui | Corps de l'article : paragraphes, sous-titres, listes. Vous pouvez ajouter des **images dans le texte** via le bouton + du éditeur. |
| **Date de publication** (`publishedAt`) | **Oui** | Date et heure de mise en ligne. Sans ce champ, l'article reste invisible. |
| **Auteur** (`author`) | Non | Par défaut : *Dr Omar Wahab*. Laissez vide ou indiquez ce nom. |
| **Catégorie** (`category`) | Recommandé | Choisir **une** valeur exacte (voir liste ci-dessous). |
| **Image principale** (`mainImage`) | Recommandé | Photo d'en-tête de l'article. Ajoutez une **légende alternative** (`alt`) : courte description pour l'accessibilité et Google. |
| **Format image** (`imageFormat`) | Non | Voir § 3.5. Par défaut : `landscape` (paysage). |
| **Taille image** (`imageSize`) | Non | `full` (pleine largeur), `large`, `medium`, `small`. |
| **Alignement image** (`imageAlignment`) | Non | `center`, `left`, `right` (utile si taille ≠ full). |

#### Valeurs de catégorie (à respecter exactement)

| Valeur dans Sanity | Affichée sur le site |
|--------------------|--------------------|
| `actualites` | Actualités |
| `conseils` | Conseils |
| `chirurgie-mammaire` | Chirurgie Mammaire |
| `chirurgie-silhouette` | Chirurgie Silhouette |
| `chirurgie-visage` | Chirurgie Visage |
| `medecine-esthetique` | Médecine Esthétique |

### 3.4 Modifier ou dépublier un article

- **Modifier :** ouvrez l'article dans Sanity, changez le contenu, cliquez **Publish** à nouveau
- **Dépublier :** bouton **Unpublish** — l'article disparaît du site (mais reste en brouillon dans Sanity)

### 3.5 Images — formats et bonnes pratiques

#### Image principale (`mainImage`)

| Format (`imageFormat`) | Proportion | Usage conseillé |
|------------------------|------------|-----------------|
| `landscape` | 16:9 | **Défaut** — la plupart des articles |
| `portrait` | 4:3 | Portrait patient, avant/après vertical |
| `square` | 1:1 | Réseaux sociaux, visuel centré |
| `banner` | 21:9 | Bandeau large, peu de hauteur |

**Fichier source :**
- Format : **JPEG** ou **WebP** (éviter les PNG lourds pour les photos)
- Poids : **moins de 500 Ko** idéalement (max 1 Mo)
- Résolution : **1600 px** de large minimum pour la qualité sur grand écran
- Utilisez l'outil **Hotspot** dans Sanity pour recadrer le point focal (visage, zone importante)

#### Images dans le contenu

- **1 image principale** en tête + **0 à 3 images** dans le corps suffisent en général
- Chaque image dans le texte doit avoir un **texte alternatif** descriptif
- Pas de texte important incrusté dans l'image (Google ne le lit pas)

#### Droits et éthique médicale

- Utilisez uniquement des images dont vous avez les **droits** ou des photos du cabinet
- **Avant/après :** consentement écrit du patient, pas d'identification possible
- Évitez les images choquantes ou trop explicites

---

## 4. Conseils éditoriaux pour un blog efficace

### 4.1 Thèmes qui fonctionnent pour un chirurgien esthétique

- **Questions fréquentes en consultation** (*« Faut-il arrêter de fumer avant une rhinoplastie ? »*)
- **Explication d'une intervention** (déroulement, convalescence, résultats attendus — sans promesse irréaliste)
- **Actualités du cabinet** (nouveau matériel, participation à un congrès)
- **Conseils saisonniers** (protection solaire post-opératoire, hydratation…)
- **Différences entre techniques** (ex. lipofilling vs prothèses mammaires)

**À éviter :** contenu promotionnel agressif, prix, superlatifs (« le meilleur », « garanti »), diagnostics à distance.

### 4.2 Mots-clés (SEO) — simplement

Pensez aux mots que vos patients tapent sur Google :

- *chirurgien esthétique Bruges*, *chirurgien esthétique Bordeaux*
- *rhinoplastie Bordeaux*, *augmentation mammaire Bruges*
- *liposuccion*, *lifting visage*, *médecine esthétique*

**Comment les utiliser :**
- Intégrez-les **naturellement** dans le titre, l'extrait et le premier paragraphe
- Mentionnez **Bruges** ou **Bordeaux** quand c'est pertinent
- Un mot-clé principal par article suffit ; ne « bourrez » pas le texte

### 4.3 Fréquence de publication

| Rythme | Effet |
|--------|-------|
| **1 article / mois** | Minimum pour rester visible — **recommandé pour démarrer** |
| **1 article / 2 semaines** | Idéal pour accélérer le référencement |
| **1 article / semaine** | Excellent si vous avez le temps ou une rédactrice |

La **régularité** compte plus que la quantité ponctuelle.

### 4.4 Structure d'un bon article

1. **Titre** clair avec le sujet principal
2. **Introduction** (2–3 phrases) : le problème ou la question du patient
3. **Corps** avec sous-titres (H2 dans l'éditeur = titres de section)
4. **Conclusion** + invitation douce à la consultation (sans être insistant)
5. Longueur conseillée : **600 à 1 200 mots** (environ 5–10 minutes de lecture)

### 4.5 Ton et charte

- Vouvoiement, ton **professionnel et rassurant**
- Parler de **« le Dr Wahab »** ou **« Dr Omar Wahab »** (cohérent avec le site)
- Rappeler que chaque situation est **personnelle** et qu'une **consultation** est nécessaire
- Ne jamais remplacer un avis médical par un article

---

## 5. Liens utiles — récapitulatif

| Ressource | Lien |
|-----------|------|
| **Site du Dr Wahab** | [dromarwahab.com](https://dromarwahab.com) |
| **Blog** | [dromarwahab.com/blog](https://dromarwahab.com/blog) |
| **Doctolib Bruges** | [Prendre rendez-vous](https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-61570) |
| **Doctolib Bordeaux** | [Prendre rendez-vous](https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-765036) |
| **Éditeur blog (Sanity Studio)** | [rg0stah3.sanity.studio](https://rg0stah3.sanity.studio) |
| **Gestion Sanity** | [sanity.io/manage](https://www.sanity.io/manage) |
| **Test vitesse / qualité** | [PageSpeed Insights](https://pagespeed.web.dev/?url=https://dromarwahab.com) |
| **Suivi Google** | [Search Console](https://search.google.com/search-console) |

---

## 6. Besoin d'aide ?

**Johann Lacroix** — Chef de projet digital  
📧 [projlacroix@gmail.com](mailto:projlacroix@gmail.com)

**Exemples de demandes :**
- Problème d'affichage d'un article après publication
- Création d'un compte Sanity pour une collaboratrice
- Configuration initiale de Google Search Console
- Évolution du site (nouvelle page, modification de texte fixe)

---

*Ce manuel accompagne la livraison du site vitrine Dr Omar Wahab. Conservez-le pour référence ; une version à jour peut être demandée à Johann en cas de changement majeur du site.*
