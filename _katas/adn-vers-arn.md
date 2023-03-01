---
title: 'ADN vers ARN'
publicationDate: '2023-03-01'
modificationDate: '2023-03-01'
language: 'csharp'
---

## Problème

L'acide désoxyribonucléique, l'ADN, est la principale molécule de stockage d'informations dans les systèmes biologiques. Il est composé de quatre bases nucléiques Guanine ('G'), Cytosine ('C'), Adénine ('A') et Thymine ('T').

L'acide ribonucléique, l'ARN, est la principale molécule messagère dans les cellules. L'ARN diffère légèrement de l'ADN dans sa structure chimique et ne contient pas de Thymine. Dans l'ARN, la Thymine est remplacée par une autre base nucléique, l'Uracile ('U').

Créez une fonction qui traduit une chaîne d'ADN donnée en ARN.

Par exemple :

`"GCAT" => "GCAU"`

La chaîne d'entrée peut avoir une longueur arbitraire - en particulier, elle peut être vide. Toutes les entrées sont garanties valides, c'est-à-dire que chaque chaîne d'entrée ne sera jamais composée que de 'G', 'C', 'A' et/ou 'T'.

## Solution

Nous allons utiliser la méthode `replace()` afin de remplacer toutes les occurences de `T` en `U`.

En général, c'est une mauvaise pratique de retourner un argument de fonction transformé. De plus, en C#, les chaînes de caractères sont immutables.

Nous allons donc initialiser une nouvelle variable `arn` et c'est cette dernière que nous retournons.

```c#
namespace Converter {
  public class Converter
  {
    public string dnaToRna(string dna)
    {
      string rna = dna.Replace('T', 'U');
      return rna;
    }
  }
}
```
