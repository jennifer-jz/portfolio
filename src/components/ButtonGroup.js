import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  > button:not(:last-child) {
    margin-right: 5px;
  } 
`;

export default ButtonGroup;