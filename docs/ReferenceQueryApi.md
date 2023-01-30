# OpenapiForSibyl2Server.ReferenceQueryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1ReferenceCountFuncctxGet**](ReferenceQueryApi.md#apiV1ReferenceCountFuncctxGet) | **GET** /api/v1/reference/count/funcctx | funcctx query by ref
[**apiV1ReferenceCountFuncctxReverseGet**](ReferenceQueryApi.md#apiV1ReferenceCountFuncctxReverseGet) | **GET** /api/v1/reference/count/funcctx/reverse | funcctx query by referenced



## apiV1ReferenceCountFuncctxGet

> [Sibyl2FunctionContextSlim] apiV1ReferenceCountFuncctxGet(repo, rev, moreThan, lessThan)

funcctx query by ref

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.ReferenceQueryApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
let moreThan = 56; // Number | moreThan
let lessThan = 56; // Number | lessThan
apiInstance.apiV1ReferenceCountFuncctxGet(repo, rev, moreThan, lessThan, (error, data, response) => {
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
 **moreThan** | **Number**| moreThan | 
 **lessThan** | **Number**| lessThan | 

### Return type

[**[Sibyl2FunctionContextSlim]**](Sibyl2FunctionContextSlim.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1ReferenceCountFuncctxReverseGet

> [Sibyl2FunctionContextSlim] apiV1ReferenceCountFuncctxReverseGet(repo, rev, moreThan, lessThan)

funcctx query by referenced

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.ReferenceQueryApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
let moreThan = 56; // Number | moreThan
let lessThan = 56; // Number | lessThan
apiInstance.apiV1ReferenceCountFuncctxReverseGet(repo, rev, moreThan, lessThan, (error, data, response) => {
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
 **moreThan** | **Number**| moreThan | 
 **lessThan** | **Number**| lessThan | 

### Return type

[**[Sibyl2FunctionContextSlim]**](Sibyl2FunctionContextSlim.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

