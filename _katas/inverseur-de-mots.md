---
title: 'Inverseur de mots'
publicationDate: '2023-05-12'
modificationDate: '2023-05-12'
language: 'typescript'
---

## Problème

Rédigez une fonction qui prends une chaîne de caractère d'un ou plusieurs mots, et qui retourne la même chaîne de caractères.
Cette nouvelle chaîne doit avoir les mots de 5 lettres ou plus inversés.

Les chaînes passées en paramètre ne contiendront que des lettres et des espaces. Les espaces ne seront présents que si plusieurs mots sont présents.

### Exemple

```typescript
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
```

## Solution

Nous allons commencer par séparer les mots de la chaîne de caractères grâce à la méthode `String.split`.

Ensuite, nous allons itérer sur les mots de la chaîne de caractères grâce à la méthode `Array.map`. Nous allons vérifier si le mot courant fait 5 lettres ou plus grâce à la propriété `String.length`.

Si c'est le cas, nous allons inverser le mot grâce aux méthodes `String.split`, `Array.reverse` et `Array.join`. Sinon, nous retournons le mot tel quel.

Enfin, nous retournons la chaîne de caractères reconstruite grâce à la méthode `Array.join`.

```typescript
export function spinWords(words: string): string {
  return words
    .split(' ')
    .map(word => {
      if (word.length >= 5) {
        return word.split('').reverse().join('');
      }
      return word;
    })
    .join(' ')
}
```
