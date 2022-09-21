import React from 'react';

class DateAndTime extends React.Component {
  state={
    curDT : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="Comment">
        <p>Current Date And Time : {this.state.curDT}</p>
        
      </div>
    );
  }
}
  
  export default DateAndTime;