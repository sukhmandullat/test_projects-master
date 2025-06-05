const fetchData = require('../functions/api.js');

 //Mock this global fetch function
global.fetch = jest.fn();


//Test Suite
describe('fetchData', ()  =>{
   beforeEach(()=>{
    //reset the mock object before each test
    fetch.mockClear();
   });

    //Test cases
    it('fetches data from an API endpoint and returns it as JSON', async () =>{

        //AAA pattern

        //Assemble
        //mock the function response
        const mockResponse = {userId: 1, id: 1, title: 'delectus aut autem', completed: false};

        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse)
        });

        //Action
       const data = await fetchData('http://jsonplaceholder.typicode.com/todos/1');

        //Assert
      expect(data).toEqual(mockResponse);
      expect(fetch).toHaveBeenCalledWith('http://jsonplaceholder.typicode.com/todos/1');

    });

    //second test case for negative testing
    it('should throw an error when response is not okay', async ()=>{

        //Assemble & Action
        fetch.mockResolvedValueOnce({ok: false});

        //Assert
        await expect(fetchData('http://jsonplaceholder.typicode.com/todos/1')).rejects.toThrow('There was a networking error');
    });
});


