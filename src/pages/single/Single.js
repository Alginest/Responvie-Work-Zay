import React from 'react'
import { makeStyles, Grid, Container } from '@material-ui/core'
import Slider from './slider/Slider'
import Info from './Info/Info'
import Related from './related/Related'
const useStyles = makeStyles((theme) => ({
  single: {
    backgroundColor: '#e9eef5',
    height: 900,
    [theme.breakpoints.down('sm')]: {
      height: 1800,
    },
  },
  container: {
    height: 'auto',
  },
  slider: {
    height: '900px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}))
const Single = () => {
  const classes = useStyles()
  return (
    <>
      <section className={classes.single}>
        <Container className={classes.container} spacing={2}>
          <Grid container>
            <Grid item lg={6} className={classes.slider}>
              <Slider />
            </Grid>
            <Grid item lg={6}>
              <Info />
            </Grid>
          </Grid>
        </Container>
      </section>
      <Related />
    </>
  )
}

export default Single
