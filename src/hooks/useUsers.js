import { useEffect, useState } from 'react'

const useMDUsers = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [mdUsers, setMdUsers] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:4000/users')
      .then((res) => res.json())
      .then((data) => {
        setMdUsers(data)
        setIsLoading(false)
      })
  }, [])
  return [mdUsers, isLoading, setMdUsers]
}

export default useMDUsers
