<div id="typelevel-assert logo" align="center">
  <img alt="logo dark mode" src="https://user-images.githubusercontent.com/743833/222897642-24a3fe92-4dae-46a1-bf11-2e037340efae.png#gh-dark-mode-only" width=640>
  <img alt="logo light mode" src="https://user-images.githubusercontent.com/743833/222897442-715789e8-1998-4e16-bb5c-9a5757f88834.png#gh-light-mode-only" width=640>
</div>

<div id="badges" align="center">

[![npm version](https://img.shields.io/npm/v/typelevel-assert?logo=npm&style=flat-square)](https://www.npmjs.com/package/typelevel-assert/)
[![build](https://img.shields.io/github/workflow/status/danieldietrich/typelevel-assert/Test/main?logo=github&style=flat-square)](https://github.com/danieldietrich/typelevel-assert/actions/workflows/test.yml)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/danieldietrich/typelevel-assert)

</div>

<br>
<br>

<tt>**&lt;TypeLevel&gt; Assert**</tt> provides convenient assertions for type-level programming.

## Usage

Installation

```sh
npm i -D typelevel-assert
```

Start to code ([try it out](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgQwM6oKawCoE8wYA0cAkqnAL5wBmUEIcA5DPhgDYYBu7AtGprEYBuAFAiWBOAAlgAHmxwMADxgYAdgBNyqGFGBqA5gD44AXjgADGXAAkCbBQCEF0SP5YYeArLKyZsxi8MABkudkYjYkZrINDuNkcIowAKAEpRIA))

```ts
import { assertType, Is } from 'typelevel-assert';

type Hi<T extends string> = `Hi ${T}!`;

assertType<Is<Hi<'TypeLevel'>, 'Hi TypeLevel!'>>();
```

## API

The `assertType<T>()` assertion accepts a type parameter `T`.

* ✅ The compiler succeeds, if `T` is `true`
* ❌ The compiler fails, if `T` is not `true`

<tt>**&lt;TypeLevel&gt; Assert**</tt> has the following built-in type predicates that can be used with `assertType`:

| type | description |
| --- | --- |
| `And<C1 extends boolean, C extends boolean2>` | `true` if both `C1` and `C2` are true, `false` otherwise |
| `Or<C1 extends boolean, C2 extends boolean>` | `true` if any of `C1` or `C2` is true, `false` otherwise |
| `Not<C extends boolean>` | `true` if `C` is `false`, `true` otherwise |
| `Equals<T1, T2>` | `And<Extends<T1, T2>, Extends<T2, T1>>` |
| `Extends<T1, T2>` | syntactic sugar for `[T1] extends [T2] ? true : false` |
| `Is<T1, T2>` | `true` if `T1` is exactly `T2`, false otherwise |
