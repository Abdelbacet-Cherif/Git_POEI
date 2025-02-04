import { mainController } from "../controllers/mainController.js";

/**
 * Test for the main route display
 */
test("Affichage de la route principale", async () => {
  // Mock request object, no parameters needed for firstController
  const req = {};

  // Mock response object with a jest function simulating res.send
  const res = {
    send: jest.fn(),
  };

  // Call the firstController with the mock request and response
  await mainController(req, res);

  // Assert that res.send was called with the expected welcome message
  expect(res.send).toHaveBeenCalledWith("Bienvenue dans l'API musique !");
});
