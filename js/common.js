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

// document.querySelector('.menu__button')
// onclick = function () {
//         document.querySelector('.menu__humburger').classList.toggle('menu__humburger_active');
//     }

(function () {

    const menuButton = document.querySelector('.menu__humburger');
    const mobileOpen = document.querySelector('.mobile-nav');

    menuButton.onclick = function () {
        menuButton.classList.toggle('menu__humburger_active');
        mobileOpen.classList.toggle('mobile-nav_open');
    };
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImJ1dHRvbiIsIm1vZGFsIiwiY2xvc2UiLCJvbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJXT1ciLCJpbml0Iiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ2YWxpZGF0ZSIsInJ1bGVzIiwidXNlcm5hbWUiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsImVtYWlsIiwibWVzc2FnZXMiLCJqUXVlcnkiLCJ2YWxpZGF0b3IiLCJmb3JtYXQiLCJtYXNrIiwibWVudUJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJtb2JpbGVPcGVuIiwib25jbGljayIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFVO0FBQ3hCLFVBQU1DLFNBQVNILEVBQUUsU0FBRixDQUFmO0FBQ0EsVUFBTUksUUFBUUosRUFBRSxRQUFGLENBQWQ7QUFDQSxVQUFNSyxRQUFRTCxFQUFFLFFBQUYsQ0FBZDs7QUFFQUcsV0FBT0csRUFBUCxDQUFVLE9BQVYsRUFBbUIsWUFBWTtBQUMzQkYsY0FBTUcsUUFBTixDQUFlLGNBQWY7QUFDSCxLQUZEOztBQUlBRixVQUFNQyxFQUFOLENBQVMsT0FBVCxFQUFrQixZQUFZO0FBQzFCRixjQUFNSSxXQUFOLENBQWtCLGNBQWxCO0FBQ0gsS0FGRDtBQUdILENBWkQ7O0FBY0E7QUFDQSxJQUFJQyxHQUFKLEdBQVVDLElBQVY7O0FBRUE7QUFDQVYsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUJGLE1BQUUsU0FBRixFQUFhVyxLQUFiLENBQW1CO0FBQ2ZDLHNCQUFjLENBREM7QUFFZkMsd0JBQWdCLENBRkQ7QUFHZkMsbUJBQVdkLEVBQUUsZUFBRixDQUhJO0FBSWZlLG1CQUFXZixFQUFFLGdCQUFGLENBSkk7QUFLZmdCLG9CQUFZLENBQ1I7QUFDSUMsd0JBQVksSUFEaEI7QUFFSUMsc0JBQVU7QUFDTk4sOEJBQWMsQ0FEUjtBQUVOQyxnQ0FBZ0I7QUFGVjtBQUZkLFNBRFEsRUFRUjtBQUNJSSx3QkFBWSxHQURoQjtBQUVJQyxzQkFBVTtBQUNOTiw4QkFBYyxDQURSO0FBRU5DLGdDQUFnQjtBQUZWO0FBRmQsU0FSUTtBQUxHLEtBQW5CO0FBc0JILENBdkJEOztBQXlCQTs7QUFFQWIsRUFBRSxZQUFGLEVBQWdCbUIsUUFBaEIsQ0FBeUI7QUFDckJDLFdBQU87QUFDSEMsa0JBQVU7QUFDTkMsc0JBQVUsSUFESjtBQUVOQyx1QkFBVztBQUZMLFNBRFA7QUFLSEMsZUFBTztBQUNIRixzQkFBVSxJQURQO0FBRUhFLG1CQUFPO0FBRko7QUFMSixLQURjO0FBV3JCQyxjQUFVO0FBQ05KLGtCQUFVO0FBQ05DLHNCQUFVLGlCQURKO0FBRU5DLHVCQUFXRyxPQUFPQyxTQUFQLENBQWlCQyxNQUFqQixDQUF3Qix3QkFBeEI7QUFGTCxTQURKO0FBS05KLGVBQU87QUFMRDtBQVhXLENBQXpCOztBQW9CQTs7QUFFQXhCLEVBQUUsUUFBRixFQUFZNkIsSUFBWixDQUFpQixvQkFBakI7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUMsYUFBVzs7QUFFUixVQUFNQyxhQUFhN0IsU0FBUzhCLGFBQVQsQ0FBdUIsa0JBQXZCLENBQW5CO0FBQ0EsVUFBTUMsYUFBYS9CLFNBQVM4QixhQUFULENBQXVCLGFBQXZCLENBQW5COztBQUVBRCxlQUFXRyxPQUFYLEdBQXFCLFlBQVc7QUFDNUJILG1CQUFXSSxTQUFYLENBQXFCQyxNQUFyQixDQUE0Qix3QkFBNUI7QUFDQUgsbUJBQVdFLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCLGlCQUE1QjtBQUNILEtBSEQ7QUFLSCxDQVZBLEdBQUQiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICBjb25zdCBidXR0b24gPSAkKCcjYnV0dG9uJyk7XG4gICAgY29uc3QgbW9kYWwgPSAkKCcjbW9kYWwnKTtcbiAgICBjb25zdCBjbG9zZSA9ICQoJyNjbG9zZScpO1xuXG4gICAgYnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbW9kYWwuYWRkQ2xhc3MoJ21vZGFsX2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgY2xvc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBtb2RhbC5yZW1vdmVDbGFzcygnbW9kYWxfYWN0aXZlJylcbiAgICB9KTtcbn0pO1xuXG4vKtC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPKi9cbm5ldyBXT1coKS5pbml0KCk7XG5cbi8q0KHQu9Cw0LnQtNC10YAqL1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJy5zbGlkZXInKS5zbGljayh7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIHByZXZBcnJvdzogJCgnLmFycm93c19fbGVmdCcpLFxuICAgICAgICBuZXh0QXJyb3c6ICQoJy5hcnJvd3NfX3JpZ2h0JyksXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pO1xufSk7XG5cbi8vIFZhbGlkYXRlXG5cbiQoJyNicmlmLWZvcm0nKS52YWxpZGF0ZSh7XG4gICAgcnVsZXM6IHtcbiAgICAgICAgdXNlcm5hbWU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgbWlubGVuZ3RoOiAyXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVtYWlsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIHVzZXJuYW1lOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogXCLQo9C60LDQttC40YLQtSDQstCw0Ygg0LjQvNGPXCIsXG4gICAgICAgICAgICBtaW5sZW5ndGg6IGpRdWVyeS52YWxpZGF0b3IuZm9ybWF0KFwi0J7RgdGC0LDQu9C40LzRjHQgezB9INGB0LjQvNCy0L7Qu9C+0LJcIikgICBcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWw6ICfQndCw0Lwg0L3Rg9C20LXQvSDQstCw0Ygg0Y3QvNCw0LjQuydcbiAgICB9XG59KTtcblxuLy8gbWFza2VkIGlucHV0XG5cbiQoJy5waG9uZScpLm1hc2soJys3ICg5OTkpIDk5OS05OS05OScpO1xuXG4gICBcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idXR0b24nKVxuLy8gb25jbGljayA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2h1bWJ1cmdlcicpLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVfX2h1bWJ1cmdlcl9hY3RpdmUnKTtcbi8vICAgICB9XG5cbihmdW5jdGlvbiAoKXtcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9faHVtYnVyZ2VyJyk7XG4gICAgY29uc3QgbW9iaWxlT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbmF2Jyk7XG5cbiAgICBtZW51QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51X19odW1idXJnZXJfYWN0aXZlJyk7XG4gICAgICAgIG1vYmlsZU9wZW4uY2xhc3NMaXN0LnRvZ2dsZSgnbW9iaWxlLW5hdl9vcGVuJyk7XG4gICAgfVxuXG59KCkpXG5cbiAgIFxuXG5cbiJdfQ==
