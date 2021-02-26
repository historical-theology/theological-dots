# Defined in - @ line 1
function lsd --wraps='lsd -a -F' --description 'alias lsd=lsd -a -F'
 command lsd -a -F $argv;
end
