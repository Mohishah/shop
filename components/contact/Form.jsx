"use client"

import { create } from '@/actions/Contact';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import SubmitButton from '../SubmitButton';
import { toast } from 'react-toastify';

const Form = () => {

    const [state,formAction] = useFormState(create,{})

    useEffect(() => {
        if (state?.status === 'error') {
            toast.error(state.message)
        } else{
            toast.success(state.message)
        }
    }, [state])

    return (
        <div className="form_container">
            <form action={formAction}>
                <div>
                    <input name='name' type="text" className="form-control" placeholder="نام و نام خانوادگی" />
                </div>
                <div>
                    <input name='email' type="email" className="form-control" placeholder="ایمیل" />
                </div>
                <div>
                    <input name='subject' type="text" className="form-control" placeholder="موضوع پیام" />
                </div>
                <div>
                    <textarea name='text' rows="10" style={{height: "100px"}} className="form-control"
                        placeholder="متن پیام"></textarea>
                </div>
                <div className="btn_box">
                    <SubmitButton title="ارسال پیام" />
                </div>
            </form>
        </div>
    );
}

export default Form;
