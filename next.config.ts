import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self' blob:;
  script-src 'self' blob: 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
  connect-src 'self' ${process.env.API_WEBSOCKET_HOST} ${process.env.API_HOST} https://www.google-analytics.com blob:;
  font-src 'self' data: https://fonts.gstatic.com;
  img-src 'self' blob: data: ${process.env.API_HOST} https://lh3.googleusercontent.com https://bridgewaveskonnect.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  frame-ancestors 'self';
  form-action 'self';
  object-src 'self' data: blob:; 
  worker-src 'self' blob:;
  frame-src 'self' blob: https://calendly.com;
  media-src 'self' data: blob: ${process.env.API_HOST};

`;

const securityHeaders = [
   {
      key: "Content-Security-Policy",
      value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
   },
   {
      key: "X-Content-Security-Policy",
      value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
   },

   {
      key: "Referrer-Policy",
      value: "no-referrer",
   },
   {
      key: "Permissions-Policy",
      value: `accelerometer=(self), autoplay=(self), camera=(self), geolocation=(self), gyroscope=(self), hid=(self), idle-detection=(self), local-fonts=(self), magnetometer=(self), microphone=(self), midi=(self), payment=(self), publickey-credentials-get=(self), screen-wake-lock=(self), serial=(self), usb=(self), window-management=(self)`,
   },
   {
      key: "Accept-CH",
      value: "viewport-width,dpr,Sec-CH-Prefers-Color-Scheme,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Platform-Version,Sec-CH-UA-Model",
   },
];

const nextConfig: NextConfig = {
   trailingSlash: false,
   devIndicators: false,
   poweredByHeader: false,
   publicRuntimeConfig: {},
   async headers() {
      return [
         {
            source: "/:path*",
            headers: securityHeaders,
         },
      ];
   },
   env: {
      ORIGIN: process.env.ORIGIN,
   },
};

export default nextConfig;
