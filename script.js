const HDT = {
	init: function () {
		const nav_items = document.getElementsByClassName("hdtab_nav_item");
		for (let i = 0; i < nav_items.length; i++) {
			nav_items[i].addEventListener("click", function(){
                HDT.tab(this)
            });
			nav_items[i].addEventListener("keyup", function (e) {
				if (e.keyCode === 32) {
					HDT.tab(this);
				}
			});
		}
	},
	tab: function (el) {       
		const id = el.getAttribute("data-id");
		const active_nav = document.getElementsByClassName("hdtab_nav_item_active");
		while (active_nav.length > 0) {
			active_nav[0].classList.remove("hdtab_nav_item_active");
		}
		el.classList.add("hdtab_nav_item_active");

		const active_content = document.getElementsByClassName("hdtab_content_item_active");
		while (active_content.length > 0) {
			active_content[0].classList.remove("hdtab_content_item_active");
		}

		document.getElementById("hdtab_" + id).classList.add("hdtab_content_item_active");
	},
};
HDT.init();
