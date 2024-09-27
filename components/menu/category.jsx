'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const Category = ({categories}) => {

    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams()

    function handleClick(id) {
        const params = new URLSearchParams(searchParams);
        params.set('category', id);
        params.delete('page');

        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="filter-list">
            <div className="form-label">
                دسته بندی
            </div>
            <ul>
                {categories.map(category => (
                    <li onClick={()=>handleClick(category.id)}
                    key={category.id} 
                    className={searchParams.has('category') && searchParams.get('category') == category.id ? "my-2 filter-list-active" : "my-2 cursor-pointer"}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Category;
