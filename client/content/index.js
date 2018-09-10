import React from 'react';
import ReactMarkdown from 'react-markdown';

import appStyle from '../app.css';
import layout from '../layout.css';
import SourceCode from './code';
import {connect} from 'react-redux';

import {
  fetchReadme,
  fetchExploits,
  fetchCSPHeader,
  updateCSPHeader,
  postCSPHeader,
} from './actions';

const CSPArea = ({exploitName, csp, onChange, onUpdate}) => {
  const _updateCSP = e => {
    onUpdate(csp);
  };

  const _onCSPChange = e => {
    onChange(e.target.value);
  };

  return (
    <div>
      <textarea
        id="csp-header"
        rows="5"
        cols="100"
        value={csp}
        onChange={_onCSPChange}
      />
      <br />
      <input type="button" value="Update" onClick={_updateCSP} />
      <input
        type="button"
        value="Reset"
        onClick={e => {
          onChange('');
          onUpdate('');
        }}
      />
    </div>
  );
};

const Code = ({exploitName}) => {
  var sourceCode = <div />;
  if (exploitName) sourceCode = <SourceCode exploitName={exploitName} />;
  return sourceCode;
};

class ExploitBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {exploitText: props.exploitText};
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.exploitName !== this.props.exploitName) {
        this.setState ({exploitText: this.props.exploitText});
    }
  }

  launchExploit(e) {
    window.open(this.state.exploitText, '_localhost_csp_window');
  }
  textChanged(e) {
    this.setState({exploitText: e.target.value});
  }
  render() {
    return (
      <>
        <textarea
          id="csp-header-x"
          rows="2"
          cols="70"
          key={this.props.exploitText}
          value={this.state.exploitText}
          onChange={this.textChanged.bind(this)}
        />
        <input
          type="button"
          onClick={this.launchExploit.bind(this)}
          value="Launch"
        />
        <br/>
      </>
    );
  }
}

const Exploits = (props, onChange) => {
  const v = props.exploits.map((ex, i) => {
      return (<ExploitBox exploitName={props.exploitName} exploitText={ex} key={ex+"_"+i}/>);
  });
  return <div key={props.exploits} >{v}</div>;
};

const initialState = {activeExploit: '', cspHeader: ''};
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  componentDidMount() {
    const {dispatch, exploitName} = this.props;
    if (exploitName) {
      dispatch(fetchReadme(exploitName));
      dispatch(fetchExploits(exploitName, exploits => { }));
      dispatch(
        fetchCSPHeader(exploitName, csp => this.setState({cspHeader: csp})),
      );
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.exploitName != this.props.exploitName) {
      const {dispatch, exploitName} = this.props;
      dispatch(fetchReadme(exploitName));
      dispatch(fetchExploits(exploitName, exploits => { }));
      dispatch(
        fetchCSPHeader(exploitName, csp => this.setState({cspHeader: csp})),
      );
    }
  }
  render() {
    const {dispatch, exploitName, sources, exploits, readme, csp} = this.props;
    var desc = <div className={layout['aside-2']} />;
    if (readme) {
      desc = (
        <div className={layout['aside-2']}>
          <ReactMarkdown
            className={[layout.xssDesc, 'markdown-body'].join(' ')}
            source={readme}
          />
        </div>
      );
    }
    return (
      <div className={layout.content}>
        <div className={layout.main}>
          <h2>Vulnerable Code</h2>
          <Code exploitName={exploitName} />
          <h2>Exploit Payload</h2>
          <Exploits
            exploitName={exploitName}
            exploits={exploits}
            key={exploits}
            activeExploit={this.state.activeExploit}
            onChange={x => this.setState({activeExploit: x})}
          />
          <h2>CSP Header</h2>
          <CSPArea
            key={csp}
            exploitName={exploitName}
            csp={this.state.cspHeader}
            onChange={value => this.setState({cspHeader: value})}
            onUpdate={value => dispatch(postCSPHeader(exploitName, value))}
          />
        </div>
        {desc}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  exploitName: state.menu.active,
  readme: state.content.readme,
  exploits: state.content.exploits,
  csp: state.content.csp,
});

export default connect(mapStateToProps)(Content);
