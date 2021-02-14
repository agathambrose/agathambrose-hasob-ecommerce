import React, { Component, Suspense } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import { PRODUCTDATA } from '../src/data/Productdata'
import Productdeets from './components/productdetails/Productdeets';

const Signup = React.lazy(() => import ('./components/user/signup/Signup'))
const Signin = React.lazy(() => import ('./components/user/signin/Signin')) 
const UserCart =  React.lazy(() => import ('./components/user/usercart/UserCart'))


class App extends Component {
  state = {
    wishList: [],
    input: '',
    products: PRODUCTDATA,
    unfilteredProducts: PRODUCTDATA
  }
    
  addToWishList = (item, id) =>{
    const newItem = Object.assign({}, item);
    const index = this.state.wishList.findIndex(result => {
      return result.id === id
    })
    if(index === -1){
    const newWishList = [...this.state.wishList, newItem]
    this.setState({wishList: newWishList})
    }
  }
  increaseQuantity = (item, id) =>{
    const index = this.state.wishList.findIndex(result => result.id === id);
    const wishList = [...this.state.wishList]
    wishList[index] = {
      ...wishList[index], quantity: wishList[index].quantity + 1, price: wishList[index].unitPrice * (wishList[index].quantity + 1)
    }
    this.setState({
      wishList: wishList
    })
  }
  decreaseQuantity = (item, id) =>{
    const index = this.state.wishList.findIndex(result => result.id === id);
    const wishList = [...this.state.wishList]
    wishList[index] = {
      ...wishList[index], quantity: wishList[index].quantity - 1, price: wishList[index].unitPrice * (wishList[index].quantity - 1)
    }
    this.setState({
      wishList: wishList
    })
  }
  removeItemHandler = (id) =>{
    this.setState(state => ({
      wishList: state.wishList.filter(item => item.id !== id)
    }))
  }
  handleSearch = (event) =>{
    let target = event.target.value
    let products = this.state.products;
   // let history = useHistory();
    

    if (target.trim() === '') products = this.state.unfilteredProducts
    
    else {
     // history.push(`search/${target}`)
        products = products.filter(product => product.productname.toLowerCase().indexOf(target.toLowerCase()) !== -1)
    }
    this.setState({input: target, products: products})
  }



  render(){
    return (
      <Router>
      <Header handleSearch = {this.handleSearch} value = {this.state.input} />
  
      <Switch>
      <Route exact path='/'>
      <Home wishList = {this.state.wishList} click = {this.addToWishList} products = {this.state.products}/>
      </Route>
  
      <Route exact path='/signin'>
      <Suspense fallback={<div>Loading...</div>}>
      <Signin/>
      </Suspense>
      </Route>
  
      <Route exact path='/signup'>
      <Suspense fallback={<div>Loading...</div>}>
      <Signup/>
      </Suspense>
      </Route>
  
      <Route exact path='/UserCart'>
      <Suspense fallback={<div>Loading...</div>}>
      <UserCart wishList= {this.state.wishList} decrease = {this.decreaseQuantity} increase = {this.increaseQuantity} remove = {this.removeItemHandler}/>
      </Suspense>
      </Route>

      <Route path='/Productdeets/:productId'>
      <Suspense fallback={<div>Loading...</div>}>
      <Productdeets data={PRODUCTDATA} click = {this.addToWishList}/>
      </Suspense>
      </Route>

      </Switch>
  
      </Router>
    );
  }
  
}

export default App;
