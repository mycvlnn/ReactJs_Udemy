import React, { useEffect, useState } from "react"

import MoviesList from "./components/MoviesList"
import "./App.css"
import AddMovie from "./components/AddMovie"

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  let content = <p>Data not found</p>
  if (isLoading) {
    content = <p>Loading ...</p>
  }
  if (error) {
    content = <p>{error}</p>
  }
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }
  const fetchMoviesHandler = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        "https://http-request-6ef57-default-rtdb.firebaseio.com/movies.json"
      )
      if (!response.ok) {
        throw new Error("Some thing went wrong. Please try again")
      }
      const status_code = response.status
      const data = await response.json()
      if (status_code === 200) {
        const loadedMovies = []
        for (const key in data) {
          loadedMovies.push({
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          })
        }
        setMovies(loadedMovies)
      }
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }

  const addMovieHandler = async (movie) => {
    try {
      const response = await fetch(
        "https://http-request-6ef57-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      const data = await response.json()
      console.log(data)
      if (response.ok) {
        //call again api
        fetchMoviesHandler()
      }
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchMoviesHandler()
  }, [])

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>{content}</section>
    </React.Fragment>
  )
}

export default App
