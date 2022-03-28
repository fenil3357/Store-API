const notFound = (req, res) => {
    console.log('Error 404 occured...')
    res.status(404).send('Route does not exist')
}

module.exports = notFound
