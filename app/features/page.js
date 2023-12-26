import style from "@/app/features/features.module.css";
import icon from "@/app/features/icon.svg"; 

import Link from "next/link";
import Image from "next/image";

function Features() {

    return ( 
        <div className={style.features}>

            {/* text title */}
            <div className={style.text}>
                <h1>Better Strategy</h1>
                <p>Problems trying to resolve the conflict between 
                    <br/> 
                    the two major realms of Classical physics: Newtonian mechanics
                 </p>
            </div>

            {/* cards */}
            <div className={style.cards}>

            <div>
                    <Image src={icon}/>
                    <p>Investment Trading</p>
                </div>
                <div>
                    <Image src={icon} />
                    <p> Support On Raising Funds</p>
                </div>
                <div>
                    <Image src={icon} />
                    <p>Financial Analysis</p>
                </div>
                <div>
                    <Image src={icon} />
                    <p>Taxation Planning</p>
                </div>
                <div>
                    <Image src={icon} />
                    <p>Save money and tim</p>
                </div>
                <div>
                    <Image src={icon} />
                    <p>Outsourced Consulting Business</p>
                </div>

            </div>

            {/* bouttns */}
            <div id={style.button}>
                    <Link href='/' style={{textDecoration:'none'}}><button className={style.but} id={style.but1}>Get Quote Now</button></Link>
                    <Link href='/' style={{textDecoration:'none'}}><button className={style.but} id={style.but2}>Learn More</button></Link>
                </div>

        </div>
     );
}

export default Features;