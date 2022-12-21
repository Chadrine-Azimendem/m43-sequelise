const yargs = require("yargs");

const { openSequelizeConnection } = require("./db/connection");

const {
  createMovie,
  listMovies,
  updateActor,
  updateDirector,
  updateRating,
  deleteMovie,
} = require("./movie/function");

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
    if (yargsInput.actor) {
      await updateActor(yargsInput);
    } else if (yargsInput.director) {
      await updateDirector(yargsInput);
    } else if (yargsInput.rating) {
      await updateRating(yargsInput);
    }
    console.log("Movie updated successfully");
  } else if (yargsInput.delete) {
    // put code to delete movie here
    await deleteMovie(yargsInput);
  } else {
    console.log("Unrecognises command");
  }
}

app(yargs.argv);
