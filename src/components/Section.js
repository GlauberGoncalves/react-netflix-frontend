import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Section(props) {

  return (
    <Grid container style={{backgroundColor: '#000', margin: '5px 0'}}>
      <Grid item md={6} xs={12} container justify="center" style={{textAlign: 'center', padding: '8%'}}>        
        <h2 style={{ fontSize:'2.5em', marginTop: '10%', padding: 0, textAlign: 'center'}}>{props.title}</h2>
        <p  style={{ fontSize:'1.8em' }}>{props.content}</p>        
      </Grid>

      <Grid item md={6} xs={12} container justify="center">
        <img src={props.image} alt="" height="400" style={{ borderRadius: props.border, marginTop: 20, maxWidth: '100%' }} />
      </Grid>
    </Grid>
  );
}
