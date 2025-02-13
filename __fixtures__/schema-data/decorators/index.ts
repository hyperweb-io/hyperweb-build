export * from './class';
export * from './object';
class MyClass {
  @permission('debug', 'level')
  @performance
  async fetchData() {
    // ... method implementation
  }
}

export default MyClass;
export {MyClass};