const express = require('express');
const router = express.Router();


// middleware
const authMiddleware = require('../components/middleware/auth');
// Controllers
const authController = require('../controllers/auth');
const categoryController = require('../controllers/category');
const staffController = require('../controllers/staff');
const SubcategoryController = require('../controllers/subCategory');
const ProductController = require('../controllers/product');
const ColorController = require('../controllers/color');

// Login
router.post('/auth', authMiddleware, authController);
// staff routes
router.get('/staffs', staffController.getStaffs);
router.get('/staff/:id', staffController.getStaff);
router.post('/staff', staffController.addStaff);
router.delete('/staff/:id', staffController.deletedStaff);
router.put('/staff/:id', staffController.updateStaff);
// category routes
router.get('/categories', categoryController.getCategories);
router.get('/category/:id', categoryController.getCategory);
router.post('/category', categoryController.addCategory);
router.delete('/category/:id', categoryController.deletedCategory);
router.put('/category/:id', categoryController.updateCategory);
// sub category routes
router.get('/subCategories', SubcategoryController.getSubCategories);
router.get('/subCategory/:id', SubcategoryController.getSubCategory);
router.post('/subCategory', SubcategoryController.addSubCategory);
router.delete('/subCategory/:id', SubcategoryController.deletedSubCategory);
router.put('/subCategory/:id', SubcategoryController.updateSubCategory);
router.get('/subCategories/:categoryId', SubcategoryController.getSubCategoriesForCategory);
// product routes
router.get('/products', ProductController.getProducts);
router.get('/product/:id', ProductController.getProduct);
router.post('/product', ProductController.addProduct);
router.post('/products-filter', ProductController.filterProducts);
router.delete('/product/:id', ProductController.deletedProduct);
router.put('/product/:id', ProductController.updateProduct);
router.delete('/product/image-delete/:productId/:imageId', ProductController.imageDelete);
router.put('/product/image-base/:productId/:imageId/:bagItemId', ProductController.imageBase);
router.put('/product/image-color/:productId/:imageId/:bagItemId', ProductController.productImageColor);
// colors routes
router.get('/colors', ColorController.getColors);
router.get('/color/:id', ColorController.getColor);
router.post('/color', ColorController.addColor);
router.delete('/color/:id', ColorController.deletedColor);
router.put('/color/:id', ColorController.updateColor);

module.exports = router;
