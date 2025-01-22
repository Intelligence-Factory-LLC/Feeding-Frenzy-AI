
function ParseAddress(sAddress, sPart) {
	//1654 Greig, Madison Heights, MI 48071
	var sParts = StringUtil.Split(sAddress, ", ");
	switch (sPart) {
		case 'Line':
			return sParts[0];
		case 'City':
			return sParts[1];
		case 'State':
			return StringUtil.LeftOfFirst(sParts[2], " ");
		case 'Zip':
			return StringUtil.RightOfFirst(sParts[2], " ");
	}

	return null;
}

function ParseAddress2(sAddress, sPart) {
	//1654 Greig Madison Heights MI 48071
	var oAddress = {};
	try {
		var sParts = StringUtil.Split(sAddress, " ");
		if (sParts.length >= 5) {
			if (isNum(sParts.last())) {
				oAddress.ZipCode = sParts.last();
				oAddress.State = sParts[sParts.length - 2];
				oAddress.City = sParts[sParts.length - 3];
				oAddress.Address = StringUtil.LeftOfFirst(sAddress, oAddress.City);
			}

		}
	}
	catch (err) {

	}

	switch (sPart) {
		case 'Line':
			return oAddress.Address;
		case 'City':
			return oAddress.City;
		case 'State':
			return oAddress.State;
		case 'Zip':
			return oAddress.ZipCode;
	}


	return oAddress;
}


var CommonFilters = {
	Gender: function (sGender) {
		if (StringUtil.EqualNoCase(sGender, "Male"))
			return "M";

		if (StringUtil.EqualNoCase(sGender, "Female"))
			return "F";

		if (sGender=="m")
			return "M";

		if (sGender=="f")
			return "F";

		return sGender;
	},

	Email: function (sEmail) {

		if (StringUtil.InString(sEmail, "noemail"))
			return null;

		if (StringUtil.InString(sEmail, "@") && StringUtil.InString(sEmail, "."))
			return sEmail;

		return null;
	},

	Phone: function (sPhone) {
		if (!StringUtil.IsEmpty(sPhone))
			sPhone = Clean(sPhone, "0123456789");

		return sPhone;
	},

	State: function (sState) {
		if (!StringUtil.IsEmpty(sState)) {
			sState=sState.toUpperCase();
		}

		if (sState=="F")
			sState="FL";

		return sState;
	}, 

	Zip: function (sZip) {
		if (!StringUtil.IsEmpty(sZip)) {
			if (sZip.length > 5)
				return sZip.substring(0, 5);
			else
				return sZip;
		}

		return null;
	},

	NormalizeCase: function (sStr) {
		return StringUtil.UppercaseFirstLetter(sStr);
	},

	Date: function (sStr) {
		return DateUtil.IsValidDate(sStr) ? sStr : null;
	},
	Money: function (sStr) {
		return CleanDouble(sStr);
	}

}

var DeviceTypesEnum = {
	BP: "Blood Pressure Cuff",

	Glucose: 'Glucose monitor',

	Scale: 'Scale'
}

var DeviceTypeFilters = 
{
	DeviceTypeFilter : function(sDeviceType) {
		sDeviceType = sDeviceType.trim().toLowerCase();
		switch (sDeviceType) {
			case 'bp':
			case 'bp cuff':
			case 'blood pressure cuff':
				return DeviceTypesEnum.BP;
			case 'glucose':
			case 'glucose monitor':
			case 'glucometer':
				return DeviceTypesEnum.Glucose;
			case 'scale':
			case 'weight scale':
				return DeviceTypesEnum.Scale;
		}
		return sDeviceType;
	},

	MultipleDeviceTypeFilter: function (oVal) {
		var sDeviceTypes = "";

		if (!StringUtil.IsEmpty(oVal)) {
			var sParts = StringUtil.Split(oVal, ",");
			for (var i = 0; i < sParts.length; i++) {
				if (sDeviceTypes.length > 0)
					sDeviceTypes += ",";
				sDeviceTypes += DeviceTypeFilters.DeviceTypeFilter(sParts[i]);
			}
		}
		return sDeviceTypes;
	}

}

