
//import Image from 'next/image';
import MainPage from '../../style/page/main.module.scss';
//import ImgPhilosofo from '../../images/rene-descartes.jpg';
//import ImgPrint from '../../images/cam black icon.png';
import BoxImage from './BoxImage';
import BoxPhrase from './BoxPhrase';
import BoxNextPhrase from './BoxNextPhrase';

export default function MainPhrase() {
    return (
        <>
            <div className={MainPage.main}>
                <BoxImage/>
                <BoxPhrase />
            </div>

            <BoxNextPhrase />
        </>
    )
}