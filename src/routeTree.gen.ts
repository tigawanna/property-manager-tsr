/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as IndexImport } from './routes/index'
import { Route as ProfileIndexImport } from './routes/profile/index'
import { Route as AuthIndexImport } from './routes/auth/index'
import { Route as AdminIndexImport } from './routes/admin/index'
import { Route as AuthSignupImport } from './routes/auth/signup'
import { Route as AdminRentImport } from './routes/admin/rent'
import { Route as AdminTenantsIndexImport } from './routes/admin/tenants/index'
import { Route as AdminShopsIndexImport } from './routes/admin/shops/index'
import { Route as AdminBillsIndexImport } from './routes/admin/bills/index'
import { Route as AdminBillsPrintImport } from './routes/admin/bills/print'

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileIndexRoute = ProfileIndexImport.update({
  path: '/profile/',
  getParentRoute: () => rootRoute,
} as any)

const AuthIndexRoute = AuthIndexImport.update({
  path: '/auth/',
  getParentRoute: () => rootRoute,
} as any)

const AdminIndexRoute = AdminIndexImport.update({
  path: '/admin/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  path: '/auth/signup',
  getParentRoute: () => rootRoute,
} as any)

const AdminRentRoute = AdminRentImport.update({
  path: '/admin/rent',
  getParentRoute: () => rootRoute,
} as any)

const AdminTenantsIndexRoute = AdminTenantsIndexImport.update({
  path: '/admin/tenants/',
  getParentRoute: () => rootRoute,
} as any)

const AdminShopsIndexRoute = AdminShopsIndexImport.update({
  path: '/admin/shops/',
  getParentRoute: () => rootRoute,
} as any)

const AdminBillsIndexRoute = AdminBillsIndexImport.update({
  path: '/admin/bills/',
  getParentRoute: () => rootRoute,
} as any)

const AdminBillsPrintRoute = AdminBillsPrintImport.update({
  path: '/admin/bills/print',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/admin/rent': {
      id: '/admin/rent'
      path: '/admin/rent'
      fullPath: '/admin/rent'
      preLoaderRoute: typeof AdminRentImport
      parentRoute: typeof rootRoute
    }
    '/auth/signup': {
      id: '/auth/signup'
      path: '/auth/signup'
      fullPath: '/auth/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof rootRoute
    }
    '/admin/': {
      id: '/admin/'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/': {
      id: '/auth/'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/': {
      id: '/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileIndexImport
      parentRoute: typeof rootRoute
    }
    '/admin/bills/print': {
      id: '/admin/bills/print'
      path: '/admin/bills/print'
      fullPath: '/admin/bills/print'
      preLoaderRoute: typeof AdminBillsPrintImport
      parentRoute: typeof rootRoute
    }
    '/admin/bills/': {
      id: '/admin/bills/'
      path: '/admin/bills'
      fullPath: '/admin/bills'
      preLoaderRoute: typeof AdminBillsIndexImport
      parentRoute: typeof rootRoute
    }
    '/admin/shops/': {
      id: '/admin/shops/'
      path: '/admin/shops'
      fullPath: '/admin/shops'
      preLoaderRoute: typeof AdminShopsIndexImport
      parentRoute: typeof rootRoute
    }
    '/admin/tenants/': {
      id: '/admin/tenants/'
      path: '/admin/tenants'
      fullPath: '/admin/tenants'
      preLoaderRoute: typeof AdminTenantsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AdminRentRoute,
  AuthSignupRoute,
  AdminIndexRoute,
  AuthIndexRoute,
  ProfileIndexRoute,
  AdminBillsPrintRoute,
  AdminBillsIndexRoute,
  AdminShopsIndexRoute,
  AdminTenantsIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layout",
        "/admin/rent",
        "/auth/signup",
        "/admin/",
        "/auth/",
        "/profile/",
        "/admin/bills/print",
        "/admin/bills/",
        "/admin/shops/",
        "/admin/tenants/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layout": {
      "filePath": "_layout.tsx"
    },
    "/admin/rent": {
      "filePath": "admin/rent.tsx"
    },
    "/auth/signup": {
      "filePath": "auth/signup.tsx"
    },
    "/admin/": {
      "filePath": "admin/index.tsx"
    },
    "/auth/": {
      "filePath": "auth/index.tsx"
    },
    "/profile/": {
      "filePath": "profile/index.tsx"
    },
    "/admin/bills/print": {
      "filePath": "admin/bills/print.tsx"
    },
    "/admin/bills/": {
      "filePath": "admin/bills/index.tsx"
    },
    "/admin/shops/": {
      "filePath": "admin/shops/index.tsx"
    },
    "/admin/tenants/": {
      "filePath": "admin/tenants/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
