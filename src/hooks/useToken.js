import { useEffect, useState } from 'react'

const useToken = (user) => {
  const [token, setToken] = useState('')
  useEffect(() => {
    const email = user?.user?.email
    const displayName = user?.user?.displayName
    const photoURL = user?.user?.photoURL

    const currentUser = {
      email: email,
      displayName: displayName,
      photoURL: photoURL,
    }
    if (email) {
      fetch(`http://localhost:4000/user/${email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('data', data)
        })
    }
  }, [user])
  return [token]
}

export default useToken
