const yargs = require("yargs");

const { openSequelizeConnection } = require("./db/connection");

const { createMovie } = require("./movie/function");
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
    // put code to list movies here
    const movie = await Movie.findAll();
    console.log(movie); //
  } else if (yargsInput.update) {
    // put code to update actor field here
  } else if (yargsInput.delete) {
    // put code to delete movie here
  } else {
    console.log("Unrecognises command");
  }
}

app(yargs.argv);
