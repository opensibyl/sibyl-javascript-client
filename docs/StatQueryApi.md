# OpenapiForSibyl2Server.StatQueryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1RevStatGet**](StatQueryApi.md#apiV1RevStatGet) | **GET** /api/v1/rev/stat | rev stat



## apiV1RevStatGet

> ServiceRevStat apiV1RevStatGet(repo, rev)

rev stat

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.StatQueryApi();
let repo = "repo_example"; // String | repo
let rev = "rev_example"; // String | rev
apiInstance.apiV1RevStatGet(repo, rev, (error, data, response) => {
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

### Return type

[**ServiceRevStat**](ServiceRevStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

