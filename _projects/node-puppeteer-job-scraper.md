---
title: 'Job Scraper'
publicationDate: '2023-02-07'
modificationDate: '2023-02-07'
language: 'javascript'
tools: ['Node.js', 'Puppeteer']
status: 'Actif'
repositoryUrl: 'https://github.com/gBoole01/node-puppeteer-job-scraper'
---

## Langages utilisés

J'utilise JavaScript, ce projet n'a pas pour vocation d'évoluer grandement.

## Outils utilisés

- Node.js: Runtime JavaScript pour le Serveur
- Puppeteer: Librairie Node qui permet de contrôler une instance du navigateur Chrome

## Besoin utilisateur

L'utilisateur souhaite automatiser sa recherche d'emploi.

Pour ce faire, le Job Scraper va récupérer le contenu des offres parus sur différents sites et les centraliser en un point unique.

## Fonctionnalités implémentées

1. Lorsque le Job Scraper démarre, il se rends sur Indeed et parcours toutes les offres "Développeur Web" à Bordeaux et en télétravail en France paru dans les 7 jours précédent.
2. Une fois les données collectées, un fichier JSON est généré comportant la totalité des offres.

## Fonctionnalités à implémenter

1. Ajouter une persistance des données afin de les servir à un Front-End
1. Ajouter d'autres sources d'offres d'emploi
1. Développer un Front-End pour consulter les offres d'emplois
