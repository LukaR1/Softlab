function abbrUpper(text) {
    if (!text) {
        return text;
    }
    return text.split(' ')
        .map(word => word[0].toUpperCase())
        .join('');
}

module.exports = {abbrUpper};