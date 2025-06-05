const mongoose = require('mongoose');
const { User, createUser } = require('../functions/userModel.js');

describe('User Model Test', () => {
    beforeEach(() => {
        jest.clearAllMocks(); 
    });

    it('should create a new user', async () => {
        // Arrange
        const mockUser = {
            age: 100,
            email: "todd.nash@rdpolytech.ca",
            firstName: "Todd Nash",
            password: "password",
        };
        
        // Action
        jest.spyOn(User.prototype, 'save').mockResolvedValue(mockUser);
        const result = await createUser('Todd Nash', 'todd.nash@rdpolytech.ca', 'password', 100);
        
        // Assert
        expect(result).toEqual(expect.objectContaining(mockUser));
        expect(User.prototype.save).toHaveBeenCalledTimes(1); 
    });
});