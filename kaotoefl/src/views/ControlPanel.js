import React, {Component} from 'react';
import Counter from './Counter'

import Summary from './Summary'

const style ={
    color: "blue"
}
class ControlPanel extends Component {
    render(){
        <div style={style}>
            <Counter caption="First" />
            <Counter caption="Second"/>
            <Counter caption="Third"/>
            <hr/>
            <Summary />            
        </div>
    }
}

export default ControlPanel  