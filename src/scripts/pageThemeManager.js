
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
    updatePageThemeButtonText();
    updatePageThemeHeading();
}

let togglePageThemeButton = document.getElementById('pageThemeButton');
togglePageThemeButton.addEventListener('click', togglePageTheme);