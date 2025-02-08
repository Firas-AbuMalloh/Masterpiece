




$(document).ready(function () {
  // تهيئة Owl Carousel
  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true, // إيقاف التشغيل التلقائي عند التمرير فوق السلايدر
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // تفعيل تأثير التمرير عند التمرير فوق الكارد
  $(".custom-carousel .item").hover(function () {
    $(".custom-carousel .item").removeClass("active"); // إزالة النشط من جميع الكاردات
    $(this).addClass("active"); // إضافة النشط للكارد الحالي
  });

  // تفعيل تأثير النقر على الكارد
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").removeClass("active"); // إزالة النشط من جميع الكاردات
    $(this).addClass("active"); // إضافة النشط للكارد الحالي
  });
});

console.clear();

const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");

const applyOverlayMask = (e) => {
  const overlayEl = e.currentTarget;
  const x = e.pageX - cardsContainer.offsetLeft;
  const y = e.pageY - cardsContainer.offsetTop;

  overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
  const overlayCta = document.createElement("div");
  overlayCta.classList.add("cta");
  overlayCta.textContent = ctaEl.textContent;
  overlayCta.setAttribute("aria-hidden", true);
  overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const cardIndex = cards.indexOf(entry.target);
    let width = entry.borderBoxSize[0].inlineSize;
    let height = entry.borderBoxSize[0].blockSize;

    if (cardIndex >= 0) {
      overlay.children[cardIndex].style.width = `${width}px`;
      overlay.children[cardIndex].style.height = `${height}px`;
    }
  });
});

const initOverlayCard = (cardEl) => {
  const overlayCard = document.createElement("div");
  overlayCard.classList.add("card");
  createOverlayCta(overlayCard, cardEl.lastElementChild);
  overlay.append(overlayCard);
  observer.observe(cardEl);
};

cards.forEach(initOverlayCard);
document.body.addEventListener("pointermove", applyOverlayMask);

// الحصول على جميع الأزرار
const tabs = document.querySelectorAll(".tab");

// إضافة حدث النقر لكل زر
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // إزالة الفئة "active" من جميع الأزرار
    tabs.forEach((t) => t.classList.remove("active"));

    // إضافة الفئة "active" للزر المحدد
    tab.classList.add("active");
  });
});

function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}













var cartCount = 0,
	 buy = $('.btn'),
	 span = $('.number'),
	 cart = $('.cart'),
	 quickview = $('.quickviewContainer'),
	 quickViewBtn = $('.quickview'),
	 close = $('.quickviewContainer .close'),
	 minicart = [],
	 totalPrice = [],
	 miniCartPrice;

buy.on('click', addToCart);
quickViewBtn.on('click', quickView);
cart.on('click', showMiniCart);
close.on('click', function(){
	quickview.removeClass('active');
});

function quickView() {
	var description = $(this).parent().find('.description').text(),
		 header = $(this).parent().find('.header').text(),
		 price = $(this).find('.price'),
		 quickViewHeader = $('.quickviewContainer .headline'),
		 quickViewDescription = $('.quickviewContainer .description');
	clearTimeout(timeQuick);
		if(quickview.hasClass('active')){
			quickview.removeClass('active');
			var timeQuick = setTimeout(function(){
				quickview.addClass('active');
			}, 300);
		} else{
			quickview.addClass('active');
		}
	
	quickViewHeader.text(header);
	quickViewDescription.text(description);
}

function showMiniCart() {
	$('.mini').toggleClass('visible');
}

function addToCart() {
	var self = $(this),
		 productName = $(this).parent().find('.header').text(),
		 miniCartNames = $('.products'),
		 names = $('.names'),
		 price = $(this).parent().find('.price').text(),
		 priceInt = parseInt(price);
	
	totalPrice.push(priceInt);
	miniCartPrice = totalPrice.reduce(function(a,b){  return a+b });
	$('.miniprice').text('Total amount: ' + miniCartPrice + ",-");
	minicart.push(productName);
	lastProduct = minicart[minicart.length - 1];
	miniCartNames.text('Your cart lines: ');
	names.append('<p>' + lastProduct + '</p>');
	
	cartCount++;
	span.text(cartCount);
	clearTimeout(time);
	if(span.hasClass('update')){
		span.removeClass('update');
		span.addClass('updateQuantity');
		var time = setTimeout(function(){
			span.removeClass('updateQuantity');
			span.addClass('update');
		}, 700);
	} else{
		span.addClass('update');
	}
	if (cartCount == 1){
		cart.toggleClass('icon-basket icon-basket-loaded');
	}
	
	$(this).addClass('ok');
	var timeOk = setTimeout(function(){
		self.removeClass('ok');
	}, 1000);
}










  // Toggle Balance Visibility
  function toggleBalance() {
    const balanceElement = document.getElementById("balance");
    if (balanceElement.textContent === "******") {
      balanceElement.textContent = "$1,250.00";
    } else {
      balanceElement.textContent = "******";
    }
  }

  // Show QR Code (Placeholder)
  function showQRCode() {
    alert("Show QR Code here!");
  }

  // Transfer Money (Placeholder)
  function transferMoney() {
    alert("Transferring money...");
  }

  // Receive Money (Placeholder)
  function receiveMoney() {
    alert("Receiving money...");
  }

  // Buy Cards (Placeholder)
  function buyCards() {
    alert("Buying cards...");
  }

  // Pay Bills (Placeholder)
  function payBills() {
    alert("Paying bills...");
  }

  // Contactless Payment (Placeholder)
  function contactlessPayment() {
    alert("Contactless payment...");
  }

  // Recharge Balance (Placeholder)
  function rechargeBalance() {
    alert("Recharging balance...");
  }

  // Withdraw Money (Placeholder)
  function withdrawMoney() {
    alert("Withdrawing money...");
  }

  // View Transactions (Placeholder)
  function viewTransactions() {
    alert("Viewing transaction history...");
  }

  // Notifications (Placeholder)
  function notifications() {
    alert("Showing notifications...");
  }

  // Support (Placeholder)
  function support() {
    alert("Contacting support...");
  }

  // Security Settings (Placeholder)
  function securitySettings() {
    alert("Updating security settings...");
  }

  // Share App (Placeholder)
  function shareApp() {
    alert("Sharing app...");
  }

  // Edit Profile (Placeholder)
  function editProfile() {
    window.open('/editProfile.html','_self');
}















