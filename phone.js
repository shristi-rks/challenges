function number(phone) {
    if (phone[0] !== "+") {
        return "Invalid number, use +";
    } else if (phone.length != 14) {
        return "Invalid, enter + followed by 3 digits country code and 10 digits number";
    } else {
        return phone;
    }
}
console.log(number("+9841302"));
console.log(number("9841302440"));
console.log(number("+9779841302440"));