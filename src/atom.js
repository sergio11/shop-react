import mori from 'mori';
import initialState from './config/initial_state';

class Atom {

	constructor(initialState) {
		this.state = mori.toClj(initialState || {});
		this.listeners = [];
	}

	//Notificamos el cambio de estado.
	_notifySwap(){
		this.listeners.forEach((cb) => cb(this.state));
	}
	
	//Cambia de estado.
	_swap(newState){
		this.state = newState;
	  	this._notifySwap();
	}

	_silentSwap(newState){
		this.state = newState;
	}

	addChangeListener(cb){
		typeof(cb) == "function" && this.listeners.push(cb);
	}

	//Queries

	getState(){
		return this.state;
	}

	getIn(path,notfound){
		return mori.getIn(this.state,path,notfound);
	}

	//Commands
	assocIn(path, val){
		this._swap(mori.assocIn(this.state,path,val));
	}

	updateIn(path, fnc){
		this._swap(mori.updateIn(this.state,path,fnc));
	}

	silentAssocIn(path, val){
		this._silentSwap(mori.assocIn(this.state,path,val));
	}

	silentUpdateIn(path, fnc){
		this._silentSwap(mori.updateIn(this.state,path,fnc));
	}

	batchAssocIn(batch){
		batch.forEach((task) => {
			this.silentAssocIn(task.path,task.val);
		});
		this._notifySwap();
	}

}


export default new Atom(initialState);