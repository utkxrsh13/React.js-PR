import React, { useState } from 'react'
import JokeLoaderBtn from './components/JokeLoaderBtn'
import JokeCard from './components/JokeCard';

const App = () => {

  const url = "https://official-joke-api.appspot.com/random_joke";

  const [jokes, setJokes] = useState([
    {
      id: 385,
      type: "programming",
      setup: "3 SQL statements walk into a NoSQL bar. Soon, they walk out",
      punchline: "They couldn't find a table."
    }
  ]);

  const [isLoading, setIsLoading] = useState(false)

  const loadNewJoke = async () => {
    setIsLoading(true);
    const request = await fetch(url).then((response) => response.json());
    setJokes((prev) => [request, ...prev]);
    setIsLoading(false);
  }


  const removeJoke = (id) => {
    setJokes((prev) => prev.filter((elem) => elem.id !== id));
  }

  return (
    <div className='text-white text-center bg-gradient-to-b to-purple-400 h-[100%] p-5 m-5 rounded-xl'>
      <h1>Random Jokes API Generator</h1>
      <JokeLoaderBtn loadNewJoke={loadNewJoke} />
      <div>
        <h3>{
          isLoading ? "loading one more Joke"
            :
            "Random Jokes Overview " + (
              jokes.length === 1 ?"(1 Joke Loaded)" :
                jokes.length + " jokes loaded"
            )

        }</h3>
        {
          jokes.map((joke) =>
            <JokeCard joke={joke} key={joke.id}
              removeJoke={() => removeJoke(joke.id)} />
          )
        }
      </div>
    </div>
  )
}

export default App