import React from 'react'

const TestForm = () => {
    return (

                <form>
                        <input type="text" placeholder="First Name"/><br/>
                        <input type="text" placeholder="Last Name"/><br/>
                        <input type="email" placeholder="Email"/><br/>
                        <input type="password" placeholder="Password"/><br/>
                        <input type="password" placeholder="Confirm Password"/><br/>
                        <input type="submit" value="Submit" /> "Sign Up" <br/>
                </form> // Fix: Added closing tag for form
    )
}

export default TestForm
