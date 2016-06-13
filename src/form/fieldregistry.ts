import {StringField} from "./fields/string"
import {SelectField} from "./fields/select"
import {IntegerField} from "./fields/integer"
import {TextLineField} from "./fields/textline"
import {BaseField} from "./fields/base"

export class FieldRegistry {
	private fieldTypes: {[type:string] : any} = {};
	private defaultFieldType = StringField

	constructor(){
		this.registerFieldType("string", StringField)
		this.registerFieldType("email", StringField)
		this.registerFieldType("password", StringField)
		this.registerFieldType("color", StringField)
		this.registerFieldType("date", StringField)
		this.registerFieldType("date-time", StringField)
		this.registerFieldType("time", StringField)

		this.registerFieldType("select", SelectField)
		this.registerFieldType("integer", IntegerField)
		this.registerFieldType("textline", TextLineField)
	}

	setDefaultFieldType(fieldType: any){
		this.defaultFieldType = fieldType;
	}

	getDefaultFieldType(){
		return this.defaultFieldType;
	}

	hasFieldType(type: string){
		return this.fieldTypes.hasOwnProperty(type);
	}

	registerFieldType(type: string, field: any){
		this.fieldTypes[type] = field;
	}

	getFieldType(type: string): any{
		if(this.hasFieldType(type)){
			return this.fieldTypes[type];
		}
		return this.defaultFieldType;
	}

	getFieldTypes(): any{
		return this.fieldTypes;
	}

}
