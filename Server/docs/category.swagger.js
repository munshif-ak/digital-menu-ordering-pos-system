/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Category management APIs
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "68a4adbedecb27483288143f"
 *         name:
 *           type: string
 *           example: "Desserts"
 *         img_url:
 *           type: string
 *           example: "http://localhost:5000/uploads/1693045681234.png"
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
 * /api/menus/category:
 *   get:
 *     tags: [Categories]
 *     summary: Get all categories
 *     description: Returns a list of all categories
 *     responses:
 *       200:
 *         description: A list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *
 *   post:
 *     tags: [Categories]
 *     summary: Create a new category
 *     description: Adds a new category to the system (with image upload)
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Beverages"
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */

/**
 * @swagger
 * /api/menus/category/{id}:
 *   get:
 *     tags: [Categories]
 *     summary: Get a single category by ID
 *     description: Fetch a single category using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category ID
 *     responses:
 *       200:
 *         description: Category fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category not found
 *
 *   patch:
 *     tags: [Categories]
 *     summary: Update a category by ID
 *     description: Update an existing category (with optional new image upload)
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Desserts"
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Category updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category not found
 *
 *   delete:
 *     tags: [Categories]
 *     summary: Delete a category by ID
 *     description: Remove a category permanently
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category ID
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 */
