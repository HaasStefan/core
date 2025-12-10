import { BuilderContext, createBuilder } from '@angular-devkit/architect';
import { ApplicationBuilderExtensions, buildApplication } from '@angular/build';
import { json } from '@angular-devkit/core';
import { defer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CustomEsbuildApplicationSchema } from './schema';
import { loadModuleFederationPluginAsync } from './utils/loadPlugin';

export function buildCustomEsbuildApplication(
  options: CustomEsbuildApplicationSchema,
  context: BuilderContext,
) {
  return defer(async () => {
    const codePlugins = [
      await loadModuleFederationPluginAsync(
        options.moduleFederationConfigPath,
        context.workspaceRoot,
      ),
    ];

    return { codePlugins } as ApplicationBuilderExtensions;
  }).pipe(
    switchMap((extensions: ApplicationBuilderExtensions) =>
      buildApplication(options, context, extensions),
    ),
  );
}

export default createBuilder<json.JsonObject & CustomEsbuildApplicationSchema>(
  buildCustomEsbuildApplication,
);
