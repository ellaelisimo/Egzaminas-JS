class Movie {
  title;
  director;
  budget;

  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive(budget) {
    if (budget > 100_000_000) {
      return "true";
    }
    return "false";
  }
}
const movie = new Movie("the Princess diaries", "Garry Marshall", 26_000_000);

console.log(movie.wasExpensive());
