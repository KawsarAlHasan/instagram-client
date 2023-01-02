import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../firebase.init'
import useMDUsers from '../hooks/useUsers'
import Loading from './Loading'

function NavbarBottom() {
  const [user, loading] = useAuthState(auth)

  const [mdUsers, isLoading] = useMDUsers()

  const navigate = useNavigate()
  const userDetails = (id) => {
    navigate(`/user/${id}`)
  }
  return (
    <div className="relative bottom-0 md:hidden">
      <ul className="menu w-full menu-horizontal bg-base-200  inset-x-0 bottom-0 fixed flex justify-around row-auto">
        <li>
          <Link to="/">
            <svg
              aria-label="Home"
              className="_ab6-"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </Link>
        </li>
        <li>
          <a href="/home">
            <svg
              aria-label="Explore"
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
                points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></polygon>
              <polygon
                fillRule="evenodd"
                points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
              ></polygon>
              <circle
                cx="12.001"
                cy="12.005"
                fill="none"
                r="10.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></circle>
            </svg>
          </a>
        </li>
        <li>
          <a href="/home">
            <svg
              aria-label="Reels"
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
                x1="2.049"
                x2="21.95"
                y1="7.002"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="13.504"
                x2="16.362"
                y1="2.001"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="7.207"
                x2="10.002"
                y1="2.11"
                y2="7.002"
              ></line>
              <path
                d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <label for="image-post-model">
            <svg
              aria-label="New post"
              className="_ab6-"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="6.545"
                x2="17.455"
                y1="12.001"
                y2="12.001"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="12.003"
                x2="12.003"
                y1="6.545"
                y2="17.455"
              ></line>
            </svg>
          </label>
        </li>
        <li>
          <a href="/home">
            <svg
              aria-label="Direct"
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
          </a>
        </li>
        <li>
          {isLoading || loading ? (
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-7">
                <span className="text-3xl">P</span>
              </div>
            </div>
          ) : (
            mdUsers.map(
              (mUser) =>
                mUser.email === user.email && (
                  <div
                    key={mUser._id}
                    href="/home"
                    className="cursor-pointer"
                    onClick={() => userDetails(mUser._id)}
                  >
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-7">
                        <img alt="people" src={user.photoURL} />
                      </div>
                    </div>
                  </div>
                ),
            )
          )}
        </li>
      </ul>
    </div>
  )
}

export default NavbarBottom
