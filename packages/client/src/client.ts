import deepmerge from 'deepmerge';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { mkdirp } from 'mkdirp';
import { dirname, resolve } from 'path';
import * as shell from 'shelljs';

import { HyperwebConfig } from './config';
import { readAndParsePackageJson } from './package';

export interface HyperwebContext {
  name?: string;
  rpc?: string;
  config?: string;
  verbose?: boolean;
  timeout?: string;
}

export const defaultHyperwebContext: Partial<HyperwebContext> = {
  name: '',
  rpc: 'http://localhost:26657',
  verbose: false,
};

export interface HyperwebClientI {
  ctx: HyperwebContext;
  version: string;
  config: HyperwebConfig;
}

export class HyperwebClient implements HyperwebClientI {
  ctx: HyperwebContext;
  version: string;
  config: HyperwebConfig;

  constructor(ctx: HyperwebContext) {
    this.ctx = deepmerge(defaultHyperwebContext, ctx);
    // TODO add semver check against net
    this.version = readAndParsePackageJson().version;
  }

  private log(str: string): void {
    // add log level
    console.log(str);
  }

  private exit(code: number): void {
    shell.exit(code);
  }

  private loadYaml(filename: string): any {
    const path = filename.startsWith('/')
      ? filename
      : resolve((process.cwd(), filename));
    const fileContents = readFileSync(path, 'utf8');
    return yaml.load(fileContents);
  }

  private saveYaml(filename: string, obj: any): any {
    const path = filename.startsWith('/')
      ? filename
      : resolve((process.cwd(), filename));
    const yamlContent = yaml.dump(obj);
    mkdirp.sync(dirname(path));
    writeFileSync(path, yamlContent, 'utf8');
  }

  public loadConfig(): void {
    this.ensureFileExists(this.ctx.config);
    this.config = this.loadYaml(this.ctx.config) as HyperwebConfig;
  }

  public saveConfig(): void {
    this.saveYaml(this.ctx.config, this.config);
  }

  public setConfig(config: HyperwebConfig): void {
    this.config = config;
  }

  public setContext(ctx: HyperwebContext): void {
    this.ctx = ctx;
  }

  private ensureFileExists(filename: string): void {
    const path = filename.startsWith('/')
      ? filename
      : resolve((process.cwd(), filename));
    if (!existsSync(path)) {
      throw new Error(`Configuration file not found: ${filename}`);
    }
  }
}