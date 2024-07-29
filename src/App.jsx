import { Suspense } from 'react';
import { fetchData } from './fetchData.js';
import Joke from './Joke.jsx';
import './App.css'

const apiData = fetchData("https://api.chucknorris.io/jokes/random")

function App() {

  const data = apiData.read();

  return (
    <div className="App">
     
      {/* aca se obtiene el fetch de manera tradicional */}
      <section >
      <Joke/>
      </section>
      
      <section className='fraseAuto'>
      {/* aquí se obtiene sin necesidad de func async¡¡¡ */}
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          <li key={data.id}>{data.value}</li>
        </ul>
      </Suspense>
      </section>
    </div>
  )
}

export default App
