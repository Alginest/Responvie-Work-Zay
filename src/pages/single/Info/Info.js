import React, { useState } from 'react'
import { Button, Container, makeStyles, Typography } from '@material-ui/core'
import { Box } from '@mui/system'
import Rating from '@mui/material/Rating'

const useStyles = makeStyles((theme) => ({
  aboutHero: {
    backgroundColor: 'white',
    height: '90%',
    marginTop: 50,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
      marginLeft: theme.spacing(0),
    },
  },
  rating: {
    display: 'flex',
  },
  colored: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  thin: {
    fontWeight: 300,
    marginLeft: theme.spacing(1),
  },
  thing: {
    color: 'gray',
    marginLeft: theme.spacing(1),
  },
  size: {
    display: 'flex',
    alignItems: 'center',
  },
  sizeBtn: {
    backgroundColor: '#59ab6e',
    color: '#fff',
    minWidth: '30px',
    margin: '0 5px',
  },
  quntity: {
    backgroundColor: 'gray',
    width: 30,
    height: 25,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '5px',
  },
  bigBtns: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  cartBtn: {
    width: 250,
    height: 50,
    backgroundColor: '#59ab6e',
    color: '#fff',
  },
  boxing: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px 0',
  },
  wear: {
    paddingTop: theme.spacing(2),
  },
}))

const Info = () => {
  const classes = useStyles()
  const [quntity, setQuntity] = useState(0)
  return (
    <Box className={classes.aboutHero}>
      <Container>
        <Typography variant='h4' gutterBottom className={classes.wear}>
          Active Wear
        </Typography>
        <Typography variant='h5' gutterBottom>
          $25.00
        </Typography>
        <div className={classes.rating}>
          <Rating
            value={4}
            max={5}
            className={classes.rating}
            style={{ marginRight: 10 }}
          />
          <Typography style={{ marginRight: 10 }} className={classes.colored}>
            Rating 4.8
          </Typography>
          <Typography> | 36 Comments</Typography>
        </div>
        <Typography className={classes.colored}>
          Brand:
          <Typography className={classes.thing} component='span'>
            Easy Wear
          </Typography>
        </Typography>
        <Typography className={classes.colored}>
          Description:
          <Typography className={classes.thin} component='span'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse. Donec condimentum elementum convallis. Nunc sed orci a
            diam ultrices aliquet interdum quis nulla.
          </Typography>
        </Typography>
        <Typography className={classes.colored}>
          Avaliable Color:
          <Typography className={classes.thing} component='span'>
            White / Black
          </Typography>
        </Typography>
        <div className='spec'>
          <Typography className={classes.colored}>
            Brand:
            <Typography className={classes.thin} component='span'>
              Lorem ipsum dolor sit Amet, consectetur Adipiscing elit,set Duis
              aute irure Ut enim ad minim Dolore magna aliqua Excepteur sint
            </Typography>
          </Typography>
        </div>
        <Typography className={classes.colored}>Specifications:</Typography>
        <Typography className={classes.thin}>Lorem ipsum dolor sit</Typography>
        <Typography className={classes.thin}>Amet, consectetur</Typography>
        <Typography className={classes.thin}>Adipiscing elit,set</Typography>
        <Typography className={classes.thin}>Duis aute irure</Typography>
        <Typography className={classes.thin}>Ut enim ad minim</Typography>
        <Typography className={classes.thin}>Dolore magna aliqua</Typography>
        <Typography className={classes.thin}>Excepteur sint</Typography>
        <div className={classes.boxing}>
          <div className={classes.size}>
            <Typography className={classes.thin}>Size:</Typography>
            <Button variant='contained' className={classes.sizeBtn}>
              S
            </Button>
            <Button variant='contained' className={classes.sizeBtn}>
              M
            </Button>
            <Button variant='contained' className={classes.sizeBtn}>
              L
            </Button>
            <Button variant='contained' className={classes.sizeBtn}>
              XL
            </Button>
          </div>
          <div className={classes.size}>
            <Typography className={classes.thin}>Quantity:</Typography>
            <Button variant='contained' className={classes.sizeBtn}>
              -
            </Button>
            <Typography className={classes.quntity} align='center'>
              {quntity}
            </Typography>
            <Button variant='contained' className={classes.sizeBtn}>
              +
            </Button>
          </div>
        </div>
        <div className={classes.bigBtns}>
          <Button variant='contained' className={classes.cartBtn}>
            Buy
          </Button>
          <Button variant='contained' className={classes.cartBtn}>
            Add To Cart
          </Button>
        </div>
      </Container>
    </Box>
  )
}

export default Info
