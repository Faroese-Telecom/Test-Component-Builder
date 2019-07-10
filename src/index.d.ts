/* tslint:disable */

export declare class Builder<T = any> {
  constructor(builder: Function);
  with(properties: Object): Builder<T>;
  using(wrapper: Function, prewrapper: Function): Builder<T>;
  inject(values: Object, clone: boolean): Builder<T>;
  override(key: string, values: Object): Builder<T>;
  create(): T;
}

declare function constructBuilder<T = any>(builder: Function): Builder<T>;

export default constructBuilder;
