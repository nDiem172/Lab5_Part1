const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/renderController");

router.get("/", ctrl.renderProducts);          // Trang danh sách sản phẩm
router.get("/new", ctrl.renderNewProduct);     // Trang thêm mới sản phẩm
router.get("/:id/edit", ctrl.renderEditProduct); // Trang sửa sản phẩm

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Quản lý sản phẩm
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Lấy danh sách tất cả sản phẩm
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm
 */
router.get("/", ctrl.renderProducts);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Tạo mới sản phẩm
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               quantity:
 *                 type: integer
 *               supplierId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sản phẩm đã được tạo
 */
router.post("/", ctrl.createProduct);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Cập nhật sản phẩm
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của sản phẩm
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               quantity:
 *                 type: integer
 *               supplierId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sản phẩm đã được cập nhật
 */
router.put("/:id", ctrl.updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Xóa sản phẩm
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của sản phẩm
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sản phẩm đã bị xóa
 */
router.delete("/:id", ctrl.deleteProduct);


module.exports = router;
