import {mult, SplitIntoWords, sum} from './01';

test('sum should be correct', () => {
    let a = 1;
    let b = 2;
    let c = 3;

    const results1 = sum(a, b);
    const results2 = sum(b, c);

    expect(results1).toBe(3);
    expect(results2).toBe(5);
});

test('multiply should be correct', () => {
    const a = 2;
    const b = 3;
    const c = 4;

    const results1 = mult(a, b);
    const results2 = mult(b, c);

    expect(results1).toBe(6);
    expect(results2).toBe(12);
});

test('split into words should be correct', () => {
    const sent1 = 'Hello my friend correct!'

    const result1 = SplitIntoWords(sent1)

    expect(result1.length).toBe(4)
})