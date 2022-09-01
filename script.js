var isDark = false

const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

function setMode() {
    if (userPrefersDark) {
        console.log('dark')
        document.getElementById("modeSelector").value = "light_mode"
        isDark = true
        return(isDark)
    } else if (userPrefersLight) {
        console.log('light')
        document.getElementById("modeSelector").value = "dark_mode"
        isDark = false
        return(isDark)
    } else { console.log('error')}
}
function modeChange() {
    if (isDark) {
        document.getElementById("modeSelector").value = "dark_mode"
        document.body.classList.toggle("light-mode");
        isDark = false
        console.log('lightmode')
        return(isDark)
    } else if (isDark === false) {
        document.getElementById("modeSelector").value = "light_mode"
        document.body.classList.toggle("light-mode");
        isDark = true
        console.log('darkmode')
        return(isDark)
    } else {
        console.log("mode selector error")
    }
}

setMode()
console.log(isDark)
if (isDark) {

} else {
    modeChange()
}