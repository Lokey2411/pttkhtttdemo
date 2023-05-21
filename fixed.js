$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  var actions = $("table td:last-child").html();
  // Append table with add row form on add new button click

  //Add Hàng
  $(document).on("click", ".add", function () {
    var empty = false;
    var input = $(this).parents("tr").find('input[type="text"]');
    input.each(function () {
      if (!$(this).val()) {
        $(this).addClass("error");
        swal("", "Dữ Liệu Trống Vui Lòng Kiểm Tra", "error");
        empty = true;
      } else {
        $(this).removeClass("error");
        swal("", "Bạn Chưa Nhập Dữ Liệu", "error");
      }
    });
    $(this).parents("tr").find(".error").first().focus();
    if (!empty) {
      input.each(function () {
        $(this).parent("td").html($(this).val());
        swal("", "\nBạn Đã Cập Nhật Thành công", "success");
      });
      $(this).parents("tr").find(".edit").toggle();
      $(".add-new").removeAttr("disabled");
    }
  });
  // Edit Hàng
  $(document).on("click", ".edit", function () {
    $(this)
      .parents("tr")
      .find("td:not(:last-child)")
      .each(function () {
        $(this).html(
          '<input type="text" class="form-control" value="' +
            $(this).text() +
            '">'
        );
      });
    $(this).parents("tr").find(".edit").toggle();
    $(".add-new").attr("disabled", "disabled");
  });
  jQuery(function () {
    jQuery(".add").click(function () {
      swal("", "\nBạn Đã Sửa Thành công", "success");
    });
  });
  // Delete Hàng
  $(document).on("click", ".delete", function () {
    $(this).parents("tr").remove();
    swal("", "\nBạn Đã Xóa Thành công", "success");
    $(".add-new").removeAttr("disabled");
  });
});

jQuery(function () {
  jQuery(".cog").click(function () {
    swal("Xin lỗi!", "Tính Năng Này Chưa Có", "error");
  });
});
function onSeachButtonClick(index) {
  let siblings = document.querySelectorAll("#myList li");
  var elem = document.getElementsByClassName("myInput");
  var n = elem.length;
  for (let i = 0; i < n; ++i) {
    elem[i].style.display = "none";
    siblings[i].style.display = "block";
    if (i != index) siblings[i].style.display = "none";
  }
  elem[index].style.display = "block";
  this.onkeyup = (e) => {
    let n = siblings.length;
    if (e.key === "Enter") {
      for (let i = 0; i < n; ++i) {
        siblings[i].style.display = null;
      }
      elem[index].style.display = "none";
    }
  };
}
function onSearchClick() {
  document.getElementById("myList").classList.toggle("hide");
}
function myFunction(index) {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementsByClassName("myInput");
  filter = input[index].value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[index];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      swal("", "Bạn Đã Thành Công", "success");
    }
  }
}
//Thời Gian
function time() {
  var today = new Date();
  var weekday = new Array(7);
  weekday[0] = "Chủ Nhật";
  weekday[1] = "Thứ Hai";
  weekday[2] = "Thứ Ba";
  weekday[3] = "Thứ Tư";
  weekday[4] = "Thứ Năm";
  weekday[5] = "Thứ Sáu";
  weekday[6] = "Thứ Bảy";
  var day = weekday[today.getDay()];
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  nowTime = h + ":" + m + ":" + s;
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = day + ", " + dd + "/" + mm + "/" + yyyy;
  tmp =
    '<i class="fa fa-clock-o" aria-hidden="true"></i> <span class="date">' +
    today +
    " | " +
    nowTime +
    "</span>";
  document.getElementById("clock").innerHTML = tmp;
  clocktime = setTimeout("time()", "1000", "Javascript");

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
}

var sortTable = () => {
  swal("", "Chức năng chúng tôi đang hoàn thiện", "error");
  setTimeout(() => {
    swal("", "Khi hoàn thành chức năng, chúng tôi sẽ thông báo", "success");
  }, 2000);
  setTimeout(() => {
    swal("", "Bạn Đã Lọc thành công", "success");
  }, 4000);
};
