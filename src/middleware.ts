import { NextRequest, NextResponse } from "next/server";

const gameRoutes: Record<string, string> = {
  "/h5game01/龙虾跑酷.html": "web-lobster-run",
  "/football/football-game.html": "web-football",
  "/saveman/saveman.html": "web-save-man",
  "/killerh5": "web-killer-h5",
  "/killerh5/": "web-killer-h5",
  "/killerh5/index.html": "web-killer-h5",
  "/swim": "web-swim",
  "/swim/": "web-swim",
  "/swim/index.html": "web-swim",
  "/zombiesiege/shotdemo01.html": "web-zombie-siege",
  "/hotdance/hotdance.html": "web-hotdance",
  "/dropafriend/dropafriend.html": "web-dropafriend",
  "/bladedart/bladedart.html": "web-bladedart",
  "/summit/summit.html": "web-summit",
  "/crazybird": "web-crazybird",
  "/crazybird/": "web-crazybird",
  "/crazybird/index.html": "web-crazybird",
  "/webtool": "dapp-charactertool",
  "/webtool/": "dapp-charactertool",
  "/webtool/index.html": "dapp-charactertool",
  "/writetool/zysxz.html": "dapp-collab-ai",
};

function decodedPathname(pathname: string) {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

export function middleware(request: NextRequest) {
  const pathname = decodedPathname(request.nextUrl.pathname);
  const projectId = gameRoutes[pathname];
  if (!projectId) return NextResponse.next();

  if (request.nextUrl.searchParams.get("embed") === "1") {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, follow");
    return response;
  }

  const requestedLang = request.nextUrl.searchParams.get("lang");
  const acceptsChinese = request.headers
    .get("accept-language")
    ?.toLowerCase()
    .includes("zh");
  const lang = requestedLang === "zh" || (!requestedLang && acceptsChinese)
    ? "zh"
    : "en";
  const destination = request.nextUrl.clone();
  destination.pathname = `/${lang}/project/${projectId}`;
  destination.search = "";
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: [
    "/h5game01/:path*",
    "/football/:path*",
    "/saveman/:path*",
    "/killerh5/:path*",
    "/swim/:path*",
    "/zombiesiege/:path*",
    "/hotdance/:path*",
    "/dropafriend/:path*",
    "/bladedart/:path*",
    "/summit/:path*",
    "/crazybird/:path*",
    "/webtool/:path*",
    "/writetool/:path*",
  ],
};
