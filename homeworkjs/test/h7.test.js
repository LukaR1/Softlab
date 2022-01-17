const {expect} = require('chai')
const {abbrUpper} = require("../src/h7");

describe('h7 Test Suit', () => {

    it('should return null', () => {
        const result = abbrUpper(null);
        expect(result).to.equal(null);
    });

    it('should return epmty string', () => {
        const text = '';
        const result = abbrUpper(text);
        expect(result).to.equal('');
    });

    it('should return LIDSACAE', () => {
        const text = "Loren ipsum dolor sit amet, consectetur adipiscing elit.";
        const result = abbrUpper(text);
        expect(result).to.equal('LIDSACAE');
    });

    it('should return IHU', () => {
        const text = "Iranis Humanitaruli Universiteti";
        const result = abbrUpper(text);
        expect(result).to.equal('IHU');
    });
})