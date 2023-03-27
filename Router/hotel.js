 const express = require('express');
const hotelController = require('../Controller/hotelcontroller');

 const router = express.Router();



/**
 * @swagger
 *  components:
 *    schemas:
 *      post:
 *        type: object
 *        properties:
 *          name:
 *           type: string
 *           description: hotel name
 *          address:
 *           type: string
 *           description: address of hotel
 *          fblink:
 *           type: string
 *           description: facebook link
 *          description:
 *           type: string
 *           description: Describe
 */

/**
 * @swagger
 * tags:
 *     name: post
 *     description: The post managing API endpoint
 */

 
/**
 * @swagger
 *  /post:
 *   post:
 *     summary: List of post data
 *     tags: [post]
 *     security:
 *	     - jwt: []
 *     requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schemas/post'
 *     responses:
 *      201:
 *          description: post Created Successfully
 *      500:
 *          description: Some Server Error
 */
router.post('/',hotelController.save);


/**
 * @swagger
 * /post:
 *  get:
 *     summary: Returns the list of all the post
 *     tags: [post]
 *     security:
 *	     - jwt: []
 *     responses:
 *      200:
 *          description: The list of the post
 */


router.get('/',hotelController.index);


/**
 * @swagger
 *  /post/{id}:
 *  get:
 *     summary: Get the post by id
 *     tags: [post]
 *     security:
 *	     - jwt: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *              required: true
 *              description: The post id
 *     responses:
 *      200:
 *          description: The post by id
 *      404:
 *          description: The post was not found
 */
router.get('/:id',hotelController.show);


/**
 * @swagger
 *  /post/{id}:
 *   patch:
 *     summary: Update the post by id
 *     tags: [post]
 *     security:
 *	     - jwt: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *              required: true
 *              description: The post id
 *     requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schemas/post'
 *     responses:
 *      200:
 *          description: post Updated Successfully
 *      500:
 *          description: Some Server Error
 */

router.patch('/:id',hotelController.update);


 /**
  * @swagger
  *  /post/{id}:
  *   delete:
  *     summary: Delete the post by id
  *     tags: [post]
  *     security:
  *	     - jwt: []
  *     parameters:
  *        - in: path
  *          name: id
  *          schema:
  *              type: integer
  *              required: true
  *              description: The post id
  *     responses:
  *      200:
  *          description: post Deleted Successfully
  *      500:
  *          description: Some Server Error
  */

router.delete('/:id',hotelController.destroy);

 module.exports = router;