import { getFetch } from '@/utils/fetch';
import React from 'react';
import Product from '../products/Product';
import Paginate from './paginate';

const Products = async ({params}) => {

    const products = await getFetch(`/menu?${params}`)

    return (
        <>
            <div className="row gx-3">
                    {products.products.map(products=>(
                        <div key={products.id} className="col-sm-6 col-lg-4">
                            <Product product={products}/>
                        </div>
                    ))}
            </div>
            <Paginate links={products.meta.links}/>
        </>
    );
}

export default Products;
