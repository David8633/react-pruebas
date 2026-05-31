export const ProductItem = ({ products,onToggleButton }) => {

    const {id,name,price,category,stock,description,isOferted}  = products;

    return (<>

        <div className="card shadow-sm">
            <div className="card-body">

                <h5 className="card-title mb-3">Producto</h5>
                <p className="card-text">
                    <strong>Nombre:</strong>{name}
                </p>

                <p className="card-text">
                    <strong>Precio:</strong>{price}
                </p>

                <p className="card-text">
                    <strong>Categoría:</strong>{category}
                </p>

                <p className="card-text">
                    <strong>Stock:</strong>{stock}
                </p>

                <p className="card-text">
                    <strong>Descripción:</strong>{description}
                </p>

                {isOferted&&
                <p className="card-text">
                    <strong>ESTA EN OFERTA: </strong>old price {price}, oferta: {price - price*0.2}
                </p>
                }

                <button onClick={() => onToggleButton(id)}>Aplicar oferta</button>
            </div>
        </div>


    </>);
}