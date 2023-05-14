let sideBars = [
    "HOME", "Intoduction", "Editor","Basic","Element","Attributes","Heading","Paragraps","Style","Formatting","Quotations","Comments","Color","CSS",
    "Links","Images","Favicon","Table","Block& Inline","Classes","ID","Iframes","JavaScript","File Paths","Head","Layout","Resposive","Computercode"
    ,"Semantics","Style Guide","Entities","Symbols",

]

function loadSideBar() {
    let text = "<h1>HTML</h1> <ul>";

    for (let index = 0; index < sideBars.length; index++) {
        text += '<li><a href="#"> HTML ' + sideBars[index] + '</a></li>'
    }
    text += "</ul>";

    document.getElementById("sidbar").innerHTML = text;
}

document.addEventListener("DOMContentLoaded", () => {
    loadSideBar()
  });