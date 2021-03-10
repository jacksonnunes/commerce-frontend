import React, { useCallback, useMemo, useState } from 'react';
import { FiMinus, FiPlus, FiShoppingCart } from 'react-icons/fi';

import Button from '../../components/Button';
import formatValue from '../../utils/formatValue';
import { useProductDetails } from '../../hooks/productDetails';
import { useCart } from '../../hooks/cart';

import { Container, Overlay, Content, Section } from './styles';

interface Product {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
}

interface ProductDetailsProps {
  product: Product;
  isShown: boolean;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  isShown,
  ...rest
}) => {
  const { removeProductDetails } = useProductDetails();
  const { addToCart } = useCart();

  const [productQuantity, setProductQuantity] = useState<number>(1);

  const handleIncrementProduct = useCallback(() => {
    if (productQuantity < product.quantity) {
      setProductQuantity(productQuantity + 1);
    }
  }, [productQuantity, product.quantity]);

  const handleDecrementProduct = useCallback(() => {
    if (productQuantity === 1) {
      return;
    }

    setProductQuantity(productQuantity - 1);
  }, [productQuantity]);

  const handleSubmit = useCallback(() => {
    addToCart({ ...product, quantity: productQuantity });
    removeProductDetails();
  }, [addToCart, removeProductDetails, product, productQuantity]);

  const productTotal = useMemo(() => {
    return formatValue(product.price * productQuantity);
  }, [product.price, productQuantity]);

  return (
    <Container isShown={isShown} {...rest}>
      <Overlay
        onClick={() => {
          removeProductDetails();
          setProductQuantity(1);
        }}
      />
      <Content>
        <img src={`http://localhost:3333/files/${product.image}`} alt="" />
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>

          <Section>
            <div>
              <p>Qtde.</p>
              <span>
                <FiMinus size={24} onClick={handleDecrementProduct} />
                <p>{productQuantity}</p>
                <FiPlus size={24} onClick={handleIncrementProduct} />
              </span>
            </div>

            <h3>{productTotal}</h3>
          </Section>

          <Button onClick={handleSubmit}>
            <FiShoppingCart size={24} />
            Comprar
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default ProductDetails;
