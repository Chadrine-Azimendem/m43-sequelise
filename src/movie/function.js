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

exports.updateActor = async (movieObj) => {
  //update actor field
  try {
    await Movie.update(
      { actor: movieObj.actor },
      {
        where: {
          title: movieObj.title,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.updateDirector = async (movieObj) => {
  //update actor field
  try {
    await Movie.update(
      { director: movieObj.director },
      {
        where: {
          title: movieObj.title,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.updateRating = async (movieObj) => {
  //update rating field
  try {
    await Movie.update(
      { rating: movieObj.rating },
      {
        where: {
          title: movieObj.title,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//delete queries here
exports.deleteMovie = async (movieObj) => {
  try {
    await Movie.destroy({
      where: {
        title: movieObj.title,
      },
    });
    const movieList = await Movie.findAll();
    console.log(movieList);
  } catch (error) {
    console.log(error);
  }
};
