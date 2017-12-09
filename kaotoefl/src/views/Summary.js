import React from 'react'

class Summary extends React.Component {

    constructor(props){
        super(props);


    }

    render (){
        return (
            <p>
                Summary: {this.state.sum}
            </p>
        )
    }
}

export default Summary