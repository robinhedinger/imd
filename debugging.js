$(document).keypress(function(e) {
    if(e.which == 13) {
    var x = document.getElementById("font-field").value;
        $("#titletext").css("font-family",x);
        $("#titletext2").css("font-family",x);
    }
});

function font(){

    var x = document.getElementById("font").value;
        $("#titletext").css("font-family",x);
        $("#titletext2").css("font-family",x);
    }

//HTML für Fontchanging
//<input type="text" id="font-field" value="Patua One">
//<select id="font" onChange="font()">
//  <option value="LIQUIDO-Fluid">Liquido Fluid</option>
//  <option value="Patua One">Patua One</option>
//  <option value="Jaapokki enchance">Jaapokki Enchance</option>
//  <option value="MAXWELL BOLD">Baxwell</option>
//</select>
