---
title: 'Détecteur de nombres narcissiques'
publicationDate: '2023-05-13'
modificationDate: '2023-05-13'
language: 'typescript'
---

## Problème

_Un nombre narcissique (ou nombre de Armstrong) est un nombre qui est égal à la somme de ses propres chiffres, chacun élevé à la puissance du nombre de chiffres dans une base donnée._

&nbsp;

&nbsp;

Rédigez une fonction qui prends un nombre et qui retourne `true` si ce nombre est narcissique, `false` le cas échéant.

La detection d'erreurs pour les chaînes de caractères ou autres entrées invalides n'est pas requise, seuls des entiers positifs non nuls valides seront passés en paramètre de la fonction.

### Exemple

Par exemple, prenons le nombre 153 (3 chiffres), qui est narcissique :

```text
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
```

et 1652 (4 chiffres), qui ne l'est pas :

```text
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
```

Alors, votre fonction renverra :

```typescript
narcissistic(153) // true
narcissistic(1652) // false
```

## Solution

Nous allons commencer par convertir le nombre en chaîne de caractères grâce à la méthode `Number.toString`. Ensuite, nous allons séparer chaque chiffre de la chaîne de caractères grâce à la méthode `String.split`.

Nous allons ensuite itérer sur chaque chiffre de la chaîne de caractères grâce à la méthode `Array.map`. Nous allons convertir chaque chiffre en nombre grâce à la fonction `parseInt`.

Notre constante `arr` contient maintenant un tableau de chiffres. Nous allons donc déterminer si l'argument `value` est narcissqiue grâce à la méthode `Array.reduce`.

Pour cela, nous allons élever chaque chiffre à la puissance du nombre de chiffres de `value` grâce à l'opérateur `**` et à la propriété `Array.length`.

Si le résultat de cette opération est différent du nombre passé en paramètre, nous retournons `false`. Sinon, nous retournons `true`.

```typescript
export function narcissistic(value: number): boolean {
  const arr = value.toString().split('').map(n => parseInt(n, 10));
  
  const result = arr.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue**arr.length)
  }, 0)
  
  if (result !== value) return false;
  
  return true;
}
```
