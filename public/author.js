      $(function(){
        $('.delete').click(function(e) {
            e.preventDefault();
            $('#result').val($(this).closest('tr').find('td:first').text());
           $('#result1').val($(this).closest('tr').find('td:nth-child(2)').text())
        });
    });
        $(function(){
        $('.edit').click(function(e) {
            e.preventDefault();
            $('#kq').val($(this).closest('tr').find('td:first').text());
           $('#kq1').val($(this).closest('tr').find('td:nth-child(2)').text())
        });
    });