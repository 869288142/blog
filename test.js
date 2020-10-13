function get(obj, path) {
     eval(`with(obj) { console.log (${path}) }`) 
}


let a = {
  a: {
    b:3,
    c: {
      d:5
    }
  }
}
get(a, 'a.b');