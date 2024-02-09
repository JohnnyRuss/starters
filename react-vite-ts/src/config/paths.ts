const PATHS = {
  root_page: "/",
  home_page: "/home",
  // AUTH
  auth_page: "/auth",
  login_page: "/auth/login",
  register_page: "/auth/register",
  forgot_password_page: "/auth/forgot_password",
  confirm_email_page: "/auth/confirm_email",
  update_password_page: "/auth/update_password",
  // UNKNOWN
  unknown_page: "*",
};

const DYNAMIC_ROUTES = {};

const PRIVATE_ROUTES: Array<string> = [];

const getNativeLocation = (currentLocation: string) => {
  let originalPath = "";

  for (const key in PATHS) {
    const pattern = PATHS[key as keyof typeof PATHS];
    const regex = new RegExp("^" + pattern.replace(/:[^/]+/g, "([^/]+)") + "$");

    if (regex.test(currentLocation)) {
      originalPath = PATHS[key as keyof typeof PATHS];

      break;
    }
  }

  return originalPath;
};

export { PATHS, DYNAMIC_ROUTES, PRIVATE_ROUTES, getNativeLocation };
