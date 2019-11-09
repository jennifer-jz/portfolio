export default `
  .education-history {
    margin-left:15px;
		margin-bottom: 10px;
  }
  .courses {
    margin-left:15px;
    margin-bottom: 10px;

    > div {
      margin-bottom: 10px;

      i {
        margin-right: 10px;
        font-size: 1.2rem;
        transform: translate(0, 0.1rem);
      }

      a {
        font-weight: normal;
      }

      > span {
        display:inline-block;
        margin-right: 5px;

        &.active a {
          font-weight: bold;
        }

        &::after {
          content: "; ";
        }
      }
    }
  }
`;