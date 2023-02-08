---
title: 'Qui aime ça ?'
publicationDate: '2023-02-08'
modificationDate: '2023-02-08'
language: 'typescript'
---

## Problème

Créez le texte qui doit être affiché à côté d'un bouton 'J'aime'.
Implémentez une fonction qui prends un array de nom en argument et retourne un texte comme dans ces exemples:

```
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
```

## Solution

Pour ce faire, nous utilisons la structure `switch` sur la longueur de l'array passé en argument.
Nous spécifions le format de la chaîne de caractères pour les cas de figure de 1 à 3 éléments dans l'array, puis le format par défaut lorsque l'array contient 4 éléments ou plus.

```typescript
export const likes = (arr: string[]): string => {
  switch (arr.length) {
    case 0:
      return 'no one likes this'
    case 1:
      return `${arr[0]} likes this`
    case 2:
      return `${arr[0]} and ${arr[1]} like this`
    case 3:
      return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
    default:
      return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
  }
}
```
