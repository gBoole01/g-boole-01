---
title: 'Retourne le nombre'
publicationDate: '2023-02-24'
modificationDate: '2023-02-24'
language: 'csharp'
---

## Problème

Étant donné un nombre aléatoire non négatif, vous devez renvoyer les chiffres de ce nombre dans un tableau dans l'ordre inverse.

## Solution

Tout d'abord, nous prenons le nombre entier n passé en argument et le convertissons en une chaîne de caractères à l'aide de la méthode `ToString()`. Cela nous permet de traiter chaque chiffre individuellement.

La chaîne de caractères est ensuite convertie en un tableau de caractères à l'aide de la méthode `ToCharArray()`. Cela nous permet de parcourir chaque caractère du nombre pour extraire chaque chiffre.

Un tableau de longs est initialisé pour stocker les chiffres extraits. Sa taille est définie comme étant la longueur du tableau de caractères.

Nous utilisons ensuite une boucle `for` pour parcourir chaque caractère du tableau de caractères. À chaque itération, nous convertissons le caractère en un nombre entier en soustrayant le code ASCII de '0' (48) de celui du caractère. Cette opération fonctionne car les codes ASCII pour les chiffres '0' à '9' sont consécutifs et en ordre croissant. Nous stockons ensuite le chiffre dans le tableau de longs.

Une fois que tous les chiffres ont été extraits et stockés dans le tableau de longs, nous utilisons la méthode `Array.Reverse()` pour inverser l'ordre des éléments du tableau.

Finalement, nous renvoyons le tableau de longs contenant les chiffres extraits dans l'ordre inverse.

```c#
using System;
using System.Collections.Generic;

namespace Solution
{
  class Digitizer
  {
    public static long[] Digitize(long n)
    {
      string number = n.ToString();
      char[] charArray = number.ToCharArray();
      long[] longArray = new long[charArray.Length];

      for (int i = 0; i < charArray.Length; i++) {
        longArray[i] = charArray[i] - '0';
      }

      Array.Reverse(longArray);
      return longArray;
    }
  }
}
```
