---
title: 'Reverse ou rotate ?'
publicationDate: '2023-02-15'
modificationDate: '2023-02-15'
language: 'php'
---

## Problème

Il faut écrire une fonction qui prends en argument une chaîne de caractère `$s` composé de numéros et un nombre entier `$sz` correspondant à la longueur des éléments.
Cette fonction doit décomposer cette chaîne de caractère en plusieurs éléments ("chunks") de longueur passée en argument.

Si le dernier morceau est inférieur à la longueur passée en argument, il doit être retiré.

Pour chaque chunk, calculer la somme des chiffres qui le compose.
Si ce résultat est pair, on reverse le chunk. Sinon on le rotate d'une position vers la gauche.

_Par reverse, on entends que le chiffre en première position se retrouve en dernière position, le second en avant-dernier, etc._

_Par rotate, on entends que le chiffre en première position se retrouve en dernière position, et tous les autres chiffres voient leur position avancer de 1 (le second devient premier, le troisième devient second, etc.)_

Une fois tous les chunks transformés, la fonction doit retourner une nouvelle chaîne de caractère représentant ceux-ci.

Si `$sz` est inférieur ou égal à 0, ou si `$str` est vide, ou encore si `$sz` est plus grand que la longueur de la chaîne de caractère, alors la fonction doit retourner une chaîne de caractère vide `""`.

## Solution

Pour commencer, implémentons les vérifications de valeurs dans un `if` avec plusieurs opérateurs OR `||`.

Pour découper la châine de caractère en retournant un tableau, la méthode `str_split()` est parfaite.

La méthode `end()` permet de retourner le dernier élément d'un tableau, on vérifie sa longueur et, s'il est inférieur à `$sz`, on le retire du tableau.

Nous avons maintenant nos chunks de chiffres. Afin de déterminer le comportement à adopter, nous devons d'abord en calculer la somme.

Pour cela, nous avons besoin d'un tableau contenant les chiffres de notre chunk, appelons-le `$digits`.
Grâce à la méthode `array_reduce()`, nous pouvons facilement en calculer la somme `$sum`.

Si cette valeur est divisible par 2, qu'elle est pair, nous appelons la méthode `array_reverse()`.

Sinon, nous ajoutons le premier élément en fin de tableau en appelant la méthode `array_shift()` qui renvoie le premier élément du tableau tout en le retirant.

Enfin, nous ajoutons notre chunk réorganisé au tableau de résultat sous forme de chaîne de caractère grâce à la méthode `implode()`.

Puis, nous renvoyons le tableau de résultat sous forme de chaîne de caractère grâce à la même méthode.

```php
function revRot($s, $sz)
{
  if ($sz <= 0 || $s === '' || $sz > strlen($s)) {
    return '';
  }
  $result = [];
  $chunks = str_split($s, $sz);

  if (strlen(end($chunks)) < $sz) {
    array_pop($chunks);
  }
  foreach ($chunks as $chunk) {
    $digits = str_split($chunk);
    $sum = array_reduce($digits, function ($acc, $curr) {
      return $acc + $curr;
    });

    if ($sum % 2 === 0) {
      $digits = array_reverse($digits);
    } else {
      $digits[] = array_shift($digits);
    }

    $result[] = implode($digits);
  }

  return implode($result);
}
```
