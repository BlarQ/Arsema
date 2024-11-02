import Image from 'next/image';
import React from 'react';

const services = [
    { id: 1, name: 'Seeds', img: '/seeds.jpg' },
    { id: 2, name: 'Seedling Production', img: '/seedling.png' },
    { id: 3, name: 'Cloning', img: '/clone.jpeg' },
    { id: 4, name: 'Research on Cannabis', img: '/shutterstock.jpg' },
    { id: 5, name: 'Oil, CBD and THC extraction', img: '/oil.jpeg' },
    { id: 6, name: 'Hemp based cosmetic products', img: '/Hempimages.jpeg' },
    { id: 7, name: 'CBD infused raw shea butter', img: '/CBD-Shea.jpg' },
    { id: 8, name: 'CBD infused shea body cream', img: '/BODYimages.jpeg' },
    { id: 9, name: 'CBD infused face cream', img: '/FCimages.jpeg' },
    { id: 10, name: 'Scented raw shea butter', img: '/Scentendimages.jpeg' },
    { id: 11, name: 'Shea-avo hair food', img: '/SheaAvo.jpeg' },
    { id: 12, name: 'Raw shea butter (Vitamin E acetate)', img: '/RawSheaButter.jpeg' },
];

const Services = () => {
    return (
        <section className='px-[5%] flex items-center justify-center flex-col py-10'>
            <h2 className='py-4 text-2xl font-bold text-center'>Our Services</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {services.map((service) => (
                    <div
                        key={service.id}
                        className='border shadow p-4 flex hover:-translate-y-1 duration-300 flex-col justify-center text-center items-center rounded'
                    >
                        <Image
                            className='h-56 w-56 rounded object-cover'
                            src={service.img}
                            width={200}
                            height={200}
                            alt={service.name}
                        />
                        <h3 className='pt-4 text-lg font-medium'>{service.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
