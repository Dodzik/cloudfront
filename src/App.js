import {useState} from "react";
import {Button, Container, Form, ListGroup} from "react-bootstrap";

async function queryForMyGames(request) {
  console.log(request)
  return  fetch('cloudproject-production.up.railway.app/api/games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify(request)
  })
      .then(data => data.json())
  // console.log(data)

}

async function queryForRatingsOfGame(request) {
    console.log(request)
    return  fetch('cloudproject-production.up.railway.app/api/ratesforgame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
        .then(data => data.json())
    // console.log(data)

}

async function queryForAverageRatingsOfGame(request) {
    console.log(request)
    return  fetch('cloudproject-production.up.railway.app/api/avgratesforgame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
        .then(data => data.json())
    // console.log(data)

}
async function queryForCreateNewGame(request) {
    console.log(request)
    return  fetch('cloudproject-production.up.railway.app/api/savegame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
        .then(data => data.json())
    // console.log(data)

}
async function queryForRatingGame(request) {
    console.log(request)
    return  fetch('cloudproject-production.up.railway.app/api/ratethisgame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
        .then(data => data.json())
    // console.log(data)

}
async function queryFor5BestGames() {
    return  fetch('cloudproject-production.up.railway.app/api/topfivegames', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(data => data.json())
    // console.log(data)

}
async function queryGetTitleContains(request) {
    console.log(request)
    return  fetch('cloudproject-production.up.railway.app/api/filteringTitles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
        .then(data => data.json())
    // console.log(data)

}

async function queryAddingAuthorOfGame(request) {
    console.log(request)
    return  fetch('cloudproject-production.up.railway.app/api/authorOfGame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
        .then(data => data.json())
    // console.log(data)

}
async function queryGetAuthorsOfGame(request) {
    console.log(request)
    return  fetch('cloudproject-production.up.railway.app/api/getAllAuthorsOfGame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
        .then(data => data.json())
    // console.log(data)

}

async function queryAddGenreToGame(request) {
    console.log(request)
    return  fetch('cloudproject-production.up.railway.app/api/addGenreToGame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
        .then(data => data.json())
    // console.log(data)

}
async function queryAddSubjectToGame(request) {
    console.log(request)
    return  fetch('cloudproject-production.up.railway.app/api/addSubjectToGame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
        .then(data => data.json())
    // console.log(data)

}
async function queryGetSubjectsOfGame(request) {
    console.log(request)
    return  fetch('cloudproject-production.up.railway.app/api/getSubjectOfGame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
        .then(data => data.json())
    // console.log(data)

}
async function queryGetGenresOfGame(request) {
    console.log(request)
    return  fetch('cloudproject-production.up.railway.app/api/getGenreOfGame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
        .then(data => data.json())
    // console.log(data)

}

function App() {

  const [data , setData] = useState();
  const [dataRates , setDataRates] = useState(null)
  const [dataAvgRate , setDataAvgRate] = useState()
  const [loaded,setLoaded] = useState(false)
  const [gameName, setGameName] = useState()
  const [points, setpoints] = useState()
  const [best5games,setBest5games] = useState()
  const [gamesContains,setGamesContains] = useState()
    const [firstName,setFirstName] = useState()
    const [lastName,setLastName] = useState()
    const [authors, setAuthors] = useState()
    const [genre, setGenre] = useState()
    const [subject, setSubject] = useState()
    const [subjects, setSubjects] = useState()
    const [genres, setGenres] = useState()

    async function myGamesClickHandle() {
    console.log("kliknieto games")
    setLoaded(false)
    // e.preventDefault();
    console.log("debugging")
    const response = await queryForMyGames({});
    console.log(response)
    await setData(response)
    setLoaded(true)
  }
    async function ratingOfOneGameClickHandle() {
        console.log("kliknieto")
        setLoaded(false)
        // e.preventDefault();
        console.log("debugging")
        console.log({
            title : gameName
        })
        const response = await queryForRatingsOfGame({
            "title" : gameName.toString()
        });
        console.log(response)
        await setDataRates(response)
        // setLoaded(true)
    }
    async function avgRatingOfOneGameClickHandle() {
        console.log("kliknieto")
        setLoaded(false)
        // e.preventDefault();
        console.log("debugging")
        console.log({
            title : gameName
        })
        const response = await queryForAverageRatingsOfGame({
            "title" : gameName.toString()
        });
        console.log(response)
        await setDataAvgRate(response)
        // setLoaded(true)
    }

    async function createNewGameClickHandle() {
        console.log("kliknieto")
        setLoaded(false)
        // e.preventDefault();
        console.log("debugging")
        console.log({
            title : gameName
        })
        const response = await queryForCreateNewGame({
            "title" : gameName.toString()
        });
        console.log(response)
        await setDataAvgRate(response)
        // setLoaded(true)
    }
    async function ratingGameClickHandle() {
        console.log("kliknieto")
        setLoaded(false)
        // e.preventDefault();
        console.log("debugging")
        console.log({
            title : gameName
        })
        const response = await queryForRatingGame({
            "title" : gameName.toString(),
            "points" : points
        });
        console.log(response)
        // await set(response)
        // setLoaded(true)
    }
    async function best5GamesClickHandle() {
        console.log("kliknieto")
        setLoaded(false)
        // e.preventDefault();
        const response = await queryFor5BestGames({});
        console.log(response)
        await setBest5games(response)
        // setLoaded(true)
    }
    async function getTitleContainsClickHandle() {
        console.log("kliknieto")
        setLoaded(false)
        // e.preventDefault();
        console.log("debugging")
        console.log({
            title : gameName
        })
        const response = await queryGetTitleContains({
            "title" : gameName.toString()
        });
        console.log(response)
        await setGamesContains(response)
        // setLoaded(true)
    }
    async function addingAuthorOfGameClickHandle() {
        console.log("kliknieto")
        setLoaded(false)
        // e.preventDefault();
        console.log("debugging")
        console.log({
            title : gameName
        })
        const response = await queryAddingAuthorOfGame({
            firstn: firstName,
            lastn: lastName,
            gametitle: gameName
        });
        console.log(response)
        await setGamesContains(response)
        // setLoaded(true)
    }
    async function getAuthorsOfGameClickHandle() {
        console.log("kliknieto")
        setLoaded(false)
        // e.preventDefault();
        console.log("debugging")
        console.log({
            title : gameName
        })
        const response = await queryGetAuthorsOfGame({
            "title" : gameName.toString()
        });
        console.log(response)
        await setAuthors(response)
        // setLoaded(true)
    }
    async function addGenreToGameClickHandle() {
        console.log("kliknieto")
        setLoaded(false)
        // e.preventDefault();
        console.log("debugging")
        console.log({
            title : gameName
        })
        const response = await queryAddGenreToGame({
            "title" : gameName.toString(),
            "genre" : genre.toString()
        });
        console.log(response)
        // setLoaded(true)
    }
    async function addSubjectToGameClickHandle() {
        console.log("kliknieto")
        setLoaded(false)
        // e.preventDefault();
        console.log("debugging")
        console.log({
            title : gameName
        })
        const response = await queryAddSubjectToGame({
            "title" : gameName.toString(),
            "subjectName" : subject.toString()
        });
        console.log(response)
        // setLoaded(true)
    }
    async function getSubjectsOfGameClickHandle() {
        console.log("kliknieto")
        setLoaded(false)
        // e.preventDefault();
        console.log("debugging")
        console.log({
            title : gameName
        })
        const response = await queryGetSubjectsOfGame({
            "title" : gameName.toString()
        });
        console.log(response)
        await setSubjects(response)
        // setLoaded(true)
    }
    async function getGenresOfGameClickHandle() {
        console.log("kliknieto")
        setLoaded(false)
        // e.preventDefault();
        console.log("debugging")
        console.log({
            title : gameName
        })
        const response = await queryGetGenresOfGame({
            "title" : gameName.toString()
        });
        console.log(response)
        await setGenres(response)
        // setLoaded(true)
    }

  return (
      <>
          <Container>
        {/*<div className="min-vh-100 modal-dialog-centered "*/}
        {/*     style={{overflow: 'scroll initial',*/}
        {/*       backgroundPosition: 'center',*/}
        {/*       backgroundSize: 'cover',*/}
        {/*       backgroundRepeat: 'no-repeat',*/}
        {/*       backgroundAttachment: 'fixed'*/}
        {/*     }}>*/}
        <Button
        onClick={myGamesClickHandle}
        >
            All Games
        </Button>
        <ListGroup>
        {loaded === true &&
            data.map((item) => (
                <ListGroup.Item>{item.title}</ListGroup.Item>
            )
            ) }
        </ListGroup>

                  <Form>
                      <Form.Group>

                      <div className="form-group mt-3">
                          <label>Rates for one game</label>
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter gameName"
                              onChange={e => setGameName(e.target.value)}
                          />
                      </div>

                      <Button
                          onClick={ratingOfOneGameClickHandle}
                      >
                          Ratings For One Game
                      </Button>
                      </Form.Group>
                  </Form>
              <ListGroup>
                  {dataRates != null &&
                      dataRates.map((item) => (
                              <ListGroup.Item>{item.rate}</ListGroup.Item>
                          )
                      ) }
              </ListGroup>

              <Form>
                  <Form.Group>

                      <div className="form-group mt-3">
                          <label>Average Rates for one game</label>
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter gameName"
                              onChange={e => setGameName(e.target.value)}
                          />
                      </div>

                      <Button
                          onClick={avgRatingOfOneGameClickHandle}
                      >
                          Average Ratings For One Game
                      </Button>
                  </Form.Group>
              </Form>
              {dataAvgRate != null &&
              <Container>
                  {dataAvgRate}
              </Container>}

              <Form>
                  <Form.Group>

                      <div className="form-group mt-3">
                          <label>Create New Game</label>
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter gameName"
                              onChange={e => setGameName(e.target.value)}
                          />
                      </div>

                      <Button
                          onClick={createNewGameClickHandle}
                      >
                          Create New Game
                      </Button>
                  </Form.Group>
              </Form>
              <Form>
                  <Form.Group>

                      <div className="form-group mt-3">
                          <label>RateGame</label>
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter gameName"
                              onChange={e => setGameName(e.target.value)}
                          />
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter points"
                              onChange={e => setpoints(e.target.value)}
                          />
                      </div>

                      <Button
                          onClick={ratingGameClickHandle}
                      >
                          Rate this game
                      </Button>
                  </Form.Group>
              </Form>

                      <Button
                          onClick={best5GamesClickHandle}
                      >
                          Click to show 5 best rated games
                      </Button>
              <ListGroup>
                  {best5games != null &&
                      best5games.map((item) => (
                              <ListGroup.Item>{item.title}</ListGroup.Item>
                          )
                      ) }
              </ListGroup>
              <Form>
                  <Form.Group>

                      <div className="form-group mt-3">
                          <label>Filtering Game Titles with regex</label>
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter gameName"
                              onChange={e => setGameName(e.target.value)}
                          />
                      </div>

                      <Button
                          onClick={getTitleContainsClickHandle}
                      >
                         Filter Games
                      </Button>
                  </Form.Group>
              </Form>
              <ListGroup>
                  {gamesContains != null &&
                      gamesContains.map((item) => (
                              <ListGroup.Item>{item.title}</ListGroup.Item>
                          )
                      ) }
              </ListGroup>
              <Form>
                  <Form.Group>

                      <div className="form-group mt-3">
                          <label>Adding Author to game, Create Author if he doesn't exists in database</label>
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter First Name"
                              onChange={e => setFirstName(e.target.value)}
                          />
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter Last Name"
                              onChange={e => setLastName(e.target.value)}
                          />
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter gameName"
                              onChange={e => setGameName(e.target.value)}
                          />
                      </div>

                      <Button
                          onClick={addingAuthorOfGameClickHandle}
                      >
                          Add Author Of Game
                      </Button>
                  </Form.Group>
              </Form>

              <Form>
                  <Form.Group>

                      <div className="form-group mt-3">
                          <label>Get all Authors of game</label>
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter gameName"
                              onChange={e => setGameName(e.target.value)}
                          />
                      </div>

                      <Button
                          onClick={getAuthorsOfGameClickHandle}
                      >
                          Get Authors of game
                      </Button>
                  </Form.Group>
              </Form>
              <ListGroup>
                  {authors != null &&
                      authors.map((item) => (
                              <ListGroup.Item>{item.firstName} {item.lastName}</ListGroup.Item>
                          )
                      ) }
              </ListGroup>

              <Form>
                  <Form.Group>

                      <div className="form-group mt-3">
                          <label>Get all Subjects of game</label>
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter gameName"
                              onChange={e => setGameName(e.target.value)}
                          />
                      </div>

                      <Button
                          onClick={getSubjectsOfGameClickHandle}
                      >
                          Get Subjects of game
                      </Button>
                  </Form.Group>
              </Form>
              <ListGroup>
                  {subjects != null &&
                      subjects.map((item) => (
                              <ListGroup.Item>{item.name}</ListGroup.Item>
                          )
                      ) }
              </ListGroup>
              <Form>
                  <Form.Group>

                      <div className="form-group mt-3">
                          <label>Get all Genres of game</label>
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter gameName"
                              onChange={e => setGameName(e.target.value)}
                          />
                      </div>

                      <Button
                          onClick={getGenresOfGameClickHandle}
                      >
                          Get Genres of game
                      </Button>
                  </Form.Group>
              </Form>
              <ListGroup>
                  {genres != null &&
                      genres.map((item) => (
                              <ListGroup.Item>{item.name}</ListGroup.Item>
                          )
                      ) }
              </ListGroup>


              <Form>
                  <Form.Group>

                      <div className="form-group mt-3">
                          <label>Adding Genre to game, Create Genre if he doesn't exists in database</label>
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter Genre Name"
                              onChange={e => setGenre(e.target.value)}
                          />
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter gameName"
                              onChange={e => setGameName(e.target.value)}
                          />
                      </div>

                      <Button
                          onClick={addGenreToGameClickHandle}
                      >
                          Add Genre Of Game
                      </Button>
                  </Form.Group>
              </Form>

              <Form>
                  <Form.Group>

                      <div className="form-group mt-3">
                          <label>Adding Subject to game, Create Subject if he doesn't exists in database</label>
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter Subject Name"
                              onChange={e => setSubject(e.target.value)}
                          />
                          <input
                              required
                              className="form-control mt-1"
                              placeholder="Enter gameName"
                              onChange={e => setGameName(e.target.value)}
                          />
                      </div>

                      <Button
                          onClick={addSubjectToGameClickHandle}
                      >
                          Add Subject Of Game
                      </Button>
                  </Form.Group>
              </Form>
              {/*</Container>*/}
      {/*  </div>*/}
          </Container>
      </>
  );
}

export default App;
