import React, {Component} from "react";
import {connect} from "react-redux";
import {Menu} from "antd";
import {Link} from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import IntlMessages from "util/IntlMessages";
import {NAV_STYLE_MINI, THEME_TYPE_LITE} from "constants/ThemeSetting";
import Auxiliary from "util/Auxiliary";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SidebarContent extends Component {

  render() {
    const {navStyle, themeType, verticalNavStyle, pathname} = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];
    return (<Auxiliary>

        <SidebarLogo/>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            inlineCollapsed={verticalNavStyle === NAV_STYLE_MINI}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <MenuItemGroup key="main" title={
              <IntlMessages id="sidebar.main"/>}>

              <Menu.Item key="home">
                <Link to="/home"><i className="icon icon-widgets"/>
                  Home
                </Link>
              </Menu.Item>

              <Menu.Item key="my-profile">
                <Link to="/my-profile"><i className="icon icon-widgets"/>
                  My Profile
                </Link>
              </Menu.Item>

              <Menu.Item key="my-projects">
                <Link to="/my-projects"><i className="icon icon-widgets" />
                  My Projects
                </Link>
              </Menu.Item>

              <Menu.Item key="exchange">
                <Link to="/exchange"><i className="icon icon-widgets" />
                  Exchange
                </Link>
              </Menu.Item>

              <Menu.Item key="store">
                <Link to="/store"><i className="icon icon-widgets" />
                  Store
                </Link>
              </Menu.Item>

              <Menu.Item key="about-us">
                <Link to="/about-us">
                  About Us
                </Link>
              </Menu.Item>

            </MenuItemGroup>

          </Menu>
        </CustomScrollbars>
      </Auxiliary>
    );
  }
}

SidebarContent.propTypes = {};
const mapStateToProps = ({settings}) => {
  const {navStyle, verticalNavStyle, themeType, locale, pathname} = settings;
  return {navStyle, verticalNavStyle, themeType, locale, pathname}
};
export default connect(mapStateToProps)(SidebarContent);
