import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {months} from './MonthList.js'
import strzalkaP from './strzlkaP.png'
import strzalkaL from './strzlkaL.png'


class MainBoard extends React.Component{
    constructor(props){
      super(props);
      this.state = {months : months, selectedMonth : 0};
    }
    render()
    {
      let list = this.state.months;
      let nameDisplay;
      for(let i = 0;i<this.state.selectedMonth+1;i++)
      {
        nameDisplay = list[i].monthName;
      }
      console.log(nameDisplay);
      return(
        <div className='mainBoard'>
        <div className='monthName'>
          <input type='image' src={strzalkaL} onClick={()=>{
            let month = this.state.selectedMonth;
            if(month==0)
            {
              month = 11;
            }
            else
            {
              month--;
            }
            this.setState({selectedMonth: month})
          }}
          className='leftButton'></input>
          <p className='textMonth'>{nameDisplay}</p>
          <input type='image' src={strzalkaP} onClick={()=>{
            let month = this.state.selectedMonth;
            if(month==11)
            {
              month = 0;
            }
            else
            {
              month++;
            }
            this.setState({selectedMonth: month})
          }} className='rightButton'></input>
        </div>
        </div>
      )
    }
    
}




ReactDOM.render(
  <>
    <MainBoard></MainBoard>
  </>,
  document.getElementById('root')
);

