import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiMinus, FiPlus, FiShoppingCart } from 'react-icons/fi';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import { Container, Content, Section } from './styles';

interface Product {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
}

interface ParamsDTO {
  id: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<ParamsDTO>();

  const [product, setProduct] = useState<Product>({} as Product);
  const [productQuantity, setProductQuantity] = useState<number>(1);

  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const response = await api.get<Product>(`/products/${id}`);

      const prod = response.data;

      setProduct(prod);
    }

    loadProduct();
  }, [id]);

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

  const productTotal = useMemo(() => {
    return formatValue(product.price * productQuantity);
  }, [product.price, productQuantity]);

  return (
    <Container>
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

          <Button>
            <FiShoppingCart size={24} />
            Comprar
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default ProductDetails;
