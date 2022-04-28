import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import {
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { FieldErrors } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldErrors | null;
  icon?: IconType;
  placeholder?: string;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "#500619",
  default: "#500619",
  focus: "#500619",
  filled: "#500619",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error = null, name, icon: Icon, label, placeholder, ...rest },
  ref
) => {
  const [variation, setVariation] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel mb="1px" color="#500613" paddingLeft="10px">
          {label}
        </FormLabel>
      )}

      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement
            color={inputVariation[variation]}
            mt="2px"
            paddingLeft="10px"
          >
            <Icon />
          </InputLeftElement>
        )}

        <ChakraInput
          name={name}
          placeholder={placeholder}
          {...rest}
          onFocus={handleInputFocus}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          onBlurCapture={handleInputBlur}
          color={inputVariation[variation]}
          borderColor={inputVariation[variation]}
          bg="#9F3548"
          variant="outline"
          _hover={{ bgColor: "#9F3548", borderColor: "#500613" }}
          _placeholder={{
            color: "#500613",
            fontSize: "10px",
            paddingLeft: "2px",
          }}
          size="12px"
          h="40px"
          ref={ref}
        />

        {!!error && (
          <FormErrorMessage
            w="95%"
            fontSize="0.8rem"
            justifyContent="flex-end"
            textAlign="right"
            mt="1px"
          >
            {error.message}
          </FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
