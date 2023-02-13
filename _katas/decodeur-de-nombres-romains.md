---
title: 'Décodeur de nombres romains'
publicationDate: '2023-02-13'
modificationDate: '2023-02-13'
language: 'php'
---

## Problème

Ecrivez une fonction qui prend en argument une chaîne de caractère représentant un nombre romain et qui retourne sa valeur numérique. (Le format des chiffres romains n'est pas à valider)

## Solution

Premièrement, il faut initialiser un tableau contenant les équivalences numériques des lettres des chiffres romains.

Nous allons décomposer la chaîne de caractère passé en argument grĉe à la méthode `str_split`.
Ensuite nous utiliserons une boucle `foreach` pour effectuer une opération par caractère.

Pour chaque caractère, on identifie le suivant dans la chaîne de caractères.
Si sa valeur est inférieure, alors il faut soustraire cette valeur au chiffre suivant puis on ajoute le résultat à la valeur totale.

**Attention toutefois à retirer l'élément suivant car il a déja été comptabilisé.**

Si la valeur du caractère suivante est inférieure alors on ajoute tout simplement la valeur actuelle à la valeur totale.

**Attention également à vérifier la présence de l'élément avant d'effectuer ses opérations.**
En effet, le nombre d'itérations de la boucle `foreach` est déterminé à l'initialisation de celle-ci, si un élément est retiré de l'array, la boucle itére malgré cela.

````php
function solution ($roman) {
  $number = 0;
  $romanToDecimal = [
    'I' => 1,
    'V' => 5,
    'X' => 10,
    'L' => 50,
    'C' => 100,
    'D' => 500,
    'M' => 1000,
  ];

  $digits = str_split($roman);
  foreach($digits as $index => $digit) {
    if (!isset($digits[$index])) continue;

    $current = $romanToDecimal[$digits[$index]];
    $next = $romanToDecimal[$digits[$index+1]];
    if ($current < $next) {
      $number += ($next - $current);
      unset($digits[$index+1]);
      continue;
    }

    $number += $romanToDecimal[$digit];
  }

  return $number;
}
```
````
