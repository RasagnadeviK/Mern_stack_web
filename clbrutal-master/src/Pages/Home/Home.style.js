import styled from 'styled-components';

export const Section = styled.section`
  padding: 1em 0;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  input[type='date'],
  input[type='text'],
  input[type='number'] {
    appearance: none;
    /* color: #95a5a6; */
    font-size: 1.3rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background: #fff;
    padding: 5px;
    visibility: visible;
    width: 100%;
    outline: none;
    border-radius: 0.3em;
    margin: 0.5em 0 1.5em;
  }
  input[type='date'],
  focus {
    /* border: 1px solid #719ece; */
    box-shadow: none;
  }

  button {
    background: rgb(125, 139, 156);
    color: white;
    padding: 0.5em 1em;
    border-radius: 0.3em;
    font-weight: 700;
    border: none;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 0.5em;
`;
