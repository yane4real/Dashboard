
# Rapport sur Bioty Corner - Gestion de Produits et Commandes

## Table des Matières

1.  **Introduction**
    
2.  **Contexte et Objectifs**
    
3.  **Fonctionnalités Principales**
    
    -   Gestion des Produits
        
    -   Gestion des Commandes
        
    -   Gestion des Utilisateurs
        
    -   Interface Utilisateur
        
4.  **Technologies Utilisées**
    
    -   APIs et Bibliothèques
        
    -   Stockage des Données
        
5.  **Architecture du Projet**
    
6.  **Étapes pour Exécuter le Projet**
    
7.  **Conclusion**
    

----------

## 1. Introduction

Bioty Corner est une application web conçue pour simplifier la gestion des produits, des commandes et des utilisateurs dans un environnement professionnel. Cette application offre une interface intuitive et des fonctionnalités robustes pour aider les entreprises à gérer leur inventaire, suivre les commandes et organiser les informations des utilisateurs.

----------

## 2. Contexte et Objectifs

### Contexte

Dans un environnement commercial, la gestion des produits et des commandes est une tâche complexe qui nécessite une organisation rigoureuse. Bioty Corner a été développé pour répondre à ce besoin en fournissant une solution centralisée et facile à utiliser.

### Objectifs

-   Simplifier la gestion des produits (ajout, modification, suppression).
    
-   Permettre le suivi des commandes avec des statuts clairs (en attente, en cours, terminée).
    
-   Faciliter la gestion des utilisateurs (ajout, modification, suppression).
    
-   Offrir un tableau de bord interactif pour visualiser les indicateurs clés.
    

----------

## 3. Fonctionnalités Principales

### 3.1 Gestion des Produits

-   **Ajout de Produits**  : Les utilisateurs peuvent ajouter des produits avec des détails tels que le titre, la description, la catégorie, le prix et une image.
    
-   **Modification de Produits**  : Les produits existants peuvent être mis à jour pour refléter les changements dans leur description, prix ou catégorie.
    
-   **Suppression de Produits**  : Les produits peuvent être supprimés de l'inventaire lorsqu'ils ne sont plus disponibles.
    
-   **Affichage des Produits**  : Les produits sont affichés dans un tableau avec des options de recherche et de filtrage pour une navigation facile.
    

### 3.2 Gestion des Commandes

-   **Création de Commandes**  : Les utilisateurs peuvent passer des commandes en ajoutant des produits à leur panier.
    
-   **Suivi des Commandes**  : Les commandes peuvent être suivies avec des statuts tels que "En attente", "En cours" et "Terminée".
    
-   **Archivage des Commandes**  : Les commandes terminées peuvent être archivées pour un accès ultérieur.
    
-   **Détails de Facturation**  : Les informations de facturation sont enregistrées pour chaque commande.
    

### 3.3 Gestion des Utilisateurs

-   **Ajout d'Utilisateurs**  : Les utilisateurs peuvent être ajoutés avec des informations telles que le nom, l'email, le téléphone, l'adresse et le code postal.
    
-   **Modification d'Utilisateurs**  : Les informations des utilisateurs existants peuvent être mises à jour.
    
-   **Suppression d'Utilisateurs**  : Les utilisateurs peuvent être supprimés du système.
    

### 3.4 Interface Utilisateur

-   **Tableau de Bord**  : Un tableau de bord centralisé affiche des indicateurs clés tels que le nombre total de commandes, d'utilisateurs, de produits et le chiffre d'affaires total.
    
-   **Barre de Recherche**  : Une barre de recherche permet de trouver rapidement des produits, des commandes ou des utilisateurs.
    
-   **Mode Sombre**  : L'application propose un mode sombre pour un confort visuel accru.
    

----------

## 4. Technologies Utilisées

### 4.1 APIs et Bibliothèques

-   **LocalStorage**  : Utilisé pour stocker les données des produits, des commandes et des utilisateurs directement dans le navigateur.
    
-   **Chart.js**  : Une bibliothèque JavaScript utilisée pour afficher des graphiques interactifs sur le tableau de bord.
    

### 4.2 Stockage des Données

-   Les données sont stockées localement dans le navigateur grâce à l'API  `localStorage`. Cela permet une gestion persistante des données sans avoir besoin d'une base de données externe.
    

----------

## 5. Architecture du Projet

Le projet est structuré en plusieurs fichiers HTML, CSS et JavaScript :

-   **HTML**  : Structure des pages (index.html, products.html, orders.html, etc.).
    
-   **CSS**  : Styles pour l'interface utilisateur (style.css, addproduct.css, etc.).
    
-   **JavaScript**  : Logique de l'application (script.js, main.js).
    

----------

## 6. Étapes pour Exécuter le Projet

### 6.1 Télécharger le Projet

-   Clonez le dépôt GitHub ou téléchargez le projet sous forme de fichier ZIP.
    

### 6.2 Ouvrir le Projet

-   Ouvrez le dossier du projet dans votre éditeur de code préféré (par exemple, Visual Studio Code).
    

### 6.3 Lancer le Serveur Local

-   Si vous utilisez Visual Studio Code, vous pouvez installer l'extension  **Live Server**  pour lancer un serveur local.
    
-   Cliquez avec le bouton droit sur le fichier  `index.html`  et sélectionnez  **Open with Live Server**.
    

### 6.4 Accéder à l'Application

-   Une fois le serveur local lancé, ouvrez votre navigateur et accédez à l'application via l'URL suivante :  `http://127.0.0.1:5500/index.html`.
    

### 6.5 Connexion

-   Utilisez les identifiants suivants pour vous connecter :
    
    -   **Nom d'utilisateur**  :  `admin`
        
    -   **Mot de passe**  :  `admin123`
        

### 6.6 Explorer les Fonctionnalités

-   Une fois connecté, vous pouvez explorer les différentes fonctionnalités de l'application.
    

----------

## 7. Conclusion

Bioty Corner est une solution complète pour la gestion des produits, des commandes et des utilisateurs. Avec son interface utilisateur intuitive et ses fonctionnalités robustes, elle est idéale pour les entreprises qui cherchent à optimiser leur gestion d'inventaire et de commandes. N'hésitez pas à explorer et à personnaliser l'application pour répondre à vos besoins spécifiques.
