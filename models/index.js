// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // specify category ID as the foreign key
  foreignKey: 'category_id',
  onDelete: 'cascade'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',

});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag
  },
  foreignKey: 'product_id',
  //as: ''
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag
  },
  foreignKey: 'tag_id',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
