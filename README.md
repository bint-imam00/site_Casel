# Site Web - Établissement Privé Casel

## 📋 Description

Site web statique complet et professionnel pour l'établissement privé Casel. Le site présente l'établissement de manière attractive et crédible avec un design moderne, responsive et facilement modifiable.

## 🎯 Caractéristiques

- **Design moderne et responsive** avec TailwindCSS
- **Navigation intuitive** avec menu fixe
- **Carrousel d'images** interactif sur la page d'accueil
- **Galerie d'événements** avec système de filtrage
- **Formulaire de contact** fonctionnel
- **Blog/Actualités** avec articles fictifs
- **Page équipe pédagogique** avec cartes d'enseignants
- **Optimisation SEO** de base
- **Animations fluides** et effets de survol
- **Accessibilité** respectée

## 📁 Structure du projet

```
Site Casel/
├── index.html              # Page d'accueil
├── presentation.html       # Page de présentation
├── equipe.html            # Équipe pédagogique
├── galerie.html           # Galerie d'événements
├── blog.html              # Blog/Actualités
├── contact.html           # Page de contact
├── README.md              # Documentation
└── assets/
    ├── css/
    │   └── style.css      # Styles personnalisés
    ├── js/
    │   └── script.js      # JavaScript interactif
    └── img/               # Dossier pour les images
```

## 🚀 Installation et utilisation

### 1. Téléchargement
Clonez ou téléchargez ce projet dans votre répertoire local.

### 2. Ajout des images
Placez vos images dans le dossier `assets/img/` avec les noms suivants :

#### Images de la page d'accueil (carrousel)
- `hero-1.jpg` - Élèves en classe
- `hero-2.jpg` - Campus moderne
- `hero-3.jpg` - Activités extra-scolaires

#### Images des actualités
- `news-1.jpg` - Concours de mathématiques
- `news-2.jpg` - Cérémonie de remise des diplômes
- `news-3.jpg` - Nouveau laboratoire

#### Images de l'équipe
- `proviseur.jpg` - Photo du proviseur
- `proviseur-adjoint.jpg` - Photo du proviseur adjoint
- `comptable.jpg` - Photo du comptable
- `teacher-1.jpg` à `teacher-8.jpg` - Photos des enseignants
- `author-1.jpg` à `author-7.jpg` - Photos des auteurs d'articles

#### Images de la galerie
- `gallery-1.jpg` à `gallery-12.jpg` - Événements divers

#### Images du blog
- `blog-featured.jpg` - Article principal
- `blog-1.jpg` à `blog-6.jpg` - Articles du blog

#### Images de présentation
- `historique.jpg` - Photo historique de l'établissement

### 3. Ouverture du site
Ouvrez simplement le fichier `index.html` dans votre navigateur web.

## ✏️ Personnalisation

### Modifier les informations de l'établissement

#### 1. Nom et coordonnées
Recherchez et remplacez dans tous les fichiers HTML :
- **Nom** : "Collège & Lycée Keur Serigne Touba"
- **Adresse** : "Avenue Léopold Sédar Senghor, BP 12345, Dakar, Sénégal"
- **Téléphone** : "+221 33 123 45 67"
- **Email** : "contact@keurserignetouba.edu.sn"

#### 2. Informations du proviseur
Dans `presentation.html`, section "Mot du Proviseur" :
- Nom : "M. Amadou Diallo"
- Titre : "Proviseur"
- Biographie : Modifiez le texte selon vos besoins

#### 3. Statistiques
Dans `index.html`, section "Stats Section" :
- Taux de réussite au bac : "95%"
- Années d'expérience : "25"
- Nombre d'élèves : "1200"
- Nombre d'enseignants : "50"

### Modifier le contenu des pages

#### Page d'accueil (`index.html`)
- **Slogan** : "Former aujourd'hui les leaders de demain"
- **Description** : Modifiez le paragraphe descriptif
- **Carrousel** : Remplacez les images et légendes

#### Page Présentation (`presentation.html`)
- **Historique** : Modifiez l'histoire de l'établissement
- **Mission, Vision, Valeurs** : Adaptez selon votre établissement
- **Niveaux d'enseignement** : Ajustez selon vos classes

#### Page Équipe (`equipe.html`)
- **Administration** : Modifiez les noms, postes et descriptions
- **Enseignants** : Ajoutez/supprimez des cartes d'enseignants
- **Filtres** : Ajustez les matières selon vos enseignants

#### Page Galerie (`galerie.html`)
- **Événements** : Ajoutez/supprimez des éléments de galerie
- **Filtres** : Modifiez les catégories d'événements
- **Images** : Remplacez par vos propres photos

#### Page Blog (`blog.html`)
- **Articles** : Modifiez les titres, dates et contenus
- **Auteurs** : Changez les noms et photos
- **Catégories** : Adaptez selon vos besoins

