---
title: 'Molécule vers atomes'
publicationDate: '2023-02-10'
modificationDate: '2023-02-10'
language: 'typescript'
---

## Problème

Ecrivez une fonction qui prends en argument une formule chimique et qui retourne le nombre d'atomes de chaque élément présent.

### Exemple

```typescript
var water = 'H2O'
parseMolecule(water) // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2'
parseMolecule(magnesiumHydroxide) // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2'
parseMolecule(fremySalt) // return {K: 4, O: 14, N: 2, S: 4}
```

## Solution

```typescript
function molecule(formula: string) {
  let elements: Array<{ element: string; count: number }> = []
  const regex = /(\[(.*)\]|([A-Z][a-z]*))(\d*)/g
  const matches = [...formula.matchAll(regex)]

  matches.forEach((match) => {
    console.log(match)
    const [_, __, square, element, unit] = match
    if (square) {
      let nested = molecule(square).multiply(parseInt(unit))
      elements = elements.concat(nested.split())
    } else {
      elements.push({
        element,
        count: parseInt(unit) || 1,
      })
    }
  })

  function multiply(unit: number) {
    elements.forEach((element) => {
      element.count *= unit
    })
    return this
  }

  function split() {
    return elements
  }

  function parse(): Record<string, number> {
    if (!formula) return {} as Record<string, number>

    return split().reduce((result, { element, count }) => {
      result[element] = count
      return result
    }, {} as Record<string, number>)
  }

  return {
    parse,
    split,
    multiply,
  }
}

export function parseMolecule(formula: string): Record<string, number> {
  console.log('Parsing ', formula)

  const response = molecule(formula).parse()
  console.log(response)
  return response
}
```
