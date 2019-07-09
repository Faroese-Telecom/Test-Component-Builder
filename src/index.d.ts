/* tslint:disable */

export declare class Builder {
  constructor(builder: Function);
  with(properties: Object): Builder;
  using(wrapper: Function, prewrapper: Function): Builder;
  inject(values: Object, clone: boolean): Builder;
  override(key: string, values: Object): Builder;
  create(): any;
}

declare function constructBuilder(builder: Function): Builder;

export default constructBuilder;
