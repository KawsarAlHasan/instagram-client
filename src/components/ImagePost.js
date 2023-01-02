import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import auth from '../firebase.init'
import imageIcon from '../assest/logo/picture.svg'
import useMDUsers from '../hooks/useUsers'
import Loading from './Loading'
import { toast } from 'react-toastify'

function ImagePost() {
  const { register, handleSubmit } = useForm()

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

  const [user, loading] = useAuthState(auth)
  const [mdUsers, isLoading] = useMDUsers()

  const onSubmit = async (data) => {
    if (!image) return alert('Please upload your profile picture')
    const postImageUrl = await uploadImage(image)
    fetch('https://love-post-backend.onrender.com/post/image', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        displayName: data.displayName,
        photoURL: data.photoURL,
        userId: data.userId,
        caption: data.caption,
        email: user.email,
        postImageUrl: postImageUrl,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        window.location.reload(false)
        toast('Image Post Successfully!')
      })
    console.log('data', postImageUrl)
  }
  return (
    <div>
      <input type="checkbox" id="image-post-model" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="image-post-model"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="text-center text-3xl font-bold">Create new post</h1>
          {isLoading || loading || uploadingImg ? (
            <Loading />
          ) : (
            mdUsers.map((imgPost) => (
              <div key={imgPost._id}>
                {user.email === imgPost.email && (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="hidden">
                      <input
                        {...register('displayName')}
                        type="text"
                        defaultValue={imgPost.displayName}
                      />
                      <input
                        {...register('photoURL')}
                        type="text"
                        defaultValue={imgPost.photoURL}
                      />
                      <input
                        {...register('userId')}
                        type="text"
                        defaultValue={imgPost._id}
                      />
                    </div>
                    <div className="form-control">
                      <input
                        {...register('caption')}
                        type="text"
                        placeholder="Write a Caption.."
                        className="input input-bordered"
                      />
                    </div>
                    <div className="grid justify-items-center">
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <i className="fa fa-camera-retro fa-5x"></i>
                      </label>
                      <input
                        type="file"
                        id="image-upload"
                        hidden
                        accept="image/png, image/jpg, image/jpeg"
                        onChange={validateImg}
                      />
                      <img
                        src={imagePreview || imageIcon}
                        alt="nobody"
                        className="mask mask-square h-96 w-[ 293px] "
                      />
                    </div>
                    <div className="form-control mt-3">
                      <button type="submit" className="btn btn-primary">
                        post
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default ImagePost
