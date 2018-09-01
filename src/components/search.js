import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 10,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '75%',
  }
});

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <TextField
          id="search"
          label="Search"
          type="search"
          margin="dense"
          className={classes.textField}
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default withStyles(styles)(SearchBar);
