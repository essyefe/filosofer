import Image from 'next/image';
import styleNavbar from '../../style/home/navbar.module.scss';
import FilosoferLogo from '../../images/filsofer-logoz.png';

export default function navbar() {
    return (
        <>
        <nav className={styleNavbar.navbar}>
            <Image className={styleNavbar.img} src={FilosoferLogo} alt='Imagem'/>
        </nav>
        </>
    )
}