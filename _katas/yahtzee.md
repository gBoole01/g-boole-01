---
title: "Yahtzee"
publicationDate: "2023-03-13"
modificationDate: "2023-03-13"
language: "csharp"
---

## Problème

Le Yahtzee est un jeu de dés joué avec cinq dés à six faces. Rédigez une fonction qui prends en argument un tableau contenant les valeurs des dés et qui renverra le score du lancer.

-   Trois 1 => 1000 points
-   Trois 6 => 600 points
-   Trois 5 => 500 points
-   Trois 4 => 400 points
-   Trois 3 => 300 points
-   Trois 2 => 200 points
-   Un seul 1 => 100 points
-   Un seul 5 => 50 points

Un seul dé peut être compté une seule fois à chaque lancer. Par exemple, un "5" donné ne peut compter que comme faisant partie d'un triple (contribuant aux 500 points) ou comme 50 points simples, mais pas les deux en même temps lors du même lancer.

### Exemple

```bash
Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
```

## Solution

Nous commençons par initialiser un tableau `counts` de six éléments ayant pour valeur `0`, il va nous permettre pour compter le nombre de dés de chaque valeur.

Ensuite, nous utilisons une boucle `foreach` afin de parcourir le tableau `dice` et incrémenter le compteur correspondant dans le tableau `counts` pour chaque valeur de dé.

Une fois que celà est fait, nous utilisons une boucle `for` pour parcourir les six éléments du tableau `counts` et ajouter les points correspondants au score si au moins trois dés ont la même valeur.

Si c'est le cas, nous ajoutons `(i+1) * 100` points au score (où i est l'indice de l'élément dans le tableau `counts`) sauf s'il s'agit d'un triple `1` auquel cas nous ajoutons `1000` points. Puis, nous soustrayons `3` de la valeur de l'élément pour indiquer que ces dés ont déjà été pris en compte.

_(`i+1` car le compteur de 1 se situe à l'index 0 de l'array, le 2 à l'index 1, etc.)_

Finalement, nous ajoutons les points pour les dés restants en vérifiant s'il y a des 1 ou des 5. Pour cela, nous multiplions par `100` le nombre de `1` restant et par `50` le nombre de `5` restants.

Puis nous retournons `result`.

```c#
using System;

public static class Kata
{
  public static int Score(int[] dice) {
    int result = 0;

    int[] counts = new int[6];
    foreach (int roll in dice)
    {
      counts[roll-1] += 1;
    }

    for (int i = 0; i < 6; i++)
    {
      if (counts[i] >= 3)
      {
            if (i == 0)
            {
                result += 1000;
            }
            else
            {
                result += (i+1) * 100;
            }
      }
    }

    result += counts[0] % 3 * 100 + counts[4] % 3 * 50;

    return result;
  }
}
```
