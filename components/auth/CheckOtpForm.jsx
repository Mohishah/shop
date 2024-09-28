'use client'

import React, { useContext } from 'react';
import { useFormState } from 'react-dom'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import SubmitButton from '../SubmitButton';
import { checkOtp } from '@/actions/auth';
import AuthContext from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const CheckOtpForm = () => {

    const [stateOtp, formActionOtp] = useFormState(checkOtp, {});
    const {loginContext } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        toast(stateOtp?.message, { type: `${stateOtp?.status}` });
        if (stateOtp?.status === "success"){
            loginContext(stateOtp.user)
            router.push('/')
        }
    }, [stateOtp])

    return (
            <div className="card-body">
                <div className="form_container">
                    <form action={formActionOtp}>
                        <div className="mb-3">
                            <label className="form-label">کد ورود</label>
                            <input name='otp' type="text" className="form-control" />
                        </div>
                        <SubmitButton title="ورود" style="btn btn-primary btn-auth" />
                    </form>
                </div>
            </div>
    );
}

export default CheckOtpForm;
