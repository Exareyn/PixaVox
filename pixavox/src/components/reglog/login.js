import React from 'react'
import './reglog.css'

function login() {
  return (
    <div className='body'>
      <div className='center'>
        <div className='title'>
          <h1>Login</h1>
        </div>
        <form method='POST'>
          <div className='title2'>
            <h2>Adresse email</h2>
          </div>
          <div className='field'>
            <input placeholder='example@email.com' type='email' required />
            <span className='fas fa-user'></span>
          </div>
          <div className='title2'>
            <h2>Mot de passe</h2>
          </div>
          <div className='field'>
            <input placeholder='*********' type="password" required />
            <span className='fas fa-lock'></span>
          </div>
          <div className='submit'>
            <button>Se connecter</button>
          </div>
          <div className='sign-up'>
            <p>Pas encore inscrit ? <span>Cliquer ici</span></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default login