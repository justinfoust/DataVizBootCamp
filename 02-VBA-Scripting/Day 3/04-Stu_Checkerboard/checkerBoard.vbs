Sub createBoard()

    For Row = 1 To 8
        For Col = 1 To 8
            If Row Mod 2 = 0 Then
                If Col Mod 2 = 0 Then
                    Cells(Row, Col).Interior.ColorIndex = 3
                Else
                    Cells(Row, Col).Interior.ColorIndex = 1
                End If
            Else
                If Col Mod 2 = 0 Then
                    Cells(Row, Col).Interior.ColorIndex = 1
                Else
                    Cells(Row, Col).Interior.ColorIndex = 3
                End If
            End If
            
        Next Col
    Next Row

End Sub