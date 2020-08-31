import { observable, action } from "mobx";

export class AppStore {
  @observable locationPathname;

  @action setLocation = (location) => {
    this.locationPathname = location;
  };
}
