/**
 * 快速安装npm包
 */

import npm from "@pi/npm";
import yargs from "yargs";

const argv = yargs.help(false).argv;

export default async function() {
  const modules = argv._.slice(1);
  // @ts-ignore
  delete argv._;
  // @ts-ignore
  delete argv.$0;

  if (modules.length) {
    await npm.install(modules, argv);
  } else {
    await npm.installDependencies(argv);
  }
}
