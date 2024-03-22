const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: [true, "An order must have a product"],
  },
  quantity: {
    type: Number,
    default: 1,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [orderItemSchema],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: [true, "An order must have a specified payment method"],
    },
    paymentResult: {
      id: String,
      status: String,
      updateTime: String,
      emailAddress: String,
    },
    orderPrice: {
      type: Number,
      default: 0,
    },
    taxPrice: {
      type: Number,
      default: 0,
    },
    shippingPrice: {
      type: Number,
      default: 0,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    paidAt: Date,
    isDelivered: {
      type: Boolean,
      default: false,
    },
    deliveredAt: Date,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

orderSchema.virtual("totalPrice").get(function () {
  return (
    this.orderItems.reduce((acc, orderItem) => acc + orderItem.itemsPrice, 0) +
    this.taxPrice +
    this.shippingPrice
  );
});

orderSchema.pre("save", function (next) {
  this.orderPrice = this.orderItems.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  this.taxPrice = Number(this.orderPrice * 0.15).toFixed(2);

  this.shippingPrice = this.orderPrice < 100 ? 0 : 100;

  console.log(this.orderPrice);
  next();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
