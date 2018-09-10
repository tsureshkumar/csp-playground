import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {fetchMenuItems, setActiveMenu} from './actions';

import navStyle from '../navigation.css';

const Exploit = ({exploit, active, onClick}) => {
  var className = exploit === active ? navStyle.active: navStyle.inactive;
  return (
    <a href="#" onClick={() => onClick(exploit)} className={className}>
      {exploit}
    </a>
  );
};

const MyExploits = ({exps, active, onClick}) => {
  if (!exps) return <div />;
  return (
    <nav >
      <ul className={navStyle.navigation}>
        {exps.map(exp => (
          <li key={exp}>
            <Exploit exploit={exp} active={active} onClick={onClick} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

class ExploitsMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {dispatch, menu, active, onClick} = this.props;
    dispatch(fetchMenuItems());
  }
  onClick(item) {
      const {dispatch} = this.props;
      dispatch(setActiveMenu(item));
  }
  render() {
    const {dispatch, menu, active} = this.props;
    return <MyExploits exps={menu} active={active} onClick={this.onClick.bind(this)} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: state.menu.active,
  menu: state.menu.items,
});

// either use "dispatch" as above in a stateful component
// or use this map as second argument to connect()
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: item => dispatch(setActiveMenu(item)),
});

export default connect(mapStateToProps)(ExploitsMenu);
