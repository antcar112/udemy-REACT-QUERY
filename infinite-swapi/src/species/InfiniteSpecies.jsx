import InfiniteScroll from 'react-infinite-scroller'
import { useInfiniteQuery } from 'react-query'
import { Species } from './Species'

const initialUrl = 'https://swapi.dev/api/species/'
const fetchUrl = async (url) => {
  const response = await fetch(url)
  return response.json()
}

export function InfiniteSpecies() {
  const { data, error, isError, isLoading, isFetching, hasNextPage, fetchNextPage } =
    useInfiniteQuery('sw-species', ({ pageParams = initialUrl }) => fetchUrl(pageParams), {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    })

  if (isLoading) return <div className='loading'>Loading</div>
  if (isError) return <div>Error: {error.toString()}</div>

  return (
    <>
      {isFetching && <div className='loading'>Loading</div>}
      <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
        {data.pages.map(({ results }) =>
          results.map((species) => (
            <Species
              name={species.name}
              language={species.language}
              averageLifespan={species.average_lifespan}
              key={species.name}
            />
          ))
        )}
      </InfiniteScroll>
    </>
  )
}
