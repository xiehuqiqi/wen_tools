// /*
//  * @Author: suwenmao shenming26@outlook.com
//  * @Date: 2024-07-02 18:27:42
//  * @LastEditors: suwenmao shenming26@outlook.com
//  * @LastEditTime: 2024-07-18 14:16:24
//  * @FilePath: \wen_tools\src\plugins\windows.ts
//  * @Description:
//  *
//  * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
//  */
// import { WebviewWindow, appWindow, getAll, getCurrent } from '@tauri-apps/api/window'
// import { relaunch, exit } from '@tauri-apps/api/process'
// import { emit, listen } from '@tauri-apps/api/event'

// import { setWin } from './windows_action'

// // 系统参数配置
// export const windowConfig = {
//     label: null,            // 窗口唯一label
//     title: '',              // 窗口标题
//     url: '',                // 路由地址url
//     width: 900,             // 窗口宽度
//     height: 640,            // 窗口高度
//     minWidth: null,         // 窗口最小宽度
//     minHeight: null,        // 窗口最小高度
//     x: null,                // 窗口相对于屏幕左侧坐标
//     y: null,                // 窗口相对于屏幕顶端坐标
//     center: true,           // 窗口居中显示
//     resizable: true,        // 是否支持缩放
//     maximized: false,       // 最大化窗口
//     decorations: false,     // 窗口是否无边框及导航条
//     alwaysOnTop: false,     // 置顶窗口
// }

// class Windows {
//     constructor() {
//         this.main = null
//     }

//     // 获取窗口
//     getWin(label) {
//         return WebviewWindow.getByLabel(label)
//     }

//     // 获取全部窗口
//     getAllWin() {
//         return getAll()
//     }

//     // 创建新窗口
//     async createWin(options) {
//         const args = Object.assign({}, windowConfig, options)

//         // 判断窗口是否存在
//         const existWin = getAll().find(w => w.label == args.label)
//         if(existWin) {
//             if(existWin.label.indexOf('main') == -1) {
//                 await existWin?.unminimize()
//                 await existWin?.setFocus()
//                 return
//             }
//             await existWin?.close()
//         }

//         // 创建窗口对象
//         let win = new WebviewWindow(args.label, args)

//         // 是否最大化
//         if(args.maximized && args.resizable) {
//             win.maximize()
//         }

//         // 窗口创建完毕/失败
//         win.once('tauri://created', async() => {
//             console.log('window create success!')
//             ...
//         })

//         win.once('tauri://error', async() => {
//             console.log('window create error!')
//         })
//     }

//     // 开启主进程监听事件
//     async listen() {
//         // 创建新窗体
//         await listen('win-create', (event) => {
//             console.log(event)
//             this.createWin(JSON.parse(event.payload))
//         })

//         // 显示窗体
//         await listen('win-show', async(event) => {
//             if(appWindow.label.indexOf('main') == -1) return
//             await appWindow.show()
//             await appWindow.unminimize()
//             await appWindow.setFocus()
//         })

//         // 隐藏窗体
//         await listen('win-hide', async(event) => {
//             if(appWindow.label.indexOf('main') == -1) return
//             await appWindow.hide()
//         })

//         // 退出应用
//         await listen('win-exit', async(event) => {
//             setWin('logout')
//             await exit()
//         })

//         // 重启应用
//         await listen('win-relaunch', async(event) => {
//             await relaunch()
//         })

//         // 主/渲染进程传参
//         await listen('win-setdata', async(event) => {
//             await emit('win-postdata', JSON.parse(event.payload))
//         })
//     }
// }

// export default Windows
