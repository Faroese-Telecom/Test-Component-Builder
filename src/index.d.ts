/* tslint:disable */

export class Builder {
  constructor(builder: Function): void;
  with(properties: Object): Builder;
  using(wrapper: Function, prewrapper: Function): Builder;
  inject(values: Object, clone: boolean): Builder;
  override(key: string, values: Object): Builder;
  create(): any;
}

export default function(builder: Function): Builder;
