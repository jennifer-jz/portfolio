import isReactProp from 'is-react-prop';

const filterNonHtmlProps = (props) => {
  const reactProps = {};
  for(const key in props) {
    if (isReactProp(key)) {
      reactProps[key] = props[key];
    }
  }

  return reactProps;
};

export default filterNonHtmlProps;
