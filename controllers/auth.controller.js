import user from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { fname, lname, email, dob, gender, phone, password, terms } =
      req.body;

    const duplicate = await user.findOne({ $or: [{ email }, { phone }] });
    console.log(duplicate);
    if (duplicate) {
      return res.status(200).json({ ok: false, message: "Already register" });
    }
    const newpassword = await bcrypt.hash(password, 5);
    const newUser = new user({
      fname,
      lname,
      email,
      dob,
      gender,
      phone,
      password: newpassword,
      terms,
    });
    await newUser.save();
    res.status(201).json({ ok: true, message: "Register successfull" });
  } catch (err) {
    console.log(`error found in regsiter api ::: ${err}`);
    res.status(500).json({ ok: false, message: "error at register api" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);
    // checking user or not
    const data = await user.findOne({ email });
    if (!data) {
      return res.status(404).json({ ok: false, message: "user not found" });
    }

    // password checking
    const ispasswordValid = await bcrypt.compare(password, data.password);
    if (!ispasswordValid) {
      return res
        .status(401)
        .json({ ok: false, message: "invalid credentials" });
    }

    res.status(200).json({
      ok: true,
      message: "login successfully",
      data: `hii, ${data.fname}`,
    });
  } catch (err) {
    res
      .status(500)
      .json({ ok: false, message: `error during logging ::: ${err}` });
  }
};
