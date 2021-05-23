import InfiniteScroll from 'react-infinite-scroller'
import { useInfiniteQuery } from 'react-query'
import { Person } from './Person'

const initialUrl = 'https://swapi.dev/api/people/'
const fetchUrl = async (url) => {
  const response = await fetch(url)
  return response.json()
}

export function InfinitePeople() {
  const { data, error, isError, isFetching, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery('sw-people', ({ pageParam = initialUrl }) => fetchUrl(pageParam), {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    })

  if (isLoading) return <div className='loading'>Loading</div>
  if (isError) return <div>Error: {error.toString()}</div>

  return (
    <>
      {isFetching && <div className='loading'>Loading</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map(({ results }) =>
          results.map((person) => (
            <Person
              name={person.name}
              hairColor={person.hair_color}
              eyeColor={person.eye_color}
              key={person.name}
            />
          ))
        )}
      </InfiniteScroll>
    </>
  )
}
