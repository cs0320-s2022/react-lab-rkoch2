import TextBox from './TextBox';
import React, { useState } from 'react';
//@ts-ignore
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import axios from 'axios';

function Horoscope() {
    const [sun, setSun] = useState('');
    const [moon, setMoon] = useState('');
    const [rising, setRising] = useState('');
    const [result, setResult] = useState([""]);
    return (
        <div className="Horoscope">
            <header className="Horoscope-header">
                <h1>Horoscope</h1>
            </header>
            <TextBox label={"Sun Sign"} change={setSun} />
            <TextBox label={"Moon Sign"} change={setMoon} />
            <TextBox label={"Rising Sign"} change={setRising} />
            <AwesomeButton type="primary" onPress={() => {
                requestHoroscope();
            }}>
                Submit
            </AwesomeButton>

            <div className="Horoscope-result">
                {result.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </div>

        </div>
    );

    function requestHoroscope() {
        const response = axios.post('http://localhost:4567/horoscope', {
            sun: sun,
            moon: moon,
            rising: rising
        });
        response.then(res => {
            setResult(res.data.horoscope);
        });
    }

} 

export default Horoscope;
