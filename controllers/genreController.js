/**
 * Genre controller
 * Fetches and returns genre data from the Deezer API based on a number parameter.
 *
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @returns {Promise<void>}
 */
export const genreController = async (req, res) => {
  try {
    // Fetch genre data from Deezer API using the number parameter from request
    const response = await fetch(
      `https://api.deezer.com/genre/${req.params.number}`
    );

    // Parse the response data as JSON
    const data = await response.json();

    // Send the parsed data as JSON response
    res.json(data);
  } catch (error) {
    // Log the error and respond with an internal server error message
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
