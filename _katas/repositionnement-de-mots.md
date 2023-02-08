---
title: 'Repositionnement de mots'
publicationDate: '2023-02-08'
modificationDate: '2023-02-08'
language: 'typescript'
---

## Problème

Réordonnez la chaîne de caractère passé en argument. Chaque mot de cette chaîne contient un seul nombre. Ce nombre est la position que le mot devrait avoir dans le résultat

_Les nombres vont de 1 à 9. 1 représente le premier mot (et non 0)_

Si la chaîne passé en argument est vide, renvoyez une chaîne de caractère vide.

Exemple:

```
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```

## Solution

Pour commencer, nous allons initialiser un tableau contenant 9 chaînes de caractères vides.
Ensuite, nous utilisons la méthode `split(' ')`. L'espace passé en argument nous permet de séparer la phrase entre chaque mot.
Dans la méthode `forEach()`, nous cherchons à identifier quel nombre se trouve dans le mot et une fois ce dernier identifié, nous le plaçons au bon endroit du tableau `result`.

Lorsque tous les mots ont été repositionnés, nous filtrons les chaînes de caractères vides initialisées en début de fonction.
Enfin, nous utilisons la méthode `join(' ')` afin de transformer le tableau `result` en une seule chaîne de caractère séparant chaque élément avec un espace.

```typescript
export function order(words: string): string {
  let result = ['', '', '', '', '', '', '', '', '']

  words.split(' ').forEach((word) => {
    if (word.includes('1')) result[0] = word
    if (word.includes('2')) result[1] = word
    if (word.includes('3')) result[2] = word
    if (word.includes('4')) result[3] = word
    if (word.includes('5')) result[4] = word
    if (word.includes('6')) result[5] = word
    if (word.includes('7')) result[6] = word
    if (word.includes('8')) result[7] = word
    if (word.includes('9')) result[8] = word
  })

  return result.filter((word) => word !== '').join(' ')
}
```

_Nous aurions également pu chercher les caractères représentant des nombres dans la chaîne de caractères passée en argument. Puis, à l'aide de la méthode `sort()`, trier les mots en fonction de leur nombre._
