import UserModel from "../models/user.model";

// User Registration
export const userRegistration = async (req: any, res: any) => {
    const {full_name, email, password, confirm_password, phone} = req.body
    const user = await UserModel.findOne({ where: { email: email } })

    if (password !== confirm_password) {
        res.json({"status": "warning", "message": "Passwords do not match"})
      }

    if (user) {
        res.json({"status": "warning", "message": "Email already exists"})

    } else {
        try {
            const getuser = await UserModel.create(req.body);

            if(getuser){
                return res.json({
                    "status": "success", "message": "Registration Success", "data": getuser
                });
            }
        } catch (error) {
            res.json({
                message: "Internal server error",
                status: "error"
            });
        }
    }

};
