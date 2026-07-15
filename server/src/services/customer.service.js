const customerRepository = require("../repositories/customer.repository");

class CustomerService {

    async createCustomer(data) {

        const exists = await customerRepository.findBySlug(data.slug);

        if (exists) {
            throw new Error("Customer already exists");
        }

        return await customerRepository.create(data);

    }

}

module.exports = new CustomerService();