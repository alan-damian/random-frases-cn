import { Suspense } from 'react';
import { fetchData } from './fetchData';
import './App.css'

const apiData = fetchData("https://api.chucknorris.io/jokes/random")

function App() {

  const data = apiData.read();

  return (
    <div className="App">
      <h1> Fetch moderno</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>

          <li key={data.id}>{data.value}</li>
        </ul>
      </Suspense>
    </div>
  )
}

export default App
