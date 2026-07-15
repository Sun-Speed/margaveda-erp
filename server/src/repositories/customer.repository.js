const Customer = require("../models/tenant/Customer.model");

class CustomerRepository {

    async create(data, session = null) {
        const [customer] = await Customer.create([data], { session });
        return customer;
    }

    async findBySlug(slug) {
        return Customer.findOne({ slug });
    }

    async findById(id) {
        return Customer.findById(id);
    }

    async update(id, data) {
        return Customer.findByIdAndUpdate(id, data, {
            new: true,
        });
    }

    async delete(id) {
        return Customer.findByIdAndDelete(id);
    }

}

module.exports = new CustomerRepository();