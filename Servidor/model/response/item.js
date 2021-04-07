const { getDecimals, getIntegers } = require('../../utils/number')

const getItem = ({
    id,
    title,
    price,
    thumbnail,
    condition,
    shipping,
    sold_quantity,
    description,
    currency_id,
    address,
    categories
}) => {
    return {
        id,
        title,
        price: {
            currency_id,
            amount: getIntegers(price),
            decimals: getDecimals(price)
        },
        picture: thumbnail,
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity,
        description,
        location: address ? address.state_name : '',
        categories
    }
}

module.exports = getItem