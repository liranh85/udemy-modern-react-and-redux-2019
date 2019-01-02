import { useState, useEffect } from 'react'

export default () => {
  const [lat, setLat] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    )
  }, [])

  // Returning an array is a community convention
  // Stephen doesn't like it, he prefers to return an object, mainly because it allows us to add more data to return without breaking components using this one
  return [lat, errorMessage]
}