$(document).ready(function() {
    function newItem() {
      let inputValue = $('#input').val();
      if (inputValue === '') {
        alert("You must write something!");
        return;
      }
  
      let li = '<li>' + inputValue + '</li>';
      $('#list').append(li);
  
      $('#input').val('');
  
      $(li).on('dblclick', function() {
        $(this).toggleClass('strike');
      });
  
      let deleteButton = $('<crossOutButton></crossOutButton>');
      deleteButton.text('X');
      $(li).append(deleteButton);
  
      deleteButton.on('click', function() {
        $(li).remove();
      });
  
      $('#list').sortable();
    }
  
    $('#button').on('click', function() {
      newItem();
    });
  });
  