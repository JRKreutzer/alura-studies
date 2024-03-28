import style from "./Watch.module.scss"

interface Props {
    tempo: number | undefined;
}

export default function Watch({tempo = 0}: Props) {

    const minutos = Math.floor(tempo / 60);
    const segundo = tempo % 60;

    const [minutosDezena, minutoUnidade] = String(minutos).padStart(2, "0");
    const [segundoDezena, segundoUnidade] = String(segundo).padStart(2, "0");

    return (
        <>
            <span className={style.relogioNumero}>{minutosDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}