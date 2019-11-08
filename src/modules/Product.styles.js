import { BLUE, DARK_GRAY } from 'shared/styles';

export default `
    .demos {
        div.row > div {
            margin: 0 auto 30px;
        }
    }

    ul#myBtnContainer {
        padding: 0;
        position: fixed;
        top: 100px;
        left: 50px;
        z-index: 10;
        list-style-type: none;

        li {
            border: none;
            outline: none;
            padding: 8px 16px;
            cursor: pointer;
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
`;
