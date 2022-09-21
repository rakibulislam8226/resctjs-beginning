time= int(input("Enter time: "))
if time >=1 and time <=11:
	print('good morning')
elif time >=12 and time <=19:
	print('good noon')
elif time >=20 and time <=24:
	print('good night')
else:
	print('wrong time')
	