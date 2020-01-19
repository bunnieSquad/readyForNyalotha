var React = require('react');

function FormCreation(props) {
    return (
        <div className="col-sm-12">
          <form>
            {props.question}
            {props.picture}
            <div className="radio">
                <label>
                    <input type="radio" value="opt1" checked={false} />
                    {props.answer1}
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value="opt2" />
                    {props.answer2}
                </label>
            </div>
          </form>
        </div>
    );
  }
  
  module.exports = FormCreation;