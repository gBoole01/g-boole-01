---
title: 'Gestionnaire de commandes'
publicationDate: '2023-02-07'
modificationDate: '2023-02-07'
language: 'typescript'
---

## Problème

Ecrivez un parser qui va décomposer une suite de commandes, chacune ne faisant qu'un caractère.

- `i` augmente la valeur de 1 (initiallement 0)
- `d` diminue la valeur de 1
- `s` multiplie la valeur par elle-même (carré)
- `o` ajoute la valeur dans l'array de retour

Les caractères invalides doivent être ignorés.

## Solution

Nous allons décomposer la chaîne de caractère passé en argument grâce à la méthode `split`.
Ensuite nous utiliserons la méthode `forEach` pour effectuer une opération par caractère.

La syntaxe la plus claire pour ce genre d'opérations est `switch`.

L'instruction `default: break` nous permet d'ignorer les autres caractères.
Chaque commande est spécifié selon son `case` puis on retourne l'array `result`.

```typescript
/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  const result: number[] = []
  let value = 0

  data.split('').forEach((command) => {
    switch (command) {
      case 'i':
        value += 1
        break
      case 'd':
        value -= 1
        break
      case 's':
        value = value * value
        break
      case 'o':
        result.push(value)
        break
      default:
        break
    }
  })

  return result
}
```
