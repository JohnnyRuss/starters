import { ModeT } from "styled-components";
import { APP_THEME_KEY, APP_PASSPORT_KEY } from "@/config/config";

class LocaleStorage {
  setValue(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getValue(key: string): string {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : "";
  }

  removeValue(key: string) {
    localStorage.removeItem(key);
  }

  // THEME //
  setTheme(mode: ModeT) {
    this.setValue(APP_THEME_KEY, mode);
  }

  getTheme(): ModeT | undefined {
    return this.getValue(APP_THEME_KEY) as ModeT;
  }

  // JWT //
  setJWT(jwt: string) {
    this.setValue(APP_PASSPORT_KEY, jwt);
  }

  getJWT() {
    return this.getValue(APP_PASSPORT_KEY);
  }

  removeJWT() {
    this.removeValue(APP_PASSPORT_KEY);
  }
}

export default new LocaleStorage();
