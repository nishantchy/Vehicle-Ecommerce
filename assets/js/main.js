const searchBtn = document.getElementById('search-btn');
const searchOpen = document.getElementById('search-open');

const Search = () => {
    searchOpen.classList.toggle("active");
}

searchBtn.onclick = () => Search();