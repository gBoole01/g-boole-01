---
title: "Environnement de développement Windows Debian"
publicationDate: "2023-03-31"
modificationDate: "2023-03-31"
duration: "10"
image: "developer-workstation.jpg"
excerpt: "Dans cet article, nous allons vous montrer comment installer Debian sur Windows 11 à l'aide de WSL2. Debian est une distribution Linux populaire connue pour sa stabilité, sa sécurité et sa fiabilité, et WSL2 est une fonctionnalité de Windows qui permet d'exécuter un environnement Linux directement sur Windows. En suivant les instructions fournies, vous pourrez facilement installer et configurer Debian sur votre machine Windows."
---

_Dans cet article, nous allons vous montrer comment installer Debian sur Windows 11 à l'aide de WSL2. Debian est une distribution Linux populaire connue pour sa stabilité, sa sécurité et sa fiabilité, et WSL2 est une fonctionnalité de Windows qui permet d'exécuter un environnement Linux directement sur Windows. En suivant les instructions fournies, vous pourrez facilement installer et configurer Debian sur votre machine Windows._

## Qu'est-ce que WSL (Windows Subsystem for Linux) ?

Le Windows Subsystem for Linux (WSL) est une fonctionnalité de Windows 11 (et 10) qui permet aux utilisateurs d'exécuter un environnement Linux directement sur Windows, en offrant un accès aux outils de développement Linux, à la ligne de commande et aux applications Linux. Cette fonctionnalité permet aux développeurs de travailler sur des projets Linux dans un environnement Windows sans avoir besoin d'un dual-boot ou d'une machine virtuelle. WSL est disponible en deux versions: WSL1, basé sur une traduction de noyau, et WSL2, qui utilise une véritable virtualisation de noyau.

Nous allons utiliser WSL2 car il offre de meilleurs performances et permet, entre autres choses, d'accéder au systemd.

## Qu'est-ce que Debian ?

Debian est une distribution Linux populaire connue pour sa stabilité, sa sécurité et sa fiabilité. Elle est souvent utilisée comme base pour d'autres distributions, telles que Ubuntu et Linux Mint. Debian est réputé pour ses processus de développement stricts, sa gestion de paquets cohérente et sa communauté active. Sa philosophie open-source et son engagement envers la liberté des utilisateurs sont également des facteurs clés de son succès. Debian bénéficie d'une grande communauté de développeurs et d'utilisateurs, ce qui lui permet de maintenir une plateforme stable et robuste.

## Installation de WSL 2

Prérequis:

1. Windows 10 version 2004 et ultérieurs ou Windows 11.
1. Au moins 16 GB de RAM.
1. Une connexion internet.

Il existe deux manières d'installer WSL. La première étant de télécharger les applications depuis le Microsoft Store. La seconde se réalise depuis un terminal.

### Microsoft Store

Installer successivement les applications suivantes:

1. Windows Subsystem for Linux
1. Debian

### Interface de ligne de commande

1. Lancez un Windows Command Prompt en mode Administrateur.
1. Exécutez la commande suivante `wsl --install`. Cette commande installera donc les fonctionnalités nécessaire pour exécuter le WSL et installer une distribution Linux.
1. Maintenant que WSL est installé, nous pouvons commencer l'installation de notre distibution Debian grâce à la commande `wsl --install -d Debian`.

## Démarrer Debian

Pour démarrer Debian, il suffit de lancer la commande suivante `wsl -d Debian`.
Lors du premier démarrage, Debian nous demande de créer un utilisateur et de renseigner un mot de passe. Sachez qu'il est possible de lancer le WSL en mode root en ajoutant un flag 'user' à votre commande : `wsl -d Debian -u root`.

Votre utilisateur fraîchement créé possède le rôle d'Administrateur. Nous pouvons donc exécuter des commandes en mode `sudo`.

Afin de profiter de toutes les fonctionnalités que nous offre WSL 2. Nous allons activer le `systemd`. Pour ce faire, il suffit de créer un fichier `wsl.conf` dans le dossier `/etc/` situé à la racine de Debian. Lancez la commande `sudo vim /etc/wsl.conf` (ou `sudo nano /etc/wsl.conf` selon votre préférence). Dans ce fichier, ajouter les lignes suivantes :

```bash
[boot]
systemd=true
```

Sauvegardez votre fichier et redémarrez entièrement votre machine afin que cette modification soit prise en compte.

Une fois votre Windows et votre Debian redémarré, il est impératif de mettre à jour les paquets de votre Debian. Lancez la commande `sudo apt update && sudo apt upgrade -y` afin de lancer la mise à jour des paquets.

## Configurer le Terminal Windows

Bien qu'il existe de nombreuses applications disponibles sous Windows afin d'obtenir une meilleure expérience de développement que le Windows Command Prompt ou le Powershell, je vous recommande grandement d'utiliser le Windows Terminal. _Si ce dernier n'est pas installé sur votre machine, vous pouvez l'obtenir depuis le Microsoft Store._

