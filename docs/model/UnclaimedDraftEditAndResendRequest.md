# # UnclaimedDraftEditAndResendRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `clientId`<sup>*_required_</sup> | ```string``` |  Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.  |  |
| `editorOptions` | [```SubEditorOptions```](SubEditorOptions.md) |    |  |
| `isForEmbeddedSigning` | ```boolean``` |  The request created from this draft will also be signable in embedded mode if set to `true`.  |  |
| `requesterEmailAddress` | ```string``` |  The email address of the user that should be designated as the requester of this draft. If not set, original requester&#39;s email address will be used.  |  |
| `requestingRedirectUrl` | ```string``` |  The URL you want signers redirected to after they successfully request a signature.  |  |
| `showProgressStepper` | ```boolean``` |  When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.  |  [default to true] |
| `signingRedirectUrl` | ```string``` |  The URL you want signers redirected to after they successfully sign.  |  |
| `testMode` | ```boolean``` |  Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.  |  [default to false] |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
