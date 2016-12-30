export const RichTextEditorConfig =       {
  id								: 'RichTextEditor',
  name							: 'RichTextEditor',
  subtitle					: 'RichTextEditor',
  group							: 'Textarea',
  formlyType				: 'richEditor',
  formlySubtype			: '',
  formlyLabel				: '',
  formlyRequired		: false,
  formlyDescription	: '',
  formlyOptions			: [],
  formlyExpressionProperties: {},
  formlyValidators 					: {},
  formlyValidation	: {
    messages: {
      required: function(viewValue, modelValue, scope) {
        //return a required validation message :
        //-> '<label as name> is required '
        //-> or if not exists or empty just 'this field is required'
        var defaultReturnMsg	= 'this RichTextEditor field is required';
        var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
        return returnMsg;
      }
    }
  }
};
