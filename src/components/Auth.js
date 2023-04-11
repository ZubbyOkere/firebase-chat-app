import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase-config'
import Cookies from 'universal-cookie'
import '../styles/Auth.css'

const cookies = new Cookies()

export const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      cookies.set('auth-token', result.user.refreshToken)
      setIsAuth(true)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className='auth'>
      <p>Sign In With Your Google Account</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}
