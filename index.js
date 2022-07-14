/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  //initalize our accumulator
  let moviesArr = []
  // guard clause; if movies is empty short cirtcuit the script here, return []
  if (!movies.length){
    return []
  } else {
    for(const movie of movies){
      moviesArr.push(movie.title)
    }
  }
  // iterate througy the our array of objevts
  // through each iteration access movies.title
  // push the title into our accumulator array
  return moviesArr
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  // initalize our accumualtor variable (number) ( our record holder )
  let highestMeta = 0

  //guard clause ( is movies empty )
  if (!movies.length){
    return 0
  } else {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].metascore > highestMeta){
        highestMeta = movies[i].metascore
      }
    }
    return Number(highestMeta)
  }

  // loop through our movies variable
  //through each iteration check movies.metascore
  //if the iterated metascore is higher then the accumulators; set that iteration to the value of the accumulator


}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  // initalize our return (number)
  let output = 0
  let sum = 0
  let divNum = 0
  // initalize our array (which will store our retrieved movies.imdbRating)
  let arr = []
  // guard clause
  if (!movies.length){
    return 0
  } else {
    for (const movie of movies){
      arr.push(movie.imdbRating)
    }
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i])
    }
    divNum = arr.length
    output = sum / divNum
  }
  console.log(sum,divNum,arr)
  return output
  // iterate through our object
  // retrieve the imdb rating accross each iteration (movies.imdbRating)
  // store inside array
  // calculate the average by dividing the number of indexes inside of our array, by the sum of the entire array added
  // store this quiotennt inside of return number
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  // initalize the accumulator object
  let accumulator = {}
  accumulator['G'] = 0
  accumulator['PG'] = 0
  accumulator['PG-13'] = 0

  // guard clause
  if (!movies.length){
    return {}
  } else {
    for (let i = 0; i < movies.length; i++) {
      if(movies[i].rated === 'PG'){
        accumulator.PG += 1
      }
      if(movies[i].rated === 'PG-13'){
        accumulator['PG-13'] += 1
      }
      if(movies[i].rated === 'G'){
        accumulator.G += 1
      }
      // accumulator [movies[i].rated] = movies[i].rated
    }
      if(accumulator['PG-13'] === 0){
        delete accumulator['PG-13']
    }
    if(accumulator['PG'] === 0){
      delete accumulator['PG']
    }
    if(accumulator['G'] === 0){
      delete accumulator['G']
    }
    console.log(accumulator)
    // if (accumulator[PG] === 0){
    //   delete accumulator.PG
    // }
    // if (accumulator[G] === 0){
    //   delete accumulator.PG
    // }
    // if (accumulator[PG-13] === 0){
    //   delete accumulator.PG
    // }
    }
    return accumulator
    }
   

 
  // loop through our object ( we are accessing movies.rated )
  

  // store each sub object into our accumulator object


/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  accumulator = {}
  if(!movies.length){
    return null
  } else {
  for (const movie of movies) {
    if (movie.imdbID === id){
      accumulator = movie
    }
    // } else if (movie.imdbID !== id){
    //   return null
    // }
  }
}
return accumulator
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let accumulator = []
  if (!movies.length){
    return []
  } else {
    for (const movie of movies) {
      let splitArr
      splitArr = movie.genre.split(',')
      if (splitArr.includes(genre)){
        console.log('arr')
        accumulator.push(movie)
      }
      
    }
  return accumulator
}
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let arr = []
  for (const movie of movies) {
    let splitReleased = movie.released.split(' ')
    console.log(splitReleased[2])
    if(splitReleased[2] <= year){
      arr.push (movie)
    }
  }
  return arr
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie() {}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
