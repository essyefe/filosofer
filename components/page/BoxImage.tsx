
import ImgPhilosofo from '../../images/rene-descartes.jpg';
import MainPage from '../../style/page/main.module.scss';
import Image from 'next/image';

const BoxImage: React.FC = () => {
    return (
        <>
            <div className={MainPage.boxImage}>
                <Image className={MainPage.ImgPhilosopher} src={ImgPhilosofo} alt='Imagem' />
            </div>
        </>
    )
}

export default BoxImage;