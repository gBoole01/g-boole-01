---
title: 'Bien gérer sa configuration ?'
publicationDate: '2022-06-14'
modificationDate: '2022-06-14'
duration: '10'
image: 'bien-gerer-sa-configuration.jpg'
excerpt: 'No excerpt for the moment !'
---
Comme tout développeur au cours de sa carrière, vous vous êtes sûrement retrouvé à régler pour la dixième fois votre shell, ou encore vos raccourcis d'IDE !
C'est sans doute à ce moment-là que, dans le respect du principe DRY **(Don't Repeat Yourself)**, vous avez commencé à envisager une solution plus viable et moins chronophage.<br/>
Et bien, c'est ce que nous allons voir ensemble aujourd'hui. Nous allons voir les différents possibilités qui s'offrent à nous et quelle approche correspond le mieux à vos besoins ! 

### Les Dotfiles

Un terme revient souvent lorsqu'on parle de configuration ou de personnalisation, c'est celui de `dotfiles`. **Mais qu'est-ce qu'un dotfile exactement ?** Les dotfiles sont des fichiers et des dossiers des systèmes d'exploitation Unix-like dont le nom commence par un `.`("dot" signifiant "point" en Anglais) qui contrôlent la configuration des applications et des shells du système.<br />
Ces dossiers sont masqués par défaut dans la plupart des systèmes d'exploitation. Pour afficher les dotfiles présents dans un dossier, exécuter la commande `ls -a <folderName>` dans votre terminal.<br />
Pour exporter sa configuration, il suffit simplement de copier le contenu de ces fichiers sur sa nouvelle machine.

### Comment les sauvegarder ? 

Nous pourrions tout simplement **copier ces fichiers sur notre nouvelle machine**, ce serait déjà un gain de temps en comparaison à notre méthode initiale. Cependant, un incident matériel pourrait causer la perte de nos fichiers. **Les stocker dans un service de Cloud** (OneDrive, Dropbox, etc..) serait une meilleure solution pour parer à cette eventualité, mais un problème subsiste encore...<br/>
En effet, si l'on modifie des réglages sur une machine et que l'on veut les répercuter sur les autres, il faudra replacer les fichiers en question sur le Cloud puis **les télécharger et les remplacer autant de fois que de machines.**

### Le dépôt GIT, une solution idéale ?

On retrouve certains articles sur le net qui propose la solution de créer un dépôt GIT à la racine et d'ajouter les fichiers et les dossiers qui ne sont pas des dotfiles dans un fichier `.gitignore` afin de ne pas les versionner.<br/>
Bien que cette solution soit viable, je ne pense pas qu'elle soit optimale car, bien que les dossiers et fichiers de l'utilisateur ne soient pas versionnés, ils peuvent être affectés par d'autres commandes GIT.<br/>
Afin d'éviter cela et de garder le dépôt séparé du dossier `$HOME`, nous utiliserons des liens symboliques.<br/>
Ensemble, nous allons voir comment **mettre en place un dépôt distant pour stocker sa configuration sur GitHub** et comment synchroniser ses dotfiles avec un simple `git pull` !

### Dépôt privé ou dépôt public ?

Lors de la création du dépôt distant, il faudra en déterminer sa visibilité. J'ai choisi de garder ce dépôt privé mais vous pouvez le rendre public si vous le souhaitez, d'ailleurs vous pourrez trouver beaucoup d'exemples en ligne. **Toutefois, faites attention aux fichiers que vous y intègrerez car vos données sensibles seront rendues publiques !**<br/>
Dans un autre article, je vous apprendrai à sécuriser le contenu des fichiers sensibles afin de partager l'ensemble de vos dotfiles sans crainte.

### Comment faire ?

#### Mise en place des dépôts
Pour commencer, il faut créer un nouveau dossier à la racine qui contiendra l'intégralité de nos fichiers de configuration.

```
cd $HOME
mkdir .dotfiles
```

Ensuite, on initialise le dépôt Git

```
git init
```

Je vous invite à créer un README où vous pourrez réferencer le contenu du dépôt et d'autres choses qui vous semblent utiles

```
touch README.md
```

