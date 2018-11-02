import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payment';

class Header extends Component {

  renderContact() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>;
      default:
        return [
          <li key={1}><Payments/></li>,
          <li style={{margin: '0 10px'}} key={0}>Credits: {this.props.auth.credits}</li>,
          <li key={2}><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className='nav-wrapper'>
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              href="/" className='left brand-logo'
            >
              Emaily
            </Link>
            <ul className='right'>
                {/*{this.props.auth === null ?*/}
                  {/*null*/}
                  {/*: (this.props.auth === false ?*/}
                      {/*<a href="/auth/google">Login with Google</a>*/}
                      {/*: (<Payments/>,*/}
                        {/*<a href="/api/logout">Logout</a>)*/}
                  {/*)*/}
                {/*}*/}
                {this.renderContact()}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateProps({auth}) {
  return {auth: auth}
}


export default connect(mapStateProps)(Header);