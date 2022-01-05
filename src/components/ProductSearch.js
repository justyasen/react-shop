import React from "react";

class ProductSearch extends React.Component{
    render() {
        return(
            <form className="product-search"> 
                <h2> Enter a product </h2> 
                <input type= "submit" required placeholder="product" />
                <button type="submit"> Search 🔍 </button>   
            </form>
        )
    }
}

export default ProductSearch; 