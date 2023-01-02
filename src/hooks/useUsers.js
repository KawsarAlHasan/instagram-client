import { useEffect, useState } from 'react'

const useMDUsers = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [mdUsers, setMdUsers] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://love-post-backend.onrender.com/users')
      .then((res) => res.json())
      .then((data) => {
        setMdUsers(data)
        setIsLoading(false)
      })
  }, [])
  return [mdUsers, isLoading, setMdUsers]
}

export default useMDUsers
