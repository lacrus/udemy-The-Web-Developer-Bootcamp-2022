import mongoose from "mongoose";
// const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ecommerce", {})
  .then(() => {
    console.log("Conectado");
  })
  .catch((e) => {
    console.log(e, "Error");
  });

const usuarioSchema = new mongoose.Schema({
  email: String,
  password: String,
  fechaNacimiento: Number,
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

// C - INSERTING

// const juan = new Usuario({
//   email: "asd",
//   password: "123",
//   fechaNacimiento: 18091988,
// });
// juan.save().then(() => console.log("meow"));

// Usuario.insertMany([
//   { email: "a", password: "1", fechaNacimiento: 12345678 },
//   { email: "b", password: "2", fechaNacimiento: 22345678 },
//   { email: "c", password: "3", fechaNacimiento: 32345678 },
//   { email: "d", password: "4", fechaNacimiento: 42345678 },
// ]).then((data) => console.log(data));

// R - FINDING

// Usuario.find({ email: "d" }).then((data) => console.log(data));
// Usuario.find({ fechaNacimiento: { $gte: 12345678 } }).then((data) =>
//   console.log(data)
// );

// // USANDO .exec()
// async function fetch() {
//   const algo = await Usuario.findOne({
//     fechaNacimiento: { $gte: 12345678 },
//   }).exec();
//   console.log("algo: ", algo);
// }
// fetch();

// U - UPDATING

// const res = await Usuario.updateOne(
//   { email: "d" },
//   { password: "otra cosa" }
// ).exec();
// console.log("res: ", res);

// const res2 = await Usuario.updateMany(
//   { email: { $in: ["a", "b"] } },
//   {
//     password: "zxkfjbk password",
//   }
// );
// console.log("res2: ", res2);

// const res3 = await Usuario.findOneAndUpdate(
//   { email: { $in: ["c", "d"] } },
//   {
//     password: "qwe345",
//   },
//   { new: true } // =>=>=>=> para que nos traiga el objeto cambiado.. sino trae el viejo
// );
// console.log("res3: ", res3);

// const findById = await Usuario.findByIdAndUpdate(
//   "6338e2324250567181eeaa38",
//   {
//     password: "password por ID",
//   },
//   { new: true }
// );
// console.log("por Id:", findById);

// D - DELETING

// const delete1 = await Usuario.remove({ email: "a" }); // .remove DEPRECATED
// console.log(delete1);

const delete2 = await Usuario.deleteOne({ email: "b" });
console.log(delete2);

const delete3 = await Usuario.deleteMany({
  fechaNacimiento: { $gte: 32345678 },
});
console.log(delete3);

const delete4 = await Usuario.findByIdAndDelete("elid");
console.log(delete4);
