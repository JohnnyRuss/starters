import { RouterHistoryT } from "@/interface/config.types";

const USER_DEFAULT_AVATAR =
  "https://firebasestorage.googleapis.com/v0/b/mimitha-e1a81.appspot.com/o/user%2Favatar.jpg?alt=media&token=a8b2b035-af5f-42e3-be29-afa789303b84";

const APP_THEME_KEY = "BLOG_THEME";
const APP_PASSPORT_KEY = "BLOG_PASSPORT";

const RouterHistory: RouterHistoryT = {
  navigate: () => {},
  location: {
    hash: "",
    key: "",
    pathname: "",
    search: "",
    state: null,
  },
};

export { RouterHistory, USER_DEFAULT_AVATAR, APP_PASSPORT_KEY, APP_THEME_KEY };
