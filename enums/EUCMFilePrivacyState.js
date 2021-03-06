/**
 * @enum EUCMFilePrivacyState
 */
module.exports = {
	"Invalid": -1,
	"Private": 2,
	"FriendsOnly": 4,
	"Public": 8,

	// Value-to-name mapping for convenience
	"-1": "Invalid",
	"2": "Private",
	"4": "FriendsOnly",
	"8": "Public",
};

module.exports.All = module.exports.Public | module.exports.FriendsOnly | module.exports.Private;
