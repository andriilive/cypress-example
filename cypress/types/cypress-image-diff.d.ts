/// <reference types="cypress-image-diff-js/types/plugin" />

declare module "cypress-image-diff-js/dist/plugin" {
  import getCompareSnapshotsPlugin from "cypress-image-diff-js/types/plugin";
  export default getCompareSnapshotsPlugin;
}
