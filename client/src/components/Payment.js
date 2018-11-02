import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../action';


class Payments extends Component {


  render() {

    return (
      <StripeCheckout
        name='Promise'
        description='Load Wallet'
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button style={{textTransform: 'none'}} className='btn'>
          Load Wallet
        </button>
      </StripeCheckout>
    )
  }


}

export default connect(null, actions)(Payments);