import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

export interface AnalysisResult {
  queries: MethodInfo[];
  mutations: MethodInfo[];
}

export interface MethodInfo {
  name: string;
  params: { name: string; type: string }[];
  returnType: string;
}

// JSON-schema types
export interface JSONSchema {
  type?: string;
  properties?: Record<string, JSONSchema>;
  required?: string[];
  items?: JSONSchema;
  additionalProperties?: JSONSchema;
  anyOf?: JSONSchema[];
  enum?: (string | number | boolean)[];
  $ref?: string;
  const?: string | number | boolean;
}

export interface SchemaMethodInfo {
  name: string;
  params: { name: string; schema: JSONSchema }[];
  returnSchema: JSONSchema;
}

export interface SchemaAnalysisResult {
  queries: SchemaMethodInfo[];
  mutations: SchemaMethodInfo[];
}

export interface MethodAnalysisState {
  readsState: boolean;
  writesState: boolean;
  hasReturn: boolean;
}

export interface ClassMethodNode {
  path: NodePath<t.ClassMethod | t.ClassProperty>;
  name: string;
  params: any[];
  returnType?: t.TSType;
}
