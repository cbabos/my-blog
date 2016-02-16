'use strict';

import slug from 'slug';

module.exports = {

	/** 
	 * @param String what
	 * @param String where
	 * @return Boolean
	 */
	isInStr: (what, where) => {
		return where.toLowerCase().indexOf(what.toLowerCase()) !== -1;
	},
	
	/**
	 * @param String src
	 * @return String 
	 */
	getSlug: (src) => {
		let replacement;
		const mode = 'rfc3986';

		slug.defaults.mode = mode;
		replacement = slug.defaults.modes[mode].replacement;
		slug.charmap['%'] = slug.defaults.modes[mode].replacement + 'percent';
		
		return slug(src).toLowerCase();
	},

	/** 
	 * @param Object src
	 * @return Object (dereferenced)	
	 */
	deepCopy: src => JSON.parse(JSON.stringify(src))
};
