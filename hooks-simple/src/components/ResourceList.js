import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([])

  const fetchResource = async resource => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    setResources(response.data)
  }

  // Analogous to a combination of (componentDidMount + componentDidUpdate) in a class-based component
  // Calls the callback function if the values in the second argument (the array) have changed
  // Leave array empty if you want the callback function to be called only once (like componentDidMount)
  // Don't pass the array at all if you want the callback function to be called on every update (additionally to on component mount), regardless of the difference between prev and current propd
  useEffect(() => {
    fetchResource(resource)
  }, [resource])

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  )
}

export default ResourceList
