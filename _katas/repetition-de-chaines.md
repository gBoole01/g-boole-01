---
title: 'Répétition de chaînes'
publicationDate: '2023-02-27'
modificationDate: '2023-02-27'
language: 'csharp'
---

## Problème

Rédigez une fonction qui accepte un entier `n` et une chaîne de caractères `s` comme paramètres et renvoie une chaîne de caractères qui répète `s` exactement `n` fois.

## Solution

Pour commencer, nous initialisons une variable de type string nommée `result` avec une chaîne de caractères vide.

Nous utilisons une boucle "for" pour répéter `n` fois la chaîne de caractères `s` et ajouter le résultat à la variable `result`.

À la fin de la boucle, la méthode renvoie la variable "result" qui contient la chaîne de caractères "s" répétée "n" fois.

```c#
using System;

namespace Solution
{
  public static class Program
  {
    public static string RepeatStr(int n, string s)
    {
      string result = String.Empty;

      for (int i = 0; i < n; i++) {
        result += s;
      }

      return result;
    }
  }
}
```
