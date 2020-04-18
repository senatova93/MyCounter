import React from 'react';
import logo from './logo.svg';
import style from './App.module.css';
import s from './Button.module.css'

class App extends React.Component {
  state = {
      add:[],
      num: 0,
      filterValue: "Res"
  }




    onIncClick = () => {
      let num = this.state.num
        num < 5 && num++
        this.setState({num:num})
    };
    onResetClick = () => {
        this.setState({num:0})
    };
    render = () => {
        debugger
        let Inc = this.state.filterValue === "Inc" ? "filter-active" : "";
        let Res = this.state.filterValue === "Res" ? "filter-active" : "";

        return (
            <div className={style.counterTask}>
                <div className={style.counter}>
                    <div className={style.all}>
                <div className={this.state.num==5?style.red:style.tablo}><span>{this.state.num} </span></div>
                <div className={style.buttons}>
                    <div className={style.incriment}>
                <button onClick = {this.onIncClick} className={s.Inc +' '+ s[Inc]}>inc</button>
                    </div>
                    <div className= {style.reset}>
                <button onClick={this.onResetClick} className={s.Res + ' ' + s[Res]}>reset</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
    }}


export default App;
