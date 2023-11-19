const BaseController = require("../base/base.controller");
const UserRepository = require("../repositories/user.repository");
// const User = require("./../models/user.model");

class UserController extends BaseController {
  constructor() {
    super(UserRepository);
  }

  // getAllUsers(_, res) {
  //   User.find()
  //     .then((docs) => {
  //       return res.status(StatusCodes.OK).send(docs);
  //     })
  //     .catch((err) => {
  //       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
  //         message: "Internal server error",
  //       });
  //     });
  // }

  // async save(req, res) {
  //   const body = req.body;

  //   try {
  //     // const userExist = (await User.where("email").equals(body.email).exec())
  //     //   .length;

  //     // if (userExist > 0) {
  //     //   throw {
  //     //     error: {
  //     //       message: "User already exists",
  //     //     },
  //     //   };
  //     // }

  //     // const s = await User.init();
  //     // const user = new User();
  //     // user.name = body.name;
  //     // user.email = body.email;
  //     // user.password = body.password;
  //     // user.firstName = body.firstName;
  //     // user.lastName = body.lastName;

  //     // user.validateSync();
  //     // let doc = await user.save();

  //     res.status(StatusCodes.CREATED).send(doc);
  //   } catch (error) {
  //     res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  //   }
  // }
}

module.exports = UserController;
