import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../firebase.init'
import useMDUsers from '../hooks/useUsers'

function NavbarTop2() {
  const [user, loading] = useAuthState(auth)

  const [mdUsers, isLoading] = useMDUsers()

  const navigate = useNavigate()
  const userDetails = (id) => {
    navigate(`/user/${id}`)
  }

  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <div className="relative">
      <div class="navbar bg-base-200 md:hidden fixed z-[100]">
        <div class="flex-1">
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            Love❤️Post
          </Link>
        </div>
        <div class="flex-none gap-2">
          <div class="form-control">
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered input-sm"
            />
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
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
                      mUser.email === user?.email && (
                        <div
                          key={mUser._id}
                          href="/home"
                          className="cursor-pointer"
                          onClick={() => userDetails(mUser._id)}
                        >
                          <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-7">
                              <img alt="people" src={user?.photoURL} />
                            </div>
                          </div>
                          <p>{user?.displayName}</p>
                        </div>
                      ),
                  )
                )}
              </li>
              <li>
                <a>Settings</a>
              </li>
              {user && (
                <li className="btn btn-error btn-sm">
                  <Link onClick={handleSignOut} to="login">
                    Sign Out
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarTop2
