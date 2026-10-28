const pages = ["/", "/about", "/products", "/contact"];

function pageIndex(path: string) {
  const clean = path.split("?")[0] || "/";
  if (clean === "/") return 0;
  return pages.findIndex(
    (page) => page !== "/" && (clean === page || clean.startsWith(`${page}/`)),
  );
}

export function navDirection(pathname: string, href: string) {
  const from = pageIndex(pathname);
  const to = pageIndex(href);
  if (from < 0 || to < 0 || from === to) return undefined;
  return to > from ? "nav-forward" : "nav-back";
}
