import React from 'react';
import style from './App.module.css';
import s from './Button.module.css'

class Counter2 extends React.Component {
    state = {
        add: [],
        num: 0,

        classToggleInc: false,
        classToggleReset: true,
        changeButtonStyleInc: true,
        changeButtonStyleReset: false,
    }


    onIncClick = () => {
        let num = this.state.num
        num < 5 && num++
        this.setState({num: num})
        if (this.state.num > -1) {
            this.setState({
                classToggleReset: false,
                changeButtonStyleReset: true,
            })
        }

        if (this.state.num === 4) {
            this.setState({
                classToggleInc: true,
                changeButtonStyleInc: false,
            });
        }
    };


    onResetClick = () => {
        this.setState({
            num: 0,
            classToggleInc: false,
            classToggleReset: true,
            changeButtonStyleInc: true,
            changeButtonStyleReset: false
        })


    };
    render = () => {
        let Inc = this.state.changeButtonStyleInc ? "filter-active" : "";
        let Res = this.state.changeButtonStyleReset ? "filter-active" : "";

        // let Inc = this.state.filterValue === "Inc" ? "filter-active" : "";
        // let Res = this.state.filterValue === "Res" ? "filter-active" : "";

        return (
            <div className={style.counterTask2}>
                <div className={style.counter2}>
                    <div className={style.all2}>
                        <span className={style.value}> max value:  <input value={100}/> </span>
                        <span className={style.value}> start value: <input value={100}/> </span>
                        <div className={style.buttons2}>
                            <div className={style.incriment}>
                                <button
                                    disabled={this.state.classToggleInc}
                                    onClick={this.onIncClick}
                                    className={s.Inc + ' ' + s[Inc]}>inc
                                </button>
                            </div>
                            <div className={style.reset}>
                                <button disabled={this.state.classToggleReset}
                                        onClick={this.onResetClick}
                                        className={s.Res + ' ' + s[Res]}>reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Counter2;
