
import Image from 'next/image';
import MainPage from '../../style/page/main.module.scss';
import ImgPhilosofo from '../../images/rene-descartes.jpg';
import ImgPrint from '../../images/cam black icon.png';

export default function MainPhrase() {
    return (
        <>
            <div className={MainPage.main}>
                <div className={MainPage.boxImage}>
                    <Image className={MainPage.ImgPhilosopher} src={ImgPhilosofo} alt='Imagem' />
                </div>
                <div className={MainPage.boxPhrase}>
                    <div className={MainPage.boxTextAndAuthor}>
                        <div className={MainPage.textPhrase}>
                            "Não basta conquistar a sabedoria, é preciso usa-lá."
                        </div>
                        <div className={MainPage.authorPhrase}>
                            Rene Descartes
                        </div>
                    </div>
                    <div className={MainPage.boxPrint}>
                        <button className={MainPage.print}>
                            <Image className={MainPage.imgPrint} src={ImgPrint} alt='Imagem' />
                        </button>
                    </div>
                </div>
            </div>

            <div className={MainPage.boxButtonNextPhrase}>
                <button className={MainPage.buttonNextPhrase}>próximo</button>
            </div>

        </>
    )
}