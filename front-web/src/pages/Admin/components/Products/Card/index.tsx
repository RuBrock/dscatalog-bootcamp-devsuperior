import ProductPrice from 'core/components/ProductPrice';
import { Product } from 'core/types/Product';
import React from 'react';
import './styles.scss'

type Props = {
    product: Product;
}

const Card = ({ product }: Props) => {
    return (
        <div className="card-base bd-radius-10 product-card-admin">
            <div className="row">

                <div className="col-2 text-center border-right py-3">
                    <img 
                        src={product.imgUrl}
                        alt={product.name}
                        className="product-card-image-admin"
                    />
                </div>

                <div className="col-7 py-3">
                    <h3 className="product-card-name-admin">
                        {product.name}
                    </h3>
                    
                    <ProductPrice price={product.price}/>

                    <div>
                        {
                            product.categories.map(category => (
                                <span className="badge badge-pill badge-secondary mr-2">
                                    {category.name}
                                </span>
                            ))
                        }
                    </div>
                </div>

                <div className="col-3 pt-3 pr-5">
                    <button 
                        type="button" 
                        className="btn btn-outline-secondary btn-block btn-edit bd-radius-10 mb-3 font-weight-bold"
                    >
                        EDITAR
                    </button>

                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-block bd-radius-10 font-weight-bold"
                    >
                        EXCLUIR
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Card;