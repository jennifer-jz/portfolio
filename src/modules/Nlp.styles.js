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

  .nlp-product-demo {
    .panel-body {
        padding: 15px 0;
    }
    .demos {
        > div {
            margin-top: 0;
            padding: 0 7.5px;
  
            &:first-child {
                padding-left: 15px;
            }
            &:last-child {
                padding-right: 15px;
            }
        }
    }
  }

`;