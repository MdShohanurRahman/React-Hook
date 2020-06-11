import React, { Component } from 'react'

export class HookClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    clickHandler = (e) => {
        e.preventDefault()
        this.setState({
            count: this.state.count + 1
        })

    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate() {
        
        if (prevState.count !== this.state.count ){
            console.log("updating document title ")
            document.title = `Clicked ${this.state.count} times`
        }
        
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => {
                    this.setState({ name: e.target.value })
                }} />
                <button onClick={this.clickHandler}>count {this.state.count}</button>
            </div>
        )
    }
}

export default HookClassCounter
