
import MainPage from '../../style/page/main.module.scss';

const BoxNextPhrase: React.FC = () => {
    return (
        <>
            <div className={MainPage.boxButtonNextPhrase}>
                <button className={MainPage.buttonNextPhrase}>próximo</button>
            </div>
        </>
    )
}

export default BoxNextPhrase;