import { Component } from "react";

export default class Contador extends Component {

    /*
    constructor(props){
        super(props)

        this.state = {
            numero: 7,
            passo: props.passo ?? 1
        }
    }*/

    state = {
        numero: 7,
        passo: this.props.passo ?? 1
    }

    inc() {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    renderForm() {
        return(
            <>
                <h1>Contador (usando Classe)</h1>
                <h2>{ this.props.valorInicial }</h2>
                <h2>{ this.state.numero }</h2>

                <input type="number" min={1} max={1000} value={this.state.passo}
                    onChange={ev => this.setState({passo: +ev.target.value})}/>

                <button onClick={() => this.inc()}>+</button>
                <button onClick={this.dec}>-</button>
            </>
        )
    }

    render(){
        return (
            <div>
                {this.renderForm()}
            </div>
        )
    }
}