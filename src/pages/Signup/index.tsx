import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  FiArrowLeft,
  FiAtSign,
  FiLock,
  FiPhone,
  FiUser,
  FiUserPlus,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { Background, Container, Content, AnimationContainer } from './styles';

interface SignUpFormData {
  name: string;
  phone: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().min(
            3,
            'O nome deve conter, no mínimo, 3 caracteres',
          ),
          phone: Yup.string()
            .min(14, 'Digite um telefone válido.')
            .max(15, 'Digite um telefone válido.'),
          email: Yup.string()
            .required('Digite seu email.')
            .email('Digite um email válido.'),
          password: Yup.string().min(
            6,
            'Sua senha deve conter, pelo menos, 6 caracteres.',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso!',
          description: 'Você já pode fazer seu login.',
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
            'Ocorreu um erro ao realizar seu cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Background>
      <Container>
        <Link to="/">
          <FiArrowLeft size={34} />
        </Link>

        <Content>
          <AnimationContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h2>Crie uma conta</h2>
              <Input name="name" icon={FiUser} placeholder="Nome" />
              <Input name="phone" icon={FiPhone} placeholder="Telefone" />
              <Input name="email" icon={FiAtSign} placeholder="Email" />
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />
              <Button type="submit">
                Criar conta
                <FiUserPlus size={26} />
              </Button>
            </Form>
          </AnimationContainer>
        </Content>
      </Container>
    </Background>
  );
};

export default Signup;
