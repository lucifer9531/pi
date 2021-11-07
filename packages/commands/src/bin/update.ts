/**
 * @desc: 更新模块
 * @author: IRIS
 */

import module from "@pi/module";

export default async function(cliArgs: string[]) {
  const name = cliArgs.pop();
  await module.update(name);
}
