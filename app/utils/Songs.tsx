const getSongs = async () => {
  const res = await fetch(
    'https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=Fitchz&api_key=e98cb1d6f3ab676472a1881bc1081823&period=7day&format=json',
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const fetchData = async () => {
  const songs = await getSongs()

  console.log(songs)

  return <h1>hello</h1>
}
