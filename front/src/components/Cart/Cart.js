import React from "react"
import { Button } from "react-bootstrap"
import { connect } from "react-redux"
import { Link } from "react-router-dom";
<Link to="/formular">Formularz</Link>

function Cart (props) {
    return(
        <>
        <div>Jeszcze nie dodałeś nic do koszyka</div>
        <Button variant="secondary"><Link to="/formular">Zamów</Link></Button>
</>
    )
}


const mapStateToProps = state => ({
    cart:state.cart
  })
  
export default connect (mapStateToProps,{})(Cart)