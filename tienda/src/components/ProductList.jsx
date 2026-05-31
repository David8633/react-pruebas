
import { ProductItem } from "./ProductITem";

export const ProductList = ({products,onToggleButton}) => {
    return(<>
    {products.map(product => <ProductItem key={product.id} products={product} onToggleButton={onToggleButton} />)}
    </>);
}