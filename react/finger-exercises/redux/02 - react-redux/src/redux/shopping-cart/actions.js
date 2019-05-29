export const actions = {
  TOOGLE_CONTENT: '@@SHOPPING_CART/TOGGLE_CONTENT'
};

const actionsCreators = {
  toggleContent: () => ({
    type: actions.TOOGLE_CONTENT
  })
};

export default actionsCreators;
