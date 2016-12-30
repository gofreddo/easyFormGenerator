export const EmailConfig =  {
	id 													: 'Email',
	name 												: 'Email',
	subtitle 										: 'Email',
	group 											: 'input',
	formlyType									: 'input',
	formlySubtype 							: 'email',
	formlyLabel 								: '',
	formlyRequired 							: false,
	formlyDescription 						: '',
	formlyOptions 							: [],
	formlyExpressionProperties 	: {},
	formlyValidators 						: {
		emailShape : {
			expression : (viewValue, modelValue) => {
				var value = modelValue || viewValue;
				return /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/.test(value);
			},
			message		: '$viewValue + \' is not a valid email\''
		}
	},
	formlyValidation: {
		messages: {
			required: function(viewValue, modelValue, scope) {
				//return a required validation message :
				//-> '<label as name> is required '
				//-> or if not exists or empty just 'this field is required'
				var defaultReturnMsg 	= 'this Email field is required';
				var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
				//check if validation is really dued to require validation
				//and not another validation like emailShape validator
				if (scope.to.required) return returnMsg;
			}
		}
	}
};
