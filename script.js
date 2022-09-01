var isDark = true
function modeChange() {
    if (isDark) {
        document.getElementById("modeSelector").value = "dark_mode"
        document.body.classList.toggle("light-mode");
        isDark = false
        return(isDark)
    } else if (isDark === false) {
        document.getElementById("modeSelector").value = "light_mode"
        document.body.classList.toggle("light-mode");
        isDark = true
        return(isDark)
    } else {
        console.log("mode selector error")
    }
}