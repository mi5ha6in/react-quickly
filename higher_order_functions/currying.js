const userLogs = (userName) => (message) =>
  console.log(`${userName} -> ${message}`);

const log = userLogs("Dmirty");
log("attempted to load 20 fake members");
