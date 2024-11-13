// Initialize favorites list
const favoriteList = document.getElementById("favorite-list");

// Function to add a car to favorites
function addToFavorites(carName) {
  const listItem = document.createElement("li");
  listItem.textContent = carName;
  favoriteList.appendChild(listItem);
  alert(carName + " added to favorites!");
}
