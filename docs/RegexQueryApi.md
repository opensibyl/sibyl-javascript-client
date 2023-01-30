# OpenapiForSibyl2Server.RegexQueryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1RegexClazzGet**](RegexQueryApi.md#apiV1RegexClazzGet) | **GET** /api/v1/regex/clazz | clazz query
[**apiV1RegexFuncGet**](RegexQueryApi.md#apiV1RegexFuncGet) | **GET** /api/v1/regex/func | func query
[**apiV1RegexFuncctxGet**](RegexQueryApi.md#apiV1RegexFuncctxGet) | **GET** /api/v1/regex/funcctx | func ctx query



## apiV1RegexClazzGet

> [Sibyl2ClazzWithPath] apiV1RegexClazzGet(repo, rev, field, regex)

clazz query

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.RegexQueryApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
let field = "field_example"; // String | field
let regex = "regex_example"; // String | regex
apiInstance.apiV1RegexClazzGet(repo, rev, field, regex, (error, data, response) => {
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
 **field** | **String**| field | 
 **regex** | **String**| regex | 

### Return type

[**[Sibyl2ClazzWithPath]**](Sibyl2ClazzWithPath.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1RegexFuncGet

> [Sibyl2FunctionWithPath] apiV1RegexFuncGet(repo, rev, field, regex)

func query

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.RegexQueryApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
let field = "field_example"; // String | field
let regex = "regex_example"; // String | regex
apiInstance.apiV1RegexFuncGet(repo, rev, field, regex, (error, data, response) => {
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
 **field** | **String**| field | 
 **regex** | **String**| regex | 

### Return type

[**[Sibyl2FunctionWithPath]**](Sibyl2FunctionWithPath.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1RegexFuncctxGet

> [Sibyl2FunctionContextSlim] apiV1RegexFuncctxGet(repo, rev, field, regex)

func ctx query

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.RegexQueryApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
let field = "field_example"; // String | field
let regex = "regex_example"; // String | regex
apiInstance.apiV1RegexFuncctxGet(repo, rev, field, regex, (error, data, response) => {
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
 **field** | **String**| field | 
 **regex** | **String**| regex | 

### Return type

[**[Sibyl2FunctionContextSlim]**](Sibyl2FunctionContextSlim.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

