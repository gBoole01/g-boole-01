---
title: 'Plus petit nombre'
publicationDate: '2023-03-02'
modificationDate: '2023-03-02'
language: 'csharp'
---

## Problème

Rédigez une fonction prenant un tableau de nombres en argument, cette fonction doit renvoyer le plus petit nombre du tableau.

## Solution

Pour commencer, nous initialisons la variable `result` et lui assignons la valeur du premier nombre du tableau.

Ensuite nous créons une boucle `for`, puis itérons sur chaque élément du tableau. Pour chaque élément, nous vérifions si sa valeur est inférieure à `result`.

Si oui, nous assignons cette nouvelle valeur à `result`. Si non, nous passons à l'itération suivante.

Enfin, nous renvoyons `result`.

```c#
public class Kata
{
    public static int FindSmallestInt(int[] args)
    {
      int result = args[0];

      for (int i = 0; i < args.Length; i++) {
        if (args[i] < result) {
          result = args[i];
        }
      }

      return result;
    }
}
```
