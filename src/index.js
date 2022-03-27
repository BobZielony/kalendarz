import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { months } from './MonthList.js'
import arrowR from './strzlkaP.png'
import arrowL from './strzlkaL.png'

class MainBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { months: months, selectedMonth: 0, selectedYear: 2022, daySave: [], hourSave: [], lastSelectedDay: "" };
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.yearView = this.yearView.bind(this);
    this.monthView = this.monthView.bind(this);
    this.dayView = this.dayView.bind(this);
    this.leftClickYear = this.leftClickYear.bind(this);
    this.rightClickYear = this.rightClickYear.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this.saveDay = this.saveDay.bind(this);
    this.inputHour = this.inputHour.bind(this);
  }
  leftClick() {
    let month = this.state.selectedMonth;
    if (month === 0) {
      month = 11;
    }
    else {
      month--;
    }
    this.setState({ selectedMonth: month })
  }
  rightClick() {
    let month = this.state.selectedMonth;
    if (month === 11) {
      month = 0;
    }
    else {
      month++;
    }
    this.setState({ selectedMonth: month })
  }
  leftClickYear() {
    let year = this.state.selectedYear;
    year--;
    this.setState({ selectedYear: year });
  }
  rightClickYear() {
    let year = this.state.selectedYear;
    year++;
    this.setState({ selectedYear: year });
  }
  yearView() {
    return (
      <div className='yearView'>
        <div>
          <img alt="strzalkaL" src={arrowL} onClick={this.leftClickYear} className='leftButton'></img>
          <p className='yearNumber'>{this.state.selectedYear}</p>
          <img alt="strzalkaR" src={arrowR} onClick={this.rightClickYear} className='rightButton'></img>
        </div>
        <table className='table'>
          <tbody>
            <tr>
              <td className='tableCellWinter' onClick={() => { this.setState({ selectedMonth: 0 }); }}>January</td>
              <td className='tableCellWinter' onClick={() => { this.setState({ selectedMonth: 1 }); }}>February</td>
              <td className='tableCellWinterS' onClick={() => { this.setState({ selectedMonth: 2 }); }}>March</td>
              <td className='tableCellSpring' onClick={() => { this.setState({ selectedMonth: 3 }); }}>April</td>
            </tr>
            <tr>
              <td className='tableCellSpring' onClick={() => { this.setState({ selectedMonth: 4 }); }}>May</td>
              <td className='tableCellSpringS' onClick={() => { this.setState({ selectedMonth: 5 }); }}>June</td>
              <td className='tableCellSummer' onClick={() => { this.setState({ selectedMonth: 6 }); }}>July</td>
              <td className='tableCellSummer' onClick={() => { this.setState({ selectedMonth: 7 }); }}>August</td>
            </tr>
            <tr>
              <td className='tableCellSummerA' onClick={() => { this.setState({ selectedMonth: 8 }); }}>September</td>
              <td className='tableCellAutumn' onClick={() => { this.setState({ selectedMonth: 9 }); }}>October</td>
              <td className='tableCellAutumn' onClick={() => { this.setState({ selectedMonth: 10 }); }}>November</td>
              <td className='tableCellWinterA' onClick={() => { this.setState({ selectedMonth: 11 }); }}>December</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  monthView() {
    let list = this.state.months;
    let nameDisplay;
    for (let i = 0; i < this.state.selectedMonth + 1; i++) {
      nameDisplay = list[i].monthName;
    }
    return (
      <div className='mainBoard'>
        <div>
          <img alt="strzalkaL" src={arrowL} onClick={this.leftClick} className='leftButton'></img>
          <p className='textMonth'>{nameDisplay}</p>
          <img alt="strzalkaP" src={arrowR} onClick={this.rightClick} className='rightButton'></img>
        </div>
        <table className='table'>
          <tbody>
            <tr className='tableRowHeader'>
              <td>Monday</td>
              <td>Tuesday</td>
              <td>Wednesday</td>
              <td>Thursday</td>
              <td>Friday</td>
              <td>Saturday</td>
              <td>Sunday</td>
            </tr>
            <this.renderRows></this.renderRows>
          </tbody>
        </table>
      </div>
    )
  }
  renderRows() {
    let list = this.state.months;
    let nameDisplay, daysInMonth, firstRowEnd;
    for (let i = 0; i < this.state.selectedMonth + 1; i++) {
      nameDisplay = list[i].monthName;
      daysInMonth = list[i].days;
    }
    let date = new Date(nameDisplay + " 01" + ", " + this.state.selectedYear);
    const numberArrayFirst = [];
    const numberArraySecond = [];
    const numberArrayThird = [];
    const numberArrayFourth = [];
    const numberArrayFifth = [];
    if (date.getDay() == '1') {
      firstRowEnd = 8;
    }
    else if (date.getDay() == '2') {
      firstRowEnd = 7;
    }
    else if (date.getDay() == '3') {
      firstRowEnd = 6;
    }
    else if (date.getDay() == '4') {
      firstRowEnd = 5;
    }
    else if (date.getDay() == '5') {
      firstRowEnd = 4;
    }
    else if (date.getDay() == '6') {
      firstRowEnd = 3;
    }
    else if (date.getDay() == '0') {
      firstRowEnd = 2;
    }
    for (let i = 1; i < firstRowEnd; i++) {
      numberArrayFirst.push(i);
    }
    for (let i = firstRowEnd; i < 7 + firstRowEnd; i++) {
      numberArraySecond.push(i);
    }
    for (let i = 7 + firstRowEnd; i < 14 + firstRowEnd; i++) {
      numberArrayThird.push(i);
    }
    for (let i = 14 + firstRowEnd; i < 21 + firstRowEnd; i++) {
      numberArrayFourth.push(i);
    }
    for (let i = 21 + firstRowEnd; i < parseInt(daysInMonth) + 1; i++) {
      numberArrayFifth.push(i);
    }
    if (numberArrayFifth.length == 8) {
      numberArrayFifth.pop();
    }
    else if (numberArrayFifth.length == 9) {
      numberArrayFifth.pop();
      numberArrayFifth.pop();
    }
    const firstRowRender = numberArrayFirst.map((number) =>
      <td onClick={() => this.saveDay(number.toString())} key={number}>{number}</td>
    );
    const secondRowRender = numberArraySecond.map((number) =>
      <td onClick={() => this.saveDay(number.toString())} key={number}>{number}</td>
    );
    const thirdRowRender = numberArrayThird.map((number) =>
      <td onClick={() => this.saveDay(number.toString())} key={number}>{number}</td>
    );
    const fourthRowRender = numberArrayFourth.map((number) =>
      <td onClick={() => this.saveDay(number.toString())} key={number}>{number}</td>
    );
    const fifthRowRender = numberArrayFifth.map((number) =>
      <td onClick={() => this.saveDay(number.toString())} key={number}>{number}</td>
    );

    if (date.getDay() == '1' && daysInMonth == '31') {
      return (<><tr className='tableRow'>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}<td></td><td></td><td></td><td></td></tr></>)
    }
    else if (date.getDay() == '1' && daysInMonth == '30') {
      return (<><tr className='tableRow'>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}<td></td><td></td><td></td><td></td><td></td></tr></>)
    }
    else if (date.getDay() == '1' && daysInMonth == '28') {
      return (<><tr className='tableRow'>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></>)
    }
    else if (date.getDay() == '2' && daysInMonth == '31') {
      return (<><tr className='tableRow'><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}<td></td><td></td><td></td></tr></>)
    }
    else if (date.getDay() == '2' && daysInMonth == '30') {
      return (<><tr className='tableRow'><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}<td></td><td></td><td></td><td></td></tr></>)
    }
    else if (date.getDay() == '2' && daysInMonth == '28') {
      return (<><tr className='tableRow'><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}<td></td>
          <td></td><td></td><td></td><td></td><td></td></tr></>)
    }
    else if (date.getDay() == '3' && daysInMonth == '31') {
      return (<><tr className='tableRow'><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}<td></td><td></td></tr></>)
    }
    else if (date.getDay() == '3' && daysInMonth == '30') {
      return (<><tr className='tableRow'><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}<td></td><td></td><td></td></tr></>)
    }
    else if (date.getDay() == '3' && daysInMonth == '28') {
      return (<><tr className='tableRow'><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}<td></td><td></td><td></td><td></td></tr></>)
    }
    else if (date.getDay() == '4' && daysInMonth == '31') {
      return (<><tr className='tableRow'><td></td><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}<td></td></tr></>)
    }
    else if (date.getDay() == '4' && daysInMonth == '30') {
      return (<><tr className='tableRow'><td></td><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}<td></td><td></td></tr></>)
    }
    else if (date.getDay() == '4' && daysInMonth == '28') {
      return (<><tr className='tableRow'><td></td><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}<td></td><td></td><td></td><td></td></tr></>)
    }
    else if (date.getDay() == '5' && daysInMonth == '31') {
      return (<><tr className='tableRow'><td></td><td></td><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}</tr></>)
    }
    else if (date.getDay() == '5' && daysInMonth == '30') {
      return (<><tr className='tableRow'><td></td><td></td><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}<td></td></tr></>)
    }
    else if (date.getDay() == '5' && daysInMonth == '28') {
      return (<><tr className='tableRow'><td></td><td></td><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}<td></td><td></td><td></td></tr></>)
    }
    else if (date.getDay() == '6' && daysInMonth == '31') {
      return (<><tr className='tableRow'><td></td><td></td><td></td><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}</tr>
        <tr className='tableRow'><td onClick={() => this.saveDay(31)}>31</td><td></td><td></td><td></td><td></td><td></td><td></td></tr></>)
    }
    else if (date.getDay() == '6' && daysInMonth == '30') {
      return (<><tr className='tableRow'><td></td><td></td><td></td><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}</tr>
      </>)
    }
    else if (date.getDay() == '6' && daysInMonth == '28') {
      return (<><tr className='tableRow'><td></td><td></td><td></td><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}</tr>
      </>)
    }
    else if (date.getDay() == '0' && daysInMonth == '31') {
      return (<><tr className='tableRow'><td></td><td></td><td></td><td></td><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}</tr>
        <tr className='tableRow'><td onClick={() => this.saveDay(30)}>30</td><td onClick={() => this.saveDay(31)}>31</td><td></td><td></td><td></td><td></td><td></td></tr></>)
    }
    else if (date.getDay() == '0' && daysInMonth == '30') {
      return (<><tr className='tableRow'><td></td><td></td><td></td><td></td><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}</tr>
        <tr className='tableRow'><td onClick={() => this.saveDay(30)}>30</td><td></td><td></td><td></td><td></td><td></td><td></td></tr></>)
    }
    else if (date.getDay() == '0' && daysInMonth == '28') {
      return (<><tr className='tableRow'><td></td><td></td><td></td><td></td><td></td><td></td>{firstRowRender}</tr>
        <tr className='tableRow'>{secondRowRender}</tr>
        <tr className='tableRow'>{thirdRowRender}</tr>
        <tr className='tableRow'>{fourthRowRender}</tr>
        <tr className='tableRow'>{fifthRowRender}</tr></>)
    }
  }
  saveDay(day) {
    let daysArray = this.state.daySave;
    let hourArray = this.state.hourSave;
    let list = this.state.months;
    let nameDisplay;
    for (let i = 0; i < this.state.selectedMonth + 1; i++) {
      nameDisplay = list[i].monthName;
    }
    let dateToSave = day + "." + nameDisplay + "." + this.state.selectedYear;
    if (!daysArray.includes(dateToSave)) {
      daysArray.push(dateToSave);
      for (let i = 1; i < 25; i++) {
        hourArray.push(i.toString());
      }
    }
    this.setState({ daySave: daysArray, hourSave: hourArray, lastSelectedDay: dateToSave });

  }
  inputHour(index, event) {
    let daysArray = this.state.daySave;
    let hourArray = this.state.hourSave;
    hourArray[((daysArray.indexOf(this.state.lastSelectedDay)) * 24) + index] = event.target.value;
    this.setState({ hourSave: hourArray });
    /*const daysJson = { ...daysArray};
    let tempJson = [""];
    for(let i = 0;i<hourArray.length/24;i++)
    {
      for(let j =0;j<24;j++)
      {
        tempJson[i] +=(j+1)+". "+hourArray[j]+"\n";
      }
    }
    const hourJson = {...tempJson};*/

  }

  dayView() {
    let daysArray = this.state.daySave;
    let hourArray = this.state.hourSave;
    let hourArrayDisplay = [];
    for (let i = daysArray.indexOf(this.state.lastSelectedDay) * 24; i < daysArray.indexOf(this.state.lastSelectedDay) * 24 + 24; i++) {
      hourArrayDisplay[(i - (24 * daysArray.indexOf(this.state.lastSelectedDay)))] = hourArray[i];
    }
    const hourArrayRender = hourArrayDisplay.map((text, index) => {
      return <><input type="text" className="input" value={text} onChange={(e) => { this.inputHour(index, e) }} key={index}></input><br></br></>
    });
    return (
      <>
        <div className='dayView'>
          <p className='dayName'>{this.state.lastSelectedDay}</p>
          <div className='hourList'>
            {hourArrayRender}
          </div>
        </div>
      </>
    )
  }
  render() {
    return (
      <>
        <this.yearView></this.yearView>
        <this.monthView></this.monthView>
        <this.dayView></this.dayView>
      </>
    )
  }
}




ReactDOM.render(
  <MainBoard></MainBoard>
  ,
  document.getElementById('root')
);