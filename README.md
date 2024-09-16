[![CI](https://github.com/vscode-utility/vs-diff/actions/workflows/ci.yml/badge.svg)](https://github.com/vscode-utility/vs-diff/actions/workflows/ci.yml)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/vscode-utility/vs-diff/)

[![npm version](https://img.shields.io/npm/v/vs-diff.svg?style=flat-square)](https://www.npmjs.org/package/vs-diff)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/vscode-utility/vs-diff)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=vs-diff&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=vs-diff)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/vs-diff?style=flat-square)](https://bundlephobia.com/package/vs-diff@latest)
[![npm downloads](https://img.shields.io/npm/dt/vs-diff.svg?style=flat-square)](https://npm-stat.com/charts.html?package=vs-diff)

# vs-diff

`vs-diff` is a diff algorithm extracted from [VS Code](https://github.com/microsoft/vscode/tree/main/src/vs/editor/common/diff) with the latest updates.

<!-- The package is automatically synced with changes from VS Code every 24 hours. -->

If you find this package useful for your projects, please consider supporting me by [Github](https://github.com/sponsors/nguyenngoclongdev), [Patreon](https://patreon.com/nguyenngoclong), [KO-FI](https://ko-fi.com/nguyenngoclong) or [Paypal](https://paypal.me/longnguyenngoc). It's a great way to help me maintain and improve this tool in the future. Your support is truly appreciated!

[![Github](https://img.shields.io/badge/Github-F15689?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/nguyenngoclongdev)
[![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://patreon.com/nguyenngoclong)
[![KO-FI](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/nguyenngoclong)
[![Paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/longnguyenngoc)

## Installation

**npm**

```sh
npm install vs-diff
```

## Usage

```typescript
import {
  DiffComputer,
  ICharChange,
  IDiffComputerOpts,
  ILineChange,
} from "vs-diff";

const options: IDiffComputerOpts = {
  shouldPostProcessCharChanges: true,
  shouldIgnoreTrimWhitespace: true,
  shouldMakePrettyDiff: true,
  shouldComputeCharChanges: true,
  maxComputationTime: 0
};
let diffComputer = new DiffComputer(originalLines, modifiedLines, options);
let lineChanges: ILineChange[] = diffComputer.computeDiff().changes;
console.log(lineChanges);
/*
[
  {
    "originalStartLineNumber": 14,
    "originalEndLineNumber": 0,
    "modifiedStartLineNumber": 15,
    "modifiedEndLineNumber": 15
  },
  {
    "originalStartLineNumber": 16,
    "originalEndLineNumber": 0,
    "modifiedStartLineNumber": 18,
    "modifiedEndLineNumber": 18
  }
]
*/
```

## Feedback

If you discover a bug, or have a suggestion for a feature request, please
submit an [issue](https://github.com/vscode-utility/vs-diff/issues).

## LICENSE

This extension is licensed under the [MIT License](LICENSE)
