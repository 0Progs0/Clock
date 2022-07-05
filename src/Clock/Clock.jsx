import {useState, useEffect} from 'react';
import styles from './Clock.module.css'

function Clock() {
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const [date, setDate] = useState(new Date());

    const refreshClock = (() => {
        setDate(new Date())
    })

    useEffect(() => {
        const timer = setInterval(refreshClock, 1000);

        return function cleanup() {
            clearInterval(timer);
        };

    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.border}>
            <div className={styles.clock}>
                <div className={styles.number}>  {date.getHours().toLocaleString()}</div>
                <div className={styles.number}>:</div>
                <div className={styles.number}> {date.getMinutes().toLocaleString()}</div>
                <div className={styles.number}>:</div>
                <div className={styles.number}>{date.getSeconds().toLocaleString()}</div>
            </div>
            <div className={styles.number}>{date.getDate()} {months[date.getMonth()]}  </div>
        </div>
        </div>
    );
}

export default Clock;