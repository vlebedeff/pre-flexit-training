type ObjectType = { [key: string]: any }

export function assign<T extends ObjectType>(target: T, ...extendWith: T[]): T {
  for (let extendObject of extendWith) {
    for (let key in extendObject) {
      if (!extendObject.hasOwnProperty(key)) continue;
      target[key] = extendObject[key];
    }
  }
  return target;
}
