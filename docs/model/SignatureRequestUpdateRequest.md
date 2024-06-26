# # SignatureRequestUpdateRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `signatureId`<sup>*_required_</sup> | ```string``` |  The signature ID for the recipient.  |  |
| `emailAddress` | ```string``` |  The new email address for the recipient.<br><br>This will generate a new `signature_id` value.<br><br>**NOTE:** Optional if `name` is provided.  |  |
| `name` | ```string``` |  The new name for the recipient.<br><br>**NOTE:** Optional if `email_address` is provided.  |  |
| `expiresAt` | ```number``` |  The new time when the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
