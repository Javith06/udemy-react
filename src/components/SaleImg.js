import saleimage from "../assets/images/sale.jpg"

function SaleImg()
{
    return(
        <div className="sale-image">

<img src={saleimage} alt="Sale Image"></img>
<div className="sale-image__offer">
    <h2>Udemy flash sale! 24 hours to save</h2>
    <p>Get the top courses just for 499.Juat one day to save but life time to learn </p>
</div>
</div>

    )
}

export default SaleImg