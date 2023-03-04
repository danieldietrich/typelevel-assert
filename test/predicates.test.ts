/******************************************************************************
 * Copyright 2023 Daniel Dietrich
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/

import { assertType, And, Equals, Extends, Is, Not, Or } from "../src";

type Fn = (...args: any[]) => any;
type Obj = Record<PropertyKey, unknown>;

{ // And
    assertType<Is<And<true, true>, true>>();
    assertType<Is<And<true, false>, false>>();
    assertType<Is<And<false, true>, false>>();
    assertType<Is<And<false, false>, false>>();
    assertType<Is<And<boolean, true>, boolean>>();
    assertType<Is<And<boolean, false>, false>>();
    assertType<Is<And<true, boolean>, boolean>>();
    assertType<Is<And<false, boolean>, false>>();
    assertType<Is<And<boolean, boolean>, boolean>>();

    assertType<Is<And<true | false, true>, true | false>>();
    assertType<Is<And<true, true | false>, true | false>>();
}

{ // Or
    assertType<Is<Or<true, true>, true>>();
    assertType<Is<Or<true, false>, true>>();
    assertType<Is<Or<false, true>, true>>();
    assertType<Is<Or<false, false>, false>>();
    assertType<Is<Or<boolean, true>, true>>();
    assertType<Is<Or<boolean, false>, boolean>>();
    assertType<Is<Or<true, boolean>, true>>();
    assertType<Is<Or<false, boolean>, boolean>>();
    assertType<Is<Or<boolean, boolean>, boolean>>();

    assertType<Is<Or<true | false, false>, true | false>>();
    assertType<Is<Or<false, true | false>, true | false>>();
}

{ // Not
    assertType<Is<Not<true>, false>>();
    assertType<Is<Not<false>, true>>();
    assertType<Is<Not<boolean>, boolean>>();
}

{ // Equals

    { // universal types
        assertType<Is<Equals<any, any>, true>>();
        assertType<Is<Equals<any, unknown>, true>>();
        assertType<Is<Equals<unknown, unknown>, true>>();
        assertType<Is<Equals<never, any>, false>>();
        assertType<Is<Equals<never, unknown>, false>>();
        assertType<Is<Equals<never, never>, true>>();
    }

    { // objects, arrays, classes and functions
        class A {}
        class B extends A { b = 1 }
        assertType<Is<Equals<{}, { a: 1 }>, false>>();
        assertType<Is<Equals<{ a: 1 }, { a: 1 }>, true>>();
        assertType<Is<Equals<[], [1]>, false>>();
        assertType<Is<Equals<[1], [1]>, true>>();
        assertType<Is<Equals<() => 1, () => 2>, false>>();
        assertType<Is<Equals<() => 1, () => 1>, true>>();
        assertType<Is<Equals<A, A>, true>>();
        assertType<Is<Equals<B, B>, true>>();
        assertType<Is<Equals<A, B>, false>>();
    }

    { // simple types
        assertType<Is<Equals<0, 1>, false>>();
        assertType<Is<Equals<1, 1>, true>>();
        assertType<Is<Equals<null, null>, true>>();
        assertType<Is<Equals<undefined, undefined>, true>>();
        assertType<Is<Equals<void, void>, true>>();
    }

    { // unions
        assertType<Is<Equals<{ a: 1 } | { b: 2 }, { a: 1, b: 2 }>, false>>();
    }

    { // intersections
        assertType<Is<Equals<{ a: 1 } & { b: 2 }, { a: 1, b: 2 }>, true>>();
    }

}

{ // Extends

    const emptyObj = {};

    type EmptyObj = typeof emptyObj;

    function fn() {
        return undefined;
    }

    class A {
        a = 1;
    }

    { // Extends should recognize the identity
        assertType<Is<Extends<any, any>, true>>();
        assertType<Is<Extends<never, never>, true>>();
        assertType<Is<Extends<unknown, unknown>, true>>();
        assertType<Is<Extends<void, void>, true>>();
        assertType<Is<Extends<undefined, undefined>, true>>();
        assertType<Is<Extends<null, null>, true>>();
        assertType<Is<Extends<boolean, boolean>, true>>();
        assertType<Is<Extends<number, number>, true>>();
        assertType<Is<Extends<string, string>, true>>();
        assertType<Is<Extends<symbol, symbol>, true>>();
        assertType<Is<Extends<any[], any[]>, true>>();
        assertType<Is<Extends<Fn, Fn>, true>>();
        assertType<Is<Extends<Obj, Obj>, true>>();
        assertType<Is<Extends<A, A>, true>>();
    }

    { // Extends should recognize that never extends everything
        assertType<Is<Extends<never, never>, true>>();
        assertType<Is<Extends<never, any>, true>>();
        assertType<Is<Extends<never, unknown>, true>>();
        assertType<Is<Extends<never, 1>, true>>();
    }

    { // Extends should recognize that nothing but itself extends never
        assertType<Is<Extends<never, never>, true>>();
        assertType<Is<Extends<any, never>, false>>();
        assertType<Is<Extends<unknown, never>, false>>();
        assertType<Is<Extends<1, never>, false>>();
    }

    { // Extends should recognize that any extends nothing but itself and unknown
        assertType<Is<Extends<any, any>, true>>();
        assertType<Is<Extends<any, never>, false>>();
        assertType<Is<Extends<any, unknown>, true>>();
        assertType<Is<Extends<any, 1>, true>>(); // <-- [any] extends [1] -> true, any extends 1 -> boolean
    }

    { // Extends should recognize that unknown extends nothing but itself and any
        assertType<Is<Extends<unknown, unknown>, true>>();
        assertType<Is<Extends<unknown, never>, false>>();
        assertType<Is<Extends<unknown, any>, true>>();
        assertType<Is<Extends<unknown, 1>, false>>();
    }

    { // Extends should recognize that everything extends any
        assertType<Is<Extends<never, any>, true>>();
        assertType<Is<Extends<unknown, any>, true>>();
        assertType<Is<Extends<1, any>, true>>();
    }

    { // Extends should recognize that everything extends unknown
        assertType<Is<Extends<any, unknown>, true>>();
        assertType<Is<Extends<never, unknown>, true>>();
        assertType<Is<Extends<1, unknown>, true>>();
    }

    { // Extends should work for numbers
        assertType<Is<Extends<1, number>, true>>();
        assertType<Is<Extends<number, 1>, false>>();
    }

    { // Extends should work for functions
        assertType<Is<Extends<() => any, Fn>, true>>();
        assertType<Is<Extends<() => void, Fn>, true>>();
        assertType<Is<Extends<(...args: any[]) => any, Fn>, true>>();
        assertType<Is<Extends<typeof fn, Fn>, true>>();

        assertType<Is<Extends<unknown, Fn>, false>>();
        assertType<Is<Extends<void, Fn>, false>>();
        assertType<Is<Extends<undefined, Fn>, false>>();
        assertType<Is<Extends<null, Fn>, false>>();
        assertType<Is<Extends<boolean, Fn>, false>>();
        assertType<Is<Extends<number, Fn>, false>>();
        assertType<Is<Extends<string, Fn>, false>>();
        assertType<Is<Extends<any[], Fn>, false>>();
        assertType<Is<Extends<Record<string, unknown>, Fn>, false>>();
        assertType<Is<Extends<A, Fn>, false>>();
    }

    { // Extends should work for arrays
        assertType<Is<Extends<any[], any[]>, true>>();
        assertType<Is<Extends<[], []>, true>>();
        assertType<Is<Extends<any[], []>, false>>();
        assertType<Is<Extends<[], any[]>, true>>();
        assertType<Is<Extends<[], [any]>, false>>();
        assertType<Is<Extends<[any], any[]>, true>>();
        assertType<Is<Extends<[any], []>, false>>();

        assertType<Is<Extends<[1], [number]>, true>>();
        assertType<Is<Extends<[number], [1]>, false>>();
        assertType<Is<Extends<[1], [1]>, true>>();
        assertType<Is<Extends<[1], [2]>, false>>();

        assertType<Is<Extends<[1, ""], [number, string]>, true>>();
        assertType<Is<Extends<[1, ""], [number, any]>, true>>();
        assertType<Is<Extends<[1, ""], [number, never]>, false>>();
        assertType<Is<Extends<[number, string], [1, ""]>, false>>();
        assertType<Is<Extends<[number, any], [1, ""]>, false>>();
        assertType<Is<Extends<[number, never], [1, ""]>, false>>();
    }

    { // Extends should work for objects
        assertType<Is<Extends<A, EmptyObj>, true>>();
        assertType<Is<Extends<EmptyObj, A>, false>>();

        assertType<Is<Extends<A, Record<string, any>>, true>>();
        assertType<Is<Extends<Record<string, any>, A>, false>>();

        assertType<Is<Extends<A, unknown>, true>>();
        assertType<Is<Extends<unknown, A>, false>>();

        assertType<Is<Extends<EmptyObj, { a: 1 }>, false>>();
        assertType<Is<Extends<{ a: 1 }, EmptyObj>, true>>();
        assertType<Is<Extends<{ a: 1 }, { a: number }>, true>>();
        assertType<Is<Extends<{ a: 1 }, { a: string }>, false>>();
    }

    { // Extends should not distribute
        type Actual = Extends<never, { a: 1 } | { b: 1 }>; // would be never, if Extends distributed unions
        type Expected = never extends { a: 1 } | { b: 1 } ? true : false; // = true
        assertType<Equals<Actual, Expected>>();
    }

}
