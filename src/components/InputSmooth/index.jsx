import { useState } from "react";
import React from "react";
import { InputContainer, Input, Placeholder } from "./style";

const InputSmooth = ({placeholder, value, onChangeText}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <InputContainer>
      <Input
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused}
      />
      <Placeholder isFocused={isFocused}>{placeholder}</Placeholder>
    </InputContainer>
  );
};

export default InputSmooth;
