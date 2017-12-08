import React from 'react';


import Counter from './Counter'
class ControlPanel extends React.Component{

        constructor(props){
            super(props);
            
            this.onCounterUpdate = this.onCounterUpdate.bind(this);
            this.initValue = [0,1,2];
            const initsum = this.initValue.reduce((a,b)=> a+b,0);
            this.state = {
                sum : initsum
            }
        }
    render() {
        return(
            <div>
                <Counter  caption="First" initValue={this.initValue[0]} 
                onUpdata = {this.onCounterUpdate}/>
                <Counter caption="Second" initValue={this.initValue[1]}
                onUpdata = {this.onCounterUpdate} />
                <Counter caption="Third" initValue={this.initValue[2]} 
                onUpdata = {this.onCounterUpdate} />
                <p>sum: {this.state.sum}</p>
            </div>
        )
    }
    onCounterUpdate(newvalue,oldvalue){
        const valuechang = newvalue  - oldvalue;
        this.setState({
            sum: this.state.sum + valuechang
        })
    }
}
export default ControlPanel;