##-------------------------------------------------------------------##
##   ____                       ____  _             _
##  / ___|___  _ __ ___ _   _  / ___|| |_ ___ _ __ | |__   __ _ _ __
## | |   / _ \| '__/ _ \ | | | \___ \| __/ _ \ '_ \| '_ \ / _` | '_ \
## | |__| (_) | | |  __/ |_| |  ___) | ||  __/ |_) | | | | (_| | | | |
##  \____\___/|_|  \___|\__, | |____/ \__\___| .__/|_| |_|\__,_|_| |_|
##                      |___/                |_|
##
## 			        Corey Stephan's Fish Config		 
## 					https://www.coreystephan.com				   	 
## 				https://github.com/historical-theology		   		 
##-------------------------------------------------------------------##

##-------------------------------------------------------------------##
##		 					Basic Settings	    		 		 	 
##-------------------------------------------------------------------##

set fish_greeting            # Turns off the intro message when pulling up fish shell
set TERM "xterm-256color"    # Sets the terminal type
set EDITOR "micro"           # Sets $EDITOR to micro (for CLI editor)
set VISUAL "micro"           # Sets $VISUAL to micro (for GUI editor)

##-------------------------------------------------------------------##
##		 					  Nord Theme	    		 		 	 
##-------------------------------------------------------------------##

set fish_color_normal normal
set fish_color_command 81a1c1
set fish_color_quote a3be8c
set fish_color_redirection b48ead
set fish_color_end 88c0d0
set fish_color_error ebcb8b
set fish_color_param eceff4
set fish_color_comment 434c5e
set fish_color_match --background=brblue
set fish_color_selection white --bold --background=brblack
set fish_color_search_match bryellow --background=brblack
set fish_color_history_current --bold
set fish_color_operator 00a6b2
set fish_color_escape 00a6b2
set fish_color_cwd green
set fish_color_cwd_root red
set fish_color_valid_path --underline
set fish_color_autosuggestion 4c566a
set fish_color_user brgreen
set fish_color_host normal
set fish_color_cancel -r
set fish_pager_color_completion normal
set fish_pager_color_description B3A06D yellow
set fish_pager_color_prefix white --bold --underline
set fish_pager_color_progress brwhite --background=cyan

##-------------------------------------------------------------------##
##		 					    Prompt	    		 		 	 
##-------------------------------------------------------------------##

function fish_prompt --description 'Screen Savvy prompt'
    if test -z "$WINDOW"
        printf '%s%s@%s%s%s%s%s> ' (set_color yellow) $USER (set_color purple) (prompt_hostname) (set_color $fish_color_cwd) (prompt_pwd) (set_color normal)
    else
        printf '%s%s@%s%s%s(%s)%s%s%s> ' (set_color yellow) $USER (set_color purple) (prompt_hostname) (set_color white) (echo $WINDOW) (set_color $fish_color_cwd) (prompt_pwd) (set_color normal)
    end
end

##-------------------------------------------------------------------##
##		 					    Aliases	    		 		 	 
##-------------------------------------------------------------------##

## Work

alias vpn='sudo openconnect --protocol=gp --user=9552stephac vpn.marquette.edu'

## Dissertation

alias tom='elinks /home/corey/AquinasOperaOmnia/index.html'
alias summa='elinks /home/corey/AquinasOperaOmnia/summa/index.html'
alias tlg='firefox https://stephanus.tlg.uci.edu/index.php#login=true'
alias newadvent="cd /home/corey/new-advent && elinks index.html"


##-------------------------------------------------------------------##
##		 					  Abbreviations	    		 		 	 
##-------------------------------------------------------------------##

abbr lsd 'lsd -A -F -h'
abbr reboot 'sudo reboot'
abbr poweroff 'sudo poweroff'
abbr quirk 'xprop | grep WM_CLASS'
abbr missing 'pkg install -Ay $(make -DBATCH missing)'

##-------------------------------------------------------------------##
##		 				    Puff the OpenBSD Fish
##                              by The Kat
##                   https://www.asciiart.eu/animals/fish	    		 		 	 
##-------------------------------------------------------------------##
#
#                             .
#                             A       ;
#                   |   ,--,-/ \---,-/|  ,
#                  _|\,'. /|      /|   `/|-.
#              \`.'    /|      ,            `;.
#             ,'\   A     A         A   A _ /| `.;
#           ,/  _              A       _  / _   /|  ;
#          /\  / \   ,  ,           A  /    /     `/|
#         /_| | _ \         ,     ,             ,/  \
#        // | |/ `.\  ,-      ,       ,   ,/ ,/      \/
#        / @| |@  / /'   \  \      ,              >  /|    ,--.
#       |\_/   \_/ /      |  |           ,  ,/        \  ./' __:..
#       |  __ __  |       |  | .--.  ,         >  >   |-'   /     `
#     ,/| /  '  \ |       |  |     \      ,           |    /
#    /  |<--.__,->|       |  | .    `.        >  >    /   (
#   /_,' \\  ^  /  \     /  /   `.    >--            /^\   |
#         \\___/    \   /  /      \__'     \   \   \/   \  |
#          `.   |/          ,  ,                  /`\    \  )
#            \  '  |/    ,       V    \          /        `-\
#             `|/  '  V      V           \    \.'            \_
#              '`-.       V       V        \./'\
#                  `|/-.      \ /   \ /,---`\         kat
#                   /   `._____V_____V'
#                              '     '
#   
