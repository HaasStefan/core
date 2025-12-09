import * as path from 'path';
import { moduleFederationPlugin } from '@module-federation/esbuild/plugin';
import type { Plugin } from 'esbuild';

export async function loadModuleFederationPluginAsync(
  configPath: string,
  workspaceRoot: string,
): Promise<Plugin> {
  const moduleFederationConfig = await import(
    /* webpackIgnore: true */
    path.resolve(workspaceRoot, configPath)
  );

  return moduleFederationPlugin(moduleFederationConfig.default);
}
