import React, { useEffect, useState } from 'react';
import './atual.css';
import Card from '../card/card';
import Weather from '../../api/apiWeather';
import Api from './../../api/api'
import moment from 'moment/moment.js'



const Atual = (props) => {

    const [cidade, setCidade] = useState('');
    const [clima, setClima] = useState(null);


    let dataAtual = new Date();

    const submit = async (event) => {
        if (event.key === 'Enter') {
            let data = await Weather.getClimaByCidade(cidade);
            setClima(data.data);
            await Api.add(
                data.data.name + ' / ' + data.data.sys.country,
                moment(dataAtual).format('LLLL'),
                data.data.main.temp.toFixed(0),
                data.data.main.temp_min.toFixed(0),
                data.data.main.temp_max.toFixed(0),
                data.data.weather[0].main
            )
            window.localStorage.setItem('atual', JSON.stringify(data.data))
        }
    }


    useEffect(() => {
        setClima(JSON.parse(window.localStorage.getItem('atual')))
    }, [])

    return (
        <section className={'atual'}>

            <input name='search' placeholder='Informe uma cidade' onKeyDown={submit} onChange={(event) => setCidade(event.target.value)} />

            <Card
                tipo='busca'
                cidade={clima?.name}
                temp={clima?.main?.temp}
                humidity={clima?.main?.humidity}
                looks={clima?.weather[0].main}
                tempMin={clima?.main?.temp_min}
                tempMax={clima?.main?.temp_max}
            />

        </section>
    );
}

export default Atual;