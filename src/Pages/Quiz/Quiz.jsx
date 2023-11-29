import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { myQuizData } from '../../Data/Data'
import './Quiz.scss'
import Test from './Test/Test'


export default function Quiz({ answer, setAnswer }) {
    const [quizData, setQuizData] = useState(myQuizData)
    const [number, setNumber] = useState(0)
    const [show, setShow] = useState(true)
    const [anws, setAnws] = useState(0)

    const heandlerAnswer = (id) => {
        setAnws(id);
    }

    const postHandler = () => {
        console.log(quizData[number].id);
        console.log(anws);
    }

    const heandlerIcrement = () => {
        if (number === quizData.length - 1) {
            alert("bu oxirgi test")
            setNumber(number)
            setShow(false)
        } else {
            setNumber(number + 1)
            setAnws(0)
        }
    }
    const heandlerDecrement = () => {
        if (number === 0) {
            setNumber(number)
        } else {
            setNumber(number - 1)
            setShow(true)
            setAnws(0)
        }
    }

    return (

        <div className="quiz">
            <div className="container">

                <Test question={quizData[number]} heandlerAnswer={heandlerAnswer} testCount={quizData.length} />

                <div className="container__pagination">
                    <button onClick={heandlerDecrement} className={number === 0 ? "container__pagination__btn1 deseable" : "container__pagination__btn1"}>
                        Oldingisi
                    </button>
                    {
                        anws === 0 ? (
                            <button className="container__pagination__btn2 deseable" disabled>
                                Keyingisi
                            </button>
                        ) : (
                            show ? (
                                <button className={anws === 0 ? "container__pagination__btn2 deseable" : "container__pagination__btn2"}
                                    onClick={() => {
                                        heandlerIcrement()
                                        postHandler()
                                    }}>
                                    Keyingisi
                                </button>

                            ) : (
                                <Link to="/result">
                                    <button className='container__pagination__btn2'>natija</button>
                                </Link>
                            )
                        )
                    }
                </div>
            </div>
        </div >
    )
}
