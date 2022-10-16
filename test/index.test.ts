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
