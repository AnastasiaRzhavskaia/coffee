function Shop({shopComponent}) {
    return (
        <div className="products">
            {shopComponent.map((element => {
                const {id, item, weight, price, image, flavor} = element;
                return (
                    <div className="product-card" key={id}>
                        <img className="img-product" src={image} width="380px" alt="item" />
                        <div className="product-info">
                            <h2>{item}</h2>
                            <hr />
                            <h3><b>Balení:</b> {weight}g</h3>
                            <h3><b>Cena:</b> {price}Kč</h3>
                            <h3><b>Chut':</b> <i>{flavor}</i></h3>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Shop;