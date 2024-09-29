'use client'

import { deleteAddress } from '@/actions/profile';
import SubmitButton from '@/components/SubmitButton';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';

const DeleteForm = ({addressId}) => {

    const [stateDelete, formActionDelete] = useFormState(deleteAddress, {});

    useEffect(() => {
        toast(stateDelete?.message, { type: `${stateEdit?.status}` })
    }, [stateDelete]);

    return (
    <form action={formActionDelete}>   
        <div className="form-delete-address">
            <input type="hidden" name='address_id' value={addressId} />
            <SubmitButton title='حذف' style='btn btn-dark'/>
        </div>
    </form> 
    );
}

export default DeleteForm;
