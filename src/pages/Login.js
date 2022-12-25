import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import SocialLogin from '../components/SocialLogin'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'

function Login() {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
  }

  const Navigate = useNavigate()

  if (user) {
    Navigate('/')
  }

  let erroElement

  if (error) {
    erroElement = (
      <div>
        <p className="text-error">
          <small>Error: {error?.message}</small>
        </p>
      </div>
    )
  }

  return (
    <div>
      <div>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col md:flex-row">
            <div className="hidden md:block">
              <h1 class="text-5xl font-bold">Login now!</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div class="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h1 className="text-center text-3xl font-bold">
                    Please Login
                  </h1>
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
                      })}
                      type="email"
                      placeholder="Your email"
                      class="input input-bordered"
                    />
                    {errors.email?.type === 'required' && (
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
                          message: 'Wrong Password',
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
                    <label class="label">
                      <a href="/s" class="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  {erroElement}
                  <div class="form-control mt-1">
                    {loading ? (
                      <button class="btn loading">Prossesing</button>
                    ) : (
                      <button type="submit" class="btn btn-primary">
                        login
                      </button>
                    )}
                  </div>
                  <p className="mb-2 mt-4">
                    New to Love❤️Post{' '}
                    <Link to="/signup" className="text-primary">
                      Create New Account
                    </Link>
                  </p>
                </form>
                <div class="divider my-[-2px]">OR</div>
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