Rendez vous dans les paramètres du Terminal, dans l'onglet "Démarrage" changez le Profil par défaut et sélectionnez Debian. De cette manière, lorsque vous lancerez l'application Windows Terminal, WSL2 et Debian démarreront automatiquement.

### Activer le mode "Quake"

_Le mode Quake est une fonctionnalité présente dans certains jeux de tir à la première personne qui permet aux joueurs de se déplacer plus rapidement et de sauter plus haut que la normale. Il est apparu pour la première fois dans le jeu Quake, sorti en 1996._

Vous l'aurez compris, le mode "Quake" ou "Quake Mode" vous fera gagner du temps ! Il vous permet, grâce à un raccourci clavier, d'afficher/masquer votre Terminal sur la moitié supérieure de l'écran. Si vous décidez d'utiliser le "Quake mode", je vous recommande de régler l'opacité de la fenêtre à 50%. Vous pourrez ainsi consulter votre terminal et exécuter des commandes tout en gardant un oeil sur vos fenêtres actuellement ouvertes.

Pour activer le Quake Mode, rendez vous dans l'onglet "Actions" puis remplacer le raccourci clavier de "Afficher/Masque le mode Quake" par celui de votre choix.

_J'utilise souvent les raccourcis `Touche Windows`+`1` pour ouvrir l'application situé en première position de ma barre de tâches (`Touche Windows`+`2` pour la seconde, etc.). J'ai donc assigné le raccourci `Touche Windows`+`²` afin d'y accéder le plus rapidement possible._

### Lancer le Terminal au démarrage de Windows

#### Fenêtre normale

Afin de lancer l'application Terminal lors du démarrage de Windows, rendez vous dans le dossier suivant : `C:\Users\<YourUsername>\AppData\Local\Microsoft\WindowsApps`.

Dans ce dossier, localisez le fichier `wt.exe`, puis clic droit et `Créer un raccourci`.
Déplacez le raccourci fraîchement créé dans le dossier suivant : `C:\Users\<YourUsername>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`.

#### Quake mode

Pour pouvoir lancer le Terminal en quake mode, vous devez suivre les étapes décrites précédemment. Une fois votre raccourci créé, clic droit et `Propriétés`.

Dans l'onglet `Raccourci`, identifiez la ligne `Cible` et remplacez son contenu par `C:\Users\<YourUsername>\AppData\Local\Microsoft\WindowsApps\wt.exe -w _quake`.

Sauvegardez vos modifications et redémarrez votre machine afin de vérifier le bon fonctionnement du démarrage en Quake mode.

## Installer Git et VS Code sur Debian

### Git

Pour installer Git, vous devez tout simplement ouvrir votre shell Debian grâce au Terminal Windows. Exécutez la commande suivante : `sudo apt install git`.

Une fois l'installation de git terminée, un ficher `.gitconfig` a été créé dans le dossier `$HOME`. Vous pouvez l'éditer directement avec l'aide de vim ou de nano.

Vous pouvez également utiliser les commandes `git config` pour définir vos réglages depuis votre CLI.

### VS Code

Visual Studio Code va pouvoir utiliser le GUI de l'application Windows pour communiquer avec le VSCode Server de Debian. _(WSL ne possède pas de serveur graphique pour lancer des applications)_

Son installation va être relativement simple. En effet, il vous suffit de vous rendre sur la [page d'installation de VS Code](https://code.visualstudio.com/download) et y télécharger la version correspondante à votre Windows OS.

Lors de l'installation, n'oubliez pas de cocher l'option `Ajouter au PATH` afin de pouvoir utiliser la commande `code` depuis votre WSL.

Une fois l'installation terminée, ouvrez VS Code et installez l'extension [WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl).

Pour installer VS Code Server sur votre WSL, rendez vous sur votre shell Debian à l'aide du Terminal. Lancez la commande suivante `sudo apt update && sudo apt install wget ca-certificates -y`. Cela vous permettra d'installer les packages nécessaires au bon fonctionnement de VS Code Server.

Créez ensuite un dossier `Code` dans votre `$HOME`, ce dossier contiendra vos différents projets. Créer un second dossier appelé `test` à l'intérieur de `Code`.
Rendez vous dans ce dossier et lancez VS Code en utilisant la commande suivante : `cd ~/Code/test && code .`.

WSL va alors exécuter l'installation de VS Code Server. Une fois celle-ci terminée, votre application Windows devrait se lancer et vous pourrez commencer à créer des fichiers et des dossiers dans le dossier `test` situé dans votre WSL.

## Conclusion

Dans cet article, nous avons vu comment installer et configurer WSL2, Debian et le Terminal de Windows. Puis nous avons installé Git et VS Code Server sur notre Debian.

Prochainement, nous verrons comment installer Docker dans Debian afin d'obtenir une expérience de développement optimale et performante !
