import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import useMDUsers from '../hooks/useUsers'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom'

function RightSide() {
  const [mdUsers, isLoading] = useMDUsers()
  const [user] = useAuthState(auth)

  const navigate = useNavigate()
  const userDetails = (id) => {
    navigate(`/user/${id}`)
  }

  return (
    <div className="sticky top-0 mt-5">
      {isLoading ? (
        <Loading />
      ) : (
        mdUsers.map((mUser) =>
          mUser.email === user.email ? (
            <div key={mUser._id} className="flex justify-between">
              <div className="flex items-center">
                <div className="avatar">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
                    <img alt="people" src={user.photoURL} />
                  </div>
                </div>
                <div className="mx-2">
                  <strong
                    className="cursor-pointer"
                    onClick={() => userDetails(mUser._id)}
                  >
                    {user.displayName}
                  </strong>
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="mr-20 mt-3">
                <button className="text-primary hover:text-black">
                  Switch
                </button>
              </div>
            </div>
          ) : (
            <span key={mUser._id}></span>
          ),
        )
      )}

      <div className="flex items-center my-3">
        <p>Suggestions For You</p>
        <a href="/people" className="ml-36 hover:text-primary">
          See All
        </a>
      </div>
      {/* follow people */}
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          mdUsers.slice(0, 10).map((mdUser) => (
            <div key={mdUser._id} className="flex justify-between mb-4">
              <div className="flex items-center">
                <div className="avatar">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                    <img alt="people" src={mdUser.photoURL} />
                  </div>
                </div>
                <div className="mx-2">
                  <strong
                    onClick={() => userDetails(mdUser._id)}
                    className="text-xs cursor-pointer"
                  >
                    {mdUser.displayName}
                  </strong>
                  <p className="text-xs">{mdUser.email}</p>
                </div>
              </div>
              <div className="mr-24 mt-2">
                <button className="text-primary hover:text-black text-xs">
                  Follow
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default RightSide
