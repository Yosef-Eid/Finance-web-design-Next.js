import style from '@/app/header/header.module.css'
import Link from 'next/link';
import Image from 'next/image';
import img from '@/app/header/croods-user-interface.svg'
function Header() {
    return ( 
        <header id={style.hed}>
            <div id={style.left}>
                <h1>Financial Assistance With True Purpose</h1>
                <p>We know how large objects will act,but things on a small scale.</p>
                <div id={style.button}>
                    <Link href='/' style={{textDecoration:'none'}}><button className={style.but} id={style.but1}>Get Quote Now</button></Link>
                    <Link href='/' style={{textDecoration:'none'}}><button className={style.but} id={style.but2}>Learn More</button></Link>
                </div>
            </div>
            <div id={style.right}> 
                <Image src={img}/>
            </div>
        </header>
     );
}

export default Header;