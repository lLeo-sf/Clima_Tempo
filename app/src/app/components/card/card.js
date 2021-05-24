import React from 'react';
import moment from 'moment/moment.js'


const styleAtual = {
    card: {
        width: '100%',
        height: '40vh',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        backgroundColor: '#6377ee',
        borderRadius: '12px',
        boxShadow: '0 16px 64px 0 #bebebe',
    },

    cidade: {
        color: 'white',
        fontSize: '2.3rem',
        letterSpacing: '0.2rem',
        fontWeight: 'bold',
    },

    data: {
        color: 'white',
        fontSize: '1rem',
        letterSpacing: '0.2rem',
        fontWeight: 'lighter',
        margin: '2%',
    },

    temp: {
        color: 'white',
        fontSize: '3.8rem',
        letterSpacing: '0.2rem',
        fontWeight: 'bold',
    },

    dot: {
        fontSize: '3rem',
        verticalAlign: 'top',
        marginLeft: '5%',
        letterSpacing: '0.2rem',
        fontWeight: 'normal',
    },

    celsius: {
        fontSize: '2.4rem',
        letterSpacing: '0.2rem',
        fontWeight: 'normal',
    },

    divider: {
        width: '20%',
        border: '2px solid white',
        borderStyle: 'dashed',
        margin: '2%',
    },

    looks: {
        fontSize: '1.1rem',
        letterSpacing: '0.2rem',
        fontWeight: 'normal',
        color: 'white',
    },

    tempMinMax: {
        color: 'white',
        letterSpacing: '0.2rem',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        margin: '1%',
    }
}

const styleHistorico = {
    card: {

        width: '80%',
        height: '30vh',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        backgroundColor: '#6377ee',
        borderRadius: '12px',
        boxShadow: '0 16px 64px 0 #bebebe',

        margin: '2%'

    },

    cidade: {
        color: 'white',
        fontSize: '1.5rem',
        letterSpacing: '0.2rem',
        fontWeight: 'bold',
    },

    data: {
        color: 'white',
        fontSize: '0.8rem',
        letterSpacing: '0.2rem',
        fontWeight: 'lighter',
        margin: '2%',
    },


    temp: {
        color: 'white',
        fontSize: '2rem',
        letterSpacing: '0.2rem',
        fontWeight: 'bold',
    },

    dot: {
        fontSize: '1.5rem',
        verticalAlign: 'top',
        marginLeft: '5%',
        letterSpacing: '0.2rem',
        fontWeight: 'normal',
    },

    celsius: {
        fontSize: '1.8rem',
        letterSpacing: '0.2rem',
        fontWeight: 'normal',
    },

    divider: {
        width: '20%',
        border: '1px solid white',
        borderStyle: 'dashed',
        margin: '2%',
    },

    looks: {
        fontSize: '0.8rem',
        letterSpacing: '0.2rem',
        fontWeight: 'normal',
        color: 'white',
    },

    tempMinMax: {
        color: 'white',
        letterSpacing: '0.2rem',
        fontWeight: 'bold',
        fontSize: '1rem',
        margin: '1%',
    }
}

const card = (props) => {

    let data = new Date();
    const styles = props.tipo === 'busca' ? styleAtual : styleHistorico;

    return (
        <section style={styles.card}>
            <span style={styles.cidade}>{props.cidade}</span>
            {props.tipo === 'busca'
                ? <span style={styles.data}>{moment(data).format('LLLL')}</span>
                : <span style={styles.data}>{props.data}</span>
            }
            <span style={styles.temp}>
                {props.temp?.toFixed(0)}
                <span style={styles.dot}>°</span>
                <span style={styles.celsius}>C</span>
            </span>
            <div style={styles.divider}></div>
            {props.humidity !== null
                ? <span style={styles.looks}>Umidade: {props.humidity}% | {props.looks}</span>
                : <span style={styles.looks}>{props.looks}</span>
            }
            <span style={styles.tempMinMax}>{props.tempMin} °C / {props.tempMax} °C</span>
        </section>
    );
}

export default card;