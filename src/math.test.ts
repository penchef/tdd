import { sum } from './math';

test('[sum] x=1, y=0', () => {
  // GIVEN:
  const x = 1;
  const y = 0;
  // WHEN:
  const result = sum(x, y);
  // THEN:
  expect(result).toStrictEqual(1);
});

test('[sum] x= -1, y= -8', () => {
  // GIVEN:
  const x = -1;
  const y = -8;
  // WHEN:
  const result = sum(x, y);
  // THEN:
  expect(result).toStrictEqual(-9);
});
