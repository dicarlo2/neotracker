/* @flow */
import HotWebServerBase from './HotWebServerBase';

import { createClientCompiler, createServerCompiler } from './compiler';

export default class HotWebServer extends HotWebServerBase {
  constructor({
    clientBundlePath,
    clientAssetsPath,
    env,
  }: {|
    clientBundlePath: string,
    clientAssetsPath: string,
    env?: Object,
  |}) {
    super({
      serverCompiler: createServerCompiler({ buildVersion: 'dev' }),
      clientCompiler: createClientCompiler({
        clientBundlePath,
        clientAssetsPath,
        buildVersion: 'dev',
      }),
      graphqlEntryPath: './packages/neotracker-build-web/src/entry/graphql.js',
      graphqlOutputPath: './build/graphql',
      graphqlSchemaOutputPath: './build/graphql/schema.graphql',
      jsonOutputPath: './build/graphql/schema.graphql.json',
      env,
    });
  }
}
