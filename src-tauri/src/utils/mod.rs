/*
 * @Author: suwenmao shenming26@outlook.com
 * @Date: 2024-07-04 14:56:33
 * @LastEditors: suwenmao shenming26@outlook.com
 * @LastEditTime: 2024-07-10 14:38:45
 * @FilePath: \wen_tools\src-tauri\src\utils\mod.rs
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
use tauri::{Manager, Runtime};
use window_shadows::set_shadow;
 
pub fn set_window_shadow<R: Runtime>(wen_tools: &tauri::App<R>) {
  let window = wen_tools.get_window("main").unwrap();
  set_shadow(&window, true).expect("Unsupported platform!");
}
