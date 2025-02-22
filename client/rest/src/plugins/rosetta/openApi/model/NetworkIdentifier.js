/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * The version of the OpenAPI document: 1.4.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient.js';
import SubNetworkIdentifier from './SubNetworkIdentifier.js';

/**
 * The NetworkIdentifier model module.
 * @module model/NetworkIdentifier
 * @version 1.4.13
 */
class NetworkIdentifier {
	/**
	 * Constructs a new <code>NetworkIdentifier</code>.
	 * The network_identifier specifies which network a particular object is associated with.
	 * @alias module:model/NetworkIdentifier
	 * @param blockchain {String}
	 * @param network {String} If a blockchain has a specific chain-id or network identifier, it should go in this field. It is up to the client to determine which network-specific identifier is mainnet or testnet.
	 */
	constructor(blockchain, network) {

		NetworkIdentifier.initialize(this, blockchain, network);
	}

	/**
	 * Initializes the fields of this object.
	 * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
	 * Only for internal use.
	 */
	static initialize(obj, blockchain, network) {
		obj['blockchain'] = blockchain;
		obj['network'] = network;
	}

	/**
	 * Constructs a <code>NetworkIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/NetworkIdentifier} obj Optional instance to populate.
	 * @return {module:model/NetworkIdentifier} The populated <code>NetworkIdentifier</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new NetworkIdentifier();

			if (data.hasOwnProperty('blockchain')) {
				obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
			}
			if (data.hasOwnProperty('network')) {
				obj['network'] = ApiClient.convertToType(data['network'], 'String');
			}
			if (data.hasOwnProperty('sub_network_identifier')) {
				obj['sub_network_identifier'] = SubNetworkIdentifier.constructFromObject(data['sub_network_identifier']);
			}
		}
		return obj;
	}

	/**
	 * Validates the JSON data with respect to <code>NetworkIdentifier</code>.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NetworkIdentifier</code>.
	 */
	static validateJSON(data) {
		// check to make sure all required properties are present in the JSON string
		for (const property of NetworkIdentifier.RequiredProperties) {
			if (!data.hasOwnProperty(property)) {
				throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
			}
		}
		// ensure the json data is a string
		if (data['blockchain'] && !(typeof data['blockchain'] === 'string' || data['blockchain'] instanceof String)) {
			throw new Error("Expected the field `blockchain` to be a primitive type in the JSON string but got " + data['blockchain']);
		}
		// ensure the json data is a string
		if (data['network'] && !(typeof data['network'] === 'string' || data['network'] instanceof String)) {
			throw new Error("Expected the field `network` to be a primitive type in the JSON string but got " + data['network']);
		}
		// validate the optional field `sub_network_identifier`
		if (data['sub_network_identifier']) { // data not null
		  SubNetworkIdentifier.validateJSON(data['sub_network_identifier']);
		}

		return true;
	}


}

NetworkIdentifier.RequiredProperties = ["blockchain", "network"];

/**
 * @member {String} blockchain
 */
NetworkIdentifier.prototype['blockchain'] = undefined;

/**
 * If a blockchain has a specific chain-id or network identifier, it should go in this field. It is up to the client to determine which network-specific identifier is mainnet or testnet.
 * @member {String} network
 */
NetworkIdentifier.prototype['network'] = undefined;

/**
 * @member {module:model/SubNetworkIdentifier} sub_network_identifier
 */
NetworkIdentifier.prototype['sub_network_identifier'] = undefined;






export default NetworkIdentifier;

