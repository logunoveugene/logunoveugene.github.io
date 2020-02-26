import React from 'react'
import './forms.scss'


export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', focused: false};
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    onFocus = () => {
        this.setState({focused: true})
    };

    onBlur = () => {
        this.setState({focused: false})
    };

    render() {
        return (
            <div>
                <div
                    className={((this.state.value.length > 0) || this.state.focused ? "input--label-up " : "") + "input input--floating "}>
                    <label className="input__label">{this.props.label}</label>
                    <input
                        value={this.state.value}
                        onChange={this.handleChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        className="input__field "
                        placeholder={this.props.placeholder}

                    />
                </div>
                {/*<div*/}
                    {/*className={((this.state.value.length > 0) || this.state.focused ? "input--label-up " : "") + "input input--floating "}>*/}
                    {/*<label className="input__label">{this.props.label}</label>*/}
                    {/*<input*/}
                        {/*value={this.state.value}*/}
                        {/*onChange={this.handleChange}*/}
                        {/*onFocus={this.onFocus}*/}
                        {/*onBlur={this.onBlur}*/}
                        {/*className="input__field input__field--error"*/}
                        {/*placeholder={this.props.placeholder}*/}

                    {/*/>*/}
                {/*</div>*/}
            </div>


        )
    }

}

