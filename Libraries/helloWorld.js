// @flow

const getStorePayload = (
  dataType /*: string */,
  reply /*: string */,
  name /*: string */,
  code /*: string */,
) /*: StorePayload */ => {
  let type = "NOT_SET";
  let personsCode = code;
  if (dataType === "Actions") {
    type = "AdHoc";
  } else if (dataType === "Libraries") {
    type = "Function";
  } else if (
    dataType === "TrelloListeners" ||
    dataType === "WebhookListeners"
  ) {
    type = "Code";
    personsCode = `function ${name}(notification)\n{\n${code}\n}`;
  }
  return {
    reply,
    action: "store",
    type,
    name,
    value: personsCode,
  };
};
