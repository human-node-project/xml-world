
var jeda = {        // global object
    module: {},     // contains all modules
    service: {},    // contains all services
    in: {           // internals
    }
};



/*
 * Init when DOM ready
 */

$(document).ready(function () {

    // DOM nodes
    jeda.in.panelDIV = $("#panel")[0];
    jeda.in.mainDIV = $("#main")[0];
    jeda.in.modules = $("#modules")[0];

    // page splitter
    $("#splitter").jqxSplitter({
        width: "100%",
        height: "100%",
        panels: [
            { size: "15%", min: 120 },
            { size: "85%" }
        ] 
    }).on("resize", function(ev) {
        $("#title").html($("#panel").width() < 250 ? "Lab" : "The Human Node Project Lab");
    });
    $("#title").html($("#panel").width() < 250 ? "Lab" : "The Human Node Project Lab");

    // T3js initialisation

    for (let current in jeda.module) {

        var m = jeda.module[current];
        var html = m.html || '';
        jeda.in.addBoard(m.name, html);
    }

    // Sockjs url

    jeda.in.sockjs_url = "/jeda";

    // Init

    setTimeout( function() {

        console.log("Initialisation");

        // Services and modules

        for (let current in jeda.service) {
            var s = jeda.service[current];
            console.log("  addService -> "+current);
            Box.Application.addService(current, s.code);
        }        
        for (let current in jeda.module) {
            var m = jeda.module[current];
            var name = jeda.in.replaceSpaces(m.name);
            console.log("  addModule  -> "+m.name);
            Box.Application.addModule(name, m.code);
        }

        // T3js init

        Box.Application.init({
            debug: true
        });

        // Board init

        for (let current in jeda.module) {
            var m = jeda.module[current];
            var name = jeda.in.replaceSpaces(m.name);
            console.log("  start   -> "+m.name);
            Box.Application.start($("#board_"+name+" .board_item_content")[0]);
        }
        console.log("Init done.");

    }, 1000);
});



/*
 * Helpers
 */

jeda.in.replaceSpaces = function(text) {
    return text.replace(/ /g,'_');
}



/*
 * File loading functions
 */

jeda.in.loadJS = function(filename) {
    
    var fileref=document.createElement('script')
    fileref.setAttribute("type","text/javascript")
    fileref.setAttribute("src", filename)
    if (typeof fileref!="undefined")
        jeda.in.modules.appendChild(fileref)
}

jeda.in.loadCSS = function(filename) {
    
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filename)
    if (typeof fileref!="undefined")
        document.head.appendChild(fileref)
}



/*
 * board manipulation
 */

jeda.in.addBoard = function(givenName, html) {
    
    if (jeda.in.mainDIV.lastChild) {
        jeda.in.mainDIV.lastChild.remove();
        jeda.in.mainDIV.lastChild.remove();
    }

    var name = jeda.in.replaceSpaces(givenName);

    jeda.in.panelDIV.innerHTML += `
    <div
        id="panel_item_${name}"
        class="panel_item"
        style="font-style: normal; color: #999;"
        onclick="jeda.in.toggleVisibility(this,'${name}')">
            ${givenName}
    </div>
    `;

    jeda.in.mainDIV.innerHTML += `
    <div
        id="board_${name}"
        class="board_item"
        style="display: block;">
            <div class="board_item_title"><span class="board_item_title_text">${givenName}</span></div>
            <div data-module="${name}" class="board_item_content">${html}</div>
    </div><br>
    `;
}

jeda.in.toggleVisibility = function(item, givenName) {

    var name = jeda.in.replaceSpaces(givenName);
    var elem = $("#board_"+name)[0];
    if (elem.style.display === "block") {
        elem.style.display = "none";
        item.style["font-style"] = "italic";
        item.style.color = "#777";
    } else {
        elem.style.display = "block";
        item.style["font-style"] = "normal";
        item.style.color = "#999";
    }
}



/*
 * Window resize
 */

window.onresize = function() {

    setTimeout(function() {
        $("#title").html($("#panel").width() < 250 ? "Lab" : "The Human Node Project Lab");
    }, 0);
}




