import React from 'react'
import SocialLogin from '../components/SocialLogin'
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

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.name })
  }

  const Navigate = useNavigate()

  if (user) {
    Navigate('/')
    console.log(user)
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
                  <label class="label">
                    <a href="/s" class="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div class="form-control mt-1">
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
