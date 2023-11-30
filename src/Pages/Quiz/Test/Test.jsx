import * as React from 'react'
import { useState } from 'react'
import '../Quiz.scss'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function Test({ question, heandlerAnswer, testCount }) {
    const { id, questions, answers } = question

    const [selected, setSelected] = useState(null)
    // 
    const [seconds, setSeconds] = useState(600);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        if (seconds === 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [seconds]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="container__quest">
            <div className="container__quest__top">
                <div className="container__quest__top__cuantity">
                    <p></p>
                    <div># <b>{id}</b> / <span>{testCount}</span>
                    </div>
                </div>
                <span className="container__quest__top__time">
                    {formatTime(seconds)}
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
