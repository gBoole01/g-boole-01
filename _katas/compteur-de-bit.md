---
title: 'Compteur de bit'
publicationDate: '2023-02-07'
modificationDate: '2023-02-07'
language: 'typescript'
---

## Problème

Rédigez une fonction qui prends un nombre entier en argument, et retour le nombre de bit égal à `1` dans la représentation binaire de ce nombre.

_L'argument de cette fonction est un nombre non-négatif_

## Solution

Nous allons utiliser la méthode `toString()` en lui passant comme argument `2`. Il s'agit du radix. Le nombre va ếtre convertit sur une base 2.

Ensuite, nous appliquons les méthodes `split()` afin de convertir cette chaîne de caractère en tableau et `forEach()` afin d'effectuer une opération pour chaque bit.

On vérifie la valeur du bit actuel, et, si ce dernier est égal à `1`, on augmente le compteur de 1.

_Nous aurions également pu appliquer la méthode `replace()` en lui passant une Regex permettant de remplacer les `0` par des `""`._

_Nous aurions également pu utiliser la méthode `filter()` pour retirer les bits étant différents de `1` afin de retourner la longueur de l'array directement._

```typescript
export function countBits(n: number): number {
  let result = 0

  n.toString(2)
    .split('')
    .forEach((bit) => {
      if (bit === '1') result += 1
    })

  return result
}
```
