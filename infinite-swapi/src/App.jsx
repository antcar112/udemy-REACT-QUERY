import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { InfinitePeople } from './people/InfinitePeople'
import { InfiniteSpecies } from './species/InfiniteSpecies'

import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <h1>Infinite SWAPI</h1>
        {/* <InfinitePeople /> */}
        <InfiniteSpecies />
      </div>
      <ReactQueryDevtools client={queryClient} />
    </QueryClientProvider>
  )
}

export default App
