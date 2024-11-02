"use client"
import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import Image from 'next/image';
import Swal from 'sweetalert2'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Message: ''
    });

    const [isEmailValid, setIsEmailValid] = useState(true);

    const onSubmit = async (event) => {
        event.preventDefault();

        const dataToSend = { ...formData, access_key: "KEY_PASS" };
        const json = JSON.stringify(dataToSend);

        try {
            const res = await fetch("Hostname", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const result = await res.json();

            if (res.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Message sent successfully!',
                    icon: 'success'
                });
                setFormData({ Name: '', Email: '', Message: '' });
            } else {
                console.error("Error:", result.message);
                Swal.fire({
                    title: 'Error!',
                    text: result.message || 'Something went wrong. Please try again!',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Please try again. Thanks!',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        // Email validation
        if (name === 'Email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setIsEmailValid(emailPattern.test(value));
        }

        setFormData({ ...formData, [name]: value });
    };

    const isFormValid = Object.values(formData).every((value) => value.trim() !== '') && isEmailValid;

    return (
        <div className='px-[5%]' id='contact'>
            <h1 className='text-2xl font-bold text-center'>Contact Us</h1>

            <div className='py-10 flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center sm:space-x-28'>
                <Box
                    component="form"
                    className='sm:w-full'
                    noValidate
                    autoComplete="off"
                    onSubmit={onSubmit}
                >
                    <div className='flex flex-col gap-4'>
                        <TextField
                            label="Name"
                            size='small'
                            type='text'
                            name='Name'
                            value={formData.Name}
                            onChange={handleChange}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#4a6b92',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#4a6b92',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#4a6b92',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#4a6b92',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#4a6b92',
                                },
                                '& .MuiOutlinedInput-root:focus-within': {
                                    outline: 'none',
                                }
                            }}
                        />
                        <TextField
                            label="Email"
                            size='small'
                            type='email'
                            name='Email'
                            value={formData.Email}
                            onChange={handleChange}
                            error={!isEmailValid}
                            helperText={!isEmailValid && "Please enter a valid email address"}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#4a6b92',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#4a6b92',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#4a6b92',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#4a6b92',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#4a6b92',
                                },
                                '& .MuiOutlinedInput-root:focus-within': {
                                    outline: 'none',
                                }
                            }}
                        />
                        <TextField
                            label="Your Message"
                            multiline
                            minRows={4}
                            name='Message'
                            value={formData.Message}
                            onChange={handleChange}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#4a6b92',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#4a6b92',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#4a6b92',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#4a6b92',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#4a6b92',
                                },
                                '& .MuiOutlinedInput-root:focus-within': {
                                    outline: 'none',
                                }
                            }}
                        />

                        <Button 
                            type='submit'
                            className='w-full bg-[#4a6b92] hover:bg-[#567dac]'
                            variant="contained"
                            endIcon={<SendIcon />}
                            disabled={!isFormValid}
                        >
                            Send
                        </Button>
                    </div>
                </Box>
            </div>
        </div>
    )
}
