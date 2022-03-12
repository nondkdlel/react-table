import styled from 'styled-components';

export const FormLayout = styled.table`
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid #ddd;
  margin-bottom: 80px;

  tr {
    border-bottom: 1px solid #eee;
  }
  th, td {
    padding: 12px 0;
  }
  th {
    background: #f9f9f9;
  }
  td {
    padding: 12px 20px;
  }
  input, textarea {
    width: 100%;
    outline: none;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  textarea {
    height: 190px;
  }
`

export const BtnArea = styled.div`
  text-align: right;
  padding: 30px 0 0 10px;
  font-size: 0;
  button{
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    padding: 7px 12px;
    border-radius: 4px;
    font-weight: 500;
  }
`;

export const AlignCenter = styled.div`
  text-align: center;
`
