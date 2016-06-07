const isObject = (item) => {
  return (item && typeof item === 'object' && item !== null);
};

export default function merger(target, source) {
  let output = {...{}, ...target};
  if ( isObject(target) && isObject(source) ) {
    for ( key in source ) {
      if ( isObject(source[key]) && (key in target) ) {
        output[key] = mergeDeep(target[key], source[key]);
      } else {
        output = {...output, ...{ [key]: source[key] }};
      }
    }
  }
  return output;
}
