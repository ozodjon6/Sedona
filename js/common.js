$(document).ready(function () {
    const button = $('#button');
    const modal = $('#modal');
    const close = $('#close');

    button.on('click', function () {
        modal.addClass('modal_active');
    });

    close.on('click', function () {
        modal.removeClass('modal_active');
    });
});

/*инициализация*/
new WOW().init();

/*Слайдер*/
$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});

// Validate

$('#brif-form').validate({
    rules: {
        username: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        username: {
            required: "Укажите ваш имя",
            minlength: jQuery.validator.format("Осталимьt {0} символов")
        },
        email: 'Нам нужен ваш эмаил'
    }
});

// masked input

$('.phone').mask('+7 (999) 999-99-99');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImJ1dHRvbiIsIm1vZGFsIiwiY2xvc2UiLCJvbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJXT1ciLCJpbml0Iiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2YWxpZGF0ZSIsInJ1bGVzIiwidXNlcm5hbWUiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsImVtYWlsIiwibWVzc2FnZXMiLCJqUXVlcnkiLCJ2YWxpZGF0b3IiLCJmb3JtYXQiLCJtYXNrIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVU7QUFDeEIsVUFBTUMsU0FBU0gsRUFBRSxTQUFGLENBQWY7QUFDQSxVQUFNSSxRQUFRSixFQUFFLFFBQUYsQ0FBZDtBQUNBLFVBQU1LLFFBQVFMLEVBQUUsUUFBRixDQUFkOztBQUVBRyxXQUFPRyxFQUFQLENBQVUsT0FBVixFQUFtQixZQUFZO0FBQzNCRixjQUFNRyxRQUFOLENBQWUsY0FBZjtBQUNILEtBRkQ7O0FBSUFGLFVBQU1DLEVBQU4sQ0FBUyxPQUFULEVBQWtCLFlBQVk7QUFDMUJGLGNBQU1JLFdBQU4sQ0FBa0IsY0FBbEI7QUFDSCxLQUZEO0FBR0gsQ0FaRDs7QUFjQTtBQUNBLElBQUlDLEdBQUosR0FBVUMsSUFBVjs7QUFFQTtBQUNBVixFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQkYsTUFBRSxTQUFGLEVBQWFXLEtBQWIsQ0FBbUI7QUFDZkMsc0JBQWMsQ0FEQztBQUVmQyx3QkFBZ0IsQ0FGRDtBQUdmQyxtQkFBV2QsRUFBRSxlQUFGLENBSEk7QUFJZmUsbUJBQVdmLEVBQUUsZ0JBQUYsQ0FKSTtBQUtmZ0Isb0JBQVksQ0FDUjtBQUNJQyx3QkFBWSxJQURoQjtBQUVJQyxzQkFBVTtBQUNOTiw4QkFBYyxDQURSO0FBRU5DLGdDQUFnQjtBQUZWO0FBRmQsU0FEUSxFQVFSO0FBQ0lJLHdCQUFZLEdBRGhCO0FBRUlDLHNCQUFVO0FBQ05OLDhCQUFjLENBRFI7QUFFTkMsZ0NBQWdCO0FBRlY7QUFGZCxTQVJRO0FBTEcsS0FBbkI7QUFzQkgsQ0F2QkQ7O0FBeUJBOztBQUVBYixFQUFFLFlBQUYsRUFBZ0JtQixRQUFoQixDQUF5QjtBQUNyQkMsV0FBTztBQUNIQyxrQkFBVTtBQUNOQyxzQkFBVSxJQURKO0FBRU5DLHVCQUFXO0FBRkwsU0FEUDtBQUtIQyxlQUFPO0FBQ0hGLHNCQUFVLElBRFA7QUFFSEUsbUJBQU87QUFGSjtBQUxKLEtBRGM7QUFXckJDLGNBQVU7QUFDTkosa0JBQVU7QUFDTkMsc0JBQVUsaUJBREo7QUFFTkMsdUJBQVdHLE9BQU9DLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLHdCQUF4QjtBQUZMLFNBREo7QUFLTkosZUFBTztBQUxEO0FBWFcsQ0FBekI7O0FBb0JBOztBQUVBeEIsRUFBRSxRQUFGLEVBQVk2QixJQUFaLENBQWlCLG9CQUFqQiIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgIGNvbnN0IGJ1dHRvbiA9ICQoJyNidXR0b24nKTtcbiAgICBjb25zdCBtb2RhbCA9ICQoJyNtb2RhbCcpO1xuICAgIGNvbnN0IGNsb3NlID0gJCgnI2Nsb3NlJyk7XG5cbiAgICBidXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBtb2RhbC5hZGRDbGFzcygnbW9kYWxfYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICBjbG9zZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vZGFsLnJlbW92ZUNsYXNzKCdtb2RhbF9hY3RpdmUnKVxuICAgIH0pO1xufSk7XG5cbi8q0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8qL1xubmV3IFdPVygpLmluaXQoKTtcblxuLyrQodC70LDQudC00LXRgCovXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnNsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcHJldkFycm93OiAkKCcuYXJyb3dzX19sZWZ0JyksXG4gICAgICAgIG5leHRBcnJvdzogJCgnLmFycm93c19fcmlnaHQnKSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSk7XG59KTtcblxuLy8gVmFsaWRhdGVcblxuJCgnI2JyaWYtZm9ybScpLnZhbGlkYXRlKHtcbiAgICBydWxlczoge1xuICAgICAgICB1c2VybmFtZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtaW5sZW5ndGg6IDJcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgZW1haWw6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgICAgdXNlcm5hbWU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcItCj0LrQsNC20LjRgtC1INCy0LDRiCDQuNC80Y9cIixcbiAgICAgICAgICAgIG1pbmxlbmd0aDogalF1ZXJ5LnZhbGlkYXRvci5mb3JtYXQoXCLQntGB0YLQsNC70LjQvNGMdCB7MH0g0YHQuNC80LLQvtC70L7QslwiKSAgIFxuICAgICAgICB9LFxuICAgICAgICBlbWFpbDogJ9Cd0LDQvCDQvdGD0LbQtdC9INCy0LDRiCDRjdC80LDQuNC7J1xuICAgIH1cbn0pO1xuXG4vLyBtYXNrZWQgaW5wdXRcblxuJCgnLnBob25lJykubWFzaygnKzcgKDk5OSkgOTk5LTk5LTk5Jyk7Il19
