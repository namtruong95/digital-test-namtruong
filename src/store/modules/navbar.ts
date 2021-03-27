import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import { RouteConfig } from "vue-router";
import store from "@/store";

export interface INavbarState {
  routes: RouteConfig[];
}

export const filterRoutes = (routesOrigin: RouteConfig[] = []) => {
  let res: RouteConfig[] = [];

  routesOrigin.forEach((route) => {
    if (
      Object.hasOwnProperty.call(route, "meta") &&
      Object.hasOwnProperty.call(route.meta, "hidden") &&
      ! route.meta.hidden
    ) {
      res = [...res, route];
    }
  });

  return res;
};

@Module({ dynamic: true, store, name: "navbar", namespaced: true })
class Navbar extends VuexModule implements INavbarState {
  public routes: RouteConfig[] = [];

  @Mutation
  private SET_ROUTES(routes: RouteConfig[]) {
    this.routes = [...this.routes, ...routes];
  }

  @Action
  public GenerateRoutes(routes: RouteConfig[]) {
    const accessedRoutes = filterRoutes(routes);

    this.SET_ROUTES(accessedRoutes);
  }
}

export const NavbarModule = getModule(Navbar);
