---
title: 'Une aiguille dans une botte de foin'
publicationDate: '2023-02-25'
modificationDate: '2023-02-25'
language: 'csharp'
---

## Problème

Écrivez une fonction findNeedle() qui prend un tableau rempli de déchets mais contenant une seule "aiguille" (needle).

Si votre fonction trouve l'aiguille, elle doit renvoyer un message (sous forme de chaîne) qui indique : "found needle at position" plus l'indice où elle a trouvé l'aiguille.

### Exemple

```
["foin", "débris", "foin", "foin", "plusDeDébris", "needle", "débrisAléatoires"] -> "found needle at position 5"
```

## Solution

Tout d'abord, nous initialisons la variable `result` avec pour valeur une chaîne de caractère vide.

Ensuite, nous utilisons une boucle `for` pour parcourir chaque élément du tableau `haystack`. Pour chaque élément du tableau, on vérifie si cet élément est différent de `null` et s'il est égal à la chaîne de caractère `needle`.

Si ces deux conditions sont satisfaites, on affecte à la variable `result` une chaîne formatée qui indique la position de l'élément contenant l'aiguille.

Si l'aiguille n'est pas trouvée dans le tableau, la valeur initiale de la variable `result` est renvoyée.

```c#
using System;
public class Kata
{
  public static string FindNeedle(object[] haystack)
  {
    string result = String.Empty;

    for(int i = 0; i < haystack.Length; i++) {
      if (haystack[i] != null && haystack[i].Equals("needle")) {
        result = $"found the needle at position {i}";
      }
    }

    return result;
  }
}
```
