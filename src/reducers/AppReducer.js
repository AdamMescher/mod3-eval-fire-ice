export const houseData = (state = [], action) => {
  switch( action.type ){
    case 'SET_HOUSE_DATE_ARRAY':
      return action.houseData
    default:
      return state;
  }
}