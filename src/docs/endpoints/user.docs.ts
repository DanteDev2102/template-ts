/**
 * @swagger
 * /users:
 *  post:
 *    tags:
 *      - users
 *    summary: "register user"
 *    description: details
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/users"
 *    responses:
 *      '201':
 *        description: sucessfully register user
 *      '400':
 *        description: bad request
 *      '500':
 *        description: internal error
 *      '417':
 *        description: is exist user in db
 *
 */
