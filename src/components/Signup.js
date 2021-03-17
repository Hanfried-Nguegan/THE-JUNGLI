import React,{useRef} from 'react'
import {Card,Form,Button} from 'react-bootstrap'

export default function Signup() {
    const nameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    return (
        <>
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group id='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='name' ref={nameRef} Required />
                        </Form.Group>
                         <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} Required />
                        </Form.Group>
                         <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} Required />
                        </Form.Group>
                        <Button type='submit' className='w-100'>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
           <div className='w-100 text-center mt-2 text-secondary'>
                Already have an account ? Log In
            </div>
        </>

    )
}
