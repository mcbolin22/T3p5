// Declare JS data that we want to store
let cssThemes = [

];

let pageTheme = 'dark';


/**
 * Retrieve, assign and return the latest stored CSS theme from the browser localstorage.
 * @author Colin
 * 
 * @returns Array of objects.
 */
// read the localstorage
// read css themes
function getStoredCssTheme(){
    // Update the cssTheme array
    let rawJsonStringCssThemes = localStorage.getItem('cssThemes');
    cssThemes = JSON.parse(rawJsonStringCssThemes);

    //Return the updated data
    return cssThemes;

}

/**
 * Retrieve, assign and return the page theme from the browser localstorage.
 * @author Colin
 * 
 * @returns String. Should be 'light' or 'dark .
 */
// read pagetheme
function getStoredPageTheme(){
    // Update the pageTheme variable
    pageTheme = localStorage.getItem('pageTheme');

    //Return the updated data
    return pageTheme;

}

// create/update localstorage
function setCssThemesToStorage(){
    let dataAsJsonString = JSON.stringify(cssThemes);
    localStorage.setItem('cssThemes', dataAsJsonString);
}

/*
cssThemes = [
    {
        name: 'theme1',
        hex: '000000'
    },
    {
        name: 'theme2',
        hex: '000001'
    }

If above is converted to a string it will look like this:

"[[object Object],[object Object]]"

If we use the JSON.stringify() method it will look like this:

JSON.stringify(cssThemes) = '[{"name":"theme1","hex":"000000"},{"name":"theme2","hex":"000001"}]';
];

JSON is preferred because it is a standard format that can be read by any language.
*/

function setPageThemeToStorage(){
    localStorage.setItem('pageTheme', pageTheme);
}

// check if data exists
// if it does, retrieve it
// else, set default variables to localstorage
if (localStorage.getItem("pageTheme") && localStorage.getItem("cssThemes")?.length > 0) {
    getStoredCssTheme();
    getStoredPageTheme();
} else {
    setCssThemesToStorage();
    setPageThemeToStorage();
}

// delete localstorage