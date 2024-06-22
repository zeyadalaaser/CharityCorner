'use client';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Cards, { CardsParams } from '@/components/Cards/cards';
import { useForm, SubmitHandler } from "react-hook-form"
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import { Spinner } from 'react-bootstrap';

import egypt from "@/data/egypt.json";
import doctor from "@/assets/login/doctor.png";
import hand from "@/assets/login/hand.png";
import organization from "@/assets/login/organization.png";
import teacher from "@/assets/login/teacher.png";
import { createUser, getUser } from './server';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/state/store';
import { initialize } from '@/state/userSlice';

type RegisterFormFields = {
    name: string;
    gender: string;
    orgName?: string;
    orgType?: string;
    number: string;
    address: string;
    area: string;
    governorate: string;
    email: string;
    password: string;
    confirm: string;
    userType: string;
    file?: FileList;
};

function RegisterForm() {

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const types: CardsParams[] = [
        { id: "regular", name: "Regular", icon: hand.src },
        { id: "teacher", name: "Teacher", icon: teacher.src },
        { id: "doctor", name: "Doctor", icon: doctor.src },
        { id: "org", name: "Organization", icon: organization.src }
    ];

    const organizationTypes = ['Orphanage', 'Hospital', 'School', 'Mosque', 'Church'];

    const { register, handleSubmit, watch, formState: { errors, isSubmitting, isSubmitted }, trigger, setValue }
        = useForm<RegisterFormFields>();
    const userType = watch("userType");
    const password = watch("password");
    const gov = watch("governorate");

    const [address, setAddress] = useState<string>();

    React.useEffect(() => {
        if (userType === "org")
            setAddress("Organization address");
        else if (address != "Address")
            setAddress("Address");
    }, [userType]);

    React.useEffect(() => {
        if (isSubmitted)
            trigger("confirm");
    }, [password]);

    const onSubmit: SubmitHandler<RegisterFormFields> = async (data) => {

        const formData = new FormData();
        const dataRecords = data as Record<string, string | FileList>;

        for (const key in data) {
            if (key === "confirm")
                continue;

            if (key === "file")
                formData.append(key, (dataRecords[key] as FileList).item(0) as File);
            else
                formData.append(key, dataRecords[key] as string);
        }

        const user = await createUser(formData);
        dispatch(initialize(user));

        router.push("/NewsFeed");
    };

    return (
        <Form noValidate name="registerForm" onSubmit={handleSubmit(onSubmit)}>
            <Card className="!rounded-2xl">
                <Card.Body className="space-y-2">
                    <Card.Title className="text-center">Register</Card.Title>
                    <Card.Text className="text-center">Sign up as a donor or an organization</Card.Text>
                    <Cards cards={types} name="userType" register={register} setValue={setValue} />
                    <div className="grid grid-cols-2 gap-2">
                        <FloatingLabel label="Full name (First and last name)">
                            <Form.Control isInvalid={!!errors.name} {...register("name", { required: true, validate: value => value.split(' ').filter(n => n).length >= 2 })} type="name" placeholder="Name" />
                            <Form.Control.Feedback type="invalid">Please enter your full name.</Form.Control.Feedback>
                        </FloatingLabel>
                        <FloatingLabel label="Gender">
                            <Form.Select isInvalid={!!errors.gender} {...register("gender", { required: true })} defaultValue="">
                                <option disabled value=""></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">Please select your gender.</Form.Control.Feedback>
                        </FloatingLabel>
                    </div>
                    {userType === "org" && <div className="grid grid-cols-2 gap-2">
                        <FloatingLabel label="Organization name">
                            <Form.Control isInvalid={!!errors.orgName} {...register("orgName", { required: true })} type="name" placeholder="Organization name" />
                            <Form.Control.Feedback type="invalid">Please enter the organization name.</Form.Control.Feedback>
                        </FloatingLabel>
                        <FloatingLabel label="Organization type">
                            <Form.Select isInvalid={!!errors.orgType} {...register("orgType", { required: true })} defaultValue="">
                                <option disabled value=""></option>
                                {organizationTypes.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">Please select an organization type.</Form.Control.Feedback>
                        </FloatingLabel>
                    </div>}
                    <div className="grid grid-cols-2 gap-2">
                        <FloatingLabel label="Phone number">
                            <Form.Control isInvalid={!!errors.number} {...register("number", { required: true })} type="tel" placeholder="Phone number" />
                            <Form.Control.Feedback type="invalid">Please enter a phone number.</Form.Control.Feedback>
                        </FloatingLabel>
                        <FloatingLabel label={address}>
                            <Form.Control isInvalid={!!errors.address} {...register("address", { required: true })} type="text" placeholder={address} />
                            <Form.Control.Feedback type="invalid">Please enter an address.</Form.Control.Feedback>
                        </FloatingLabel>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <FloatingLabel label="Governorate">
                            <Form.Select isInvalid={!!errors.governorate} {...register("governorate", { required: true })} defaultValue="">
                                <option disabled value=""></option>
                                {Object.keys(egypt).map((governorate) => (
                                    <option key={governorate} value={governorate}>{governorate}</option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">Please select a governorate.</Form.Control.Feedback>
                        </FloatingLabel>
                        <FloatingLabel label="Area">
                            <Form.Select isInvalid={!!errors.area} {...register("area", { required: true })} defaultValue="">
                                <option disabled value=""></option>
                                {gov && (egypt as { [key: string]: string[] })[gov].map((t: string) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">Please select an area.</Form.Control.Feedback>
                        </FloatingLabel>
                    </div>
                    <FloatingLabel label="Email">
                        <Form.Control isInvalid={!!errors.email} {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} type="email" placeholder="Email" />
                        <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
                    </FloatingLabel>
                    <div className="grid grid-cols-2 gap-2">
                        <FloatingLabel label="Password">
                            <Form.Control isInvalid={!!errors.password} {...register("password", { required: true })} type="password" placeholder="Password" />
                            <Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
                        </FloatingLabel>
                        <FloatingLabel label="Confirm Password">
                            <Form.Control isInvalid={!!errors.confirm} {...register("confirm", { validate: (value) => value === password })} type="password" placeholder="Confirm Password" />
                            <Form.Control.Feedback type="invalid">Passwords are not matching.</Form.Control.Feedback>
                        </FloatingLabel>
                    </div>
                    {userType === undefined || userType != "regular" && <div>
                        <Form.Label>Upload verification document</Form.Label>
                        <Form.Control isInvalid={!!errors.file} {...register("file",
                            {
                                required: "Please select the verification document to upload.",
                                validate: (file) => (file?.item(0)?.name.endsWith(".pdf")) ? true : "Please upload a PDF file."
                            })} type="file" />
                        <Form.Control.Feedback type="invalid">{errors.file?.message}</Form.Control.Feedback>
                    </div>}
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting && <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />}
                        {!isSubmitting && "Register"}</Button>
                </Card.Body>
            </Card>
        </Form>
    );
}

export default RegisterForm;