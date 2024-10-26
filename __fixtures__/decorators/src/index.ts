export * from './class';
export * from './object';
class MyClass {
  @log('debug')
  @performance
  async fetchData() {
    // ... method implementation
  }
}