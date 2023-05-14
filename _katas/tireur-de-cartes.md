---
title: 'Tireur de cartes'
publicationDate: '2023-05-14'
modificationDate: '2023-05-14'
language: 'typescript'
---

## Problème

La procédure de tirage de cartes est la suivante :

1. Nous tirons la carte du dessus du paquet.
1. Nous prenons la carte suivante, et nous la plaçons en dessous du paquet.
1. Nous répétons les étapes 1 et 2 jusqu'à ce qu'il n'y ait plus de cartes dans le paquet.

Prenons un petit paquet de quatre cartes — nommées A, B, C, D — comme exemple :

- L'ordre du paquet est A-B-C-D au début, la carte A est au dessus et D en dessous.
- A est tirée. Le paquet est maintenant B-C-D.
- B est placée en dessous du paquet. Le paquet est maintenant C-D-B.
- C est tirée. Le paquet est maintenant D-B.
- D est placée en dessous du paquet. Le paquet est maintenant B-D.
- B est tirée. Le paquet est maintenant D.
- D est tirée.

L'ordre des cartes tirées est A-C-B-D.

&nbsp;

&nbsp;

Écrivez une fonction qui prends un paquet de cartes en argument, et qui retourne les cartes tirées en suivant la procédure.

Chaque carte est représentée par une chaîne de caractères de deux caractères : la valeur de la carte et sa couleur.

```text
AC 2C 3C 4C 5C 6C 7C 8C 9C TC JC QC KC for the Clubs (Trèfles)
AD 2D 3D 4D 5D 6D 7D 8D 9D TD JD QD KD for the Diamonds (Carreaux)
AH 2H 3H 4H 5H 6H 7H 8H 9H TH JH QH KH for the Hearts (Cœurs)
AS 2S 3S 4S 5S 6S 7S 8S 9S TS JS QS KS for the Spades (Piques)
```

### Exemple

```typescript
const deck = ["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"];

draw(deck); // ["KC", "QC", "KD", "QD", "KH", "QH", "KS", "QS"];
```

## Solution

Nous allons utiliser un tableau `drawnCards` pour représenter les cartes tirées.

Ensuite, nous allons utiliser une boucle `while` pour effectuer la logique de tirage tant que le paquet contient des cartes.

Nous allons utiliser la méthode `Array.shift` pour retirer les deux premières cartes du paquet. La première carte sera ajoutée au tableau `drawnCards` et stockée dans la variable `drawnCard`. La deuxième carte sera stockée dans la variable `endCard`, nous la remettrons à la fin du paquet ensuite.

Typescript nous indique que la méthode `Array.shift` peut renvoyer un `string` ou un `undefined`. La méthode `Array.push` quant à elle n'acepte qu'un `string` en argument.

Nous devons donc vérifier que les variables `drawnCard` et `endCard` ne sont pas `undefined` avant de les utiliser.

Si `drawnCard` n'est pas `undefined`, nous l'ajoutons à la fin du tableau `drawnCards` avec la méthode `Array.push` Et nous faisons la même chose avec `endCard` dans le tableau `deck`.

Nous retournons le tableau `drawnCards` une fois que le paquet est vide.

```typescript
export const draw = (deck: string[]): string[] => {
 const drawnCards: string[] = [];
  
  while (deck.length > 0) {
    const drawnCard = deck.shift();
    const endCard = deck.shift();
    
    if (drawnCard) {
      drawnCards.push(drawnCard);
    }
    if (endCard) {
      deck.push(endCard);
    }
  }

 return drawnCards;
};
```
