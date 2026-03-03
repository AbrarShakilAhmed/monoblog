const mongodb = require('mongodb')
const dns = require('dns')
const { error } = require('console')

dns.setServers(['1.1.1.1', '8.8.8.8'])

const url =
  'mongodb+srv://admin:admin@ecommerce.2lvq0sq.mongodb.net/?appName=ecommerce'

let _db
const mongoConnect = (callback) => {
  mongodb.MongoClient.connect(url)
    .then((client) => {
      _db = client.db('blogs')
      callback()
    })
    .catch((err) => {
      console.log(err)
    })
}

const getDB = () => {
  if (_db) {
    return _db
  } else {
    throw new Error('No database found!')
  }
}
exports.mongoConnect = mongoConnect
exports.getDB = getDB
