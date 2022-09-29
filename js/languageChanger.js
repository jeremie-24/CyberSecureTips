window.addEventListener('DOMContentLoaded', () => {
    let languages = ["EN", "FR"];
    let currentLanguageIndex = 0;
    let clickCount = 0;
    updateLanguage(0)
    $( "#languageButton" ).on( "click", function() {
        clickCount++;
        if(clickCount % 2 != 0) // POur fix le css qui click 2 fois au lieu d'une
            switchLanguage();
    });


    function switchLanguage(){
        currentLanguageIndex++;
        updateLanguage(currentLanguageIndex);
    }
    function updateLanguage(languageIndex){
        
        $("." + languages[(languageIndex + 1) % languages.length]).hide();
        $("." + languages[languageIndex % languages.length]).show();
    }
})
