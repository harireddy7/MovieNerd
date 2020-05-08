import goToAuth from './goToAuth';

export default ({ buttonId }) => {
	if (buttonId === 'logoutBtn') {
		goToAuth();
	}
};
