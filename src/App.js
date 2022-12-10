import {useState} from "react";
import {Button, Container, Form, ListGroup} from "react-bootstrap";

async function queryForMyGames(request) {
  console.log(request)
  return  fetch('http://localhost:8080/api/games', {
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
    return  fetch('http://localhost:8080/api/ratesforgame', {
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
    return  fetch('http://localhost:8080/api/avgratesforgame', {
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
    return  fetch('http://localhost:8080/api/savegame', {
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
    return  fetch('http://localhost:8080/api/ratethisgame', {
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
    return  fetch('http://localhost:8080/api/topfivegames', {
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
    return  fetch('http://localhost:8080/api/filteringTitles', {
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
  const [dataRates , setDataRates] = useState(null);
  const [dataAvgRate , setDataAvgRate] = useState();
  const [loaded,setLoaded] = useState(false)
    const [gameName, setGameName] = useState();
  const [points, setpoints] = useState()
    const [best5games,setBest5games] = useState()
    const [gamesContains,setGamesContains] = useState()

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
              {/*</Container>*/}
      {/*  </div>*/}
          </Container>
      </>
  );
}

export default App;
