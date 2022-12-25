import React from 'react'
import googleImg from '../assest/images/google.png'
import facebookImg from '../assest/images/facebook.png'
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import { useNavigate } from 'react-router-dom'

function SocialLogin() {
  const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(
    auth,
  )
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)
  const navigate = useNavigate()

  if (gUser || fUser) {
    navigate('/')
  }

  let erroElement

  if (gError || fError) {
    erroElement = (
      <div>
        <p className="text-error">
          Error: {gError?.message || fError?.message}
        </p>
      </div>
    )
  }
  return (
    <div>
      {erroElement}
      {gLoading ? (
        <button class="btn loading w-full">loading</button>
      ) : (
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline w-full"
        >
          <img src={googleImg} className="w-8 mr-1" /> continue with google
        </button>
      )}
      {fLoading ? (
        <button class="btn loading w-full mt-3">loading</button>
      ) : (
        <button
          onClick={() => signInWithFacebook()}
          className="btn btn-outline w-full mt-3"
        >
          <img src={facebookImg} className="w-8 mr-1" /> continue with facebook
        </button>
      )}
    </div>
  )
}

export default SocialLogin
