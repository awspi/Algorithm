path=[1,2,3,4]
res=['aa','bb']
res.push(...path);// 不能写res.push(path), 要深拷贝

console.log(res);