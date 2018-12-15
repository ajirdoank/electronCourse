// @ts-nocheck

var react = require('react');
var reactDom = require('react-dom');

var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap');
var fs = eRequire('fs');
var loadApt = JSON.parse(fs.readFileSync(dataLoc));

var mainInterface = react.createClass({
  getInitialState: function(){
    return{
      myApts: loadApt
    }
  },
  render: function(){
    var myApts = this.state.myApts;
    return(
      <div className="application">
      <div className="container">
       <div className="row">
         <div className="appointments col-sm-12">
           <h2 className="appointments-headline">Current Appointments</h2>
           <ul className="item-list media-list">
     
             <li className="pet-item media">
               <div className="pet-info media-body">
                 <div className="pet-head">
                   <span className="pet-name">{myApts[0].petName}</span>
                   <span className="apt-date pull-right">{myApts[0].aptDate}</span>
                 </div>
                 <div className="owner-name"><span className="label-item">Owner:</span>
                 {myApts[0].ownerName}</div>
                 <div className="apt-notes">{myApts[0].aptNotes}</div>
               </div>
             </li>
     
           </ul>
         </div>{/* col-sm-12 */}
       </div>{/* row */}
      </div>{/* container */}
    </div>
    )
  } //render method
}); //mainInterface

reactDom.render(
  <mainInterface/>,
  document.getElementById('appointment')
);
