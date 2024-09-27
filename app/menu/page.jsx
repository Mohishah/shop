import Category from '@/components/menu/category';
import Loading from '@/components/menu/Loading';
import Products from '@/components/menu/products';
import Search from '@/components/menu/Search';
import Sort from '@/components/menu/Sort';
import { getFetch } from '@/utils/fetch';
import React, { Suspense } from 'react';

const Page = async ({searchParams}) => {

    const categories = await getFetch('')

    const params = new URLSearchParams(searchParams)


    return (
    <section className="food_section layout_padding">
        <div className="container">
            <div className="row">

                <div className="col-sm-12 col-lg-3">
                    <Search/>
                    <hr />
                    <Category categories={categories}/>
                    <hr />
                    <Sort/>
                </div>

                <div className="col-sm-12 col-lg-9">
                    <Suspense key={params.toString()} fallback={<Loading />}>
                        <Products params={params.toString()}/>
                    </Suspense>    
                </div>

            </div>
        </div>
    </section>
    );
}

export default Page;
