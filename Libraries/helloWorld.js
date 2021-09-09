// @flow

export default (
  actionItem /*: Action */,
  polling /*: boolean */,
  action /*: Array<AppStateAction> */,
) /*: function */ => (item) /*: Action */ => {
  if (item.actionName === actionItem.actionName) {
    item.polling = polling;
    item.runningJobs = action;
  }
  return item;
};
