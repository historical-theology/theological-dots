# Corey Stephan's "Theological Dotfiles"

These are my personal [Nord Theme](https://www.nordtheme.com/) dotfiles for [spectrwm](https://github.com/conformal/spectrwm) (a small, dynamic tiling window manager for X11). I have built them in (and chiefly for) FreeBSD, but I have taken care to ensure that they are fitting for GNU/Linux and other *BSDs.

The purpose of this repository, which I manage with [Yet Another Dotfiles Manager (yadm)](https://yadm.io/), is for me to keep my entire configuration in one central location, allowing it to function as my own easy-to-install 'desktop environment' of a kind.

I publish my own modifications and work under the Creative Commons Zero 1.0 Universal license, meaning that they are freely available for (nearly) any use. Other repositories from which I have drawn include:
- [tony/spectrwm-config](https://github.com/tony/spectrwm-config) -  no license
- [daaniiieel/nord-firefox](https://github.com/daaniiieel/nord-firefox) - no license
- [arcticicestudio/nord](https://github.com/arcticicestudio/nord) - MIT License - n/a (compatible with CC-Zero)
- [EliverLara/Nordic](https://github.com/EliverLara/Nordic) - GPL 3.0 License - preserved for ~/.icons/ & ~/.themes/
- [trgeiger/nord-kde](https://github.com/trgeiger/nord-kde) - GPL 3.0 License - preserved for ~/.icons/ & ~/.themes/

Wallpapers (in ~/.wallpapers) are not my own, and I cannot claim any right to them. If you wish to use them, you must contact the original artist/project. They include:
- [Nord Mountains Night 5k](https://hdqwalls.com/nord-mountains-night-5k-wallpaper), which seems to be from the [GMK Nord keycap 'group buy'](https://candykeys.com/group-buys/gmk-nord)
- A modified version of [Daniel Leone's photograph of Poon Hill, Ghode Pani, Nepal](https://unsplash.com/photos/v7daTKlZzaw) from [vsthemes.org](https://vsthemes.org/en/pictures/other/14511-nord-wallpaper-pack.html)

## yadm Clone Instructions
To install these dotfiles on a newly installed OS exactly as they are, all that I need to do is follow these 3 steps:
- Install yadm
- `cd [home directory]`
- `yadm clone https://github.com/historical-theology/theological-dots`

However, for someone other than me (Corey Stephan), it will be best for you to fork the repository, tweak it to your liking, and *then* use `yadm clone _` --  or else to copy individual pieces into your own home directory.

## Basic Tools
- Window Manager: [spectrwm](https://github.com/conformal/spectrwm)
- Terminal: [alacritty](https://github.com/alacritty/alacritty)
- Shell: [fish](https://fishshell.com/)
- Font(s): [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts), specifically "Hack Nerd Font"
- Status Tool (for spectrwm bar): [conky](https://github.com/brndnmtthws/conky)
- Text Editor: [micro](https://micro-editor.github.io/)

## Dotfiles Applications List (Alphabetical, Partial)
- alacritty
- bpytop
- conky
- fish
- kvantum
- lxappearance 
- micro
- neofetch
- nitrogen
- pcmanfm
- picom
- ranger
- rofi
- spectrwm
- wine
- yadm

## FreeBSD Package List
On a fresh FreeBSD 13 installation, I can run the following to install most of what I need for these dotfiles (alphabetically):

```pkg install alacritty bpytop conky fish kvantum lxappearance micro neofetch nerd-fonts nitrogen pcmanfm picom ranger rofi spectrwm xorg i386-wine yadm``` 

## Why conky?
spectrwm has its own status bar, which I use. It is capable of having information from a shell script displayed inside it. However, shell scripts are *not* portable. Conky *is* (mostly) portable.
