# Bioty Corner - Gestion de Produits et Commandes

Bioty Corner est une application web de gestion de produits et de commandes conçue pour les entreprises qui souhaitent gérer leur inventaire, leurs commandes et leurs utilisateurs de manière efficace. L'application offre une interface utilisateur intuitive et des fonctionnalités robustes pour simplifier la gestion des produits, des commandes et des utilisateurs.

## Fonctionnalités Principales

### 1. **Gestion des Produits**
   - **Ajout de Produits** : Les utilisateurs peuvent ajouter de nouveaux produits avec des détails tels que le titre, la description, la catégorie, le prix, et une image.
   - **Modification de Produits** : Les produits existants peuvent être modifiés pour mettre à jour leurs informations.
   - **Suppression de Produits** : Les produits peuvent être supprimés de l'inventaire.
   - **Affichage des Produits** : Les produits sont affichés dans un tableau avec des options de recherche et de filtrage.

### 2. **Gestion des Commandes**
   - **Création de Commandes** : Les utilisateurs peuvent passer des commandes en ajoutant des produits à leur panier.
   - **Suivi des Commandes** : Les commandes peuvent être suivies avec des statuts tels que "En attente", "En cours", et "Terminée".
   - **Archivage des Commandes** : Les commandes terminées peuvent être archivées pour un accès ultérieur.
   - **Détails de Facturation** : Les informations de facturation sont enregistrées pour chaque commande.

### 3. **Gestion des Utilisateurs**
   - **Ajout d'Utilisateurs** : Les utilisateurs peuvent être ajoutés avec des informations telles que le nom, l'email, le téléphone, l'adresse, et le code postal.
   - **Modification d'Utilisateurs** : Les informations des utilisateurs existants peuvent être mises à jour.
   - **Suppression d'Utilisateurs** : Les utilisateurs peuvent être supprimés du système.

### 4. **Interface Utilisateur**
   - **Tableau de Bord** : Un tableau de bord centralisé affiche des indicateurs clés tels que le nombre total de commandes, d'utilisateurs, de produits, et le chiffre d'affaires total.
   - **Barre de Recherche** : Une barre de recherche permet de trouver rapidement des produits, des commandes ou des utilisateurs.
   - **Mode Sombre** : L'application propose un mode sombre pour un confort visuel accru.

### 5. **Fonctionnalités Supplémentaires**
   - **Exportation de Données** : Les données peuvent être exportées pour une analyse externe.
   - **Gestion des Catégories et des Tags** : Les produits peuvent être organisés par catégories et tags pour une meilleure gestion.

## APIs Utilisées

- **LocalStorage** : L'application utilise le `localStorage` du navigateur pour stocker les données des produits, des commandes et des utilisateurs. Cela permet une gestion persistante des données sans avoir besoin d'une base de données externe.
- **Chart.js** : La bibliothèque Chart.js est utilisée pour afficher des graphiques interactifs sur le tableau de bord, tels que les ventes au fil du temps et la répartition des catégories de produits.

## Étapes pour Exécuter le Projet

### 1. **Télécharger le Projet**
   - Clonez le dépôt GitHub ou téléchargez le projet sous forme de fichier ZIP.

### 2. **Ouvrir le Projet**
   - Ouvrez le dossier du projet dans votre éditeur de code préféré (par exemple, Visual Studio Code).

### 3. **Lancer le Serveur Local**
   - Si vous utilisez Visual Studio Code, vous pouvez installer l'extension **Live Server** pour lancer un serveur local.
   - Cliquez avec le bouton droit sur le fichier `index.html` et sélectionnez **Open with Live Server**.

### 4. **Accéder à l'Application**
   - Une fois le serveur local lancé, ouvrez votre navigateur et accédez à l'application via l'URL suivante : `http://127.0.0.1:5500/index.html`.

### 5. **Connexion**
   - Utilisez les identifiants suivants pour vous connecter :
     - **Nom d'utilisateur** : `admin`
     - **Mot de passe** : `admin123`

### 6. **Explorer les Fonctionnalités**
   - Une fois connecté, vous pouvez explorer les différentes fonctionnalités de l'application, telles que la gestion des produits, des commandes et des utilisateurs.

### 7. **Modifier et Personnaliser**
   - Vous pouvez modifier le code source pour personnaliser l'application selon vos besoins. Par exemple, vous pouvez ajouter de nouvelles catégories de produits ou modifier les graphiques du tableau de bord.

## Conclusion

Bioty Corner est une solution complète pour la gestion des produits, des commandes et des utilisateurs. Avec son interface utilisateur intuitive et ses fonctionnalités robustes, elle est idéale pour les entreprises qui cherchent à optimiser leur gestion d'inventaire et de commandes. N'hésitez pas à explorer et à personnaliser l'application pour répondre à vos besoins spécifiques.