import React from 'react';
import {
  FiCheckSquare,
  FiClipboard,
  FiDollarSign,
  FiEdit,
  FiLayers,
  FiStar,
} from 'react-icons/fi';
import { Form } from '@unform/web';

import Button from '../Button';
import Input from '../Input';

import { Container, Content } from './styles';

interface ProductFormProps {
  isShown: boolean;
}

const ProductForm: React.FC<ProductFormProps> = ({ isShown, ...rest }) => {
  return (
    <Container isShown={isShown} {...rest}>
      <Content>
        <h1>Cadastrar novo produto</h1>
        <Form
          onSubmit={() => {
            console.log();
          }}
        >
          <Input
            name="product_category_id"
            icon={FiLayers}
            placeholder="Categoria"
          />
          <Input name="name" icon={FiStar} placeholder="Nome" />
          <Input name="description" icon={FiEdit} placeholder="Descrição" />
          <Input
            name="available_quantity"
            icon={FiCheckSquare}
            placeholder="Quantidade disponível"
          />
          <Input
            name="price"
            icon={FiDollarSign}
            type="currency"
            placeholder="Valor unitário"
          />
          <Button>
            <FiClipboard />
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default ProductForm;
