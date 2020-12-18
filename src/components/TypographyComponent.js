import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function TypographyComponent(props) {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Typography variant={props.variant}  gutterBottom>
          {props.text}
        </Typography>
      </div>
    );
  }
  
