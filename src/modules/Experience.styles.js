export default `
  table {
    max-width:700px;
    margin-left:60px;

    td {
      padding:4px 10px;
      vertical-align:top;

      &:first-child {
        width:70px;
      }
    }

    @media (max-width: 576px) {
      margin-left: 0;

      td:first-child {
        width: 0;
      }
    }

    span {
      font-weight: bold;
      padding-left: 0px;
    }

    a {
      margin-right: 5px;
    }
  }
`;