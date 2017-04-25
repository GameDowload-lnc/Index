window.onerror = function (msg, url, line, col, error) {
var lineText = line == 0 ? "" : "<br /><span>Line: " + (line) + "</span>";var errorMessage = msg + lineText;window.parent.document.querySelector("#jsConsole .errorMessage").innerHTML = errorMessage;return false;
}