import * as React from 'react'
import './Result.scss'
import kurs1 from "../../Assets/Img/kurs1.png"
import kurs2 from "../../Assets/Img/kurs2.png"
import kurs3 from "../../Assets/Img/kurs3.png"
import kurs4 from "../../Assets/Img/kurs4.png"

export default function Result() {
    return (

        <div className="result">
            <div className="container">
                <div className="container__top">
                    <h3 className="container__top__title">Natija</h3>
                    <p className="container__top__text">
                        Ushbu natijalarni barchasi belgilangan javoblarga tayanilgan holatda hosil qilindi.
                        Aniq sizga qaysi kasb mos kelishini bilish uchun esa biz bilan bog’laning,mutaxasislarimiz
                        sizga batafsil maslahat berishadi.
                    </p>
                </div>
                <div className="container__answer">
                    <div className="container__answer__left">
                        <ul className="container__answer__left__list">
                            <li className="container__answer__left__list__item">
                                <span>
                                    <h4>Front-End</h4>
                                    <p>
                                        Kreativlik , intizom, yaxshi
                                        fikrlash qobilyati
                                    </p>
                                </span>
                                <b>85%</b>
                            </li>
                            <li className="container__answer__left__list__item">
                                <span>
                                    <h4>Front-End</h4>
                                    <p>
                                        Kreativlik , intizom, yaxshi
                                        fikrlash qobilyati
                                    </p>
                                </span>
                                <b>85%</b>
                            </li>
                            <li className="container__answer__left__list__item">
                                <span>
                                    <h4>Front-End</h4>
                                    <p>
                                        Kreativlik , intizom, yaxshi
                                        fikrlash qobilyati
                                    </p>
                                </span>
                                <b>85%</b>
                            </li>
                            <li className="container__answer__left__list__item">
                                <span>
                                    <h4>Front-End</h4>
                                    <p>
                                        Kreativlik , intizom, yaxshi
                                        fikrlash qobilyati
                                    </p>
                                </span>
                                <b>85%</b>
                            </li>
                            <li className="container__answer__left__list__item">
                                <span>
                                    <h4>Front-End</h4>
                                    <p>
                                        Kreativlik , intizom, yaxshi
                                        fikrlash qobilyati
                                    </p>
                                </span>
                                <b>85%</b>
                            </li>
                        </ul>
                    </div>
                    <div className="container__answer__right">
                        <ul className="container__answer__right__list">
                            <li>
                                <h3>Kurslar haqida slayd bilan tanishing</h3>
                                <p>Slayd orqali siz IT sohasi va bizda mavjud bo’lgan TOP kasblar haqida bilib
                                    olishingiz mumkin bo’ladi.</p>
                                <a href="#"><i className="bi bi-plus-lg"></i></a>
                            </li>
                            <li>
                                <h3>O’zingizni qulay usulda o’qing</h3>
                                <b>Standart</b>
                                <b>BootCamp</b>
                                <a href="#"><i className="bi bi-plus-lg"></i></a>
                            </li>
                            <li>
                                <h3>Kurslar dasturi bozor talabiga javob beradi</h3>
                                <span>
                                    <img src={kurs1} alt="" loading="lazy" />
                                    <img src={kurs2} alt="" loading="lazy" />
                                    <img src={kurs3} alt="" loading="lazy" />
                                    <img src={kurs4} alt="" loading="lazy" />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
