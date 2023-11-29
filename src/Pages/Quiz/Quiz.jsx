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

    const heandlerAnswer = (id) => {
        console.log(quizData[number].id);
        console.log(id);
    }


    const heandlerIcrement = () => {
        if (number === 9) {
            alert("this is a last quest")
            setNumber(number)
            setShow(false)
        } else {
            setNumber(number + 1)
        }
    }
    const heandlerDecrement = () => {
        if (number === 0) {
            setNumber(number)
        } else {
            setNumber(number - 1)
            setShow(true)
        }
    }

    return (

        <div className="quiz">
            <div className="container">

                <Test question={quizData[number]} heandlerAnswer={heandlerAnswer} />

                <div className="container__pagination">
                    <button onClick={heandlerDecrement} className={number === 0 ? "container__pagination__btn1 deseable" : "container__pagination__btn1"}>
                        Oldingisi
                    </button>
                    {
                        show ? (
                            <button onClick={heandlerIcrement} className={number === 15 ? "container__pagination__btn2 deseable" : "container__pagination__btn2"}>
                                Keyingisi
                            </button>

                        ) : (
                            <Link to="/result">
                                <button className='container__pagination__btn2'>natija</button>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
