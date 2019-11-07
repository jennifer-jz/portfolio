export default `
  margin-bottom: 0;
  border-radius: 0;
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:1000;
  padding-bottom: 0;

  background-color: #bbb !important;

  *:focus {
    outline: none;
  }
  border: none;

  .logo {
    position: absolute;
    top: 11px;
    left: 20px;
  }

  .MuiTabs-root {
      max-width: calc(100% - 180px);
      margin: 0 auto;
  }

  .MuiSvgIcon-root {
      font-size: 18px;
  }

  .MuiTab-wrapper {
    font-size: 13px;
    font-weight: bold;
  }
`;