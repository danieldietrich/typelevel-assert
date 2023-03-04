/******************************************************************************
 * Copyright 2023 Daniel Dietrich
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/

import { describe, it } from 'vitest';
import { assertType } from '../src';

describe('assertType', () => {

    it('should not issue an error when asserting true', () => {
        assertType<true>();
    });

    it('should issue an error when asserting false', () => {
        // @ts-expect-error
        assertType<false>();
    });

});
