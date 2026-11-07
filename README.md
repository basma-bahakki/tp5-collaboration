# TP5 : Travail collaboratif avec Git et GitHub
## Projet : Invitation digitale à une soutenance

Projet réalisé en binôme dans le cadre du TP5 du cours **Développement Web Full Stack et DevOps** (FST Marrakech) : travailler à deux sur un même dépôt GitHub avec des branches, des Pull Requests et la résolution d'un conflit.

Le projet choisi est une **page web d'invitation à une soutenance de projet de fin d'études**, avec une liste d'invités filtrable et consultable par recherche.

**Réalisé par :** Basma Bahakki et Hiba LAMSSELAK

**Dépôt GitHub :** https://github.com/basma-bahakki/tp5-collaboration

---

## 1. Objectifs du TP

- Créer un dépôt GitHub commun et le cloner en local.
- Organiser le travail avec les branches `main`, `dev` et `feature/*`.
- Développer chaque fonctionnalité sur sa propre branche.
- Fusionner le travail avec des **Pull Requests**.
- Provoquer puis **résoudre un conflit** de fusion.
- Produire un petit projet frontend fonctionnel.

---

## 2. Aperçu de l'application

La page d'invitation présente :

| Section | Contenu |
|---|---|
| **En-tête** | Message d'invitation, titre de la soutenance, titre du projet, noms des étudiantes, date, heure et ville |
| **Le jury** | Pr. Rachid Eddaoudi (président du jury), Pr. Nawal Bourquia (encadrant), Pr. ABDALI Abdelmounaïm (examinateur) |
| **Programme** | 10h00 accueil, 10h15 présentation du projet, 10h45 questions du jury, 11h30 délibération et résultats |
| **Liste des invités** | Cartes des invités avec leur type et leur statut, un champ de recherche et des boutons de filtre |
| **Lieu** | FST Marrakech, Salle des Conférences |
| **Pied de page** | Message de remerciement |

**Informations de la soutenance :** mardi 15 juin 2027 à 10h00, Marrakech.

---

## 3. Fonctionnalités

### Liste des invités
La liste est stockée dans un tableau JavaScript (`invites`) dans `js/app.js`. Chaque invité a :
- un **nom** (par exemple « Ghita A. »),
- un **type** : `ami`, `famille` ou `enseignant`,
- un **statut** : `confirmé` ou `en attente`.

Les invités sont affichés dynamiquement sous forme de cartes Bootstrap.

### Recherche
Le champ de recherche filtre la liste **en direct**, pendant la frappe, sur le **nom** de l'invité (sans tenir compte des majuscules).

### Filtre par type
Quatre boutons permettent d'afficher : **Tous**, **Famille**, **Amis** ou **Enseignants**.

> La recherche et le filtre fonctionnent chacun indépendamment : utiliser l'un réaffiche la liste selon son propre critère.

### Design
- Thème bleu nuit avec touches dorées.
- Image de fond pour l'en-tête (`images/Blue Background with Gold Border.jpg`).
- Police décorative *Parisienne* pour les titres.
- Cartes avec ombre et effet de survol.
- Mise en page responsive grâce à Bootstrap.

---

## 4. Technologies utilisées

- **HTML5** : structure de la page (`index.html`)
- **CSS3** : style personnalisé (`css/style.css`)
- **Bootstrap 5.3.3** : grille, cartes, boutons, listes (chargé par CDN)
- **Google Fonts** : police *Parisienne*
- **JavaScript** : affichage, recherche et filtrage (`js/app.js`)
- **Git et GitHub** : versionnement et travail collaboratif

---

## 5. Structure du projet

```
tp5-collaboration/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── images/
    └── Blue Background with Gold Border.jpg
```

---

## 6. Installation et lancement

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/basma-bahakki/tp5-collaboration.git
   cd tp5-collaboration
   ```
2. Ouvrez `index.html` dans votre navigateur.

Une **connexion internet** est nécessaire pour charger Bootstrap et la police Parisienne.

Option : avec VS Code, l'extension **Live Server** recharge la page automatiquement à chaque modification.

---

## 7. Organisation du travail Git

### Branches
| Branche | Rôle |
|---|---|
| `main` | version stable du projet |
| `dev` | branche d'intégration où les fonctionnalités sont assemblées |
| `feature/base` | structure de base de la page d'invitation |
| `feature/recherche` | champ de recherche des invités |
| `feature/filter` | filtre par type d'invité |
| `feature/design` | mise en forme (en-tête, cartes, fond, pied de page) |

### Déroulement
1. La structure de base est ajoutée sur `feature/base`, puis fusionnée.
2. Chaque fonctionnalité (recherche, filtre, design) est développée sur sa propre branche.
3. Chaque branche est fusionnée dans `dev` ou `main` par une **Pull Request** (huit Pull Requests ont été créées).
4. Un **conflit de fusion** a été créé, puis résolu sur la branche `feature/recherche` (commit « Resolve merge conflict and finalize merge »).

### Commandes utilisées
```bash
git checkout -b feature/nom-de-la-fonctionnalite   # créer une branche
git add .                                          # préparer les modifications
git commit -m "message clair"                      # enregistrer
git push origin feature/nom-de-la-fonctionnalite   # envoyer sur GitHub
git pull origin dev                                # récupérer le travail du binôme
git merge dev                                      # fusionner (peut créer un conflit)
```

---

## 8. Personnaliser l'invitation

- **Textes, noms, date, jury, programme, lieu :** modifiez `index.html`.
- **Invités :** modifiez le tableau `invites` en haut de `js/app.js`. Exemple :
  ```js
  { id: 7, nom: "Nom P.", type: "ami", statut: "confirmé" },
  ```
- **Couleurs et polices :** modifiez `css/style.css`.

---

## 9. Auteurs

- **Basma Bahakki**
- **Hiba LAMSSELAK**

Projet réalisé dans un cadre universitaire, FST Marrakech.
