import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Time from './components/time';
import Button from './components/button';

class App extends Component {
  constructor(){
    super();
    this.state = {
    heures:'00',
    minutes:'00',
    secondes:'00',
    count:0,
    count1:0,
    count2:0,
    res:"",
    test:false,
  };
};

// increment=()=>{
//   setInterval(this.alertMe,1000);
//   /*this.setState({
//     secondes:toString(+this.state.secondes[1] +1}
//   )*/
// }
// alertMe=()=> {
//   alert("hi");
// }
// increment=()=>{
//   const time=new Date(0)
//   time.setHours(0, 0, 0, 0);
//   console.log(time)
//   const s=time.getSeconds().toString()
//   const m=time.getMinutes().toString()
//   const h=time.getHours().toString()
//   if (s.length<2){
    
//   }


  alertMe=() => {
    if(+(this.state.secondes[1])<9){
    this.setState({
      secondes:(+(this.state.secondes[1]) +1).toString().padStart(2,this.state.count.toString())
  }
  
  )}
  else if(+(this.state.secondes[1])===9 && +(this.state.secondes[0])!==5  ){
  
    this.setState({
      secondes:(+(this.state.secondes[0]) +1).toString().padEnd(2,'0'),
      count:this.state.count +1}
  )
  }
  if (+(this.state.secondes[1])===9 && +(this.state.secondes[0])===5){
    console.log('hello')
    this.setState({
      minutes:(+(this.state.minutes[1]) +1).toString().padStart(2,this.state.count1.toString()),
      count:0,
      secondes:'00'
    })
  }
  if (+(this.state.minutes[1])===9 && +(this.state.minutes[0])!==5 && +(this.state.secondes[1])===9 && +(this.state.secondes[0])===5){
    this.setState({
      secondes:(+(this.state.minutes[0]) +1).toString().padEnd(2,'0'),
      count1:this.state.count1 +1}
  )
  }
  if (+(this.state.minutes[1])===9 && +(this.state.minutes[0])===5 && +(this.state.secondes[1])===9 && +(this.state.secondes[0])===5){
    this.setState({
      heures:(+(this.state.heures[1]) +1).toString().padStart(2,this.state.count2.toString()),
      count:0,
      cout1:0,
      secondes:'00',
      minutes:'00'
    })
  }
};
increment=()=>{
  if (this.state.test===false){
  this.setState({res:setInterval(this.alertMe,1000),
  test:true})}
  else {
    clearInterval(this.state.res)
    this.setState({test:false});
  }
}
reset=()=>{
  this.setState({
    secondes:'00',
    minutes:'00',
    heures:'00',
    count:0,
    count1:0,
    count2:0,
    
  })
  clearInterval(this.state.res);
}
stop=()=>{
  clearInterval(this.state.res);
}
  render() {
    return (
      <div className="App">
         <Time secondes={this.state.secondes} minutes={this.state.minutes} heures={this.state.heures}/>
         <Button increment={this.increment} reset={this.reset} stop={this.stop}/>
      </div>
    );
  }
}

export default App;
