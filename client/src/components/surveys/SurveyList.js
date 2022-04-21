//a class based component
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
       const Parentdiv = {
        height: 20,
        width: '20%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        marginTop: 2
      }
      
      const Childdivno = {
        height: '100%',
        width: `${((survey.no)/(survey.no + survey.yes)*100)}%`,
        backgroundColor: 'red',
        borderRadius: 40,
        textAlign: 'right',
      }
      const Childdivyes = {
        height: '100%',
        width: `${((survey.yes)/(survey.no + survey.yes)*100)}%`,
        backgroundColor: 'blue',
        borderRadius: 40,
        textAlign: 'right',
      }

      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      } //'reverse' to show most recent up
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <div style={Parentdiv}>
                <div style={Childdivyes}>
                  <span style={progresstext}>{`${parseInt((survey.yes)/(survey.no + survey.yes)*100)}%`}</span>
                </div>
           </div>
           <div style={Parentdiv}>
                <div style={Childdivno}>
                  <span style={progresstext}>{`${parseInt((survey.no)/(survey.no + survey.yes)*100)}%`}</span>
                </div>
           </div>
             <h8><font color="#00199e">Yes: </font> {survey.yes}</h8>
            <br/>
            <h8><font color="#ce0018">No: </font> {survey.no}</h8>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
