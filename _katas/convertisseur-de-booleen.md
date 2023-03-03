---
title: 'Convertisseur de booléen'
publicationDate: '2023-03-03'
modificationDate: '2023-03-03'
language: 'csharp'
---

## Problème

Rédigez une simple fonction prenant un booléen en argument.

Si la valeur est `true`, la fonction doit renvoyer `"Yes"`, sinon `"No"`.

## Solution

Cette petite fonction peut être rédigé en une ligne.

Nous allons utiliser une expression ternaire dans le retour de la fonction.
De cette manière, notre fonction sera compacte et claire.

```c#
using System;
using System.Linq;

public static class Kata
{
  public static string boolToWord(bool word)
  {
    return word == true ? "Yes" : "No";
  }
}
```
