const Lodash = require('./sync')

let _ = new Lodash()

describe('Lodash: compact', () => {
    let array

    beforeEach(() => {
        array = [false, 42, 0, '', true, null, 'test']
    })

    afterAll(() => {
        _ = new Lodash()
    })


    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()

    })
    test('should remove falsy values from array', () => {
        const result = [42, true, 'test']
        expect(_.compact(array)).toEqual(result)
    })
    test('should not contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(null)
        expect(_.compact(array)).not.toContain(0)
    })
})

describe('Lodash: groupBy', () => {
    test('should be defined', () => {
        expect(_.groupBy()).toBeDefined()
        expect(_.groupBy()).not.toBeUndefined()

    })
    test('test group array items by Math.floor', () => {
        const array = [2.2, 3.1, 4.2, 2.4]
        const result = {
            2: [2.2, 2.4],
            3: [3.1],
            4: [4.2]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })
    test('test group array items by length', () => {
        const array = ['one', 'two', 'three']
        const result = {
            5: ['three'],
            3: ['one', 'two']
        }
        expect(_.groupBy(array, 'length')).toEqual(result)
    })
    test('test should not return array', () => {

        expect(_.groupBy([], Math.trunc())).not.toBeInstanceOf(Array)
    })
})