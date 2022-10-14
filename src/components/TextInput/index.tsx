import React, { ReactNode, useEffect } from "react";
import { TextInputProps, ViewProps } from "react-native";

import * as S from './styles';

interface ITextInputRootProps extends ViewProps {
  label?: string;
}

function TextInputRoot(props: ITextInputRootProps) {

  useEffect(() => {
    //
  }, []);

  return (
    <S.Root>
      {props.children}
    </S.Root>
  );
}

interface ITextInput extends ViewProps {
  label?: string;
}

interface ITextInputContentProps extends ITextInput { }

function TextInputContent(props: ITextInputContentProps) {
  return (
    <S.Container>
      {props.label && <S.Label>{props.label}</S.Label>}
      <S.Content {...props}>
        {props.children}
      </S.Content>
    </S.Container>
  );
}

interface ITextInputOutLinedProps extends ITextInput { }

function TextInputOutLined(props: ITextInputOutLinedProps) {
  return (
    <S.Container>
      {props.label && <S.Label>{props.label}</S.Label>}
      <S.OutLined>
        {props.children}
      </S.OutLined>
    </S.Container>
  );
}

interface ITextInputRoundedProps extends ITextInput { }

function TextInputRounded(props: ITextInputRoundedProps) {
  return (
    <S.Container>
      {props.label && <S.Label>{props.label}</S.Label>}
      <S.Rounded>
        {props.children}
      </S.Rounded>
    </S.Container>
  );
}

interface ITextInputInputProps extends TextInputProps { }

function TextInputInput(props: ITextInputInputProps) {
  return (
    <S.Input {...props} />
  );
}

function TextInputIcon() {
  return (
    <S.Icon />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Content: TextInputContent,
  OutLined: TextInputOutLined,
  Rounded: TextInputRounded,
  Input: TextInputInput,
  Icon: TextInputIcon
}