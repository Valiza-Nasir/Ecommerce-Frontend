import { makeAutoObservable } from "mobx";
class SearchModal{
  modalSearchState=false;

constructor(){
  makeAutoObservable(this,{},{autoBind:true})
}
openSearchModal(){
this.modalSearchState=true;
}
closeSearchModal(){
this.modalSearchState=false;
}



}
export default new SearchModal()