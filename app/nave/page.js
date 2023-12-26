

import style from '@/app/nave/nave.module.css'
import Link from 'next/link';
import next from '@/app/nave/next.svg' 
import Image from 'next/image';


// import {inter} from 'next/font/google'

// const inter = inter({subsets: ['latine']})

function Nave() {
    return ( 
        <nav className={style.nave}>
            <Link href='/' style={{textDecoration:'none'}}><p className={style.logo}>BrandName</p></Link>
            <div className={style.buttons}>
                <Link href='/' className={style.a}><p className={style.link}>Home</p></Link>
                <Link href='/src/product' className={style.a}><p className={style.link}>Product</p></Link>
                <Link href='/src/pricing' className={style.a}><p className={style.link}>Pricing</p></Link>
                <Link href='/src/contact' className={style.a}><p className={style.link}>Contact</p></Link>
            </div>

            <div className={style.log}>
                <Link href='/src/login' style={{textDecoration:'none'}}><p className={style.login}>Login</p></Link>
                <Link href='/src/member' style={{textDecoration:'none'}}>
                    <div className={style.member}>
                        <p className={style.p}>Become a member</p>
                        <Image id={style.next} src={next}/>
                    </div>
                </Link>
            </div>
        </nav>
     );
}

export default Nave;