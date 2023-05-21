import React, { lazy, LazyExoticComponent } from "react";

interface Route {
    enabled: boolean;
    path: string;
    component: LazyExoticComponent<React.ComponentType<any>>;
    navbar: string;
    child: {
      name: string;
      path: string;
    }[] | null;
  }

const routes:Route[] = [

]

export default routes.filter((route) => route.enabled);