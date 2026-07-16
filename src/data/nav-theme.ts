/**
 * Type: NavTheme
 * Purpose: Maps a route to the Navbar's background classes for that route.
 * `match` decides whether a given pathname should use this theme.
 */
export interface NavTheme {
  match: (pathname: string) => boolean;
  className: string;
}

/**
 * Add one entry per page (or group of pages) that needs a different
 * Navbar background than the default. Checked top-to-bottom — first
 * match wins — so put more specific routes above broader ones.
 */
export const navThemes: NavTheme[] = [
  { match: (pathname) => pathname === "/", className: "bg-nav-blue/90" },
  { match: (pathname) => pathname.startsWith("/journal"), className: "bg-white/90" },
];

/** Used when no entry in navThemes matches the current route. */
export const defaultNavClassName = "bg-white/90";