const fetch = require('node-fetch')
const getItem = require('../model/response/item')
const author = require('../model/response/author')
const { 
    BASE_URL_ITEMS, 
    BASE_URL_SEARCH, 
    BASE_URL_CATEGORIES,
    CATEGORY_FILTER_NAME } = require('../utils/constants')

const getURLItemByID = id => `${BASE_URL_ITEMS}/${id}`
const getURLItemDescription = id => `${getURLItemByID(id)}/description`
const getURLCategoriesByID = id => `${BASE_URL_CATEGORIES}/${id}`
const getItemDescription = async id => fetch(getURLItemDescription(id)).then(response => response.json())
const getCategories = async id => fetch(getURLCategoriesByID(id)).then(response => response.json())

const getByID = async (req, res) => {
    const itemID = req.params.id
    const { plain_text } = await getItemDescription(itemID)

    fetch(getURLItemByID(itemID))
        .then(response => response.json())
        .then(async data => {
            const item = getItem({ 
                ...data, 
                categories: (await getCategories(data.category_id)).path_from_root.map(({ name }) => name),
                description: plain_text, 
             })

            res.status(200).send({ author, item })
        })
}

const search = async (req, res) => {
     const { q } = req.query

     fetch(BASE_URL_SEARCH + new URLSearchParams({ q }))
        .then(response => response.json())
        .then(async data => {
            let maxResultsCategory = data.available_filters.find(({ name }) => name == CATEGORY_FILTER_NAME)

            maxResultsCategory = maxResultsCategory ? maxResultsCategory.values.sort((a, b) => b.results - a.results)[0] : undefined

            const responseCategories = maxResultsCategory ? await getCategories(maxResultsCategory.id) : undefined

            const body = {
                author, 
                categories: responseCategories ? responseCategories.path_from_root.map(({ name }) => name) : [],
                items: data.results.map(r => getItem(r)),
            }
            
            res.status(200).send(body)
        })
}

module.exports = {
    getByID,
    search
}