import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useMDUsers from '../hooks/useUsers'
import Loading from './Loading'

function GetAllPost() {
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
      {isLoadingPost || isLoading ? (
        <Loading />
      ) : (
        mdUsers.map((mdUser) => (
          <div>
            {imagePost.map((imgPost) => (
              <div>
                {mdUser.email === imgPost.email && (
                  <div className="card w-full bg-base-100 shadow-2xl mb-5">
                    <div className="flex justify-between m-4">
                      <div className="flex items-center">
                        <div className="avatar">
                          <div
                            onClick={() => userDetails(mdUser._id)}
                            className="bg-neutral-focus text-neutral-content rounded-full w-8 cursor-pointer"
                          >
                            <img alt="people" src={mdUser.photoURL} />
                          </div>
                        </div>
                        <div className="mx-2">
                          <strong
                            onClick={() => userDetails(mdUser._id)}
                            className="cursor-pointer"
                          >
                            {mdUser.displayName}
                          </strong>
                        </div>
                      </div>
                      <div className="ml-48">
                        <button className="">
                          <svg
                            aria-label="More options"
                            className="_ab6-"
                            color="#8e8e8e"
                            fill="#8e8e8e"
                            height="24"
                            role="img"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <circle cx="12" cy="12" r="1.5"></circle>
                            <circle cx="6" cy="12" r="1.5"></circle>
                            <circle cx="18" cy="12" r="1.5"></circle>
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* image  */}
                    <div
                      className="c-w cursor-pointer"
                      onClick={() => postImageDetails(imgPost._id)}
                    >
                      <img src={imgPost.postImageUrl} alt="post" />
                    </div>
                    {/* icons  */}
                    <div className="flex items-center m-4">
                      <button>
                        <svg
                          aria-label="Like"
                          className="_ab6-"
                          color="#262626"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                        </svg>
                      </button>
                      <a href="/commment" className="mx-4">
                        <svg
                          aria-label="Comment"
                          className="_ab6-"
                          color="#262626"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </a>
                      <button>
                        <svg
                          aria-label="Share Post"
                          className="_ab6-"
                          color="#262626"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <line
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="22"
                            x2="9.218"
                            y1="3"
                            y2="10.083"
                          ></line>
                          <polygon
                            fill="none"
                            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></polygon>
                        </svg>
                      </button>
                      <button className="ml-60">
                        <svg
                          aria-label="Save"
                          className="_ab6-"
                          color="#262626"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <polygon
                            fill="none"
                            points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></polygon>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button className="ml-4">11,850 likes</button>
                      <p className="w-96 mx-4 mb-2">
                        <strong
                          onClick={() => userDetails(mdUser._id)}
                          className="cursor-pointer"
                        >
                          {mdUser.displayName}
                        </strong>{' '}
                        {imgPost.caption}
                      </p>
                      <a className="ml-4 opacity-50" href="/comments">
                        View 1 comment
                      </a>
                      <div className="divider mt-[-1px]"></div>
                      <div className="flex justify-center mt-[-24px]">
                        <span className="mt-3 ml-3">
                          <svg
                            aria-label="Emoji"
                            className="_ab6-"
                            color="#262626"
                            fill="#262626"
                            height="24"
                            role="img"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                          </svg>
                        </span>
                        <input
                          type="text"
                          placeholder="add a comment.."
                          className="input w-80"
                        />
                        <span className="btn btn-ghost ">POST</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  )
}

export default GetAllPost
