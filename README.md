# Starship Explorer (Practicum Final Case)
Patika.dev &amp; FMSS Bilişim Front-end Practicum Final Case
Patika.dev linkim: "https://app.patika.dev/keremyvz"

## Description
This React.js application allows you to search for starship information using the Star Wars API and access detailed information. The application uses React Router, Axios, Context API, and CSS features

## Uygulama Bağlantısı

Uygulama, Vercel üzerinde canlı olarak yayınlanmaktadır. Aşağıdaki link üzerinden erişebilirsiniz:
[https://practicum-finalcase.vercel.app/](https://practicum-finalcase.vercel.app/)

## Getting Started
To run this application, you need to have Node.js installed on your computer. If Node.js is not installed, you can download it from [nodejs.org](https://nodejs.org).

To run the application, follow these steps:

1. Clone this repository or download it as a zip file.
2. Open the terminal and go to the directory where the application is located.
3. Run the `npm install` command to install the dependencies.
4. Run the `npm start` command to start the application.
5. Go to [http://localhost:3000](http://localhost:3000) in your browser and start using the application.


## Usage
When the application is launched, a search bar greets the user on the main page. By pressing the enter key, you can list all the spaceships or view the fetched results from the API via Axios by entering a spaceship name or model number. The starship list includes the name, model, manufacturer and hyperdrive rating of each starship. you can also list rest of items with 'Load More' button if list has more than 10 items in search results.

By clicking on any starship from the list, you can access the detailed information of the selected starship. Detailed information includes the class, length, speed, crew number, passenger capacity, weapons, and many other features of the starship.

In addition, React Router is used in the application. Users are redirected to the main page, the list of spaceships, search results based on the entered search parameter, and the details page based on the entered spaceship name using the address bar. If the entered URL does not match any of these pages, the application redirects the user to a 404 page. 

## API
This application retrieves starship information using the [Star Wars API (SWAPI)](https://swapi.dev/). SWAPI is a web API that contains information about all characters, planets, vehicles, and many other objects in the Star Wars universe.

## Credit
This application is made using [React.js](https://reactjs.org/), [React Router](https://reactrouter.com/), [Context API](https://reactjs.org/docs/context.html), and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). The application's README.md file was automatically generated using the OpenAI ChatGPT model.