const formatName = name => {
	return name.split(' ').reduce((str, next) => {
		return str + ' ' + next.substring(0, 1).toUpperCase() + next.substring(1, next.length).toLowerCase();
	}, '');
};

export default formatName;
