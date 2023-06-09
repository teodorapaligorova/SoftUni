window.addEventListener("load", solve);

function solve() {
  let addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", addSong);
  let genreInput = document.getElementById("genre");
  let nameSongInput = document.getElementById("name");
  let authorInput = document.getElementById("author");
  let dateInput = document.getElementById("date");

  let genre = document.createElement("h2");
  let songName = document.createElement("h2");
  let author = document.createElement("h2");
  let date = document.createElement("h3");

  let totalLikesCounter = 0;

  function addSong(e) {
    e.preventDefault();

    if (genreInput.value !== "" &&
      nameSongInput.value !== "" &&
      authorInput.value !== "" &&
      dateInput.value !== "") {
      let allHitsContainer = document.querySelector(".all-hits-container");
      let hitsInfoDiv = document.createElement("div");
      hitsInfoDiv.classList.add("hits-info");

      let img = document.createElement("img");
      img.src = "./static/img/img.png";
      hitsInfoDiv.appendChild(img);

      genre.textContent = `Genre: ${genreInput.value}`;
      hitsInfoDiv.appendChild(genre);

      songName.textContent = `Name: ${nameSongInput.value}`;
      hitsInfoDiv.appendChild(songName);

      author.textContent = `Author: ${authorInput.value}`;
      hitsInfoDiv.appendChild(author);

      date.textContent = `Date: ${dateInput.value}`;
      hitsInfoDiv.appendChild(date);

      let saveBtn = document.createElement("button");
      saveBtn.classList.add("save-btn");
      saveBtn.textContent = "Save song";
      hitsInfoDiv.appendChild(saveBtn);
      saveBtn.addEventListener("click", saveSong);

      let likeBtn = document.createElement("button");
      likeBtn.classList.add("like-btn");
      likeBtn.textContent = "Like song";
      hitsInfoDiv.appendChild(likeBtn);
      likeBtn.addEventListener("click", likeSong);

      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "Delete";
      hitsInfoDiv.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", deleteSongFromCollection);

      allHitsContainer.appendChild(hitsInfoDiv);

      genreInput.value = "";
      nameSongInput.value = "";
      authorInput.value = "";
      dateInput.value = "";
    }

    function likeSong(e) {
      let totalLikes = document.querySelector(".likes>p");
      totalLikesCounter++;
      totalLikes.textContent = `Total Likes: ${totalLikesCounter}`;
      e.target.disabled = true;
    }

    function saveSong(e) {
      let savedContainer = document.querySelector(".saved-container");
      let savedHitsInfoDiv = document.createElement("div");
      savedHitsInfoDiv.classList.add("hits-info");

      let img = document.createElement("img");
      img.src = "./static/img/img.png";
      savedHitsInfoDiv.appendChild(img);

      let savedGenre = document.createElement("h2");
      savedGenre.textContent = genre.textContent;
      savedHitsInfoDiv.appendChild(savedGenre);

      let savedSongName = document.createElement("h2");
      savedSongName.textContent = songName.textContent;
      savedHitsInfoDiv.appendChild(savedSongName);

      let savedAuthor = document.createElement("h2");
      savedAuthor.textContent = author.textContent;
      savedHitsInfoDiv.appendChild(savedAuthor);

      let savedDate = document.createElement("h3");
      savedDate.textContent = date.textContent;
      savedHitsInfoDiv.appendChild(savedDate);

      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "Delete";
      savedHitsInfoDiv.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", deleteSongFromSaved);

      savedContainer.appendChild(savedHitsInfoDiv);

      let toBeMoved = e.target;
      toBeMoved.parentNode.remove();
    }

    function deleteSongFromCollection(e) {
      let currentElement = e.target;

      let toBeDeletedDiv = currentElement.parentNode;
      toBeDeletedDiv.remove();
    }

    function deleteSongFromSaved(e) {
      let currentElement = e.target;

      let toBeDeletedSavedDiv = currentElement.parentNode;
      toBeDeletedSavedDiv.remove();
    }
  }
}
