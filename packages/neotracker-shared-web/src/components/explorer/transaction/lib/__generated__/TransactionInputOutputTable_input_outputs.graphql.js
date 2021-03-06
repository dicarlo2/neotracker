/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AssetNameLink_asset$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type TransactionInputOutputTable_input_outputs$ref: FragmentReference;
export type TransactionInputOutputTable_input_outputs = $ReadOnlyArray<{|
  +address_hash: string,
  +value: string,
  +asset: {|
    +$fragmentRefs: AssetNameLink_asset$ref,
  |},
  +$refType: TransactionInputOutputTable_input_outputs$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TransactionInputOutputTable_input_outputs",
  "type": "TransactionInputOutput",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "address_hash",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "value",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "asset",
      "storageKey": null,
      "args": null,
      "concreteType": "Asset",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "AssetNameLink_asset",
          "args": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '65fe5fa3d6c88c3f64d38ddc3e2ade84';
module.exports = node;
