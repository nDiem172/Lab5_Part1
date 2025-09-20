const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/renderController");

router.get("/", ctrl.renderSuppliers);           // Trang danh sách nhà cung cấp
router.get("/new", ctrl.renderNewSupplier);      // Trang thêm mới nhà cung cấp
router.get("/:id/edit", ctrl.renderEditSupplier); // Trang sửa nhà cung cấp

/**
 * @swagger
 * tags:
 *   name: Suppliers
 *   description: Quản lý nhà cung cấp
 */

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Lấy danh sách tất cả nhà cung cấp
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: Danh sách nhà cung cấp
 */
router.get("/", ctrl.renderSuppliers);

/**
 * @swagger
 * /suppliers:
 *   post:
 *     summary: Tạo mới nhà cung cấp
 *     tags: [Suppliers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Nhà cung cấp đã được tạo
 */
router.post("/", ctrl.createSupplier);

/**
 * @swagger
 * /suppliers/{id}:
 *   put:
 *     summary: Cập nhật nhà cung cấp
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của nhà cung cấp
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
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Nhà cung cấp đã được cập nhật
 */
router.put("/:id", ctrl.updateSupplier);

/**
 * @swagger
 * /suppliers/{id}:
 *   delete:
 *     summary: Xóa nhà cung cấp
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID của nhà cung cấp
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Nhà cung cấp đã bị xóa
 */
router.delete("/:id", ctrl.deleteSupplier);

module.exports = router;
