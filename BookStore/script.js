// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch('https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to render data in cards
async function renderData() {
    const container = document.querySelector('.container');
    const data = await fetchData();

    if (!data) {
        return;
    }

    data.forEach(item => {
        
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.addEventListener("error", function(event) {
        event.target.src = "img/no-img.jpg"
        event.onerror = null
       })
      image.src = item.cover_image
        

        const title = document.createElement('h2');
        title.textContent = item.title;

        const body = document.createElement('p');
        body.textContent = item.releaseDate;

       
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(body);
        container.appendChild(card);
    });
}

// Call the renderData function to display data
renderData();

