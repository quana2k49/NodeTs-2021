
import { StatusCode } from '../constants/statusCode';


const createErrorResTemplate = (data) => {
  const template = {
    error_name: data.error_name,
    error_message: data.error_message,
    status_code: data.status_code,

    // Create new error based on this template
    // new: (error?: Error) => {
    //   if (error) {
    //     loggerInstance.prettyError(error);
    //     return new ErrorRes(this.error_name, error.message, this.status_code);
    //   } else {
    //     return new ErrorRes(this.error_name, this.error_message, this.status_code);
    //   }
    // }
  };

  return template;
};

export const APIErrors = {
  INTERNAL_SERVER_ERROR: createErrorResTemplate({
    error_name: 'INTERNAL_SERVER_ERROR',
    error_message: 'Server Encountered Error',
    status_code: StatusCode.INTERNAL_SERVER_ERROR
  }),

  INVALID_PARAMETERS: createErrorResTemplate({
    error_name: 'INVALID_PARAMETERS',
    error_message: 'Some of the input parameters are invalid',
    status_code: StatusCode.BAD_REQUEST
  }),

  RESOURCE_NOT_FOUND: createErrorResTemplate({
    error_name: 'RESOURCE_NOT_FOUND',
    error_message: 'Resource not found',
    status_code: StatusCode.NOT_FOUND
  }),

  AUTHENTICATION_ERROR: createErrorResTemplate({
    error_name: 'AUTHENTICATION_ERROR',
    error_message: 'Authentication error',
    status_code: StatusCode.UNAUTHORIZED
  }),

  ALREADY_EXIST: createErrorResTemplate({
    error_name: 'ALREADY_EXIST',
    error_message: 'Object already exist',
    status_code: StatusCode.UNPROCESSABLE_ENTITY
  }),

  INSUFFICIENT_PRIVILEGES: createErrorResTemplate({
    error_name: 'INSUFFICIENT_PRIVILEGES',
    error_message: 'Operation Not Allowed',
    status_code: StatusCode.FORBIDDEN
  }),

  UNPROCESSABLE_ENTITY: createErrorResTemplate({
    error_name: 'UNPROCESSABLE_ENTITY',
    error_message: 'Some of request inputs are unprocessable',
    status_code: StatusCode.UNPROCESSABLE_ENTITY
  }),
  MAIL_SERVICE_ERROR: createErrorResTemplate({
    error_name: 'MAIL_SERVICE_ERROR',
    error_message: 'Cannot send email to user',
    status_code: StatusCode.INTERNAL_SERVER_ERROR
  })
};
