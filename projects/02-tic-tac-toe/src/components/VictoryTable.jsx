import { useEffect } from "react"


export function VictoryTable({ props }) {
  
  const countY = []
  const countX = []

  useEffect(()=>{
    console.log("funciona")
  }, [setWinner])

  return (
    <section className="winner2">
        <h2>Tabla de cuentas:</h2>
        <br/>
        <header className="score">
          <div className="scoreX">
            <p>X</p>
            <div>
              <span>
                { countX }
              </span>
            </div>
            <span>quantity:</span>
          </div>
          <div className="scoreY">
            <p>O</p>
            <div>
              <span>
                { countY }
              </span>
            </div>
            <span>quantity:</span>
          </div>
        </header>
    </section>
  )
}
