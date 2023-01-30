# OpenapiForSibyl2Server.OpsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**opsMonitorUploadGet**](OpsApi.md#opsMonitorUploadGet) | **GET** /ops/monitor/upload | upload status query
[**opsPingGet**](OpsApi.md#opsPingGet) | **GET** /ops/ping | ping example
[**opsVersionGet**](OpsApi.md#opsVersionGet) | **GET** /ops/version | sibyl version



## opsMonitorUploadGet

> opsMonitorUploadGet()

upload status query

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.OpsApi();
apiInstance.opsMonitorUploadGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## opsPingGet

> opsPingGet()

ping example

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.OpsApi();
apiInstance.opsPingGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## opsVersionGet

> opsVersionGet()

sibyl version

### Example

```javascript
import OpenapiForSibyl2Server from 'openapi_for_sibyl2_server';

let apiInstance = new OpenapiForSibyl2Server.OpsApi();
apiInstance.opsVersionGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

