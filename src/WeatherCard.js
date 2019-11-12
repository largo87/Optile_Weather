import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



export default function WeatherCard(props) {
  const classes = useStyles();

  return (
  
    <Card className={classes.card} onClick={props.handleOnChange}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Weather of the Day
        </Typography>
        <Typography variant="h6" component="h2">
        Temp:{props.temperature}
        </Typography>
        <Typography variant="h6" component="h2">
          Date:{props.date}
        </Typography>
      </CardContent>
    </Card>
  );
}


