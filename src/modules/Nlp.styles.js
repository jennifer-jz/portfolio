export default `
  .panel-body > p {
      position: relative;
      margin-bottom: 1.2rem;
  }
  .projects {
    p .keywords {
      position: absolute;
      top: -20px;
      left: 125px;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    p:hover {
      .keywords {
        opacity: 1;
      }
    }
  }
`;