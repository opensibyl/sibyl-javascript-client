# OpenapiForSibyl2Server.SignatureQueryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1SignatureFuncGet**](SignatureQueryApi.md#apiV1SignatureFuncGet) | **GET** /api/v1/signature/func | func query
[**apiV1SignatureFuncctxChainGet**](SignatureQueryApi.md#apiV1SignatureFuncctxChainGet) | **GET** /api/v1/signature/funcctx/chain | funcctx chain query
[**apiV1SignatureFuncctxGet**](SignatureQueryApi.md#apiV1SignatureFuncctxGet) | **GET** /api/v1/signature/funcctx | funcctx query
[**apiV1SignatureFuncctxRchainGet**](SignatureQueryApi.md#apiV1SignatureFuncctxRchainGet) | **GET** /api/v1/signature/funcctx/rchain | funcctx reverse chain query
[**apiV1SignatureRegexFuncGet**](SignatureQueryApi.md#apiV1SignatureRegexFuncGet) | **GET** /api/v1/signature/regex/func | func query



## apiV1SignatureFuncGet

> Sibyl2FunctionWithPath apiV1SignatureFuncGet(repo, rev, signature)

func query

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.SignatureQueryApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
let signature = "signature_example"; // String | signature
apiInstance.apiV1SignatureFuncGet(repo, rev, signature, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repo** | **String**| repo | 
 **rev** | **String**| rev | 
 **signature** | **String**| signature | 

### Return type

[**Sibyl2FunctionWithPath**](Sibyl2FunctionWithPath.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1SignatureFuncctxChainGet

> ServiceFunctionContextChain apiV1SignatureFuncctxChainGet(repo, rev, signature, depth)

funcctx chain query

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.SignatureQueryApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
let signature = "signature_example"; // String | signature
let depth = 56; // Number | depth
apiInstance.apiV1SignatureFuncctxChainGet(repo, rev, signature, depth, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repo** | **String**| repo | 
 **rev** | **String**| rev | 
 **signature** | **String**| signature | 
 **depth** | **Number**| depth | 

### Return type

[**ServiceFunctionContextChain**](ServiceFunctionContextChain.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1SignatureFuncctxGet

> Sibyl2FunctionContextSlim apiV1SignatureFuncctxGet(repo, rev, signature)

funcctx query

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.SignatureQueryApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
let signature = "signature_example"; // String | signature
apiInstance.apiV1SignatureFuncctxGet(repo, rev, signature, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repo** | **String**| repo | 
 **rev** | **String**| rev | 
 **signature** | **String**| signature | 

### Return type

[**Sibyl2FunctionContextSlim**](Sibyl2FunctionContextSlim.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1SignatureFuncctxRchainGet

> ServiceFunctionContextChain apiV1SignatureFuncctxRchainGet(repo, rev, signature, depth)

funcctx reverse chain query

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.SignatureQueryApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
let signature = "signature_example"; // String | signature
let depth = 56; // Number | depth
apiInstance.apiV1SignatureFuncctxRchainGet(repo, rev, signature, depth, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repo** | **String**| repo | 
 **rev** | **String**| rev | 
 **signature** | **String**| signature | 
 **depth** | **Number**| depth | 

### Return type

[**ServiceFunctionContextChain**](ServiceFunctionContextChain.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1SignatureRegexFuncGet

> [String] apiV1SignatureRegexFuncGet(repo, rev, regex)

func query

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.SignatureQueryApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
let regex = "regex_example"; // String | regex
apiInstance.apiV1SignatureRegexFuncGet(repo, rev, regex, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repo** | **String**| repo | 
 **rev** | **String**| rev | 
 **regex** | **String**| regex | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

