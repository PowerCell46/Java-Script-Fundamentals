function languages(country) {
    
let language = "";

switch(country) {
    case "England": language = "English"; break;
    case "USA": language = "English"; break;
    case "Spain": language = "Spanish"; break;
    case "Argentina": language = "Spanish"; break;
    case "Mexico": language = "Spanish"; break;
    default: language = "unknown"; break;
}

console.log(language);

}
