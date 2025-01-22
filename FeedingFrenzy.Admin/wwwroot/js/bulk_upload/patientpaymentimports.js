var oPatientPaymentImports =
{
	PatientKey: { SourceName: 'PatientKey', IsRequired: true, Filter: null },
	OrganizationID: { SourceName: 'OrganizationID', IsRequired: true, Filter: null },

	PayerName: { SourceName: 'FirstName', IsRequired: false, Filter: "CommonFilters.NormalizeCase" },
	ClaimDate: { SourceName: 'ClaimDate', IsRequired: false, Filter: "CommonFilters.Date" },
	PaymentDate: { SourceName: 'PaymentDate', IsRequired: false, Filter: "CommonFilters.Date" },
	ServiceDateStart: { SourceName: 'ServiceDateStart', IsRequired: false, Filter: "CommonFilters.Date" },
	ServiceDateStop: { SourceName: 'ServiceDateStop', IsRequired: false, Filter: "CommonFilters.Date" },

	PaymentType: { SourceName: 'PaymentType', IsRequired: false, Filter: null },
	PayerType: { SourceName: 'PayerType', IsRequired: false, Filter: null },
	ClaimNumber: { SourceName: 'ClaimNumber', IsRequired: false, Filter: null },
	BillingCode: { SourceName: 'BillingCode', IsRequired: false, Filter: null },
	PaymentKey: { SourceName: 'PaymentKey', IsRequired: false, Filter: null },

	Payment: { SourceName: 'Payment', IsRequired: false, Filter: null },
	PatientPayment: { SourceName: 'PatientPayment', IsRequired: false, Filter: null },
	Adjustment: { SourceName: 'Adjustment', IsRequired: false, Filter: null },

	PrimaryPayerName: { SourceName: 'FirstName', IsRequired: false, Filter: "CommonFilters.NormalizeCase" }

};