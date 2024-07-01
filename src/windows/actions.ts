/**
 * 处理渲染器进程到主进程的异步通信
 */

import { WebviewWindow } from '@tauri-apps/api/window'
import { emit } from '@tauri-apps/api/event'

/**
 * @desc 创建新窗口
 */
export async function createWin(args) {
  await emit('win-create', args)
}

/**
 * @desc 获取窗口
 * @param label
 */
export async function getWin(label) {
  return WebviewWindow.getByLabel(label);
}

/**
 * @desc 设置窗口
 * @param type {string} 'show'|'hide'|'close'|'min'|'max'|'max2min'|'exit'|'relaunch'
 */
export async function setWin(type) {
  await emit('win-' + type)
}

