import React from "react";
import ReactDOM from "react-dom";

import Content from "./content"
import ExploitsMenu from "./menu/component"

import layout from "./layout.css"

const Header = () => <div className={`${layout.header}` }>Content Security Policy</div>;

const SideBar = (props) => {
   return ( <div className={`${layout["aside-1"]}`}>
        <ExploitsMenu a="a" menuClicked={props.menuChanged}/>
       </div>);
};

const Footer = () => <div className={`${layout.footer} `}></div>

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {activeMenu: undefined}
        this.menuClicked = this.menuClicked.bind(this)
    }
    menuClicked(mv) {
       console.log(mv) 
        this.setState({activeMenu: mv})
    }
    render() {
      return (<div className={layout.wrapper}>
            <Header />
            <SideBar menuChanged={this.menuClicked}/>
            <Content exploitName={this.state.activeMenu}/>
            <Footer />
		</div>);
    }
}

export default App;
