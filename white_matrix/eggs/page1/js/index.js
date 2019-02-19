var lines = {
    "sys start": "System booted.",
    "login": "Invalid params {missing admin,pass}",
    "cd Reg/ -1": "Access Denied",
    "debug cd Reg/": "Access Denied",
    "sys restart, recovery_mode": "Granted. System Rebooting.",
    "*": "System Booted.<br />Warning: System is in recovery mode, Possible security threat detected",
    "cd Reg/": "Directory: <br />&nbsp;&nbsp;&nbsp;&nbsp;sec/<br />&nbsp;&nbsp;&nbsp;&nbsp;login.secu<br />&nbsp;&nbsp;&nbsp;&nbsp;firewall.secu",
    "exec firewall.secu": "Firewall status: Enabled",
    "sys exec firewall.secu-disable": "Firewall status: Disabled. System in danger.",
    "sys upload nasty_file.vir": "Upload Complete.",
    "sys exec nasty_file.vir-/login.secu/": "Complete.",
    "debug Reg/sec/pass.secu -1": "Debugging complete, pass.secu is secure.",
    "sys exec nasty_file.vir/sec/pass.secu": "Complete.",
    "debug Reg/sec/pass.secu": "Debugging complete. pass.secu is NOT secure. File may have been compromised.",
    "file read Reg/sec/pass.secu": "File Contents:<br />&nbsp;&nbsp;&nbsp;&nbsp;admin: Project Genesis<br />&nbsp;&nbsp;&nbsp;&nbsp;password: Renaissance",
    "login, Project Genesis, Renaissance": "Login complete!<br /><br />Welcome to Shadows of the Round Table.<br /><br />Cell Evolution: http://cellevo.net <br />Last Trip: https://puzzle-lt.com<br />Project Genesis: https://github.com/LingTian/GenesisContract<br />"
}
var line_index = 0;
var array_index = 0;
var sendstring = "";
var clear = false;

var input = setInterval(function() {
    $(".input").toggleClass("blink");
}, 500);

var type = setInterval(function() {
    if (Object.keys(lines)[array_index][line_index] == "*") {
        
    }
    sendstring += Object.keys(lines)[array_index][line_index];
    $(".input").text(sendstring);
    if (line_index >= Object.keys(lines)[array_index].length - 1) {
        if (Object.keys(lines)[array_index][line_index] != "*") {
            $(".lines").prepend("<li>" + sendstring + "</li>");
        }
        $(".lines").prepend("<li class='system'>" + lines[Object.keys(lines)[array_index]] + "</li>");
        sendstring = "";
        line_index = 0;
        array_index++;
        $(".input").text("");
    } else {
        line_index++;
    }
    if (array_index >= Object.keys(lines).length) {
        clearInterval(type);
    }
}, 100);
