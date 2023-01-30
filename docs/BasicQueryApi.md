# OpenapiForSibyl2Server.BasicQueryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1ClazzGet**](BasicQueryApi.md#apiV1ClazzGet) | **GET** /api/v1/clazz | class query
[**apiV1FuncGet**](BasicQueryApi.md#apiV1FuncGet) | **GET** /api/v1/func | func query
[**apiV1FuncctxGet**](BasicQueryApi.md#apiV1FuncctxGet) | **GET** /api/v1/funcctx | func ctx query



## apiV1ClazzGet

> [Sibyl2ClazzWithPath] apiV1ClazzGet(repo, rev, file)

class query

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.BasicQueryApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
let file = "file_example"; // String | file
apiInstance.apiV1ClazzGet(repo, rev, file, (error, data, response) => {
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
 **file** | **String**| file | 

### Return type

[**[Sibyl2ClazzWithPath]**](Sibyl2ClazzWithPath.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1FuncGet

> [ObjectFunctionWithSignature] apiV1FuncGet(repo, rev, file, opts)

func query

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.BasicQueryApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
let file = "file_example"; // String | file
let opts = {
  'lines': "lines_example" // String | specific lines
};
apiInstance.apiV1FuncGet(repo, rev, file, opts, (error, data, response) => {
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
 **file** | **String**| file | 
 **lines** | **String**| specific lines | [optional] 

### Return type

[**[ObjectFunctionWithSignature]**](ObjectFunctionWithSignature.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1FuncctxGet

> [ObjectFunctionContextSlimWithSignature] apiV1FuncctxGet(repo, rev, file, opts)

func ctx query

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.BasicQueryApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
let file = "file_example"; // String | file
let opts = {
  'lines': "lines_example" // String | specific lines
};
apiInstance.apiV1FuncctxGet(repo, rev, file, opts, (error, data, response) => {
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
 **file** | **String**| file | 
 **lines** | **String**| specific lines | [optional] 

### Return type

[**[ObjectFunctionContextSlimWithSignature]**](ObjectFunctionContextSlimWithSignature.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

