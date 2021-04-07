const getDecimals = price => {
    const priceSplitted = `${price}`.split('.')
    let decimals = priceSplitted[1]

    if (decimals !== undefined) {
        decimals = decimals.length == 1 ? `${decimals}0` : decimals

    } else {
        decimals = '00'
    }

    return decimals
}

const getIntegers = price => {
    return `${price}`.split('.')[0]
}

module.exports = { getDecimals, getIntegers }