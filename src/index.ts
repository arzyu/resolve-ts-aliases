import { resolve, dirname} from "path";

export const resolveTsAliases = (tsconfigPath: string) => {
  const { baseUrl, paths } = require(tsconfigPath).compilerOptions;
  const pathPrefix = resolve(dirname(tsconfigPath), baseUrl);
  const aliases: { [key: string]: string } = {};

  Object.keys(paths).forEach((item) => {
    const name = item.replace("/*", "");
    const value = resolve(pathPrefix, paths[item][0].replace("/*", ""));

    aliases[name] = value;
  });

  return aliases;
};
