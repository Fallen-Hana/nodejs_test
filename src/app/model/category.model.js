const db = require('../config/db/db');
class Category {
    get_all = (result) => {
        const query = "SELECT * FROM category"
        db.query(query, (err, list) => {
            if (err) {
                result(null);
            } else {
                result(list);
            }
        });
    };
}
module.exports = new Category();