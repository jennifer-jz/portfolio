export default `
  .education-history {
    margin-left:15px;
		margin-bottom: 10px;
  }
  .courses {
    margin-left:15px;
    margin-bottom: 10px;

    i {
      margin-right: 10px;
    }
    a {
      font-weight: normal;
    }
    p.active a {
      font-weight: bold;
    }
    p::after {
      content: "; ";
    }

    > div > p {
      display:inline-block;
      margin-right: 5px;
    }
  }
`;