export const artistController = async (req, res) => {
  try {
    const { artist } = req.params;

    if (!artist) {
      return res
        .status(400)
        .json({ message: "Le paramètre 'artist' est requis." });
    }

    const url = `https://api.deezer.com/search?q=artist:"${artist}"`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la récupération des données.",
        error: error.message,
      });
  }
};