Ensuite, créez le dépôt distant sur GitHub et effectuez les commandes suivantes *(remplacez l'url du dépôt avec la votre)*

```
git remote add origin git@github.com:gBoole01/.dotfiles.git
git branch -M main
git push -u origin main
```

#### Ajouter la configuration du shell (ZSH)
*Selon le shell utilisé, vous pourrez avoir un fichier avec un nom différent du mien mais le principe reste le même.*<br/>
Nous allons commencer par mettre en place le fichier contenant la configuration de mon shell **zsh** `.zshrc`. Il se situe à la racine, vous pourrez le voir en effectuant la commande suivante:

```
ls -a $HOME
```

Premièrement, nous allons déplacer ce fichier dans notre dépôt

```
mv $HOME/.zshrc $HOME/.dotfiles/.zshrc
```

Ensuite, nous allons rajouter le lien symbolique de l'emplacement d'origine du fichier vers notre dépôt

```
ln -s $HOME/.dotfiles/.zshrc $HOME/.zshrc
```

Pour vérifier que tout a fonctionné, on peut effectuer la commande suivante


```
ls -la $HOME
```

Parmi les fichiers du répertoire racine, vous devriez voir cette ligne apparaître.

```html
...
lrwxrwxrwx  1 user user     27 13 juin  14:59 .zshrc -> /home/user/.dotfiles/.zshrc
```

Le `.zshrc -> /home/user/.dotfiles/.zshrc` nous indique que le lien symbolique de `.zshrc` est correctement en place. Désormais, chaque modification effectuée sur l'un des deux fichiers sera répercuté sur l'autre. Le tout étant versionné dans le dossier `.dotfiles`.<br/>
<br/>

#### Ajouter la configuration de Git
La configuration Git globale de votre machine se trouve dans le fichier `.gitconfig`, nous allons répeter la même opération que pour `.zshrc`
```
mv $HOME/.gitconfig $HOME/.dotfiles/.gitconfig
ln -s $HOME/.dotfiles/.gitconfig $HOME/.gitconfig
```
##### 3. Ajouter la configuration de Visual Studio Code
Il existe plusieurs fichiers de configuration pour VS Code, nous allons créer un dossier pour les rassembler
```
mkdir $HOME/.dotfiles/VSCode
```

*(Remplacez `{YourUsername}` avec le chemin correct de votre machine)*

- `settings.json`
```
mv $HOME/.config/Code/{YourUsername}/settings.json $HOME/.dotfiles/VSCode
ln -s $HOME/.dotfiles/VSCode/settings.json $HOME/.config/Code/{YourUsername}/settings.json

```
- `keybindings.json`
```
mv $HOME/.config/Code/{YourUsername}/keybindings.json $HOME/.dotfiles/VSCode
ln -s $HOME/.dotfiles/VSCode/keybindings.json $HOME/.config/Code/{YourUsername}/keybindings.json

```
- `snippets`
```
mv $HOME/.config/Code/{YourUsername}/snippets $HOME/.dotfiles/VSCode
ln -s $HOME/.dotfiles/VSCode/snippets $HOME/.config/Code/{YourUsername}/snippets

```

Il ne vous reste plus qu'à enregistrer vos modifications dans le dépôt `.dotfiles` et effectuer un `git push` pour pouvoir les récupérer ultérieurement.

#### Mise en place d'une nouvelle machine

Bon d'accord, la mise en place a pu sembler fastidieuse mais ne vous inquiètez pas, votre futur Vous est déjà en train de vous remercier pour **ces heures de réglages économisées !**<br/>
<br/>
Une fois sur votre nouvelle machine, ouvrez votre terminal et clonez votre dépôt distant à la racine

```
cd $HOME
git clone git@github.com:gBoole01/.dotfiles.git
```

Ensuite, il faut créer les liens symboliques qui permettront à la configuration d'être correctement chargée.
Si vous avez suivi le tutoriel jusqu'ici, les commandes sont les suivantes<br/>
<br/>
*(Remplacez `{YourUsername}` avec le chemin correct de votre machine)*
```
ln -s $HOME/.dotfiles/.zshrc $HOME/.zshrc
ln -s $HOME/.dotfiles/.gitconfig $HOME/.gitconfig
ln -s $HOME/.dotfiles/VSCode/settings.json $HOME/.config/Code/{YourUsername}/settings.json
ln -s $HOME/.dotfiles/VSCode/keybindings.json $HOME/.config/Code/{YourUsername}/keybindings.json
ln -s $HOME/.dotfiles/VSCode/snippets $HOME/.config/Code/{YourUsername}/snippets
```

#### Synchroniser nos dotfiles

Pour synchroniser la configuration, il suffit d'effectuer un `git push` depuis la branche `main` dans le dossier `.dotfiles`, puis un `git pull` depuis la branche `main` dans le dossier `.dotfiles` sur la seconde machine.<br/>
<br/>
**Et voilà !**<br/>
<br/>
*Git est un outil très puissant et il nous permet, entre autres, d'annuler ses modifications, de créer des branches pour effectuer des tests, ou encore de spécifier des configurations selon les systèmes d'exploitation.*<br/>
<br/>
Dans un prochain article, nous verrons comment mettre en place un script nous permettant de génerer les liens symboliques lors du clonage du dépôt distant, afin d'être toujours plus efficace !
