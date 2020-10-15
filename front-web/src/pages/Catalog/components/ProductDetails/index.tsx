import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../../../core/assets/images/arrow.svg';
import ProductPrice from '../../../../core/components/ProductPrice';
import { Product } from '../../../../core/types/Product';
import { makeRequest } from '../../../../core/utils/request';
import './styles.scss';

type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<ParamsType>();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        makeRequest({ url: `/products/${productId}` })
            .then(response => setProduct(response.data));
    }, [productId]);

    return (
        <div className="product-details-container">
            <div className="card-base bd-radius-20 product-details">

                <Link to="/products" className="product-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">Voltar</h1>
                </Link>

                <div className="row">
                    <div className="col-6 pr-5">
                        <div className="prodcut-details-card bd-radius-20 text-center">
                            <img src={product?.imgUrl} alt={product?.name} className="product-details-image" />
                        </div>

                        <h1 className="product-details-name">
                            {product?.name}
                        </h1>

                        { product?.price && <ProductPrice price={product?.price} /> }
                    </div>

                    <div className="col-6 prodcut-details-card bd-radius-20">
                        <h1 className="product-description-title">Descrição do Produto</h1>

                        <p className="product-description-text">
                            {product?.description}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;