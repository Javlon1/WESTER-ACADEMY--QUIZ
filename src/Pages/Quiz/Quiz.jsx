import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { myQuizData } from '../../Data/Data'
import './Quiz.scss'
import Test from './Test/Test'
import { useEffect } from 'react'
import { Context } from '../../Context/Context'
import xImg from "../../Assets/Img/x.png"


export default function Quiz() {
    const { url, setResult } = React.useContext(Context)
    const [quizData, setQuizData] = useState(myQuizData)
    const [number, setNumber] = useState(0)
    const [show, setShow] = useState(true)
    const [loader, setLoader] = useState(true)
    const [anws, setAnws] = useState(0)
    const [seconds, setSeconds] = useState(600);
    const [modal, setModal] = useState(false)


    React.useEffect(() => {
        const getCounteries = async () => {
            await fetch(`${url}/f0aebd04a8e6d9970573a520f084a8c3dfa7b93aa89818abe631be0839cc1b67`)
                .then(resp => {
                    if (!resp.ok) throw new Error(`oшибка: ${resp.status}`)
                    return resp.json()
                })
                .then(data => setQuizData(data))
                .catch(error => console.error(error.message))
                setLoader(false)
        }
        getCounteries()
    }, [url])


    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        if (seconds === 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [seconds]);


    const heandlerAnswer = (id) => {
        setAnws(id);
    }


    const postHandler = () => {

        fetch(`${url}/e8270ebb4d78d5528192fc8ef01228f3e2301bfd946d3703f95d7fad86f1172d`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*' 
            },
            body: JSON.stringify({
                quiz_id: quizData[number].id,
                answer_id: anws,
            })
        })
    }


    const heandlerIcrement = () => {
        if (number === quizData.length - 1) {
            setNumber(number)
            setModal(true)
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
            <div className={modal ? "q-close activeModal" : "q-close"} onClick={() => { setModal(false) }}></div>
            <div className={modal ? "q activeModal" : "q"}>
                <div className="q__form">
                    <div className="q__form__top">
                        <h3>Bu songi savol ! Natijangizni bilish uchun natija tugmasini bosing</h3>
                        <p onClick={() => { setModal(false) }}>
                            <img src={xImg} alt="" />
                        </p>
                    </div>
                </div>
            </div>

                <Test questions={quizData[number]} heandlerAnswer={heandlerAnswer} number={number} testCount={quizData.length} loader={loader} />

                <div className="container__pagination">
                    <button onClick={heandlerDecrement} className={number === 0 ? "container__pagination__btn1 deseable" : "container__pagination__btn1"}>
                        Oldingisi
                    </button>
                    {
                        seconds === 0 ? (
                            <Link to="/result">
                                <button onClick={()=>{setResult(true)}} className='container__pagination__btn2'>Natija</button>
                            </Link>
                        ) : (
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
                                        <button onClick={()=>{setResult(true)}} className='container__pagination__btn2'>Natija</button>
                                    </Link>
                                )
                            ))
                    }
                </div>
            </div>
        </div >
    )
}
