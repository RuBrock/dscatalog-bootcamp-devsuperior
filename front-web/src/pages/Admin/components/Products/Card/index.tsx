import React from 'react';
import { Link } from 'react-router-dom';
import ProductPrice from 'core/components/ProductPrice';
import { Product } from 'core/types/Product';
import './styles.scss'

type Props = {
    product: Product;
    onRemove: (productId: number) => void;
}

const Card = ({ product, onRemove }: Props) => {
    return (
        <div className="card-base product-card-admin">

                <div className="text-center py-3 border-product-img">
                    <img 
                        src={product.imgUrl}
                        alt={product.name}
                        className="product-card-image-admin"
                    />
                </div>

                <div className="card-content">
                    <h3 className="product-card-name-admin">
                        {product.name}
                    </h3>
                    
                    <ProductPrice price={product.price}/>

                    <div>
                        {
                            product.categories.map(category => (
                                <span className="badge badge-pill badge-secondary mr-2" key={category.id}>
                                    {category.name}
                                </span>
                            ))
                        }
                    </div>
                </div>

                <div className="card-buttons-container">
                    <Link 
                        to={`/admin/products/${product.id}`}
                        type="button" 
                        className="btn btn-outline-secondary btn-block bd-radius-10 mb-3 font-weight-bold btn-card-product"
                    >
                        EDITAR
                    </Link>

                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-block bd-radius-10 font-weight-bold btn-card-product"
                        onClick={() => onRemove(product.id)}
                    >
                        EXCLUIR
                    </button>
                </div>

        </div>
    );
}

export default Card;