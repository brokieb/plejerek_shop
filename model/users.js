const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default:
        "data:image/jpeg;base64,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",
    },
    password: {
      type: String,
    },
    emailVerified: {
      type: Number,
      default: null,
    },
    permission: {
      type: Number,
      required: true,
      default: 0,
    },
    cart: {
      items: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Product",
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

// clientSchema.methods.removeFromCart = function (productId) {
// 	const updatedCartItems = this.cart.items.filter((item) => {
// 		return item.productId.toString() !== productId.toString();
// 	});
// 	this.cart.items = updatedCartItems;
// 	return this.save();
// };

// clientSchema.methods.clearCart = function () {
// 	this.cart = [];
// 	return this.save();
// };

// clientSchema.methods.ChangeCartItemQty = function (productId, mode) {
// 	const ProductIndex = this.cart.items.findIndex((cp) => {
// 		return cp.productId.toString() === productId.toString();
// 	});
// 	switch (mode) {
// 		case 'increase':
// 			this.cart.items[ProductIndex].quantity = this.cart.items[ProductIndex].quantity + 1;
// 			break;
// 		case 'decrease':
// 			this.cart.items[ProductIndex].quantity = this.cart.items[ProductIndex].quantity - 1;
// 			break;
// 	}
// 	if (this.cart.items[ProductIndex].quantity == 0) {
// 		this.cart.items.splice(ProductIndex, 1);
// 	}
// 	return this.save();
// };

export default mongoose.models.Users || mongoose.model("Users", usersSchema);
