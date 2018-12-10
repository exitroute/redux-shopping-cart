
import React from 'react';
import { connect } from "react-redux";
import Product from './Product.jsx';
import Form from './Form.jsx';

class CheckoutForm extends React.Component {


/*
  onChange = (field, value) => {
    console.log("onChange(field, value): ", field, value);
    console.log("onChange() let data: ", data);
    console.log("this.state.data: ", this.state.data);
    
    // local copy of state
    let data = { ...this.state.form };
    
    // create form object with id of input
    data[field] = value
    
    // sync to state and to LC
    this.setState({ form: data })
    localStorage.setItem('react-cart', JSON.stringify(this.state));
  }
*/

  // updateItem = (item, index) => {
  //   var data = this.state.data
  //   console.log("updateItem() var data: ", this.state.data);

  //   if ( index === "like" ) {
  //       data[item.props.data.id].liked = !data[item.props.data.id].liked 
  //     }
  //   else if (index)
  //     data[item.props.data.id].amount++
  //   else if (data[item.props.data.id].amount > 0)
  //     data[item.props.data.id].amount--

  //   this.state.total = data.map((item, index, array)=> item.price * item.amount).reduce((a, b) => a + b, 0);
  //   console.log("updateItem() this.state.total: ", this.state.total);

  //   this.setState(this.state)
  //   localStorage.setItem('react-cart', JSON.stringify(this.state));

  // }
  render() {
    return (
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">

              {this.props.data.map((person, i) => <Product updateItem={this.updateItem} key = {i} data = {person} />)}

              <li className="list-group-item d-flex justify-content-between lh-condensed">
                Total: <span className="font-weight-bold">{/* this.props.total.toFixed(2)*/ } $ </span>
              </li>

            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code"/>
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
              </div>
            </form>
            
          </div>

          { /* Form needs data on load !!!! and the change handler */ }
          <Form /*data={this.props.form} onChange={this.onChange}*/ />

        </div>
    );
  }
}

export default connect(state => ({ data: state.data }), updateItems )(CheckoutForm);
