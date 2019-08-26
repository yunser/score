import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import classes from './Home.module.scss'

export default function Home() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    function add() {
        setCount(count + 1)
    }
    function minus() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    function add2() {
        setCount2(count2 + 1)
    }
    function minus2() {
        if (count2 > 0) {
            setCount2(count2 - 1)
        }
    }

    function reset() {
        setCount(0)
        setCount2(0)
    }

    return (
        <div className={classes.container}>
            <div class="common-container container">
                <div className={classes.all}>
                    <section className="input-box">
                        <div className={classes.digital}>
                            <div className={classes.digitalBg}>88</div>
                            <div className={classes.digitalContent}>{ count }</div>
                        </div>
                        <div className={classes.btns}>
                            <Button className={classes.btn} variant="contained" color="primary" onClick={add}>+</Button>
                            <Button className={classes.btn} variant="contained" onClick={minus}>-</Button>
                        </div>
                    </section>
                    <div class={classes.ratio}>:</div>
                    <section class="input-box">
                        <div className={classes.digital}>
                            <div className={classes.digitalBg}>88</div>
                            <div class={classes.digitalContent}>{ count2 }</div>
                        </div>
                        <div className={classes.btns}>
                            <Button className={classes.btn} variant="contained" color="primary" onClick={add2}>+</Button>
                            <Button className={classes.btn} variant="contained" onClick={minus2}>-</Button>
                            {/* <ui-raised-button class="btn" label=" + " primary @click="add2"/> */}
                            {/* <ui-raised-button class="btn" label=" - " @click="minus2"/> */}
                        </div>
                    </section>
                    <div class="common-btns">
                        {/* <ui-raised-button label="重置" @click="reset"/> */}
                    </div>
                </div>
            </div>
            <Button className={classes.btn} variant="contained" onClick={reset}>重置</Button>

            
            
        </div>
    )
}
