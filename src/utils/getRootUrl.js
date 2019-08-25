import path from 'path';
import { rootDirectory } from 'src/siteConfig.json';

export const getRootUrl = (url) => {
  if (!rootDirectory || !url || !url.startsWith("/")) {
    return url;
  }

  let rootUrl = url;
  if (!new RegExp(`^${rootDirectory}`).test(url)) {
    rootUrl = path.join(rootDirectory, url);
  }

  return rootUrl;
};
