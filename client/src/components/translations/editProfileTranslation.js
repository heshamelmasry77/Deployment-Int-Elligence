import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    en:{
        title:"Your Profile",
        name:"Name",
	validfeedback:"Looks good!",
	invalidfeedbackName:"Note: It should be more than or equal 3 characters and less than or equal 50 characters",
    gender:"Gender",
    male:"Male",
    female:"Female",
	nationality:"Nationality",
	identificationType:"Identification Type",
	//validfeedback:"Looks good!",
	invalidfeedbackIdentificationType:"Note: It should be more than or equal 8 characters and less than or equal 20 characters",
	identificationNumber:"Identification Number",
	//validfeedback:"Looks good!",
	invalidfeedbackIdentificationNumber:"Note: It should be more than or equal 5 characters and less than or equal 50 characters",
	birthdate:"Birthdate",
	validfeedbackBirthdate:"It should be in the format of: YYYY-MM-DD",
	email:"Email",
	//validfeedback:"Looks good!",
	invalidfeedbackEmail:"Note: It should be more than or equal 3 characters and less than or equal 254 characters",
	address:"Address",
	telephone:"Telephone",
	//validfeedback:"Looks good!",
	invalidfeedbackTelephone:"Note: It should be more than or equal 8 characters and less than or equal 15 characters",
	fax:"Fax",
	//validfeedback:"Looks good!",
	invalidfeedbackFax:"Note: It should be more than or equal 5 characters and less than or equal 20 characters",
	submit:"Submit",
	alert:"Your request to update has been submitted"
    },
    ar:{
        title:"ملفك الشخصي",
        name:"الاسم",
	validfeedback:"يبدو جيدا",
	invalidfeedbackName:"ملاحظة: يجب أن يكون أكثر من أو يساوي 3 أحرف وأقل من أو يساوي 50 حرفًا",
    gender:"الجنس",
    male:"ذكر",
    female:"انثي",
	nationality:"الجنسية",
	identificationType:"نوع تعريف الهوية",
	//validfeedback:"يبدو جيدا",
	invalidfeedbackIdentificationType:"ملاحظة: يجب أن تكون أكثر من أو تساوي 8 أحرف وأقل من أو تساوي 20 حرفًا",
	identificationNumber:"رقم الهوية",
	//validfeedback:"يبدو جيدا",
	invalidfeedbackIdentificationNumber:"ملاحظة: يجب أن يكون أكثر من أو يساوي 5 أحرف وأقل من أو يساوي 50 حرفًا",
	birthdate:"تاريخ الميلاد",
	validfeedbackBirthdate:"يجب أن يكون بتنسيق YYYY-MM-DD",
	email:"البريد الالكتروني",
	//validfeedback:"يبدو جيدا",
	invalidfeedbackEmail:"ملاحظة: يجب أن يكون أكثر من أو يساوي 3 أحرف وأقل من أو يساوي 254 حرفًا",
	companyNameInEnglish:"اسم الشركة بالانجليزية",
    address:"العنوان",
    telephone:"التليفون",
	//validfeedback:"يبدو جيدا",
	invalidfeedbackTelephone:"ملاحظة: يجب أن يكون أكثر من أو يساوي 8 أحرف وأقل من أو يساوي 15 حرفًا",
	fax:"الفاكس",
	//validfeedback:"يبدو جيدا",
	invalidfeedbackFax:"ملاحظة: يجب أن يكون أكثر من أو يساوي 5 أحرف وأقل من أو يساوي 20 حرفًا",
	submit:"تسجيل",
	alert:"تم إرسال طلبك للتحديث"
    }
});
export default strings