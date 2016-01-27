import _ from 'mori';
import initialState from './config/initial_state';

class Atom {

	constructor(initialState) {
		this.state = _.toClj(initialState || {});
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
		return _.getIn(this.state,path,notfound);
	}

	//Commands
	assocIn(path, val){
		this._swap(_.assocIn(this.state,path,val));
	}

	updateIn(path, fnc){
		this._swap(_.updateIn(this.state,path,fnc));
	}

	into(path,from){
		_.into(_.getIn(this.state,path),from);
	}

	silentAssocIn(path, val){
		this._silentSwap(_.assocIn(this.state,path,val));
	}

	silentUpdateIn(path, fnc){
		this._silentSwap(_.updateIn(this.state,path,fnc));
	}

	batchAssocIn(batch){
		batch.forEach((task) => {
			this.silentAssocIn(task.path,task.val);
		});
		this._notifySwap();
	}

}

export default new Atom(initialState);