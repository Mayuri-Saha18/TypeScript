# What is TypeScript?
TypeScript is a syntactic superset of JavaScript which adds static typing.
This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.

Introduction to Typescript: https://www.canva.com/design/DAFRVo6KiiU/Y6terVDplneB3iad36-kJQ/view#1

tsconfig

```typescript
{
    "include": ["src"],
    "exclude": ["node_modules"],
    "compilerOptions": {
        "module": "commonjs",
        "outDir": "build",
        "target": "es2017",
        "declaration": true,
        "sourceMap": true
    }
}
```
# Topics
1.Basic types
string
number
boolean
null
undefined
any
Literal Types
Union Types
2.Functions
ES5 Function
Arrow function
