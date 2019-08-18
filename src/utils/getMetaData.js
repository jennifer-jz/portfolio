import { homeTitle } from '../shared/constants';

function getMetaData (props) {
  const { title, description, keywords } = props;
  const meta = {
    title: `${title} - ${homeTitle}`,
    description,
    meta: {
      name: {
        keywords,
      }
    }
  };
  return meta;
}

export { getMetaData };
