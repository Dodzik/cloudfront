import {useState} from "react";
import {Button, Container, Form, ListGroup} from "react-bootstrap";

async function queryForMyGames(request) {
  console.log(request)
  return  fetch('https://cloudproject-production.up.railway.app/api/games', {
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
    return  fetch('https://cloudproject-production.up.railway.app/api/ratesforgame', {
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
    return  fetch('https://cloudproject-production.up.railway.app/api/avgratesforgame', {
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
    return  fetch('https://cloudproject-production.up.railway.app/api/savegame', {
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
    return  fetch('https://cloudproject-production.up.railway.app/api/ratethisgame', {
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
    return  fetch('https://cloudproject-production.up.railway.app/api/topfivegames', {
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
    return  fetch('https://cloudproject-production.up.railway.app/api/filteringTitles', {
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
    return  fetch('https://cloudproject-production.up.railway.app/api/authorOfGame', {
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
    return  fetch('https://cloudproject-production.up.railway.app/api/getAllAuthorsOfGame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
        .then(data => data.json())
}

async function queryForAllusers() {
    return fetch('http://localhost:8080/api/getAllUsers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(data => data.json())
}

async function queryCreateUser(request) {
    return fetch('http://localhost:8080/api/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
        .then(data => data.json())
}

async function queryAddGenreToGame(request) {
    console.log(request)
    return  fetch('https://cloudproject-production.up.railway.app/api/addGenreToGame', {
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
    return  fetch('https://cloudproject-production.up.railway.app/api/addSubjectToGame', {
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
    return  fetch('https://cloudproject-production.up.railway.app/api/getSubjectOfGame', {
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
    return  fetch('https://cloudproject-production.up.railway.app/api/getGenreOfGame', {
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

    const [data, setData] = useState()
    const [login, setLogin] = useState()
    const [dataRates, setDataRates] = useState(null)
    const [dataAvgRate, setDataAvgRate] = useState()
    const [loaded, setLoaded] = useState(false)
    const [gameName, setGameName] = useState()
    const [points, setpoints] = useState()
    const [best5games, setBest5games] = useState()
    const [gamesContains, setGamesContains] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [authors, setAuthors] = useState()
    const [genre, setGenre] = useState()
    const [subject, setSubject] = useState()
    const [subjects, setSubjects] = useState()
    const [genres, setGenres] = useState()
    const [users, setUsers] = useState()
    const [pass, setPass] = useState()

    async function myGamesClickHandle() {
        setLoaded(false)
        const response = await queryForMyGames();
        await setData(response)
        setLoaded(true)
    }

    async function ratingOfOneGameClickHandle() {
        setLoaded(false)
        const response = await queryForRatingsOfGame({
            "title": gameName.toString()
        });
        await setDataRates(response)
    }

    async function avgRatingOfOneGameClickHandle() {
        setLoaded(false)
        const response = await queryForAverageRatingsOfGame({
            "title": gameName.toString()
        });
        await setDataAvgRate(response)
    }

    async function createNewGameClickHandle() {
        setLoaded(false)
        const response = await queryForCreateNewGame({
            "title": gameName.toString()
        });
        await setDataAvgRate(response)
    }

    async function ratingGameClickHandle() {
        setLoaded(false)
        await queryForRatingGame({
            "login": login,
            "title": gameName.toString(),
            "points": points
        });
    }

    async function best5GamesClickHandle() {
        setLoaded(false)
        const response = await queryFor5BestGames({});
        console.log(response)
        await setBest5games(response)
    }

    async function getTitleContainsClickHandle() {
        setLoaded(false)
        const response = await queryGetTitleContains({
            "title": gameName.toString()
        });
        await setGamesContains(response)
    }

    async function addingAuthorOfGameClickHandle() {
        setLoaded(false)
        const response = await queryAddingAuthorOfGame({
            firstn: firstName,
            lastn: lastName,
            gametitle: gameName
        });
        await setGamesContains(response)
    }

    async function getAuthorsOfGameClickHandle() {
        setLoaded(false)
        const response = await queryGetAuthorsOfGame({
            "title": gameName.toString()
        });
        await setAuthors(response)
    }

    async function addGenreToGameClickHandle() {
        setLoaded(false)
        await queryAddGenreToGame({
            "title": gameName.toString(),
            "genre": genre.toString()
        });
    }

    async function addSubjectToGameClickHandle() {
        setLoaded(false)
        await queryAddSubjectToGame({
            "title": gameName.toString(),
            "subjectName": subject.toString()
        });
    }

    async function getSubjectsOfGameClickHandle() {
        setLoaded(false)
        const response = await queryGetSubjectsOfGame({
            "title": gameName.toString()
        });
        await setSubjects(response)
    }

    async function getGenresOfGameClickHandle() {
        setLoaded(false)
        const response = await queryGetGenresOfGame({
            "title": gameName.toString()
        });
        await setGenres(response)
    }

    async function getAllUsersClickHandle() {
        setLoaded(false)
        const response = await queryForAllusers();
        await setUsers(response)
    }

    async function createUserClickHandle() {
        setLoaded(false)
        await queryCreateUser({
            "login": login,
            "pass": pass
        });
    }

    return (
        <>
            <Container>
                <div>
                    All games
                </div>
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
                        )}
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
                        )}
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
                                placeholder="Enter user login"
                                onChange={e => setLogin(e.target.value)}
                            />
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

                <div>
                    5 best rated games
                </div>
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
                        )}
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
                        )}
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
                        )}
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
                        )}
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
                        )}
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
                <Button
                    onClick={getAllUsersClickHandle}
                >
                    All Users
                </Button>
                <ListGroup>
                    {users != null &&
                        users.map((item) => (
                                <ListGroup.Item>{item.login}</ListGroup.Item>
                            )
                        )}
                </ListGroup>
                <Form>
                    <Form.Group>

                        <div className="form-group mt-3">
                            <label>Create new user</label>
                            <input
                                required
                                className="form-control mt-1"
                                placeholder="Enter login"
                                onChange={e => setLogin(e.target.value)}
                            />
                            <input
                                required
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={e => setPass(e.target.value)}
                            />
                        </div>

                        <Button
                            onClick={createUserClickHandle}
                        >
                            Create new user
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}

export default App;
