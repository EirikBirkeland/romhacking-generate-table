import generateTable from './generateTable.mjs';

describe('generateTable utility', () => {
    it('creates a table for lowercase', () => {
        const resLower = generateTable("a", 40);

        expect(resLower).toMatchSnapshot();
    });
    it('creates a table for uppercase', () => {
        const resUpper = generateTable("A", 80);

        expect(resUpper).toMatchSnapshot();
    });
});