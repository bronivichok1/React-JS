import Header from './components/Header.jsx'
import InputData from './components/InputData.jsx'
import Button from './components/Button.jsx'

 export default function App() {
 
  return (
    <div >
      <Header></Header>
      <main>
      <h1>
        FreeBot
      </h1>
      <ul>
        <li>
          <p>
            <strong>
              <Button title="Больше информации о боте"/>
            </strong>

          </p>
        </li>
      </ul>
      <h1>Login/Regestrate<br/>
      <InputData title="Login"></InputData>
      <InputData title="Password"> </InputData>

      </h1>
      </main>
    </div>
  )
}


