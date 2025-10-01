const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault(); // stop page refresh

    const input = document.querySelector("input#searchByID");

    // Fetch movie by ID
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Movie not found"); // handle invalid IDs
        }
        return response.json();
      })
      .then((data) => {
        // Display movie info
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      })
      .catch((error) => {
        // Handle errors (invalid ID, network issues)
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = "Movie not found";
        summary.innerText = "";
        console.error(error);
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
