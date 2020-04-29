import { observable, computed, action } from "mobx";


class PaginatorStore{
	@observable menuId = 0;

	
	changeStore(value:number) {
		this.menuId = value
	}
}

const store = new PaginatorStore();

export default store;

