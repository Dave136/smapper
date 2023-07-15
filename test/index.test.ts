import { describe, test, expect } from 'vitest';
import { posts, postsMapped } from './fake';
import mapper from '../src';

describe('mapper', () => {
  test('it should remove data and attributes wrapper', () => {
    const mapped = mapper(posts);
    expect(mapped).toEqual(postsMapped);
  });
});
