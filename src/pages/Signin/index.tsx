import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiAtSign, FiLock, FiLogIn, FiUserPlus } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/rivoli_golden_logo.svg';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { Background, Container, AnimationContainer } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Digite seu email.')
            .email('Digite um email válido.'),
          password: Yup.string().required('Digite sua senha.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Email ou senha incorretos.',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Background>
      <Container>
        <AnimationContainer>
          <img src={logoImg} alt="Rivoli Logo" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h2>Login</h2>

            <Input name="email" icon={FiAtSign} placeholder="Email" />
            <Input
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Password"
            />
            <Button type="submit">
              Entrar
              <FiLogIn size={26} />
            </Button>

            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Form>

          <Link to="/signup">
            <FiUserPlus size={18} />
            Criar conta
          </Link>
        </AnimationContainer>
      </Container>
    </Background>
  );
};

export default Signin;
