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
      this.leftClick = this.leftClick.bind(this);
      this.rightClick = this.rightClick.bind(this);
      this.yearView = this.yearView.bind(this);
    }
    leftClick(){
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
    }
    rightClick(){
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
    }
    yearView(){
      return(
        <div className='yearView'>
        <p className='yearNumber'>2022</p>
        <table className='table'>
          <tbody>
            <tr>
              <td className='tableCellWinter' onClick={()=>{this.setState({selectedMonth:0});}}>Styczeń</td>
              <td className='tableCellWinter' onClick={()=>{this.setState({selectedMonth:1});}}>Luty</td>
              <td className='tableCellSpring' onClick={()=>{this.setState({selectedMonth:2});}}>Marzec</td>
              <td className='tableCellSpring' onClick={()=>{this.setState({selectedMonth:3});}}>Kwiecień</td>
            </tr>
            <tr>
              <td className='tableCellSpring' onClick={()=>{this.setState({selectedMonth:4});}}>Maj</td>
              <td className='tableCellSummer' onClick={()=>{this.setState({selectedMonth:5});}}>Czerwiec</td>
              <td className='tableCellSummer' onClick={()=>{this.setState({selectedMonth:6});}}>Lipiec</td>
              <td className='tableCellSummer' onClick={()=>{this.setState({selectedMonth:7});}}>Sierpień</td>
            </tr>
            <tr>
              <td className='tableCellAutumn' onClick={()=>{this.setState({selectedMonth:8});}}>Wrzesień</td>
              <td className='tableCellAutumn' onClick={()=>{this.setState({selectedMonth:9});}}>Październik</td>
              <td className='tableCellAutumn' onClick={()=>{this.setState({selectedMonth:10});}}>Listopad</td>
              <td className='tableCellWinter' onClick={()=>{this.setState({selectedMonth:11});}}>Grudzień</td>
            </tr>
          </tbody>
        </table>
        </div>
      )
    }
    render()
    {
      let list = this.state.months;
      let nameDisplay;
      for(let i = 0;i<this.state.selectedMonth+1;i++)
      {
        nameDisplay = list[i].monthName;
      }
      return(
        <>
        <this.yearView></this.yearView>
        <div className='mainBoard'>
        <div className='monthName'>
          <input type='image' src={strzalkaL} onClick={this.leftClick}
          className='leftButton'></input>
          <p className='textMonth'>{nameDisplay}</p>
          <input type='image' src={strzalkaP} onClick={this.rightClick} className='rightButton'></input>
        </div>
        </div>
        </>
      )
    }
    
}




ReactDOM.render(
  <>
    <MainBoard></MainBoard>
  </>,
  document.getElementById('root')
);
