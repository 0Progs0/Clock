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
                <div className={styles.number}>  {("0" + ((date).getHours())).slice(-2)}</div>
                <div className={styles.number}>:</div>
                <div className={styles.number}> {("0" + ((date).getMinutes())).slice(-2)}</div>
                <div className={styles.number}>:</div>
                <div className={styles.number}>{("0" + ((date).getSeconds())).slice(-2)}</div>
            </div>
            <div className={styles.number}>{("0" + ((date).getMonth() + 1)).slice(-2)} {months[date.getMonth()]}  </div>
        </div>
        </div>
    );
}

export default Clock;