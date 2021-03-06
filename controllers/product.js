const _ = require('lodash');
const deleteImage = require('../components/deleteImage');
const ProductAPI = require('../database/models/product');
const upload = require('../components/upload');

module.exports = {
    async getProducts(req, res) {
        const page = Number(req.query.page);
        const perPage = Number(req.query.perPage);
        try {
            const products = await ProductAPI.getProducts();
            const length = Math.ceil(products.length / perPage);
            const pageProduct = products.splice(( page - 1) * perPage, perPage);
            const response = {
                data: pageProduct,
                pagination: {
                    page,
                    perPage,
                    length
                }
            };
            res.status(200).send(response);
        } catch (e) {
            res.status(500).send({ message: 'Error get product'});
        }
    },

    async filterProducts(req, res) {
        const filter = req.body.filter;
        const pagination = req.body.pagination;
        try {
            const products = await ProductAPI.getProductsFilter(filter);
            const length = Math.ceil(products.length / pagination.perPage);
            const pageProduct = products.splice(( pagination.page - 1) * pagination.perPage, pagination.perPage);
            const response = {
                data: pageProduct,
                pagination: {
                    page: pagination.page,
                    perPage: pagination.perPage,
                    length
                }
            };
            res.status(200).send(response);
        } catch (e) {
            res.status(500).send({ message: 'Error get filter products'});
        }
    },

    async getProduct(req, res) {
        try {
            const id = req.params.id;
            const product = await ProductAPI.getProduct(id);
            res.status(201).send(product);
        } catch (e) {
            res.status(500).send({ message: 'Error get product for id'});
        }
    },

    async addProduct(req, res) {
        try {
            await upload(req, res, async (err) => {
                if (err) {
                    res.status(400).json({message: "Failed to upload files"});
                    return
                }
                let { body: { body: productData } } = req;
                const { req: {files} } = res;
                productData = JSON.parse(productData);
                files.forEach((file) => {
                    productData.images.push({name: file.filename})
                });
                const product = await ProductAPI.addProduct(productData);
                await product.save();
                res.status(201).send(product);
            });
        } catch (e) {
            res.status(500).send({ message: e.message});
        }
    },

    async updateProduct(req, res) {
        try {
            await upload(req, res, async (err) => {
                if (err) {
                    res.status(400).json({message: "Failed to upload files"});
                    return
                }
                let { body: { body: productData } } = req;
                const { req: {files} } = res;
                productData = JSON.parse(productData);
                files.forEach((file) => {
                    productData.images.push({name: file.filename})
                });
                const id = req.params.id;
                await ProductAPI.updateProduct(id, productData);
                const product = await ProductAPI.getProduct(id);
                res.status(201).send(product);
            });


        } catch (e) {
            res.status(500).send({ message: 'Error update product'});
        }
    },

    async deletedProduct(req, res) {
        try {
            const productId = req.params.id;
            const product = await ProductAPI.getProduct(productId);
            const images = _.get(product, 'images');
            images.forEach(img => {
                deleteImage(img.name);
            });
            await ProductAPI.deletedProduct(productId);
            res.status(200).send({ message: 'Deleted product'});
        } catch (e) {
            res.status(500).send({ message: 'Error deleted product'});
        }
    },

    async imageDelete(req, res) {
        try {
            const productId = req.params.productId;
            const imageId = req.params.imageId;
            const product = await ProductAPI.getProduct(productId);
            const images = product.images;
            const index = images.findIndex(img => img._id == imageId);
            deleteImage(images[index].name);
            images.splice(index, 1);
            await product.save();
            res.status(200).send({ message: 'Deleted product image'});
        } catch (e) {
            res.status(500).send({ message: 'Error deleted product image'});
        }
    },

    async imageBase(req, res) {
        try {
            const productId = _.get(req, 'params.productId');
            const imageId = _.get(req,'params.imageId');
            const bagItemId = _.get(req, 'params.bagItemId');
            const product = await ProductAPI.getProduct(productId);
            const images = _.get(product, 'images');
            images.forEach((image) => {
                if (image.bagItemId == bagItemId) {
                    image.base = image._id == imageId;
                }
            });
            await product.save();
            res.status(200).send({ data: { images: images}, message: 'Product base image save'});
        } catch (e) {
            res.status(500).send({ message: 'Error product base image'});
        }
    },

    async productImageColor(req, res) {
        try {
            const productId = _.get(req, 'params.productId');
            const imageId = _.get(req, 'params.imageId');
            const bagItemId = _.get(req, 'params.bagItemId');
            const product = await ProductAPI.getProduct(productId);
            const images = _.get(product, 'images');
            images.forEach((image) => {
                if (image._id == imageId) {
                    image.bagItemId = bagItemId;
                }
            });
            await product.save();
            res.status(200).send({ message: 'Product image color save'});
        } catch (e) {
            res.status(500).send({ message: 'Error product image color save'});
        }
    }
};
