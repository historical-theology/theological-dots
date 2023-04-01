# Corey Stephan's "Theological Dotfiles"

These are my personal [Nord Theme](https://www.nordtheme.com/) dotfiles for [spectrwm](https://github.com/conformal/spectrwm) (a small, dynamic tiling window manager for X11). I have built them in (and chiefly for) FreeBSD, OpenBSD, and Debian GNU/Linux, but I have taken care to ensure that they are fitting for other Unix-like OSes. I also have tested and used them on GNU/Linux distributions other than Debian, especially Manjaro.

The purpose of this repository, which I manage with [Yet Another Dotfiles Manager (yadm)](https://yadm.io/), is for me to keep my entire configuration in one central location, allowing it to function as my own easy-to-install 'desktop environment' of a kind.

As time continues, I am likely to add and change many things here, including scripts that I collect, specific settings, and perhaps configurations for additional window managers.

## Contents
- [Screenshot](#screenshot)
- [Licenses](#licenses)
- [Clone Instructions](#yadm-clone-instructions)
- [Basic Tools](#basic-tools)
- [Dotfiles Applications List](#dotfiles-applications-list)
- [FreeBSD](#freebsd)
- [OpenBSD](#openbsd)
- [Debian/Ubuntu](#debuntu)
- [Arch/Manjaro](#manjaro)
- [Firefox](#firefox)
- [FAQ](#faq)

## Screenshot
![Screenshot](/.screenshots/theological-dots-1.png?raw=true "Screenshot")

## Licenses
I publish my own modifications and work under the Creative Commons Zero 1.0 Universal license, meaning that they are freely available for (nearly) any use. Other repositories from which I have drawn include:
- [arcticicestudio/nord](https://github.com/arcticicestudio/nord) - MIT License - compatible with CC-Zero
- [tony/spectrwm-config](https://github.com/tony/spectrwm-config) -  no license
- [daaniiieel/nord-firefox](https://github.com/daaniiieel/nord-firefox) - no license
- [undiabler/nord-rofi-theme](https://github.com/undiabler/nord-rofi-theme) - no license
- [KiranWells/micro-nord-tc-colors](https://github.com/KiranWells/micro-nord-tc-colors) - MIT License - compatible with CC-Zero
- [EliverLara/Nordic](https://github.com/EliverLara/Nordic) - GPL 3.0 License - preserved for .icons & .themes
- [trgeiger/nord-kde](https://github.com/trgeiger/nord-kde) - GPL 3.0 License - preserved for .icons, .themes, and .config/Kvantum
- [OldTechBloke/dotfiles/.stalonetrayrc](https://gitlab.com/OldTechBloke/dotfiles/-/blob/master/.stalonetrayrc) - MIT License - compatible with CC-Zero

Wallpapers (in .wallpapers) are not my own, and I cannot claim any right to them. If you wish to use them, you must contact the original artist/project. They include:
- [Nord Mountains Night 5k](https://hdqwalls.com/nord-mountains-night-5k-wallpaper), which seems to be from the [GMK Nord keycap 'group buy'](https://candykeys.com/group-buys/gmk-nord)
- A modified version of [Daniel Leone's photograph of Poon Hill, Ghode Pani, Nepal](https://unsplash.com/photos/v7daTKlZzaw) from [vsthemes.org](https://vsthemes.org/en/pictures/other/14511-nord-wallpaper-pack.html)
- A photograph of the [Northern Lights](https://worldaroundmeapp.com/sustainable-tourism-in-scotland/) from "worldaroundmeapp.com"

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
- Font(s): [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts), specifically "Hack Nerd Font," & the standard [Hack](https://sourcefoundry.org/hack/)
- Status Tool (for spectrwm bar): [conky](https://github.com/brndnmtthws/conky)
- Text Editor: [micro](https://micro-editor.github.io/)
- File Manager: [fff, the [Freak]ing Fast File-Manager](https://github.com/dylanaraps/fff)

## Dotfiles Applications List
alphabetical, partial
- alacritty
- bpytop
- conky
- fff
- firefox
- fish
- kvantum
- lxappearance
- lxqt-config
- micro
- neofetch
- nitrogen
- pcmanfm-qt
- picom
- qt5ct
- ranger
- redshift
- rofi
- spectrwm
- wine
- yadm

## FreeBSD

### FreeBSD Package List
On a fresh FreeBSD 13+ installation, I can run the following to install most of what I need for these dotfiles (alphabetically):

```
pkg install alacritty barrier conky dsbmc dsblogoutmgr elinks fff firefox-esr fish font-manager hack-font Kvantum-qt5 lumina-calculator lumina-screenshot lxappearance lxqt-config metalock micro neofetch nerd-fonts nitrogen pavucontrol-qt pcmanfm-qt picom py37-ranger qt5ct qpdfview rclone rclone-browser redshift rofi spectrwm xorg xclip yadm
``` 

### FreeBSD System Configruation
This is my *personal* FreeBSD system configuration information that does not belong in dotfiles. Others might appreciate having a short checklist, especially for what might be important to add to /etc/rc.conf for various desktop FreeBSD installations. 

A few lines herein only matter when running an AMD graphics card.

#### /etc/rc.conf
```
kld_list="/boot/modules/amdgpu.ko fusefs" # amgdpu kernel module, loads drm-kmod & is required for xf86-video-amdgpu + fuse for rclone & DSBMD
dbus_enable="YES"                         # required for many xorg-related matters
webcamd_enable="YES"                      # webcam daemon
cupsd_enable="YES"                        # Common Unix Printing Service (CUPS)
ntpd_enable=YES"						  # Network time protocol daemon
ntpd_sync_on_start="YES"				  # Network time protocol deamon, enable large adjustment at start
ntpdate_enable="YES"
dsbmd_enable="YES"						  # DSBMD, an automounting daemon for FreeBSD (for which DSBMC is a Qt frontend)
```
Requires: 
```
pkg install drm-kmod xf86-video-amdgpu webcamd cups
```
and `ntpd` enabled as a service (easy option during installation).

#### /boot/loader.conf
```
vfs.root_mount_always_wait="1"            # partially alleviate CAM boot pause
sysctlinfo_load="YES"                      
sysctlbyname_improved_load="YES"
cuse_load="YES"
```

#### /etc/sysctl.conf
```
vfs.usermount=1                           # allows the end user to mount drives, etc., required for rclone & DSBMD
```

#### /etc/mail/aliases
```
root: [name@domain.tld]					  # routes mail agent messages intended for root to an actual address
```

## OpenBSD

### OpenBSD Package List
On a fresh OpenBSD 7.2+ installation, I can run the following to install most of what I need for these dotfiles (alphabetically):

```
pkg_add alacritty bash conky fff firefox-esr fish git hack-fonts lxappearance micro mupdf nitrogen pcmanfm-qt picom ranger qt5ct rclone rclone-browser redshift rofi spectrwm unzip
```

#### yadm

As non-root (main) user, with both bash and git already installed, execute the following two commands:

```
curl -fLo /usr/local/bin/yadm https://github.com/TheLocehiliosan/yadm/raw/master/yadm
chmod a+x /usr/local/bin/yadm
```

#### Kvantum
This requires `cmake` (`pkg_add cmake`).

```
git clone https://github.com/tsujan/Kvantum
cd Kvantum/Kvantum
mkdir build && cd build
cmake -DCMAKE_PREFIX_PATH=/usr/local/lib/qt5/cmake/ ../
make
doas make install
```

### OpenBSD System Configuration

This is my *personal* OpenBSD system configuration information that does not belong in dotfiles. Others might appreciate having a short checklist, especially for what might be important to add to various system configuration files for various desktop OpenBSD installations. 

A few lines herein only matter for running OpenBSD on a ThinkPad (I use an X270) or other laptop computer.


#### /etc/doas.conf

Enable root command access for the non-root user on a single-user system.

```
permit persist [username] as root
```

#### /etc/hostname.iwm0

Automatically connect to desired WiFi networks.

```
join "SSID1" wpakey "password1"
join "SSID2" wpakey "password2"
inet autoconf                 
```

#### Enable Automatic Power Management (Laptops)

Allow OpenBSD's default apmd for suspend/resume and similar while keeping it out of the way for the better obsdfreqd userland program to manage CPU frequencies and prohibit unnecessary battery drain. 

I like to set my CPU thermal limit values to be quite low on my laptop to avoid fan ramping and to save battery life by keeping CPU frequencies low when on battery power rather than A/C. `-T 75,45` sets the maximum allowed CPU temperature to 75°C on A/C and 45°C on battery, which seems to be a starting target that is undoubtedly very low but still within the realm of reason.

```
pkg_add obsdfreqd
rcctl enable apmd
rcctl set apmd flags -L 
rcctl start apmd
rcctl enable obsdfreqd
[rcctl set obsdfreqd flags -T 75,45]
rcctl start obsdfreqd 

````

#### Audio & Video
1) Enable both audio and video recording.

/etc/systcl.conf

```
kern.audio.record=1
kern.video.record=1
```

2) Allow regular user to access video devices.

`doas chown $USER /dev/video*`

#### Hack Nerd Font

1) Download Hack Nerd Font: https://www.nerdfonts.com/font-downloads
2) `unzip Hack`
3) `doas cp ~/Downloads/Hack/*.ttf /usr/local/share/fonts/`
4) `doas fc-cache`

## Debuntu 

### Debian/Ubuntu GNU/Linux Package List

On a fresh Debian or Ubuntu Mini Iso installation, I can run the following to install most of what I need for these dotfiles (alphabetically):

```
sudo apt install barrier compton conky elinks firefox fish font-manager htop libreoffice lxappearance lxqt-config micro neofetch nitrogen pavucontrol-qt pcmanfm-qt qt5ct qt5-style-kvantum qpdfview ranger rclone rclone-browser redshift rofi spectrwm stalonetray xclip xorg yadm``` 
```

#### Alacritty

```
sudo add-apt-repsitory ppa:aslatter/ppa
sudo apt install alacritty
```

#### fff

```
git clone https://github.com/dylanaraps/fff
cd fff
sudo make install
```
#### Nerd Fonts

```
git clone https://github.com/ryanoasis/nerd-fonts
cd nerd-fonts
./install.sh
```
#### Zotero

```
wget -qO- https://github.com/retorquere/zotero-deb/releases/download/apt-get/install.sh | sudo bash
sudo apt update
sudo apt install zotero
```

## Manjaro 

### Arch/Manjaro Package List

On a fresh Arch or Manjaro Architect installation, I can run the following to install most of what I need for these dotfiles (alphabetically):


```
pacman -S alacritty barrier bibletime conky elinks firefox font-manager htop kvantum-qt5 libreoffice-still lxappearance lxqt-config micro neofetch nitrogen pavucontrol-qt pcmanfm-qt qt5ct ranger rclone redshift rofi spectrwm stalonetray xclip xorg
```

```
pamac build latin-words nerd-fonts-complete rclone-browser yadm zotero
```

Bibles

```
pamac grb-git kjv-git vul-git
```

## Firefox
Here is what I use to achieve a homogenously Nord Theme web browsing experience in Firefox:
- Preferences --> Colors: Text: #ECEFF4, Background: #2E3440, Unvisited Links: #88C0D0, Visited Links: #B48EAD
- [Nord Theme by Crozbo](https://addons.mozilla.org/en-US/firefox/addon/nord-theme/)

For *fast* systems, use the Midnight Lizard extension for real-time webpage theming:
- Install [Midnight Lizard](https://addons.mozilla.org/en-US/firefox/addon/midnight-lizard-quantum/) 
- Install the ["Nord" color scheme by Paval Agarkov](https://midnight-lizard.org/schemes/index/full/?q=Nord&side=any&bg=any) from the official Midnight Lizard website

For *slow* systems and/or to conserve battery life on laptops, use the custom UserChrome.css from daaniiieel that I have in `.mozilla/firefox/PROFILE`:
- Type `about:config` in the URL bar and set `toolkit.legacyUserProfileCustomizations.stylesheets` to "true"


## FAQ
#### Why do you like FreeBSD and OpenBSD?
FreeBSD and OpenBSD are stable and sensible. The user has full control of them.

#### How do you recommend installing Debian or Ubuntu GNU/Linux for use with these dotfiles?
A plain Debian installation is the best option overall. A minimalist Ubuntu Server installation should work, too, but I have not tested that.

#### Why do you use spectrwm?
spectrwm is lightweight and fast. It has a plain text configuration file (`~/.config/spectrwm/spectrwm.conf`) that makes it easy to customize. It achieves almost everything that I might desire in a tiling window manager.

#### Why do you use the Nord Theme instead of a different color scheme -- or a custom one?
Nord is gentle on my eyes during long hours of scholarly research and writing. It is designed to be soothing rather than bold. It is also popular enough to be available for most utilities.

#### Why do you use conky instead of a shell script to display system information in the spectrwm status bar?
spectrwm has its own status bar, which is what I use -- with conky relaying my system status information. On its own, the spectrwm status bar is capable of displaying information from a shell script (often called `baraction.sh` in examples). However, shell scripts are *not* portable (cross-platform). A conky configuration (.conkyrc) *is* (mostly) portable. To display conky output in the spectrwm bar, set `bar_output = conky` and make sure to have `+A` in `bar_format`. See my `.config/spectrwm/spectrwm.conf` and .conkyrc for how I have achieved my desired effect.

#### Why is this repository called "Theological Dotfiles"?
I am a professional Catholic historical theologian. These dotfiles help me theologize.
