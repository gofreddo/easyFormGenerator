export const GroupedSelectConfig = {
  id								: 'GroupedSelect',
  name							: 'Grouped Select',
  subtitle					: 'Grouped Select',
  options						: [],
  group							: 'Select',
  formlyType				: 'groupedSelect',
  formlySubtype			: '',
  formlyLabel				: '',
  formlyRequired		: false,
  formlyDescription	: '',
  formlyOptions			: [],
  formlyExpressionProperties: {},
  formlyValidators	: {},
  formlyValidation	: {
    messages				: {
      required	: function(viewValue, modelValue, scope) {
        //return a required validation message :
        //-> '<label as name> is required '
        //-> or if not exists or empty just 'this field is required'
        var defaultReturnMsg 	= 'this Grouped Select field is required';
        var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
        return returnMsg;
      }
    }
  }
};
