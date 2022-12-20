/* eslint-disable import/prefer-default-export */

export function deepSearchAll(data: any, keyName: string) {
  const objects: any[] = [];

  if (typeof data === "object") {
    Object.keys(data).forEach((key) => {
      if (key === keyName) {
        const node = deepSearchAll(data[key], keyName);
        objects.push(data[key]);
        if (node.length) objects.push(...node);
      } else {
        const node = deepSearchAll(data[key], keyName);
        if (node.length) objects.push(...node);
      }
    });
  }

  return objects;
}
