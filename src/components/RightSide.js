import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'

function RightSide() {
  const [user] = useAuthState(auth)
  console.log(user.displayName, user.photoURL)
  return (
    <div className="sticky top-0 mt-5">
      <div className="flex items-center">
        <div className="avatar">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
            <img alt="people" src={user.photoURL} />
          </div>
        </div>
        <div className="mx-2">
          <strong>{user?.displayName}</strong>
          <p>{user.email}</p>
        </div>
        <div className="ml-12">
          <button className="text-primary hover:text-black">Switch</button>
        </div>
      </div>
      <div className="flex items-center my-3">
        <p>Suggestions For You</p>
        <a href="/people" className="ml-24 hover:text-primary">
          See All
        </a>
      </div>
      {/* follow people */}
      <div>
        <div className="flex items-center mb-4">
          <div className="avatar">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
              <img alt="people" src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="mx-2">
            <strong className="text-xs">Andrew Alfred</strong>
            <p className="text-xs">Technical advisor</p>
          </div>
          <div className="ml-24">
            <button className="text-primary hover:text-black text-xs">
              Follow
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="avatar">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
              <img alt="people" src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="mx-2">
            <strong className="text-xs">Andrew Alfred</strong>
            <p className="text-xs">Technical advisor</p>
          </div>
          <div className="ml-24">
            <button className="text-primary hover:text-black text-xs">
              Follow
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="avatar">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
              <img alt="people" src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="mx-2">
            <strong className="text-xs">Andrew Alfred</strong>
            <p className="text-xs">Technical advisor</p>
          </div>
          <div className="ml-24">
            <button className="text-primary hover:text-black text-xs">
              Follow
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="avatar">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
              <img alt="people" src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="mx-2">
            <strong className="text-xs">Andrew Alfred</strong>
            <p className="text-xs">Technical advisor</p>
          </div>
          <div className="ml-24">
            <button className="text-primary hover:text-black text-xs">
              Follow
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="avatar">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
              <img alt="people" src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="mx-2">
            <strong className="text-xs">Andrew Alfred</strong>
            <p className="text-xs">Technical advisor</p>
          </div>
          <div className="ml-24">
            <button className="text-primary hover:text-black text-xs">
              Follow
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="avatar">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
              <img alt="people" src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="mx-2">
            <strong className="text-xs">Andrew Alfred</strong>
            <p className="text-xs">Technical advisor</p>
          </div>
          <div className="ml-24">
            <button className="text-primary hover:text-black text-xs">
              Follow
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="avatar">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
              <img alt="people" src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="mx-2">
            <strong className="text-xs">Andrew Alfred</strong>
            <p className="text-xs">Technical advisor</p>
          </div>
          <div className="ml-24">
            <button className="text-primary hover:text-black text-xs">
              Follow
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="avatar">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
              <img alt="people" src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="mx-2">
            <strong className="text-xs">Andrew Alfred</strong>
            <p className="text-xs">Technical advisor</p>
          </div>
          <div className="ml-24">
            <button className="text-primary hover:text-black text-xs">
              Follow
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="avatar">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
              <img alt="people" src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="mx-2">
            <strong className="text-xs">Andrew Alfred</strong>
            <p className="text-xs">Technical advisor</p>
          </div>
          <div className="ml-24">
            <button className="text-primary hover:text-black text-xs">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSide
