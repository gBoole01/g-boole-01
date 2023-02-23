---
title: 'Multiples de X'
publicationDate: '2023-02-23'
modificationDate: '2023-02-23'
language: 'csharp'
---

## Problème

Rédigez une fonction avec deux arguments qui renverra un tableau des n premiers multiples de x.

Le nombre donné et le nombre de fois à compter seront toujours des nombres positifs supérieurs à 0.

La fonction doit renvoyez les résultats sous forme de tableau.

## Solution

Pour commencer, nous initialisons le tabeleau `z`, il contiendra le résultat de la fonction.
Ensuite, nous utilisons une boucle for, nous permettant d'itérer `n` fois dessus.
Pour chaque itération, nous ajoutons à notre tableau `z`, la valeur de `x` multiplié par `i + 1`.

Nous retournons ensuite le tableau `z`.

```c#
using System;

public static class Kata
{
  public static int[] CountBy(int x, int n)
  {
    int[] z = new int[n];

    for (int i = 0; i < n; i++) {
      z[i] = x * (i + 1);
    }

    return z;
  }
}
```
