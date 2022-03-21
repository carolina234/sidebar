let sidebar = document.getElementById("sidebar")
function openUp() {
    if (sidebar.className == "open")
     {
        sidebar.className = "close"
    } 
    else {
        sidebar.className = "open"
    }
}