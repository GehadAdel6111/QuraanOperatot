function dropDown() {
    var dropdownContent = document.getElementById("dropDownContent");
    dropdownContent.classList.toggle("show");
    document.getElementById("dropDownIcon").classList.add("img")
}

function toggleLoop() {
    var audio = document.getElementById("audio");
    audio.setAttribute("loop" , "")
    hideDropdown()
}
function toggleNoLoop(){
    var audio = document.getElementById("audio");
    audio.removeAttribute("loop")
    hideDropdown()
}
function hideDropdown() {
    var dropdownContent = document.getElementById("dropDownContent");
    dropdownContent.classList.remove("show");
}