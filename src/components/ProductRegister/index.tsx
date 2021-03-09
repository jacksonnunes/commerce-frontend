import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  FiCheckSquare,
  FiClipboard,
  FiDollarSign,
  FiEdit,
  FiLayers,
  FiStar,
  FiX,
} from 'react-icons/fi';
import { OptionTypeBase } from 'react-select';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useProductForm } from '../../hooks/productRegister';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../Button';
import Input from '../Input';
import SelectInput from '../SelectInput';

import noImage from '../../assets/images/no-image.png';

import { Container, Content } from './styles';

interface Category {
  id: string;
  category_name: string;
}

interface SelectedOption {
  value: string;
  label: string;
}

interface RegisterProductFormData {
  product_category_id: string | undefined;
  name: string;
  description: string;
  available_quantity: number;
  price: number;
}

interface ProductRegisterProps {
  isShown: boolean;
}

const ProductRegister: React.FC<ProductRegisterProps> = ({
  isShown,
  ...rest
}) => {
  const formRef = useRef<FormHandles>(null);
  const [options, setOptions] = useState<OptionTypeBase[]>([]);
  const [selectedOption, setSelectedOption] = useState<SelectedOption>();

  const { removeProductRegister } = useProductForm();

  const getCategories = useCallback(async () => {
    const response = await api.get<Category[]>('/categories');
    const categories = response.data;

    const optionsData = categories.map(category => {
      return {
        value: category.id,
        label: category.category_name,
      };
    });

    setOptions(optionsData);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleSelectedOption = useCallback(e => {
    setSelectedOption({ value: e.value, label: e.label });
  }, []);

  const handleSubmit = useCallback(
    async ({
      product_category_id,
      name,
      description,
      available_quantity,
      price,
    }: RegisterProductFormData) => {
      // eslint-disable-next-line no-param-reassign
      product_category_id = selectedOption?.value;

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          product_category_id: Yup.string().required('Selecione uma categoria'),
          name: Yup.string().required('Digite um nome para o produto'),
          description: Yup.string().required(
            'Digite uma descrição para o produto',
          ),
          available_quantity: Yup.number().min(1, 'A quantidade mínima é 1'),
          price: Yup.number().min(0.01, 'Digite um valor válido'),
        });

        await schema.validate(
          {
            product_category_id,
            name,
            description,
            available_quantity,
            price,
          },
          {
            abortEarly: false,
          },
        );

        await api.post('/products', {
          product_category_id,
          name,
          description,
          available_quantity,
          price,
        });

        removeProductRegister();

        console.log(product_category_id);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        console.log(product_category_id);
      }
    },
    [removeProductRegister, selectedOption?.value],
  );

  return (
    <Container isShown={isShown} {...rest}>
      <Content isShown={isShown}>
        <FiX
          size={35}
          onClick={() => {
            removeProductRegister();
          }}
        />
        <h1>Cadastrar novo produto</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <SelectInput
            name="product_category_id"
            value={selectedOption}
            onChange={handleSelectedOption}
            loadOptions={getCategories}
            icon={FiLayers}
            options={options}
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
          <Button type="submit">
            <FiClipboard />
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default ProductRegister;
