function create_player(name, list) {
    var label = document.createElement("h3");
    label.innerText = name;
    label.setAttribute("style", "text-align: center;")
    document.getElementById("root").appendChild(label);
    var node = document.createElement("div");
    node.setAttribute("id", name + "player");
    node.setAttribute("style", "width: 90%; height: 100%; margin-left: auto; margin-right: auto; margin-bottom: 100px;");
    document.getElementById("root").appendChild(node);
    new APlayer({
        element: document.getElementById(name + "player"),
        mini: false,
        autoplay: false,
        lrcType: false,
        mutex: true,
        preload: 'metadata',
        audio: list
    });
}