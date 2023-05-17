---
title: 'Inverseur du Tireur de cartes'
publicationDate: '2023-05-17'
modificationDate: '2023-05-17'
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

Cette fois-ci, vous devez écrire une fonction qui prends les cartes tirées en argument et qui retourne le paquet de cartes originel.

Chaque carte est représentée par une chaîne de caractères de deux caractères : la valeur de la carte et sa couleur.

```text
AC 2C 3C 4C 5C 6C 7C 8C 9C TC JC QC KC for the Clubs (Trèfles)
AD 2D 3D 4D 5D 6D 7D 8D 9D TD JD QD KD for the Diamonds (Carreaux)
AH 2H 3H 4H 5H 6H 7H 8H 9H TH JH QH KH for the Hearts (Cœurs)
AS 2S 3S 4S 5S 6S 7S 8S 9S TS JS QS KS for the Spades (Piques)
```

### Exemple

```typescript
const deck = ["KC", "QC", "KD", "QD", "KH", "QH", "KS", "QS"];

prepareDeck(deck); // ["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"];
```

## Solution

Nous allons utiliser un tableau `deck` pour représenter le paquet de cartes originel.

Ensuite, nous allons utiliser une boucle `while` pour effectuer la logique inverse du tirage tant que le tirage contient des cartes.

Nous allons utiliser la méthode `Array.pop` pour retirer la dernière carte du paquet et la méthode `Array.unshift` pour ajouter cette carte au début du paquet.

Nous allons ensuite insérer la dernière carte du tirage récupérée au début du paquet avec les mêmes méthodes `Array.pop` et `Array.unshift`.

Lorsque le tirage est vide, nous retournons le paquet.

```typescript
export const prepareDeck = (drawnCards: string[]): string[] => {
 const deck: string[] = [];
  
  while (drawnCards.length > 0) {     
    const endCard = deck.pop();
    if(endCard) {
      deck.unshift(endCard);
    }
    
    const drawnCard = drawnCards.pop();
    if (drawnCard) {
      deck.unshift(drawnCard);
    }
  }
  
 return deck;
};
```
