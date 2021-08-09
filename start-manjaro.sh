#!/bin/bash

##-------------------------------------------------------------------##
##   ____                       ____  _             _
##  / ___|___  _ __ ___ _   _  / ___|| |_ ___ _ __ | |__   __ _ _ __
## | |   / _ \| '__/ _ \ | | | \___ \| __/ _ \ '_ \| '_ \ / _` | '_ \
## | |__| (_) | | |  __/ |_| |  ___) | ||  __/ |_) | | | | (_| | | | |
##  \____\___/|_|  \___|\__, | |____/ \__\___| .__/|_| |_|\__,_|_| |_|
##                      |___/                |_|
##
## 				Corey Stephan's Autostart Script
## 					Thinkpad + Manjaro Edition		 
## 					https://www.coreystephan.com				   	 
## 				https://github.com/historical-theology		   		 
##-------------------------------------------------------------------##

picom &
nitrogen --restore &
/usr/lib/geoclue-2.0/demos/agent &
redshift &
lxqt-policykit-agent &
# lxqt-notificationd &
xinput set-prop "SynPS/2 Synaptics TouchPad" "libinput Accel Speed" 0.6 &
xinput set-prop "TPPS/2 Elan TrackPoint" "libinput Accel Speed" -0.2 &
# liquidctl set pump speed 20 &
# liquidctl set fan speed 10 &
# liquidctl set sync color fading 7851a9 ffffff &
# barrierc --name corey-laptop --no-tray --restart --enable-crypto 192.168.50.244:24800 &
# insync start &
