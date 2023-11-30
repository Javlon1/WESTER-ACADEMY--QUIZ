import { useState } from 'react';
import './Intro.scss'
import xImg from "../../Assets/Img/x.png"
import { Link, useNavigate } from 'react-router-dom';

export default function Intro() {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        phoneNumber: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
        if (!nameRegex.test(formData.name)) {
            newErrors.name = 'ismingizni yozing';
            isValid = false;
        }

        const ageValue = parseInt(formData.age, 10);
        if (isNaN(ageValue) || ageValue < 8 || ageValue > 28) {
            newErrors.age = 'yoshingizni togri kiriting yoki yoshingiz togri kelmedi';
            isValid = false;
        }

        const phoneNumberRegex = /^\d+$/;
        if (!phoneNumberRegex.test(formData.phoneNumber) || formData.phoneNumber.length !== 9) {
            newErrors.phoneNumber = 'telefoningini shu tarzda kiriting 905251243';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            navigate("/quiz")
            console.log('Form submitted:', formData);
        } else {

            console.log('Form validation failed');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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
                <form onSubmit={handleSubmit} className="pop-up__form">
                    <div className="pop-up__form__top">
                        <h3>IT ga birinchi qadam
                            shu yerdan boshlanadi!</h3>
                        <p onClick={() => { setModal(false) }}>
                            <img src={xImg} alt="" />
                        </p>
                    </div>
                    <p className="pop-up__form__subtitle">Test natijalari bo’yicha yordam berishimiz uchun bizga
                        ma’lumotlaringizni qoldiring.</p>
                    <div>
                        <input
                            className='pop-up__form__inp'
                            placeholder='Ismingiz'
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p>{errors.name}</p>}
                    </div>

                    <div>
                        <input
                            className='pop-up__form__inp'
                            placeholder='Yoshingiz'
                            type="text"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                        />
                        {errors.age && <p>{errors.age}</p>}
                    </div>

                    <div>
                        <input
                            className='pop-up__form__inp'
                            placeholder='Telefon'
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                    </div>

                    <button className='pop-up__form__btn' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}