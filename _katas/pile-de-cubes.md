---
title: 'Pile de cubes'
publicationDate: '2023-02-16'
modificationDate: '2023-02-16'
language: 'php'
---

## Problème

Il nous faut construire un bâtiment qui sera une pile de `n` cubes.
Le cube du bas a un volume de n³, le cube situé au dessus a un volume de (n-1)³, et ainsi de suite jusqu'au sommet qui a un volume de 1³.

La fonction prends en argument `m`, elle doit retourner le nombres `n` de cubes qu'il faut construire tel que `n³ + (n+1)³ + (n+2)³ + ... + 1³ = m`.

Si le nombre `n` n'existe pas, alors la fonction renverra `-1`.

### Exemples:

```bash
findNb(1071225) --> 45
findNb(91716553919377) --> -1
```

## Solution

Pour commencer, nous initialisons nos variables `$total` et `$n`.
Ensuite, nous allons mettre en place une boucle `while` qui évaluera si la valeur de `$total` est inférieur au volume `$m`.

Si cette condition se vérifie, nous "ajoutons" un nouveau cube à la construction en incrémentant `$n` de 1 et en ajoutant le volume de ce nouveau cube au total.

Enfin, lorsque le `$total` est supérieur ou égal à `$m`, on stoppe la boucle. On vérifie si le résultat est strictement égal à `$m`, auquel cas on peut retourner `$n` sinon, on retourne `-1`.

```php
function findNb($m)
{
  $total = 0;
  $n = 0;

  while ($total < $m) {
    $n += 1;
    $total += $n ** 3;
  }

  return $total === $m ? $n : -1;
}
```
