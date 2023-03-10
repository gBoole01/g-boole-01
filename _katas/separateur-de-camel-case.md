---
title: Séparateur de camelcase'
publicationDate: "2023-03-10"
modificationDate: "2023-03-10"
language: "csharp"
---

## Problème

Rédigez une fonction qui prends en argument une chaîne de caractère rédigé en camelcase et qui renvoie une nouvelle chaîne de caractère séparant chaque terme par un espace.

### Exemple

```
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
```

## Solution

Nous commençons par créer un objet `StringBuilder`, il nous permet de construire la nouvelle chaîne de caractères.

Ensuite, nous créons une boucle `foreach` et, pour chaque caractère, nous vérifions s'il s'agit d'une lettre majuscule en utilisant la méthode `Char.IsUpper()`. Si c'est le cas, nous appelons la méthode `Append()` avec comme argument `" "` afin d'insérer un espace.

Ensuite, nous ajoutons le caractère actuellement parcouru par la boucle à notre variable de retour.

Enfin, nous retournons la chaîne de caractères complétée en appelant la méthode `ToString()` depuis notre variable `StringBuilder`.

```c#
using System;
using System.Text;

public class Kata
{
  public static string BreakCamelCase(string str)
  {
    var sb = new StringBuilder();
    foreach (char c in str)
    {
      if (Char.IsUpper(c))
      {
          sb.Append(' ');
      }
      sb.Append(c);
    }

    return sb.ToString();
  }
}
```
