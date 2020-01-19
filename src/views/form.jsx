import React, { Component } from "react";

class FormCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "0"
        };
        this.handleOptionChange = changeEvent => {
            this.setState({
            selectedOption: changeEvent.target.value
            });
        };
        this.handleFormSubmit = formSubmitEvent => {
            formSubmitEvent.preventDefault();
            if (this.state.selectedOption != this.props.correctOption) {
                console.log(props.incorrectState);
            }
            console.log("You have submitted:", this.state.selectedOption);
        };
    }

    render() {
        return(
            <form onSubmit={this.handleFormSubmit}>
                Question #) {this.props.boss} : {this.props.question}
                <img class="content-image" src={this.props.imageSrc} width="300" alt=""></img>
                <div className="form-check">
                    <label>
                    <input
                        type="radio"
                        name="select"
                        value="option1"
                        checked={this.state.selectedOption === "option1"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    {this.props.answer1}
                    </label>
                </div>

                <div className="form-check">
                    <label>
                    <input
                        type="radio"
                        name="select"
                        value="option2"
                        checked={this.state.selectedOption === "option2"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    {this.props.answer2}
                    </label>
                </div>

                <div className="form-check">
                    <label>
                    <input
                        type="radio"
                        name="select"
                        value="option3"
                        checked={this.state.selectedOption === "option3"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    {this.props.answer3}
                    </label>
                </div>

                <div className="form-check">
                    <label>
                    <input
                        type="radio"
                        name="select"
                        value="option4"
                        checked={this.state.selectedOption === "option4"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                    />
                    {this.props.answer4}
                    </label>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mt-2" type="submit">
                    Submit
                    </button>
                </div>

        </form>
        );
    }
}

export default FormCreation;