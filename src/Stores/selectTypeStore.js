import { observable, action } from "mobx";

export class SelectTypeStore {
  @observable
  selectType = "";

  @action
  handleChange(value) {
    this.selectType = value;
  }
}
