class CodersArrays {
  data;

  constructor(...data) {
    this.data = data
  };

  length(...data) {
    return this.data.length;
  }
};

  push(AddedNumber) {
    const length = this.length();
    this.data[length] = addedNumber;
    return [...this.data, addedNumber]
  };

export default CodersArrays;
