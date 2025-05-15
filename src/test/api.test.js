const fetchdata = require('../functions/api.js')

describe('fetchdata',() =>{
// mock this global fetch function
global.fetch = jest.fn();




    if('fetches data from npm endpoint annd returns it as json ', ()=>{
       //mock the function response
       const mockResponse = {userId: 1, title: '"delectus aut autem"' , completed: false};
    
    fetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockResponse)
    });
    
    });
});