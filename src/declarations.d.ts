/// <reference types="next" />
/// <reference types="next/image-types/global" />

// Allow side-effect imports of CSS files in TypeScript
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
