import { LINK_COLOR } from 'shared/styles';

export default `
  .panel-group {
    max-width: 830px;
  }
  .education-history {
    margin-left:15px;
    margin-bottom: 30px;
    padding: 0 15px;
  }
  .courses .panel-body {
    > div {
      margin-bottom: 10px;

      i {
        margin-right: 10px;
      }

      a {
        font-weight: normal;
      }

      > span {
        display:inline-block;
        margin-right: 35px;

        &.active a {
          border-bottom: 1px solid ${LINK_COLOR};
        }
      }
    }
  }
`;