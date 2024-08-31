function compare(a, b) {
  if (a.order < b.order) {
    return -1;
  } else if (a.order > b.order) {
    return 1;
  }

  return 0;
}

export function sort(arr) {
  arr.sort(compare);
}
