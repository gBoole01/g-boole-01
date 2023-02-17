---
title: 'Poids pour poids'
publicationDate: '2023-02-17'
modificationDate: '2023-02-17'
language: 'php'
---

## Problème

Mon ami Jean et moi sommes membres du "Fat to Fit Club (FFC)". Jean est inquiet car chaque mois une liste avec les poids des membres est publiée et chaque mois il est le dernier sur la liste, ce qui signifie qu'il est le plus lourd.

Je suis celui qui établit la liste, donc je lui ai dit: "Ne t'inquiète plus, je vais modifier l'ordre de la liste". Il a été décidé d'attribuer un "poids" aux nombres. Le poids d'un nombre sera désormais la somme de ses chiffres.

Par exemple, 99 aura un "poids" de 18, 100 aura un "poids" de 1, donc dans la liste, 100 viendra avant 99.

Étant donné une chaîne de caractères avec les poids des membres de FFC dans l'ordre normal, pouvez-vous donner cette chaîne triée par "poids" de ces nombres?

Lorsque deux nombres ont le même "poids", nous les classerons comme s'il s'agissait de chaînes de caractères et non des nombres:

180 sera avant 90 car, bien que leurs poids soient identiques (9), en tant que chaîne de caractères il se situe avant.

Tous les nombres de la liste sont positifs et la liste peut être vide.

### Exemples:

```bash
"56 65 74 100 99 68 86 180 90" une fois trié par poids de poids renvoie:

"100 180 90 56 65 74 68 86 99"
```

## Solution

Ma philosophie de développement est de toujours écrire le code que l'on souhaite avoir, cela permet de ne pas s'éparpiller et de rester dans le flow.

Je rédige donc ma fonction `orderWeight()`. J'appelle la méthode `usort()` avec, comme second argument, le nom de la fonction que je souhaite avoir `sortByNumberWeight`.

Je passe maintenant à la rédaction de la fonction `sortByNumberWeight()`.
Je commence par définir la somme des chiffres composant les poids des membres du club. J'appelle une fonction `sumOfDigits` que je souhaite avoir et qui n'est pas encore présente.

Ensuite, si les sommes de `$a` et `$b` sont égales, on appelle la méthode `strcmp()` qui renvoie `-1` si le second argument est plus petit que le premier selon l'ordre alphanumérique ; `0` si les deux arguments sont égaux ; `1` si le second argument est est plus grand que le premier.

Sinon, on renvoie `1` lorsque la somme de `$a` est plus grande que la somme de `$b` et `-1` dans le cas contraire.

Enfin, nous passons à la rédaction de la fonction `sumOfDigits()`, il s'agit d'une fonction très simple qui consiste à séparer le `$nb` passé en argument en tableau composé des chiffres du nombres.

Puis on appelle la méthode `array_reduce()` sur ce tableau et une fonction 'callback' qui additione chaque élément du tableau. On retourne ce résultat.

_Nous aurions pu utiliser la méthode PHP `array_sum`, qui produit le même résultat._

```php
function sumOfDigits($nb)
{
  $digits = str_split($nb);
  return array_reduce($digits, function ($acc, $curr) {
    return $acc + $curr;
  });
}

function sortByNumberWeight($a, $b)
{
  $sumA = sumOfDigits($a);
  $sumB = sumOfDigits($b);
  if ($sumA === $sumB) {
    return strcmp($a, $b);
  }
  return $sumA > $sumB ? 1 : -1;
}

function orderWeight($str)
{
  $nums = explode(' ', $str);
  usort($nums, 'sortByNumberWeight');
  return implode(' ', $nums);
}
```
