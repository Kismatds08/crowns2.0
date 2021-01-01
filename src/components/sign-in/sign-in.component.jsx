import React from 'react'
import { auth, signInwithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

class SignIn extends React.Component{

    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    // handleEmail = event => {
    //     this.setState({email: event.target.value})
    // }

    // handlePassword = event => {
    //     this.setState({password: event.target.value})
    // }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]:value})
        // console.log(event)
    }

    handleSubmit = async event => {
        // Prevents any Default action to take place
        event.preventDefault()

        const {email , password} = this.state

        // signInwith Email and Password from authentication library
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})
        }
        catch(error){
            console.log(error)
        }
        
    }



    render(){
        // console.log(this.state.email)
        // console.log(this.state.password)
    
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='Email' 
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required
                        />
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='Password' 
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required
                    />

                    <CustomButton type='submit'>
                        SIGN IN
                    </CustomButton>
                    <CustomButton onClick={signInwithGoogle} isGoogleSignIn='true' >
                        SIGN IN WITH GOOGLE
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn