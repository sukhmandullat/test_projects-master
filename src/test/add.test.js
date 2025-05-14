const add = require('../functions/add.js');

test('ADD  2 + 2 to equal 4', ()=>{
    expect(add(2,2)).toBe(4);
});