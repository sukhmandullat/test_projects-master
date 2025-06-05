const fetchData = require('../functions/api.js');

// Mock the global fetch function
global.fetch = jest.fn();

// Test Suite 
describe('fetchData', () => {

    beforeEach(() => {
        // Reset the mock object before each test 
        fetch.mockClear();
    });

    it('fetches data from npm endpoint and returns it as JSON', async () => {
        // Arrange
        const mockResponse = {
            userId: 1,
            title: 'delectus aut autem',
            completed: false
        };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse)
        });

        // Act
        const data = await fetchData('http://jsonplaceholder.typicode.com/todos/1');

        // Assert
        expect(data).toEqual(mockResponse);
        expect(fetch).toHaveBeenCalledWith('http://jsonplaceholder.typicode.com/todos/1');
    });

    it('should throw an error when the response is not okay', async () => {
        fetch.mockResolvedValueOnce({ ok: false });

        // Assert
        await expect(fetchData('http://jsonplaceholder.typicode.com/todos/1'))
            .rejects
            .toThrow('There was a networking error');
    });
});
