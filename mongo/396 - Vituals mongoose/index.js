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

productSchema.virtual("fullName").get(function () {
  return `${this.name} ${this.price}`;
});

productSchema.virtual("fullName").set(function (elnombre) {
  this.name = elnombre.split(" ")[0];
  this.price = elnombre.split(" ")[1];
});

const Producto = mongoose.model("Producto", productSchema);

const res = await Producto.findOne({ name: "teclado" });
res.fullName = "teclado2 505"; // ESTO ES EL .SET
console.log(res.fullName); // ESTO ES EL .GET
await res.save()