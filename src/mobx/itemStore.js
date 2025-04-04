import { makeAutoObservable } from "mobx";

class itemStore{
  searchitem=''
  constructor(){
 makeAutoObservable(this)
  }
  setItem(datas){
    this.searchitem=datas;
    console.log('items search',this.searchitem);
    
  }
}
export default new itemStore()