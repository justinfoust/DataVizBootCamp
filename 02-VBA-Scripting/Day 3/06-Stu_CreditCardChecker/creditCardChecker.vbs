Sub ccChecker ()

    Dim row As integer
    Dim resulteRow As integer
    Dim totalCharged As Single

    resultsRow = 2

    For row = 2 To Cells(Rows.Count, "A").End(xlup).Row +1

        If Cells(row, "A").value <> Cells(row - 1, "A").value Then
            Cells(resultRow, "G").Value = Cells(row, "A").Value
            if resultRow <> 2 Then
                Cells(resultRow - 1, "H").Value = Format(totalCharged, "#,###.00")
            End If
            resultRow = resultRow + 1
            totalCharge = 0
        End If

        totalCharged = totalCharged + Cells(row, "C").Value

    Next row

End Sub