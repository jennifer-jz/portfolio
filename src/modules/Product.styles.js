export default `
    .demos {
        div.row > div {
            margin: 0 auto 30px;
        }
    }

    span.MuiTab-wrapper {
        flex-direction: row;
        justify-content: flex-end;
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
