import { makeAutoObservable } from "mobx";

class ModalStore {
  modalProduct = null;
  modalState = false;

  constructor() {
    makeAutoObservable(this,{},{autoBind:true});
  }
 
  openModal(data) {
    this.modalProduct = data;
    this.modalState = true;
  }

  closeModal() {
    this.modalProduct = null;
    this.modalState = false;
  }
}

export default new ModalStore();
