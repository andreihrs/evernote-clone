import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { RemoveHTMLTags } from '../helpers';

class SidebarItemComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(<div>Hello from sidebarItem</div>);
  }
}

export default withStyles(styles)(SidebarItemComponent);