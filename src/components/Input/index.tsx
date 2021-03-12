/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import InputMask from 'react-input-mask';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [mask, setMask] = useState('(99) 9999-9999');

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handlePhoneInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);

    if (inputRef.current?.value.replace('_', '').length === 14) {
      setMask('(99) 9999-9999');
    };
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={18} />}
      {name === "phone" ? (
        <InputMask
          name="phone"
          mask={mask}
          maskPlaceholder={null}
          placeholder="Telefone"
          onFocus={handleInputFocus}
          onBlur={handlePhoneInputBlur}
          onKeyUp={e => {
            if (e.currentTarget.value.replace('_', '').length === 14) {
              setMask('(99) 9999-9999');
            }
          }}
          onKeyDown={e => {
            if (e.currentTarget.value.replace('_', '').length === 14) {
              setMask('(99) 99999-9999');
            }
          }}
          defaultValue={defaultValue}
        >
          {(inputProps: void) => <input {...inputProps} ref={inputRef} />}
        </InputMask>
      ) : (
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      )}

      {error && (
        <Error title={error}>
          <FiAlertCircle size={22} color="#c53030" />
        </Error>
      )}
    </Container>
  );
};

export default Input;
