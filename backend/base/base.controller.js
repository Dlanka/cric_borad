const { StatusCodes } = require("http-status-codes");

class BaseController {
  constructor(repoClass) {
    this.repo = new repoClass();
  }

  // Common methods
  sendResult(res, { status, message = "Ok", ...others }) {
    return res.status(status).send({
      result: {
        statusCode: status,
        message,
        ...others,
      },
    });
  }

  sendOk = (res, { data }) => {
    return this.sendResult(res, {
      status: StatusCodes.OK,
      message: "Success",
      data,
    });
  };

  sendInternalServerError = (res) => {
    return this.sendResult(res, {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Internal server error",
    });
  };

  // common db methods
  getAll = async (req, res) => {
    try {
      const docs = await this.repo.findAll();
      return this.sendOk(res, { data: docs });
    } catch (error) {
      return this.sendInternalServerError(res);
    }
  };
}

module.exports = BaseController;
