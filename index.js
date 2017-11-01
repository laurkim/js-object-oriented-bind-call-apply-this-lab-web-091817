function justInvoke(cb) {
  return cb();
};

function setThisWithCall(cb, obj, arg) {
  return cb.call(obj, arg);
};

function setThisWithApply(cb, obj, arg) {
  return cb.apply(obj, arg);
};

function returnNewFunctionOf(cb, obj) {
  return cb.bind(obj);
}
