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
            .withMessage('Invalid data type passed'),
        check(['youtubeUrl'])
            .isURL()
            .withMessage('Not correct url'),
    ],
    "UPDATE_BLOGGER": [
        check(['id'])
            .isNumeric()
            .withMessage('Invalid data type passed'),
        check(['name'])
            .isString()
            .withMessage('Invalid data type passed'),
        check(['youtubeUrl'])
            .isURL()
            .withMessage('Not correct url'),
    ],
    "DELETE_BLOGGER": [
        check(['id'])
            .isNumeric()
            .withMessage('Invalid data type passed'),
    ],
}

