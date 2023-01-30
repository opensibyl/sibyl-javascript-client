# OpenapiForSibyl2Server.ScopeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1FileGet**](ScopeApi.md#apiV1FileGet) | **GET** /api/v1/file | file query by repo and rev
[**apiV1RepoDelete**](ScopeApi.md#apiV1RepoDelete) | **DELETE** /api/v1/repo | repo delete
[**apiV1RepoGet**](ScopeApi.md#apiV1RepoGet) | **GET** /api/v1/repo | query all the repos
[**apiV1RevDelete**](ScopeApi.md#apiV1RevDelete) | **DELETE** /api/v1/rev | rev delete
[**apiV1RevGet**](ScopeApi.md#apiV1RevGet) | **GET** /api/v1/rev | rev query by repo name



## apiV1FileGet

> [String] apiV1FileGet(repo, rev, opts)

file query by repo and rev

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.ScopeApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
let opts = {
  'includeRegex': "includeRegex_example" // String | includeRegex
};
apiInstance.apiV1FileGet(repo, rev, opts, (error, data, response) => {
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
 **includeRegex** | **String**| includeRegex | [optional] 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1RepoDelete

> apiV1RepoDelete(repo)

repo delete

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.ScopeApi();
let repo = "repo_example"; // String | rev delete by repo
apiInstance.apiV1RepoDelete(repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repo** | **String**| rev delete by repo | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiV1RepoGet

> [String] apiV1RepoGet()

query all the repos

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.ScopeApi();
apiInstance.apiV1RepoGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1RevDelete

> apiV1RevDelete(repo, rev)

rev delete

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.ScopeApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
apiInstance.apiV1RevDelete(repo, rev, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repo** | **String**| repo | 
 **rev** | **String**| rev | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiV1RevGet

> [String] apiV1RevGet(repo)

rev query by repo name

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.ScopeApi();
let repo = "repo_example"; // String | rev search by repo
apiInstance.apiV1RevGet(repo, (error, data, response) => {
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
 **repo** | **String**| rev search by repo | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

