/*
 * @Author: suwenmao shenming26@outlook.com
 * @Date: 2024-07-24 10:45:43
 * @LastEditors: suwenmao shenming26@outlook.com
 * @LastEditTime: 2024-07-25 22:10:50
 * @FilePath: \wen_tools\src-tauri\src\lib.rs
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

 
// use tauri_plugin_autostart::MacosLauncher;
// use tauri_plugin_log::{Target, TargetKind};
// use tauri::tray::TrayIconBuilder;
// use tauri::{webview::WebviewWindowBuilder, WebviewUrl};
// use tauri_plugin_autostart::init as tauri_plugin_autostart_init;
// use tauri_plugin_cli::init as tauri_plugin_cli_init;
// use tauri_plugin_clipboard_manager::init as tauri_plugin_clipboard_manager_init;
// use tauri_plugin_dialog::init as tauri_plugin_dialog_init;
// use tauri_plugin_fs::init as tauri_plugin_fs_init;
// use tauri_plugin_http::init as tauri_plugin_http_init;
// use tauri_plugin_notification::init as tauri_plugin_notification_init;
// use tauri_plugin_os::init as tauri_plugin_os_init;
// use tauri_plugin_positioner::init as tauri_plugin_positioner_init;
// use tauri_plugin_shell::init as tauri_plugin_shell_init;
// use tauri_plugin_persisted_scope::init as tauri_plugin_persisted_scope_init;
// use tauri_plugin_barcode_scanner::init as tauri_plugin_barcode_scanner_init;

use tauri_plugin_os::init as tauri_plugin_os_init;
use tauri_plugin_fs::init as tauri_plugin_fs_init;



#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  let context = tauri::generate_context!();
  // let port: u16 = 9527;

  tauri::Builder::default()
    .plugin(tauri_plugin_os_init())
    .plugin(tauri_plugin_fs_init())
    // .plugin(tauri_plugin_autostart_init(
    //   MacosLauncher::LaunchAgent, 
    //   Some(vec!["--flag1", "--flag2"])
    //  /* arbitrary number of args to pass to your app */))
    // .plugin(tauri_plugin_cli_init())
    // .plugin(tauri_plugin_barcode_scanner_init())
    // .plugin(tauri_plugin_clipboard_manager_init())
    // .plugin(tauri_plugin_deep_link::init())
    // .plugin(tauri_plugin_dialog_init())
    // .plugin(tauri_plugin_fs_init())
    // .plugin(tauri_plugin_global_shortcut::Builder::new().build())
    // .plugin(tauri_plugin_http_init())
    // .plugin(tauri_plugin_localhost::Builder::new(port).build())
      // .setup(move |wen_tools| {
      //     let url = format!("http://localhost:{}", port).parse().unwrap();
      //     WebviewWindowBuilder::new(wen_tools, "main".to_string(), WebviewUrl::External(url))
      //         .title("Localhost Example")
      //         .build()?;
      //     Ok(())
      // })
    // .plugin(tauri_plugin_log::Builder::new()
    //   .targets([
    //     Target::new(TargetKind::Stdout),
    //     Target::new(TargetKind::LogDir { file_name: None }),
    //     Target::new(TargetKind::Webview),
    //   ]).build(),
    // )
    // .plugin(tauri_plugin_notification_init())
    // .plugin(tauri_plugin_os_init())
    // .plugin(tauri_plugin_positioner_init())
    // // This is required to get tray-relative positions to work
    // .setup(|wen_tools| {
    //   TrayIconBuilder::new()
    //     .on_tray_icon_event(|wen_tools, event| {
    //       tauri_plugin_positioner::on_tray_event(wen_tools.app_handle(), &event);
    //     }).build(wen_tools)?;
    //     Ok(())
    //   })
    // .plugin(tauri_plugin_shell_init())
    // .plugin(tauri_plugin_updater::Builder::new().build())
    // // .plugin(tauri_plugin_window_state::Builder::new().build())
    // .plugin(tauri_plugin_persisted_scope_init())
    .run(context)
    .expect("error while running tauri application");
}
