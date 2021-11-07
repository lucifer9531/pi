/**
 * @desc: 切换语言环境
 * @author: IRIS
 */

import Intl from "@pi/intl";
import logs from "@pi/log";
// @ts-ignore
import inquirer, { Answer } from "inquirer";
import message from "../locale";

const log = logs("core-commands");

/**
 * 初始化环境
 */
export default async () => {
  let intl = new Intl(message);
  const divider = "-    ";
  const answers: Answer = await inquirer.prompt([
    {
      type: "list",
      name: "name",
      message: intl.get("switchLocaleTips"),
      choices: [
        {
          name: `zh_CN    ${divider}中文`,
          value: "zh_CN"
        },
        {
          name: `en_US    ${divider}英文`,
          value: "en_US"
        }
      ]
    }
  ]);

  // 设置env环境
  intl.setLocale(answers.name);

  intl = new Intl(message);
  log.success(intl.get("initLocalSuccess"));
};
