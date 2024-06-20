const themes = {
    light: {
        "50": "#edf4fd",
        "100": "#dbe9fc",
        "200": "#b6d3f8",
        "300": "#91bcf4",
        "400": "#6da6f0",
        "500": "#4890ec",
        "600": "#3f7ed3",
        "700": "#3569b9",
        "800": "#2b559f",
        "900": "#224285",
        "950": "#082c5b"
    },
    dark: {
        "50": "#e5ebf4",
        "100": "#cbd8e9",
        "200": "#97b1d2",
        "300": "#6389bc",
        "400": "#406495",
        "500": "#294160",
        "600": "#263b58",
        "700": "#22364f",
        "800": "#1e3047",
        "900": "#1b2a3e",
        "950": "#19273a"
    }
};


// update #pageThemeHeading text
function updatePageThemeHeading(){
    let headingToUpdate = document.getElementById('pageThemeHeading');
    headingToUpdate.textContent = getStoredPageTheme();
}

// update #pageThemeButton text
function updatePageThemeButtonText(){
    let buttonToUpdate = document.getElementById('pageThemeButton');

    let textToShow = "";

    if (getStoredPageTheme() == 'dark'){
        textToShow = "Toggle to Light";
    } else {
        textToShow = "Toggle to Dark";
    }

    buttonToUpdate.textContent = textToShow;
}

// update #pageThemeButton onclick
function togglePageTheme(){
    if (getStoredPageTheme() == 'dark'){
        pageTheme = 'light';
    } else {
        pageTheme = 'dark';
    }
    setPageThemeToStorage();
    applySavedTheme();
}

// apply theme from localstorage
function applySavedTheme(){
    updateCssVariables();
    updatePageThemeButtonText();
    updatePageThemeHeading();

}

// update css variables based on current themes
function updateCssVariables(){
    let themeName = getStoredPageTheme();
    // for every css variable in themes[themeName]
    for (const variable in themes[themeName]){
        document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
        console.log("Updated CSS variable --" + variable);
    }
}

let togglePageThemeButton = document.getElementById('pageThemeButton');
togglePageThemeButton.addEventListener('click', togglePageTheme);

applySavedTheme();