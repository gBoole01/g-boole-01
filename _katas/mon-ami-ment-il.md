---
title: 'Mon ami ment-il ?'
publicationDate: '2023-02-14'
modificationDate: '2023-02-14'
language: 'php'
---

## Problème

Mon ami choisit une suite de nombres de 1 à n (où n est un entier naturel).
Dans cette suite, il choisit 2 nombres, a et b.
Il prétends que le produit de a et b est égal à la somme de tous les nombres de la séquence, excepté a et b.

Pour tester sa théorie, écrivez une fonction qui, pour un nombre n, retourne les nombres a et b prouvant sa théorie.

La fonction prends en argument: n (n est toujours plus grand que 0) et retourne un tableau sous la forme `[[a, b], ...]` où tous les nombres a et b peuvent être retirés et affirmer sa théorie.

`[(a, b), ...]` doivent être triés par ordre croisant de "a".

La fonction doit retourner un tableau vide si il n'existe pas de nombres (a, b) vérifiant la théorie de mon ami.

## Solution

Pour commencer, nous rédigeons la fonction `sum` qui prends un entier `$n` et retourne la somme de tous les entiers naturels compris entre 0 et n.

Ensuite nous initialisons les variables necessaires à l'écriture de la fonction `removeNb`.

Puis nous créons une boucle `for` qui prends `$b` comme itérateur auquel on assigne la valeur de `$n`, puis on exécute la boucle de `$b` à `0` en décrémentant à chaque itération.

_Nous devons construire la boucle dans ce sens car on va determiner la valeur de a qui sera toujours inférieur à b dans les premières itérations. Ainsi nous n'aurons pas besoin de trier le tableau par la suite._

Il s'agit ensuite de déterminer la valeur de `$a` à partir de la valeur de `$b`. J'ai laissé cette partie en commentaire de la fonction.

Nous vérifions si la valeur de \$a est bien un entier compris dans la suite "0->n", puis ajoutons les valeurs `$a` et `$b` au tableau de retour.

```php
function sum($n)
{
  $arr = [];
  for ($i = 0; $i <= $n; $i++) {
    $arr[] = $i;
  }
  return array_reduce($arr, function ($acc, $nb) {
    return $acc + $nb;
  });
}

function removeNb($n)
{
  $a = 0;
  $b = 0;
  $result = [];
  $sum = sum($n);

  for ($b = $n; $b > 0; $b--) {
    /**
     * Equation solving =>
     * |  $a * $b = $sum - $a - $b
     * |  $a * $b + $a = $sum - $b
     * |  ($a * $b) + ($a * 1) = $sum - $b
     * |  $a * ($b + 1) = $sum - $b
     * |  $a = ($sum - $b) / ($b + 1)
     */
    $a = ($sum - $b) / ($b + 1);
    if (is_integer($a) && $a < $n) {
      $result[] = [$a, $b];
    }
  }

  return $result;
}
```
