import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/validationSchema", {})
  .then(() => {
    console.log("Conectado");
  })
  .catch((e) => {
    console.log(e, "Error");
  });

const productSchema = new mongoose.Schema({
  price: Number,
  name: { type: String, required: true, maxlength: 10 },
  onSale: { type: Boolean, default: false },
  categories: { type: [String] },
});

// INSTANCE METHODS ------------------------------------------------------------

productSchema.methods.greet = function () {
  console.log("hola que tal como estas!?!?!?!");
  console.log(`-- desde ${this.name}`);
};

productSchema.methods.changeOnSale = function () {
  console.log("this1", this.onSale);
  this.onSale = !this.onSale;
  console.log("this2", this.onSale);
  return this.save();
};

productSchema.methods.addCategory = function (nuevaCategoria) {
  this.categories.push(nuevaCategoria);
  return this.save();
};

// STATIC METHODS ------------------------------------------------------------

productSchema.statics.fireSale = async function () {
  return await this.updateMany({}, { onSale: true, price: 0 });
};

productSchema.statics.findByCategory = async function (categoria){
     await this.find()
}

const Producto = mongoose.model("Producto", productSchema);

// INSTANCE METHODS ------------------------------------------------------------

// try {
//   const p = await new Producto({ name: "instancia2", price: 10 }).save();
//     console.log(p);
// } catch (e) {
//   console.log(e);
// }

// try {
//   const res = await Producto.findOne({ name: "teclado" });
//   res.greet();
// } catch (e) {
//   console.log(e);
// }

// try {
//   const res = await Producto.findOne({ name: "instancia2" });
//   res.greet();
//   await res.changeOnSale();
//   console.log(res);
// } catch (error) {}

// try {
//   const res = await Producto.findOne({ name: "instancia2" });
//   await res.addCategory("nueva categoria");
//   console.log(res);
// } catch (e) {
//   console.log(e);
// }

// STATIC METHODS ------------------------------------------------------------

const res = await Producto.fireSale();
console.log(res);
