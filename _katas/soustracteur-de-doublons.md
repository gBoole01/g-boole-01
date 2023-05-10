---
title: 'Soustracteur de doublons'
publicationDate: '2023-05-10'
modificationDate: '2023-05-10'
language: 'typescript'
---

## Problème

Implémentez une fonction de soustraction de doublons entre deux arrays.

Cette fonction doit retirer les éléments de `b` présents dans `a`.
Si une valeur est présente plusieurs fois dans `b`, toutes ces occurences doivent être retirées de `a`.

## Solution

Nous allons filtrer le contenu de l'array `a` grâce à la méthode `Array.filter`.

Cette méthode itère sur l'array sur lequel cette méthode est appelé.
Pour chaque itération, on lui passe une assertion et, si cette dernière s'avère vraie, l'élément est ajouté à l'array de retour.

Nous allons donc vérifier si l'élément courant de `a` n'est pas présent dans `b` grâce à la méthode `Array.includes`.

Nous retournons l'array de retour de `a.filter()` et notre fonction est maintenant opérationnelle.

```typescript
export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((element) => !b.includes(element));
}
```
