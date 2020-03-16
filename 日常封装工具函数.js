//数组内嵌对象 根据某一个属性数值大小 进行排序
function sortArr(key){
	return function(a,b){
		var val1 = a[key];
		var val2 = b[key];
		return val1 - val2;
	}
}
sortArr(data.sort(sortArr(key))