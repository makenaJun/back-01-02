import {check} from "express-validator";

export const postsValidator = {
    "GET_POST": [
        check(['id'])
            .isNumeric()
            .withMessage('Invalid data type passed'),
    ],
    "CREATE_POST": [
        check(['title'])
            .isString()
            .withMessage('Invalid data type passed')
            .isLength({max: 30})
            .withMessage('Max 30 symbols'),
        ,
        check(['shortDescription'])
            .isString()
            .withMessage('Invalid data type passed'),
        check(['content'])
            .isString()
            .withMessage('Invalid data type passed'),
        check(['bloggerId'])
            .isNumeric()
            .withMessage('Invalid data type passed')
    ],
    "UPDATE_POST": [
        check(['title'])
            .isString()
            .withMessage('Invalid data type passed')
            .isLength({max: 30})
            .withMessage('Max 30 symbols'),
        check(['shortDescription'])
            .isString()
            .withMessage('Invalid data type passed'),
        check(['content'])
            .isString()
            .withMessage('Invalid data type passed'),
        check(['bloggerId'])
            .isNumeric()
            .withMessage('Invalid data type passed')
    ],
    "DELETE_POST": [
        check(['id'])
            .isNumeric()
            .withMessage('Invalid data type passed'),
    ],
}

