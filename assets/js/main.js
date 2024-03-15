
// links animations
const buttonLoader = () => {
    document.addEventListener("DOMContentLoaded", function() {
        const links = document.querySelectorAll(".nav-link");
    
        links.forEach(function(link) {
            link.addEventListener("click", function(event) {
                links.forEach(function(link) {
                    link.classList.remove("clicked");
                });
                event.currentTarget.classList.add("clicked");
            });
        });
    });
} 
buttonLoader();

// Search button animation
const searchBtn = document.getElementById('search-btn');
const searchOpen = document.getElementById('search-open');

const Search = () => {
    searchOpen.classList.toggle("active");
}

searchBtn.onclick = (event) => {
    event.stopPropagation(); 
    Search();
};

document.addEventListener('click', (event) => {
    const isClickInsideSearch = searchOpen.contains(event.target);
    const isClickOnSearchBtn = searchBtn.contains(event.target);

    if (!isClickInsideSearch && !isClickOnSearchBtn) {
        searchOpen.classList.remove("active");
    }
});


