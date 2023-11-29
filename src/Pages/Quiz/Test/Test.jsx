import * as React from 'react'
import { useState } from 'react'
import '../Quiz.scss'


export default function Test({ question, heandlerAnswer }) {

    const { id, questions, answers } = question

    const [selected, setSelected] = useState(null)

    return (
        <div className="container__quest">
            <div className="container__quest__top">
                <div className="container__quest__top__cuantity">
                    <p></p>
                    <div># <b>{id}</b> / <span>15</span>
                    </div>
                </div>
                <span className="container__quest__top__time">
                    14:52
                </span>
                <h2 className="container__quest__top__title">{questions}</h2>
            </div>
            <ul className="container__quest__list">
                {
                    answers?.map((j) => (
                        <li key={j.id}
                            className={selected === j.id ? "container__quest__list__item selected" : "container__quest__list__item"}
                            onClick={() => {
                                setSelected(j.id)
                                heandlerAnswer(j.id)
                            }}
                        >
                            <b>{j.answer}</b>
                            <p>
                                <i className="bi bi-plus-lg"></i>
                                <i className="bi bi-x-lg"></i>
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
