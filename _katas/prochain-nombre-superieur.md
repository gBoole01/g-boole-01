---
title: 'Prochain nombre supérieur'
publicationDate: '2023-05-31'
modificationDate: '2023-05-31'
language: 'typescript'
---

## Problème

Rédigez une fonction qui prends un nombre entier positif en argument et qui retourne le prochain nombre supérieur qui peut être formé en réarrangeant ses chiffres.

### Exemple

```text
12 ==> 21
513 ==> 531
2017 ==> 2071
```

Si le nombre peut être réarrangé pour former un nombre plus grand, retournez `-1`.

```text
59 ==> -1
111 ==> -1
531 ==> -1
```

## Solution

Le but est d'identifier le chiffre le plus à droite qui est plus petit que son chiffre adjacent, puis de trouver le plus petit chiffre plus grand que ce chiffre et de les échanger.

Pour cela, nous allons convertir le nombre en chaîne de caractères et le diviser en un tableau de chiffres individuels à l'aide de `Array.from(n.toString()).map(Number)`.

&nbsp;

Nous initialisons une variable `i` à l'avant-dernier index du tableau de chiffres (`digits.length - 2`). Nous allons comparer les chiffres à `i` et `i + 1` pour trouver la première paire de chiffres qui viole l'ordre décroissant.

Nous pouvons maintenant utiliser une boucle `while` qui s'exécute tant que `i` est supérieur ou égal à `0` et que le chiffre à la position `i` est supérieur ou égal au chiffre à la position `i + 1`. Cette boucle trouve le chiffre le plus à droite étant plus petit que son chiffre adjacent.

Si `i` devient `-1`, cela signifie que les chiffres sont dans l'ordre décroissant et qu'il n'y a pas de nombre plus grand qui peut être formé. Dans ce cas, la fonction retourne `-1`.

&nbsp;

Ensuite, nous initialisons une variable `j` à l'index le plus à droite du tableau de chiffres (`digits.length - 1`). Cette variable sera utilisée pour trouver le plus petit chiffre plus grand que le chiffre à l'index `i`.

Nous pouvons maintenant utiliser une nouvelle boucle `while` qui s'exécute tant que le chiffre à la position `j` est inférieur ou égal au chiffre à la position `i`. Cette boucle trouve le plus petit chiffre plus grand que le chiffre à la position `i`.

&nbsp;

Il suffit d'échanger les chiffres à la position `i` et `j` en utilisant l'assignation par décomposition : `[digits[i], digits[j]] = [digits[j], digits[i]]`.

A présent, nous séparons le tableau de chiffre depuis l'index `i + 1` jusqu'à la fin du tableau en utilisant `splice(i + 1)`. Nous inverserons le tableau résultant en utilisant `reverse()` et nous assignerons le résultat à la variable `reversed`. Cette étape garantit que les chiffres après l'index `i` sont dans l'ordre croissant.

&nbsp;

Enfin, nous pouvons ajouter les éléments du tableau inversé au tableau de chiffres en utilisant `push(...reversed)`. Puis pour renvoyer un nombre entier, nous joignons les éléments du tableau de chiffres en une chaîne de caractères en utilisant `Number(digits.join(''))`.

```typescript
export function nextBigger(n: number): number {
  const digits = Array.from(n.toString()).map(Number);
  
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) i--;
  if (i === -1) return -1;
  
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) j--;
    
  [digits[i], digits[j]] = [digits[j], digits[i]];
  const reversed = digits.splice(i + 1).reverse();
  digits.push(...reversed);
  
  return Number(digits.join(''));
}
```
