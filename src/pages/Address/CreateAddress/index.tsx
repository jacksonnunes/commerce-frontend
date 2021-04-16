import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiCheckSquare } from 'react-icons/fi';
import * as Yup from 'yup';

import api from '../../../services/api';

import { useToast } from '../../../hooks/toast';
import Button from '../../../components/Button';
import WhiteInput from '../../../components/Input/WhiteInput';
import getValidationErrors from '../../../utils/getValidationErrors';

import { Container, Content } from './styles';

interface AddressFormData {
  street: string;
  address_number: number;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

const CreateAddress: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: AddressFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          street: Yup.string().required(),
          address_number: Yup.number().required(),
          complement: Yup.string(),
          neighborhood: Yup.string().required(),
          city: Yup.string().required(),
          state: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/addresses', data);

        history.goBack();

        addToast({
          type: 'success',
          title: 'Endereço cadastrado com sucesso.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastramento',
          description:
            'Ocorreu um erro ao cadastrar seu endereço, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <>
      <Container>
        <Content>
          <h2>Cadastrar endereço</h2>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <WhiteInput name="street" placeholder="Endereço" />
            <WhiteInput name="address_number" placeholder="n°" />
            <WhiteInput name="complement" placeholder="Complemento" />
            <WhiteInput name="neighborhood" placeholder="Bairro" />
            <WhiteInput
              name="city"
              placeholder="Cidade"
              value="Quixadá"
              readOnly
            />
            <WhiteInput name="state" placeholder="Estado" value="CE" readOnly />

            <Button type="submit">
              Cadastrar
              <FiCheckSquare />
            </Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default CreateAddress;
