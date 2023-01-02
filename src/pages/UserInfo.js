import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate, useParams } from 'react-router-dom'
import auth from '../firebase.init'

function UserInfo() {
  const { userId } = useParams()
  const [user] = useAuthState(auth)

  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    const url = `http://localhost:4000/user/${userId}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data))
  }, [])

  const [myImagePost, setMyImagePost] = useState([])
  useEffect(() => {
    const getMyImagePost = async () => {
      const email = user.email
      const url = `http://localhost:4000/post/myimage?email=${email}`
      const { data } = await axios.get(url)
      setMyImagePost(data)
    }
    getMyImagePost()
  }, [user])

  const [otherImagePost, setOtherImagePost] = useState([])
  useEffect(() => {
    const getMyImagePost = async () => {
      const email = userInfo.email
      const url = `http://localhost:4000/post/myimage?email=${email}`
      const { data } = await axios.get(url)
      setOtherImagePost(data)
    }
    getMyImagePost()
  }, [userInfo])

  const navigate = useNavigate()
  const postImageDetails = (id) => {
    navigate(`/post/image/${id}`)
  }

  return (
    <div>
      {user.email === userInfo.email ? (
        <div className="mt-14 mb-10 mx-8 md:mx-20">
          <div className="flex">
            <div className="avatar">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-[150px] md:w-[180px]">
                <img alt="people" src={userInfo.photoURL} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="ml-3">
                <div className="flex">
                  <strong className="text-2xl lg:text-4xl">
                    {userInfo.displayName}
                  </strong>
                  <button className="btn btn-ghost btn-outline btn-xs lg:btn-sm mt-2 mx-1">
                    Edit <span className="hidden lg:block"> Profile</span>
                  </button>
                  <svg
                    className="_ab6- sm:mt-2 lg:mt-3 xl:mt-4"
                    aria-label="Options"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="8.635"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></circle>
                    <path
                      d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
                <div className="hidden md:block mt-5">
                  <div className="flex justify-between">
                    <p>
                      <span className="font-bold">15,893</span> posts
                    </p>
                    <div className="mx-3 cursor-pointer">
                      <span className="font-bold">3.3M</span> followers
                    </div>
                    <div className="cursor-pointer">
                      <span className="font-bold">96</span> following
                    </div>
                  </div>
                </div>

                <p className="mt-5 md:text-2xl">{userInfo.email}</p>
              </div>
            </div>
          </div>
          <div className="block md:hidden ">
            <div className="divider"></div>
            <div className="mt-5">
              <div className="flex justify-between">
                <p>
                  <span className="font-bold">15,893</span> posts
                </p>
                <div className="mx-3 cursor-pointer">
                  <span className="font-bold">3.3M</span> followers
                </div>
                <div className="cursor-pointer">
                  <span className="font-bold">96</span> following
                </div>
              </div>
            </div>
          </div>
          <div className="divider md:mt-10"></div>
          <div className="grid justify-items-center mt-[-20px] ">
            <div className="tabs">
              <a className="tab tab-bordered tab-active">
                <svg
                  aria-label=""
                  className="_ab6-"
                  color="#262626"
                  fill="#262626"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <rect
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    width="18"
                    x="3"
                    y="3"
                  ></rect>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="9.015"
                    x2="9.015"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="14.985"
                    x2="14.985"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="21"
                    x2="3"
                    y1="9.015"
                    y2="9.015"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="21"
                    x2="3"
                    y1="14.985"
                    y2="14.985"
                  ></line>
                </svg>
                POSTS
              </a>
              <a className="tab tab-bordered">
                <svg
                  aria-label=""
                  className="_ab6-"
                  color="#8e8e8e"
                  fill="#8e8e8e"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="2.049"
                    x2="21.95"
                    y1="7.002"
                    y2="7.002"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="13.504"
                    x2="16.362"
                    y1="2.001"
                    y2="7.002"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="7.207"
                    x2="10.002"
                    y1="2.11"
                    y2="7.002"
                  ></line>
                  <path
                    d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                    fillRule="evenodd"
                  ></path>
                </svg>{' '}
                REELS
              </a>
              <a className="tab tab-bordered">
                <svg
                  aria-label=""
                  className="_ab6-"
                  color="#8e8e8e"
                  fill="#8e8e8e"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polygon>
                </svg>
                SAVED
              </a>
            </div>
          </div>

          {/* Post Photos */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 mt-7 justify-items-center">
            {myImagePost.map((myImage) => (
              <div>
                <img
                  onClick={() => postImageDetails(myImage._id)}
                  className="mask mask-square cursor-pointer w-[293px] h-[293px]"
                  src={myImage.postImageUrl}
                  alt="post"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-14 mb-10 mx-8 md:mx-20">
          <div className="flex">
            <div className="avatar">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-[150px] md:w-[180px]">
                <img alt="people" src={userInfo.photoURL} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="ml-3">
                <div className="flex">
                  <strong className="text-2xl lg:text-4xl">
                    {userInfo.displayName}
                  </strong>
                  <button className="btn btn-info btn-xs lg:btn-sm mt-2 mx-1">
                    Follow
                  </button>
                  <button className="btn btn-outline btn-ghost btn-xs lg:btn-sm mt-2 mx-1">
                    Message
                  </button>
                </div>
                <div className="hidden md:block mt-5">
                  <div className="flex justify-between">
                    <p>
                      <span className="font-bold">15,893</span> posts
                    </p>
                    <div className="mx-3 cursor-pointer">
                      <span className="font-bold">3.3M</span> followers
                    </div>
                    <div className="cursor-pointer">
                      <span className="font-bold">96</span> following
                    </div>
                  </div>
                </div>

                <p className="mt-5 md:text-2xl">{userInfo.email}</p>
              </div>
            </div>
          </div>
          <div className="block md:hidden ">
            <div className="divider"></div>
            <div className="mt-5">
              <div className="flex justify-between">
                <p>
                  <span className="font-bold">15,893</span> posts
                </p>
                <div className="mx-3 cursor-pointer">
                  <span className="font-bold">3.3M</span> followers
                </div>
                <div className="cursor-pointer">
                  <span className="font-bold">96</span> following
                </div>
              </div>
            </div>
          </div>
          <div className="divider md:mt-10"></div>
          <div className="grid justify-items-center mt-[-20px] ">
            <div className="tabs">
              <a className="tab tab-bordered tab-active">
                <svg
                  aria-label=""
                  className="_ab6-"
                  color="#262626"
                  fill="#262626"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <rect
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    width="18"
                    x="3"
                    y="3"
                  ></rect>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="9.015"
                    x2="9.015"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="14.985"
                    x2="14.985"
                    y1="3"
                    y2="21"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="21"
                    x2="3"
                    y1="9.015"
                    y2="9.015"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="21"
                    x2="3"
                    y1="14.985"
                    y2="14.985"
                  ></line>
                </svg>
                POSTS
              </a>
              <a className="tab tab-bordered">
                <svg
                  aria-label=""
                  className="_ab6-"
                  color="#8e8e8e"
                  fill="#8e8e8e"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="2.049"
                    x2="21.95"
                    y1="7.002"
                    y2="7.002"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="13.504"
                    x2="16.362"
                    y1="2.001"
                    y2="7.002"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="7.207"
                    x2="10.002"
                    y1="2.11"
                    y2="7.002"
                  ></line>
                  <path
                    d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                    fillRule="evenodd"
                  ></path>
                </svg>{' '}
                REELS
              </a>
              <a className="tab tab-bordered">
                <svg
                  aria-label=""
                  className="_ab6-"
                  color="#8e8e8e"
                  fill="#8e8e8e"
                  height="12"
                  role="img"
                  viewBox="0 0 24 24"
                  width="12"
                >
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polygon>
                </svg>
                SAVED
              </a>
            </div>
          </div>

          {/* Post Photos */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 mt-7 justify-items-center">
            {otherImagePost.map((otherimage) => (
              <div>
                <img
                  onClick={() => postImageDetails(otherimage._id)}
                  className="mask mask-square cursor-pointer w-[293px] h-[293px]"
                  src={otherimage.postImageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserInfo
