'use client'
import style from '@/app/testimonials/testimonials.module.css'
import Image from 'next/image';
import user from '@/app/testimonials/user.png'
import star from '@/app/testimonials/star.svg'
import fillStar from '@/app/testimonials/fill-star.svg'
import React from 'react';
import dynamic from 'next/dynamic';

function Testimonials() {

    // change satrs
    let changeStars = (e) => {
        if(e.target.src == "http://localhost:3000/_next/static/media/fill-star.926cb88b.svg"){
            e.target.src = "http://localhost:3000/_next/static/media/star.ece61936.svg"
        }
        else{
            e.target.src = "http://localhost:3000/_next/static/media/fill-star.926cb88b.svg"
        }
    }


    return ( 
        <div className={style.testimonials}>

            {/* text titel */}
            <div className={style.title}>
                <h1>What Clients Say</h1>
                <p>Problems trying to resolve the conflict between 
                    <br/>
                    the two major realms of Classical physics: Newtonian mechanics 
                </p>
            </div>

            {/* card item */}
            <div className={style.card}>
                <Image src={user} />
                <p>Slate helps you see how many more days you needb <br/> 
                    to work to reach your financial goal for the month and year.
                </p>


                {/* stars  */}
                <div className={style.stars} onClick={changeStars}>
                    <Image src={fillStar} />
                    <Image src={fillStar} />
                    <Image src={fillStar} />
                    <Image src={fillStar} />
                    <Image src={star} />
                </div>

                <div className={style.text}>
                    <h1>Regina Miles</h1>
                    <p>Designer</p>
                </div>
            </div>
        </div>
     );
}

export default Testimonials;