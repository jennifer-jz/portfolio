import { BOLD_FONT_COLOR } from 'shared/styles';

export default `
  .intro {
    padding: 0 15px;
    margin-bottom: 20px;

    .name {
        display: flex;
    }

    .description {
        padding-left: 15px;
        line-height: 1.5rem;
        margin: .5rem 0 1rem;
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
      padding: 7px 5px 7px 0;

      .badge {
        float: right;
        margin-left:5px;
        margin-right:0 !important;
      }
    }
  }

  .product-demo .panel .panel-body {
    overflow-x: scroll;
    padding: 15px 0;

    .demos {
      display: flex;
  
      > div {
        margin-top: 0;
        padding: 0 7.5px;

        &:first-child {
          padding-left: 15px;
        }
        &:last-child {
          padding-right: 15px;
        }
  
        // &:first-child {
        //   margin-left: 0;
        // }
      }
    }
  }


`;