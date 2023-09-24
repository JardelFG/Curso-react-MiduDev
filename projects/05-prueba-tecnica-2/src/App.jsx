import { useCallback, useEffect, useRef, useState } from 'react'
import { useMovies } from './Hooks/useMovies'
import Movies from './components/Movies.jsx'
import debounce from 'just-debounce-it'

import './App.css'

function useSearch(){
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(()=>{

    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }
    if( search === ''){
      setError('No se puede buscar una película vacía')
      return
    }
    if( search.match(/^\d+$/)){
      setError('No se puede buscar una película con números')
      return
    }
    if( search.length < 3){
      setError('La busquedad debe de tener más de 3 caracteres')
      return
    }
    setError(null)
  }, [search])
  return { search, setSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
      debounce( search =>{ getMovies({ search } )
      }, 2000), [ getMovies ]
    )
  const handleSubmit = (event) =>{
    event.preventDefault()
    getMovies({ search })
  }
  const handleChange = (event) =>{
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }
  const handleSort = () =>{
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={ handleSubmit }>
          <input type="text" onChange={ handleChange } value={ search } name='query' placeholder='Avengers, Star Wars, Spiderman'/>
          <button type='submit'>Buscar</button>
          <label htmlFor='years'>Years ~</label>
          <input type="checkbox" id='years' onChange={ handleSort } checked={ sort }/>
        </form>
        { error && <p style={{color:'red'}}>{error}</p>}
      </header>
      <main>
        { 
          loading ? <p style={{color: 'blue'}}>Cargando...</p> : <Movies movies={ movies }/>
        }
      </main>
    </div>
    )
}

export default App
