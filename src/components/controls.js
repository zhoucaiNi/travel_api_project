import React from 'react';
import { connect } from 'react-redux';
import '../style.scss';
import { fetchShiba } from '../actions';

function Controls(props) {
  return (
    <div className="shiba">
      <button type="button" onClick={props.fetchShiba}>Get Shiba</button>
      {props.shiba.shiba
        ? <img src={props.shiba.shiba} alt="shiba pics" />
        : null}
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    shiba: reduxState.shiba,
  };
}

// note how here we leave the first argument null, we don't need to connect any state just actions
export default connect(mapStateToProps, { fetchShiba })(Controls);
