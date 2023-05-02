import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const FormValidation = () => {

    const { handleSubmit, register, formState: { errors }, watch } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className=' d-flex justify-content-center align-items-center mt-5'>
            <Form onSubmit={handleSubmit(onSubmit)} className='w-25 h-100  shadow-lg p-4 rounded'>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control {...register("name", { required: "Name is Required" })} type="text" placeholder="Your Name" />
                    <p className='py-2 text-danger fw-semibold'>{errors.name?.message}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control {...register("email", { pattern: /^[A-Za-z\.@]+$/i })} type="email" placeholder="Enter email" />
                    {errors?.email?.type === "pattern" && (<p className='py-2 text-danger fw-semibold'>Invalid Email</p>)}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register("password")} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control {...register("conPassword", {
                        validate: data => {
                            if (watch('password') !== data) {
                                return 'Password not match'
                            }
                        }
                    })} type="password" placeholder="Password" />
                    <p className='py-2 text-danger fw-semibold'>{errors.conPassword?.message}</p>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default FormValidation;