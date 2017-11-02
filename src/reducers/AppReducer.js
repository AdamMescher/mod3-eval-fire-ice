export const houseData = (state = [], action) => {
  switch( action.type ){
    case 'SET_USER_HOUSE_DATA':
      return action.houseData
    default:
      return state;
  }
}