import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { OptionTypeBase, Props as SelectProps } from 'react-select';
import { useField } from '@unform/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { Container, CustomSelect, Error } from './styles';

interface SelectInputProps extends SelectProps<OptionTypeBase> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const customStyles = {
  option: (provided: CSSProperties) => ({
    ...provided,
    color: '#242424',
  }),
  control: (provided: CSSProperties) => ({
    ...provided,
    color: '#242424',
    backgroundColor: '#242424',
    border: 0,
    boxShadow: 'none',
  }),
  singleValue: (provided: CSSProperties) => ({
    ...provided,
    color: '#ececec',
  }),
  menu: (provided: CSSProperties) => ({
    ...provided,
    backgroundColor: '#ececec',
    borderRadius: 5,
  }),
};

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }
          return ref.select.state.value.map(
            (option: OptionTypeBase) => option.value,
          );
        }
        if (!ref.select.state.value) {
          return '';
        }
        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={18} />}
      <CustomSelect
        defaultInputValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        className="select"
        styles={customStyles}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle size={22} color="#c53030" />
        </Error>
      )}
    </Container>
  );
};

export default SelectInput;
