import {
  homeTitle,
  homeDescription,
  homeKeywords,
} from 'shared/metaData';

function getMetaData (props) {
  const { title, description, keywords } = props;

  const meta = {
    title: `${title} - ${homeTitle}`,
    description: `${description} - ${homeDescription}`,
    meta: {
      name: {
        keywords: `${keywords} ${homeKeywords}`,
      }
    }
  };
  return meta;
}

export { getMetaData };
