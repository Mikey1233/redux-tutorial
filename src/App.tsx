import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/Counter'
function App() {

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Redux + React</h1>
      <Counter/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
