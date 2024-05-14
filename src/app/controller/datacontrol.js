const generateSlug = (name) => {
    return name
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, '-') // Xóa các ký tự không phải chữ cái hoặc số và thay thế chúng bằng dấu gạch ngang
        .replace(/^-+/, '') // Xóa dấu gạch ngang ở đầu chuỗi
        .replace(/-+$/, ''); // Xóa dấu gạch ngang ở cuối chuỗi
};
module.exports = generateSlug;