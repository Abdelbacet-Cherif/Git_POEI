import { chartsController } from "../controllers/chartsController.js";

/**
 * Tests unitaires pour la fonction getCharts
 */
describe("Test de la fonction getCharts", () => {
  /**
   * Vérifie que la fonction retourne un json
   */

  it("devrait retourner les résultats de l'API Deezer pour les charts", async () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await chartsController(req, res);

    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });
});
