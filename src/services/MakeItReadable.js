function MakeItReadable(unreadableName) {
  //Turn camelCase into readable name
    let readableName = unreadableName.replace(/([A-Z])/g, " $1");
    return readableName.charAt(0).toUpperCase() + readableName.slice(1);
}

export default MakeItReadable;