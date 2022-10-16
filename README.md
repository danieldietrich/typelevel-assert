<div id="typelevel-logo" align="center">
  <a href="https://github.com/danieldietrich/typelevel">
    <img alt="Typelevel Logo" width="450" src="https://user-images.githubusercontent.com/743833/196013156-9158e0d0-93eb-4615-a29c-dec51513a37b.png">
  </a>
  <h3>
    Lift your code to the next level.
  </h3>
</div>

<br/>
<br/>

<div id="badges" align="center">

[![npm version](https://img.shields.io/npm/v/typelevel-assert?logo=npm&style=flat-square)](https://www.npmjs.com/package/typelevel-assert/)
[![build](https://img.shields.io/github/workflow/status/danieldietrich/typelevel-assert/Test/main?logo=github&style=flat-square)](https://github.com/danieldietrich/typelevel-assert/actions/workflows/test.yml)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/danieldietrich/typelevel-assert)

</div>

<br/>
<br/>


**TypeLevel Assert** provides convenient assertions for type-level programming. It can be used to test types accompanied by any TypeScript library for type-level programming. **TypeLevel Assert** works best with **[TypeLevel](https://github.com/danieldietrich/typelevel)**.

## Usage (here with TypeLevel)

Installation

```sh
npm i -D typescript-typelevel typelevel-assert
```

Start to code ([try it out](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgSQM5wL5wGZQiOAchgE8wBTVAYymDBgFpSKAbcgN3JcIG4AoUJFiI4AQ1SpysACplymHHgLE5bTiwbjJsXnz7N5ACWAAeaXHIAPGOQB2AE3SoYtWwHMAfHAC8cAAbGcAAkCNIYAIR+-HxaUjCyFCZoJsYmhAnkADIcXIQeADREgRnZ6uF5HgAUAJT8QA))

```ts
import { Is } from 'typescript-typelevel';
import { assertType } from 'typelevel-assert';

type Hi<T extends string> = `Hi ${T}!`;

assertType<Is<Hi<'TypeLevel'>, 'Hi TypeLevel!'>>();
```

Visit [typelevel.io](https://typelevel.io) to learn more...
