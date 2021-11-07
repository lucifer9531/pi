/**
 * @desc: 选择套件的开发环境
 * @author: IRIS
 */
import SwitchEnv from "../core/switchEnv";

const initSwitch = new SwitchEnv();

export default async () => {
  await initSwitch.start();
};
