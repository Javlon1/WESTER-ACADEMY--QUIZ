import { useState } from 'react';
import './Intro.scss'
import xImg from "../../Assets/Img/x.png"

export default function Intro() {
    const [modal, setModal] = useState(false)


    return (
        <div className='intro'>
            <div className="container">
                <div className="container__list">
                    <div className="container__list__item">
                        <h3 className='container__list__item__title'>IT sohasida o’zingiz uchun qaysi kasb mos kelishini bilib oling</h3>
                        <button onClick={() => { setModal(true) }} className='container__list__item__btn'>Bilib olish</button>
                    </div>
                </div>
            </div>
            <div className={modal ? "pop-up-close activeModal" : "pop-up-close"} onClick={() => { setModal(false) }}></div>
            <div className={modal ? "pop-up activeModal" : "pop-up"}>
                <form className="pop-up__form" action="/quiz">
                    <div className="pop-up__form__top">
                        <h3>IT ga birinchi qadam
                            shu yerdan boshlanadi!</h3>
                        <p onClick={() => { setModal(false) }}>
                            <img src={xImg} alt="" />
                        </p>
                    </div>
                    <p className="pop-up__form__subtitle">Test natijalari bo’yicha yordam berishimiz uchun bizga
                        ma’lumotlaringizni qoldiring.</p>
                    <input className="pop-up__form__inp" type="text" placeholder="Ismingiz" required />
                    <input className="pop-up__form__inp" type="number" placeholder="Yoshingiz" required />
                    <input className="pop-up__form__inp" type="number" placeholder="Telefon" required />
                    <button className="pop-up__form__btn" type="submit">Yuborish</button>
                </form>
            </div>
        </div>
    )
}
