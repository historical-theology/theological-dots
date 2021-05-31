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
## 							Ubuntu Edition		 
## 					https://www.coreystephan.com				   	 
## 				https://github.com/historical-theology		   		 
##-------------------------------------------------------------------##

compton &
nitrogen --restore &
redshift &
liquidctl set pump speed 20 &
liquidctl set fan speed 10 &
liquidctl set sync color fading 7851a9 ffffff &
barriers --name corey-ubuntu --no-tray --enable-crypto --restart --config /home/corey/barrier.conf &
insync start &
