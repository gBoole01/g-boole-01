---
title: "Environnement de développement Windows Debian - Partie 2/2"
publicationDate: "2023-05-19"
modificationDate: "2023-05-19"
duration: "10"
image: "developer-workstation.jpg"
excerpt: "Suite et fin de la mise en place de notre environnement de développement Windows et Debian. Suite à cet article, vous serez en mesure de commencer vos différents projets de développement sur votre machine Windows avec un environnement Linux Debian."
---

_Suite et fin de la mise en place de notre environnement de développement Windows et Debian. Suite à cet article, vous serez en mesure de commencer vos différents projets de développement sur votre machine Windows avec un environnement Linux Debian._

Cet article présume que vous avez suivi les instructions de la première [partie](/blog/environnement-de-developpement-windows-debian-partie-1-2) et que vous disposez de votre machine Windows avec WSL, Git et VSCode installé.

## Docker

La documentation officielle de Windows et bon nombre d'articles en ligne recommandent d'installer Docker Desktop for Windows.
Bien que cette option soit viable, elle est préférable sur des machines Windows n'ayant pas installé WSL 2 car elle va orchestrer en arrière plan sa propre distribution Linux grâce à WSL 2 pour fonctionner.

Dans notre cas, nous allons installer Docker directement dans notre distribution Debian. Cela nous permettra de ne pas instancier une autre distribution Linux et donc d'économiser des ressources.

Je trouve cette solution plus simple et plus performante. WSL 2 étant déjà conçu pour orchestrer des conteneurs, une grande partie de la configuration se fait de manière automatique.

Pour commancer, ouvrez un terminal Debian et exécutez les commandes suivantes :

```bash
## Script d'installation de Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

## Ajout de l'utilisateur courant au groupe docker
sudo usermod -aG docker $USER

## Installation de docker-compose
sudo apt install docker-compose

## Verification de l'installation
docker -v
docker-compose -v
```

Félicitations ! Vous pouvez désormais utiliser Docker et Docker Compose depuis votre terminal Debian.

## Extensions VSCode

Dans l'article précédent, nous avons déja installé l'extension [WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl). Cette dernière nous permet d'accéder à WSL depuis VSCode.

### [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

Cette extension permet d'interagir avec Docker et Docker Compose depuis VSCode. Elle offre une interface graphique permettant de consulter les différents conteneurs, volumes et réseaux Docker. Si vous souhaitiez une interface graphique pour Docker sans installer Docker Desktop, c'est l'extension qu'il vous faut.

&nbsp;

### [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

Cette extension permet de lancer un serveur web local pour le développement de vos applications web. Elle permet également de recharger automatiquement la page web à chaque modification de fichier. Ce serveur sera bien entendu lancé depuis votre distribution Debian.

&nbsp;

### Personnalisation

- [GitHub Theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

J'utilise ces deux extensions avec le thème 'GitHub Dark'. Ce sont des préférences personnelles, vous pouvez utiliser les extensions de votre choix.

&nbsp;

### [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

Cette extension permet de visualiser les informations de Git directement dans VSCode. Elle permet également d'accéder à des fonctionnalités avancées comme la recherche dans les commits, la visualisation des différences entre deux commits, etc.

&nbsp;

### Formatage et linter

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

Ces extensions permettent de formater et de linter votre code. Elles sont très utiles pour maintenir un code propre et lisible et vous feront gagner un temps précieux.

Prettier permet de formater vos fichier JavaScript, TypeScript, CSS, HTML et bien d'autres. Si il ne formatte pas le langage que vous utilisez, il y a de fortes chances qu'une extension existe pour le faire.

ESLint permet de linter vos fichiers JavaScript et TypeScript. Stylelint permet de formater vos fichiers CSS et SCSS. Enfin, markdownlint permet de linter vos fichiers Markdown.

&nbsp;

### Assistant génératif avec IA

- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [Codeium](https://marketplace.visualstudio.com/items?itemName=Codeium.codeium)
- [Tabnine AI Autocomplete](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)

Sauf si vous débutez en programmation, je vous recommande d'installer l'une des extensions ci dessus. Elles permettent d'assister le développeur en analysant ses saisies et en suggérant du code en conséquence. Elles sont très utiles pour gagner du temps lors de tâches répétitives.

_Attention toutefois à ne pas accepter sans réfléchir les différentes suggestions des ces extensions. Il faut absolument être en capacité de comprendre le code que vous rédigez._

&nbsp;

### Autres

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)

En fonction des différents projets de développement et des outils utilisés (PHP, Twig, React, Tailwind, Prisma, etc.), je vous suggère de rechercher si des extensions peuvent améliorer votre DX _(expérience de développement)_. Il existe de nombreuses extensions pour VSCode, il est fort probable que vous trouviez votre bonheur.

Par exemple, j'utilise ces trois extensions dans le cadre mes projets React ou Next utilisant l'ORM Prisma et Tailwind. Elles permettent d'ajouter des snippets et de l'autocomplétion pour React, Tailwind et Prisma me faisant gagner beaucoup de temps.

&nbsp;

## Conclusion

Nous voila arrivé à la fin de cette série d'articles sur la mise en place d'un environnement de développement Windows et Debian avec WSL 2. Vous avez désormais un environnement de développement complètemet opérationnel sur votre machine Windows avec un environnement Linux Debian.

&nbsp;

Cette configuration permet de bénéficier des avantages de Windows et de Linux. En effet, les outils de développement sont généralement plus simple à installer et à configurer sur Debian. De plus, ils sont généralement plus performants que leurs équivalents Windows.

En revanche, la plupart des applications graphiques Linux ne sont que des surcouches permettant d'exécuter des applications Windows et certaines applications (comme Adobe XD) ne possèdent même pas de version Linux.  

&nbsp;

_Sachez qu'il est également possible d'installer les paquets nécessaires à l'exécution d'applications graphiques Linux sur votre WSL. Par exemple, si vous utilisez Puppeteer, il vous sera alors possible d'exécuter un navigateur Chrome depuis WSL directement dans votre environnement de bureau Windows_

&nbsp;

Cela est à mon sens, l'environnement de développement le plus complet qu'il est possible d'avoir à ce jour. Si vous rencontrez des difficultés, n'hésitez pas à me contacter via le formulaire de contact.
