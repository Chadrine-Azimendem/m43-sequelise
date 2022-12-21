const yargs = require("yargs");

const { openSequelizeConnection } = require("./db/connection");

const { createMovie, listMovies, updateMovies } = require("./movie/function");
const Movie = require("./movie/table");

async function app(yargsInput) {
  // check if db is created and create one if not
  await openSequelizeConnection.sync();
  if (yargsInput.create) {
    // put code to add a movie here
    await createMovie({
      title: yargsInput.title,
      actor: yargsInput.actor,
      director: yargsInput.director,
      rating: yargsInput.rating,
    });
  } else if (yargsInput.read) {
    // list movies
    await listMovies();
  } else if (yargsInput.update) {
    // update movie (fix this)
    await updateMovies(yargsInput);
  } else if (yargsInput.delete) {
    // put code to delete movie here
    await Movie.destroy({
      where: {
        title: yargsInput.title,
      },
    });
    const movieList = await Movie.findAll();
    console.log(movieList);
  } else {
    console.log("Unrecognises command");
  }
}

app(yargs.argv);
