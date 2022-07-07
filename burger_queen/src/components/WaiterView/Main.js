import React from 'react';
import Waiter from './Waiter';
import data from './data';

const Main = () => {
    console.log(data.productData)
    return(
        <>
    <h1 className="text-center mt-3">All items</h1>
    <section className="py-4 container">
        <div className="row justify-content-center">
            {data.productData.map((item, index) => {
                return(
            <Waiter 
            img={item.img}
            name={item.name}
            price={item.price}
            item={item}
            key={index}
            />
            )
        })}
        </div>
    </section>
        </>
    )
}

export default Main;