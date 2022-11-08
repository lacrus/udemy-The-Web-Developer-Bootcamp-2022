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

productSchema.pre("save", async function () {
  this.name = "yo";
  console.log("antes de guardar", this.name);
});

productSchema.post("save", async function () {
  console.log("despues de guardar", this.name);
});

const Producto = mongoose.model("Producto", productSchema);

const res = await new Producto({ name: "middleware", price: 1 }).save();
// const res = await Producto.findOne({ name: "middleware" });
