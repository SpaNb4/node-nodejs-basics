import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const getDirectoryAbsolutePath = (metaUrl) => {
  const __filename = fileURLToPath(metaUrl);
  const __dirname = path.dirname(__filename);

  return __dirname;
};
