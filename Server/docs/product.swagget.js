/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management APIs
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "64f7b2a8d2a3e24a3c8d1234"
 *         name:
 *           type: string
 *           example: "Chocolate Cake"
 *         categoryId:
 *           type: string
 *           example: "68a4adbedecb27483288143f"
 *         categoryName:
 *           type: string
 *           example: "Desserts"
 *         img_url:
 *           type: string
 *           example: "http://localhost:5000/uploads/1693045681234.png"
 *         price:
 *           type: number
 *           example: 199.99
 *         isAvailable:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-08-19T17:00:46.096Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-08-20T18:26:27.856Z"
 *         __v:
 *           type: integer
 *           example: 0
 */

/**
 * @swagger
 * /api/menus/products:
 *   get:
 *     tags: [Products]
 *     summary: Get all products
 *     description: Returns a list of all products
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *
 *   post:
 *     tags: [Products]
 *     summary: Create a new product
 *     description: Adds a new product (with optional image upload)
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - categoryId
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Pasta Alfredo"
 *               categoryId:
 *                 type: string
 *                 example: "68a4adbedecb27483288143f"
 *               price:
 *                 type: number
 *                 example: 249.99
 *               isAvailable:
 *                 type: boolean
 *                 example: true
 *               productImage:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /api/menus/product/{id}:
 *   get:
 *     tags: [Products]
 *     summary: Get a single product by ID
 *     description: Fetch a single product using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *
 *   patch:
 *     tags: [Products]
 *     summary: Update a product by ID
 *     description: Update an existing product (with optional new image upload)
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Cake"
 *               categoryId:
 *                 type: string
 *                 example: "68a4adbedecb27483288143f"
 *               price:
 *                 type: number
 *                 example: 150.0
 *               isAvailable:
 *                 type: boolean
 *                 example: false
 *               productImage:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *
 *   delete:
 *     tags: [Products]
 *     summary: Delete a product by ID
 *     description: Remove a product permanently
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */

/**
 * @swagger
 * /api/menus/products/category/{categoryId}:
 *   get:
 *     tags: [Products]
 *     summary: Get products by category
 *     description: Fetch all products under a specific category ID
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         schema:
 *           type: string
 *         required: true
 *         description: The category ID
 *     responses:
 *       200:
 *         description: Products fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       404:
 *         description: No products found in this category
 */
