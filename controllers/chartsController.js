/**
 * Renvoie les tops Deezer.
 *
 * @param {import('express').Request} req - La requ te
 * @param {import('express').Response} res - La r ponse
 * @returns {Promise<void>}
 */
export const chartsController = async (req, res) => {
  //const { name } = req.params;
  await fetch(`https://api.deezer.com/chart`)
    .then((response) => response.json()) // Convertir la réponse en JSON
    .then((data) => res.json(data)) // Afficher les données
    .catch((error) => console.error("Erreur :", error)); // Gérer les erreurs
};
