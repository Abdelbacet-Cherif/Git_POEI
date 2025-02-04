/**
 * Controleur de la route principale
 *
 * @param {import('express').Request} req - La requête
 * @param {import('express').Response} res - La réponse
 *
 * @returns {Promise<void>}
 */
export const mainController = (req, res) =>
  res.send("Bienvenue dans l'API musique !");
