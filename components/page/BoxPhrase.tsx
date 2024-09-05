
import MainPage from '../../style/page/main.module.scss';
import ImgPrint from '../../images/cam black icon.png';
import Image from 'next/image';
import { useEffect } from 'react';

const url = 'https://essyefe.github.io/filosofer-api/phrases.json';

const BoxPhrase: React.FC = () => {

    return (
        <>
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
        </>
    )
}

export default BoxPhrase;