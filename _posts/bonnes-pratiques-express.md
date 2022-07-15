---
title: "Les bonnes pratiques d'une API REST Express"
publicationDate: '2022-07-15'
modificationDate: '2022-07-15'
duration: '10'
image: 'bonnes-pratiques-express.png'
excerpt: "Express est aujourd'hui l'une des frameworks server-side JavaScript le plus utilisé. Découvrons comment maintenir de bonnes pratiques de développement dans une API REST Express"
---

Express est aujourd'hui l'une des frameworks server-side JavaScript le plus utilisé.<br/>
<br/>
Ce qui rend Express si populaire, c'est **son minimalisme et sa flexibilité**. Cet avantage est aussi son principal inconvénient, en effet, sa souplesse d'utilisation tend à laisser beaucoup de liberté lors des développements.<br/>
C'est pour cette raison qu'il est essentiel de suivre un ensemble de bonnes pratiques.

## Concepts clés

Définissons tout d'abord les concepts qui nous guideront dans nos décisions futures :

- **Séparation des responsabilités ("separation of concerns") :** Nous suivrons ce principe car il établit que nous devons organiser nos fonctions, objets, et modules de manière à ce que chacun d'entre eux effectue une tâche unique et bien défnie. Cela garantira un code lisible et simple à maintenir.

- **Architecture modulaire ("modular architecture") :** Le principe d'architecture modulaire est très simple. Il indique que le code de l'application doit être composé de manière découplée et facile à comprendre. Cela permet une grande flexibilité et réusabilité des componsants de l'applications.

## Structure

Avant de se lancer dans la rédaction de milliers de ligne de code, il faut tout d'abord penser à la manière dont seront structurés les éléments de l'application.<br/>
Il existe de nombreux patrons architecturaux ("architectural patterns") permettant une structuration robuste mais nous ne reviendrons pas sur ceux-ci. Sachez seulement qu'il existe de nombreux exemples sur Internet que je vous invite à découvrir si celà vous intéresse.<br/>
<br/>
Afin de construire une application évolutive ("scalable") et toutefois simple, nous opterons, dans la plupart des cas, pour une architecture à trois couches ("Three-layer architecture").

## Architecture à 3 couches

### Couche "Web"

### Couche "Service"

### Couche "Accès aux Données"

## Séparation de l'Application et du Serveur
