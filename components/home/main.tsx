
import Link from 'next/link';
import Main from '../../style/home/main.module.scss';

export default function main() {
    return (
        <>
        <main className={Main.main}>
            <h1 className={Main.title}>Filosofer</h1>
            <h2 className={Main.subtitle}>Não basta conquistar a sabedoria, é preciso usa-lá.</h2>
        </main>
            <div className={Main.boxLink}>
                <Link className={Main.linkInit} href='/'>iniciar</Link>
            </div>
        </>
    )
}