import { BLUE, DARK_GRAY } from 'shared/styles';

export default `
    .demos {
        div.row > div {
            margin: 0 auto 30px;
        }
    }

    ul#myBtnContainer {
        padding: 0;
        position: sticky;
        top: 100px;
        left: 0;
        width: 100%;
        min-width: 210px;
        z-index: 10;
        list-style-type: none;

        li {
            border: none;
            outline: none;
            padding: 8px 16px;
            cursor: pointer;
            text-align: end;
            color: ${DARK_GRAY};
            > i {
                font-size: 1.2rem;
                margin-right: 10px;
            }
        }

        li:hover, li.active {
            color: ${BLUE};
            box-shadow: none;
            font-weight: bold;
        }
    }

    @media (max-width: 960px) {
        ul#myBtnContainer {
            display: flex;
            flex-wrap: wrap;
            padding: 0 30px;
        }
        
        .col-md-9 {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
`;
