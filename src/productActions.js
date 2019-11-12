export function fetchProducts() {
    return async dispatch => {
      dispatch(fetchProductsBegin());
      try {
        const api_call  = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40")
        const data = await api_call.json();
          console.log(data)
          dispatch(fetchProductsSuccess(data.list))
      } catch (error) {
        dispatch(fetchProductsFailure(error));
          
      }
      
          };
          
  }

 
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  
  export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
  export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
  export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
  
  export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
  });
  
  export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { products }
  });
  
  export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
  });
  