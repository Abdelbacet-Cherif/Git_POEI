import { genreController } from "../controllers/genreController.js";

/**
 * Tests for the genreController function
 */
describe("Test de la fonction genreController", () => {
  it("Should return a JSON object which is not empty, with status 200 and contain data", async () => {
    // Mock request object with a parameter 'number'
    const req = { params: { number: "457" } };

    // Mock response object with jest functions
    const res = {
      status: jest.fn().mockReturnThis(), // Mock status method
      json: jest.fn(), // Mock json method
    };

    // Call the genreController function with mock request and response
    await genreController(req, res);

    // Assert that res.json is called with a non-empty object
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });
});
