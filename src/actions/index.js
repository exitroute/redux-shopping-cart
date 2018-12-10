/*
* Action Types
*/

// update customer form

export const ON_CHANGE = "ON_CHANGE";

// update item in cart

/// these are actions that happen in the Product component
export const LIKE = "LIKE";
export const UPDATEITEM = "UPDATEITEM";
/// "AMOUNT_ADD"
/// "AMOUNT_SUBTRACT"

/*
* Action Creators
*/ 

// updateItem()



 export const onChange = (field, value) => {
  console.log(field);
  return { type: ON_CHANGE, field, value }; 
};

