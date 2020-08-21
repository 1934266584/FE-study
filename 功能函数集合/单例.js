class CreateUser {
  constructor(name) {
    this.name = name;
  }
}

export const ProxyMode = (function() {
  let instance = null;
  return function(name) {
    if (!instance) {
      instance = new CreateUser();
    }
    return instance;
  }
})()