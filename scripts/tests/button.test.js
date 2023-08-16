/**
 * @jest-environment jsdom
 */

const buttonClick = require('../button');

beforeEach(() => {
    let fs = require('fs');
    let fileContents =fs.readFileSync('index.html', 'utf-8');
    document.open();
    document.write(fileContents);
    document.close();
});

describe('DOM tests', () => {
    test('expects p content to change', () => {
        buttonClick();
        expect(document.getElementById('par').innerHTML).toEqual('You Clicked');
    });
    test('h1 should exist', ()=> {
        expect(document.getElementsByTagName('h1').length).toBe(1);// length expected to be 1 because there is just (1) h1 if there where (2) or (3)  the length would be (2) or (3) respectively
    });
});

