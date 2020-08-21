// 将所有的功能都写成函数，并在需要的时候调用似乎很简单，但是这种做法缺少范围定义，很容易引发一连串的问题，影响到许多未知但相互关联的关系。

class CustomerOrder {
  constructor(customerId, orderId) {
    this.customerId = customerId;
    this.orderId = orderId;
  }

  // getter as the entry point
  get orderDetails() {
    return this.pullOrderDetails();
  }

  // the method to find the order details
  pullOrderDetails() {
    // pull order details code here.
    return 1;
  }
}

const order_1 = new CustomerOrder(8232918, 'FA-38493x');

console.log(order_1.orderDetails);