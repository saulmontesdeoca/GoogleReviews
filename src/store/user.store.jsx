import produce from 'immer';
import create from 'zustand';

const useUserStore = create(set => ({
	isAuth: false,
	setIsAuth: status =>
		set(state =>
			produce(state, draft => {
				draft.isAuth = status;
			})
		),
	currentUser: null,
	setUser: user =>
		set(state =>
			produce(state, draft => {
				draft.currentUser = user;
			})
		),
}));

export default useUserStore;