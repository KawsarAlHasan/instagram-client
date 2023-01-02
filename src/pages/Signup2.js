import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import auth from '../firebase.init'
import signup2 from '../assest/images/signup2.jpg'

function Signup2() {
  const [user, loading] = useAuthState(auth)

  const Navigate = useNavigate()

  //   const { handleSubmit } = useForm()

  const onSubmit = (data) => {
    fetch(`http://localhost:4000/user/${user.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Navigate('/')
      })
  }
  return (
    <div className="">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-row">
          <img
            src={signup2}
            class="w-[50%] rounded-lg shadow-2xl hidden md:block "
          />
          <div>
            <h1 class="text-2xl font-bold">condition of Love❤️Post</h1>
            <p className="py-4 text-lg">
              Love❤️Post is a social media. Here you don't post obscene pictures
              and don't write bad words in captions. If you post obscene
              pictures or bad words in the caption, we will terminate your
              account. <br />
              If you agree with my terms then click on 'I agree' button
            </p>
            <div class="card-actions justify-center">
              {loading ? (
                <button className="btn loading">Prossesing</button>
              ) : (
                <button onClick={() => onSubmit()} className="btn btn-primary">
                  I agree
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup2
