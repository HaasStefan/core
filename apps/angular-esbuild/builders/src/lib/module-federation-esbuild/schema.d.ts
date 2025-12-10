import { ApplicationBuilderOptions } from '@angular/build';

export type PluginConfig =
  | string
  | { path: string; options?: Record<string, unknown> };

export type CustomEsbuildApplicationSchema = ApplicationBuilderOptions & {
  moduleFederationConfigPath: string;
};
