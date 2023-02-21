---
title: 'Problème de Josephus'
publicationDate: '2023-02-21'
modificationDate: '2023-02-21'
language: 'typescript'
---

## Problème

Ce problème tire son nom de l'événement probablement le plus important dans la vie de l'historien antique Josephus : selon son récit, lui et ses 40 soldats ont été piégés dans une grotte par les Romains pendant un siège.

Refusant de se rendre à l'ennemi, ils ont plutôt opté pour le suicide collectif, avec une astuce : ils ont formé un cercle et ont procédé à tuer un homme tous les trois, jusqu'à ce qu'il ne reste plus qu'un seul homme (et il était supposé se tuer lui-même pour mettre fin à l'acte).

Josephus et un autre homme étaient les deux derniers et, comme nous connaissons maintenant tous les détails de l'histoire, vous avez peut-être deviné correctement qu'ils n'ont pas exactement suivi l'idée originale.

Il faut maintenant créer une fonction qui renvoie une permutation de Josephus, elle prends en argument le tableau d'éléments à permuter comme s'ils étaient disposés en cercle et en comptant à chaque fois k places jusqu'à ce qu'il n'en reste plus.

### Exemple

Par exemple avec n = 7 et k = 3, la fonction devrait s'exécuter comme suit:

```
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
```

Le résultat est alors `josephus([1,2,3,4,5,6,7],3) => [3,6,2,7,5,1,4]`.

## Solution

Pour commencer, nous initialisons nos variables : un tableau vide nommé `result` et une variable `index` est initialisée à 0, elle sera utilisée pour suivre la position actuelle dans le cercle.

Ensuite nous créons une boucle while, elle continue à s'exécuter tant qu'il reste des éléments dans le tableau `items`.

À chaque itération de la boucle, l'index est mis à jour pour la position du k-ième élément à éliminer. Cela est fait en utilisant la formule `(k + index - 1) % items.length`. Cela garantit que l'index revient toujours au début du cercle une fois la fin atteinte.

L'élément à la position index calculée est supprimé du tableau items en utilisant la méthode `splice()`, puis poussé à la fin du tableau result en utilisant l'opérateur spread `...`.

La boucle continue jusqu'à ce que tous les éléments aient été éliminés et que le tableau items soit vide.
Enfin, le tableau result est renvoyé, qui contient les éléments dans l'ordre où ils ont été éliminés.

```typescript
export const josephus = (items: any[], k: number): any[] => {
  const result: Array<any> = []
  let index = 0

  while (items.length) {
    index = (k + index - 1) % items.length
    result.push(...items.splice(index, 1))
  }

  return result
}
```
