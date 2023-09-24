import './App.css'
import { useCatImage } from './Hooks/useCatImage.js'
import { useCatFact } from './Hooks/useCatFact.js'


export default function App() {
    const { fact, refreshFact } = useCatFact()
    const { imgUrl } = useCatImage({ fact })

    const handleClick = async () =>{
        refreshFact()
    }
  return (
    <main>
        <h1>Prueba tecnica</h1>
        <button onClick={handleClick}>Get new fact</button>
        <section>
            { fact && 
                <p>{ fact }</p>
            }
            { imgUrl && 
                <img src={ imgUrl } alt="Img cat extraida de api" />
            }
        </section>
    </main>
  )
}
