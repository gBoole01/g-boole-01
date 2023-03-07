---
title: 'Compteur de diviseurs'
publicationDate: '2023-03-07'
modificationDate: '2023-03-07'
language: 'csharp'
---

## Problème

Rédigez une fonction qui prends un nombre entier positif `n` en argument.

Cette fonction doit retourner le nombre `count` de nombre pouvant diviser `n`.

### Exemples

```bash
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
```

## Solution

Pour commencer, nous initialisons la variable de retour `count`.

Ensuite, à l'aide d'une boucle `for`, nous parcourons tous les entiers positifs de 1 à `n`.

Nous vérifions si chaque entier est un diviseur de `n` en vérifiant si `n` modulo `i` est égal à 0. Si c'est le cas, nous incrémentons la variable count.

Enfin, nous retournons notre varaible `count`.

```c#
public class Kata
{
  public static int Divisors(int n)
  {
        int count = 0;

        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++;
            }
        }

      return count;
  }
}
```
