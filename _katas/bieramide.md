---
title: 'Bièramide'
publicationDate: '2023-02-22'
modificationDate: '2023-02-22'
language: 'typescript'
---

## Problème

Supposons que votre entreprise vient d'embaucher votre ami d'université et vous a versé une prime de parrainage. Génial ! Pour célébrer cela, vous emmenez votre équipe dans le terrible bar miteux à côté et utilisez la prime de parrainage pour acheter et construire la plus grande pyramide de canettes de bière en trois dimensions possible. Ensuite, vous allez probablement boire ces bières, car supposons que c'est vendredi aussi.

Une pyramide de canettes de bière doublera le nombre de canettes dans chaque niveau - 1 canette au niveau supérieur, 4 au deuxième niveau, 9 au niveau suivant, 16, 25...

Complétez la fonction beeramid pour retourner le nombre de niveaux complets d'une pyramide de canettes de bière que vous pouvez construire, étant donné les paramètres suivants :

- votre prime de parrainage
- le prix d'une canette de bière.

## Solution

On initialise la variable "beerCount" soit la quantité de bière que l'on peut acheter avec la prime de parrainage (c'est-à-dire le quotient de la prime de parrainage par le prix d'une canette de bière).

Ensuite, on initialise la variable "level" avec pour valeur zéro, car on n'a pas encore construit de niveau de la pyramide.

On utilise une boucle "while" pour ajouter des niveaux à la pyramide tant qu'il reste suffisamment de canettes pour construire le niveau suivant. La condition de la boucle vérifie si le carré de la prochaine valeur de "level" est inférieur ou égal à "beerCount".

Si la condition de la boucle est vraie, on ajoute 1 à "level" pour passer au niveau suivant, et on soustrait le nombre de canettes nécessaires pour construire ce niveau.

Si la condition de la boucle est fausse, cela signifie qu'il n'y a pas suffisamment de canettes pour construire le niveau suivant, donc la boucle s'arrête et on retourne la valeur actuelle de "level", qui représente le nombre de niveaux complets de la pyramide que l'on peut construire avec la prime de parrainage.

```typescript
export function beeramid(bonus: number, price: number): number {
  let beerCount = bonus / price
  let level = 0

  while ((level + 1) ** 2 <= beerCount) {
    level += 1
    beerCount -= level ** 2
  }

  return level
}
```
