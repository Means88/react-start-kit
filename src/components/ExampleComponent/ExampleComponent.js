import React from 'react'
import { connect } from 'react-redux'
import { click } from '../../redux/modules/example'

@connect(
    state=>({ clicked: state.example.clicked }),
    dispatch=>({ click: ()=>{dispatch(click())} })
)
class ExampleComponent extends React.Component {
    render() {
        return <p onClick={this.props.click}>{this.props.clicked ? "Clicked" : this.props.val}</p>
    }
}

export default ExampleComponent