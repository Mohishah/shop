
import Loading from '@/components/profile/transaction/Loading';
import Table from '@/components/profile/transaction/Table';
import React, { Suspense } from 'react';

const Page = ({searchParams}) => {

    const params = new URLSearchParams(searchParams);

    return (
        <Suspense key={params.toString()} fallback={<Loading />}>
            <Table params={params.toString()} />
        </Suspense>    );
}

export default Page;
