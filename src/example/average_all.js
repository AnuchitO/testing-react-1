export function average(args) {
  return args.reduce((acc, cur) => acc + cur, 0) / args.length
}
