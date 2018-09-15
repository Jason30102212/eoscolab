import React, {Component} from "react";
import {Layout} from "antd";

import EOSIOClient from '../../util/eosio-client';
import ScatterJS from 'scatter-js/dist/scatter.esm';

import Sidebar from "../Sidebar/index";
import Topbar from "../Topbar/index";
import {footerText} from "util/config";
import App from "routes/index";

const {Content, Footer} = Layout;



export class MainApp extends Component {

  constructor(props) {
    super(props);
    const contractAccount = process.env.REACT_APP_EOSIO_CONTRACT_ACCOUNT;
    this.eosio = new EOSIOClient(contractAccount)
  }


  render() {
    const {match} = this.props;

    return (
      <Layout>
        <Sidebar/>

        <Layout>
          <Topbar/>
          <Content>
            <App match={match}/>
            <Footer>
              {footerText}
            </Footer>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default MainApp;
