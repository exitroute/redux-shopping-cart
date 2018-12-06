/*
* Action Types
*/

// update customer form

export const ON_CHANGE = "ON_CHANGE";

// upDataItem()
// update item in cart

/// these are actions that happen in the Product component
/// "LIKED"
/// "AMOUNT_ADD"
/// "AMOUNT_SUBTRACT"

/*
* Action Creators
*/ 

// updateItem()


// onChange()

 export const onChange = (field, value) => {
  console.log(field);
  return { type: ON_CHANGE, field, value }; 
};

