import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FeedbackButton = styled.button`
  padding: 5px;
  font-size: 20px;
  border-radius: 10px;
  :active {
    background-color: gray;
  }
`;
