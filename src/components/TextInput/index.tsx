import React, { ReactNode } from "react";
import { TextInputProps, TextProps } from "react-native";

import * as S from './styles';

interface ITextInputRootProps {
  children: ReactNode;
  label?: string;
}

function TextInputRoot(props: ITextInputRootProps) {
  return (
    <S.Container>
      {props.label && <S.Label>{props.label}</S.Label>}
      <S.Root>
        {props.children}
      </S.Root>
    </S.Container>
  );
}

function TextInputContainer(props: ITextInputRootProps) {
  return (
    <S.Container>
      {props.label && <S.Label>{props.label}</S.Label>}
      <S.Content>
        {props.children}
      </S.Content>
    </S.Container>
  );
}

function TextInputOutline(props: ITextInputRootProps) {
  return (
    <S.Container>
      {props.label && <S.Label>{props.label}</S.Label>}
      <S.Outline>
        {props.children}
      </S.Outline>
    </S.Container>
  );
}

interface ITextInputInputProps extends TextInputProps { }

function TextInputInput(props: ITextInputInputProps) {
  return (
    <S.Input {...props} />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Container: TextInputContainer,
  Outline: TextInputOutline,
  Input: TextInputInput,
}