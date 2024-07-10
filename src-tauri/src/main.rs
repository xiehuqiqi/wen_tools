// Prevents additional console window on Windows in release, DO NOT REMOVE!!
//#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use crate::{
  utils::{set_window_shadow}
};

mod utils;

fn main() {
  let context = tauri::generate_context!();

  tauri::Builder::default()
    .setup(|wen_tools| {
      set_window_shadow(wen_tools);
      Ok(())
    })
    .run(context)
    .expect("error while running tauri application");
}
