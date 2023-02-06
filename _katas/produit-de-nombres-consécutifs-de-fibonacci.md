---
title: 'Produit de Nombres consécutifs de Fibonacci'
publicationDate: '2023-02-06'
modificationDate: '2023-02-06'
language: 'typescript'
---

## Problème

Pour un nombre donné, retournez un array comprenant les deux nombres consécutifs de la suite de Fibonacci qui, une fois multiplié, retourne le nombre donné en argument.

Si `F(n) * F(n+1)` n'est pas égal au nombre donné en argument, l'array retourné comprendra `false`, sinon `true` comme suit:

```
[F(n), F(n + 1), true]
```

Ou

```
[F(n), F(n + 1), false]
```

F(n) étant le plus petit nombre équivalent à `F(n) * F(n+1) > prod`

## Solution

Nous allons construire une boucle while qui va tester, pour chaque occurence de la suite de Fibonacci, si le produit de ces deux nombres est inférieur à l'argument.

Tant que c'est le cas, nous avançons dans la suite de Fibonacci.

Lorsque ce n'est plus le cas, c'est que nous sommes arrivés au bon endroit de la suite et nous pouvons renvoyer notre array.

```typescript
export const productFib = (prod: number): [number, number, boolean] => {
  let n = 0
  let nPlusOne = 1

  while (n * nPlusOne < prod) {
    nPlusOne += n
    n = nPlusOne - n
  }

  return [n, nPlusOne, n * nPlusOne === prod]
}
```
