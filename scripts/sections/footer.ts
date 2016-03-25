$("./body") {
	$(".//div[@id='Footer']") {
   		$("./p") {
      		
      		name("div")
      		wrap_text_children("span")

      		insert("div", class: "mw_currency")
      		insert("div", class: "mw_copy")
      		insert("div", class: "mw_moovweb")

      		$("./div[@class='mw_currency']") {
        		move_here("../span[position() < 3]", "bottom")
      		}
      		$("./div[@class='mw_copy']") {
        		insert("span", "Copyright 2015 iGadgetCommerce.")
      		}
      		$("./div[@class='mw_moovweb']") {
        		insert("span", class: "mw_powered", "powered by:")
        		insert("div", class: "sprites-moovweb")
      		} 

          $("./div[@class='mw_moovweb']") {
            $("./div[@class='sprites-moovweb']") {
              wrap("div", class: "mw_image_moovweb")
            }
          }
          

      		$("./*[not(self::div)]") {
        		remove()
      		}   
  		}
	}
}
