const url = 'https://api.github.com/users';
const row = document.querySelector('.row');


// async functions always return a promise
const fetchData = async() => {
    // returns me a promise
    const res = await fetch(url);
    // convert the promise into json
    const data = await res.json();
    return data
}

// convert the rpomise into information usin ".then" chaining

fetchData().then((response)=>{
    console.log(response)
    response.map((item)=>{
        // create an element for every entry of the array
        let col = document.createElement('div');
        // add the class to every created div
        col.classList.add('col-lg-3');
        row.append(col);
        let card = document.createElement('div');
        card.classList.add('card');
        col.append(card);
        let img = document.createElement('img');
        card.append(img);
        img.src = item.avatar_url
        let head = document.createElement('h6');
        card.append(head);
        head.innerHTML = item.login

    })
})