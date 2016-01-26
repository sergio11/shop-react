import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import styles from 'material-ui/lib/styles';
import Avatar from 'material-ui/lib/avatar';


const colors = styles.Colors;

export default class MainBar extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired
  };

  static customStyles = {
    backgroundColor: colors.deepPurple500
  };

  constructor(props, context) {
    super(props, context);
  };

  _renderElementLeft(){
    return (
      <IconButton>
        <NavigationClose />
      </IconButton>
    )
  }

  _renderAvatar(){
    return (
      <Avatar
        icon={<FileFolder />}
        color={colors.orange200}
        backgroundColor={colors.pink400} />
    )
  }

  render(){
    return (
      <AppBar
        title={this.props.title}
        style={this.customStyles}
        iconElementLeft={this._renderElementLeft()}>
        {this._renderAvatar()}
      </AppBar>
    );
  }

}

