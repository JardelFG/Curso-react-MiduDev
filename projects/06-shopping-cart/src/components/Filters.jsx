import { useId } from "react"
import { useFilters } from "../Hooks/useFilters"

export function Filters() {
    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) =>{
        setFilters(prevState =>({
            ...prevState, 
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{
        setFilters(prevState =>({
            ...prevState, 
            category: event.target.value
        }))
    }
  return (
    <section className="filters">
        <div>
            <label htmlFor={ minPriceFilterId }>Rango de precio: </label>
            <input 
                type="range"
                min={250}
                max={1000}
                id={ minPriceFilterId }
                value={ filters.minPrice}

                onChange={ handleChangeMinPrice }
            />
            <span>${ filters.minPrice }</span>
        </div>
        <div>
            <label htmlFor={ categoryFilterId }>Categoria</label>
            <select id={ categoryFilterId } onChange={ handleChangeCategory }>
                <option value="all">Todo</option>
                <option value="laptops">Laptops</option>
                <option value="smartphones">Movil</option>
            </select>
        </div>
    </section>
  )
}