#### Page Contact (`contact.html`)
- **Formulaire** : Les options du formulaire sont déjà configurées
- **FAQ** : Modifiez les questions/réponses
- **Horaires** : Ajustez selon vos horaires d'ouverture

### Modifier les couleurs et le style

#### Couleurs principales
Dans chaque fichier HTML, recherchez la section TailwindCSS config :
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary': '#2563eb',    // Bleu principal
                'secondary': '#64748b',  // Gris secondaire
                'accent': '#0ea5e9',     // Bleu accent
            }
        }
    }
}
```

#### Police
La police utilisée est "Poppins". Pour la changer :
1. Modifiez le lien Google Fonts dans le `<head>`
2. Changez `font-poppins` par votre nouvelle police

## 🌐 Déploiement

### GitHub Pages
1. Créez un repository GitHub
2. Uploadez tous les fichiers du projet
3. Allez dans Settings > Pages
4. Sélectionnez "Deploy from a branch"
5. Choisissez "main" et "/ (root)"
6. Votre site sera accessible à `https://votre-username.github.io/nom-du-repo`

### Netlify
1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte gratuit
3. Cliquez sur "New site from Git"
4. Connectez votre repository GitHub
5. Configurez les paramètres de build (laissez par défaut)
6. Votre site sera déployé automatiquement

### Autres hébergeurs
Ce site étant statique, il peut être hébergé sur n'importe quel service :
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront
- Serveur web classique (Apache, Nginx)

## 🔧 Fonctionnalités JavaScript

### Carrousel
- Navigation automatique (5 secondes)
- Boutons précédent/suivant
- Indicateurs cliquables
- Responsive

### Filtres
- Galerie d'événements
- Équipe pédagogique par matière
- Animations fluides

### Modal galerie
- Affichage en grand des images
- Navigation au clavier (Escape pour fermer)
- Fermeture en cliquant à l'extérieur

### Formulaire de contact
- Validation en temps réel
- Messages d'erreur personnalisés
- Simulation d'envoi (à connecter à votre backend)

### FAQ Accordion
- Ouverture/fermeture des questions
- Une seule question ouverte à la fois

### Menu mobile
- Toggle automatique
- Icône qui change (hamburger/croix)

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à :
- **Desktop** : 1024px et plus
- **Tablet** : 768px à 1023px
- **Mobile** : 320px à 767px

## 🎨 Personnalisation avancée

### Ajouter de nouvelles pages
1. Créez un nouveau fichier HTML
2. Copiez la structure de base d'une page existante
3. Modifiez le contenu
4. Ajoutez le lien dans la navigation de toutes les pages

### Modifier les animations
Dans `assets/css/style.css`, vous pouvez :
- Changer les durées d'animation
- Modifier les effets de transition
- Ajouter de nouvelles animations CSS

### Ajouter des fonctionnalités JavaScript
Dans `assets/js/script.js`, vous pouvez :
- Ajouter de nouvelles interactions
- Intégrer des APIs externes
- Améliorer les validations de formulaire

## 🔍 SEO et Performance

### Optimisations incluses
- Meta tags optimisés pour chaque page
- Structure HTML sémantique
- Images avec attributs alt
- Liens internes optimisés
- Temps de chargement optimisé

### Pour améliorer le SEO
1. Ajoutez un sitemap.xml
2. Créez un fichier robots.txt
3. Optimisez les images (compression)
4. Ajoutez des données structurées (JSON-LD)

## 🆘 Support et maintenance

### Mise à jour du contenu
- **Facile** : Modifier les textes dans les fichiers HTML
- **Images** : Remplacer les fichiers dans `assets/img/`
- **Styles** : Modifier `assets/css/style.css`

### Problèmes courants
1. **Images qui ne s'affichent pas** : Vérifiez les chemins et noms de fichiers
2. **Styles qui ne s'appliquent pas** : Vérifiez la connexion internet (TailwindCSS)
3. **JavaScript qui ne fonctionne pas** : Ouvrez la console du navigateur pour voir les erreurs

### Sauvegarde
- Sauvegardez régulièrement vos modifications
- Gardez une copie de travail sur votre ordinateur
- Versionnez avec Git pour suivre les changements

## 📞 Contact et support

Pour toute question ou assistance :
- Consultez la documentation TailwindCSS
- Vérifiez la console du navigateur pour les erreurs
- Testez sur différents navigateurs

## 📄 Licence

Ce projet est libre d'utilisation pour des établissements scolaires. Vous pouvez le modifier et l'adapter selon vos besoins.

---

**Établissement Privé Casel**  
*Former aujourd'hui les leaders de demain*

© 2024 - Tous droits réservés
