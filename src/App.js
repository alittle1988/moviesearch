import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import CategoryList from "./components/Categorys/CategoryList";
import { Container } from "react-bootstrap";
import MovieCard from "./components/MovieCard";
import Category from "./components/Categorys/Category";
import React, { useState } from "react";
import MovieInfo from "./components/MovieInfo";
import AdminPage from "./AdminPages/AdminPage";
import SearchBar from "./components/SearchBar";

// sorting function
function dynamicSort(property) {
  var sortOrder = 1;

  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a, b) {
    if (sortOrder === -1) {
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property]);
    }
  };
}
// sorts lists in alphabetical order
function sortList(list) {
  let newList = list;
  newList.sort(dynamicSort("name"));
  return newList;
}

function App() {
  const [admin, setAdmin] = useState("admin123");
  const [adminPass, setAdminPass] = useState("Password");
  const [loggedin, setLoggedin] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [movie, setMovie] = useState("");
  const [categories, setCategories] = useState([
    "Comedy",
    "Action",
    "Horror",
    "Drama",
  ]);
  const [moviesList, setMoviesList] = useState([
    {
      name: "Pineapple Express",
      img: "https://upload.wikimedia.org/wikipedia/en/c/ca/Pineapple_Express_Poster.jpg",
      category: "comedy",
      director: "David Gordon Green",
      screenplay: "Seth Rogan, Evan Goldberg",
      producers: "Judd Apatow, Shauna Robertson",
      cast: "Seth Rogan, James Franco, Gary Cole, Rosi Perez, Danny McBride",
      releaseDate: "August 6, 2008",
      runtime: "112 minutes",
      budget: "$26 million",
      boxOffice: "$102.4 million",
      summary:
        "Stoner Dale Denton's (Seth Rogen) enjoyment of a rare strain of marijuana may prove fatal when he drops his roach in a panic after witnessing a murder. Upon learning that the fancy weed can be traced back to them, Dale and his dealer (James Franco) go on the lam, with a dangerous drug lord (Gary Cole) and crooked cop (Rosie Perez) hot on their heels.",
      link: "https://en.wikipedia.org/wiki/Pineapple_Express_(film)",
      likes: 0,
      review: "",
    },
    {
      name: "HalfBaked",
      img: "https://upload.wikimedia.org/wikipedia/en/1/10/Half-baked-dvd-cover.jpg",
      category: "comedy",
      director: "Tamara Davis",
      screenplay: "",
      producers: "Robert Simonds",
      cast: "Dave Chappelle Jim Breuer, Harland Williams, Guillermo Diaz, Clarence Williams III",
      releaseDate: "January 16, 1988",
      runtime: "82 minutes",
      budget: "$8 million",
      boxOffice: "17.5 million",
      summary:
        "When a member of their crew gets arrested for killing a New York City police horse by feeding it junk food, three slackin' stoners are forced to get off their butts and raise bail by selling pot stolen from a pharmaceutical lab. It's a risky plan but, hey, these are stand-up guys who would do anything to help out a friend in need.",
      link: "https://en.wikipedia.org/wiki/Half_Baked",
      likes: 0,
      review: "This is a Review",
    },
    {
      name: "Old School",
      img: "https://upload.wikimedia.org/wikipedia/en/2/21/Old_s_poster.jpg",
      category: "comedy",
      director: "Todd Phillips",
      screenplay: "Todd Phillips, Scot Armstrong",
      producers: "Daniel Goldberg, Joe Medjuck, Todd Phillips",
      cast: "Luke Wilson, Will Ferrell, Vince Vaughn, Jeremy Piven",
      releaseDate: "February 21, 2003",
      budget: "$ 24 million",
      boxOffice: "$86.7 million",
      summary: `After discovering his girlfriend (Juliette Lewis) has been participating in group sex, attorney Mitch (Luke Wilson) feels his world come undone. He moves into a new place, which happens to be near a college campus, and tries to get his life back together. Two of his best friends, Frank (Will Ferrell) and Beanie (Vince Vaughn), start hanging out at Mitch's house, eventually turning the place into a wild party pad, much to the ire of the college's dean, Gordon "Cheese" Pritchard (Jeremy Piven).`,
      link: "https://en.wikipedia.org/wiki/Old_School_(film)",
      runtime: "90 minutes",
      likes: 0,
      review: "This is a Review",
    },
    {
      name: "Wedding Crashers",
      img: "https://upload.wikimedia.org/wikipedia/en/3/3e/Wedding_crashers_poster.jpg",
      category: "comedy",
      director: "David Dobkin",
      screenplay: "",
      producers: "Peter Abrams, Robert L. Levy, andrew Panay",
      cast: "Owen Wilson, Vince Vaughn, Christoper Walken, Rachel McAdams, Isla Fisher",
      releaseDate: "July 4, 2005",
      budget: "$40 million",
      boxOffice: "$288.5 million",
      summary: `Jeremy (Vince Vaughn) and John (Owen Wilson) are divorce mediators who spend their free time crashing wedding receptions. For the irrepressible duo, there are few better ways to drink for free and bed vulnerable women. So when Secretary of the Treasury William Cleary (Christopher Walken) announces the wedding of his daughter, the pair make it their mission to crash the high-profile event. But their game hits a bump in the road when John locks eyes with bridesmaid Claire (Rachel McAdams).`,
      link: "https://en.wikipedia.org/wiki/Wedding_Crashers",
      runtime: "119 minutes",
      likes: 0,
      review: "This is a Review",
    },
    {
      name: "Die Hard",
      img: "https://upload.wikimedia.org/wikipedia/en/c/ca/Die_Hard_%281988_film%29_poster.jpg",
      category: "action",
      director: "John McTiernan",
      screenplay: "Jeb Stuart, Steven E. de Souza",
      producers: "Lawrence Gordon, Joel Silver",
      cast: "Bruce Willis, Alan Rickman, Alexander Godunov, Bonnie Bedelia",
      releaseDate: "July 12, 1988",
      budget: "$25-35 million",
      boxOffice: "$138.8-141.5 million",
      summary: `New York City policeman John McClane (Bruce Willis) is visiting his estranged wife (Bonnie Bedelia) and two daughters on Christmas Eve. He joins her at a holiday party in the headquarters of the Japanese-owned business she works for. But the festivities are interrupted by a group of terrorists who take over the exclusive high-rise, and everyone in it. Very soon McClane realizes that there's no one to save the hostages -- but him.`,
      link: "https://en.wikipedia.org/wiki/Die_Hard",
      runtime: "132 minutes",
      likes: 0,
      review: "This is a Review",
    },
    {
      name: "A Nightmare on Elm Street",
      img: "https://upload.wikimedia.org/wikipedia/en/f/fa/A_Nightmare_on_Elm_Street_%281984%29_theatrical_poster.jpg",
      category: "horror",
      director: "Wes Craven",
      screenplay: "",
      producers: "Robert Shaye",
      cast: "John Saxon, Ronee Blakley, Heather Langenkamp, amanda Wyss, Nick Corri",
      releaseDate: "November 9, 1984",
      budget: "1.1 million",
      boxOffice: "57 million",
      summary: `In Wes Craven's classic slasher film, several Midwestern teenagers fall prey to Freddy Krueger (Robert Englund), a disfigured midnight mangler who preys on the teenagers in their dreams -- which, in turn, kills them in reality. After investigating the phenomenon, Nancy (Heather Langenkamp) begins to suspect that a dark secret kept by her and her friends' parents may be the key to unraveling the mystery, but can Nancy and her boyfriend Glen (Johnny Depp) solve the puzzle before it's too late?`,
      link: "https://en.wikipedia.org/wiki/A_Nightmare_on_Elm_Street",
      runtime: "91 minutes",
      likes: 0,
      review: "This is a Review",
    },
    {
      name: "A Star is Born",
      img: "https://upload.wikimedia.org/wikipedia/en/3/39/A_Star_is_Born.png",
      category: "drama",
      director: "Bradley Cooper",
      screenplay: "Eric Roth, Bradley Cooper, Will Fetters",
      producers:
        "Bill Gerber, Jon Peters, Bradley Cooper, Todd Phillips,  Lynette Howell Taylor",
      cast: "Bradley Cooper, Lady Gaga, Andrew Dice Clay, Dave Chappelle,v Sam Elliott",
      releaseDate: "August 31, 2018",
      budget: "36 million",
      boxOffice: "436.2 million",
      summary: `Seasoned musician Jackson Maine discovers -- and falls in love with -- struggling artist Ally. She has just about given up on her dream to make it big as a singer until Jackson coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jackson fights an ongoing battle with his own internal demons.`,
      link: "https://en.wikipedia.org/wiki/A_Star_Is_Born_(2018_film)",
      runtime: "136 minutes",
      likes: 0,
      review: "This is a Review",
    },
  ]);

  // handle login
  function login(details) {
    if (admin === details.userName && adminPass === details.password) {
      setLoggedin(true);
    } else {
      console.log("shits wrong");
    }
  }

  // sort list alphabetical order
  sortList(moviesList);

  // handles movie click to display data
  function handleMovieClick(data) {
    setMovie(data);
    toShowInfo();
    window.scrollTo(0, 0);
  }
  // handle add category
  function handleAddCategory(category) {
    setCategories([...categories, category]);
  }
  // handle remove category
  function handleRemoveCategory(param) {
    const data = categories.filter((category) => category !== param);
    setCategories(data);
  }
  //changes showInfo state between true and false
  function toShowInfo() {
    setShowInfo(!showInfo);
  }

  // add movie title
  function handleAddMovieTitle(movie) {
    setMoviesList([...moviesList, movie]);
  }

  // remove movie title
  function handleRemoveMovieTitle(title) {
    
    const data = moviesList.filter((movie) => movie.name.toLowerCase() !== title.toLowerCase())
    console.log(data)
    setMoviesList(data)
    
  }

  // edit title
  function handleEditTitleClick(title) {
    
  }

  

  return (
    <div className="App">
      <Header login={login} />
      {loggedin === true ? (
        <AdminPage
          onHandleAddMovieTitle={handleAddMovieTitle}
          onHandleAddCategory={handleAddCategory}
          onHandleRemoveMovieTitle={handleRemoveMovieTitle}
          onHandleRemoveCategory={handleRemoveCategory}
          categories={categories}
          moviesList={moviesList}
        />
      ) : (
        <div></div>
      )}
      <SearchBar moviesList={moviesList}  onMovieClick={handleMovieClick} />
      <CategoryList list={categories} />
      <h2 className="categoryTitle">A-Z</h2>
      <Container className="movieContainer">
        <div className="movieRow">
          {moviesList.map((movie, index) => (
            <MovieCard
              onMovieClick={() => handleMovieClick(movie)}
              key={index}
              movie={movie}
            ></MovieCard>
          ))}
        </div>
      </Container>
      {categories.map((category, index) => {
        return (
          <Category
            onMovieClick={(movie) => handleMovieClick(movie)}
            name={category}
            key={index}
            list={moviesList}
            id={category}
          />
        );
      })}
      {showInfo === true ? (
        <MovieInfo movie={movie} onMovieClick={handleMovieClick} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;

// setting up Login page
