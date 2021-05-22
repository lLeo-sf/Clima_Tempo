import React, { useState, useEffect } from 'react';
import './historico.css';
import Card from '../card/card';
import Api from './../../api/api'

const Historico = (props) => {


    const [historico, setHistorico] = useState([]);
    const [top5, setTop5] = useState([]);

    const getHistory = async () => {
        let { data } = await Api.get();
        setHistorico(data);
    }

    const getTop5 = async () => {
        let { data } = await Api.getTop5();
        setTop5(data);
    }


    useEffect(() => {
        const init = async () => {
            await getHistory();
            await getTop5();
        }
        init();
    }, []);

    return (
        <section className={'historico'}>
            <div className={'top5'}>
                <span>Cidades Mais Pesquisadas </span>
                <div className="wrapper">
                    {
                        top5.map((item) => {
                            return (
                                <p>{item.cidade.substr(0, item.cidade.indexOf("/"))}</p>
                            );
                        })
                    }
                </div>
            </div>
            <div className='title'>Meu Histórico</div>
            <section className='scrollArea'>
                {historico?.length > 0 ?
                    (
                        historico.map((item) => {
                            return (
                                <Card
                                    cidade={item.cidade}
                                    data={item.data}
                                    temp={item.temp}
                                    looks={item.looks}
                                    tempMin={item.temp_min}
                                    tempMax={item.temp_max}
                                    humidity={null}
                                />
                            );
                        })
                    )
                    :
                    <></>
                }
            </section>
        </section>
    );
}

export default Historico;