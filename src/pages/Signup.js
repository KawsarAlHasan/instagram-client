import React, { useState } from 'react'
import './Signup.css'
import SocialLogin from '../components/SocialLogin'
import nobody from '../assest/images/nobody.png'
import { useForm } from 'react-hook-form'
import auth from '../firebase.init'
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'

function Siginup() {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth)

  const [updateProfile, updateError] = useUpdateProfile(auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // image upload states
  const [image, setImage] = useState(null)
  const [uploadingImg, setUploadingImg] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)

  function validateImg(e) {
    const file = e.target.files[0]
    if (file.size >= 1048576) {
      return alert('Max file size is 1 MB')
    } else {
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  async function uploadImage() {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'v3hakopx')
    try {
      setUploadingImg(true)
      let res = await fetch(
        'https://api.cloudinary.com/v1_1/daizkkv04/image/upload',
        {
          method: 'post',
          body: data,
        },
      )
      const urlData = await res.json()
      setUploadingImg(false)
      return urlData.url
    } catch (error) {
      setUploadingImg(false)
      console.log(error)
    }
  }

  const onSubmit = async (data) => {
    if (!image) return alert('Please upload your profile picture')
    const url = await uploadImage(image)
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.name, photoURL: url })
    console.log(data)
  }

  let erroElement

  if (error || updateError) {
    erroElement = (
      <div>
        <p className="text-error">
          <small>Error: {error?.message || updateError.message}</small>
        </p>
      </div>
    )
  }

  const Navigate = useNavigate()
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

  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col md:flex-row">
          <div class="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center text-3xl font-bold">
                  Please Register
                </h1>
                <div className="signup-profile-pic__container">
                  <img
                    src={imagePreview || nobody}
                    alt="nobody"
                    className="signup-profile-pic"
                  />
                  <label htmlFor="image-upload" className="">
                    <i className="fas fa-plus-circle add-picture-icon"></i>
                  </label>
                  <input
                    type="file"
                    id="image-upload"
                    hidden
                    accept="image/png, image/jpg, image/jpeg"
                    onChange={validateImg}
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    {...register('name', { required: true })}
                    type="text"
                    placeholder="Your Name"
                    class="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-error">Name is required</span>
                  )}
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Email is Required',
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Provide a valid Email',
                      },
                    })}
                    type="email"
                    placeholder="Your email"
                    class="input input-bordered"
                  />
                  {errors.email?.type === 'required' && (
                    <span className="text-error">{errors.email.message}</span>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <span className="text-error">{errors.email.message}</span>
                  )}
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Password is Required',
                      },
                      minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer',
                      },
                    })}
                    type="text"
                    placeholder="password"
                    class="input input-bordered"
                  />
                  {errors.password?.type === 'required' && (
                    <span className="text-error">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <span className="text-error">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div class="form-control mt-3">
                  {erroElement}
                  {loading ? (
                    <button class="btn loading">Prossesing</button>
                  ) : (
                    <button type="submit" class="btn btn-primary">
                      sign up
                    </button>
                  )}
                </div>
                <p className="mb-2 mt-4">
                  Already have on accout?
                  <Link to="/login" className="text-primary">
                    Please Login
                  </Link>
                </p>
              </form>
              <div class="divider my-[-2px]">OR</div>
              <SocialLogin />
            </div>
          </div>
          <div className="hidden md:block">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Siginup
