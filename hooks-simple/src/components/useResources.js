import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = resource => {
  const [resources, setResources] = useState([])

  // Analogous to a combination of (componentDidMount + componentDidUpdate) in a class-based component
  // Calls the callback function if the values in the second argument (the array) have changed
  // Leave array empty if you want the callback function to be called only once (like componentDidMount)
  // Don't pass the array at all if you want the callback function to be called on every update (additionally to on component mount), regardless of the difference between prev and current propd
  useEffect(() => {
    (async resource => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      setResources(response.data)
    })(resource)
  }, [resource])

  return resources
}

export default useResources
