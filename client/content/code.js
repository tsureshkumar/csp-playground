import React from 'react';
import ReactDOM from 'react-dom';
import Highlight from 'react-highlight';
import {connect} from 'react-redux';

import {fetchSources} from './actions';
import appStyle from '../app.css';

class SourceCode extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {dispatch, exploitName} = this.props;
    dispatch(fetchSources(exploitName));
  }
  componentDidUpdate(prevProps, prevState) {
    const {dispatch, exploitName} = this.props;
    if (prevProps.exploitName !== exploitName) {
      dispatch(fetchSources(this.props.exploitName));
    }
  }
  render() {
    const {exploitName, sources} = this.props;
    return (
      <div>
        {sources.map(source => (
          <div className={appStyle.source}>
            <div>{source.source}</div>
            <Highlight className="{source.language}">
              {source.content}
            </Highlight>
          </div>
        ))}
      </div>
    );
  }
}

//make container component
export default connect((state, ownProps) => ({
  sources: state.content.sources,
}))(SourceCode);
