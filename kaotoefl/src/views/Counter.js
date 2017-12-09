import React from 'react';
import store from '../Store'
import Actions from '../actions'




class CounterContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = getOwnState()


        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    }

    getOwnState(){
        return {
            value: store.getState()[this.props.caption]
        }
    }

    onChange(){
        this.setState( this.getOwnState());
    }

    componentDidMount(){
        store.subscribe( this.onChange);
    }
    componentWillMount(){
        store.unsubsscribe( this.onChange)
    }
    render(){
        const { caption} = this.props.caption;
        return(
            <div>
                <button onClick={this.onClickIncrementButton } >+</button>
                <button onClick={this.onClickDecrementButton } >-</button>
                <span>
                    {caption} count: {this.state.count}
                </span>
            </div>
        )
    
    }
    shouldComponentUpdate(nextProps, nextState){
        return (nextProps.caption !== this.props.caption ||
        nextState.count !== this.state.count );
    }
    onClickIncrementButton(){
        // 加数
        this.updateCount(true)
    }

    onClickDecrementButton(){
        // 减数
        this.updateCount(false)
    }

    updateCount(isIncrement){
        var count = this.state.count;
        var newCount = isIncrement? count+1 : count-1     
        this.setState({
            count: newCount
        })       
        this.props.onUpdata( newCount, count)
    }
}

// 声明组件props 可以接受的类型
// Counter.propTypes = {
//     caption: PropTypes.string.isRequire,
//     initValue: PropTypes.number
// }
Counter.defaultProps = {
    initValue: 0
}



class Counter extends
export default Counter;