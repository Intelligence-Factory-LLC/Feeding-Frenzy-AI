<%function ifeq Cond1 Cond2 TrueCode FalseCode{
	(if (eq (Cond1) (Cond2)){
		(returnex (TrueCode))
	}{
		(returnex (FalseCode))
	})
}%>

<%function ifeq Cond1 Cond2 TrueCode{
	(if (eq (Cond1) (Cond2)){
		(returnex (TrueCode))
	})
}%>

<%function ifneq Cond1 Cond2 TrueCode FalseCode{
	(if (neq (Cond1) (Cond2)){
		(returnex (TrueCode))
	}{
		(returnex (FalseCode))
	})
}%>

<%function ifneq Cond1 Cond2 TrueCode{
	(if (neq (Cond1) (Cond2)){
		(returnex (TrueCode))
	})
}%>


<%function ifempty Value TrueCode{
	(ifeq (Value) ""{
		(returnex (TrueCode))
	})
}%>

<%function ifnot Cond1 TrueCode{
	(if (not (Cond1)){
		(returnex (TrueCode))
	})
}%>

<%function ifnot Cond1 TrueCode FalseCode{
	(if (not (Cond1)){
		(returnex (TrueCode))
	}{
		(returnex (FalseCode))
	})
}%>

