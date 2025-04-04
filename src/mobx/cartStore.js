import { makeAutoObservable } from "mobx";

class cartStore{
  todo=this.getDataFromLocal();
  constructor(){
    makeAutoObservable(this)
  }
  get totalQuantity() {
    return this.todo.reduce((acc, item) => acc + item.quantity, 0); 
  }
  setDataToLocal(){
  localStorage.setItem('EcommerceData',JSON.stringify(this.todo))
  }
  getDataFromLocal(){
    const data = JSON.parse(localStorage.getItem('EcommerceData'));
    return Array.isArray(data) ? data : [];
  }
  get subTotal() {
    return this.todo.reduce((accu, item) => {
      const price = Number(item.price.replace(/[^0-9.]/g, ""));
      const quantity = Number(item.quantity);  
      return accu + (quantity * price);
    }, 0);
  }
  
increment(id){
  const find=this.todo.findIndex((item)=>item.id===id);
  if(this.todo[find].quantity>0){
    this.todo[find].quantity+=1;
  }
  this.setDataToLocal()

}
decrement(id){
  const find=this.todo.findIndex((item)=>item.id===id);
  if(this.todo[find].quantity>1){
    this.todo[find].quantity-=1;
  }
  this.setDataToLocal()

}
addProductData(data){
  console.log('data',data.price)
  const findItems=this.todo.findIndex((item)=>item.id===data.id);
  if(findItems===-1){
    this.todo.push({...data,quantity:1})
  }else{
    this.todo[findItems].quantity+=1;
  }
this.setDataToLocal(data)
    }  
    deleteProductData(id){
      this.todo=this.todo.filter((item)=>item.id!==id)
      this.setDataToLocal()
    }
              
}
export default new cartStore()