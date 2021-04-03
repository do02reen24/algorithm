function solution(new_id) {
  const reg = /[^a-z0-9-_\.]/g;
  const regCommas = /\.+/g;
  new_id = new_id.toLowerCase();
  new_id = new_id.replace(reg, '');
  new_id = new_id.replace(regCommas, '.');
  if (new_id[0] === '.') new_id = new_id.substr(1);
  if (new_id[new_id.length - 1] === '.') new_id = new_id.slice(0, -1);
  if (new_id === '') new_id = 'a';
  if (new_id.length >= 16) new_id = new_id.substr(0, 15);
  if (new_id[new_id.length - 1] === '.') new_id = new_id.slice(0, -1);
  while (new_id.length < 3) {
    new_id = new_id + new_id[new_id.length - 1];
  }
  return new_id;
}
