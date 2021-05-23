import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { InfinitePeople } from './people/InfinitePeople'
import { InfiniteSpecies } from './species/InfiniteSpecies'

import './App.css'

const queryClient = new QueryClient()

function App() {
  const [page, setPage] = useState('people')

  const handleClick = (newPage) => {
    if (page === newPage) return
    setPage(newPage)
  }
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <h1>Infinite SWAPI</h1>
        <div className='tabs'>
          <button onClick={() => handleClick('people')} disabled={page === 'people'}>
            People
          </button>
          <button onClick={() => handleClick('species')} disabled={page === 'species'}>
            Species
          </button>
        </div>
        {page === 'people' && <InfinitePeople />}
        {page === 'species' && <InfiniteSpecies />}
      </div>
      <ReactQueryDevtools client={queryClient} />
    </QueryClientProvider>
  )
}

export default App
