import React from 'react'
import './reglog.css'

function register() {
  return (
    <div className='body'>
      <div className='center'>
        <div className='title'>
          <h1>Inscription</h1>
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
            <button>Créer un compte</button>ß
          </div>
          <div className='sign-up'>
            <p>Déjà un compte ? <span>Cliquer ici</span></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default register