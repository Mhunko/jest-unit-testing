class Lodash {
    constructor() {
    }
    compact(array){
        return array.filter(x => !!x)
    }

    groupBy(array, prop) {
        return array.reduce((acc, i) => {}, {})
    }
}

module.exports = Lodash