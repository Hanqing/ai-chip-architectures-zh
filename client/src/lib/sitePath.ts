/** 原站复刻：内部路由必须同时适配 Manus 根路径预览与 GitHub Pages 项目子路径。 */
export function sitePath(pathname: string) {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  if (pathname === "/") return base ? `${base}/` : "/";
  return `${base}${pathname}`;
}
