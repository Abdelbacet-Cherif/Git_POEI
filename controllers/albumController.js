export const albumController = async (req, res) => {
  try {
    const { album } = req.params;

    if (!album) {
      return res
        .status(400)
        .json({ error: "Veuillez fournir un nom d'album." });
    }

    const url = `https://api.deezer.com/search/album?q=${encodeURIComponent(
      album
    )}`;
    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des albums :", error);
    res.status(500).json({ error: "Erreur interne du serveur." });
  }
};
