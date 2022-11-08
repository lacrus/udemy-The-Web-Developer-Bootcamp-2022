import mongoose from "mongoose";
// const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/validationSchema", {})
  .then(() => {
    console.log("Conectado");
  })
  .catch((e) => {
    console.log(e, "Error");
  });

const productSchema = new mongoose.Schema({
  // forma corta
  price: Number,
  // forma larga => nos permite crear validaciones extras
  name: { type: String, required: true, maxlength: 10 },
  onSale: { type: Boolean, default: false },
  // mensajes de errrores personalizados
  sale: { type: Number, min: [0, "el descuento debe ser positivo"] },
  categorias: { type: [String] },
  // validaciones anidadas => objeto con varias opciones
  qty: {
    online: { type: Number, default: 0 },
    inStore: { type: Number, default: 0 },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

// el nombre del modelo tiene que ser singular, capitalizado
const Producto = mongoose.model("Producto", productSchema);

// PROPIEDAD QUE NO ESTA EN LA VALIDATION no se guarda => ej: color: "azul"
// const bicicleta = new Producto({ name: "asd", price: "1000", color: "azul" });
// bicicleta
//   .save()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// PROPIEDAD QUE NO CONTEMPLAMOS PERO SE AGREGA POR DEFAULT ej: onSale
// const tijera = await new Producto({
//   name: "tijera",
//   price: 50,
// }).save();
// console.log(tijera);

// VALIDACION PARTICULAR POR TYPE ej: name.maxlength: 20
// ESTO DA ERROR!
// const zapato = await new Producto({
//   name: "12345678901234567890",
//   price: 502,
// }).save();
// console.log(zapato);

// const percha = await new Producto({
//   name: "percha",
//   price: -1,
//   sale: -1,
// }).save();
// console.log(percha);

// ARRAY
// try {
//   const teclado = await new Producto({
//     name: "teclado",
//     price: 1,
//     sale: 0,
//     categorias: ["bicicleta", "otra cosa", "otra mas"],
//   }).save();
//   console.log(teclado);
// } catch (e) {
//   console.log(e);
// }

// const delete2 = await Producto.deleteOne({ name: "percha", });
// console.log(delete2);

// VALIDATION UPDATING
try {
  console.log("hola mundo");
  const respuesta = await Producto.findOneAndUpdate(
    { name: "teclado" },
    { size: "M" },
    { new: true, runValidators: true }
  );
  console.log(respuesta);
} catch (e) {
  console.log(e);
}
