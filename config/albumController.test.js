import { albumController } from "../controllers/albumController.js";

/**
 * Tests unitaires pour la fonction searchAlbum
 */
describe("Test de la fonction albumController", () => {
  /**
   * Vérifie que la fonction renvoie 400 si le paramètre 'album' est manquant
   */
  it("devrait retourner 400 si le paramètre 'album' est manquant", async () => {
    // Mock des objets req et res
    const req = { params: {} }; // Pas de paramètre 'album'
    const res = {
      status: jest.fn().mockReturnThis(), // Simule `res.status()`
      json: jest.fn(), // Simule `res.json()`
    };

    await albumController(req, res);
    expect(res.status).toHaveBeenCalledWith(400); // Vérifie que le statut est 400
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        error: "Veuillez fournir un nom d'album.",
      })
    );
  });

  /**
   * Vérifie que la fonction renvoie les résultats de l'API Deezer pour un artiste valide
   */
  it("devrait retourner les résultats de l'API Deezer pour un artiste valide", async () => {
    const req = { params: { album: "Discovery" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await albumController(req, res);

    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });
});
