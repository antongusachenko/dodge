const spoilers = document.querySelectorAll('.spoiler')
for (const spoiler of spoilers ) {
    spoiler.addEventListener ('click' ,() => {
        clearActiveClasses()
        spoiler.classList.add('active')
    })
}

function clearActiveClasses(){
    spoilers.forEach((spoiler)  => {
        spoiler.classList.remove('active')
    })
}