export interface Difference {
  path: string;
  oldValue: string | number | boolean;
  newValue: string | number | boolean;
}

export interface PrimitiveData {
  key: string;
  path: string;
  oldValue: string | number | boolean;
  newValue: string | number | boolean;
}

// helper functions
function isObject(value: any): boolean {
  return typeof value === 'object';
}
function getKeys(obj: any): string[] {
  return Object.keys(obj);
}
function appendPath(path: string, key: string) {
  return path ? `${path}.${key}` : key;
}

export function createObjectDifferenceList(
  objOld: Object,
  objNew: Object
): Difference[] {
  let diffList: Difference[] = [
    { path: 'obj1.subobj1.attr', oldValue: 'Johannes', newValue: 'Albert' },
  ];
  // TODO fill the diffList with differences of objects
  let myDiffList = []

  return myDiffList;
}

function getPrimitives(
  objOld: any,
  objNew: any,
  path: string,
  list: PrimitiveData[]
): PrimitiveData[] {
  let keysOld = getKeys(objOld);
  let keysNew = getKeys(objNew);

  keysOld.forEach((key) => {
    if (isObject(objOld[key])) {
      console.log(objOld[key]);
      path = appendPath(path, key);
      getPrimitives(objOld[key], objNew[key], path, list);
    } else {
      list.push({
        key: key,
        path: appendPath(path, key),
        oldValue: objOld[key],
        newValue: objNew[key],
      });
    }
  });

  return list;
}
