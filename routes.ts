import React, { lazy } from "react";

const GoogleMaps = lazy(() => import("pages/GoogleMaps"));
const ButtonLoadingSpinner = lazy(() =>
  import("pages/ButtonLoadingSpinner")
);
const OTPBox = lazy(() => import("pages/OTPBox"));
// 其他组件的导入省略...

interface Route {
  enabled: boolean;
  path: string;
  component: React.ComponentType<any>;
  navbar: string;
  child: { name: string; path: string }[] | null;
}

const routes: Route[] = [
  {
    enabled: true,
    path: "/map",
    component: GoogleMaps,
    navbar: "google-map-react",
    child: [
      {
        name: "Basic Google Maps",
        path: "/map",
      },
      {
        name: "Custom Google Maps",
        path: "/map/custom-style",
      },
    ],
  },
  // 其他路由对象的定义省略...
];

export default routes.filter((route) => route.enabled);