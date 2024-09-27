import Category from '@/components/menu/category';
import Loading from '@/components/menu/Loading';
import Products from '@/components/menu/products';
import Search from '@/components/menu/Search';
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
                    <div>
                        <label className="form-label">مرتب سازی</label>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" />
                            <label className="form-check-label cursor-pointer">
                                بیشترین قیمت
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" />
                            <label className="form-check-label cursor-pointer">
                                کمترین قیمت
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" />
                            <label className="form-check-label cursor-pointer">
                                پرفروش ترین
                            </label>
                        </div>
                        <div className="form-check my-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" />
                            <label className="form-check-label cursor-pointer">
                                با تخفیف
                            </label>
                        </div>
                    </div>
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
