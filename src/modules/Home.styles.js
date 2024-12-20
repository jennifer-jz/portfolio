import { BOLD_FONT_COLOR } from 'shared/styles';

export default `
  .intro {
    padding: 0 15px;
    margin-bottom: 20px;

    .name {
        display: flex;
        padding: 0 15px;
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
    .list-group {
      margin: 12px;
    }

    .list-group-item {
      display: list-item;
      border: none;
      font-weight: bold;
      color: ${BOLD_FONT_COLOR};
      padding: 7px;

      .badge {
        margin: 2px 3px;
      }

      a {
        margin: 18px;
      }
    }
  }

  .product-demo .panel .panel-body {
    overflow-x: auto;
    padding: 15px 0;

    .demos {
      display: flex;
      flex-wrap: nowrap;
      padding: 0;
  
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