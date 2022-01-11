
    function abbrUpper(text){
        if(text === ''){
            return '';
        }
        if (text=== null){
            return null;
        }
        const words = text.split(' ')
        let result = '';
        for (const word of words){
            result += word[0].toUpperCase();
        }
        return result;
    }

    module.exports = {abbrUpper};