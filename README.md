<div id="typelevel-logo" align="center">
  <a href="https://github.com/danieldietrich/typelevel">
    <img alt="TypeLevel Logo" width="450" src="https://user-images.githubusercontent.com/743833/196072540-36ba3965-2c6f-4746-967e-59598b2acdc8.png">
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


<tt>**&lt;TypeLevel&gt; Assert**</tt> provides convenient assertions for type-level programming. It can be used to test types accompanied by any TypeScript library for type-level programming. <tt>**&lt;TypeLevel&gt; Assert**</tt> works best with **[<tt>**&lt;TypeLevel&gt;**</tt>](https://github.com/danieldietrich/typelevel)**.

## Usage

Installation

```sh
npm i -D typelevel-assert typescript-typelevel
```

Start to code ([try it out](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgSQM5wL5wGZQiOAchgE8wBTVAYymDBgFpSKAbcgN3JcIG4AoUJFiI4AQ1SpysACplymHHgLE5bTiwbjJsXnz7N5ACWAAeaXHIAPGOQB2AE3SoYtWwHMAfHAC8cAAbGcAAkCNIYAIR+-HxaUjCyFCZoJsYmhAnkADIcXIQeADREgRnZ6uF5HgAUAJT8QA))

```ts
import { Is } from 'typescript-typelevel';
import { assertType } from 'typelevel-assert';

type Hi<T extends string> = `Hi ${T}!`;

assertType<Is<Hi<'TypeLevel'>, 'Hi TypeLevel!'>>();
```

Visit [typelevel.io](https://typelevel.io) to learn more...

## Example

<div>
  This is a typical unit test with a <strong>type assertion</strong>. The <strong>assertType&lt;T></strong> utility has a generic type parameter <strong>T</strong> of type <strong>true</strong> <em>(yes, true is a type on its own in TypeScript)</em>. If a type instance of the parameter <strong>T</strong> is <strong>false</strong>, the compiler issues an error.
  <img width="786" alt="ginject-assert-type-0-test" src="https://user-images.githubusercontent.com/743833/196083451-de0c3220-10a7-4ee1-95d8-77ea7bc38833.png">
</div>

<div>
  In the test above, we use the <strong>Is</strong> utility to check if the <strong>Actual</strong> type is exactly the same as the <strong>Expected</strong> type. If the expectation is not met, we need to investigate the <strong>Actual</strong> type.
  <img width="654" alt="ginject-assert-type-2-expected" src="https://user-images.githubusercontent.com/743833/196084831-e3707df1-c8ad-42e2-8c27-93c482f362b3.png">
</div>

<div>
  <img align="right"width="458" alt="ginject-assert-type-1-actual" src="https://user-images.githubusercontent.com/743833/196082745-89c5bcc3-5862-457e-8930-7d419202237c.png">
  The <strong>Actual</strong> type looks weired. The <strong>cause</strong> of the <strong>ValidationError</strong> is <strong>[string, number, symbol]</strong>. This is a smell. TypeScript's <strong>PropertyKey</strong> union type seems to leak into a type computation. Something worth to look at...
</div>
