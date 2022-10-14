import styled from "styled-components/native";

export const Root = styled.View`
  width: 100%;
`;

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled.View`
  width: 100%;

  flex-direction: row;

  background-color: #fff;

  border-bottom-width: 1px;
  border-bottom-color: #c9c9c9;

  margin-top: 4px;
`;

export const OutLined = styled.View`
  width: 100%;

  flex-direction: row;

  background-color: #fff;

  border-radius: 5px;
  border-width: 1px;
  border-color: #c9c9c9;

  margin-top: 4px;
`;

export const Rounded = styled.View`
  width: 100%;

  flex-direction: row;

  background-color: #fff;

  border-radius: 30px;
  border-width: 1px;
  border-color: #c9c9c9;

  margin-top: 4px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 10px 8px;
`;

export const Label = styled.Text``;

export const Icon = styled.View`
  width: 48px;
  height: 100%;

  background-color: gray;
`;