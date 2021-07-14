import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'stretch '};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  width: ${(props) => props.width || 'auto'};
`;

export default StyledFlex;
