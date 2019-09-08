import { BOLD_FONT_COLOR } from 'shared/styles';
export default `
  .intro {
    padding: 0 15px;
    margin-bottom: 20px;

    .name {
        display: flex;
    }

    h4 {
        padding-left: 0;
        margin-right: 20px;
    }

    a {
        margin-left: 5px;
    }
  }

  .panel {
    .list-group-item {
      border: none;
      font-weight: bold;
      color: ${BOLD_FONT_COLOR};
      padding: 7px 5px;

      .badge {
        float: right;
        margin-left:5px;
        margin-right:0 !important;
      }
    }
  }
`;