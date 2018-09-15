module.exports = function solveEquation(equation) {
	var position = 0;
	var xSquared = ' * x^2 ';
	var x = ' * x ';

	var a = equation.substring(position, equation.indexOf(xSquared));
	position = equation.indexOf(xSquared) + xSquared.length;

	var b = equation.substring(position, equation.indexOf(x));
	position = equation.indexOf(x) + x.length;

	var c = equation.substring(position);
	
	a = check(a);

	b = b.split(' ').join('');
	b = check(b);

	c = c.split(' ').join('');
	c = check(c);


	function check (coeff) {
		res = (coeff[0] == "-") ? -1 * coeff.substring(1) : coeff;
		return res;
	}


	var discriminant = b*b - 4*a*c;

	var solutions = [];
	solutions[0] = Math.round((-b + Math.pow(discriminant, 1/2)) / (2*a));    
	solutions[1] = Math.round((-b - Math.pow(discriminant, 1/2)) / (2*a));   

	if (solutions[0] > solutions[1]) {
		var temp = solutions[0];
		solutions[0] = solutions[1];
		solutions[1] = temp;
	} 

	return solutions;
}