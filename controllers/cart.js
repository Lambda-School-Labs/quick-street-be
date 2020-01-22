const Cart = require('../models/Cart');
const Customer = require('../models/Customer');
const Product = require('../models/Product');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');



// @desc    Get cart
// @route   GET /api/v1.0/customers/:customerId/cart
// @access  Public
exports.getCart = asyncHandler(async (req, res, next) => {
    console.log('customerId', req.params.customerId)

    const cart = await Cart.findOne({
        owner: req.params.customerId
    })
    .populate('items.item')

    if(!cart) {
        return next(new ErrorResponse(`No customer with id ${req.params.customerId} owns this cart`, 404))
    }
});

// @desc    Create cart to customer
// @route   POST /api/v1.0/customers/:customerId/cart
// @access  Public
exports.addCart = asyncHandler(async (req, res, next) => {
    req.body.owner = req.params.customerId;
    console.log('Creating new cart from customerId', req.body.owner);

    const customer = await Customer.findById(req.params.customerId)
    if(!customer) {
        return next( new ErrorResponse(`No customer with the id of ${req.params.customerId}`, 404))
    }

    const cart = await Cart.create(req.body);
    res.status(200).json({
        success: true,
        data: cart
    });
})


// @desc    Delete cart
// @route   DELETE /api/v1.0/customers/:customerId/cart
// @access  Private
exports.deleteCart = asyncHandler(async (req, res, next) => {
    const cart = await Cart.findOneAndDelete(req.body.items)

    if(!cart) {
        return next(new ErrorResponse(`Cart not found`, 404))
    }

    cart.remove();

    res.status(200).json({
        success: true,
        data: {}
    })
})
