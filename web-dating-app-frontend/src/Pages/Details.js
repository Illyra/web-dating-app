import React from 'react'
import HomeAction from '../Actions/HomeAction'
import '../css/Details.css'
import { useState } from 'react'

const Details = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [formData, setFormData] = useState({
        user_id : cookies.UserId,
        first_name: '',
        birth_day: '',
        birth_month: '',
        birth_year: '',
        Reveal_Gender: false,
        Gender: 'Male',
        Gender_Interest: 'Female',
        url: '',
        About: '',
        matches: []

    })

    const handleSubmit = () => {
        console.log('submit');
    }

    const handleChange = (event) => {
        console.log('Change', event)
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            <HomeAction
                minimal={true}
                setAuthAction={() => { }}
                authAct={false}
            />
            <div className='Detail_Page'>
                <h2> CREATE ACCOUNT </h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor='first_name'>First Name</label>
                        <input
                            id='first_name'
                            type='text'
                            name='first_name'
                            placeholder='First Name'
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                    </section>

                    <section>
                        <label>Birthday</label>
                        <div className='Birthday_Inputs'>
                            <input
                                id='birth_day'
                                type='number'
                                name='birth_day'
                                placeholder='DD'
                                required={true}
                                value={formData.birth_day}
                                onChange={handleChange}
                            />

                            <input
                                id ='birth_month'
                                type='number'
                                name='birth_month'
                                placeholder='MM'
                                required={true}
                                value={formData.birth_month}
                                onChange={handleChange}
                            />

                            <input
                                id='birth_year'
                                type='number'
                                name='birth_year'
                                placeholder='YYYY'
                                required={true}
                                value={formData.birth_year}
                                onChange={handleChange}
                            />
                        </div>

                        <label>Gender</label>
                        <div className='Input_Gender'>
                            <input
                                id='Male_Gender'
                                type='radio'
                                name='Gender'
                                value='Male'
                                onChange={handleChange}
                                checked={formData.Gender === 'Male'}
                            />
                            <label htmlFor='Male_Gender'>Male</label>
                            <input
                                id='Female_Gender'
                                type='radio'
                                name='Gender'
                                value='Female'
                                onChange={handleChange}
                                checked={formData.Gender === 'Female'}
                            />
                            <label htmlFor='Female_Gender'>Female</label>
                            <input
                                id='Other_Gender'
                                type='radio'
                                name='Gender'
                                value='Other'
                                onChange={handleChange}
                                checked={formData.Gender === 'Other'}
                            />
                            <label htmlFor='Other_Gender'>Other</label>
                        </div>


                        <label htmlFor='Reveal_Gender'>Show Gender on my Profile</label>


                        <input
                            id='Reveal_Gender'
                            type='checkbox'
                            name='Reveal'
                            onChange={handleChange}
                            checked={formData.Reveal}
                        />


                        <label>Interested In</label>
                        <div className='Input_Containers'>
                            <input
                                id='Male_Gender_Interest'
                                type='radio'
                                name='Gender_Interest'
                                value="Male"
                                onChange={handleChange}
                                checked={formData.Gender_Interest === 'Male'}
                            />
                            <label htmlFor='Male_Gender_Interest'>Male</label>
                            <input
                                id='Female_Gender_Interest'
                                type='radio'
                                name='Gender_Interest'
                                value="Female"
                                onChange={handleChange}
                                checked={formData.Gender_Interest === 'Female'}
                            />
                            <label htmlFor='Female_Gender_Interest'>Female</label>
                            <input
                                id='Other_Gender_Interest'
                                type='radio'
                                name='Gender_Interest'
                                value='Other'
                                onChange={handleChange}
                                checked={formData.Gender_Interest === 'Other'}
                            />
                            <label htmlFor='Other_Gender_Interest'>Other</label>
                        </div>


                        <label htmlFor='About'>About Me</label>

                        <input
                            id='About'
                            type='text'
                            name='About'
                            required={true}
                            placeholder='I fly and soar soar to fly something yes...'
                            value={formData.About}
                            onChange={handleChange}
                        />
                        <input type='Submit' />
                    </section>

                    <section>
                        <label htmlFor='About'>Profile Picture</label>
                        <input
                            type='url'
                            name='url'
                            id='url'
                            onChange={handleChange}
                            required={true}
                        />
                        <div className='Photo_Icon'>
                            {formData.url && <img src={formData.url} alt = 'Profile pic Preview'/>}
                        </div>

                    </section>
                </form>
            </div>
        </>
    )
}

export default Details