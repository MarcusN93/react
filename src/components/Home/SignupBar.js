import React from 'react'

import Button from '../Generics/Button'
import img_backgroundLines from '../../assets/images/background-lines-right.svg'

const SignupBar = () => {
  return (
    <section className="signup">
            <img className="background-lines-right" src={img_backgroundLines} alt="wavy lines"/>
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                <form>
                    <input type="text" placeholder="username@domain.com"/>
                    <Button type="" title="Subscribe" url="/subscribe" />
                </form>
            </div>
        </section>
  )
}

export default SignupBar