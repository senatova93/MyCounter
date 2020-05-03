import React from 'react';
import style from './App.module.css';
import s from './Button.module.css'
import Counter2 from "./Counter2";

class App extends React.Component {
  state = {
      add:[],
      num: 0,

      classToggleInc: false,
      classToggleReset: true,
      changeButtonStyleInc: true,
      changeButtonStyleReset: false,
  }



    onIncClick = () => {
      let num = this.state.num
        num < 5 && num++
        this.setState({num:num})
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
        this.setState({num:0,
             classToggleInc: false,
             classToggleReset: true,
            changeButtonStyleInc: true,
            changeButtonStyleReset: false})


    };
    render = () => {
        let Inc =  this.state.changeButtonStyleInc ? "filter-active" : "";
        let Res = this.state.changeButtonStyleReset  ? "filter-active" : "";

        // let Inc = this.state.filterValue === "Inc" ? "filter-active" : "";
        // let Res = this.state.filterValue === "Res" ? "filter-active" : "";

        return (
            <div className={style.counterTask}>
                <div className={style.counter}>
                    <div className={style.all}>
                <div className={this.state.num==5?style.red:style.tablo}><span>{this.state.num} </span></div>
                <div className={style.buttons}>
                    <div className={style.incriment}>
                <button
                    disabled={this.state.classToggleInc}
                    onClick = {this.onIncClick}
                    className={s.Inc +' '+ s[Inc]}>inc</button>
                    </div>
                    <div className= {style.reset}>
                <button  disabled={this.state.classToggleReset}
                    onClick={this.onResetClick}
                    className={s.Res + ' ' + s[Res]}>reset</button>
                    </div>
                </div>
                </div>
            </div>
                <Counter2/>
            </div>
        );
    }}


export default App;
