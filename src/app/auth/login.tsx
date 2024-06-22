'use client';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import { useState } from 'react';
import { getUser } from './server';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/state/store';
import { initialize } from '@/state/userSlice';

type LoginFormFields = {
    email: string;
    password: string;
};

function LoginForm() {
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<LoginFormFields>();
    const [loginSuccessful, setLoginSuccessful] = useState<boolean>(true);

    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
        if (data.email === "admin@admin.admin" && data.password === "admin") {
            setLoginSuccessful(true);
            router.push("/Admin");
            return;
        }

        const user = await getUser(data.email, data.password);

        if (user) {
            dispatch(initialize(user));
            setLoginSuccessful(true);
            router.push("/NewsFeed");
        }
        else {
            setLoginSuccessful(false);
        }
    };

    return (
        <Form noValidate name="loginForm" onSubmit={handleSubmit(onSubmit)}>
            <Card className="!rounded-2xl">
                <Card.Body className="space-y-4">
                    <Card.Title className="text-center">Login</Card.Title>
                    <Card.Text className="text-center">Sign in to your account</Card.Text>
                    <FloatingLabel label="Email">
                        <Form.Control isInvalid={!!errors.email} {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} type="email" placeholder="Email" />
                        <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel label="Password">
                        <Form.Control isInvalid={!!errors.password} {...register("password", { required: true })} type="password" placeholder="Password" />
                        <Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
                    </FloatingLabel>
                    {(!loginSuccessful && !isSubmitting) && <div className="text-[14px] text-[#dc3545]">Invalid email or password.</div>}
                    <div className="flex justify-between">
                        <Form.Check name="rememberMe" type="checkbox" label="Remember me" />
                        <Card.Link href="#" className="right-0">Forgot Password?</Card.Link>
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting && <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />}
                        {!isSubmitting && "Login"}
                    </Button>
                </Card.Body>
            </Card>
        </Form>
    );
}

export default LoginForm;