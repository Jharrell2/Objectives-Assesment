// Define an array of objects that represent your top 3 favorite movies
const movies = [
	{
		name: "The Shawshank Redemption",
		year: 1994,
		director: "Frank Darabont",
		picture: "https://m.media-amazon.com/images/I/519NBNHX5BL._SY445_.jpg"
	},
	{
		name: "The Godfather",
		year: 1972,
		director: "Francis Ford Coppola",
		picture: "https://m.media-amazon.com/images/I/41+HJCUl3EL._SY445_.jpg"
	},
	{
		name: "The Dark Knight",
		year: 2008,
		director: "Christopher Nolan",
		picture: "https://m.media-amazon.com/images/I/516JxYYnE8L._SY445_.jpg"
	}
];

// Map over the array and build an array of <li> elements for each object
const movieListItems = movies.map(movie => {
	const listItem = document.createElement("li");

	// Create the title element
	const title = document.createElement("h2");
	title.textContent = `Name: ${movie.name}`;
	listItem.appendChild(title);

	// Create the year element
	const year = document.createElement("p");
	year.textContent = `Year: ${movie.year}`;
	listItem.appendChild(year);

	// Create the director element
	const director = document.createElement("p");
	director.textContent = `Director: ${movie.director}`;
	listItem.appendChild(director);

	// Create the poster element
	const poster = document.createElement("img");
	poster.src = movie.picture;
	poster.height = 400;
	listItem.appendChild(poster);

	return listItem;
});

// Grab the <ol> on the page and insert the movie list items onto the page
const movieList = document.getElementById("movie-list");
movieListItems.forEach(item => movieList.appendChild(item));