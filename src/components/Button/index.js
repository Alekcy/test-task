import styled from 'styled-components'

export const Button = styled.div`
  background: #EC174F;
  color: white;
  padding: ${props => props.padding ? props.padding : '10px'};
  text-align: center;
  cursor: pointer;
  width: ${props => props.fullWidth ? 'inherit' : 'max-content'};

  &:hover {
    background: #e43c68;
  }
`
