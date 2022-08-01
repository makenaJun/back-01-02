import {check} from "express-validator";

export const bloggersValidator = {
    "GET_BLOGGER": [
        check(['id'])
            .isNumeric()
            .withMessage('Invalid data type passed'),
    ],
    "CREATE_BLOGGER": [
        check(['name'])
            .isString()
            .withMessage('Invalid data type passed')
            .isLength({max: 15})
            .withMessage('Max 15 symbols'),
        check(['youtubeUrl'])
            .isURL()
            .withMessage('Not correct url')
            .isLength({max: 100})
            .withMessage('Max 100 symbols'),
    ],
    "UPDATE_BLOGGER": [
        check(['id'])
            .isNumeric()
            .withMessage('Invalid data type passed'),
        check(['name'])
            .isString()
            .withMessage('Invalid data type passed')
            .isLength({max: 15})
            .withMessage('Max 15 symbols'),
        check(['youtubeUrl'])
            .isURL()
            .withMessage('Not correct url')
            .isLength({max: 100})
            .withMessage('Max 100 symbols'),
    ],
    "DELETE_BLOGGER": [
        check(['id'])
            .isNumeric()
            .withMessage('Invalid data type passed'),
    ],
}

