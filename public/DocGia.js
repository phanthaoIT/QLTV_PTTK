      $(function(){
        $('.delete').click(function(e) {
          e.preventDefault();
          $('#result').val($(this).closest('tr').find('td:first').text());
          $('#result1').val($(this).closest('tr').find('td:nth-child(2)').text())
        });
      });
     $(function(){
        $('.edit').click(function(e) {
          var id = $(this).parent().parent().find('td').eq(0).html();
          var url = '/DocGia/editDG';
          $.ajax({

            url: url,
            type: 'POST',
            data: {Id: id},
          })
          .done(function(data) {
            $('#kq').val(data.Id);
            $('#kq1').val(data.TenDocGia);
            $('#kq2').val(data.NgaySinh);
            $('#kq3').val(data.GioiTinh);
            $('#kq4').val(data.Email);
            $('#kq5').val(data.DiaChi);
            $('#kq6').val(data.NgayLapThe);
          })
        });
      });