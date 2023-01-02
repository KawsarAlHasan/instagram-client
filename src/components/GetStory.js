import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useMDUsers from '../hooks/useUsers'
import Loading from './Loading'

function GetStory() {
  const [mdUsers, isLoading] = useMDUsers()

  const [isLoadingPost, setIsLoadingPost] = useState(false)
  const [imagePost, setImagePost] = useState([])
  useEffect(() => {
    setIsLoadingPost(true)
    fetch('http://localhost:4000/post/images')
      .then((res) => res.json())
      .then((data) => {
        setImagePost(data)
        setIsLoadingPost(false)
      })
  }, [])

  const navigate = useNavigate()
  const userDetails = (id) => {
    navigate(`/user/${id}`)
  }

  const postImageDetails = (id) => {
    navigate(`/post/image/${id}`)
  }
  return (
    <div>
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-base-100 shadow-2xl rounded-box">
        {isLoading || isLoadingPost ? (
          <Loading />
        ) : (
          mdUsers.map((mdUser) =>
            imagePost.map(
              (imgPost) =>
                mdUser.email === imgPost.email && (
                  <div className="carousel-item">
                    <div className="grid justify-items-center">
                      <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={imgPost.postImageUrl} alt="story" />
                        </div>
                      </div>
                      <h2>
                        {imgPost.displayName.length < 10
                          ? imgPost.displayName
                          : imgPost.displayName.slice(0, 8) + '..'}
                      </h2>
                    </div>
                  </div>
                ),
            ),
          )
        )}
      </div>
    </div>
  )
}

export default GetStory
