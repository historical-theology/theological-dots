# Corey Stephan's "Theological Dotfiles"

These are my personal [Nord Theme](https://www.nordtheme.com/) dotfiles for [spectrwm](https://github.com/conformal/spectrwm) (a small, dynamic tiling window manager for X11). I have built them in (and chiefly for) FreeBSD, but I have taken care to ensure that they are fitting for GNU/Linux and other *BSDs.

The purpose of this repository, which I manage with [Yet Another Dotfiles Manager (yadm)](https://yadm.io/), is for me to keep my entire configuration in one central location, allowing it to function as my own easy-to-install 'desktop environment' of a kind.

## Contents
- [Licenses](#licenses)
- [Clone Instructions](#yadm-clone-instructions)
- [Basic Tools](#basic-tools)
- [Dotfiles Applications List](#dotfiles-applications-list)
- [Firefox](#firefox)
- [FreeBSD Package List](#freebsd-package-list)
- [System Configuration](#system-configruation)
- [FAQ](#faq)

## Licenses
I publish my own modifications and work under the Creative Commons Zero 1.0 Universal license, meaning that they are freely available for (nearly) any use. Other repositories from which I have drawn include:
- [arcticicestudio/nord](https://github.com/arcticicestudio/nord) - MIT License - compatible with CC-Zero
- [tony/spectrwm-config](https://github.com/tony/spectrwm-config) -  no license
- [daaniiieel/nord-firefox](https://github.com/daaniiieel/nord-firefox) - no license
- [undiabler/nord-rofi-theme](https://github.com/undiabler/nord-rofi-theme) - no license
- [KiranWells/micro-nord-tc-colors](https://github.com/KiranWells/micro-nord-tc-colors) - MIT License - compatible with CC-Zero
- [EliverLara/Nordic](https://github.com/EliverLara/Nordic) - GPL 3.0 License - preserved for ~/.icons/ & ~/.themes/
- [trgeiger/nord-kde](https://github.com/trgeiger/nord-kde) - GPL 3.0 License - preserved for ~/.icons/, ~/.themes/, and ~/.config/Kvantum/

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

## Dotfiles Applications List
alphabetical, partial
- alacritty
- bpytop
- conky
- firefox
- fish
- kvantum
- lxappearance 
- micro
- neofetch
- nitrogen
- pcmanfm
- picom
- ranger
- redshift
- rofi
- spectrwm
- wine
- yadm

## FreeBSD Package List
On a fresh FreeBSD 13 installation, I can run the following to install most of what I need for these dotfiles (alphabetically):

```
pkg install alacritty bpytop conky firefox-esr fish Kvantum-qt5 lxappearance micro neofetch nerd-fonts nitrogen pcmanfm picom py37-ranger redshift rofi spectrwm xorg i386-wine yadm
``` 

## Firefox
Here is what I use to achieve a homogenously Nord Theme web browsing experience in Firefox:
- Preferences --> Colors: Text: #ECEFF4, Background: #2E3440, Unvisited Links: #88C0D0, Visited Links: #B48EAD
- [Nord Theme by Crozbo](https://addons.mozilla.org/en-US/firefox/addon/nord-theme/)

For *fast* systems, use the Midnight Lizard extension to achieve consistent website theming:
- [Midnight Lizard](https://addons.mozilla.org/en-US/firefox/addon/midnight-lizard-quantum/) 
- Install the ["Nord" color scheme by Paval Agarkov](https://midnight-lizard.org/schemes/index/full/?q=Nord&side=any&bg=any) from the official Midnight Lizard website

For *slow* systems and/or to conserve battery life on laptops, use the custom UserChrome.css from daaniiieel that I have in ~/.mozilla/firefox/PROFILE
- Type `about:config` in the URL bar and set `toolkit.legacyUserProfileCustomizations.stylesheets` to "true"


## System Configruation
This is my *personal* system configuration information that does not belong in dotfiles. Others might appreciate having a short checklist, especially for what is important to add to /etc/rc.conf for a desktop FreeBSD installation.

#### /etc/rc.conf
```
kld_list="/boot/modules/amdgpu.ko"        # amgdpu kernel module, loads drm-kmod & is required for xf86-video-amdgpu
dbus_enable="YES"                         # required for many xorg-related matters
webcamd_enable="YES"                      # webcam daemon
cupsd_enable="YES"                        # Common Unix Printing Service (CUPS)
```
Requires: 
```
pkg install drm-kmod xf86-video-amdgpu webcamd cups
```

#### /boot/loader.conf
```
vfs.root_mount_always_wait="1"            # partially alleviate CAM boot pause
sysctlinfo_load="YES"                      
sysctlbyname_improved_load="YES"
cuse_load="YES"
```

## FAQ
#### Why FreeBSD?
FreeBSD is stable and sensible. The user has full control of it.

#### Why spectrwm?
spectrwm is lightweight and fast. It has a plain text configuration file (~/.config/spectrwm/spectrwm.conf) that makes it easy to customize. It achieves almost everything that I might desire in a tiling window manager.

#### Why conky?
spectrwm has its own status bar, which is what I use -- with conky relaying my system status information. On its own, the spectrwm status bar is capable of displaying information from a shell script (often called `baraction.sh` in examples). However, shell scripts are *not* portable (cross-platform). A conky configuration (~/.conkyrc) *is* (mostly) portable. To display conky output in the spectrwm bar, set `bar_output = conky` and make sure to have `+A` in `bar_format`. See my ~/.config/spectrwm/spectrwm.conf and ~/.conkyrc for how I have achieved my desired effect.
