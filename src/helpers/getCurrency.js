const getCurrency = (currency, type) => {
  if (type === "symbol") {
    switch (currency.toLowerCase()) {
      case "ngn":
        return "₦";
      default:
        break;
    }
  }
};

export default getCurrency;
