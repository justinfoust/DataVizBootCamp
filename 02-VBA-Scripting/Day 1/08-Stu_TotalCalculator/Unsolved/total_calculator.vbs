Sub VariableSetting():

    ' Create variables for the Price, Tax, Quantity, and Total
    ' <YOUR CODE GOES HERE>




    ' Retrieve and store the data values in each variable
    ' <YOUR CODE GOES HERE>




    ' Calculate the total by using each of the variables 
    Total = Price * (1 + Tax) * Quantity

    ' Create a Message Box for the Total and insert into cell
    MsgBox("Your total is $" + str(Total))
    Range("E2").value = Total

End Sub

Sub calculation()

'Declare Variables

Dim itemPrice, taxRate, quantity, total As Double

'Read values in appropriate cells and assign to variables

itemPrice = Range("B2").Value
taxRate = Range("C2").Value
quantity = Range("D2").Value

'Use variables in calculation

total = itemPrice * (1 + taxRate) * quantity
total.NumberFormat = "0.00"

Debug.Print total

'Print answer in appropriate cell

'Range("E2").Value = total
'MsgBox ("Your total is $" & total)

End Sub
