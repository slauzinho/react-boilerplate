// declaration.d.ts
// Put all your custom type information for 3rd party modules here
declare module "*.svg" {
  const value: any;
  export = value;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.ico" {
  const value: any;
  export = value;
}

declare module "*.icns" {
  const value: any;
  export = value;
}
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}
