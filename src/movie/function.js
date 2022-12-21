const Movie = require("./table");

exports.createMovie = async (movieObj) => {
  try {
    const newMovie = await Movie.create(movieObj);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async () => {
  try {
    // tidy this up with a for loop.
    const output = await Movie.findAll();
    console.log(output);
  } catch (error) {
    console.log(error);
  }
};

// put the update and delete queries here
exports.updateMovies = async (movieObj) => {
  try {
    // put code to update actor field here
    if (movieObj.actor) {
      await Movie.update(
        { actor: movieObj.actor },
        {
          where: {
            title: movieObj.title,
          },
        }
      );
    } else if (movieObj.title) {
      await Movie.update(
        { title: movieObj.title },
        {
          where: {
            actor: movieObj.actor,
          },
        }
      );
    } else if (movieObj.director) {
      await Movie.update(
        { director: movieObj.director },
        {
          where: {
            title: movieObj.title,
          },
        }
      );
    } else if (movieObj.rating) {
      await Movie.update(
        { rating: movieObj.rating },
        {
          where: {
            title: movieObj.title,
          },
        }
      );
    } else {
      console.log("Command not recognised");
    }
    const movieList = await Movie.findAll();
    console.log(movieList);
  } catch (error) {
    console.log(error);
  }
};
