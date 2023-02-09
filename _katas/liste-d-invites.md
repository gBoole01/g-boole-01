---
title: "Liste d'invités"
publicationDate: '2023-02-09'
modificationDate: '2023-02-09'
language: 'typescript'
---

## Problème

Rédigez une fonction qui prends une chaîne de caractère en argument, et retourne une autre chaîne de caractère formattée.

1. Transformez les caractères minuscules en majuscules.
1. Triez la liste d'invités par ordre alphabétique de leurs Noms

### Exemple

```typescript
s =
  'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'
```

devient

```typescript
'(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)'
```

## Solution

Pour résoudre ce problème, nous allons retourner la chaîne de caractère passée en argument après l'avoir manipulé grâce à plusieurs méthodes.

```typescript
export function meeting(s: string): string {
  return s
    .toUpperCase()
    .split(';')
    .map((elem) => `(${elem.replace(/(.*):(.*)/, '$2, $1')})`)
    .sort()
    .join('')
}
```

- `toUpperCase()` => Transforme tous les caractères en majuscules
- `split(';')` => Sépare les noms en éléments de tableau
- `map((elem) => elem.replace(/(.*):(.*)/, "$2, $1"))` => Inverse les noms et prénoms, remplace les `:` par des `,` et ajoute des parenthèses autour de chaque élément.
- `sort()` => Trie les éléments du tableau _(L'absence d'arguments renvoie une liste triée par ordre croissant et/ou alphabétique)_
- `join('')` => Transforme le tableau en chaîne de caractère
